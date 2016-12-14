import { attachScopes, createFilter } from 'rollup-pluginutils';
import { sep } from 'path';
import { walk } from 'estree-walker';
import { parse } from 'acorn';
import MagicString from 'magic-string';

function tryParse ( code, id ) {
	try {
		return parse( code, {
			ecmaVersion: 6,
			sourceType: 'module'
		});
	} catch ( err ) {
		console.warn( `rollup-plugin-inline-functions: failed to parse ${id}. Consider restricting the plugin to particular files via options.include` );
	}
}

export default function inject ( options ) {
  options = options || {};
	const sourceMap = options.sourceMap !== false;

	return {
		name: 'inline-functions',

    resolveId (importee) {
      if (importee === '__inject_isUndefined') {
        return importee;
      }
      return null;
    },

    load (id) {
      if (id === '__inject_isUndefined') {
        return 'function __inject_isUndefined (x) { return typeof x === "undefined" }; export default __inject_isUndefined;';
      }
      return null;
    },

		transform ( code, id ) {
      if (id === '__inject_isUndefined') {
        return null;
      }
			const ast = tryParse( code, id );
			if ( !ast ) return null;

			const magicString = new MagicString( code );

			let newImports = {};
      let newImportHashes = {};

			walk( ast, {
				enter ( node ) {
					if ( sourceMap ) {
						magicString.addSourcemapLocation( node.start );
						magicString.addSourcemapLocation( node.end );
					}

					if (node.type === 'BinaryExpression' &&
					    node.operator === '===' &&
					    node.left.type === 'UnaryExpression' &&
						  node.left.operator === 'typeof' &&
							node.right.type === 'Literal' &&
						  node.right.value === 'undefined') {
						var importName = '__inject_isUndefined';
            var hash;
            if (newImports[importName]) {
              hash = newImportHashes[importName];
            } else {
              hash = `${importName}_${Math.round(1000000000 * Math.random())}`;
              newImports[importName] = `import ${hash} from '${importName}';`;
              newImportHashes[importName] = hash;
            }
						magicString.overwrite(node.start, node.left.argument.start, `${hash}(`);
            magicString.overwrite(node.left.argument.end, node.end, `)`)
					}
				},
				leave ( node ) {
				}
			});

			const keys = Object.keys( newImports );
			if ( !keys.length ) return null;

			const importBlock = keys.map( key => newImports[ key ] ).join( '\n\n' );
			magicString.prepend( importBlock + '\n\n' );

			return {
				code: magicString.toString(),
				map: sourceMap ? magicString.generateMap() : null
			};
		}
	};
}

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

		transform ( code, id ) {
			const ast = tryParse( code, id );
			if ( !ast ) return null;

			const magicString = new MagicString( code );

			let newImports = {};

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
						newImports[importName] = `import { isUndefined as ${importName} } from 'inline-functions';`;
						magicString.overwrite(node.start, node.left.argument.start, `${'__inject_isUndefined'}(`);
            magicString.overwrite(node.left.argument.end, node.end, `)`)
					}
				},
				leave ( node ) {
				}
			});

			const keys = Object.keys( newImports );
			if ( !keys.length ) return null;

			const importBlock = keys.map( hash => newImports[ hash ] ).join( '\n\n' );
			magicString.prepend( importBlock + '\n\n' );

			return {
				code: magicString.toString(),
				map: sourceMap ? magicString.generateMap() : null
			};
		}
	};
}

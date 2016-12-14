import { attachScopes, createFilter } from 'rollup-pluginutils';
import { sep } from 'path';
import { walk } from 'estree-walker';
import { parse } from 'acorn';
import MagicString from 'magic-string';
import patterns from './patterns';

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

  const patternImporteeNames = patterns.map(pattern => `__inject_${pattern.name}__`);
  const patternImporteeNamesToPatterns = {};
  patterns.forEach(pattern => {
    patternImporteeNamesToPatterns[`__inject_${pattern.name}__`] = pattern;
  })

	return {
		name: 'inline-functions',

    resolveId (importee) {
      if (patternImporteeNames.indexOf(importee) !== -1) {
        return importee;
      }
      return null;
    },

    load (id) {
      if (patternImporteeNames.indexOf(id) !== -1) {
        var func = patternImporteeNamesToPatterns[id].func;
        return `${func.toString().replace(/^function/, `function ${id}`)}; export default ${id};`;
      }
      return null;
    },

		transform ( code, id ) {
      if (patternImporteeNames.indexOf(id) !== -1) {
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

          patterns.forEach(pattern => {
            if (pattern.test(node)) {
              var importName = `__inject_${pattern.name}__`;
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
          });
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

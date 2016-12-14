var assert = require('assert');
var path = require('path');
var rollup = require('rollup');
var thePlugin = require('..');
var fs = require('fs');

process.chdir(__dirname);

describe('rollup-plugin-inject', function () {
  it('inserts a basic import statement', function () {
    return rollup.rollup({
      entry: 'samples/basic/input.js',
      plugins: [
        thePlugin()
      ]
    }).then(function (bundle) {
      var generated = bundle.generate();
      var code = generated.code;
      var expected = fs.readFileSync('samples/basic/expected.js', 'utf8');

      console.log('code', code);
      console.log('expected', expected);

      assert.equal(code, expected);
    });
  });
});

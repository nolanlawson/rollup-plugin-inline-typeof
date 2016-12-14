var assert = require('assert')
var rollup = require('rollup')
var thePlugin = require('..')
var fs = require('fs')

process.chdir(__dirname)

/* global describe,it */

describe('rollup-plugin-inline-typeof', function () {
  var tests = fs.readdirSync('samples')

  tests.forEach(function (testName) {
    it(`test: ${testName}`, function () {
      return rollup.rollup({
        entry: `samples/${testName}/input.js`,
        plugins: [
          thePlugin()
        ]
      }).then(function (bundle) {
        var generated = bundle.generate()
        var code = generated.code
        var expected = fs.readFileSync(`samples/${testName}/expected.js`, 'utf8')
        assert.equal(code, expected, generated.code)
      })
    })
  })
})

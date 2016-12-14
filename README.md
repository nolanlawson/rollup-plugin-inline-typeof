rollup-plugin-inline-typeof [![Build Status](https://travis-ci.org/nolanlawson/rollup-plugin-inline-typeof.svg?branch=master)](https://travis-ci.org/nolanlawson/rollup-plugin-inline-typeof)
=====

Rollup plugin to scan for `typeof` invocations (and similar expressions like `foo === undefined`) and replace
them with functions so that JavaScript engines can inline them.

This can reduce bundle size and speed up JavaScript execution, as inspired by
 [InfernoJS](http://survivejs.com/blog/inferno-interview/). See [Why](#why) for more details.

## Installation

```bash
npm install --save-dev rollup-plugin-inject
```

## Usage

```js
var rollup = require('rollup').rollup;
var inlineTypeof = require('rollup-plugin-inline-typeof');

rollup({
  entry: 'main.js',
  plugins: [
    inlineTypeof()
  ]
}).then(...)
```

## Examples

Example input:

```js
if (typeof foo === 'undefined' && foo === null) {
  console.log('yolo');
}
```

Output:

```js
function isNull (x) { return x === null }

function isUndefined (x) { return typeof x === "undefined" }

if (isUndefined(foo) && isNull(foo)) {
  console.log('yolo');
}
```

Or we can get fancier:

```js
if (typeof foo === 'undefined' && foo === null) {
  console.log('yolo');
}

if (typeof foo === 'boolean' || typeof foo !== 'function' || typeof foo !== 'undefined') {
  console.log('haha')
}
```

Output:

```js
function isUndefined (x) { return typeof x === "undefined" }
function isFunction (x) { return typeof x === "function" }
function isBoolean (x) { return typeof x === "boolean" }
function isNull (x) { return x === null }

if (isUndefined(foo) && isNull(foo)) {
  console.log('yolo');
}

if (isBoolean(foo) || !isFunction(foo) || !isUndefined(foo)) {
  console.log('haha');
}
```

## Why?

I was inspired by Dominic Gannaway's [interview about InfernoJS](http://survivejs.com/blog/inferno-interview/) explaining some
of the optimizations they used. This one caught my eye:

> Inferno prefers the usage of helper functions that all get inlined by a JIT compiler – for example, rather than
> doing `foo === null`, doing `isNull(foo)`.
> We found that this really helped improve bundle size, and in some cases it also improved JIT performance.

You can see how Inferno does this using [this utlity module](https://github.com/trueadm/inferno/blob/adcd7a1bd98590224afe0b51c96be0995135477a/src/shared.ts). However, replacing all `typeof` invocations
in a large codebase is time-consuming, and results in harder-to-maintain code. Wouldn't it be nice if we could automate this
at build time?

That's exactly what this plugin does. For each category of `typeof` (including `foo === null` and `foo === undefined`), we define
a Rollup module (e.g. `isNull()`, `isUndefined()`), and replace each invocation of `typeof` with a function call.

Since Rollup handles
all module definitions, we can guarantee that there will only be one instance of each function for the entire bundle, and we can also guarantee that
collisions will be intelligently handled. (Rollup will replace the function names with `isNull$1()` etc. in the case of collisions.)

## Notes

In your list of `plugins`, you should probably put `inlineTypeof()` first because it may conflict with other plugins
(such as `rollup-plugin-commonjs`).

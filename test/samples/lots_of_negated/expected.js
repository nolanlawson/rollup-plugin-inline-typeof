function isNull (x) { return x === null }

function isUndefined (x) { return typeof x === "undefined" }

function isFunction (x) { return typeof x === "function" }

var exp1 = !isFunction(foobar);
var exp2 = !isFunction(foobaz);
var exp3 = !isUndefined(fooqux);
var exp4 = !isUndefined(foohaha);
var exp5 = !isFunction(foobar1);
var exp6 = !isFunction(foobaz2);
var exp7 = !isUndefined(fooqux3);
var exp8 = !isUndefined(foohaha4);
var exp9 = !isUndefined(foohaha5);
var exp10 = !isUndefined(foohaha6);
var exp11 = !isNull(foohaha6);
var exp12 = !isNull(foohaha7);
console.log(exp1, exp2, exp3, exp4, exp5, exp6, exp7, exp8, exp9, exp10, exp11, exp12);

function isFunction (x) { return typeof x === "function" }

var exp1 = isFunction(foobar);
var exp2 = isFunction(foobaz);
var exp3 = isFunction(fooqux);
var exp4 = isFunction(foohaha);
var exp5 = isFunction(foobar1);
var exp6 = isFunction(foobaz2);
var exp7 = isFunction(fooqux3);
var exp8 = isFunction(foohaha4);
console.log(exp1, exp2, exp3, exp4, exp5, exp6, exp7, exp8);

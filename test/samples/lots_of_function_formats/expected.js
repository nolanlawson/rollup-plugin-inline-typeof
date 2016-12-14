function __inject_isFunction__$1 (x) { return typeof x === "function" }

var exp1 = __inject_isFunction__$1(foobar);
var exp2 = __inject_isFunction__$1(foobaz);
var exp3 = __inject_isFunction__$1(fooqux);
var exp4 = __inject_isFunction__$1(foohaha);
var exp5 = __inject_isFunction__$1(foobar1);
var exp6 = __inject_isFunction__$1(foobaz2);
var exp7 = __inject_isFunction__$1(fooqux3);
var exp8 = __inject_isFunction__$1(foohaha4);
console.log(exp1, exp2, exp3, exp4, exp5, exp6, exp7, exp8);

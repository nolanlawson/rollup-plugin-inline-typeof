function __inject_isNull__$1 (x) { return x === null }

function __inject_isUndefined__$1 (x) { return typeof x === "undefined" }

function __inject_isFunction__$1 (x) { return typeof x === "function" }

var exp1 = !__inject_isFunction__$1(foobar);
var exp2 = !__inject_isFunction__$1(foobaz);
var exp3 = !__inject_isUndefined__$1(fooqux);
var exp4 = !__inject_isUndefined__$1(foohaha);
var exp5 = !__inject_isFunction__$1(foobar1);
var exp6 = !__inject_isFunction__$1(foobaz2);
var exp7 = !__inject_isUndefined__$1(fooqux3);
var exp8 = !__inject_isUndefined__$1(foohaha4);
var exp9 = !__inject_isUndefined__$1(foohaha5);
var exp10 = !__inject_isUndefined__$1(foohaha6);
var exp11 = !__inject_isNull__$1(foohaha6);
var exp12 = !__inject_isNull__$1(foohaha7);
console.log(exp1, exp2, exp3, exp4, exp5, exp6, exp7, exp8, exp9, exp10, exp11, exp12);

var exp1 = typeof foobar !== 'function';
var exp2 = typeof foobaz != 'function';
var exp3 = typeof fooqux !== 'undefined';
var exp4 = typeof foohaha != 'undefined';
var exp5 = 'function' !== typeof foobar1;
var exp6 = 'function' !== typeof foobaz2;
var exp7 = 'undefined' != typeof fooqux3;
var exp8 = 'undefined' != typeof foohaha4;
var exp9 = foohaha5 !== undefined;
var exp10 = undefined !== foohaha6;
var exp11 = foohaha6 !== null;
var exp12 = null !== foohaha7;
console.log(exp1, exp2, exp3, exp4, exp5, exp6, exp7, exp8, exp9, exp10, exp11, exp12);
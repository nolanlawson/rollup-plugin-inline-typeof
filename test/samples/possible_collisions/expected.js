function isUndefined$1$1 (x) { return typeof x === "undefined" }

var isBaz = 'foo';
var isUndefined = 'baz';
var isUndefined$1 = 'quuz';
console.log(isBaz, isUndefined, isUndefined$1);
var expression = isUndefined$1$1(foobar);
var exp2 = isUndefined$1$1(foobaz);
console.log(expression, exp2);

function __inject_isUndefined__$1 (x) { return typeof x === "undefined" }

var isBaz = 'foo';
var isUndefined = 'baz';
var isUndefined$1 = 'quuz';
console.log(isBaz, isUndefined, isUndefined$1);
var expression = __inject_isUndefined__$1(foobar);
var exp2 = __inject_isUndefined__$1(foobaz);

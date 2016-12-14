function isUndefined (x) { return typeof x === "undefined" }

var expression = isUndefined(foobar);
var exp2 = isUndefined(foobaz);
console.log(expression, exp2);

function isObject (x) { return typeof x === "object" }

function isString (x) { return typeof x === "string" }

function isBoolean (x) { return typeof x === "boolean" }

function isNumber (x) { return typeof x === "number" }

function isFunction (x) { return typeof x === "function" }

console.log(
  isFunction(foo),
  !isFunction(bar),
  isFunction(foo),
  !isFunction(bar),
  isFunction(foo),
  !isFunction(bar),
  isFunction(foo),
  !isFunction(bar),
  isNumber(foo),
  !isNumber(bar),
  isNumber(foo),
  !isNumber(bar),
  isNumber(foo),
  !isNumber(bar),
  isNumber(foo),
  !isNumber(bar),
  isBoolean(foo),
  !isBoolean(bar),
  isBoolean(foo),
  !isBoolean(bar),
  isBoolean(foo),
  !isBoolean(bar),
  isBoolean(foo),
  !isBoolean(bar),
  isString(foo),
  !isString(bar),
  isString(foo),
  !isString(bar),
  isString(foo),
  !isString(bar),
  isString(foo),
  !isString(bar),
  isObject(foo),
  !isObject(bar),
  isObject(foo),
  !isObject(bar),
  isObject(foo),
  !isObject(bar),
  isObject(foo),
  !isObject(bar)
);

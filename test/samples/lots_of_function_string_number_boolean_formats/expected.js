function __inject_isObject__$1 (x) { return typeof x === "object" }

function __inject_isString__$1 (x) { return typeof x === "string" }

function __inject_isBoolean__$1 (x) { return typeof x === "boolean" }

function __inject_isNumber__$1 (x) { return typeof x === "number" }

function __inject_isFunction__$1 (x) { return typeof x === "function" }

console.log(
  __inject_isFunction__$1(foo),
  !__inject_isFunction__$1(bar),
  __inject_isFunction__$1(foo),
  !__inject_isFunction__$1(bar),
  __inject_isFunction__$1(foo),
  !__inject_isFunction__$1(bar),
  __inject_isFunction__$1(foo),
  !__inject_isFunction__$1(bar),
  __inject_isNumber__$1(foo),
  !__inject_isNumber__$1(bar),
  __inject_isNumber__$1(foo),
  !__inject_isNumber__$1(bar),
  __inject_isNumber__$1(foo),
  !__inject_isNumber__$1(bar),
  __inject_isNumber__$1(foo),
  !__inject_isNumber__$1(bar),
  __inject_isBoolean__$1(foo),
  !__inject_isBoolean__$1(bar),
  __inject_isBoolean__$1(foo),
  !__inject_isBoolean__$1(bar),
  __inject_isBoolean__$1(foo),
  !__inject_isBoolean__$1(bar),
  __inject_isBoolean__$1(foo),
  !__inject_isBoolean__$1(bar),
  __inject_isString__$1(foo),
  !__inject_isString__$1(bar),
  __inject_isString__$1(foo),
  !__inject_isString__$1(bar),
  __inject_isString__$1(foo),
  !__inject_isString__$1(bar),
  __inject_isString__$1(foo),
  !__inject_isString__$1(bar),
  __inject_isObject__$1(foo),
  !__inject_isObject__$1(bar),
  __inject_isObject__$1(foo),
  !__inject_isObject__$1(bar),
  __inject_isObject__$1(foo),
  !__inject_isObject__$1(bar),
  __inject_isObject__$1(foo),
  !__inject_isObject__$1(bar)
);

function isUndefined (x) { return typeof x === "undefined" }

function isFunction (x) { return typeof x === "function" }

function isBoolean (x) { return typeof x === "boolean" }

function isNull (x) { return x === null }

if (isUndefined(foo) && isNull(foo)) {
  console.log('yolo');
}

if (isBoolean(foo) || !isFunction(foo) || !isUndefined(foo)) {
  console.log('haha');
}

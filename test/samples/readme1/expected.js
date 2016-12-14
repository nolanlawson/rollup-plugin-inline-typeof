function isNull (x) { return x === null }

function isUndefined (x) { return typeof x === "undefined" }

if (isUndefined(foo) && isNull(foo)) {
  console.log('yolo');
}

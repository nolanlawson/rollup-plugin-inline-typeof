export default [
  {
    name: 'isUndefined',
    func: function (x) { return typeof x === "undefined" },
    test: function (node) {
      return node.type === 'BinaryExpression' &&
        node.operator === '===' &&
        node.left.type === 'UnaryExpression' &&
        node.left.operator === 'typeof' &&
        node.right.type === 'Literal' &&
        node.right.value === 'undefined';
    }
  }
];
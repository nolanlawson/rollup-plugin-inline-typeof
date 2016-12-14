export default [
  {
    name: 'isUndefined',
    func: function (x) { return typeof x === "undefined" },
    tests: [
      {
        test (node) {
          return node.type === 'BinaryExpression' &&
            (node.operator === '===' || node.operator === '==') &&
            node.left.type === 'UnaryExpression' &&
            node.left.operator === 'typeof' &&
            node.right.type === 'Literal' &&
            node.right.value === 'undefined';
        },
        getOffsets (node) {
          return [node.start, node.left.argument.start, node.left.argument.end, node.end];
        }
      },
      {
        test (node) {
          return node.type === 'BinaryExpression' &&
            (node.operator === '===' || node.operator === '==') &&
            node.right.type === 'UnaryExpression' &&
            node.right.operator === 'typeof' &&
            node.left.type === 'Literal' &&
            node.left.value === 'undefined';
        },
        getOffsets (node) {
          return [node.start, node.right.argument.start, node.right.argument.end, node.end];
        }
      },
      {
        test (node) {
          return node.type === 'BinaryExpression' &&
            node.operator === '===' &&
            node.right.type === 'Identifier' &&
            node.right.name === 'undefined';
        },
        getOffsets (node) {
          return [node.start, node.left.start, node.left.end, node.end];
        }
      },
      {
        test (node) {
          return node.type === 'BinaryExpression' &&
            node.operator === '===' &&
            node.left.type === 'Identifier' &&
            node.left.name === 'undefined';
        },
        getOffsets (node) {
          return [node.start, node.right.start, node.right.end, node.end];
        }
      }
    ]
  },
  {
      name: 'isNull',
      func: function (x) { return x === null },
      tests: [
      {
        test (node) {
          return node.type === 'BinaryExpression' &&
            node.operator === '===' &&
            node.right.type === 'Literal' &&
            node.right.raw === 'null';
        },
        getOffsets (node) {
          return [node.start, node.left.start, node.left.end, node.end];
        }
      },
      {
        test (node) {
          return node.type === 'BinaryExpression' &&
            node.operator === '===' &&
            node.left.type === 'Literal' &&
            node.left.raw === 'null';
        },
        getOffsets (node) {
          return [node.start, node.right.start, node.right.end, node.end];
        }
      }
    ]
  }
];
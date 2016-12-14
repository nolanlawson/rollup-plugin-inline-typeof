var patterns = [
  {
    name: 'isUndefined',
    func: `function (x) { return typeof x === "undefined" }`,
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
      },
      {
        test (node) {
          return node.type === 'BinaryExpression' &&
            (node.operator === '!==' || node.operator === '!=') &&
            node.left.type === 'UnaryExpression' &&
            node.left.operator === 'typeof' &&
            node.right.type === 'Literal' &&
            node.right.value === 'undefined';
        },
        getOffsets (node) {
          return [node.start, node.left.argument.start, node.left.argument.end, node.end];
        },
        negated: true
      },
      {
        test (node) {
          return node.type === 'BinaryExpression' &&
            (node.operator === '!==' || node.operator === '!=') &&
            node.right.type === 'UnaryExpression' &&
            node.right.operator === 'typeof' &&
            node.left.type === 'Literal' &&
            node.left.value === 'undefined';
        },
        getOffsets (node) {
          return [node.start, node.right.argument.start, node.right.argument.end, node.end];
        },
        negated: true
      },
      {
        test (node) {
          return node.type === 'BinaryExpression' &&
            node.operator === '!==' &&
            node.right.type === 'Identifier' &&
            node.right.name === 'undefined';
        },
        getOffsets (node) {
          return [node.start, node.left.start, node.left.end, node.end];
        },
        negated: true
      },
      {
        test (node) {
          return node.type === 'BinaryExpression' &&
            node.operator === '!==' &&
            node.left.type === 'Identifier' &&
            node.left.name === 'undefined';
        },
        getOffsets (node) {
          return [node.start, node.right.start, node.right.end, node.end];
        },
        negated: true
      }
    ]
  },
  {
      name: 'isNull',
      func: `function (x) { return x === null }`,
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
      },
      {
        test (node) {
          return node.type === 'BinaryExpression' &&
            node.operator === '!==' &&
            node.right.type === 'Literal' &&
            node.right.raw === 'null';
        },
        getOffsets (node) {
          return [node.start, node.left.start, node.left.end, node.end];
        },
        negated: true
      },
      {
        test (node) {
          return node.type === 'BinaryExpression' &&
            node.operator === '!==' &&
            node.left.type === 'Literal' &&
            node.left.raw === 'null';
        },
        getOffsets (node) {
          return [node.start, node.right.start, node.right.end, node.end];
        },
        negated: true
      }
    ]
  }
];

['function', 'number', 'boolean', 'string', 'object'].forEach(type => {
  patterns.push(  {
    name: `is${type.charAt(0).toUpperCase() + type.substring(1)}`,
    func: `function (x) { return typeof x === "${type}" }`,
    tests: [
      {
        test (node) {
          return node.type === 'BinaryExpression' &&
            (node.operator === '===' || node.operator === '==') &&
            node.left.type === 'UnaryExpression' &&
            node.left.operator === 'typeof' &&
            node.right.type === 'Literal' &&
            node.right.value === type;
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
            node.left.value === type;
        },
        getOffsets (node) {
          return [node.start, node.right.argument.start, node.right.argument.end, node.end];
        }
      },
      {
        test (node) {
          return node.type === 'BinaryExpression' &&
            (node.operator === '!==' || node.operator === '!=') &&
            node.left.type === 'UnaryExpression' &&
            node.left.operator === 'typeof' &&
            node.right.type === 'Literal' &&
            node.right.value === type;
        },
        getOffsets (node) {
          return [node.start, node.left.argument.start, node.left.argument.end, node.end];
        },
        negated: true
      },
      {
        test (node) {
          return node.type === 'BinaryExpression' &&
            (node.operator === '!==' || node.operator === '!=') &&
            node.right.type === 'UnaryExpression' &&
            node.right.operator === 'typeof' &&
            node.left.type === 'Literal' &&
            node.left.value === type;
        },
        getOffsets (node) {
          return [node.start, node.right.argument.start, node.right.argument.end, node.end];
        },
        negated: true
      }
    ]
  });
});

export default patterns;
const indent = '    ';

const stringifyValue = (element, spaceCount) => {
  if (!element || typeof element !== 'object') {
    return element;
  }
  const lines = Object.entries(element).map(([key, value]) => `${indent.repeat(spaceCount + 1)}${key}: ${stringifyValue(value, spaceCount + 1)}`);
  const result = [
    '{',
    ...lines,
    `${indent.repeat(spaceCount)}}`,
  ];
  return result.join('\n');
};

export default (diffTree) => {
  const inner = (tree, spaceCount) => {
    const mapping = {
      unchanged: (node, count) => `${indent.repeat(count)}    ${node.key}: ${stringifyValue(node.value, count + 1)}`,
      removed: (node, count) => `${indent.repeat(count)}  - ${node.key}: ${stringifyValue(node.value, count + 1)}`,
      added: (node, count) => `${indent.repeat(count)}  + ${node.key}: ${stringifyValue(node.value, count + 1)}`,
      updated: (node, count) => [
        `${indent.repeat(count)}  - ${node.key}: ${stringifyValue(node.oldValue, count + 1)}`,
        `${indent.repeat(count)}  + ${node.key}: ${stringifyValue(node.newValue, count + 1)}`,
      ],
      parent: (node, count) => `${indent.repeat(count)}    ${node.key}: ${inner(node.children, (count + 1))}`,
    };

    const lines = tree.flatMap((node) => mapping[node.type](node, spaceCount));

    const result = [
      '{',
      ...lines,
      `${indent.repeat(spaceCount)}}`,
    ];

    return result.join('\n');
  };

  return inner(diffTree, 0);
};

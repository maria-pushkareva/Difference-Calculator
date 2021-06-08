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
    const lines = tree.flatMap((el) => {
      switch (el.type) {
        case 'unchanged':
          return `${indent.repeat(spaceCount)}    ${el.key}: ${stringifyValue(el.value, spaceCount + 1)}`;
        case 'removed':
          return `${indent.repeat(spaceCount)}  - ${el.key}: ${stringifyValue(el.value, spaceCount + 1)}`;
        case 'added':
          return `${indent.repeat(spaceCount)}  + ${el.key}: ${stringifyValue(el.value, spaceCount + 1)}`;
        case 'updated':
          return [
            `${indent.repeat(spaceCount)} - ${el.key}: ${stringifyValue(el.oldValue, spaceCount + 1)}`,
            `${indent.repeat(spaceCount)} + ${el.key}: ${stringifyValue(el.newValue, spaceCount + 1)}`,
          ];
        case 'parent':
          return `${indent.repeat(spaceCount)}    ${el.key}: ${inner(el.children, (spaceCount + 1))}`;
        default:
          throw new Error('uknown type');
      }
    });
    const result = [
      '{',
      ...lines,
      `${indent.repeat(spaceCount)}}`,
    ];
    return result.join('\n');
  };
  return inner(diffTree, 0);
};

const stringyfyValue = (value) => {
  if (value && typeof value === 'object') {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
}

export default (diffTree) => {
  const inner = (tree, path) => {
    //console.log(tree, 'aa', tree.key, path);
    const lines = tree.flatMap((el) => {
      const newPath = [...path, el.key];
      switch (el.type) {
        case 'unchanged':
          return;
        case 'removed':
          return `Property '${newPath.join('.')}' was removed`;
        case 'added':
          return `Property '${newPath.join('.')}' was added with value: ${stringyfyValue(el.value)}`;
        case 'updated':
          return `Property '${newPath.join('.')}' was updated. From ${stringyfyValue(el.oldValue)} to ${stringyfyValue(el.newValue)}`;
        case 'parent':
          return inner(el.children, newPath);
        default:
          throw new Error('uknown type');
      }
    })
    .filter((el) => el);
    /*const result = [
      '{',
      ...lines,
      `${indent.repeat(spaceCount)}}`,
    ];*/
    return lines.join('\n');
  };
  return inner(diffTree, []);
};

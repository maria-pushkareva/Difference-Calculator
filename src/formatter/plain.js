const stringyfyValue = (value) => {
  if (value && typeof value === 'object') {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

export default (diffTree) => {
  const inner = (tree, path) => {
    const lines = tree.flatMap((el) => {
      const newPath = [...path, el.key];
      let string;
      switch (el.type) {
        case 'unchanged':
          break;
        case 'removed':
          string = `Property '${newPath.join('.')}' was removed`;
          break;
        case 'added':
          string = `Property '${newPath.join('.')}' was added with value: ${stringyfyValue(el.value)}`;
          break;
        case 'updated':
          string = `Property '${newPath.join('.')}' was updated. From ${stringyfyValue(el.oldValue)} to ${stringyfyValue(el.newValue)}`;
          break;
        case 'parent':
          string = inner(el.children, newPath);
          break;
        default:
          throw new Error('uknown type');
      }
      return string;
    });
    return lines.filter((el) => el).join('\n');
  };

  return inner(diffTree, []);
};

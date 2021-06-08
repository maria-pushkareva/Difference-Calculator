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
  const inner = (tree, previousPath) => {
    const mapping = {
      unchanged: () => false,
      removed: (path) => `Property '${path.join('.')}' was removed`,
      added: (path, node) => `Property '${path.join('.')}' was added with value: ${stringyfyValue(node.value)}`,
      updated: (path, node) => `Property '${path.join('.')}' was updated. From ${stringyfyValue(node.oldValue)} to ${stringyfyValue(node.newValue)}`,
      parent: (path, node) => inner(node.children, path),
    };
    const lines = tree.flatMap((node) => {
      const currentPath = [...previousPath, node.key];
      return mapping[node.type](currentPath, node);
    });
    return lines.filter((el) => el).join('\n');
  };

  return inner(diffTree, []);
};

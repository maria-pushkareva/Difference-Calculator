import stylish from './stylish.js';
import plain from './plain.js';

const mapping = {
  stylish,
  plain,
};

export default (diffTree, format) => {
  const formatter = mapping[format];
  return formatter(diffTree);
};

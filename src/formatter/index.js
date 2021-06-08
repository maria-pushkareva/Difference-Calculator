import stylish from './stylish.js';
import plain from './plain.js';

const mapping = {
  stylish,
  plain,
  json: JSON.stringify,
};

export default (diffTree, format) => {
  const formatter = mapping[format];
  return formatter(diffTree);
};

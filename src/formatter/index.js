import stylish from './stylish.js';
import other from './other.js';

const mapping = {
  stylish,
  other,
};

export default (diffTree, format) => {
  const formatter = mapping[format];
  return formatter(diffTree);
};

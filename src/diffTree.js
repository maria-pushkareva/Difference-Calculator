import _ from 'lodash';

const isObject = (el) => (typeof el === 'object' && !Array.isArray(el));

const generateDiffTree = (data1, data2) => {
  const keys = _.uniq([..._.keys(data1), ..._.keys(data2)]).sort();

  const result = keys.map((key) => {
    if (isObject(data1[key]) && isObject(data2[key])) {
      return { key, children: generateDiffTree(data1[key], data2[key]), type: 'parent' };
    }
    if (_.isEqual(data1[key], data2[key])) {
      return { key, value: data1[key], type: 'unchanged' };
    }
    if (!_.has(data1, key)) {
      return { key, value: data2[key], type: 'added' };
    }
    if (!_.has(data2, key)) {
      return { key, value: data1[key], type: 'removed' };
    }
    return {
      key, oldValue: data1[key], newValue: data2[key], type: 'updated',
    };
  });

  return result;
};

export default generateDiffTree;

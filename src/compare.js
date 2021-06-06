import _ from 'lodash';

const compare = (data1, data2) => {
  const keys = _.uniq([...Object.keys(data1), ...Object.keys(data2)]).sort();

  const result = keys.reduce((acc, key) => {
    if (data1[key] === data2[key]) {
      acc.push(`    ${key}: ${data1[key]}`);
      return acc;
    }
    if (!(data2[key])) {
      acc.push(`  - ${key}: ${data1[key]}`);
      return acc;
    }
    if (!(data1[key])) {
      acc.push(`  + ${key}: ${data2[key]}`);
      return acc;
    }
    acc.push(`  - ${key}: ${data1[key]}`);
    acc.push(`  + ${key}: ${data2[key]}`);
    return acc;
  }, []);

  return result;
};

export default compare;

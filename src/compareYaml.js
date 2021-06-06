import _ from 'lodash';

const compareYaml = (json1, json2) =>
/* const obj1 = JSON.parse(json1);
  const obj2 = JSON.parse(json2);

  const keys = _.uniq([...Object.keys(obj1), ...Object.keys(obj2)]).sort();

  const result = keys.reduce((acc, key) => {
    if (obj1[key] === obj2[key]) {
      acc.push(`    ${key}: ${obj1[key]}`);
      return acc;
    }
    if (!(obj2[key])) {
      acc.push(`  - ${key}: ${obj1[key]}`);
      return acc;
    }
    if (!(obj1[key])) {
      acc.push(`  + ${key}: ${obj2[key]}`);
      return acc;
    }
    acc.push(`  - ${key}: ${obj1[key]}`);
    acc.push(`  + ${key}: ${obj2[key]}`);
    return acc;
  }, []); */

  result;
export default compareYaml;

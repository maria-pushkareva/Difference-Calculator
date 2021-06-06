import yaml from 'js-yaml';

const mapping = {
  json: JSON.parse,
  yaml: yaml.load,
  yml: yaml.load,
};

const parse = (data, ext) => {
  const parsedData = mapping[ext](data);
  return parsedData;
};

export default parse;

import fs from 'fs';
import path from 'path';
import compareJson from './compareJson.js';
import compareYaml from './compareYaml.js';

const makeAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);
const getFileData = (filepath) => fs.readFileSync(makeAbsolutePath(filepath));

const mapping = {
  json: compareJson,
  yaml: compareYaml,
  yml: compareYaml,
}

const gendiff = (filepath1, filepath2) => {
  const fileData1 = getFileData(filepath1);
  const fileData2 = getFileData(filepath2);
  const ext = path.extname(filepath2);
  const compareFunction = mapping[ext].slice(1);
  const result = compareFunction(fileData1, fileData2);
  return `{\n${result.join('\n')}\n}`;
};
console.log()
export default gendiff;

import fs from 'fs';
import path from 'path';
import compareJson from './src/compareJson.js';

const makeAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);
const getFileData = (filepath) => fs.readFileSync(makeAbsolutePath(filepath));

const compare = (filepath1, filepath2) => {
  const fileData1 = getFileData(filepath1);
  const fileData2 = getFileData(filepath2);
  const result = compareJson(fileData1, fileData2);
  return `{\n${result.join('\n')}\n}`;
};

/* exists(x, (e) => {
    console.log(e ? 'it exists' : 'no passwd!');
  }); */

export default compare;

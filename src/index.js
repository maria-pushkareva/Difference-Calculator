import fs from 'fs';
import path from 'path';
import compare from './compare.js';
import parse from './parsers.js';

const makeAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);
const getFileData = (filepath) => fs.readFileSync(makeAbsolutePath(filepath));
const getFileExt = (filepath) => path.extname(filepath).slice(1);

const gendiff = (filepath1, filepath2) => {
  const parsedData1 = parse(getFileData(filepath1), getFileExt(filepath1));
  const parsedData2 = parse(getFileData(filepath2), getFileExt(filepath2));

  const result = compare(parsedData1, parsedData2);

  return `{\n${result.join('\n')}\n}`;
};

export default gendiff;

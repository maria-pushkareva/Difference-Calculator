import fs from 'fs';
import path from 'path';
import generateDiffTree from './diffTree.js';
import parse from './parsers.js';
import formatDiffTree from './formatter/index.js';

const makeAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);
const getFileData = (filepath) => fs.readFileSync(makeAbsolutePath(filepath));
const getFileExt = (filepath) => path.extname(filepath).slice(1);

const gendiff = (filepath1, filepath2, format = 'stylish') => {
  const parsedData1 = parse(getFileData(filepath1), getFileExt(filepath1));
  const parsedData2 = parse(getFileData(filepath2), getFileExt(filepath2));

  const diffTree = generateDiffTree(parsedData1, parsedData2);

  return formatDiffTree(diffTree, format);
};

export default gendiff;

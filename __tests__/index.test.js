import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const generatePathName = (fileName) => path.join(__dirname, '..', '__fixtures__', fileName);

const result = fs.readFileSync(generatePathName('result.txt'), 'utf-8');

const testComparing = [
  ['file1.json', 'file2.json'],
  ['file1.yaml', 'file2.yaml'],
];

test.each(testComparing)('gendiff', (file1, file2) => {
  const filepath1 = generatePathName(file1);
  const filepath2 = generatePathName(file2);

  expect(gendiff(filepath1, filepath2).trim()).toEqual(result.trim());
});

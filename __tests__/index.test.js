import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const generatePathName = (fileName) => path.join(__dirname, '..', '__fixtures__', fileName);

const testComparing = [
  ['file1.json', 'file2.json', 'stylish'],
  ['file1.yaml', 'file2.yaml', 'stylish'],
  ['file1.json', 'file2.json', 'plain'],
  ['file1.yaml', 'file2.yaml', 'plain'],
];

test.each(testComparing)('gendiff', (file1, file2, format) => {
  const filepath1 = generatePathName(file1);
  const filepath2 = generatePathName(file2);
  const expected = fs.readFileSync(generatePathName(`expected_${format}.txt`), 'utf-8');

  expect(gendiff(filepath1, filepath2, format).trim()).toEqual(expected.trim());
});

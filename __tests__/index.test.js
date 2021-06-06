import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const generatePathName = (fileName) => path.join(__dirname, '..', '__fixtures__', fileName);

const result = [
  '  - follow: false',
  '    host: hexlet.io',
  '  - proxy: 123.234.53.22',
  '  - timeout: 50',
  '  + timeout: 20',
  '  + verbose: true',
];

const testComparing = [
  ['file1_flat.json', 'file2_flat.json'],
  ['file1_flat.yaml', 'file2_flat.yaml'],
];

test.each(testComparing)('gendiff', (file1, file2) => {
  const filepath1 = generatePathName(file1);
  const filepath2 = generatePathName(file2);

  expect(gendiff(filepath1, filepath2)).toEqual(`{\n${result.join('\n')}\n}`);
});

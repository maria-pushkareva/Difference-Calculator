import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const generatePathName = (fileName) => path.join(__dirname, '..', '__fixtures__', fileName);

test('gendiff', () => {
  const filepath1 = generatePathName('file1_flat.json');
  const filepath2 = generatePathName('file2_flat.json');
  const result = [
    '  - follow: false',
    '    host: hexlet.io',
    '  - proxy: 123.234.53.22',
    '  - timeout: 50',
    '  + timeout: 20',
    '  + verbose: true',
  ];
  expect(gendiff(filepath1, filepath2)).toEqual(`{\n${result.join('\n')}\n}`);
});

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import gendiff from '../src/index.js';

test('gendiff', () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const filepath1 = path.join(__dirname, '..', '__fixtures__', 'file1_flat.json');
  const filepath2 = path.join(__dirname, '..', '__fixtures__', 'file2_flat.json');
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

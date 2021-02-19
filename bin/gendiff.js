#!/usr/bin/env node
import program from 'commander';
import compare from '../index.js';

program
  .version('0.0.1')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => console.log(compare(filepath1, filepath2)))
  .parse(process.argv);

#!/usr/bin/env node
import program from 'commander';
import gendiff from '../index.js';

program
  .version('0.0.1')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2, options) => console.log(gendiff(filepath1, filepath2, options.format)))
  .parse(process.argv);

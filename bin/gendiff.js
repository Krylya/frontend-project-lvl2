#!/usr/bin/env node
//console.log('gendiff');
import { Command } from 'commander/esm.mjs';
const program = new Command();

console.log(program);

program
    .version('1.0.0', '-V, --version', 'output the version number')
    .description('Compares two configuration files and shows a difference.')

if (!program.args.length) program.help();

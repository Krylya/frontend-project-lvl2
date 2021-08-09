import { test, expect } from '@jest/globals';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
const res = readFile('result1.txt').trim();

test('test json', () => {
  expect(genDiff('file1.json', 'file2.json')).toBe(res);
});

test('test yaml', () => {
  expect(genDiff('file1.yml', 'file2.yml')).toBe(res);
});

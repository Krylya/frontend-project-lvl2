import _ from 'lodash';
import path from 'path';
import fs from 'fs';
import parcers from './parsers.js';

// file extention
// path.extname('index.html');
// Returns: '.html'

const comparison = (obj1, obj2, key) => {
  if (_.has(obj1, key) && !_.has(obj2, key)) return `- ${key}: ${obj1[key]}\n`;
  if (_.has(obj2, key) && !_.has(obj1, key)) return `+ ${key}: ${obj2[key]}\n`;
  return obj1[key] === obj2[key] ? `  ${key}: ${obj1[key]}\n` : `- ${key}: ${obj1[key]}\n+ ${key}: ${obj2[key]}\n`;
};

const getData = (fileName) => {
  const getFixturePath = path.resolve(`__fixtures__/${fileName}`);
  const readFile = fs.readFileSync(getFixturePath, 'utf-8');
  return readFile;
};

const genDiff = (filepath1, filepath2) => {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);
  const fileType = filepath1.split('.')[1];

  const obj1 = parcers(data1, fileType);
  const obj2 = parcers(data2, fileType);

  const objectAllKeys = Object.keys({ ...obj1, ...obj2 }).sort();

  let result = '';
  for (let i = 0; i < objectAllKeys.length; i += 1) {
    result += comparison(obj1, obj2, objectAllKeys[i]);
  }
  return `{\n${result}}`;
};
export default genDiff;

import _ from 'lodash';
import parce from './utils.js';

const comparison = (obj1, obj2, key) => {
  if (_.has(obj1, key) && !_.has(obj2, key)) return `- ${key}: ${obj1[key]}\n`;
  if (_.has(obj2, key) && !_.has(obj1, key)) return `+ ${key}: ${obj2[key]}\n`;
  return obj1[key] === obj2[key] ? `  ${key}: ${obj1[key]}\n` : `- ${key}: ${obj1[key]}\n+ ${key}: ${obj2[key]}\n`;
};

const genDiff = (filepath1, filepath2) => {
  const obj1 = parce(filepath1);
  const obj2 = parce(filepath2);

  const objectAllKeys = Object.keys({ ...obj1, ...obj2 }).sort();

  let result = '';
  // for (const key of objectAllKeys) {
  //   result += comparison(obj1, obj2, key);
  // }
  for (let i = 0; i < objectAllKeys.length; i += 1) {
    result += comparison(obj1, obj2, objectAllKeys[i]);
  }
  return `{\n${result}}`;
};
export default genDiff;

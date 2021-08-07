import fs from 'fs';
import path from 'path';

const parce = (file) => {
  const getFixturePath = path.resolve(`__fixtures__/${file}`);
  const rearFile = fs.readFileSync(getFixturePath, 'utf-8');
  const fileType = getFixturePath.split('.')[1];
  if (fileType === 'json') return JSON.parse(rearFile);
  return JSON.parse(rearFile);
};

export default parce;

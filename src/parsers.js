import yaml from 'js-yaml';

const parcers = (data, fileType) => {
  let parse;
  if (fileType === 'json') {
    parse = JSON.parse;
  } else if (fileType === 'yml' || fileType === 'yaml') {
    parse = yaml.safeLoad;
  }

  return parse(data);
};

export default parcers;

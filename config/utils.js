const path = require('path')

const isProduction =
  process.env.NODE_ENV === 'production' ||
  process.env.NODE_ENV === 'testing' ||
  process.env.NODE_ENV === 'prod';

exports.assetsPath = function (_path) {
  return path.posix.join('static', _path);
};

const ENV = process.env.NODE_ENV || 'test';

const testData = require('./test-data');

const data = {
  test: testData,
};

module.exports = data[ENV];

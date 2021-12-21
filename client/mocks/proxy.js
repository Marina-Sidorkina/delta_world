const MockAdapter = require('axios-mock-adapter');
const { proxy } = require('../src/api/proxy/index');

const mock = new MockAdapter(proxy);

module.exports =  { mock };

const MockAdapter = require('axios-mock-adapter');
const { proxy } = require('../src/api/proxy/index');

export const mock = new MockAdapter(proxy);

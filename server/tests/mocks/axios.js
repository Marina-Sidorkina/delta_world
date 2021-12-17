const MockAdapter = require('axios-mock-adapter');
const { dummyApi } = require('../../src/api/dummyApi/index');

const mock = new MockAdapter(dummyApi);

module.exports =  {
  mock,
  getPostsListMockSuccess: () => mock
    .onGet('/post')
    .reply(200, { postsList: 'Value' }),
  getPostsListMockError: () => mock
    .onGet('/post')
    .reply(520)
};

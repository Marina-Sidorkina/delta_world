const MockAdapter = require('axios-mock-adapter');
const { dummyApi } = require('../../src/api/dummyApi/index');

const mock = new MockAdapter(dummyApi);

module.exports =  {
  mock,
  getPostsListMockSuccess: () => mock
    .onGet('/post', { params: { page: 0, limit: 5 } })
    .replyOnce(200, { data: [], page: 0, limit: 5, total: 100 }),
  getPostsListMockError: () => mock
    .onGet('/post', { params: { page: 0, limit: 5 } })
    .replyOnce(520),
  getPostByIdSuccess: () => mock
    .onGet(/\/post\/\w+/)
    .replyOnce(200,
      { id: '12345', image: 'image', owner: {}, text: 'text' }),
  getPostByIdError: () => mock
    .onGet(/\/post\/\w+/)
    .replyOnce(520),
  getPostCommentsListSuccess: () => mock
    .onGet(/\/post\/\w+\/comment/, { params: { page: 0, limit: 1 } })
    .replyOnce(200,
      { data: [
        { id: '12345', message: 'message', owner: {}, post: '12345', publishDate: '2020-03-06T23:00:40.972Z'}
        ]}),
  getPostCommentsListError: () => mock
    .onGet(/\/post\/\w+\/comment/, { params: { page: 0, limit: 1 } })
    .replyOnce(520),
};

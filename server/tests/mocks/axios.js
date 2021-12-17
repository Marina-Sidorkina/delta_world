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
  getUsersListMockSuccess: () => mock
    .onGet('/user', { params: { page: 0, limit: 5 } })
    .replyOnce(200, { data: [], page: 0, limit: 5, total: 100 }),
  getUsersListMockError: () => mock
    .onGet('/user', { params: { page: 0, limit: 5 } })
    .replyOnce(520),
  getUserByIdSuccess: () => mock
    .onGet(/\/user\/\w+/)
    .replyOnce(200,
      { id: '12345', firstName: 'firstName', lastName: 'lastName', title: 'ms',
      gender: 'female', email: 'test@test.com', dateOfBirth:'1972-08-07T22:16:47.420Z',
      phone: '+77777777777', location: {}, registerDate: '2021-06-21T21:02:08.029Z',
        updatedDate: '2021-06-21T21:02:08.029Z'}),
  getUserByIdError: () => mock
    .onGet(/\/user\/\w+/)
    .replyOnce(520),
};
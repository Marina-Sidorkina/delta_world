const MockAdapter = require('axios-mock-adapter');
const { dummyApi } = require('../src/api/dummyApi');

const mock = new MockAdapter(dummyApi);

module.exports =  {
  mock,
  getPostsListMockSuccess: () => mock
    .onGet('/post', { params: { page: 0, limit: 5 } })
    .replyOnce(200, { data: [], page: 0, limit: 5, total: 100 }),
  getPostsListMockError: () => mock
    .onGet('/post', { params: { page: 0, limit: 5 } })
    .replyOnce(520),
  getPostByIdMockSuccess: () => mock
    .onGet(/\/post\/\w+/)
    .replyOnce(200,
      { id: '12345', image: 'image', owner: {}, text: 'text' }),
  getPostByIdMockError: () => mock
    .onGet(/\/post\/\w+/)
    .replyOnce(520),
  getPostCommentsListMockSuccess: () => mock
    .onGet(/\/post\/\w+\/comment/, { params: { page: 0, limit: 1 } })
    .replyOnce(200,
      { data: [
        { id: '12345', message: 'message', owner: {},
          post: '12345', publishDate: '2020-03-06T23:00:40.972Z'}
        ],
        page: 0, limit: 1, total: 100 }),
  getPostCommentsListMockError: () => mock
    .onGet(/\/post\/\w+\/comment/, { params: { page: 0, limit: 1 } })
    .replyOnce(520),
  getUsersListMockSuccess: () => mock
    .onGet('/user', { params: { page: 0, limit: 5 } })
    .replyOnce(200, { data: [], page: 0, limit: 5, total: 100 }),
  getUsersListMockError: () => mock
    .onGet('/user', { params: { page: 0, limit: 5 } })
    .replyOnce(520),
  getUserByIdMockSuccess: () => mock
    .onGet(/\/user\/\w+/)
    .replyOnce(200,
      { id: '12345', firstName: 'firstName', lastName: 'lastName', title: 'ms',
      gender: 'female', email: 'test@test.com', dateOfBirth:'1972-08-07T22:16:47.420Z',
      phone: '+77777777777', location: {}, registerDate: '2021-06-21T21:02:08.029Z',
        updatedDate: '2021-06-21T21:02:08.029Z'}),
  getUserByIdMockError: () => mock
    .onGet(/\/user\/\w+/)
    .replyOnce(520),
  getUserPostsListMockSuccess: () => mock
    .onGet(/\/user\/\w+\/post/, { params: { page: 0, limit: 1 } })
    .replyOnce(200,
      { data: [
          { id: '12345', image: 'image', owner: {}, text: 'text' }
        ],
        page: 0, limit: 1, total: 100 }),
  getUserPostsListMockError: () => mock
    .onGet(/\/user\/\w+\/post/, { params: { page: 0, limit: 1 } })
    .replyOnce(520),
  updateUserByIdMockSuccess: () => mock
    .onPut(/\/user\/\w+/, { firstName: 'TEST10', lastname: 'TEST10' })
    .replyOnce(200, { id: '12345', firstName: 'TEST10', lastName: 'TEST10', title: 'ms',
      gender: 'female', email: 'test@test.com', dateOfBirth:'1972-08-07T22:16:47.420Z',
      phone: '+77777777777', location: {}, registerDate: '2021-06-21T21:02:08.029Z',
      updatedDate: '2021-06-21T21:02:08.029Z'}),
  updateUserByIdMockError: () => mock
    .onPut(/\/user\/\w+/, { firstName: 'TEST10', lastname: 'TEST10' })
    .replyOnce(520),
  createUserMockSuccess: () => mock
    .onPost('/user/create', { firstName: 'TEST10', lastName: 'TEST10',
      gender: 'female', email: 'test@test.com', dateOfBirth:'1972-08-07T22:16:47.420Z',
      phone: '+77777777777'})
    .replyOnce(200, { id: '12345', firstName: 'TEST10', lastName: 'TEST10', title: 'ms',
      gender: 'female', email: 'test@test.com', dateOfBirth:'1972-08-07T22:16:47.420Z',
      phone: '+77777777777', location: {}, registerDate: '2021-06-21T21:02:08.029Z',
      updatedDate: '2021-06-21T21:02:08.029Z'}),
  createUserMockError: () => mock
    .onPost('/user/create', { firstName: 'TEST10', lastName: 'TEST10',
      gender: 'female', email: 'test@test.com', dateOfBirth:'1972-08-07T22:16:47.420Z',
      phone: '+77777777777'})
    .replyOnce(520)
};

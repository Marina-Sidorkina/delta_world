const MockAdapter = require('axios-mock-adapter');
const { dummyApi } = require('../src/api/dummyApi');

const mock = new MockAdapter(dummyApi);

module.exports =  {
  mock,
  updateUserByIdMockSuccess: () => mock
    .onPut(/\/user\/\w+/, { firstName: 'TEST10', lastname: 'TEST10' })
    .replyOnce(200, JSON.stringify({ id: '12345', firstName: 'TEST10', lastName: 'TEST10', title: 'ms',
      gender: 'female', email: 'test@test.com', dateOfBirth:'1972-08-07T22:16:47.420Z',
      phone: '+77777777777', location: {}, registerDate: '2021-06-21T21:02:08.029Z',
      updatedDate: '2021-06-21T21:02:08.029Z'})),
  updateUserByIdMockError: () => mock
    .onPut(/\/user\/\w+/, { firstName: 'TEST10', lastname: 'TEST10' })
    .replyOnce(520),
  createUserMockSuccess: () => mock
    .onPost('/user/create', { firstName: 'TEST10', lastName: 'TEST10',
      gender: 'female', email: 'test@test.com', dateOfBirth:'1972-08-07T22:16:47.420Z',
      phone: '+77777777777'})
    .replyOnce(200,  JSON.stringify({ id: '12345', firstName: 'TEST10', lastName: 'TEST10', title: 'ms',
      gender: 'female', email: 'test@test.com', dateOfBirth:'1972-08-07T22:16:47.420Z',
      phone: '+77777777777', location: {}, registerDate: '2021-06-21T21:02:08.029Z',
      updatedDate: '2021-06-21T21:02:08.029Z'})),
  createUserMockError: () => mock
    .onPost('/user/create', { firstName: 'TEST10', lastName: 'TEST10',
      gender: 'female', email: 'test@test.com', dateOfBirth:'1972-08-07T22:16:47.420Z',
      phone: '+77777777777'})
    .replyOnce(520)
};

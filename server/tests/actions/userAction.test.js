const {
  updateUserByIdMockSuccess, updateUserByIdMockError,
  createUserMockSuccess, createUserMockError
} = require('../../mocks/axios');
const action = require('../../src/actions/userAction');

describe('User Action', () => {
  it('updateUserById should return resolve with data', () => {
    updateUserByIdMockSuccess();

    action.updateUserById('12345', { firstName: 'TEST10', lastname: 'TEST10' })
      .then((response) => {
        expect(response).toStrictEqual({ id: '12345', firstName: 'TEST10', lastName: 'TEST10', title: 'ms',
          gender: 'female', email: 'test@test.com', dateOfBirth:'1972-08-07T22:16:47.420Z',
          phone: '+77777777777', location: {}, registerDate: '2021-06-21T21:02:08.029Z',
          updatedDate: '2021-06-21T21:02:08.029Z'});
      });
  });

  it('updateUserById should return reject with error', () => {
    updateUserByIdMockError();

    action.updateUserById('12345', { firstName: 'TEST10', lastname: 'TEST10' })
      .catch((error) => {
        expect(error.message).toBe('Request failed with status code 520');
      });
  });

  it('createUser should return resolve with data', () => {
    createUserMockSuccess();

    action.createUser({ firstName: 'TEST10', lastName: 'TEST10',
      gender: 'female', email: 'test@test.com', dateOfBirth:'1972-08-07T22:16:47.420Z',
      phone: '+77777777777'})
      .then((response) => {
        expect(response).toStrictEqual({ id: '12345', firstName: 'TEST10', lastName: 'TEST10', title: 'ms',
          gender: 'female', email: 'test@test.com', dateOfBirth:'1972-08-07T22:16:47.420Z',
          phone: '+77777777777', location: {}, registerDate: '2021-06-21T21:02:08.029Z',
          updatedDate: '2021-06-21T21:02:08.029Z'});
      });
  });

  it('createUser should return reject with error', () => {
    createUserMockError();

    action.createUser({ firstName: 'TEST10', lastName: 'TEST10',
      gender: 'female', email: 'test@test.com', dateOfBirth:'1972-08-07T22:16:47.420Z',
      phone: '+77777777777'})
      .catch((error) => {
        expect(error.message).toBe('Request failed with status code 520');
      });
  });
});

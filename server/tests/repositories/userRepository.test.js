const {
  getUsersListMockSuccess, getUsersListMockError,
  getUserByIdMockSuccess, getUserByIdMockError,
  getUserPostsListMockSuccess, getUserPostsListMockError,
} = require('../mocks/axios');
const repository = require('../../src/repositories/userRepository');

describe('User Repository', () => {
  it('getUsersList should return resolve with data', () => {
    getUsersListMockSuccess();

    repository.getUsersList(0, 5)
      .then((response) => {
        expect(response).toStrictEqual({ data: [], page: 0, limit: 5, total: 100 });
      });
  });

  it('getUsersList should return reject with error', () => {
    getUsersListMockError();

    repository.getUsersList(0, 5)
      .catch((error) => {
        expect(error.message).toBe('Request failed with status code 520');
      });
  });

  it('getUserById should return resolve with data', () => {
    getUserByIdMockSuccess();

    repository.getUserById('12345')
      .then((response) => {
        expect(response).toStrictEqual({ id: '12345', firstName: 'firstName', lastName: 'lastName', title: 'ms',
          gender: 'female', email: 'test@test.com', dateOfBirth:'1972-08-07T22:16:47.420Z',
          phone: '+77777777777', location: {}, registerDate: '2021-06-21T21:02:08.029Z',
          updatedDate: '2021-06-21T21:02:08.029Z'});
      });
  });

  it('getUserById should return reject with error', () => {
    getUserByIdMockError();

    repository.getUserById('12345')
      .catch((error) => {
        expect(error.message).toBe('Request failed with status code 520');
      });
  });

  it('getUserPostsList should return resolve with data', () => {
    getUserPostsListMockSuccess();

    repository.getUserPostsList('12345', 0, 1)
      .then((response) => {
        expect(response).toStrictEqual({ data: [
            { id: '12345', image: 'image', owner: {}, text: 'text' }
          ],
          page: 0, limit: 1, total: 100 });
      });
  });

  it('getUserPostsList should return reject with error', () => {
    getUserPostsListMockError();

    repository.getUserPostsList('12345', 0, 1)
      .catch((error) => {
        expect(error.message).toBe('Request failed with status code 520');
      });
  });
})
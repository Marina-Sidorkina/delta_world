const {
  getUsersListMockSuccess, getUsersListMockError
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
})
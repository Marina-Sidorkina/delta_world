const { getPostsListMockSuccess, getPostsListMockError } = require('../mocks/axios');
const repository = require('../../src/repositories/postRepository')

describe('Post Repository', () => {
  it('getPostsList should return resolve with data', () => {
    getPostsListMockSuccess();

    repository.getPostsList()
      .then((response) => {
        expect(response.postsList).toBe('Value');
      });
  });

  it('getPostsList should return reject with error', () => {
    getPostsListMockError();

    repository.getPostsList()
      .catch((error) => {
        expect(error.message).toBe('Request failed with status code 520');
      });
  });
});

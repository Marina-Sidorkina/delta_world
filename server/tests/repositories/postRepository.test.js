const { getPostsListMockSuccess, getPostsListMockError } = require('../mocks/axios');
const repository = require('../../src/repositories/postRepository')

describe('Post Repository', () => {
  it('getPostsList should return resolved', () => {
    getPostsListMockSuccess();

    repository.getPostsList()
      .then((response) => {
        expect(response.postsList).toEqual('Value');
      });
  });

  it('getPostsList should return rejected', () => {
    getPostsListMockError();

    repository.getPostsList()
      .catch((error) => {
        expect(error.message).toBe('Request failed with status code 520');
      });
  });
});

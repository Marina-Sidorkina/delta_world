const {
  getPostsListMockSuccess, getPostsListMockError, getPostByIdMockSuccess,
  getPostByIdMockError, getPostCommentsListMockSuccess, getPostCommentsListMockError
} = require('../../mocks/axios');
const repository = require('../../src/repositories/postRepository');

describe('Post Repository', () => {
  it('getPostsList should return resolve with data', () => {
    getPostsListMockSuccess();

    repository.getPostsList(0, 5)
      .then((response) => {
        expect(response).toStrictEqual({ data: [], page: 0, limit: 5, total: 100 });
      });
  });

  it('getPostsList should return reject with error', () => {
    getPostsListMockError();

    repository.getPostsList(0, 5)
      .catch((error) => {
        expect(error.message).toBe('Request failed with status code 520');
      });
  });

  it('getPostById should return resolve with data', () => {
    getPostByIdMockSuccess();

    repository.getPostById('12345')
      .then((response) => {
        expect(response).toStrictEqual({ id: '12345', image: 'image', owner: {}, text: 'text' });
      });
  });

  it('getPostById should return reject with error', () => {
    getPostByIdMockError();

    repository.getPostById('12345')
      .catch((error) => {
        expect(error.message).toBe('Request failed with status code 520');
      });
  });

  it('getPostCommentsList should return resolve with data', () => {
    getPostCommentsListMockSuccess();

    repository.getPostCommentsList('12345', 0, 1)
      .then((response) => {
        expect(response).toStrictEqual({
          data: [{id: '12345', message: 'message', owner: {}, post: '12345', publishDate: '2020-03-06T23:00:40.972Z'}],
          page: 0, limit: 1, total: 100
        });
      });
  });

  it('getPostCommentsList should return reject with error', () => {
    getPostCommentsListMockError();

    repository.getPostCommentsList('12345', 0, 1)
      .catch((error) => {
        expect(error.message).toBe('Request failed with status code 520');
      });
  });
});

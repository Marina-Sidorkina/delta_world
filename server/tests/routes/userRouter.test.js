const request = require('supertest');
const server = require('../../src/server');
const { mock } = require('../../mocks/axios');

describe('User Router', () => {
  it('getUserList should return user list', async () => {
    mock.onGet('/user')
      .replyOnce(200,
        JSON.stringify({ data: [], page: 0, limit: 5, total: 100 })
      );

    const result = await request(server)
      .get('/proxy/user')
      .send();

    expect(result.statusCode).toBe(200);
    expect(result.text)
      .toEqual(
        JSON.stringify({ data: { data: [], page: 0, limit: 5, total: 100 } })
      );
  });

  it('getUserList should return error', async () => {
    mock.onGet('/user')
      .replyOnce(520);

    const result = await request(server)
      .get('/proxy/user')
      .send();

    expect(result.statusCode).toBe(520);
    expect(JSON.parse(result.text).message).toBe('Request failed with status code 520');
  })
});

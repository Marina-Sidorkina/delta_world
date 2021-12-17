const request = require('supertest');
const server = require('../../src/server');
const { mock } = require('../../mocks/axios');
const user = require('../../mocks/user');
const constants = require('../../mocks/constants');

describe('User Router', () => {
  it('getUserList should return user list', async () => {
    mock.onGet('/user')
      .replyOnce(constants.successStatus, JSON.stringify(user.userListMockData));

    const result = await request(server)
      .get('/proxy/user').send();

    expect(result.statusCode).toBe(constants.successStatus);
    expect(result.text).toEqual(JSON.stringify({ data: user.userListMockData }));
  });

  it('getUserList should return error', async () => {
    mock.onGet('/user').replyOnce(constants.errorStatus);

    const result = await request(server).get('/proxy/user').send();

    expect(result.statusCode).toBe(constants.errorStatus);
    expect(JSON.parse(result.text).message).toBe(constants.errorText);
  })

  it('getUserById should return user', async () => {
    mock
      .onGet(/\/user\/\w+/)
      .replyOnce(constants.successStatus,
        JSON.stringify(user.userMockData));

    const result = await request(server).get('/proxy/user/12345').send();

    expect(result.statusCode).toBe(constants.successStatus);
    expect(result.text).toEqual(JSON.stringify({ data: user.userProcessedMockData }));
  });

  it('getUserById should return error', async () => {
    mock.onGet(/\/user\/\w+/).replyOnce(constants.errorStatus);

    const result = await request(server).get('/proxy/user/12345').send();

    expect(result.statusCode).toBe(constants.errorStatus);
    expect(JSON.parse(result.text).message).toBe(constants.errorText);
  })
});

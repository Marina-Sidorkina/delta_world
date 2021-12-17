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
      .replyOnce(constants.successStatus, JSON.stringify(user.userMockData));

    const result = await request(server).get('/proxy/user/12345').send();

    expect(result.statusCode).toBe(constants.successStatus);
    expect(result.text).toEqual(JSON.stringify({ data: user.userProcessedMockData }));
  });

  it('getUserById should return error', async () => {
    mock.onGet(/\/user\/\w+/).replyOnce(constants.errorStatus);

    const result = await request(server).get('/proxy/user/12345').send();

    expect(result.statusCode).toBe(constants.errorStatus);
    expect(JSON.parse(result.text).message).toBe(constants.errorText);
  });

  it('getUserPostsList should return posts list', async() => {
    mock
      .onGet(/\/user\/\w+\/post/)
      .replyOnce(constants.successStatus, JSON.stringify(user.userPostsListMockData));

    const result = await request(server).get('/proxy/user/12345/post').send();

    expect(result.statusCode).toBe(constants.successStatus);
    expect(result.text).toEqual(JSON.stringify({ data: user.userPostsListMockData }));
  });

  it('getUserPostsList should return error', async() => {
    mock.onGet(/\/user\/\w+\/post/).replyOnce(constants.errorStatus);

    const result = await request(server).get('/proxy/user/12345/post').send();

    expect(result.statusCode).toBe(constants.errorStatus);
    expect(JSON.parse(result.text).message).toBe(constants.errorText);
  });

  it('updateUserById should return updatedData', async() => {
    mock
      .onPut(/\/user\/\w+/)
      .replyOnce(constants.successStatus, JSON.stringify(user.userMockData));

    const result = await request(server).put('/proxy/user/12345').send();

    expect(result.statusCode).toBe(constants.successStatus);
    expect(result.text).toEqual(JSON.stringify({ data: user.userMockData }));
  });

  it('updateUserById should return error', async() => {
    mock.onPut(/\/user\/\w+/).replyOnce(constants.errorStatus);

    const result = await request(server).put('/proxy/user/12345').send();

    expect(result.statusCode).toBe(constants.errorStatus);
    expect(JSON.parse(result.text).message).toBe(constants.errorText);
  });

  it('createUser should return new user data', async() => {
    mock
      .onPost('/user/create')
      .replyOnce(constants.successStatus, JSON.stringify(user.userMockData));

    const result = await request(server).post('/proxy/user/create').send();

    expect(result.statusCode).toBe(constants.successStatus);
    expect(result.text).toEqual(JSON.stringify({ data: user.userMockData }));
  });

  it('createUser should return error', async() => {
    mock.onPost('/user/create').replyOnce(constants.errorStatus);

    const result = await request(server).post('/proxy/user/create').send();

    expect(result.statusCode).toBe(constants.errorStatus);
    expect(JSON.parse(result.text).message).toBe(constants.errorText);
  });
});

const UserService = require('../user_service.js');
const UserClient = require('../user_client.js');
jest.mock('../user_client');

describe('UserService', () => {
  const login = jest.fn(async () => 'success');
  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });
  let userService;

  it('calls login() on UserClient when tries to login', async () => {
    await userService.login('12', '23');
    expect(login.mock.calls.length).toBe(1);
  });
});

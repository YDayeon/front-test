const UserService = require('../user_service.js');
const StubUserClient = require('./stub_user_client.js');

describe('UserService - Stub', () => {
  let userService;

  beforeEach(() => {
    userService = new UserService(new StubUserClient());
  });

  it("shouldn't call network request", async () => {
    const login = await userService.login();
    expect(login.length).toBe(0);
  });
});

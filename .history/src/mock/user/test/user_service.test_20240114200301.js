const UserService = require('../user_service');
const StubUserClient = require('./stub_user_client');

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

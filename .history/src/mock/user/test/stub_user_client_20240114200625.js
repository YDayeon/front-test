class StubUserclient {
  async login(id, password) {
    return { isLoggedIn: true };
  }
}

module.exports = StubUserclient;

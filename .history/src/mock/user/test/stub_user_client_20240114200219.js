class StubUserclient {
  async login(id, password) {
    return { isLoggedIn: false };
  }
}

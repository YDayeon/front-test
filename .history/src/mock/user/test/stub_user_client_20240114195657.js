class StubUserclient {
  async login(id, password) {
    return { isLoggedin: false };
  }
}

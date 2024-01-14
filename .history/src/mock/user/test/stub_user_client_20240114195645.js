class StubUserclient {
  async login() {
    return { isLoggedin: false };
  }
}

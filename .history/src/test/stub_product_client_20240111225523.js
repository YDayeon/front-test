class StubProductClient {
  async() {
    return [
      {
        item: 'Milk',
        available: true,
      },
      { items: '🥕', available: false },
    ];
  }
}

module.exports = StubProductClient;

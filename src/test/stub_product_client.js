class StubProductClient {
  async fetchItems() {
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

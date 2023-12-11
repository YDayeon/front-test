const fetchProduct = require('../async.js');

describe('Async', () => {
  // 사용 지양 (시간이 오래 걸림)
  it('async - done', (done) => {
    fetchProduct().then((data) => {
      // expect(data).toEqual({ item: 'Juice', price: 100 });
      expect(data).toEqual({ item: 'Milk', price: 100 });
      done();
    });
  });

  it('async - return', () => {
    return fetchProduct().then((res) => {
      expect(res).toEqual({ item: 'Milk', price: 100 });
    });
  });

  it('async - await', async () => {
    const product = await fetchProduct();

    expect(product).toEqual({ item: 'Milk', price: 100 });
  });

  if (
    ('async - resolves',
    () => {
      expect(fetchProduct()).resolves.toEqual({
        item: 'Milk',
        price: 100,
      });
    })
  )
    it('async - reject', () => {
      expect(fetchProduct('error')).rejects.toBe('network error');
    });
});

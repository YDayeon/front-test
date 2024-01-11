const ProductService = require('../mock/product/product_service.js');
const StubProductClient = require('./stub_product_client.js');

describe('ProductService - Stub', () => {
  let productService;

  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  });

  if (
    ('should filter out only available items',
    async () => {
      const items = await productService.fetchAvailableItems();
      expect(items.length).toBe(1);
      expect(items).toEqual([
        {
          item: 'Milk',
          available: true,
        },
      ]);
    })
  );
});
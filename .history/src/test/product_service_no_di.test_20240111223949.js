const ProductService = require('../mock/product/product_service_no_di.js');
const ProductClient = require('../mock/product/product_client.js')
jest.mock('../mock/product/product_client.js');

describe('ProductService', () -> {
  const fetchItems = jest.fn(async () => [
    {
      item: 'Milk', available: true,
    {items:'🥕', available:false}}
  ])
})
test('should fetch items', () => {
  const productService = new ProductService();
  const items = [{ available: true }];

  productService.productClient.fetchItems = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(items),
    })
  );

  return productService.productClient
    .fetchItems()
    .then((data) => data.json())
    .then((data) => expect(data).toEqual(items));
});

const ProductService = require('../mock/product/product_service_no_di.js');
const ProductClient = require('../mock/product/product_client.js');
jest.mock('../mock/product/product_client.js');

describe('ProductService', () => {
  const fetchItems = jest.fn(async () => [
    {
      item: 'Milk',
      available: true,
    },
    { items: '🥕', available: false },
  ]);
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });

  let prodcutService;

  beforeEach(() => {
    prodcutService = new ProductService();
  });

  it('should filter out only available items', async () => {
    const items = await prodcutService.fetchAvailableItems();
    expect(items).toEqual([
      {
        item: 'Milk',
        available: true,
      },
    ]);
    expect(items.length).toBe(1);
  });

  it('test', async () => {
    const items = await prodcutService.fetchAvailableItems();
    expect(fetchItems).toHaveBeenCalledTimes(1);
  });
});

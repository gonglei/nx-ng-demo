import { exampleProducts } from './products';

describe('Product', () => {
  it('should work', () => {
    expect(exampleProducts[0].name).toEqual('Product 1');
  });
});

const Stack = require('./stack.js');

describe('stack test', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it('set', () => {
    stack.set(['a', 'b', 'c']);
    expect(stack.list.length).toBe(3);
  });
  it('push', () => {
    stack.set(['a', 'b']);
    stack.push('d');
    expect(stack.list.length).toBe(3);
  });
  it('pop', () => {
    stack.set(['a', 'b', 'c', 'd']);
    stack.pop();
    expect(stack.list[stack.list.length - 1]).toBe('c');
  });
});

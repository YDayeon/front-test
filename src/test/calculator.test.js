const Calculator = require('../calculator.js');

const calculator = new Calculator();

test('calculator set value', () => {
  calculator.set(10);
  expect(calculator.value).toBe(10);

  calculator.clear();
  expect(calculator.value).toBe(0);
});

test('calculator function', () => {
  calculator.set(90);
  calculator.add(5);
  expect(calculator.value).toBe(95);

  // const addOver100 = calculator.add(10);
  // expect(addOver100).toThrow('Value can not be greater than 100');
});

test('calculator substract', () => {
  calculator.set(50);
  calculator.subtract(20);
  expect(calculator.value).toBe(50 - 20);
});

test('calculator multiply', () => {
  calculator.set(5);
  calculator.multiply(10);
  expect(calculator.value).toBe(5 * 10);
});

test('calculator divide', () => {
  calculator.set(20);
  calculator.divide(4);
  expect(calculator.value).toBe(20 / 4);
});

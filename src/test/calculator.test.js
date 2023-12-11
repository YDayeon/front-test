const Calculator = require('../calculator.js');

/**
 * new Calculator()를 계속 새로 생성하는 이유
 * 각각의 테스트는 독립적이어야 한다.
 * 서로에게 영향을 주지 않도록!
 */

describe('Calculator', () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });
  it('inits with 0', () => {
    expect(cal.value).toBe(0);
  });

  it('sets', () => {
    cal.set(5);
    expect(cal.value).toBe(5);
  });

  it('clear', () => {
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it('add', () => {
    cal.set(20);
    cal.add(5);
    expect(cal.value).toBe(25);
  });

  it('add should throw an error if value is greater than 100', () => {
    cal.set(90);

    expect(() => {
      cal.add(20);
    }).toThrow(new Error('Value can not be greater than 100'));
  });

  it('subtract', () => {
    cal.set(20);
    cal.subtract(5);
    expect(cal.value).toBe(15);
  });

  it('multiply', () => {
    cal.set(5);
    cal.multiply(10);
    expect(cal.value).toBe(5 * 10);
  });

  describe('divides', () => {
    it('0 / 0 === NaN', () => {
      cal.divide(0);
      expect(cal.value).toBeNaN();
    });

    it('1 / 0 === Infinity', () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it('4 / 4 === 1', () => {
      cal.set(4);
      cal.divide(4);

      expect(cal.value).toBe(1);
    });
  });
});

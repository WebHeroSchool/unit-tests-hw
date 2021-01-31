const { commission } = require('./commission');

const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;
let flyDate = (days_before_fly) => Date.now() + days_before_fly* MILLISECONDS_IN_DAY;

describe('1 endpoint', () => {
  test('Value on the right of 1 endpoint, days before fly = 11',()=> {
    expect(commission(flyDate(11))).toBe(0);
  });
  test('1 endpoint, days before fly = 10',()=> {
    expect(commission(flyDate(10))).toBe(20);
  });
  test('Value on the left of 1 endpoint, days before fly = 9',()=> {
    expect(commission(flyDate(9))).toBe(20);
  });
});

describe('2 endpoint', () => {
  test('Value on the right of 2 endpoint, days before fly = 6',()=> {
    expect(commission(flyDate(6))).toBe(20);
  });
  test('2 endpoint, days before fly = 10',()=> {
    expect(commission(flyDate(5))).toBe(20);
  });
  test('Value on the left of 2 endpoint, days before fly = 4',()=> {
    expect(commission(flyDate(4))).toBe(50);
  });
});

describe('3 endpoint', () => {
  test('Value on the right of 3 endpoint, days before fly = 2',()=> {
    expect(commission(flyDate(2))).toBe(50);
  });
  test('3 endpoint, days before fly = 1',()=> {
    expect(commission(flyDate(1))).toBe(50);
  });
  test('Value on the left of 3 endpoint, days before fly = 0.9',()=> {
    expect(commission(flyDate(0.9))).toBe(75);
  });
});

describe('4 endpoint', () => {
  test('Value on the right of 4 endpoint, days before fly = 0.1',()=> {
    expect(commission(flyDate(0.1))).toBe(75);
  });
  test('4 endpoint, days before fly = 0',()=> {
    expect(commission(flyDate(0))).toBe(75);
  });
  test('Value on the left of 4 endpoint, days before fly = -1',()=> {
    expect(commission(flyDate(-1))).toBe(100);
  });
});

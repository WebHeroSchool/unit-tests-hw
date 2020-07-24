const {groupBy} = require('./groupBy');
/*
*
1)
*
 */

let fn;
describe('Проверим fn которая групирует по значению', () => {
  beforeEach(() => {
    fn = (value, key, obj) => {
      return value;
    };
      fn2 = (value, key, obj) => {
          return value*2
      };
  });
  test('тест функции', () => {
    expect(groupBy(fn, {a: 1, b: 1, c: 3})).toEqual({'1': [1, 1], '3': [3]});
  });
    test('тест функции когда value поменялся', () => {
        expect(groupBy(fn2, {a: 1, b: 1, c: 3})).toEqual({'2': [1, 1], '6': [3]});
    });
});

describe('Проверим fn которая групирует по ключу', () => {
  beforeEach(() => {
    fn = (value, key, obj) => {
      return key;
    };
  });
  test('тест', () => {
    expect(groupBy(fn, {a: 1, a: 1, b: 3})).toEqual({'a': [1], 'b': [3]});
  });
});

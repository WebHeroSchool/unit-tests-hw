const { commission } = require('./commission');
const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;
let flyDate = a => Date.now() + a * MILLISECONDS_IN_DAY;

describe('Граница flyDate = 10 дней:', () => {
    test('Граница flyDate = 10 дней: ', () => {
        expect(commission(flyDate(10))).toBe(0)
    });

    test('Значение рядом с границей flyDate < 10 дней: ', () => {
        expect(commission(flyDate(9.5))).toBe(20)
    });

    test('Значение рядом с границей flyDate > 10 дней: ', () => {
        expect(commission(flyDate(10.5))).toBe(0)
    });
});

describe('Граница flyDate = 5 дней:', () => {
    test('Граница flyDate = 5 дней: ', () => {
        expect(commission(flyDate(5))).toBe(20)
    });

    test('Значение рядом с границей flyDate > 5 дней: ', () => {
        expect(commission(flyDate(5.5))).toBe(20)
    });

    test('Значение рядом с границей flyDate < 5 дней: ', () => {
        expect(commission(flyDate(4.5))).toBe(50)
    });
});


describe('Граница flyDate = 1 день:', () => {
    test('Граница flyDate = 1 день: ', () => {
        expect(commission(flyDate(1))).toBe(50)
    });

    test('Значение рядом с границей flyDate > 1 день: ', () => {
        expect(commission(flyDate(1.5))).toBe(50)
    });

    test('Значение рядом с границей flyDate < 1 день: ', () => {
        expect(commission(flyDate(0.5))).toBe(75)
    });
});

describe('Граница flyDate = 0 часов:', () => {
    test('Граница flyDate = 0 часов: ', () => {
        expect(commission(flyDate(0))).toBe(100)
    });

    test('Значение рядом с границей  flyDate > 0 часов: ', () => {
        expect(commission(flyDate(0.5))).toBe(75)
    });

    test('Значение рядом с границей текущий день flyDate < 0 часов: ', () => {
        expect(commission(flyDate(-0.5))).toBe(100)
    });
});

const { commission } = require('./commission');

const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;
const currentDay = Date.now();

describe('Если возврат сделан более чем за 10 дней до вылета – комиссия - 0', () => {
    test('за 11 дней до вылета', () => {
        expect(commission(currentDay + MILLISECONDS_IN_DAY * 11)).toBe(0);
    });
    test('за 20 дней до вылета', () => {
        expect(commission(currentDay + MILLISECONDS_IN_DAY * 20)).toBe(0);
    });
    test('за 30 дней до вылета ', () => {
        expect(commission(currentDay + MILLISECONDS_IN_DAY * 11)).toBe(0);
    });
})
describe('Если возврат сделан за 10 суток и менее – комиссия - 20%', () => {
    test('за 10 дней до вылета', () => {
        expect(commission(currentDay + MILLISECONDS_IN_DAY * 10)).toBe(20);
    });
    test('за 8 дней до вылета', () => {
        expect(commission(currentDay + MILLISECONDS_IN_DAY * 8)).toBe(20);
    });
    test('за 6 дней до вылета', () => {
        expect(commission(currentDay + MILLISECONDS_IN_DAY * 6)).toBe(20);
    });
})
describe('Если возврат сделан за 5 суток и менее – комиссия - 50%', () => {
    test('за 5 дней до вылета', () => {
        expect(commission(currentDay + MILLISECONDS_IN_DAY * 5)).toBe(50);
    });
    test('за 4 дней до вылета', () => {
        expect(commission(currentDay + MILLISECONDS_IN_DAY * 4)).toBe(50);
    });
    test('за 3 дней до вылета', () => {
        expect(commission(currentDay + MILLISECONDS_IN_DAY * 3)).toBe(50);
    });
})
describe('Если возврат сделан за 24 часа и менее – комиссия - 75%', () => {
    test('за 24 часа до вылета', () => {
        expect(commission(currentDay + MILLISECONDS_IN_DAY)).toBe(75);
    });
    test('за 12 часов до вылета', () => {
        expect(commission(currentDay + MILLISECONDS_IN_DAY/2)).toBe(75);
    });
    test('за 1 час до вылета', () => {
        expect(commission(currentDay + MILLISECONDS_IN_DAY/24)).toBe(75);
    });
})
describe('Если возврат сделан после вылета – комиссия - 75%', () => {
    test('после вылета', () => {
        expect(commission(-1)).toBe(100);
    });
})


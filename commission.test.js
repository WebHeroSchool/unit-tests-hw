const commission = require('commission.js');
const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;
let flyDate = Date.now() + days_before_fly* MILLISECONDS_IN_DAY;

describe('возврат от 0 до 20%', () => {
	test('время возврата > 10 суток', () => {
		expect(commission(flyDate(11)).toBe(0);
	});
	test('время возврата = 10 суток', () => {
		expect(commission(flyDate(10)).toBe(20);
	});
		test('время возврата < 10 суток', () => {
		expect(commission(flyDate(9)).toBe(20);
	});
});
describe('возврат от 20% до 50%', () => {
	test('время возврата > 5 суток', () => {
		expect(commission(flyDate(6)).toBe(20);
	});
	test('время возврата = 5 суток', () => {
		expect(commission(flyDate(5)).toBe(50);
	});
		test('время возврата < 5 суток', () => {
		expect(commission(flyDate(4)).toBe(50);
	});
});
describe('возврат от 50% до 75%', () => {
	test('время возврата > 1 суток', () => {
		expect(commission(flyDate(2)).toBe(50);
	});
	test('время возврата = 1 сутки', () => {
		expect(commission(flyDate(1)).toBe(50);
	});
		test('время возврата < 1 суток', () => {
		expect(commission(flyDate(0.9)).toBe(75);
	});
});
describe('возврат от 75% до 100%', () => {
	test('время возврата > времени вылета', () => {
		expect(commission(flyDate(0.1)).toBe(75);
	});
	test('время возврата = времени вылета', () => {
		expect(commission(flyDate(0)).toBe(75);
	});
		test('время возврата < времени вылета', () => {
		expect(commission(flyDate(-1)).toBe(100);
	});
});

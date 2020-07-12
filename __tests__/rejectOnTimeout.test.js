const { rejectOnTimeout } = require('../rejectOnTimeout');



describe('Тестирование таймера', () => {
	jest.useFakeTimers();
	let promise;
	let ms;

	beforeEach(() => {
		promise = Promise.resolve(3);
		ms = 10000;
		rejectOnTimeout(promise, ms);
	});

	test('desription', () => {
	  expect(setTimeout).toHaveBeenCalledTimes(1);
	  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);
	});

});




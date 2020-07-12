const { rejectOnTimeout } = require('../rejectOnTimeout');



describe('Тестирование таймера', () => {
	jest.useFakeTimers();
	let promise;
	let ms;

	beforeEach(() => {
		promise = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve('foo');
			}, 2000);
		});
		

		ms = 4000;
		rejectOnTimeout(promise, ms);
	});










	// test('desription', () => {
	//   expect(setTimeout).toHaveBeenCalled();
	//   //expect(mockFn).toHaveBeenCalled();
	//   //expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 200);
	// });

	// 	test('desription', () => {
	// 	rejectOnTimeout(Promise.resolve(3), ms);
	//   jest.runTimersToTime(3000);
	//   expect(clearTimeout).toHaveBeenCalled();
	  
	// });

});




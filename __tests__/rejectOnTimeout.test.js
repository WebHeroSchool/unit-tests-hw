const { rejectOnTimeout } = require('../rejectOnTimeout');



describe('Тестирование таймера', () => {
	jest.useFakeTimers();
	let promise;
	let ms;

	beforeEach(() => {
		promise = new Promise((resolve, reject) => {
			setTimeout(() => {
				const response = 'foo';
				resolve(response);
			}, 2000);
		});
		
		mockFnRes = jest.fn(() => promise);
		//mockFnRej = jest.fn(() => reject('rej'));
		ms = 4000;
		rejectOnTimeout(mockFnRes, ms);
	});


	test('desription', () => {
	 // jest.runTimersToTime(5000);
	  expect(mockFnRes).toEqual('foo');
	  //expect(mockFn).toHaveBeenCalled();
	  //expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 200);
	});

	// 	test('desription', () => {
	// 	rejectOnTimeout(Promise.resolve(3), ms);
	//   jest.runTimersToTime(3000);
	//   expect(clearTimeout).toHaveBeenCalled();
	  
	// });

});




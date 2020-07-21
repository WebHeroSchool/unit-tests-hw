const { rejectOnTimeout } = require('../rejectOnTimeout');



describe('Тестирование таймера', () => {
	jest.useFakeTimers();
	let promise;
	let ms;
	let testVal;

	beforeEach(() => {


	promise = new Promise((resolve, reject) => {
		if(true) {
			const timeOut = setTimeout(() => resolve('foo'), 1000)
		} else {
			const reason = new Error('important error')
			reject(reason)
		}
	})

		
		//mockFnRes = jest.fn(() => promise);
		//mockFnRej = jest.fn(() => reject('rej'));
		ms = 4000;
		testVal = rejectOnTimeout(promise, ms);
	});


	test('test resolved', () => {
		jest.runTimersToTime(3000);
		
	  	//expect(data).toEqual('foo');
	  	return expect(testVal).resolves.toBe('foo');


	  //expect(mockFn).toHaveBeenCalled();
	  //expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 200);
	});

	test('test rejected', () => {
		jest.runTimersToTime(5000);
	  	return expect(testVal).rejects.toMatch('error');
	});
	// 	test('desription', () => {
	// 	rejectOnTimeout(Promise.resolve(3), ms);
	//   jest.runTimersToTime(3000);
	//   expect(clearTimeout).toHaveBeenCalled();
	  
	// });

});




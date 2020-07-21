const { rejectOnTimeout } = require('../rejectOnTimeout');

/**
* Классы эквивалентности:
*
* Класс 1: Сценарий при котором промис успевает исполниться за отведенное ему время и тестируемая функция возвращает resolve() исходного промиса.
*
* Класс 2: Промис исполниться не успевает за отведенное время, а тестируема функция возвращает собственную ошибку.

промис без reject
цепочка промисов
в течение ms, нужно протестировать что выполняется в том числе и на последней милисекунде
*/

describe('Тестирование на промисе с простым поведением.', () => {
	jest.useFakeTimers();
	let promise;
	let ms;
	let testFunc;

	beforeEach(() => {
		promise = new Promise((resolve, reject) => {
			if(true) {
				const timeOut = setTimeout(() => resolve('promise fullfilled'), 1000);
			} else {
				const reason = new Error('important error');
				reject(reason);
			}
		})
		ms = 4000;
		testFunc = rejectOnTimeout(promise, ms);
	});


	test('Сценатий при котором исходный промис успевает завершиться прежде чем тестируемая функция вернет ошибку по таймауту. Прокрутим таймер на величину достаточную для завешения промиса, но недостаточную для ', () => {
		jest.runTimersToTime(ms-1);
		
	  	//expect(data).toEqual('foo');
	  	return expect(testFunc).resolves.toBe('promise fullfilled');


	  //expect(mockFn).toHaveBeenCalled();
	  //expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 200);
	});

	test('test rejected', () => {
		jest.runTimersToTime(ms);
	  	return expect(testVal).rejects.toMatch('error');
	});
	// 	test('desription', () => {
	// 	rejectOnTimeout(Promise.resolve(3), ms);
	//   jest.runTimersToTime(3000);
	//   expect(clearTimeout).toHaveBeenCalled();
	  
	// });

});




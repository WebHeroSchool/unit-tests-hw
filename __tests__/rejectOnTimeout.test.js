const { rejectOnTimeout } = require('../rejectOnTimeout');

/**
* Классы эквивалентности:
*
* Класс 1: Сценарий при котором промис успевает исполниться за отведенное ему время и тестируемая функция возвращает resolve() исходного промиса.
*
* Класс 2: Промис исполниться не успевает за отведенное время, а тестируема функция возвращает собственную ошибку.

цепочка промисов
в течение ms, нужно протестировать что выполняется в том числе и на последней милисекунде
*/

describe('Тестирование на промисе с простым поведением. Граничное значение определим равное ms', () => {
	jest.useFakeTimers();
	let promise;
	let ms;
	let testFunc;
	let resultResolve;
	let mockFn;

	beforeEach(() => {
		mockFn = jest.fn(() => 'test comleted');
		resultResolve = 'promise fullfilled';
		promise = new Promise((resolve, reject) => {
			if(true) {
				const timeOut = setTimeout(() => resolve(mockFn), 1000);
			} else {
				const reason = new Error('important error');
				reject(reason);
			}
		})

	/*	promise = new Promise((resolve) => {
			const timeOut = setTimeout(() => resolve(mockFn), 3800);
		});*/

		ms = 4000;
		testFunc = rejectOnTimeout(promise, ms);
	});


	test('Сценатий при котором исходный промис успевает завершиться прежде чем тестируемая функция вернет ошибку по таймауту. Прокрутим таймер на величину достаточную для завешения промиса, но недостаточную для завершению по таймауту. Проверяем величину таймаута перед граничным значение. Ожидаем resolve():', () => {
		jest.runTimersToTime(ms-1);
  	return expect(testFunc).resolves.toBe(resultResolve);
  	expect(resolve).toHaveBeenCalled(10);
	});
/*
	test('Проверяем величину таймаута на граничном значении. Так же ожидаем resolve():', () => {
		jest.runTimersToTime(ms);
	  	return expect(testFunc).resolves.toBe(resultResolve);
	});

	test('Проверяем величину таймаута после граничного значения. Уже ожидаем reject():', () => {
		jest.runTimersToTime(ms+1);
	  	return expect(testFunc).rejects.toMatch('error');
	});
*/



	// test('Тестируем вызов мока:', () => {
	// 	jest.runTimersToTime(ms);
	// 	return testFunc;
	//   	expect(mockFn).toHaveBeenCalledTimes(2);
	// });

	// 	test('desription', () => {
	// 	rejectOnTimeout(Promise.resolve(3), ms);
	//   jest.runTimersToTime(3000);
	//   expect(clearTimeout).toHaveBeenCalled();
	  
	// });

});




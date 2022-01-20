const { rejectOnTimeout } = require('../rejectOnTimeout');

/**
*
*
*
*
*
*
*
*/




	const mockPromiseResolve = jest.fn(() => new Promise((resolve, reject) => resolve('sucessfull_test')));


// const mockPromiseReject = new Promise((resolve, reject) => {
//   setTimeout(() => reject('test_failure'), 300);
// });
	console.log(mockPromiseResolve())

describe('describe - ', () => {

// beforeEach(() => {
//   jest.useFakeTimers('legacy');
// });

// afterEach(() => {
//   clock.restore();
// });




	// const mockPromiseResolve = Promise.resolve('sucessfull_test')


// test('Ожидаем что мокковый промис перейдет в состояние fulfilled. В ответ получим Resolve моккового промиса (sucessfull_test).', () => {
//  	return expect(rejectOnTimeout(mockPromiseResolve, 400))
//  		.resolves.toMatch('sucessfull_test');
// 	// expect.assertions(1);
// });

		// jest.advanceTimersByTime(10);

test('Ожидаем что возвращаемый промис перейдет в состояние rejected. В ответ получим Reject  возвращаемого промиса (timeout_error).', () => {
  // Wait for one virtual second
	// jest.runAllTimers()

  return expect(rejectOnTimeout(mockPromiseResolve, 100)).rejects.toBe('timeout_error')

  // try {
  //   await rejectOnTimeout(mockPromiseResolve, 100);
  // } catch (e) {
  //   expect(e).toMatch('error');
  // }

	expect.assertions(1);
});

// jest.useFakeTimers();



// test('Ожидаем что мокковый промис перейдет в состояние rejected. В ответ получим Reject  моккового промиса (test_failure).', () => {
// 	return expect(rejectOnTimeout(mockPromiseReject, 400)).rejects.toMatch('test_failure');

// 	expect.assertions(1);
// });


});


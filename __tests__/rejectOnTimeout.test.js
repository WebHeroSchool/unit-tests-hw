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


const mockPromiseResolve = (resolve, reject) => {
  setTimeout(() => resolve('sucessfull_test'), 300);
};

const mockPromiseReject = (resolve, reject) => {
  setTimeout(() => reject('test_failure'), 300);
};

const newPromise = promiseBody => new Promise(promiseBody);


describe('describe - ', () => {
  test('Ожидаем что мокковый промис перейдет в состояние fulfilled. В ответ получим Resolve моккового промиса (sucessfull_test).', () => {
   	return expect(rejectOnTimeout(newPromise(mockPromiseResolve), 500))
   		.resolves.toBe('sucessfull_test');
  });


  test('Ожидаем что возвращаемый промис перейдет в состояние rejected. В ответ получим Reject  возвращаемого промиса (timeout_error).', () => {
    return expect(rejectOnTimeout(newPromise(mockPromiseResolve), 100))
      .rejects.toBe('timeout_error')

  	expect.assertions(1);
  });


  test('Ожидаем что мокковый промис перейдет в состояние rejected. В ответ получим Reject  моккового промиса (test_failure).', () => {
  	return expect(rejectOnTimeout(newPromise(mockPromiseReject), 500))
      .rejects.toBe('test_failure');

  	expect.assertions(1);
  });
});

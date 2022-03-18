const { rejectOnTimeout } = require('../rejectOnTimeout');


/**
* Имеем 2 промиса: передаваемый и возвращаемый.
*
* Будем проверять состояния завершения каждого из них.
*
* Разделим проверку на следующие классы:
* 1 - передаваемый завершился успехом
* 2 - передаваемый завершился ошибкой
* 3 - возвращаемый завершиля успехом
* 4 - возвращаемый завершился ошибкой
*
* Критери определения успеха/ошибки:
* Передаваемый промис успел завершитя до
* того, как истек таймаут возвращаемого.
*
* Обозначим параметр { msForMockPromise }
* как величину времени, нужную для выполнения
* передаваемого промиса.
* Границы эквивалентности проведем относительно
* параметра { msForMockPromise },
* и обозначим их, как:
* { msSucessPromise } >= { msForMockPromise }
* { msFailurePromise } < { msForMockPromise }
*/


const msForMockPromise = 300;
const msSucessPromise = msForMockPromise;
const msFailurePromise = msForMockPromise - 1;

// передавемый промис, возвращает успех:
const mockPromiseResolve = (resolve, reject) => {
  setTimeout(() => resolve('sucessfull_test'), msForMockPromise);
};

// передавемый промис, возвращает провал:
const mockPromiseReject = (resolve, reject) => {
  setTimeout(() => reject('test_failure'), msForMockPromise);
};

// фабрика промисов, что бы результаты тестов не влияли друг на друга:
const newPromise = promiseBody => new Promise(promiseBody);


describe('Тестируем передаваемые промисы:', () => {
  test('Ожидаем что передаваемый промис перейдет в состояние fulfilled. В ответ получим Resolve передаваемого промиса.', () => {
   	return expect(rejectOnTimeout(newPromise(mockPromiseResolve), msSucessPromise))
   		.resolves.toBe('sucessfull_test');
  });


  test('Ожидаем что передаваемый промис перейдет в состояние rejected. В ответ получим Reject  передаваемого промиса.', () => {
  	return expect(rejectOnTimeout(newPromise(mockPromiseReject), msSucessPromise))
      .rejects.toBe('test_failure');

  	expect.assertions(1);
  });
});


describe('Тестируем возвращаемые промисы:', () => {
  test('Ожидаем что возвращаемый промис перейдет в состояние fulfilled. В ответ получим Resolve возвращаемого промиса.', () => {
    return expect(rejectOnTimeout(newPromise(mockPromiseResolve), msSucessPromise))
      .resolves.toBe('sucessfull_test')
  });


  test('Ожидаем что возвращаемый промис перейдет в состояние rejected. В ответ получим Reject возвращаемого промиса.', () => {
    return expect(rejectOnTimeout(newPromise(mockPromiseResolve), msFailurePromise))
      .rejects.toBe('timeout_error')

    expect.assertions(1);
  });
});

const makeRequests = require('../makeRequests');
const axios = require('axios');


jest.mock('axios', () => {
  return jest.fn(index => {
    if (index.url === 'reject') {
      return Promise.reject(new Error('Ошибка запроса'));
    } else {
      return Promise.resolve({ data: answers[index.url] });
    }
  });
});


const answers = [1,2,3,4,5,5,5,5,5,5,5,5,5,5];


const mockUrls = [
  '0',
  '1',
  '2',
  '3',
];

const mockResponse = [
  1,
  2,
  3,
  4,
];

describe('Тестируем количество вызовов Axios за раз', () => {
  beforeEach(() => jest.clearAllMocks());

  test('Максимальное количество вызовов axios - 1', () => {
    makeRequests(mockUrls, 1);

    expect(axios).toHaveBeenCalledTimes(1);
  });

  test('Максимальное количество вызовов axios - 4', () => {
    makeRequests(mockUrls, 4);

    expect(axios).toHaveBeenCalledTimes(4);
  });
});


describe('Тестируем возвращаемые результаты', () => {
  test('ответ resolve', () => {
    return expect(makeRequests(mockUrls, 4)).resolves.toEqual(mockResponse);
  });


  test('ответ reject', () => {
    return expect(makeRequests(['reject'], 4)).rejects.toEqual(Error('Ошибка запроса'));
  });


  test('Тестируем ответы на повторяющиеся запросы', () => {
    const mockRequest = ['0', '0', '2', '3', '4', '4', '4'];
    const mockResponse = [1, 1, 3, 4, 5, 5, 5];
    return expect(
      makeRequests(mockRequest, 1)).resolves.toEqual(mockResponse);
  });
});

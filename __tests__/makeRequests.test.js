const makeRequests = require('../makeRequests');



	const p1 = Promise.resolve(3);
	const p2 = Promise.resolve(4);;
	const p3 = new Promise(resolve => setTimeout(resolve, 1000, "foo"));
	const promises = [p1, p2, p3];

	const mockFunc = jest.fn((p1, p2) => p1, p2);




	test('описание', () => {
	  expect(makeRequests(mockFunc, 1)).toHaveBeenCalled();
	});

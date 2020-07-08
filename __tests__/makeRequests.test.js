const axios = require('../axios');




	const p1 = Promise.resolve(3);
	const p2 = 1337;
	const p3 = new Promise(resolve => setTimeout(resolve, 1000, "foo"));
	const promises = [p1, p2, p3];



	test('описание', () => {
	  return Promise.all(promises).then(data => {
	    expect(data).toEqual([3, 1337, "foo"]);
	  });
	});

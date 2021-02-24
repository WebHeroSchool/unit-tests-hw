const commission = require('commission.js');
const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;


function test(text, days_before_fly, res) {
	let flyDate = Date.now() + days_before_fly* MILLISECONDS_IN_DAY;

	if (commission(flyDate) === res) {
		console.log(text, 'Успех');
	} else {
		console.log(text, 'Ошибка');
	}
}
test(text: 'время возврата > 10 суток', 11, 0);
test(text: 'время возврата = 10 суток', 10, 20);
test(text: 'время возврата < 10 суток', 9, 20);

test(text: 'время возврата > 5 суток', 6, 20);
test(text: 'время возврата = 5 суток', 5, 50);
test(text: 'время возврата < 5 суток', 4, 50);

test(text: 'время возврата > 1 суток', 2, 50);
test(text: 'время возврата = 1 сутки', 1, 50);
test(text: 'время возврата < 1 суток', 0.9, 75);

test(text: 'время возврата < времени вылета', 0.1, 75);
test(text: 'время возврата = времени вылета', 0, 75);
test(text: 'время возврата > времени вылета', -1, 100);
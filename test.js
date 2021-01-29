const { commission } = require('./commission');

const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;

const test = (text, days_before_fly, res) => {
    let flyDate = Date.now() + days_before_fly* MILLISECONDS_IN_DAY;
    if (commission(flyDate)===res) {
      console.log(text, ' Success');
    } else {
      console.log(text, ' Error');
    }
};

test('Value on the right of 1 endpoint, days before fly = 11:', 11, 0);
test('1 endpoint, days before fly = 10:', 10, 20);
test('Value on the left of 1 endpoint, days before fly = 9:', 9, 20);

test('Value on the right of 2 endpoint, days before fly = 6:', 6, 20);
test('2 endpoint, days before fly = 5:', 5, 20);
test('Value on the left of 2 endpoint, days before fly = 4:', 4, 50);

test('Value on the right of 3 endpoint, days before fly = 2:', 2, 50);
test('3 endpoint, days before fly = 1:', 1, 50);
test('Value on the left of 3 endpoint, days before fly = 0.9:', 0.9, 75);

test('Value on the right of 4 endpoint, days before fly = 0.1:', 0.1, 75);
test('4 endpoint, days before fly = 0:', 0, 75);
test('Value on the left of 4 endpoint, days before fly = -1:', -1, 100);

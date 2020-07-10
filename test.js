const { commission } = require('./commission');
const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;

function testCommission(text, a, res) {
    let flyDate = Date.now() + a * MILLISECONDS_IN_DAY;

    if (commission(flyDate) === res) {
        console.log(text, 'Успех');
    } else {
        console.log(text, 'Ошибка');
    }
}

testCommission('Граница flyDate = 10 дней: ', 10, 0);
testCommission('Значение рядом с границей flyDate < 10 дней: ', 9.5, 20);
testCommission('Значение рядом с границей flyDate > 10 дней:: ', 10.5, 0);

testCommission('Граница flyDate = 5 дней: ', 5, 20);
testCommission('Значение рядом с границей flyDate > 5 дней: ', 5.5, 20);
testCommission('Значение рядом с границей flyDate < 5 дней: ', 4.5, 50);

testCommission('Граница flyDate = 1 день: ', 1, 50);
testCommission('Значение рядом с границей flyDate > 1 день: ', 1.5, 50);
testCommission('Значение рядом с границей flyDate < 1 день: ', 0.5, 75);

testCommission('Граница  flyDate = 0 часов: ', 0, 100);
testCommission('Значение рядом с границей  flyDate > 0 часов: ', 0.5, 75);
testCommission('Значение рядом с границей текущий день flyDate < 0 часов: ', -0.5, 100);


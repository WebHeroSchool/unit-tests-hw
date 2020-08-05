const {commissionTest} = require('./commission-test');

const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;
const currentDay = Date.now();

commissionTest('Если возврат сделан более чем за 10 дней до вылета – комиссия - 0', currentDay + MILLISECONDS_IN_DAY * 11  , 0);

commissionTest('Если возврат сделан за 10 суток – комиссия 20%:', currentDay + MILLISECONDS_IN_DAY * 10 , 20);
commissionTest('Если возврат сделан за  8 суток – комиссия 20%:' , currentDay + MILLISECONDS_IN_DAY * 8 , 20);
commissionTest('Если возврат сделан за  6 суток – комиссия 20%:' , currentDay + MILLISECONDS_IN_DAY * 6 , 20);

commissionTest('Если возврат сделан за  5 суток – комиссия 50%:' , currentDay + MILLISECONDS_IN_DAY * 5 , 50);
commissionTest('Если возврат сделан за  4 суток – комиссия 50%:' , currentDay + MILLISECONDS_IN_DAY * 4 , 50);
commissionTest('Если возврат сделан за  3 суток – комиссия 50%:' , currentDay + MILLISECONDS_IN_DAY * 3 , 50);


commissionTest('Если возврат сделан менее чем за 24 часа – комиссия 75%:' , currentDay + MILLISECONDS_IN_DAY , 75);
commissionTest('Если возврат сделан менее чем за 12 часа – комиссия 75%:' , currentDay + MILLISECONDS_IN_DAY/2 , 75);
commissionTest('Если возврат сделан менее чем за 1 час – комиссия 75%:' , currentDay + MILLISECONDS_IN_DAY/24 , 75);

commissionTest('Если возврат сделан после вылета – комиссия 100%:' , -1, 100);

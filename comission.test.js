const {commission} = require("./commission");

const now = Date.now();
const hour = 60 * 60 * 1000
const day = 24 * hour;
const fiveDays = day * 5;
const tenDays = day * 10;

const test = (text, fn) => {
  const color = fn() === true ? '\x1b[32m' : '\x1b[31m';
  console.log(color, "✓", text);
};

test("Если бесконечно опоздал, то комиссия 100%", () => commission(now - Infinity) === 100);
test("Если опоздал на 1 час, то комиссия 100%", () => commission(now - hour) === 100);
test("Если вернул одновременно с вылетом, то комиссия 75%", () => commission(now) === 75);
test("Если вернул за час до вылета, то комиссия 75%", () => commission(now + hour) === 75);
test("Если вернул за 23 часа до вылета, то комиссия 75%", () => commission(now + hour * 23) === 75);
test("Если вернул за сутки до вылета, то комиссия 50%", () => commission(now + day) === 50);
test("Если вернул за 25 часов до вылета, то комиссия 50%", () => commission(now + hour * 25) === 50);
test("Если вернул за 5 суток без одного часа до вылета, то комиссия 50%", () => commission(now + fiveDays - hour) === 50);
test("Если вернул за 5 суток до вылета, то комиссия 20%", () => commission(now + fiveDays) === 20);
test("Если вернул за 5 суток и один час до вылета, то комиссия 20%", () => commission(now + fiveDays + hour) === 20);
test("Если вернул за 10 суток до вылета, то комиссия 20%", () => commission(now + tenDays) === 20);
test("Если вернул за 10 суток и один час до вылета, то комиссия 0", () => commission(now + tenDays) === 0);
test("Если бесконечно рано вернул, то комиссия 0", () => commission(now + Infinity) === 0);
test("Если ввел в функцию строку, то получаю ошибку", () => {
  try {
    commission("5 дней")
  } catch {
    return true;
  }
});

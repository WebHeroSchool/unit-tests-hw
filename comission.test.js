const {commission} = require("./commission");

const now = Date.now();
const hour = 60 * 60 * 1000;
const day = 24 * hour;
const fiveDays = day * 5;
const tenDays = day * 10;

test("Если бесконечно опоздал, то комиссия 100%", () => expect(commission(now - Infinity)).toBe(100));
test("Если опоздал на 1 час, то комиссия 100%", () => expect(commission(now - hour)).toBe(100));
test("Если вернул одновременно с вылетом, то комиссия 75%", () => expect(commission(now)).toBe(75));
test("Если вернул за час до вылета, то комиссия 75%", () => expect(commission(now + hour)).toBe(75));
test("Если вернул за 23 часа до вылета, то комиссия 75%", () => expect(commission(now + hour * 23)).toBe(75));
test("Если вернул за сутки до вылета, то комиссия 50%", () => expect(commission(now + day)).toBe(50));
test("Если вернул за 25 часов до вылета, то комиссия 50%", () => expect(commission(now + hour * 25)).toBe(50));
test("Если вернул за 5 суток без одного часа до вылета, то комиссия 50%", () => expect(commission(now + fiveDays - hour)).toBe(50));
test("Если вернул за 5 суток до вылета, то комиссия 20%", () => expect(commission(now + fiveDays)).toBe(20));
test("Если вернул за 5 суток и один час до вылета, то комиссия 20%", () => expect(commission(now + fiveDays + hour)).toBe(20));
test("Если вернул за 10 суток до вылета, то комиссия 20%", () => expect(commission(now + tenDays)).toBe(20));
test("Если вернул за 10 суток и один час до вылета, то комиссия 0", () => expect(commission(now + tenDays)).toBe(0));
test("Если бесконечно рано вернул, то комиссия 0", () => expect(commission(now + Infinity)).toBe(0));
test("Если ввел в функцию строку, то получаю ошибку", () => expect(() => commission("5 дней")).toThrow());

'use strict';

const now = new Date(); // текущая дата
// new Date.parse('2020-05-01');
// const now2 = new Date('2020-12-01'); // передача даты
// const now3 = new Date(2020, 5, 1, 20); // передача даты
// const now4 = new Date(0); // передача миллисекунд

console.log(now.setHours(18)); // задание часов
console.log(now);

// console.log(now.getFullYear()); // метод получения года
// console.log(now.getMonth()); // метод получения месяца
// console.log(now.getDate()); // метод получения дня
// console.log(now.getHours()); // метод получения часов
// console.log(now.getMinutes()); // метод получения минут
// console.log(now.getSeconds()); // метод получения секунд
// console.log(now.getMilliseconds()); // метод получения миллисекунд
// console.log(now.getDay()); // метод получения номера дня недели

// console.log(now.getUTCHours()); // метод получения часов по UTC

// console.log(now.getTimezoneOffset()); // разница в минутах с UTC
// console.log(now.getTime()); // количество миллисекунд с 1970-го

/* Пример вычисления выполнения цикла */
let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);
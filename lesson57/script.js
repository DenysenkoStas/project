'use strict';

/* Методы перебора массивов */
// filter - используется для фильтрации массива через функцию
const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter(function (name) {
    return name.length < 5;
});

console.log(shortNames);

// map - используется для трансформации массива
const answers = ['IvAn', 'AnnA', 'Hello'];

const result = answers.map(item => item.toLowerCase());

console.log(result);

// every/some - используются для проверки массива. Возвращают true или false 
const some = [4, 'qwq', 'dfssdfsdf'];

console.log(some.some(item => typeof (item) === 'number'));
console.log(some.every(item => typeof (item) === 'number'));

/* reduce - используются для вычисления какого-нибудь единого значения на основе всего массива.
Для собирания/схлопывания массива в одно целое */
// сумма всех чисел
const arr = [4, 5, 1, 3, 2, 6];

const res = arr.reduce((sum, current) => sum + current, 3); // 3 - начальный элемент массива
console.log(res);

// вывод всех строк через запятую 
const arr2 = ['apple', 'pear', 'plum'];

const res2 = arr2.reduce((sum, current) => `${sum}, ${current}`);
console.log(res2);

/* Пример получения ключей только со свойством 'persone' */
const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);
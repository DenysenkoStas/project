"use strict";

const arr = [1, 2, 4];
console.log(arr.length);

const str = "test";
// console.log(str.length);
// console.log(str[2]);
// console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());
console.log(str);

let fruit = "Some fruit";
let search = "fruit";

if (fruit.indexOf(search) != -1) {
    console.log(`Ваша слово начинается с ${fruit.indexOf(search)} символа`);
} else {
    console.log("Вашего слова нет в предложении");
}

const logg = "Hello World!";
console.log(logg.slice(6, 11));
console.log(logg.substring(6, 11));
console.log(logg.substr(6, 6));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));
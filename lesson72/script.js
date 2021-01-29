/* ES6 Modules. Работает с ипользованием Webpack */
/* main.js */
export let one = 1; // экспорт

let two = 2;
export {two}; // экспорт (именованный синтаксис)

// экспортирование на прямую (должен быть только один в файле)
export default function sayHi() {
    console.log('Hello');
}

/* script.js */
import {two} from './main'; // импорт
import {one as first} from './main'; // импорт и переименование
import * as data from './main'; // импорт всего
import sayHi from './main'; // импорт, если используется default

console.log(`${first} and ${data.two}`);
sayHi();
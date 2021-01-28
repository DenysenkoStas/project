'use strict';

/* Регулярные выражения */
// new RegExp('pattern', 'flags'); - синтаксис
// /pattern/f - более простой синтаксис

const ans = prompt('Введите ваше число');

const reg = /\d/g;
console.log(ans.match(reg));

const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i));

/* классы */
// \d - ищем цифры
// \w - ищем все слова/буквы
// \s - ищем пробелы
/* классы */

/* обратные классы */
// \D - ищем не цифры
// \W - ищем не слова/буквы
// \S - ищем не пробелы
/* обратные классы */

/* флаги */
// i - вне зависимости от регистра
// g - несколько вхождений
// m - многострочный режим
/* флаги */

console.log(ans.search(reg));
console.log(ans.match(reg));

const pass = prompt('Password');
console.log(pass.replace(/./g, '*')); // замена всех символова на *

console.log('12-34-56'.replace(/-/g, ':')); // замена - на :
'use strict';

/* Прием модуль, как и зачем его использовать */
const number = 1;

// анонимная самовызывающиеся ф-я
(function(){
    let number = 2;
    console.log(number);
    console.log(number + 3);
}());

console.log(number);

// использование объектного интерфейса
const user = (function(){
    const privat = function() {
        console.log('I am privat!');
    };

    return {
        sayHello: privat
    };
}());

user.sayHello();
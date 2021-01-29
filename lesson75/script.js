'use strict';

/* Ошибки. Как избежать “поломки” своего кода */
// конструкция try...catch
try {
    console.log('Normal');
    console.log(a);
    console.log('result');
} catch (error) { // выполнится, если есть ошибка в try
    console.log(error.name); // имя ошибки
    console.log(error.message); // сообщение ошибки
    console.log(error.stack); // стек ошибки
} finally { // выполняется всегда
    console.log('finally');
}

console.log('Still normal');

// событие при нажатии на кнопку
try {
    document.querySelector('.active').addEventListener('click', () => {
        console.log('click');
    });
} catch (e) {
    console.log(e);
}

console.log('normal');
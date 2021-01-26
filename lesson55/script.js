'use strict';

console.log('Запрос данных...');

/* Пример создания промисов */
const req = new Promise((resolve, reject) => { // reject - когда произошла ошибка
    setTimeout(() => {
        console.log('Подготовка данных...');

        const product = {
            name: 'TV',
            price: 2000
        };

        resolve(product); // передача выполненного результата
    }, 2000);
});
// then - метод выполнения на промисе в случае положительного исхода
req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product); // передача выполненного результата
        }, 2000);
    });
}).then(data => { // data приходят с предыдущей ф-и resolve
    data.modify = true; // добавление свойства в объект
    return data;
}).then(data => {
    console.log(data);
}).catch(() => { // обработка когда произошла ошибка
    console.error('Произошла ошибка');
}).finally(() => { // finally используется в конце
    console.log('Finally');
});

/* Методы all и race */
const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

// all - для убеждения, что все промисы отработали
Promise.all([test(1000), test(2000)]).then(() => {
    console.log('All'); // будет выводится, если все промисы отработали
});
// race - выполняет свои действия, когда самый первый промис уже отработал
Promise.race([test(1000), test(2000)]).then(() => {
    console.log('All');
});
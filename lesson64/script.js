'use strict';

/* Как сохранить данные без БД. Работа с localStorage */
// localStorage.setItem('number', 5); // задать значение
// localStorage.removeItem('number'); // удалить значение
// localStorage.clear(); // очистить хранилище localStorage
// console.log(localStorage.getItem('number')); // получить значение

// изменения формы
const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('.wrapper'),
      change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = 'white';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

// запись объекта в localStorage
const persone = {
    name: 'Alex',
    age: '25'
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex', serializedPersone);

console.log(JSON.parse(localStorage.getItem('alex'))); // для просмотра в консоле
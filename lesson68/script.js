'use strict';

/* Геттеры и сеттеры (свойства объектов) */
const persone = {
    name: 'Alex',
    age: 25,
    // геттер
    get userAge() {
        return this.age;
    },
    // сеттер
    set userAge(num) {
        this.age = num;
    }
};

console.log(persone.userAge); // вызов геттер
console.log(persone.userAge = 30); // присвоение сеттера
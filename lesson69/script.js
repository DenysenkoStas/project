'use strict';

/* Инкапсуляция */
// для функций
function User(name, age) {
    this.name = name;
    let userAge = age; // инкапсуляция возраста

    this.say = function () {
        console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
    };

    // геттер для получения возраста
    this.getAge = function () {
        return userAge;
    };

    // сеттер для смены возраста с проверкой
    this.setAge = function (age) {
        if(typeof age === 'number' && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log('Недопустимое значение!')
        }
    };
}

const ivan = new User('Ivan', 27); // создание нового пользователя
console.log(ivan.name); // получение имени
console.log(ivan.getAge()); // получение возраста

ivan.setAge(30); // смена возраста
ivan.setAge(300); // смена возраста с ошибкой
console.log(ivan.getAge()); // получение возраста

ivan.say();

// для классов
class User2 {
    constructor(name, age) {
        this.name = name;
        this._age = age; // инкапсуляция возраста
    }

    say () {
        console.log(`Имя пользователя: ${this.name}, возраст ${this._age}`);
    }

    // геттер для получения возраста
    get age() {
        return this._age;
    }

    // сеттер для смены возраста с проверкой
    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недоспутимое значение!');
        }
    }
}

const ivan2 = new User2('Ivan', 27); // создание нового пользователя
console.log(ivan2.age); // получение возраста
ivan2.age = 99; // смена возраста
console.log(ivan2.age); // получение возраста

ivan2.say();

// для классов (экспериментальный синтаксис - приватное свойство)
class User3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    #surname = 'Petrychenko'; // инкапсуляция отчества

    say = () => {
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this.age}`);
    }

    // геттер для получения отчества
    get surname() {
        return this.#surname;
    }

    // сеттер для смены отчества
    set surname(surname) {
        this.#surname = surname;
    }
}

const ivan3 = new User3('Ivan', 27); // создание нового пользователя
console.log(ivan3.surname); // получение отчества
ivan3.surname = 'Antonovich'; // смена отчества
console.log(ivan3.surname); // получение отчества

ivan3.say();
'use strict';
// Lesson 46

// 1) Обычная ф-ия: this = window, но если use strict - undefined
function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }

    console.log(sum());
}
showThis(4, 5);

// 2) Контекст у методов объект - сам объект
const obj = {
    a: 20,
    b: 15,
    sum: function() {
        function shout() {
            console.log(this);
        }
        shout();
    }
}
obj.sum();

// 3) this в конструкторах и классах - новый экземпляр объекта
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}
let ivan = new User('Ivan', 23);

// 4) Ручная привязка this: call, apply, bind
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count(num) {
    return this*num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(13));

// другие примеры
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    this.style.backgroundColor = 'red';
});

btn.addEventListener('click', (e) => {
    e.target.style.borderRadius = '25px';
});

const obj2 = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        };

        say();
    }
};

obj.sayNumber();

const double2 = a => a * 2;
console.log(double2(4));
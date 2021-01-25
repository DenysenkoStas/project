'use strict';

const persone = {
    name: 'Alex',
    tel: '+744444444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const clone = JSON.parse(JSON.stringify(persone)); // глубокое клонирование объекта
clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);
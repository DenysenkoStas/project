const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

console.log(btns[0].classList.length); // количество классов у элемента
console.log(btns[0].classList.item(0)); // имя первого класса
console.log(btns[1].classList.add('red', 'test')); // добавление класса
console.log(btns[0].classList.remove('blue')); // удаление класса
console.log(btns[0].classList.toggle('blue')); // переключение класса

// проверка наличия класса
if (btns[1].classList.contains('red')) {
    console.log('red');
}

// смена класса второй кнопки при клике на первую
btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }

    // альтернативный вариант
    btns[1].classList.toggle('red');
});

// свойство просмотра классов элемента
console.log(btns[0].className);

// пример делегирования событий
wrapper.addEventListener('click', (event) => {
    // console.dir(event.target);

    if (event.target && event.target.tagName == 'BUTTON' || event.target.classList.contains('some-block') || event.target.matches('button.red')) {
        console.log('Hello');
    }
});

// добавление еще одной кнопки в обертку
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

// в данном случае делегирование не работает и новая кнопка будет без событий
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Hello');
    });
});
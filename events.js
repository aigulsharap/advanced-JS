/* Работа с элементами */

console.log(document.head);
console.log(document.body);

const el = document.querySelector('.wrapper');
const el2 = document.querySelectorAll('meta');
const el3 = document.getElementsByClassName('filter');
const el4 = document.getElementsByTagName('meta');

console.log(el);
console.log(el2);
console.log(el3);
console.log(el4);

const button = document.createElement('button');
button.className = 'button'
button.innerHTML = 'тест';

const button2 = document.createElement('button');
button2.className = 'button'
button2.innerHTML = 'тест2';

const button3 = document.createElement('button');
button3.className = 'button'
button3.innerHTML = 'тест3';

el.append(button);
el.append(button2);
el.append(button3);
el.prepend(button2);
el.before(button2);
el.after(button2);
button.remove();

/* Визуальное положение элементов */

function generate(event) {
    console.log(event.target.getBoundingClientRect());

    console.log(`X offset: ${window.pageXOffset}`);
    console.log(`Y offset: ${window.pageYOffset}`);
    console.log(`clientWidth: ${document.documentElement.clientWidth}`);
    console.log(`clientHeight: ${document.documentElement.clientHeight}`);

    const el = document.querySelector('.down');
    const rect = el.getBoundingClientRect();

    window.scrollTo({
        left: window.pageXOffset + rect.left,
        top: window.pageYOffset + rect.top,
        behavior: 'smooth'
    })
}

/* Типы событий и обработчики */

const button4 = document.querySelector('.button');

const eventHandler = function(event) {
    console.log('event 1');
}

button4.addEventListener('click', eventHandler);
button4.addEventListener('click', (event) => {
    console.log('event 2');
    button4.removeEventListener('click', eventHandler);
})

/* Пример всплытия событий */

const button5 = document.querySelector('.button5');
const inner = document.querySelector('.inner');
const test = document.querySelector('.test');

button5.addEventListener('click', function(event) {
    console.log('button');
    console.log(event.target);
    console.log(event.currentTarget);
    this.style.backgroundColor = 'purple';
    // event.stopPropagation();
})

inner.addEventListener('click', function(event) {
    console.log('inner');
    console.log(event.target);
    console.log(event.currentTarget);
    this.style.backgroundColor = 'blue';
})

test.addEventListener('click', function(event) {
    console.log('test');
    console.log(event.target);
    console.log(event.currentTarget);
    this.style.backgroundColor = 'green';
})

/* Делегирование событий */

const wrapper2 = document.querySelector('.wrapper2');

for (let i = 0; i < 100; i++) {
    const el = document.createElement('div');
    el.innerHTML = `User id: ${i}`;
    el.setAttribute('data-id', i);
    wrapper2.append(el);
}

wrapper2.addEventListener('click', (e) => {
    const i = e.target.getAttribute('data-id');
    console.log(`Deleted user ${i}`);
})

/*Перемещение по DOM */

const wrapper3 = document.querySelector('.wrapper3');
console.log(wrapper3);

const inner3 = document.querySelector('.inner3');
const button6 = document.querySelector('.button6');
console.log(inner3);
console.log(inner3.childNodes);
console.log(inner3.children);

console.log(inner3.parentElement);
console.log(inner3.parentNode);

console.log(button6.closest('.wrapper3'));

console.log(button6.previousElementSibling);
console.log(button6.previousSibling);
console.log(button6.nextElementSibling);
console.log(button6.nextSibling);
console.log(button6.parentElement.children);

/* Жизненный цикл событий DOM */

document.addEventListener('DOMContentLoaded', function(e) {
    console.log('DOMContentLoaded');
    console.log(e);
})

window.addEventListener('load', function(e) {
    console.log('load');
    console.log(e);
})

window.addEventListener('beforeunload', function(e) {
    e.preventDefault();
    e.returnValue = '';
})

/* Упражнение - Поиск по списку */

const wrapper4 = document.querySelector('.wrapper4');
for(let i = 1; i < 41; i++) {
    const el = document.createElement('div');
    el.innerText = i;
    wrapper4.append(el);
}

function search(event) {
    const inputValue = event.target.value;
    for (const el of [...wrapper4.children]) {
        if (el.innerHTML.includes(inputValue)) {
            el.classList.add('purple');
            continue;
        }
        el.classList.remove('purple');
    }
}

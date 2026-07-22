'use strict';

// setTimeout(() => {
//     console.log('Booom!')
// }, 2000);

// setTimeout((message1, message2) => {
//     console.log(message1);
//     console.log(message2);
// }, 1000, 'Bash!', 'Boom!');

// const messages = ['Bim!', 'Bam!'];

// const boomTimer = setTimeout((message1, message2) => {
//     console.log(message1);
//     console.log(message2);
// }, 1000, ...messages);

// clearTimeout(boomTimer);

// const interval = setInterval(() => {
//     console.log(new Date())
// }, 1000);

// setTimeout(() => {
//     clearInterval(interval)
// }, 5000);

function pizzaTimer(ms) {
    const end = new Date().getTime() + ms;
    const interval = setInterval(() => {
        console.log(
            new Intl.DateTimeFormat('ru-RU', {
                minute: 'numeric',
                second: 'numeric'
            }).format(end + 100 - new Date())
        )
    }, 1000);
    setTimeout(() => {
        clearInterval(interval);
        console.log('🍕 готова!');
    }, ms)
}

pizzaTimer(5000);
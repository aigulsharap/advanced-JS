'use strict';

// const prom = new Promise((resolve, reject) => {
//     if(new Date() < new Date('01/01/2028')) {
//         reject(new Error('Error'));
//     }
//     resolve('Success');
// })

// prom
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

// function timeout(sec) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, sec * 1000)
//     })
// }

// timeout(1)
//     .then(() => {
//         console.log(1);
//         return timeout(1);
//     })
//     .then(() => {
//         console.log(2);
//         return timeout(1);
//     })
//     .then(() => {
//         console.log(3)
//     })

// Promise.reject(new Error('Error')).catch(error => console.error(error));
// Promise.resolve('Instant').then(data => console.log(data));

function wait(ms) {
    const { resolve, reject, promise } = Promise.withResolvers();
    setTimeout(() => {
        resolve();
    }, ms)
    return promise;
}

async function run() {
    console.log('Начало');
    await wait(2000);
    console.log('Конец');
}

run();

class Queue {
    #message = [];
    #resolve;
    #reject;
    #promise;
    
    constructor() {
        const { resolve, reject, promise } = Promise.withResolvers();
        this.#promise = promise;
        this.#reject = reject;
        this.#resolve = resolve;
    }
    
    add(msg) {
        this.#message.push(msg);
        return this;
    }

    close() {
        this.#resolve(this.#message);
    }

    error(reason) {
        this.#reject(reason)
    }

    subscribe() {
        return this.#promise;
    }
}

const queue = new Queue();
const sub1 = queue.subscribe();
sub1.then(data => console.log(data)).catch(error => console.error(error));
const sub2 = queue.subscribe();
sub2.then(data => console.log(data)).catch(error => console.error(error));
queue.add('msg1').add('msg2').close();

function myFetch(url) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('GET', url);
        request.send();

        request.addEventListener('load', function() {
            if(this.status > 400) {
                reject(new Error(this.status));
            }
            resolve(this.responseText)
        })

        request.addEventListener('error', function() {
            reject(new Error(this.status));
        })

        request.addEventListener('timeout', function() {
            reject(new Error('Timeout'));
        })
    });
}

myFetch('https://dummyjson.com/productsss')
.then(data => console.log(data))
.catch(err => console.error(err));
'use strict';

const flights = ['Russua', 'USA', 'London', 'London', 'USA'];

const setFlights = new Set(flights);
console.log(setFlights);
console.log(setFlights.size);
console.log(setFlights.has('USA'));
setFlights.add('Spain');
console.log(setFlights);
setFlights.delete('London')
console.log(setFlights);

for (const flight of setFlights) {
    console.log(flight);
}

console.log([...setFlights]);

console.log(new Set('abcd'));

const weatherMap = new Map();
weatherMap
    .set('London', '10')
    .set('Moscow', '7');

console.log(weatherMap.get('Moscow'));
console.log(weatherMap.get('not found'));
console.log(weatherMap.has('Moscow'));
console.log(weatherMap.has('not found'));
console.log(weatherMap.delete('London'));
console.log(weatherMap.delete('not found'));
weatherMap.clear();

const arr = [1, 2, 3];

weatherMap
    .set(1, 5)
    .set(true, 'yes')
    .set(false, 'no')
    .set(true, 'Yes!')
    .set(arr, 'array')
    .set({a: 1}, {b: 1})

console.log(weatherMap);
console.log(weatherMap.size);
console.log(weatherMap.get(arr));
console.log(weatherMap.get({a: 1}));

const cosmetics = new Map([
    ['powder', '750'],
    ['pomade', '1200'],
])

console.log(cosmetics);

const cosmeticsObject = {
    powder: 750,
    pomade: 1200,
    mascara: 390
};

const cosmeticsMap2 = new Map(Object.entries(cosmeticsObject));
console.log(cosmeticsMap2);

const weatherMap2 = new Map([
    ['London', 10],
    ['Moscow', 7],
    ['Paris', 14]
])

for (const [key, value] of weatherMap2) {
    console.log(key);
    console.log(value);
}

console.log([...weatherMap2]);
console.log([...weatherMap2.keys()]);
console.log([...weatherMap2.values()]);

// let weatherArr = [];
// for (const entry of weatherMap2) {
//     weatherArr.push(entry.reverse());
// }

// const weatherMap3 = new Map([
//     ...weatherArr
// ]);

// console.log(weatherMap3);

const weatherMap3 = new Map([...weatherMap2].map(el => el.reverse()));
console.log(weatherMap3);

let a = {a: 1};
let b = {b: 2};
const map = new WeakMap();
map.set(a, 'testA');
map.set(b, 'testB');
console.log(map);
console.log(map.get(a));

let cache = new WeakMap();

function getValue(obj) {
    if(!cache.has(obj)) {
        const res = 1;
        cache.set(obj, res);
    }
    return cache.get(obj);
}

const res = getValue(b);
console.log(res);
const res2 = getValue(b);
console.log(res2);

const set = new WeakSet([a, b]);
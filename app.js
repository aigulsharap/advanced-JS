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
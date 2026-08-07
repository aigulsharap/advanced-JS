'use strict';

function req(id) {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://dummyjson.com/products/' + id);
    request.send();
    request.addEventListener('load', function() {
        const data = JSON.parse(this.responseText);
        console.log(data);
    })
}

req(1);
req(2);
req(3);
console.log('end');


const request2 = new XMLHttpRequest();
request2.open('GET', 'https://dummyjson.com/products');
request2.send();
request2.addEventListener('load', function() {
    const { products } = JSON.parse(this.responseText);
    const sum = products.reduce((acc, p) => acc += p.price, 0);
    console.log(sum / products.length);
})
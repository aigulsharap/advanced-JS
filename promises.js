'use strict';

function getData(url, errorMessage) {
    return fetch(url)
    .then(response => {
        if(!response.ok) {
            throw new Error(errorMessage + ' ' + response.status)
        }
        return response.json()
    })
}

getData('https://dummyjson.com/products', 'Не можем получить продукты, ошибка')
    .then(( { products } ) => {
        console.log(products);
        return getData('https://dummyjson.com/products/' + products[0].id, 'Не можем получить продукт, ошибка')
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error.message)
    })
    .finally(() => {
        console.log('Finally')
    });

// fetch('https://dummyjson.com/productss')
//     .then(response => {
//         if(!response.ok) {
//             throw new Error(`Is error ${response.status}`)
//         }
//         return response.json()
//     })
//     .then(( { products } ) => {
//         console.log(products);
//         return fetch('https://dummyjson.com/products/' + products[0].id)
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error => {
//         console.log(error.message
//         )
//     })
//     .finally(() => {
//         console.log('Finally')
//     });

function createSelect(array) {
    const el = document.querySelector('.filter');
    el.innerHTML = `<select>
        ${array.map(arrEl => `<option value=${arrEl.slug}>${arrEl.slug}</option>`)}
    </select>`
}

function getCategories() {
    fetch('https://dummyjson.com/products/categories')
        .then(response => response.json())
        .then(data => createSelect(data))
        .catch(error => console.error(`Ошибка: ${error}`))
}

getCategories();    
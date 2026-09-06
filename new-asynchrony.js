'use strict';

async function getProducts() {
    try {
        const productsResponse = await fetch('https://dummyjson.com/products');
        if(!productsResponse.ok) {
            throw new Error(productsResponse.status);
        }
        const { products } = await productsResponse.json();
        console.log(products);

        const productResponse = await fetch('https://dummyjson.com/products/'+ products[0].id);
        const product = await productResponse.json();
        console.log(product);
    } catch(e) {
        console.error(e)
    } finally {
        console.log('Finally');
    }
}

getProducts();

/* Упражнение - Мой город */

function getMyCoordinates() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            resolve({
                latitude: coords.latitude,
                longitude: coords.longitude,
            })
    }, 
            (err) => {
                reject(err);
            }
        );
    });
}

async function getMyCity(pos) {
    try {
        const { latitude, longitude } = await getMyCoordinates();
        const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
        if (!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json();
        console.log(data.city);

    } catch(e) {
        console.error(e);
    }  
}

getMyCity();

/* Асинхронные методы */

class ProductRepository {
    async getProducts() {
        const response = await fetch('https://dummyjson.com/products');
        console.log(await response.json());
    }
}

const repo = new ProductRepository();
repo.getProducts();

const asyncArrow = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        return data;
    } catch(e) {
        console.error(e);
        throw e;
    }
}

asyncArrow();

/* Последовательность выполнения */

(async () => {
    console.log('1');
    const res = await asyncArrow();
    console.log(res);
    console.log('3'); 
})()

async function getAllProducts() {
    const response = await fetch('https://dummyjson.com/products');
    return response.json();
}

async function getProduct(id) {
    const response = await fetch('https://dummyjson.com/products/' + id);
    return response.json();
}

async function getProductError(id) {
    const response = await fetch('https://dummyjsons.com/products/' + id);
    return response.json();
}

/* Параллельное выполнение */

async function main() {
    const { products } = await getAllProducts();
    const res1 = await Promise.all(products.map(product => getProduct(product.id)));
    console.log(res1);
    const res2 = await Promise.allSettled([
        getProduct(1),
        getProductError(2)
    ])
    console.log(res2);
    const res3 = await Promise.race([
        getProduct(3),
        getProduct(4)
    ]);
    console.log(res3);
}

main();

/* Все возможности fetch */

async function master() {
    const res = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Token'
        },
        body: JSON.stringify({
            username: 'emilys',
            password: 'emilyspass'
        })
    })
    const data = await res.json();
    console.log(data);
}

master();

/* Упражнение - Генератор активностей */

const ideasContainer = document.querySelector('.ideas');

function renderActivities() {
    ideasContainer.innerHTML = `
      <div class="idea"></div>
      <div class="idea"></div>
      <div class="idea"></div>
      <button class="ideas__btn" onclick="getIdeas()">What should I do?</button>
    `
}

async function getIdea() {
        const response = await fetch('https://bored.api.lewagon.com/api/activity');
        if(!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json();
        return data.activity;
}

async function getIdeas() {
    try {
        const ideas = await Promise.all([getIdea(), getIdea(), getIdea()]);
        document.querySelectorAll('.idea').forEach((element, index) => {
            element.textContent = ideas[index];
        });
    } catch(e) {
        console.error(e);
    }
}

renderActivities();
const Book = function(title, author) {
    this.author = author;
    this.title = title;
    this.isRead = false;
}

Book.prototype.read = function () {
    this.isRead = true;
}

Book.prototype.cover = 'Paper';

const lordOfTheRing = new Book('Lord of the Ring', 'Tolkien');
lordOfTheRing.read();
console.log(lordOfTheRing);
console.log(lordOfTheRing.hasOwnProperty('cover'));
console.log(lordOfTheRing.hasOwnProperty('author'));
console.log(lordOfTheRing.__proto__);
console.log(Book.prototype.isPrototypeOf(lordOfTheRing));

const product1 = {id: 1, name: 'Bread', count: 2};

const Basket = function() {
    this.products = [];
}

Basket.prototype.addProduct = function(product) {
   const exists = this.products.find(p => p.id === product.id);
   if (exists) {
        return console.log('Товар уже есть в корзине');
   }
   this.products.push(product);
}

Basket.prototype.addCount = function (id) { 
    const exists = this.products.find(p => p.id === id);
    if (exists) {
        exists.count++;
    }
}

Basket.prototype.decreaseCount = function (id) { 
    const exists = this.products.find(p => p.id === id);
    exists ?? exists.count--;
    this.products = this.products.filter(p => p.count > 0);
}

const basket = new Basket();

basket.addProduct(product1);
basket.addProduct(product1);
console.log(basket);
basket.addCount(1);
console.log(basket); 
basket.decreaseCount(1);
basket.decreaseCount(1);
console.log(basket);
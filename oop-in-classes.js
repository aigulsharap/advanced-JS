'use strict';

class Film {
    #name;
    #author;
    rating;
    #length;

    constructor(name, author, length) {
        this.#name = name;
        this.#author = author;
        this.#length = length;
    }

    get name() {
        return this.#name;
    }

    get author() {
        return this.#author;
    }

    get length() {
        return this.#length;
    }
}

const film = new Film('Avatar', 'Cameron', 240);
console.log(film);

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    buy() {
        console.log('Buy');
    }

    info() {
        console.log(`${this.title} - ${this.author}`);
    }
}

class AudioBook extends Book {
    constructor(title, author, lenMin) {
        super(title, author);
        this.lenMin = lenMin;
    }

    log() {
        console.log(`${this.title} - ${this.lenMin}`);
    }
}

const book = new AudioBook('Lord of The Rings', 'Tolkien', 20 * 60);
book.buy();
book.log();
const book1 = new Book('Lord of The Rings', 'Tolkien');
book1.info();

class EBook extends Book {
    constructor(title, author, pages) {
        super(title, author);
        this.pages = pages;
    }

    info() {
        console.log(`${this.title} - ${this.author} - ${this.pages} страниц`);
    }
}

const book2 = new EBook('Lord of The Rings', 'Tolkien', 120);
book2.info();

class Enemy {
    constructor(health) {
        this.health = health;
    }

    recieveDamage(strength) {
        this.health = this.health - strength;
        
        if (this.health > 0) {
            return this.health;
        } else {
            return this.health = 0;
        }
        
    }
}

class Sword {
    #strength;
    #method;

    constructor(strength, method) {
        this.#strength = strength;
        this.#method = method;
    }

    get method() {
        return this.#method;
    }

    get strength() {
        return this.#strength;
    }
}

class Orс extends Enemy {
    constructor(health) {
        super(health);
    }

    recieveDamage(strength, method) {
        if (method === !'cut') {
            return;
        }

        if(Math.random() > 0.5) {
            this.health = this.health - strength;
            console.log(this.health)
        }
        
        if (this.health > 0) {
            return this.health;
        } else {
            return this.health = 0;
        }
        
    }
}

const grabli = new Enemy(100);
const sword = new Sword(10, 'cut');
grabli.recieveDamage(sword.strength, sword.method);
grabli.recieveDamage(sword.strength, sword.method);
grabli.recieveDamage(sword.strength, sword.method);
grabli.recieveDamage(sword.strength, sword.method);
grabli.recieveDamage(sword.strength, sword.method);
grabli.recieveDamage(sword.strength, sword.method);
grabli.recieveDamage(sword.strength, sword.method);
grabli.recieveDamage(sword.strength, sword.method);
grabli.recieveDamage(sword.strength, sword.method);
grabli.recieveDamage(sword.strength, sword.method);
grabli.recieveDamage(sword.strength, sword.method);
grabli.recieveDamage(sword.strength, sword.method);
console.log(grabli.health);
const enemy = new Orс(100);
enemy.recieveDamage(sword.strength, sword.method);
enemy.recieveDamage(sword.strength, sword.method);
enemy.recieveDamage(sword.strength, sword.method);
console.log(enemy.health);

class Wallet {
    balance = 0;

    add(sum) {
        this.balance += sum;
        return this;
    }

    remove(sum) {
        this.balance -= sum;
        return this;
    }
}

const wallet = new Wallet();
const res = wallet
    .add(100)
    .remove(10)
    .add(20);
console.log(res);

class Builder {
    house = {};

    addRoof() {
        this.house.roof = 'Roof';
        return this;
    }

    addFloor() {
        this.house.floor = 'Floor';
        return this;
    }

    execute() {
        return this.house;
    }
}

const builder = new Builder();
const res2 = builder
    .addRoof().addFloor();
console.log(res2.execute());
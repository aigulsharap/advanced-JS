'use strict';

class BookClass {
    isRead = false;
    constructor(title, author) {
        this.author = author;
        this.title = title;
    }
    read() {
        this.isRead = true;
    }
}
const lotr = new BookClass('lotr', 'Tolkien');
console.log(lotr);

const task = {
    title: 'Task',
    dueTo: new Date('2023/01/01'),

    get isOverdue() {
        return this.dueTo < new Date()
    },

    set isOverdue(isOverdueTask) {
        if (!isOverdueTask) {
            this.dueTo = new Date();
        }
    }
}

console.log(task.isOverdue);
task.isOverdue = false;
console.log(task);

class Task {
    constructor(title, dueDate) {
        this.title = title;
        this.dueDate = dueDate;
    }

    get isOverdue() {
        return this.dueTo < new Date();
    }

    set dueDate(date) {
        if (date < new Date()) {
            return;
        }
        this._dueDate = date;
    }
}

const newTask = new Task('JS lessons', new Date('2026/01/27'));

console.log(newTask.isOverdue);
newTask.dueDate = new Date('2026/07/31');
console.log(newTask);

class Test {
    static a = 1;
    static hello() {
        console.log('Hello!');
    }

    static {
        let b = 5;
        this.a = 5;
    }
}
Test.hello();
console.log(Test.a);

const Test2 = function() {

}

Test2.hello = function() {
    console.log('Hello!');
}

Test2.hello();

class Car {
    #vin = 6;
    speed;

    #changeVin() {
        console.log('changed')
    }

    test() {
        this.#changeVin();
    }

    static #field = 3;

    static {
        this.#field = 5;
    }
}

const car = new Car();
car.test();

class User {
    #login;
    #_password;

    constructor(login, password) {
        this.#login = login;
        this.#password = password;
    }

    set #password(pass) {
        this.#_password = pass.split('').reverse().join('');
        console.log('fggf');
    }

    get #password() {
        return this.#_password.split('').reverse().join('');
    }

    get login() {
        return this.#login;
    }

    checkPassword(pass) {
        return this.#password === pass;
    }
    
    changePassword(oldPassword, newPassword) {
        if (!this.checkPassword(oldPassword)) {
            return false;
        }
        this.#password = newPassword;
        return true;
    }

    
}

const newUser = new User('aigul', '12345');
console.log(newUser);
console.log(newUser.login)
console.log(newUser.checkPassword('12345'));
newUser.changePassword('12345', '6789');
console.log(newUser);
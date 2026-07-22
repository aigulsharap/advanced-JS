'use strict';

const now = new Date();
console.log(now);
console.log(new Date('07-21-2026'));
console.log(new Date(2026, 11, 31));
console.log(new Date(2026, 11, 31, 10, 5, 10));
console.log(new Date(2026, 6, 21 + 15));
console.log(Date.now());
console.log(new Date(Date.now()));
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(new Date(now.setFullYear(2030)));

const date1 = new Date(2024, 10, 15);
const date2 = new Date(2024, 11, 15);
console.log(Number(date1));
console.log(date2 - date1);

function getDaysBetweenDates(dateFirst, dateSecond) {
    return (dateSecond - dateFirst) / (1000 * 60 *60 *24);
}

console.log(getDaysBetweenDates(date1, date2));

const first = new Date(2024, 10, 4);
const second = new Date(2024, 10, 4);

console.log(first < second);
console.log(first == second);
console.log(first === second);

console.log(first.getTime() == second.getTime());
console.log(first.getTime() === second.getTime());
console.log(Number(first) == Number(second));

/* Сделать функцию, которая принимает пользователя ипроверяет, у него сегодня день рождения или нет*/

const user = {
    name: 'Vasia',
    birthday: '12/23/2022'
}

function birthdayToday(userObj) {
    const userBirthday = new Date(userObj.birthday);
    const today = new Date();
    return (userBirthday.getDate() === today.getDate() && userBirthday.getMonth() === today.getMonth());
}

console.log(birthdayToday(user));

const date = new Date();
console.log(date);
console.log(new Intl.DateTimeFormat('ru-RU').format(date));
console.log(new Intl.DateTimeFormat('en-US').format(date));
const options1 = {
    hour: 'numeric',
    minute: 'numeric'
}
console.log(new Intl.DateTimeFormat('ru-RU', options1).format(date));
const options2 = {
    hour: 'numeric',
    minute: 'numeric',
    month: 'long'
}
console.log(new Intl.DateTimeFormat('en-US', options2).format(date));
console.log(new Intl.DateTimeFormat('ru-RU', options2).format(date));
console.log(navigator.language);
console.log(new Intl.DateTimeFormat(navigator.language
    , options1).format(date));

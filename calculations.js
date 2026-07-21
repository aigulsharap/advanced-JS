'use strict';

console.log(Number('1'));
console.log(+'10');
console.log(Number.parseInt('100', 10));
console.log(Number.parseInt('11 sec', 10));
console.log(Number.parseInt('sec 11', 10));
console.log(Number.parseInt('12.5', 10));
console.log(Number.parseFloat('12.5', 10))
console.log(Number.isNaN(Number('10km')));
console.log(Number.isNaN(10 / 0));
console.log(10 / 0);
console.log(Number.isFinite(10 /0));
console.log(Number.isFinite(9));
console.log(Number.isInteger(10));
console.log(Number.isInteger(10.4));

console.log(Math.sqrt(36));
console.log(Math.cbrt(27));
console.log(16 ** (1/4));
console.log(Math.sign(-100));
console.log(Math.sign(100));
console.log(Math.abs(-100));
console.log(Math.abs(100));

console.log(Math.max(1, -2, 10, 0, 19));
console.log(Math.min(1, -2, 10, 0, 19));
const arr = [1, -2, 10, 0, 20];
console.log(Math.max(...arr));
console.log(Math.random());

console.log('round 1.4' + '=' + Math.round(1.4));
console.log('round 1.6' + '=' + Math.round(1.6));

console.log(`ceil 1.4 = ${Math.ceil(1.4)}`);
console.log(`ceil 1.6 = ${Math.ceil(1.6)}`);

console.log(`floor 1.4 = ${Math.floor(1.4)}`);
console.log(`floor 1.6 = ${Math.floor(1.4)}`);

console.log(`trunc 1.4 = ${Math.trunc(1.4)}`);
console.log(`trunc 1.6 = ${Math.trunc(1.4)}`);

console.log(Number((1.499999).toFixed(1)));

/* Функция, которая принимает min и max и возвращает случайное сило между ними, включая их*/

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1) + min));
}

console.log(random(1, 20));

console.log(15 % 2);
console.log(14 % 2);

const isEven = n => n % 2 === 0;
const isOdd = n => n % 2 === 1;
function isEvenFunc(n) {
    return n % 2 === 0;
}

console.log(isEven(17));
console.log(isEven(16));
console.log(isOdd(17));
console.log(isOdd(16));

const bigNum1 = 350_500_000;
const BigNum2 = 350500000;

console.log(Number('350_500_000'));
console.log(Number('350500000'));
console.log(parseInt('350_500_000'));
console.log(parseFloat('350_500_000'));

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(73487938748932749832793797n);
console.log(BigInt(73487938748932749832793797));
console.log(BigInt('73487938748932749832793797'));

const options1 = {
    style: 'currency',
    currency: 'RUB'
}

const options2 = {
    style: 'currency',
    currency: 'USD'
}

const options3 = {
    style: 'decimal'
}

const options4 = {
    style: 'percent'
}

const options5 = {
    style: 'unit',
    unit: 'celsius'
}

console.log(new Intl.NumberFormat('ru-RU', options1).format(23000));
console.log(new Intl.NumberFormat('ru-US', options2).format(23000));
console.log(new Intl.NumberFormat('en-US', options2).format(23000));
console.log(new Intl.NumberFormat('ru-RU', options3).format(10000));
console.log(new Intl.NumberFormat('ru-RU', options4).format(0.1));
console.log(new Intl.NumberFormat('ru-RU', options5).format(25));

function converter(summ, originalCurrency, finalCurrency) {
    // валюта: рубль, доллар, евро
    // рубль-доллар рубль-евро
    // доллар-евро
    if(originalCurrency === 'RUB') {
        if(finalCurrency === 'USD') {
            return summ * 0.013
        } else if (finalCurrency === 'EUR') {
            return summ * 0.011
        }
    }
    if(originalCurrency === 'USD') {
        if(finalCurrency === 'RUB') {
            return summ * 78.28
        } else if(finalCurrency === 'EUR') {
            return summ * 0.87
        }
    }
    if(originalCurrency === 'EUR') {
        if(finalCurrency === 'RUB') {
            return summ * 89.56
        } else if(finalCurrency === 'USD') {
            return summ * 1.14
        }
    }
    return null;
}

function converter2(summ, originalCurrency, finalCurrency) {
    const exchangeRates = {
        RUB: {
            USD: 0.013,
            EUR: 0.011
        },
        USD: {
            RUB: 78.28,
            EUR: 0.87
        },
        EUR: {
            RUB: 89.56,
            USD: 1.14
        },
    }

    return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: finalCurrency
    }).format(summ * exchangeRates[originalCurrency][finalCurrency])
}

console.log(converter(100, 'USD', 'EUR'));
console.log(converter2(100, 'USD', 'EUR'));
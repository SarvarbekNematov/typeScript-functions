"use strict";
// 1-function //
const Sum = (...numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
};
const total = Sum(12, 216, 54, 78);
const juftFn = (...numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element % 2 === 0) {
            console.log((i + 1), " son ", element);
        }
    }
    return null;
};
const repeatNumber = (...numbers) => {
    const arr = numbers.filter((values, index, self) => {
        return self.indexOf(values) === index;
    });
    return arr;
};
const arrNumber = repeatNumber(1, 54, 1, 54, 5, 65, 45, 6, 51, 5, 4, 6, 465, 456, 4, 64);
const findLongestString = (...text) => {
    if (text.length === 0) {
        console.log("text kirgazing!");
    }
    let long = text.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");
    return long;
};
const result = findLongestString("asaasa", "asodbkjansasmdlka", "aspidjaskdnsakldm,saldashvd", "Asdb");
const findKvadrat = (...numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        const num = element ** 2;
        console.log((i + 1 + "sonning kvadrati " + num));
    }
    return null;
};
const factarialFn = (num) => {
    let sum = 1;
    for (let i = 0; i < num; i++) {
        sum = sum * (i + 1);
    }
    return sum;
};
const fc = factarialFn(5);
const palindromFn = (num) => {
    const firstNum = num.toString();
    const reverse = firstNum.split('').reverse().join('');
    let text = '';
    if (firstNum === reverse) {
        text = 'bu son palindrom...';
    }
    else {
        text = 'bu son palindrom emas!';
    }
    return text;
};
const pm = palindromFn(151);
const passwordFn = (password) => {
    if (password.length < 8) {
        return 'parol 8 tadan kam bolmasin';
    }
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    return (hasUpperCase && hasLowerCase && hasDigit);
};
const pass = passwordFn("23032006Yj");
// console.log(pass)

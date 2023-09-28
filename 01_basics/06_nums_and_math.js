const score = 400
// console.log(score); // 400

const balance = new Number(100)
// console.log(balance); // [Number: 100]

// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(1)); // 100.0

const otherNumber = 123.986
// console.log(otherNumber.toPrecision(1)); // 1e+2
// console.log(otherNumber.toPrecision(2)); // 1.2e+2
// console.log(otherNumber.toPrecision(3)); // 124
// console.log(otherNumber.toPrecision(4)); // 124.0
// console.log(otherNumber.toPrecision(5)); // 123.99

const hundereds = 1000000
// console.log(hundereds.toLocaleString('en-IN')); // 10,00,000

// ------------------ Maths ------------------------

// console.log(Math); // Object [Math] {}   
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2)) // 5
// console.log(Math.floor(4.6)); // 4
// console.log(Math.min(4,3,5,2)); // 2
// console.log(Math.max(5,3,2,9)); // 9

// console.log(Math.random()); // 0 to 9
// console.log(Math.random()* 10 + 1); // 1.3483 to 10
// console.log(Math.floor(Math.random() * 10) + 1); // 1 to 10

const min = 10
const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min); // 10 - 20
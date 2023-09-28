let score = 25
let score1 = "25"
let score2 = null
let score3 = undefined

// console.log(typeof score);
// console.log(typeof score2); // Object
// console.log(typeof score3); // undefined

let newScore1 = Number(score1)
let newScore2 = Number(score2)
let newScore3 = Number(score3)
// console.log(typeof newScore1); // Number
// console.log(newScore1); // 25
// console.log(typeof newScore2); // Number
// console.log(newScore2); // 0
// console.log(typeof newScore3)   // Number
// console.log(newScore3) // NaN ---> (Not a Number)

// "33" => 33
// "33abc" => NaN
// true => 1, false => 0

let isLoggedIn = "hitesh"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn) // true

// 1 => true , 0 => false
// "" => false  #Empty String
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber) // 33
// console.log(typeof stringNumber) // string


// ---------------------------Operation-----------------------

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "Hello";
let str2 = " JavaScript"
let str3 = str1 + str2
// console.log(str3); // Hello JavaScript

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

// console.log( (3+4) * 5%3); // 2

// console.log(+true); // 1 Bad Practice
// console.log(+""); // 0 Bad Practice

let num1,num2,num3

num1 = num2 = num3 = 5

let gameCounter = 100
++gameCounter  // pre-increment operator
console.log(gameCounter); // 101


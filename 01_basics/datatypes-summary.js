// Primitives

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // undefined

const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id === anotherId); // false

const bigNumber = 13353849754983492485n;
// console.log(typeof bigNumber); // bigint

// Reference (Non-primitive)

// Arrays[], Objects{}, Function(){}

const heros = ["Shaktiman", "nagraj", "doga"];

let myObj = {
  name: "Ashutosh",
  age: 21,
};

const myFunction = function () {
  console.log("Hello My Function");
};

// myFunction();

//HomeWork --------- Typeof Operator Results

let string = "Ashutosh";
let booleanValue = true;
let myObj1 = {};

// console.log(typeof string); // string
// console.log(typeof booleanValue); // boolean
// console.log(typeof myObj1); // object

// console.log(typeof undefined); // undefined
// console.log(typeof null); // Object
// console.log(typeof Boolean); // Function
// console.log(typeof String); // Function
// console.log(typeof Object); // Function

// ----------Stack and Heap Memory ----------------------

// Stack (Primitive Data types)  , Heap (Non-Primitive Data types)

let myYoutubeName = "hiteshChoudhary";
let anotherName = myYoutubeName; // <-------------- Copy of Original
anotherName = "chaiaurcode";

// console.log(myYoutubeName); // hiteshChoudhary
// console.log(anotherName); // chaiaurcode

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne; // <------------- Reference of Original
userTwo.email = "hitesh@google.com";

console.log(userOne.email); // hitesh@google.com
console.log(userTwo.email); // hitesh@google.com

const name = "Ashutosh"
const repoCount = 20

// console.log(name + repoCount + " Value"); // Ashutosh20 Value
// Old Method Not recommended

// console.log(`Hello my name is ${name} and My Repo Count  is ${repoCount}`); // Hello my name is Ashutosh and My Repo Count  is 20

const gameName = new String('Ashutosh-hc-com')

// console.log(gameName[0]); // A
// console.log(gameName.__proto__); // {}

// console.log(gameName.length); // 15 ---> Prints the length of String
// console.log(gameName.toUpperCase()); // ASHUTOSH-HC-COM ---> Convert to Uppercase
// console.log(gameName.toLowerCase()); // ashutosh-hc-com ---> Convert to Lowercase
// console.log(gameName.charAt(2)); // h ---> return character at Position
// console.log(gameName.indexOf('t')); // 4 ---> Returns the index of Character

const newString = gameName.substring(0,4); // Returns the substring
// console.log(newString); // Ashu

const anotherString = gameName.slice(-13,4);
// console.log(anotherString); // hu

const newStringOne = "      Ashutosh         "
// console.log(newStringOne.trim()); // Removes the trailing and leading spaces from string

const url = "https://www.google.com"
console.log(url.replace('o','-')); // https://www.g-ogle.com
console.log(url.includes('sundar')); // false
console.log(gameName.split('-')); // [ 'Ashutosh', 'hc', 'com' ] returns in the  form of array

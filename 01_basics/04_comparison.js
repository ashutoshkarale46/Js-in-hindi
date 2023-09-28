// console.log(2 > 1); 
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1); // true
// console.log("02" > 1); // true 
// Note : Comparing the values on the data type

// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); // true  -----> (Important)

// Note: The reason is that an equality check == and comparisons >,<,>=,<= work differently.
// Comparisons convert null to a number, treating it as 0.That's why  (3) null >=0 is true and (1) null > 0 is false.

// console.log(undefined >= 0); false
// console.log(undefined > 0); false
// console.log(undefined < 0); false

// === 

console.log("2" === 2) // Strict Check not check the value but also check the data type
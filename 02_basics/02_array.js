const marvel_heroes = ["Thor","Ironman","Spiderman"]
const dc_heroes = ["Superman","flash","Batman"]

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes); // [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'flash', 'Batman' ] ]
// console.log(marvel_heroes[3][1]); // flash

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes); 
/* [
    'Thor',
    'Ironman',
    'Spiderman',
    [ 'Superman', 'flash', 'Batman' ],
    'Superman',
    'flash',
    'Batman'
  ]
  */

// Spread Operator [to clone the array]

const all_new_Heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_Heroes); // [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'flash', 'Batman' ]

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array); // [1,2,3,4,5,6,7,6,7,4,5]


// console.log(Array.isArray("Ashutosh")); // false
// console.log(Array.from("Ashutosh")); // ['A', 's', 'h','u', 't', 'o','s', 'h']
// console.log(Array.from({name:"Ashutosh"})); // [] - Empty Array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // [ 100, 200, 300 ]
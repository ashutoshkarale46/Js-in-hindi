// for in

const myObject = {
    js : "javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "Swift"
}

// for(const key in myObject) {
//     console.log(`${key} short is for ${myObject[key]}`);
// }

const programming = ["js","rb","py","java","cpp"]

// for(const key in programming) {
//     console.log(key);
//     console.log(programming[key]);
// }


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key); // Map are not iterable, so it will not show the output
}
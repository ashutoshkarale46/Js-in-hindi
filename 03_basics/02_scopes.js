var c = 300
let a = 10

if(true) {
    let a = 10
    const b = 20
    // console.log("Inner: ", a);
}

// console.log(a); // 10
// // console.log(b); // ReferenceError: b is not defined
// console.log(c) // 300

// function one() {
//     const username = "hitesh"

//     function two() {
//         const website = "youtube"
//         console.log(username)
//     }
//     console.log(website); // ReferenceError: website is not defined
//     two()
// }

// one()

if(true) {
    const username = "hitesh"
    if(username === "hitesh") {
        const website = "youtube"
        // console.log(username + website); // hiteshyoutube
    }
    // console.log(website) // ReferenceError: website is not defined
}

// console.log(username); // ReferenceError: username is not defined

console.log(addone(5)); // 6

function addone(num) {
    return num + 1
}

addTwoNumbers(5) // ReferenceError: addTwoNumbers is not defined

const addTwo = function(num) {
    return num + 2
}
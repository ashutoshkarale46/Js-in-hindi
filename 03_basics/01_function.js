// Functions

function sayMyName() {
    console.log("A");
    console.log("s");
    console.log("h");
    console.log("u");
    console.log("t");
    console.log("o");
    console.log("s");
    console.log("h");
}

// sayMyName()

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

// addTwoNumbers(3,2) // 5

function addTwoNumbers(num1,num2) {
    let result = num1 + num2
    return result
}

const result = addTwoNumbers(3,5);
// console.log("Result:", result); // Result: 8

function loginUserMessage(username = "sam") {
    if(!username) {
        console.log("Please enter a username: ");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Hitesh")) // Hitesh just logged in

function caculcateCartPrice(...num1) {
    return num1
}

// console.log(caculcateCartPrice(200,300,500,600));

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user) // Username is hitesh and price is 199

handleObject( {
    username: "Sam",
    price: 399
})

const myNewArray = [200,500,100,600]

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray)); // 500
console.log(returnSecondValue([200,400,5000,600])); // 400
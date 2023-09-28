const user = {
    username: "Hitesh",
    price : 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
user.username = "sam"
// user.welcomeMessage()
// console.log(this); // {}

// function chai() {
//     let username = "Hitesh"
//     console.log(this.username);// undefined
// }

// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// const addTWo = (num1,num2) => num1 + num2 // 8
// const addTWo = (num1,num2) => (num1 + num2) // 8
// const addTWo = (num1,num2) => ({username: "hitesh"}) // { username: 'hitesh' }
// console.log(addTWo(3,5));





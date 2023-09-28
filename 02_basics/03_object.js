// Singleton when created by constructor
// Object.create

// Object Literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Ashutosh",
    "full name": "Ashutosh Karale",
    [mySym]: "mykey1",
    location: "Pune",
    email: "ashutosh@google.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday","Saturday"]
}

// console.log(JsUser.email); // ashutosh@google.com
// console.log(JsUser["email"]); // ashutosh@google.com
// console.log(JsUser["full name"]); // Ashutosh Karale
// console.log(JsUser[mySym]); // mykey1

JsUser.email = "ashutosh@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "ashutosh@microsoft.com"
// console.log(JsUser); // Email will not change bcoz of freeze method

JsUser.greeting = function() {
    console.log("Hello JS User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`)
}

console.log(JsUser.greeting);

console.log(JsUser.greetingTwo);
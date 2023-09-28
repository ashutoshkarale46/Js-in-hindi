// Dates

let myDate = new Date(); 

// console.log(myDate); // 2023-09-27T09:00:37.297Z
// console.log(myDate.toString()); // Wed Sep 27 2023 14:31:47 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Wed Sep 27 2023
// console.log(myDate.toISOString()); // 2023-09-27T09:02:31.034Z
// console.log(myDate.toJSON()); // 2023-09-27T09:02:50.722Z
// console.log(myDate.toLocaleDateString()); // 27/9/2023
// console.log(myDate.toLocaleString()); // 27/9/2023, 2:33:29 pm
// console.log(myDate.toLocaleTimeString()); // 2:33:50 pm
// console.log(myDate.toTimeString()); // 14:34:14 GMT+0530 (India Standard Time) 
// console.log(myDate.toUTCString()); // Wed, 27 Sep 2023 09:04:37 GMT
// console.log(myDate.getTimezoneOffset()); // -330
// console.log(myDate.getDate()); // 27
// console.log(myDate.getDay()); // 3
// console.log(myDate.getFullYear());// 2023

// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023,0,23);
// console.log(myCreatedDate); // 2023-01-22T18:30:00.000Z

// let myCreatedDate = new Date(2023,0,23,5.3)
// console.log(myCreatedDate); // 2023-01-22T23:30:00.000Z

// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate); // 2023-01-14T00:00:00.000Z

// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate); // 2023-01-13T18:30:00.000Z

// let myTimeStamp = Date.now()
// console.log(myTimeStamp); // 1695805911053 miliseconds from 1 january 1970


console.log(Math.floor(Date.now()/1000)); // 1695805968 Interview Question

let newDate = new Date()
// console.log(newDate); // 2023-09-27T09:13:21.699Z

console.log(newDate.getMonth() + 1); // 9
console.log(newDate.getDay()); // 3

// `${newDate.getDay()} and the time

newDate.toLocaleString('default', {
    weekday: "long"
})
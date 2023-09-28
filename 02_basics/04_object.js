// const  tinderUser = new Object();
const tinderUser = {}


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ashutsoh",
            lastname: "Karale"
        }
    }
}

// console.log(regularUser);
// // console.log(regularUser.fullname); // { userfullname: { firstname: 'Ashutsoh', lastname: 'Karale' } }
// console.log(regularUser.fullname.userfullname); // { firstname: 'Ashutsoh', lastname: 'Karale' }
// console.log(regularUser.fullname.userfullname.firstname); // Ashutsoh

const obj1 = {1:"a", 2:"b"}
const obj2 = {2:"a", 3:"b"}
const obj4 = {4:"a", 5:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4) // { '1': 'a', '2': 'a', '3': 'b', '4': 'a', '5': 'b' }
const obj3 = {...obj1,...obj2} // { '1': 'a', '2': 'a', '3': 'b' }
// console.log(obj3);

const users = [
    {
        id:1,
        email: "someone@gmail.com"
    },
    {
        id:2,
        email: "sometwo@gmail.com"
    },
    {
        id:3,
        email: "somethree@gmail.com"
    },
]

// console.log(users[1].email); // sometwo@gmail.com

// console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]

// console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true

const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor); // Hitesh

const {courseInstructor: instructor} = course
console.log(instructor); // Hitesh

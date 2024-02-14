//let, const, var

// var age = 20;

// if(age > 18){
//     var name1 = 'Salman Shah';
//     var name2 = 'Manna';
//     var name3 = 'Riaz';

//     // console.log(name1);
//     // console.log(name2);
//     // console.log(name3);
// }

// function underStanding(){
//     var name1 = "Salman Shah";
//     const name2 = "Manna";
//     let name3 = "Riaz";
// }

// underStanding();
// console.log(name1);
// console.log(name2);
// console.log(name3);

// let introDuction = 'My name is Ariful Islma \n'+ 'I want to move USA for better life';
// let introDuction = `My name is Ariful Islma
// I want to move USA for better life
// Is it a wrong decision for me to live in Texas
// As I understand, I lot of big company move to TX from LA`;
// console.log(introDuction);

//Arrow function

// let name = 'Ariful Islam';

// const greeting =(a,b) => {
//     const result = a + b;
//     // console.log(`Hello, ${name}!`);
//     return result;
// }

// const res = greeting(5,5);
// console.log(res);

/* Spread operator */

// function myBio(firstName, lastName, ...otherInfo) {
//     return firstName;
// }

// // Invoke myBio function while passing five arguments to its parameters:
// console.log(myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male"));

// const myName = ['Islam' ,'is', 'my'];
// const aboutMe = ['Ariful', ...myName, 'name'];
// console.log(...aboutMe);

// const myName = "Hello";
// // console.log(...myName);
// for(let i of myName){
//     console.log(i)
// }

//object destructuring

// const aboutMe = {
//     firstName: 'Ariful Islma',
//     lastName: 'Arif',
//     age: 30,
//     married: 'No'
// }

// const {firstName, salary= "10k"} = aboutMe;

// console.log(`${firstName} ${salary}`);
// // console.log(aboutMe);

// const user = {
//     name: "Alex",
//     address: "15th Park Avenue",
//     age: 30,
//     friends:{
//         names:'Shuvo Ahmed',
//         age: 29
//     }
// };

// const {friends:{names}} = user;
// const {name} = user;
// console.log(names);
// console.log(name);

//Array destructure

// const class_6 = [
//     {name:'kasem', id:'01'},
//     {name:'rahim', id:'02'},
//     {name:'zabbar', id:'03'},
//     {name:'mallek', id:'04'},
//     {name:'kasfia', id:'05'},
//     {name:'rubel', id:'06'},
// ]

// const [student1, student2, student3] = class_6;

// console.log(student3);

//optional chaining

// const user = {
//     name: "John",
//     address: {
//     city: "New York",
//     zipcode: "10001",
//     },
// };

// const city = user?.address?.city || 'unknown';
// console.log(city);

const users = [
    { id: 1, profile: { name: "Alice" } },
    { id: 2 },
    { id: 3, profile: { name: "Bob" } },
];

const names = users.map(user => user?.id || 'unknown');
console.log(names);


const numbers = [10,20,30,40,50,60,70,80,90,100];

const largest = numbers.filter(number => number > 50);

console.log(largest);
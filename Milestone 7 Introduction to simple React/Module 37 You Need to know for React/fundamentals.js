// const addToLocalStorage = () => {
// import { useState } from 'react';
// import { useEffect } from 'react';
//     const idInput = document.getElementById('storage-id');
//     const id = idInput.value;
//     const valueInput = document.getElementById('storage-value');
//     const value = valueInput.value;
//
//     if(id && value){
//         localStorage.setItem(id, value);
//         idInput.value = '';
//         valueInput.value = '';
//     } else {
//         window.alert('Enter the value');
//     }
//
// }

// function myFunction() {
//     var x = 10;
//     // console.log(x);
//     if(true){
//         let y = 20;
//         console.log(y);
//     }
//     console.log(x);
// }
//
// myFunction();
// // console.log(x);

//
// let fruits = ['apple', 'banana', 'mango', 'orange'];
//
// // const fruits1 = fruits.slice();
// let fruits1 = fruits.splice(1,1,'pine-apple'); //new array created
//
// console.log(fruits);
// console.log(fruits1);

// let joinMethod = [10,20,30,40];

// let joinMethod1 = joinMethod.join();
// console.log(joinMethod1);

// let joinMethod = [10, 20, 30, 40];
//
// const sum = joinMethod.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(sum);

// const numbers = [1, 2, 3, 4, 5];
//
// const doubledNumbers = numbers.findIndex(num => num === 5);
// console.log(`Index number: ${doubledNumbers}`);

// let randomNumbers = Math.floor(Math.random() * 10) + 1;
//
// while (randomNumbers !== 10){
//     console.log(randomNumbers);
//     randomNumbers = Math.floor(Math.random() * 10) + 1;
// }

// var argumentsLength = function(...args){
//     let items = args[0];
//     console.log(items.length);
// }
//
// argumentsLength([{}, null, '3']);

// const person = {
//     name: 'John Doe',
//     age: 30,
//     hobbies: ['reading', 'writing', 'coding'],
//     friends: [
//         {
//             name: 'Jane Doe',
//             age: 25,
//         },
//         {
//             name: 'John Smith',
//             age: 35,
//         },
//     ],
// };
// 
// console.log(person.hobbies);

// const myString = 'This is a string';
// console.log(myString.indexOf('a'));



// const arr = [10, 20, 30, 40];

// let [,,balance] = arr;

// console.log(balance);

// let a = -10;
// 
// console.log(Math.abs(a));


// const person = {
//     name: "John Doe",
//     age: 30,
// }
// 
// const json = JSON.stringify(person, (key, value) =>{
//     if(key === "age"){
//         return value + 1;
//     } else{
//         return value;
//     }
// })
// console.log(json);


// set user  preference
// localStorage.setItem('them', 'light');
// const theme = localStorage.getItem('theme');


// const App = () => {
//     const [position, setPosition] =useState(null);
// 
//     useEffect(() => {
//         navigator.geolocation.getCurrentPosition((position) => {
//             setPosition(position);
//         });
//     },[]);
// }
// 
// return (
//     <div>
//         {position && (
//             <div>
//                 <p>Latitude: {position.coords.latitude}</p>
//                 <p>Longitude: {position.coords.longitude}</p>
//             </div>
//         )}
//     </div>
// );
// 
// export default App;

const numbers = [1, 2, 3, 4, 5];

const number = numbers.find((number) => number%2===0);
console.log(number);
const student = {
    name: 'Salib khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}


const studentJSON = JSON.stringify(student);
const studentOBJ = JSON.parse(studentJSON);
// console.log(studentJSON);
// console.log(studentOBJ);

const value = Object.keys(student);
console.log(value);
const key = Object.values(student.movies);
console.log(key);

const products = [
    {name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 33200, brand: 'apple', color: 'golden'},
    {name: 'watch', price: 12200, brand: 'Samsung', color: 'black'},
    {name: 'mouse', price: 1200, brand: 'a4tech', color: 'mixed blue'},
    {name: 'pen', price: 20, brand: 'matador', color: 'red'},
];

const newProducts = {name: 'webcame', price: 700, brand:'lal'};
const newProduct = [...products, newProducts];
// console.log(newProduct);

const removeProducts = products.filter(product => product.name !== 'phone');
console.log(removeProducts);


let isActive = true;

isActive = !isActive;

console.log(isActive);
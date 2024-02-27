const number = [10,20,30,40];
const student = {
    name: 'Salib khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

const about = `My name is ${student.name} and I am ${student.age} years old, has number ${number[2]}`;
console.log(about);


const products = [
    {name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 33200, brand: 'apple', color: 'golden'},
    {name: 'watch', price: 12200, brand: 'Samsung', color: 'black'},
    {name: 'mouse', price: 1200, brand: 'a4tech', color: 'mixed blue'},
    {name: 'pen', price: 20, brand: 'matador', color: 'red'},
];


const brandName = products.map(product => product);
// console.log(brandName);
// products.forEach(product => console.log(product.color));

const productName = products.filter(p => p.price > 1200);
const productFilter = products.filter(p => p.name.includes('a'));
console.log(productFilter);

const productsFind = products.find(p => p.name.includes('a'));
console.log(productsFind);



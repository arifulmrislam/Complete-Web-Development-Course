// const numbers = [2, 3, 5, 7, 9, 2, 8, 10, 15, 17, 19];

// const result = numbers.reduce((previous, current) => previous + current, 0);

// console.log(result);


const products = [
    {id:1, name: "lenovo", price: "$40"},
    {id:2, name: "HP", price: "$45"},
    {id:3, name:"mac", price: "$100"},
]

const numbers = [2, 3, 5, 7, 9, 2, 8, 10, 15, 17, 19];

const resultOfMap = products.map(p => p.name);
console.log(resultOfMap);

const resultOfForEach = products.forEach(product => product.id);
console.log(resultOfForEach);

const resultOfFilter  = products.filter(p => p.id > 1);
console.log(resultOfFilter);

const resultOfReduce = numbers.reduce((p, c) => p + c,0);
console.log(resultOfReduce);

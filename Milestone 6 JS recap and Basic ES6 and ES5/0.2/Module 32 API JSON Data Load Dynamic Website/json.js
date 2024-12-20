'strict'

const shop = {
    owner: 'Alia',
    address: {
        street: 'know the place',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mobile', 'car', 'keyboard'],
    price: 450000,
}

console.log(shop);
const stringify = JSON.stringify(shop);
console.log((stringify));

function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}
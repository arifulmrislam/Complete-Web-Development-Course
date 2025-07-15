const user = {id: 1, name: 'Gorib Aamir', job: 'Engineer'};
//JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user)
// console.log(user);
// console.log(JSON.stringify);

/* 
{ id: 1, name: 'Gorib Aamir', job: 'Engineer' }

{"id":1,"name":"Gorib Aamir","job":"Engineer"}
*/

const shop = {
    owner: 'Alia',
    address: {
        street: 'kochukhet voot er goli',
        city: 'ranbit',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'minor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false,
}
// console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);
const shopObj = JSON.parse(shopJson);
console.log(shopObj);
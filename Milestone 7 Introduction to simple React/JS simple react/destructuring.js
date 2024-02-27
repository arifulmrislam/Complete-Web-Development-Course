// const number = [10, 20];

// console.log([first,second]= number);

function boxify(num1, num2){
    const nums = [num1, num2];
    return nums;
}

console.log(boxify(90, 100));

const student = {
    name: 'Salib khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}
const [name1, name2] = student.movies;
console.log();


const employee = {
    ide: 'vs code',
    machine: 'Macbook Air',
    language:["html", "css", "js"],
    specification:{
        name:'kuddus',
        age:30,
        hometown:'craiova',
        work:{
            now:'frontend',
            past:'eee',
        }
    }
}


console.log(employee.specification);
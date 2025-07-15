const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.margin = '5px';
    section.style.borderRadius = '10px';
    section.style.backgroundColor = 'lightgray';

}

// 1. where to add
const placesList = document.getElementById('programms');
//2. what to add
const li = document.createElement('li');
li.innerText = 'Python';
//3. add the child
placesList.append(li);

const container = document.getElementById('main-container');

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);
const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Banana';
ul.appendChild(li1);
section.append(ul);



const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress Section</h1>
<ul>
    <li>T-Shirt</li>
    <li>Pant</li>
    <li>Touser</li>
</ul>
`
section.appendChild(sectionDress);
container.append(section);

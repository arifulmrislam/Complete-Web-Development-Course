//Where to add
const mainContain = document.getElementById('main-contain');

//what to be added
const createNew =  document.createElement('section');
// createNew.innerHTML = "<strong>USA</strong>";
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
createNew.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li')
li1.innerText = 'Fast food';
ul.appendChild(li1);

const li2 = document.createElement('li')
li2.innerText = 'Not food';
ul.appendChild(li2);

const li3 = document.createElement('li')
li3.innerText = 'yes food';
ul.appendChild(li3);


//add the child
createNew.appendChild(ul);
mainContain.appendChild(createNew)

// mainContain.style.color = 'red';



//set innserHTML directly
const sectionDress = document.createElement("section");
sectionDress.innerHTML = `
<h1>My Dress Section</h1>
<ul>
    <li>T-Shirt</li>
    <li>T-Shirt</li>
    <li>T-Shirt</li>
</ul>
`
mainContain.appendChild(sectionDress);
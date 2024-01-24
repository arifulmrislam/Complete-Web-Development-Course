const section = document.getElementById('header-title').style.color = 'red';

const sec = document.getElementsByClassName("places");
for(let cl of sec){
    cl.style.color = 'red';
}
//Query selector: when we call class include (.) and when we call id include (#). 
//But now we select "selector" thats why we don't need any (.) or (#)
//for Node element, we can use forEach loop and for class we need to use for of loop.
const sections = document.querySelectorAll('section');
for(let section of sections){
    section.style.backgroundColor = 'lightgray';
    section.style.border = '2px solid steelblue';
    section.style.padding = '5px';
    section.style.borderRadius = '15px';
    section.style.marginTop = "15px";
}

const sectionPlace = document.getElementById("placesToVisit");
    sectionPlace.style.color = 'red';
    sectionPlace.style.fontSize = '1.5em'
    sectionPlace.style.background = 'yellow';

const placesContainer = document.getElementById('header-title');
placesContainer.classList.add('yellow-bg');
console.log(placesContainer.innerText);


const f = document.getElementsByClassName('fruits');

for(let fruitss of f){
    console.log(fruitss.innerText);
}

const lit = document.createElement('li');
lit.innerText = 'Brand new place to go';
lit.innerText = "Brand new place to go1";
f[0].appendChild(lit);
// if (f.length > 0) {
//     f[0].appendChild(li);
// }
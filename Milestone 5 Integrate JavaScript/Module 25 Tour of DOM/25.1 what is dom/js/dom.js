const section = document.getElementById('header-title').style.color = 'red';

const sec = document.getElementsByClassName("places");
for(let cl of sec){
    cl.style.color = 'red';
}

const sections = document.querySelectorAll('section');
for(let sectionss of sections){
    sectionss.style.backgroundColor = 'lightgray';
    sectionss.style.border = '2px solid steelblue';
    sectionss.style.padding = '5px';
    sectionss.style.borderRadius = '15px';
    sectionss.style.marginTop = "15px";
}



const placesContainer = document.getElementById('header-title');
placesContainer.classList.add('yellow-bg');

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
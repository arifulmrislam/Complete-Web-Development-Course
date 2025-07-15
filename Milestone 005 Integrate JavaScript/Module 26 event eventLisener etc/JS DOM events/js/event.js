//option 1: Directly set on the HTML(don't use)
/*
<h1 onclick="console.log('I am a student')">Hello Javascript</h1> 
 */

//option 2: add onclick function on the html element

//Important: [We will use this]
//<button onclick="makeRed()">Make Red</button>
function makeRed() {
  document.body.style.background = "red";
}

//option 3:

const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.background = "blue";
}
//option 3 another:[We will use this sometime]
const purpleButton = document.getElementById("make-purple");
purpleButton.onclick = function makePurple() {
  document.body.style.background = "purple";
};

//option 4:

const pinkButton = document.getElementById("make-pink");

pinkButton.addEventListener("click", makePink);

function makePink() {
    document.body.style.background = "pink";
}
//option 4: another(add function in one place)
const makeGreenButton = document.getElementById("make-green");

makeGreenButton.addEventListener("click", function makeGreen() {
    document.body.style.background = "green";
});
//option 4: Final
//Important:[We will use this sometime]
document.getElementById("make-orange").addEventListener("click", function () {
    document.body.style.background = "orange";
});

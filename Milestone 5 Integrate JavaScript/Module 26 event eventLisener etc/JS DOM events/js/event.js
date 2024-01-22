//option 1: Directly set on the HTML(don't use)
/*
<h1 onclick="console.log('I am a student')">Hello Javascript</h1> 
 */

//option 2: add onclick function
    function makeRed() {
        document.body.style.background = "red";
        }

//option 3: 

        const makeBlueButton = document.getElementById("make-blue");
        makeBlueButton.onclick = makeBlue;

        function makeBlue() {
        document.body.style.background = "blue";
        }
//option 3 another:
        const purpleButton = document.getElementById("make-purple");
        purpleButton.onclick = function makePurple() {
        document.body.style.background = "purple";
        };
// function play(){
//     //step1: hide the home screen. to hide the screen add the class hidden to the home section
//     const homeScreen = document.getElementById('home-screen');
//     // console.log(homeScreen.classList);
//     homeScreen.classList.add('hidden');
//     
//     
//     //show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

function continueGame(){
    //step1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('Your random alphabet', alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}


//using function from utility for remove dry.
function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}
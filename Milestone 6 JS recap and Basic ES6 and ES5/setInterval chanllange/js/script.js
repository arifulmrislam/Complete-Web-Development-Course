// let num=0;
// const intervalID = setInterval(() => {
//     console.log(++num);
// }, 1000);

// setInterval();

// let num = 0;
// const setTimeoutId = setTimeout(() => {
//     console.log("I love you Nustat");
// }, 1000);

let intervalID; // Define intervalID in the outer scope to make it accessible to both event listeners
let digitalClockStart;

function startClock(){
    digitalClockStart = document.getElementById("digital-clock");

    // Clear previous interval if it exists
    if (intervalID) {
        clearInterval(intervalID);
    }

    let num = 0;
    intervalID = setInterval(() => {
        digitalClockStart.innerText = ++num;
    }, 1000);
}

function stopClock(){
    clearInterval(intervalID);
}

function resetClock(){
    digitalClockStart.innerText = '';
}

document.getElementById("btn-deposit1").addEventListener('click', startClock);

document.getElementById("btn-deposit2").addEventListener('click', stopClock);

document.getElementById("btn-deposit3").addEventListener('click', resetClock);

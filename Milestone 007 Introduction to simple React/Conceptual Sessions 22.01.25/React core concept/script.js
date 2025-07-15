
const tutorialData = [
    {
        title:"Angular2 Tutorial",
        desc:"If you have some idea about web development but doesnt have any clue about angular 1 or 2 or 4. This is the perfect video for you"
    },
    {
        title:"50 Dev tool Tips",
        desc:"If you have some idea about dev tool and want to become a master..this is the right video for your"
    },
    {
        title:"scope & closure",
        desc:"Understand scope, scope chain, hoisting, closure in JavaScript in the most easiest and funniest way. This is so easy even your grandma can understand."
    },
    {
        title:"Interview Questions",
        desc:"If you want to upgrade the person shouting at you in every evening at 5.00pm, you have to be competent and pretty sharp with latest technology. The world is competitive. but dont worry, that js dude will compile the questions for you. this will make your life easier to win the next big thing."
    },
    {
        title:"Angular Interview Question",
        desc:"A complete guideline to prepare for angular interviews. Also, you can use these questions to verify your expertise in angular."
    },
    {
        title:"this",
        desc:"Value of this in Javascript is very confusing and very important. If you are not sure you are a master of this, you have to watch this video..."
    },
    {
        title:"this",
        desc:"Value of this in Javascript is very confusing and very important. If you are not sure you are a master of this, you have to watch this video..."
    },
    {
        title:"this",
        desc:"Value of this in Javascript is very confusing and very important. If you are not sure you are a master of this, you have to watch this video..."
    }

]


function LoadTutorial(){
    let tutorialHtml = '';

    tutorialData.map(tutorial => tutorialHtml += `
    <div class="tutorial">
        <h2>${tutorial.title}</h2>
        <p>${tutorial.desc}</p>
        <button class="btn-details">View details >></button>
    </div>
    `)


    document.getElementById("tutorial-container").innerHTML = tutorialHtml;
}

LoadTutorial();
function greetings(greetingHandler, name) {
    greetingHandler(name);
}

function greetingHandler(name){
    console.log('Good Morning', name);
}
function greetEvening(name){
    console.log('Good Evening', name);
}

greetings(greetingHandler, 'Tom Hanks');
greetings(greetEvening, 'Tom Cruise');
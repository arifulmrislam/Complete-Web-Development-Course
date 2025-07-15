class Product {
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`talking about ${talk}`);
    }
}

const lenovo = new Product('Le le lenovo');
console.log(lenovo);
lenovo.speak('hello hello');

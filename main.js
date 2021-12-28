class Transport {
    constructor(name, model, color, number, engine, power, transmission){
        this.name = name;
        this.model = model;
        this.color = color;
        this.number = number;
        this.engine = engine;
        this.power = power;
        this.transmission = transmission;
    }

    startEngine(){
        console.log(`Open the ${this.name}`)
    }
}


const mercedes = new Transport("Mercedes", " E 55", "black", "777AAA", "V8", "354", "AKPP");


console.log(mercedes);

mercedes.startEngine();



class Car {
    constructor(name, model, color, number, engine, power){
        this.name = name;
        this.model = model;
        this.color = color;
        this.number = number;
        this.engine = engine;
        this.power = power;
    }

    startEngine(){
        console.log(`Close the ${this.name}`)
    }
}

const bmw = new Car("BMW", "X5", "white", "000AAA", "v12 5.4", "1000");

console.log(bmw);
bmw.startEngine();

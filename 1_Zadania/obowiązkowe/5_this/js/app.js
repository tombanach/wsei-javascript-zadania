// Zadanie 0

const car = {
    brand: "ford",
    color: "red",
    numberOfKilometers: 0,

    printCarInfo: function(){
        console.log(this.color + " " + this.brand + ", " + this.numberOfKilometers + "km");
        return this.color + " " + this.brand + ", " + this.numberOfKilometers + "km";
    },

    drive: function(km){
        this.numberOfKilometers += km;
    }
}

car.printCarInfo();
car.drive(10);
car.printCarInfo();



// Zadanie 1

car.services = ["2019", "2020"];
car.AddService = function(date){
    this.services.push(date);
}

car.showServices = function(){
    return this.services;
}

car.AddService("2021");
console.log(car.showServices());



// Zadania 2

const stairs = {
    step: 0,
    up: function(){
        this.step++;
    },
    down: function(){
        this.step--;
    },
    printStep: function(){
        console.log(this.step);
    }
}

stairs.up();
stairs.up();
stairs.up();
stairs.down(); 
stairs.printStep()
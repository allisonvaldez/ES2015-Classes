// PART 1

/*
1. Create a class for vehicle. Each vehicle instance should have the following properties:

make
model
year
Each vehicle instance should have access to a method called honk, which returns the string “Beep.”

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk(); // "Beep."

Each vehicle instance should have a method called toString, which returns the string containing the make, model and year.
 */

class Vehicle{
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep";
    }

    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }

}
let newCar = new Vehicle("Honda", "Monster Truck", 1999);
console.log(newCar.honk());
console.log(newCar.toString());

// PART 2

/*
2. Create a class for a car. The Car class should inherit from Vehicle and each car instance should have a property called numWheels which has a value of 4.

let myFirstCar = new Car("Toyota", "Corolla", 2005);
myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005."
myFirstCar.honk();     // "Beep."
myFirstCar.numWheels;  // 4
*/

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

let myFirstCar = new Car("Toyota", "Corolla", 2005);
console.log(myFirstCar.toString()); // "The vehicle is a Toyota Corolla from 2005."
console.log(myFirstCar.honk());     // "Beep"
console.log(myFirstCar.numWheels);  // 4

// PART 3

/*
Create a class for a Motorcycle. This class should inherit from Vehicle and each motorcycle instance should have a property called numWheels which has a value of 2. It should also have a revEngine method which returns “VROOM!!!”
*/

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return `vroom!`;
    }

}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

console.log(myFirstMotorcycle.toString());// "The vehicle is a Honda Nighthawk from 2000."
console.log(myFirstMotorcycle.honk());     // "Beep."
console.log(myFirstMotorcycle.revEngine()); // "VROOM!!!"
console.log(myFirstMotorcycle.numWheels);  // 2

// PART 4

/*
Create a class for a Garage. It should have a property called vehicles which will store an array of vehicles, and a property called capacity which is a number indicating how many vehicles will fit in the garage. When you create a garage, vehicles will always be empty; you only need to provide the capacity.

A garage should also have an add method, which attempts to add a vehicle to the array of vehicles. However, if you try to add something which is not a vehicle, the garage should return the message “Only vehicles are allowed in here!”. Also, if the garage is at capacity, it should say “Sorry, we’re full.”
*/

class Garage {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    add(aNewCar) {
        if (!(aNewCar instanceof Vehicle)) {
            return `Sorry only cars allowed`;
        }
        if (this.vehicles.length >= this.capacity) {
            return `Sorry we are full`;
        }
        this.vehicles.push(aNewCar);
        return `A new car was added`;
    }
}
import { Car } from './Car';

console.log("----------------------------------------------------");
console.log("Creating a Toyota Car Instance");
console.log("----------------------------------------------------");

const myCar = new Car("Toyota");

console.log(`Initial speed: ${myCar.getSpeed()} km/h`);

console.log("----------------------------------------------------");
console.log("Accelerating to 30 km/h");
console.log("----------------------------------------------------");
myCar.accelerate(30);
console.log(`Current speed: ${myCar.getSpeed()} km/h`);

console.log("----------------------------------------------------");
console.log("Applying brake to reduce speed by 10 km/h");
console.log("----------------------------------------------------");
myCar.brake(10);
console.log(`Final speed: ${myCar.getSpeed()} km/h`);
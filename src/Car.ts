export class Car {
    readonly brand: string;
    private speed: number;

    constructor(brand: string) {
        this.brand = brand;
        this.speed = 0; // Start with speed 0
    }

    public accelerate(amount: number): void {
        if (amount > 0) {
            this.speed += amount;
            console.log(`${this.brand} accelerated. New speed: ${this.speed} km/h`);
        } else {
            console.log("Invalid acceleration amount.");
        }
    }

    public brake(amount: number): void {
        if (amount > 0) {
            this.speed = Math.max(0, this.speed - amount); // Prevent negative speed
            console.log(`${this.brand} braked. New speed: ${this.speed} km/h`);
        } else {
            console.log("Invalid brake amount.");
        }
    }

    public getSpeed(): number {
        return this.speed;
    }
}

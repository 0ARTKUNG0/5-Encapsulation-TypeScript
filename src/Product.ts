export class Product {
    readonly id: number;
    protected name: string;
    private price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(newPrice: number): void {
        if (newPrice > 0) {
            this.price = newPrice;
            console.log(`New price set: ${newPrice}`);
        } else {
            console.log("Invalid price.");
        }
    }
}

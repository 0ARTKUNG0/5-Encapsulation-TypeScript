import { Product } from './Product';

export class DiscountedProduct extends Product {
    public applyDiscount(discountPercent: number): void {
        if (discountPercent > 0 && discountPercent <= 100) {
            const discountAmount = (this.getPrice() * discountPercent) / 100;
            this.setPrice(this.getPrice() - discountAmount);
            console.log(`Discount of ${discountPercent}% applied. New price: ${this.getPrice()}`);
        } else {
            console.log("Invalid discount percentage.");
        }
    }
}

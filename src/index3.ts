import { DiscountedProduct } from './DiscountedProduct';

console.log("----------------------------------------------------");
console.log("Creating Discounted Product");
console.log("----------------------------------------------------");

const discountedItem = new DiscountedProduct(1, "Laptop", 1500);

console.log("----------------------------------------------------");
console.log(`Original Price: ${discountedItem.getPrice()}`);
console.log("----------------------------------------------------");

discountedItem.applyDiscount(10);

console.log("----------------------------------------------------");
console.log(`Price after Discount: ${discountedItem.getPrice()}`);
console.log("----------------------------------------------------");

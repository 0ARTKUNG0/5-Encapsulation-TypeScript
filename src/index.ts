import { BankAccount } from './BankAccount';
import { SavingAccount } from './SavingAccount';

const bankAccount = new BankAccount('35790', 'Fogus35790', 1000);
const savingAccount = new SavingAccount('12345', 'Kinnaree', 2000, 0.10);

console.log(`----------------------------NormalAccount-----------------------------`);
console.log(`BankAccount Balance: ${bankAccount.getBalance()}`);
bankAccount.deposit(500);
console.log(`BankAccount Balance after deposit: ${bankAccount.getBalance()}`);

console.log(`----------------------------SavingAccount-----------------------------`);
console.log(`SavingAccount Initial Balance: ${savingAccount.getBalance()}`);
savingAccount.deposit(500);
console.log(`SavingAccount Balance after deposit: ${savingAccount.getBalance()}`);
savingAccount.addInterest();
console.log(`SavingAccount Balance after interest: ${savingAccount.getBalance()}`);
import { BankAccount } from './BankAccount';

export class SavingAccount extends BankAccount {
    private interestRate: number;

    constructor(accountNumber: string, ownerName: string, initialBalance: number, interestRate: number) {
        super(accountNumber, ownerName, initialBalance);
        this.interestRate = interestRate;
    }

    public addInterest(): void {
        const interest = this.calculateInterest();
        this.deposit(interest);
        console.log(`Interest added: ${interest}`);
    }

    public calculateInterest(): number {
        return this.getBalance() * this.interestRate;
    }
}
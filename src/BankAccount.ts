export class BankAccount {
    private balance: number;
    protected ownerName: string;
    readonly accountNumber: string;

    constructor(accountNumber: string, ownerName: string, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = initialBalance;
    }

    public getBalance(): number {
        return this.balance;
    }

    public deposit(amount: number): number {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: ${amount}`);
        }
        else {
            console.log(`Invalid deposit amount: ${amount}`);
        }
        return amount;
    }

    public withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn: ${amount}`);
        } else {
            console.log(`Invalid withdrawal amount: ${amount}`);
        }
    }
}
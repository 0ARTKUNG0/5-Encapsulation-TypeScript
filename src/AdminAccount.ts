import { UserAccount } from './UserAccount';

export class AdminAccount extends UserAccount {
    constructor(username: string, password: string, email: string) {
        super(username, password, email);
    }

    public resetPassword(): void {
        console.log("Admin has reset the password.");
    }

    public showEmail(): void {
        console.log(`Admin accessing email: ${this.getEmail()}`);
    }
}

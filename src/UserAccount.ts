export class UserAccount {
    readonly username: string;
    private password: string;
    protected email: string;

    constructor(username: string, password: string, email: string) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public changePassword(oldPassword: string, newPassword: string): void {
        if (oldPassword === this.password) {
            this.password = newPassword;
            console.log("Password changed successfully.");
        } else {
            console.log("Incorrect old password.");
        }
    }
    protected getEmail(): string {
        return this.email;
    }
}

import { UserAccount } from './UserAccount';
import { AdminAccount } from './AdminAccount';

console.log("----------------------------------------------------");
console.log("Creating user and admin Accounts");
console.log("----------------------------------------------------");

const user = new UserAccount("john_doe", "pass123", "john@example.com");
const admin = new AdminAccount("admin_user", "adminPass", "admin@example.com");

console.log("----------------------------------------------------");
console.log("Testing access to private and Protected Properties");
console.log("----------------------------------------------------");

console.log("----------------------------------------------------");
console.log("Testing Change Password");
console.log("----------------------------------------------------");

user.changePassword("wrongPass", "newPass");
user.changePassword("pass123", "newPass456");
console.log("----------------------------------------------------");
console.log("Testing admin reset Password and Email Access");
console.log("----------------------------------------------------");

admin.resetPassword();
admin.showEmail();

import { test, expect } from '@playwright/test';

test('03_Classes', async ({ page }) => {
    //Định nghĩa structure của object
    interface IUser {
    name: string;
    email: string;
    isAdmin: boolean;
    }

    class User implements IUser {
    constructor(
      public name: string,
      public email: string,
      public isAdmin: boolean
    ) {}

    getInfo(): string {
      return `User: ${this.name}, Email: ${this.email}, Admin: ${this.isAdmin}`;
    }
  }

  //AdminUser Kế thừa User
  class AdminUser extends User {

    deleteUser(user: User): void {
      console.log(`${this.name} deleted user ${user.name}`);
    }

  }

  // tạo instance
  const user1 = new User("Phuong", "phuongnt@abc.com", false);
  const admin1 = new AdminUser("Admin", "admin@abc.com", true);

  // tạo mảng users
  const users: User[] = [user1, admin1];

  // duyệt mảng và in info
  users.forEach(user => {
    console.log(user.getInfo());
  });
  admin1.deleteUser(user1);

});
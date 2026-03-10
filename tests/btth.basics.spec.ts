import { test, expect } from '@playwright/test';

test('01_basics', async ({ page }) => {
//Khai bao bien
    let username: string = "Phuong";
    let age: number = 19;
    const isActive: boolean = true;
    const roles: Array<string> = ["CEVC1","QA"];
    const user:{name: string, email: string, isAdmin: boolean} =
    {
        name: "Phuong",
        email: "phuongnt@abc.com",
        isAdmin: false
    };
//In ra man hinh
console.log 
(
  `Hello ${user.name} (email: ${user.email}), Roles: ${roles.join(",")}, Active: ${isActive}`
);

//Nang cao: check tuoi
function checkAge (age: number):void {
    if (age >= 18) {
        console.log ("Adult");
    } else {
        console.log("Under 18");
    }
}

// Gọi function check tuoi
checkAge(age);


});
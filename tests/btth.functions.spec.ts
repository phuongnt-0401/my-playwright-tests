import { test, expect } from '@playwright/test';

test('02_functions', async ({ page }) => {
//tong
const sum = (a: number, b: number): number => a + b;

//tich
const multiply = (a: number, b: number): number => a * b;

//greet
function greet(name: string, role: string = "Guest"): void {
    console.log (`Hello ${name}, your role is ${role}`);
}

// Async function in message sau time ms
async function delayPrint(msg: string, time: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, time));
  console.log(msg);
}
// const delayPrint = async (msg: string, time: number): Promise<void> => {
//   await new Promise(r => setTimeout(r, time));
//   console.log(msg);
// };

//Goi ham
console.log("Sum:", sum(1, 2));
console.log("Multiply:", multiply(4, 2));
greet("Phuong");
await delayPrint("This message appears after 2 seconds", 2000);

});
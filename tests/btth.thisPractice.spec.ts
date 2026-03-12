import { test, expect } from '@playwright/test';

test('05_this trong class', async ({ page }) => {

class Counter {
  count: number = 0;

  increment() {
    this.count++;
    console.log(`Count is now: ${this.count}`);
  }

  reset() {
    this.count = 0;
    console.log("Counter reset");
  }
}

// Tạo instance
const counter = new Counter();

// Gọi các method
counter.increment();
counter.increment();
counter.reset();
});
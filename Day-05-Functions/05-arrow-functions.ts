// =============================================================================
// DAY 05 — FILE 05: Arrow Functions
// =============================================================================
//
// Arrow functions are a concise way to write functions in JavaScript/TypeScript.
// Syntax: (params) => returnValue
//
// Key differences from regular functions:
//   • Shorter syntax
//   • 'this' is LEXICALLY bound (takes 'this' from surrounding scope)
//   • Cannot be used as constructors (no 'new')
//   • No 'arguments' object
// =============================================================================

// ── Basic Arrow Function ──────────────────────────────────────────────────────
const greet = (name: string): string => {
    return `Hello, ${name}!`;
};
console.log(greet("Alice")); // → Hello, Alice!

// ── Concise Body (implicit return) ───────────────────────────────────────────
// If the function body is a SINGLE expression, you can omit {} and 'return'
const add = (a: number, b: number): number => a + b;
const square = (n: number): number => n * n;
const isEven = (n: number): boolean => n % 2 === 0;

console.log(add(5, 3));    // → 8
console.log(square(7));    // → 49
console.log(isEven(4));    // → true

// ── Returning Objects (wrap in parentheses!) ──────────────────────────────────
// Without parens, {} would be interpreted as a function body, not an object
const makeUser = (name: string, age: number) => ({ name, age });
//                                              ↑ parentheses needed here!
console.log(makeUser("Bob", 25)); // → { name: 'Bob', age: 25 }

// ── Arrow Functions as Type ──────────────────────────────────────────────────
// Type annotation for a variable holding an arrow function
let multiply: (a: number, b: number) => number;
multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // → 20

// ── Arrow Functions in Arrays ─────────────────────────────────────────────────
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evens = numbers.filter((n) => n % 2 === 0);           // [2, 4, 6, 8, 10]
let doubled = numbers.map((n) => n * 2);                  // [2, 4, 6, ...]
let total = numbers.reduce((sum, n) => sum + n, 0);       // 55
console.log(evens, doubled, total);

// ── 'this' in Arrow Functions vs Regular Functions ────────────────────────────
class Timer {
    seconds: number = 0;

    // WRONG WAY (regular function loses 'this' in callbacks):
    // startWrong() {
    //   setInterval(function() { this.seconds++; }, 1000); // 'this' is undefined here!
    // }

    // RIGHT WAY (arrow function captures 'this' from outer scope):
    start(): void {
        const tick = () => {
            this.seconds++; // ← 'this' correctly refers to the Timer instance
        };
        tick(); // simulate one tick
        console.log(`Seconds: ${this.seconds}`); // → Seconds: 1
    }
}
new Timer().start();

// ── Named vs Anonymous Arrow Functions ────────────────────────────────────────
// Named (assigned to a variable — has a name for debugging):
const divide = (a: number, b: number): number => a / b;

// Anonymous (inline — used directly):
[1, 2, 3].forEach((n) => console.log(n)); // → 1  2  3

// =============================================================================
// EXERCISE FOR YOU:
// 1. Convert the following regular function to an arrow function:
//    function capitalize(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }
// 2. Write an arrow function 'clamp(value, min, max)' that returns value
//    constrained between min and max
// 3. Use .map(), .filter(), and .reduce() with arrow functions to:
//    - Start with [1,2,3,4,5,6,7,8,9,10]
//    - Filter to only odd numbers
//    - Square each one
//    - Sum the result
// =============================================================================

export {};

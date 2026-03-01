// =============================================================================
// DAY 01 — FILE 02: Variables and Data Types
// =============================================================================
//
// In TypeScript (like JavaScript) you declare variables with:
//   let    → block-scoped, can be reassigned
//   const  → block-scoped, CANNOT be reassigned (prefer this!)
//   var    → function-scoped, avoid using (legacy JavaScript)
//
// BASIC TYPES IN TYPESCRIPT:
//   string   → text values
//   number   → all numbers (integer and decimal)
//   boolean  → true or false
//   null     → intentional absence of value
//   undefined → variable declared but not assigned
//   any      → opt out of type checking (AVOID this!)
//   unknown  → safer version of any
//   never    → a value that never occurs
//   void     → used for functions that return nothing
// =============================================================================

// ── string ──────────────────────────────────────────────────────────────────
let firstName: string = "Alice";
let lastName: string = 'Bob';              // single or double quotes both work
let greeting: string = `Hello, ${firstName}!`;  // template literal (backtick)
console.log(greeting);  // → Hello, Alice!

// ── number ──────────────────────────────────────────────────────────────────
let age: number = 25;
let price: number = 9.99;          // decimals are also 'number'
let negative: number = -42;
let hex: number = 0xff;            // hexadecimal
let binary: number = 0b1010;       // binary
console.log(age, price, negative); // → 25 9.99 -42

// ── boolean ─────────────────────────────────────────────────────────────────
let isLoggedIn: boolean = true;
let hasPermission: boolean = false;
console.log(isLoggedIn, hasPermission); // → true false

// ── any — USE WITH CAUTION ──────────────────────────────────────────────────
// 'any' turns OFF TypeScript type checking for that variable
// Avoid it unless absolutely necessary (it defeats the purpose of TypeScript)
let dynamicValue: any = "could be anything";
dynamicValue = 42;        // no error because it's 'any'
dynamicValue = true;      // still no error
console.log(dynamicValue);

// ── unknown — safer than any ─────────────────────────────────────────────────
// 'unknown' is like 'any' but you MUST check the type before using it
let userInput: unknown = "some input";
if (typeof userInput === "string") {
    // TypeScript now knows it's a string inside this block
    console.log(userInput.toUpperCase()); // → SOME INPUT
}

// ── void — for functions that return nothing ─────────────────────────────────
function logMessage(msg: string): void {
    console.log(msg);
    // no return statement needed (or return; with nothing)
}
logMessage("This function returns nothing");

// ── const vs let ────────────────────────────────────────────────────────────
const PI: number = 3.14159;
// PI = 3;  ← UNCOMMENT to see error: Cannot assign to 'PI' because it is a constant

let mutableValue: string = "I can change";
mutableValue = "Changed!";          // this is fine
console.log(mutableValue);           // → Changed!

// =============================================================================
// EXERCISE FOR YOU:
// 1. Declare a const for a product name (string)
// 2. Declare a let for the product price (number)
// 3. Declare a let for whether it's in stock (boolean)
// 4. Print all three with a descriptive message
// =============================================================================

export {};

// =============================================================================
// DAY 02 — FILE 05: Symbol and BigInt
// =============================================================================
//
// Two more primitive types that are less common but important to know:
//
// SYMBOL: A unique and immutable value. No two symbols are ever equal, even
//   if created with the same description. Useful as unique object keys.
//
// BIGINT: For integers larger than Number.MAX_SAFE_INTEGER (2^53 - 1).
//   Use when you need to work with very large numbers precisely.
// =============================================================================

// ── Symbol ────────────────────────────────────────────────────────────────────
// Every call to Symbol() creates a UNIQUE value
let sym1: symbol = Symbol("id");
let sym2: symbol = Symbol("id");
console.log(sym1 === sym2); // → false! Even with the same description, they are unique

let sym3 = Symbol("description");
console.log(sym3.toString());    // → Symbol(description)
console.log(sym3.description);   // → description

// ── Symbols as Unique Object Keys ────────────────────────────────────────────
// Symbols prevent key name collisions in objects
const ID_KEY = Symbol("id");
const SECRET_KEY = Symbol("secret");

let obj = {
    [ID_KEY]: 1001,
    [SECRET_KEY]: "abc123",
    name: "Alice"
};
console.log(obj[ID_KEY]);     // → 1001
console.log(obj[SECRET_KEY]); // → abc123
// Symbol keys do NOT appear in for...in loops or Object.keys() — they're hidden

// ── Well-Known Symbols ────────────────────────────────────────────────────────
// JavaScript has built-in Symbols like Symbol.iterator, Symbol.toPrimitive etc.
// These let you customize how objects behave with built-in operations.
// (Advanced topic — revisit after Day 09)

// ── BigInt ────────────────────────────────────────────────────────────────────
// Append 'n' to create a BigInt literal
let bigNumber: bigint = 9_007_199_254_740_991n; // Number.MAX_SAFE_INTEGER as BigInt
let bigger: bigint = 9_007_199_254_740_992n;    // This would lose precision as a number!
console.log(bigNumber); // → 9007199254740991n
console.log(bigger);    // → 9007199254740992n  (precise!)

// ── BigInt Arithmetic ────────────────────────────────────────────────────────
let a: bigint = 100n;
let b: bigint = 200n;
console.log(a + b); // → 300n
console.log(a * b); // → 20000n
console.log(b / a); // → 2n (integer division — no decimals!)

// ── CANNOT mix BigInt and Number ─────────────────────────────────────────────
// let mixed = 10n + 5;  ← UNCOMMENT: Error! Cannot mix BigInt and other types
// You must convert explicitly:
let normalNum: number = 5;
let result = a + BigInt(normalNum); // explicit conversion
console.log(result); // → 105n

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create two symbols with the same description and prove they are not equal
// 2. Create a BigInt representing the national debt of a country (very large num)
// 3. Try to add a BigInt and a regular number — read the TypeScript error
// =============================================================================

export {};

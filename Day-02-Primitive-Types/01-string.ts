// =============================================================================
// DAY 02 — FILE 01: The String Type
// =============================================================================
//
// 'string' is used for any text value.
// TypeScript strings are identical to JavaScript strings — same methods, same behavior.
// The key difference: TypeScript ENFORCES that you only use string methods on strings.
// =============================================================================

// ── Declaring Strings ────────────────────────────────────────────────────────
let single: string = 'Single quotes';
let double: string = "Double quotes";
let backtick: string = `Backtick (template literal)`;

// ── Template Literals ─────────────────────────────────────────────────────────
// Use backticks to embed expressions and variables inside strings
let name: string = "Alice";
let age: number = 30;
let intro: string = `My name is ${name} and I am ${age} years old.`;
console.log(intro);  // → My name is Alice and I am 30 years old.

// You can also have multi-line strings with template literals
let multiLine: string = `
  Line 1
  Line 2
  Line 3
`;
console.log(multiLine);

// ── Common String Methods (TypeScript knows these types!) ────────────────────
let sentence: string = "TypeScript is amazing!";

console.log(sentence.length);             // → 22
console.log(sentence.toUpperCase());      // → TYPESCRIPT IS AMAZING!
console.log(sentence.toLowerCase());      // → typescript is amazing!
console.log(sentence.includes("TypeScript")); // → true
console.log(sentence.startsWith("Type")); // → true
console.log(sentence.endsWith("!"));      // → true
console.log(sentence.indexOf("is"));      // → 11 (index of first occurrence)
console.log(sentence.replace("amazing", "great")); // → TypeScript is great!
console.log(sentence.split(" "));         // → ['TypeScript', 'is', 'amazing!']
console.log(sentence.trim());             // removes leading/trailing whitespace
console.log(sentence.slice(0, 10));       // → TypeScript

// ── TypeScript Prevents Wrong Method Usage ────────────────────────────────────
// let num: number = 42;
// num.toUpperCase();  ← UNCOMMENT: Error! 'toUpperCase' does not exist on type 'number'
// This is the power of TypeScript — catching these mistakes early!

// ── String Union (Literal Types) ─────────────────────────────────────────────
// Restrict a string variable to only specific values
type Season = "spring" | "summer" | "autumn" | "winter";
let currentSeason: Season = "summer";
// currentSeason = "monsoon";  ← UNCOMMENT: Error! 'monsoon' is not assignable to type 'Season'
console.log(currentSeason); // → summer

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create a string variable with your full name
// 2. Use string methods to: get its length, convert to uppercase, and check
//    if it includes a specific letter
// 3. Create a template literal that builds a short bio sentence about yourself
// =============================================================================

export {};

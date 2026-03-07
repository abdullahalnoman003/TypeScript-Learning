// =============================================================================
// DAY 02 — FILE 02: The Number Type
// =============================================================================
//
// TypeScript (like JavaScript) has a SINGLE number type for all numeric values.
// This includes: integers, decimals, negative numbers, Infinity, and NaN.
//
// Unlike many languages (Java, C++) there is NO separate int vs float.
// =============================================================================

// ── Integer and Decimal ───────────────────────────────────────────────────────
let integer: number = 42;
let decimal: number = 3.14159;
let negative: number = -100;
console.log(integer, decimal, negative); // → 42 3.14159 -100

// ── Numeric Separators (readability) ─────────────────────────────────────────
// Use underscores to make large numbers easier to read (TypeScript 2.7+)
let million: number = 1_000_000;
let bytes: number = 1_073_741_824; // 1 GB
console.log(million);  // → 1000000 (underscore is ignored at runtime)

// ── Special Number Values ─────────────────────────────────────────────────────
let infinite: number = Infinity;    // positive infinity
let negInfinite: number = -Infinity; // negative infinity
let notANumber: number = NaN;       // result of invalid math
console.log(infinite);              // → Infinity
console.log(0 / 0);                 // → NaN (Not a Number)
console.log(isNaN(NaN));            // → true (use isNaN() to check for NaN)

// ── Different Base Literals ───────────────────────────────────────────────────
let hex: number = 0xFF;      // Hexadecimal — base 16 → 255
let octal: number = 0o17;    // Octal — base 8 → 15
let binary: number = 0b1010; // Binary — base 2 → 10
console.log(hex, octal, binary); // → 255 15 10

// ── Math Operations ──────────────────────────────────────────────────────────
let a: number = 10;
let b: number = 3;
console.log(a + b);   // → 13  addition
console.log(a - b);   // → 7   subtraction
console.log(a * b);   // → 30  multiplication
console.log(a / b);   // → 3.333...  division
console.log(a % b);   // → 1   modulus (remainder)
console.log(a ** b);  // → 1000  exponentiation (10 to the power of 3)

// ── Math Object ────────────────────────────────────────────────────────────
console.log(Math.round(3.7));   // → 4
console.log(Math.floor(3.9));   // → 3
console.log(Math.ceil(3.1));    // → 4
console.log(Math.abs(-5));      // → 5
console.log(Math.max(1, 5, 3)); // → 5
console.log(Math.min(1, 5, 3)); // → 1
console.log(Math.sqrt(16));     // → 4

// ── Number to String & String to Number ────────────────────────────────────
let num: number = 42;
let numAsString: string = num.toString();           // "42"
let numFixed: string = (3.14159).toFixed(2);        // "3.14" (2 decimal places)
let parsed: number = parseInt("100px");             // 100 (stops at non-digit)
let parsedFloat: number = parseFloat("3.14abc");    // 3.14
console.log(typeof numAsString); // → string
console.log(parsed, parsedFloat); // → 100 3.14

// =============================================================================
// EXERCISE FOR YOU:
// 1. Calculate the area of a circle with radius 7 (area = π × r²)
//    Use Math.PI for π and Math.round to round to 2 decimal places
// 2. Write a function that takes a temperature in Celsius and returns Fahrenheit
//    Formula: (C × 9/5) + 32
// =============================================================================

export {};

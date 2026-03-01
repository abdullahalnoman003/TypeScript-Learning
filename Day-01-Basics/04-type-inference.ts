// =============================================================================
// DAY 01 — FILE 04: Type Inference
// =============================================================================
//
// TYPE INFERENCE: TypeScript automatically figures out the type of a variable
// based on the value you assign to it.
//
// You do NOT always need to write the type annotation manually.
// TypeScript is smart enough to infer it in many situations.
//
// RULE OF THUMB:
//   Use TYPE INFERENCE when the type is obvious from the value.
//   Use TYPE ANNOTATIONS when the type is NOT obvious, or for function params.
// =============================================================================

// ── Basic Inference ──────────────────────────────────────────────────────────
// TypeScript INFERS that 'city' is a string because we assigned a string to it
let city = "New York";          // TypeScript infers: string
let population = 8_336_817;     // TypeScript infers: number (underscores allowed for readability)
let isBigCity = true;           // TypeScript infers: boolean

// Even without annotations, TypeScript enforces the types:
// city = 42;  ← UNCOMMENT: Error! Type 'number' is not assignable to type 'string'
console.log(city, population, isBigCity); // → New York 8336817 true

// ── Inference from Function Return ────────────────────────────────────────────
// TypeScript infers the return type of a function from what it returns
function multiply(a: number, b: number) {
    return a * b;
    // TypeScript infers the return type is 'number' — no need to write ': number'
}
let result = multiply(6, 7); // TypeScript infers 'result' is a number
console.log(result);          // → 42

// ── Inference in Arrays ───────────────────────────────────────────────────────
let fruits = ["apple", "banana", "cherry"];
// TypeScript infers: string[]
// fruits.push(123);  ← UNCOMMENT: Error! 123 is not a string

let scores = [90, 85, 78, 92];
// TypeScript infers: number[]
console.log(fruits, scores);

// ── Inference in Objects ─────────────────────────────────────────────────────
let car = {
    brand: "Toyota",   // inferred as string
    year: 2023,        // inferred as number
    electric: false,   // inferred as boolean
};
// car.brand = 42;  ← UNCOMMENT: Error! 42 is not a string
console.log(car);

// ── When Inference Falls Short — Use Annotation ──────────────────────────────
// If you declare a variable without a value, TypeScript infers 'any'
// This is unsafe — add an annotation in this case!
let value;              // TypeScript infers: any (DANGEROUS)
let typedValue: string; // TypeScript knows it's a string (SAFE)

typedValue = "Hello";
console.log(typedValue);

// ── Hovering in VS Code ──────────────────────────────────────────────────────
// In VS Code, hover your mouse over any variable name.
// TypeScript will show you the INFERRED TYPE in a tooltip.
// This is how you verify what TypeScript thinks a variable's type is.

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create 3 variables using inference (no type annotation):
//    - a string, a number, a boolean
// 2. Hover over each in VS Code and confirm the inferred type
// 3. Write a function that takes two strings and returns their concatenation.
//    Let TypeScript infer the return type. Hover over the function name to see it.
// =============================================================================

export {};

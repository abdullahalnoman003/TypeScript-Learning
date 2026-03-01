// =============================================================================
// DAY 01 — FILE 01: Introduction to TypeScript
// =============================================================================
//
// WHAT IS TYPESCRIPT?
// ─────────────────────────────────────────────────────────────────────────────
// TypeScript is a SUPERSET of JavaScript created by Microsoft.
// That means: every valid JavaScript file is also a valid TypeScript file.
//
// TypeScript ADDS to JavaScript:
//   ✔ Static types (you say what type a variable is)
//   ✔ Better error catching BEFORE your code even runs
//   ✔ Autocompletion and IntelliSense in editors
//   ✔ Easier code maintenance in large projects
//
// TypeScript code is NOT run by browsers directly.
// It is COMPILED (converted) into plain JavaScript first.
//
//   TypeScript File (.ts)  →  TypeScript Compiler (tsc)  →  JavaScript File (.js)
//
// WHY USE TYPESCRIPT OVER JAVASCRIPT?
// ─────────────────────────────────────────────────────────────────────────────
// JavaScript problem example:
//   function add(a, b) { return a + b; }
//   add(5, "10")  → returns "510" (string concatenation! BAD!)
//
// TypeScript catches this BEFORE running:
//   function add(a: number, b: number): number { return a + b; }
//   add(5, "10")  → ERROR at compile time! Caught before disaster.
//
// SETUP (if not already done):
// ─────────────────────────────────────────────────────────────────────────────
//   npm install -g typescript    ← install TypeScript compiler globally
//   npm install -g ts-node       ← run .ts files directly without compiling
//   tsc --version                ← verify installation
//
// HOW TO RUN THIS FILE:
//   ts-node Day-01-Basics/01-introduction.ts
//
// =============================================================================

// Your first TypeScript program — a simple console log
// This is identical to JavaScript, TypeScript is a superset
console.log("Welcome to TypeScript — Day 01!");

// TypeScript adds TYPE ANNOTATIONS using a colon (:)
// Syntax: variableName: type = value
let message: string = "TypeScript is awesome!";
console.log(message);

// If you try to assign the wrong type, TypeScript will error:
// message = 123;  ← UNCOMMENT this to see the error (and then re-comment it)

// TypeScript can also INFER types — you don't always have to write the type
// Here TypeScript automatically knows 'count' is a number
let count = 42;
console.log("Count is:", count);

// count = "hello";  ← This would also error, even without the type annotation

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create a variable called 'yourName' with type string and assign your name
// 2. Create a variable called 'yourAge' with type number and assign your age
// 3. Print both using console.log
// 4. Try assigning the wrong type to each and read the error messages
// =============================================================================

export {};

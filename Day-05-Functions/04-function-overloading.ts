// =============================================================================
// DAY 05 — FILE 04: Function Overloading
// =============================================================================
//
// FUNCTION OVERLOADING lets you define MULTIPLE call signatures for one function.
// The function can behave differently depending on the TYPES of its arguments.
//
// STRUCTURE:
//   1. Write the OVERLOAD SIGNATURES (no body, just types)
//   2. Write the IMPLEMENTATION SIGNATURE (with body — handles all cases)
//
// Only the overload signatures are visible to callers.
// The implementation signature is internal.
// =============================================================================

// ── Problem Without Overloading ───────────────────────────────────────────────
// Without overloads you'd use 'any' and lose type safety:
// function process(input: any): any { ... } ← bad!

// ── With Overloading ──────────────────────────────────────────────────────────
// Example: process() that handles strings and numbers differently

// Overload signatures (no body):
function process(input: string): string;
function process(input: number): number;

// Implementation signature (must be compatible with ALL overloads):
function process(input: string | number): string | number {
    if (typeof input === "string") {
        return input.toUpperCase(); // string path
    }
    return input * 2;              // number path
}

// TypeScript knows exact return types based on input type:
let strResult: string = process("hello"); // TypeScript knows this returns string
let numResult: number = process(21);      // TypeScript knows this returns number
console.log(strResult); // → HELLO
console.log(numResult); // → 42

// ── Real-World Example: getElementById-style function ─────────────────────────
// Different overloads for different argument combinations
function createElement(tag: "a"): HTMLAnchorElement;
function createElement(tag: "canvas"): HTMLCanvasElement;
function createElement(tag: "table"): HTMLTableElement;
function createElement(tag: string): HTMLElement {
    return document.createElement(tag);
}
// Each call gets the precise element type back — no need to cast!

// ── Overloading with Optional-like Behavior ────────────────────────────────────
function formatDate(date: Date): string;
function formatDate(year: number, month: number, day: number): string;
function formatDate(dateOrYear: Date | number, month?: number, day?: number): string {
    if (dateOrYear instanceof Date) {
        return dateOrYear.toLocaleDateString();
    }
    return `${dateOrYear}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

console.log(formatDate(new Date()));     // → current date as locale string
console.log(formatDate(2024, 3, 15));   // → 2024-03-15

// ── When To Use Overloads ─────────────────────────────────────────────────────
// ✔ When the function has distinctly DIFFERENT behaviors for different input types
// ✔ When you need the return type to depend on the input type
// ✘ When optional/union parameters are sufficient — don't over-engineer!

// =============================================================================
// EXERCISE FOR YOU:
// 1. Write an overloaded function 'stringify' that:
//    - Takes a number → returns it as a formatted string "Number: X"
//    - Takes a boolean → returns "Yes" or "No"
//    - Takes a string → returns the string in quotes
// =============================================================================

export {};

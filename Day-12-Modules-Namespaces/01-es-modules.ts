// =============================================================================
// DAY 12 — FILE 01: ES Modules in TypeScript
// =============================================================================
//
// TypeScript uses the same ES Module system as modern JavaScript.
// You can EXPORT values from one file and IMPORT them in another.
//
// EXPORTS:
//   export const x = ...    → named export
//   export function f() {}  → named export
//   export interface I {}   → named export (types included!)
//   export default x        → default export (only one per file)
//
// IMPORTS:
//   import { x, f } from "./module"     → named import
//   import type { I } from "./module"   → type-only import (erased at compile time)
//   import defaultExport from "./module" → default import
//   import * as ns from "./module"       → namespace import
//
// NOTE: In this file we'll use comments to demonstrate what would go in each file
//       since we're keeping things in one file for demonstration.
// =============================================================================

// ─── Imagine this is: math.ts ─────────────────────────────────────────────────
// Named exports from a module
export const PI = 3.14159;
export function add(a: number, b: number): number { return a + b; }
export function multiply(a: number, b: number): number { return a * b; }

// Type exports — exported types are erased from JS output (no runtime cost)
export interface MathOptions {
    precision: number;
    roundUp: boolean;
}

// Default export
export default class Calculator {
    add(a: number, b: number): number { return a + b; }
    subtract(a: number, b: number): number { return a - b; }
}

// ─── In another file (e.g., main.ts): ────────────────────────────────────────
// Named import:
//   import { add, PI, MathOptions } from "./math";
//   import type { MathOptions } from "./math"; // type-only (preferred for types)

// Default import:
//   import Calculator from "./math";

// Namespace import (import everything as one object):
//   import * as Math from "./math";
//   Math.add(2, 3) → 5

// Re-export (barrel exports — common pattern in large projects):
//   export { add, PI } from "./math";  // re-export from another module
//   export * from "./math";             // re-export everything

// ─── Barrel Files (index.ts) ──────────────────────────────────────────────────
// In large projects, create an index.ts that re-exports everything:
// src/utils/index.ts:
//   export { formatDate } from "./date";
//   export { capitalize } from "./string";
//   export { clamp } from "./number";
//
// Then in other files: import { formatDate, capitalize } from "../utils"
// (instead of importing from each file separately)

// ─── Type-only Imports/Exports (TypeScript 3.8+) ───────────────────────────
// 'import type' ensures the import is completely erased at compile time
// Use this for interfaces, type aliases, and other type-only imports
// import type { User } from "./user";   // ← this is ideal for pure types

// ─── Module Resolution ─────────────────────────────────────────────────────
// TypeScript looks for modules in this order (with "moduleResolution": "node"):
//   1. ./file.ts
//   2. ./file.tsx
//   3. ./file.d.ts
//   4. ./file/index.ts
//
// NEVER include file extensions in import paths for .ts files:
//   import { x } from "./utils";    // ← correct (no .ts extension)
//   import { x } from "./utils.ts"; // ← incorrect in most configs

// ─── Declaration Files (.d.ts) ───────────────────────────────────────────────
// .d.ts files describe types for JavaScript libraries that have no TypeScript source.
// Install them with: npm install --save-dev @types/library-name
// Example: npm install --save-dev @types/lodash

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create a file 'src/utils/string-utils.ts' with exported functions:
//    capitalize, reverse, isPalindrome, wordCount
// 2. Create a file 'src/utils/number-utils.ts' with: clamp, round, factorial, isPrime
// 3. Create a barrel file 'src/utils/index.ts' that re-exports everything
// 4. In a main file, import and use functions from the barrel
// =============================================================================

// Local usage for demonstration:
console.log(add(5, 3));   // → 8
console.log(PI);          // → 3.14159
const calc = new Calculator();
console.log(calc.add(10, 20)); // → 30

export {};

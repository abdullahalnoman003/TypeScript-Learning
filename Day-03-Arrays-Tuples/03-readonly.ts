// =============================================================================
// DAY 03 — FILE 03: Readonly Arrays and Tuples
// =============================================================================
//
// The 'readonly' modifier prevents an array or tuple from being mutated
// after it is created. No push, pop, splice, or index assignment allowed.
//
// Use readonly when you want to ensure data is never accidentally modified.
// =============================================================================

// ── Readonly Arrays ───────────────────────────────────────────────────────────
// Two equivalent ways:
const readonlyArr1: readonly number[] = [1, 2, 3];
const readonlyArr2: ReadonlyArray<number> = [4, 5, 6];

// readonlyArr1.push(4);    ← UNCOMMENT: Error! push does not exist on readonly
// readonlyArr1[0] = 99;    ← UNCOMMENT: Error! Cannot assign to readonly element
// readonlyArr1.pop();      ← UNCOMMENT: Error! pop does not exist on readonly

// Reading is always allowed:
console.log(readonlyArr1[0]);  // → 1
console.log(readonlyArr1.length);   // → 3
console.log([...readonlyArr1]);     // → [1, 2, 3]  (spread creates a mutable copy)

// ── Readonly Tuples ───────────────────────────────────────────────────────────
const config: readonly [string, number, boolean] = ["localhost", 3000, true];
// config[0] = "production";  ← UNCOMMENT: Error! Cannot assign to readonly

console.log(config[0]); // → localhost
console.log(config[1]); // → 3000

// ── const vs readonly ─────────────────────────────────────────────────────────
// 'const' prevents REASSIGNING the variable itself
// 'readonly' prevents MUTATING the contents

const arr = [1, 2, 3];
// arr = [4, 5, 6];  ← Error (const prevents reassignment)
arr.push(4);        // ← Allowed! (const doesn't prevent mutation of contents)
console.log(arr);   // → [1, 2, 3, 4]

const readArr: readonly number[] = [1, 2, 3];
// readArr.push(4);  ← Error (readonly prevents mutation)
// readArr = [4, 5, 6]; ← Error (const prevents reassignment)
// readArr is fully immutable!

// ── Why Use Readonly? ─────────────────────────────────────────────────────────
// 1. Function parameters that should not be modified:
function sumAll(numbers: readonly number[]): number {
    // numbers.push(0);  ← TypeScript won't let this happen
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sumAll([1, 2, 3, 4, 5])); // → 15

// 2. Configuration objects that should never change
const DB_CONFIG: readonly [string, number] = ["localhost", 5432];
console.log(`Connecting to ${DB_CONFIG[0]}:${DB_CONFIG[1]}`);

// ── Readonly with Type Alias ──────────────────────────────────────────────────
type ImmutableCoords = readonly [number, number];
let origin: ImmutableCoords = [0, 0];
// origin[0] = 1;  ← Error! Cannot assign to readonly

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create a readonly array of 5 programming languages
// 2. Write a function that takes a readonly string array and returns the
//    longest string in the array
// 3. Try to call .sort() on a readonly array — observe the error
// =============================================================================

export {};

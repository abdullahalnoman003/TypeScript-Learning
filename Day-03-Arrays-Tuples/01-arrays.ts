// =============================================================================
// DAY 03 — FILE 01: Arrays
// =============================================================================
//
// An array is an ordered list of values. In TypeScript, arrays are TYPED —
// meaning all elements must be of the same type (or a union type).
//
// TWO WAYS TO TYPE AN ARRAY:
//   1. Type[]         → e.g. string[], number[]
//   2. Array<Type>    → e.g. Array<string>, Array<number>
// Both are equivalent. The first style is more common.
// =============================================================================

// ── Declaring Typed Arrays ────────────────────────────────────────────────────
let fruits: string[] = ["apple", "banana", "cherry"];
let scores: number[] = [95, 87, 73, 100];
let flags: boolean[] = [true, false, true, true];

// Alternative generic syntax
let names: Array<string> = ["Alice", "Bob", "Charlie"];
let ids: Array<number> = [1, 2, 3, 4, 5];

// ── Type Safety in Arrays ─────────────────────────────────────────────────────
// fruits.push(42);    ← UNCOMMENT: Error! 42 is not a string
// scores.push("A+");  ← UNCOMMENT: Error! "A+" is not a number
fruits.push("mango"); // ✔ correct — "mango" is a string
console.log(fruits); // → ['apple', 'banana', 'cherry', 'mango']

// ── Accessing Elements ────────────────────────────────────────────────────────
console.log(fruits[0]);  // → apple  (index starts at 0)
console.log(fruits[1]);  // → banana
console.log(fruits[fruits.length - 1]); // → last element

// ── Common Array Methods ──────────────────────────────────────────────────────
let nums: number[] = [3, 1, 4, 1, 5, 9, 2, 6];

// push — add to end, pop — remove from end
nums.push(100);
console.log(nums.pop());   // → 100  (removes and returns last element)

// unshift — add to beginning, shift — remove from beginning
nums.unshift(0);
console.log(nums.shift()); // → 0

// indexOf — find the index of a value (-1 if not found)
console.log(nums.indexOf(5));  // → some index

// includes — check if value exists
console.log(nums.includes(9)); // → true

// splice — remove/insert elements at any position
let removed = nums.splice(0, 2); // remove 2 elements starting at index 0
console.log("Removed:", removed);

// slice — copy a portion (non-destructive)
let copy = nums.slice(0, 3); // elements 0, 1, 2 (3 not included)
console.log("Slice:", copy);

// sort — sorts in place (CAREFUL: default sort is alphabetical!)
let numArr: number[] = [10, 1, 100, 2];
numArr.sort((a, b) => a - b); // numeric ascending sort
console.log(numArr); // → [1, 2, 10, 100]

// reverse
numArr.reverse();
console.log(numArr); // → [100, 10, 2, 1]

// ── Iteration ────────────────────────────────────────────────────────────────
let colors: string[] = ["red", "green", "blue"];

// for...of loop (cleanest way to iterate)
for (let color of colors) {
    console.log(color.toUpperCase()); // TypeScript knows 'color' is a string
}

// forEach with typed callback
colors.forEach((color: string, index: number) => {
    console.log(`${index}: ${color}`);
});

// map — transform each element, returns a NEW array
let lengths: number[] = colors.map((color) => color.length);
console.log(lengths); // → [3, 5, 4]

// filter — keep only elements matching a condition
let longColors: string[] = colors.filter((color) => color.length > 3);
console.log(longColors); // → ['green', 'blue']

// reduce — reduce array to a single value
let total: number = [1, 2, 3, 4, 5].reduce((sum, n) => sum + n, 0);
console.log(total); // → 15

// ── Multi-Dimensional Arrays ──────────────────────────────────────────────────
let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][2]); // → 6

// ── Union Type Arrays ─────────────────────────────────────────────────────────
// An array that can hold strings OR numbers
let mixed: (string | number)[] = ["Alice", 30, "Bob", 25];
console.log(mixed);

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create an array of 5 student names
// 2. Use .map() to create a new array where each name is all uppercase
// 3. Use .filter() to keep only names with more than 4 characters

export {};
// 4. Use .reduce() to build a single comma-separated string of all names
// =============================================================================

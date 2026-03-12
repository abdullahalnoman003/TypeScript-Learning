// =============================================================================
// DAY 05 — FILE 03: Rest Parameters
// =============================================================================
//
// REST PARAMETERS allow a function to accept an INDEFINITE number of arguments
// as an array. Use '...' before the parameter name.
//
// RULES:
//   - Only ONE rest parameter allowed per function
//   - Must be the LAST parameter
//   - TypeScript types it as an array: ...nums: number[]
// =============================================================================

// ── Basic Rest Parameter ──────────────────────────────────────────────────────
function sumAll(...nums: number[]): number {
    return nums.reduce((total, n) => total + n, 0);
}
console.log(sumAll(1, 2, 3));          // → 6
console.log(sumAll(10, 20, 30, 40));   // → 100
console.log(sumAll());                  // → 0 (empty array)

// ── Rest with Required Params ─────────────────────────────────────────────────
function buildSentence(subject: string, verb: string, ...objects: string[]): string {
    return `${subject} ${verb} ${objects.join(", ")}`;
}
console.log(buildSentence("Alice", "likes", "coding"));              // → Alice likes coding
console.log(buildSentence("Bob", "bought", "apples", "bananas", "milk")); // → Bob bought apples, bananas, milk

// ── Rest with Different Types ─────────────────────────────────────────────────
function logAll(label: string, ...items: (string | number)[]): void {
    console.log(`${label}:`, items.join(" | "));
}
logAll("Values", 1, "hello", 2, "world", 3); // → Values: 1 | hello | 2 | world | 3

// ── Spread vs Rest ────────────────────────────────────────────────────────────
// REST: bunches multiple function arguments INTO an array
// SPREAD: spreads an array OUT into individual function arguments

function addThree(a: number, b: number, c: number): number {
    return a + b + c;
}
let nums: [number, number, number] = [1, 2, 3];
console.log(addThree(...nums)); // → 6  SPREAD: array → individual args
// This is the opposite of rest!

// ── Typing a Tuple-like Rest ───────────────────────────────────────────────────
// You can also use a specific tuple type for rest params (advanced)
function coordinate(...args: [number, number, number?]): string {
    const [x, y, z] = args;
    return z !== undefined ? `(${x}, ${y}, ${z})` : `(${x}, ${y})`;
}
console.log(coordinate(1, 2));     // → (1, 2)
console.log(coordinate(1, 2, 3)); // → (1, 2, 3)

// =============================================================================
// EXERCISE FOR YOU:
// 1. Write a function 'joinStrings(separator, ...strings)' that joins all
//    strings with the given separator
// 2. Write a function 'average(...nums)' that returns the average of all numbers
// 3. Write a function 'mergeArrays<T>(...arrays: T[][]): T[]' that merges
//    multiple arrays into one (this introduces generics — look at Day 09 if stuck)
// =============================================================================

export {};

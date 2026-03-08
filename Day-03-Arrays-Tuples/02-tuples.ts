// =============================================================================
// DAY 03 — FILE 02: Tuples
// =============================================================================
//
// A TUPLE is an array with a FIXED number of elements where each element has
// a SPECIFIC type at a SPECIFIC position.
//
// Unlike regular arrays (where all elements must be the same type),
// tuples allow DIFFERENT types at different positions.
//
// Think of a tuple like a structured row of data.
// =============================================================================

// ── Declaring Tuples ──────────────────────────────────────────────────────────
// Syntax: [type1, type2, type3, ...]
let person: [string, number, boolean] = ["Alice", 30, true];
//           position 0  1       2
// position 0 MUST be string, position 1 MUST be number, position 2 MUST be boolean

console.log(person[0]); // → Alice    (TypeScript knows this is a string)
console.log(person[1]); // → 30       (TypeScript knows this is a number)
console.log(person[2]); // → true     (TypeScript knows this is a boolean)

// TypeScript prevents wrong types at each position:
// person[0] = 42;     ← UNCOMMENT: Error! number is not assignable to string
// person[1] = "Bob";  ← UNCOMMENT: Error! string is not assignable to number

// ── Real-World Tuple Example ──────────────────────────────────────────────────
// Tuples are great for representing structured records with mixed types
type Coordinate = [number, number];           // [x, y]
type RGBColor = [number, number, number];      // [red, green, blue]
type NameAge = [string, number];              // [name, age]

let point: Coordinate = [10, 20];
let red: RGBColor = [255, 0, 0];
let alice: NameAge = ["Alice", 30];

console.log(`Point: (${point[0]}, ${point[1]})`); // → Point: (10, 20)
console.log(`Color: rgb(${red.join(", ")})`);      // → Color: rgb(255, 0, 0)

// ── Destructuring Tuples ──────────────────────────────────────────────────────
// You can extract tuple values into named variables using destructuring
let employee: [string, number, string] = ["Bob", 50000, "Engineering"];
let [empName, empSalary, empDept] = employee; // destructuring

console.log(empName);   // → Bob
console.log(empSalary); // → 50000
console.log(empDept);   // → Engineering

// ── Optional Tuple Elements ───────────────────────────────────────────────────
// Use ? to mark a tuple element as optional
type OptionalTuple = [string, number, boolean?]; // boolean is optional
let t1: OptionalTuple = ["hello", 42, true];  // all three provided
let t2: OptionalTuple = ["world", 99];         // no boolean → that's fine

// ── Rest Elements in Tuples ───────────────────────────────────────────────────
// Tuples can end with a rest element for zero or more values of a specific type
type StringThenNumbers = [string, ...number[]];
let stn: StringThenNumbers = ["scores", 90, 85, 78, 100]; // one string + any number of numbers
console.log(stn[0]); // → scores
console.log(stn[1]); // → 90

// ── Returning Tuples from Functions ──────────────────────────────────────────
// Functions can return tuples to return multiple related values
function getMinMax(nums: number[]): [number, number] {
    return [Math.min(...nums), Math.max(...nums)];
}

let [min, max] = getMinMax([5, 1, 8, 3, 9, 2]);
console.log(`Min: ${min}, Max: ${max}`); // → Min: 1, Max: 9

// ── Tuple vs Array comparison ─────────────────────────────────────────────────
// Array: variable length, all elements same type
let arr: number[] = [1, 2, 3, 4, 5]; // can have any length

// Tuple: fixed length, specific type at each position
let tup: [string, number] = ["Alice", 30]; // MUST have exactly 2 elements

// =============================================================================
// EXERCISE FOR YOU:
// (add export {} at end of exercise solutions to keep this file a module)

export {};
// 1. Create a type alias 'Point3D' for a tuple of [x: number, y: number, z: number]
// 2. Write a function that takes a full name string and returns a tuple of
//    [firstName: string, lastName: string]
// 3. Destructure the returned tuple into separate variables and print them
// =============================================================================

// =============================================================================
// DAY 09 — FILE 01: Generic Functions
// =============================================================================
//
// GENERICS allow you to write functions (and classes, interfaces) that work
// with MULTIPLE TYPES while still being fully type-safe.
//
// Instead of using 'any' (which breaks type safety), use a TYPE PARAMETER <T>
// to let TypeScript figure out the type at call time.
//
// Think of <T> as a "type placeholder" — it gets filled in when you use the function.
//
// Naming conventions:
//   T → Type (most common)
//   K → Key
//   V → Value
//   E → Element
//   U → Second type
// =============================================================================

// ── The Problem Without Generics ──────────────────────────────────────────────
// You'd need separate functions for each type:
function identityString(value: string): string { return value; }
function identityNumber(value: number): number { return value; }
// ...or use 'any' and lose type safety:
function identityAny(value: any): any { return value; } // BAD! no type safety

// ── Generic Function ──────────────────────────────────────────────────────────
// <T> declares a type parameter — T is a placeholder for the actual type
function identity<T>(value: T): T {
    return value;
}

// TypeScript INFERS the type from the argument:
let str = identity("hello");    // T is inferred as string → returns string
let num = identity(42);         // T is inferred as number → returns number
let arr = identity([1, 2, 3]); // T is inferred as number[] → returns number[]

// You can also specify T explicitly:
let result = identity<boolean>(true);
console.log(str, num, arr, result); // → hello 42 [1,2,3] true

// ── Practical Generic Functions ────────────────────────────────────────────────
// Return the first element of any array
function first<T>(arr: T[]): T | undefined {
    return arr[0];
}
console.log(first(["a", "b", "c"])); // → "a"  (TypeScript knows it's string)
console.log(first([1, 2, 3]));       // → 1    (TypeScript knows it's number)
console.log(first([]));               // → undefined

// Return the last element
function last<T>(arr: T[]): T | undefined {
    return arr[arr.length - 1];
}

// Swap two values and return them as a tuple
function swap<T, U>(a: T, b: U): [U, T] {
    return [b, a];
}
let swapped = swap("hello", 42); // returns [42, "hello"] typed as [number, string]
console.log(swapped); // → [42, 'hello']

// ── Multiple Type Parameters ───────────────────────────────────────────────────
function pair<K, V>(key: K, value: V): { key: K; value: V } {
    return { key, value };
}
let p1 = pair("name", "Alice");       // { key: string, value: string }
let p2 = pair(1, true);               // { key: number, value: boolean }
let p3 = pair("score", 100);          // { key: string, value: number }
console.log(p1, p2, p3);

// ── Generic Merge ─────────────────────────────────────────────────────────────
function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}
let merged = merge({ name: "Alice" }, { age: 30, active: true });
console.log(merged.name);   // → Alice  (TypeScript knows this is string!)
console.log(merged.age);    // → 30     (TypeScript knows this is number!)

// ── map, filter, reduce (they're already generic in TypeScript!) ───────────────
// Array.prototype.map is typed as: map<U>(callbackfn: (value: T) => U): U[]
let nums: number[] = [1, 2, 3, 4, 5];
let strings: string[] = nums.map(n => n.toString()); // generic: T=number, U=string
console.log(strings); // → ['1', '2', '3', '4', '5']

// =============================================================================
// EXERCISE FOR YOU:
// 1. Write a generic function 'getProperty<T, K extends keyof T>(obj: T, key: K)'
//    that safely gets a property from an object
// 2. Write a generic function 'filterBy<T>(arr: T[], predicate: (item: T) => boolean)'
//    that returns filtered items
// 3. Write a generic function 'zip<T, U>(arr1: T[], arr2: U[]): [T, U][]'
//    that pairs elements from two arrays
// =============================================================================

export {};

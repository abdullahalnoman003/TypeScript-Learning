// =============================================================================
// DAY 09 — FILE 04: Generic Constraints
// =============================================================================
//
// By default, a type parameter T can be ANYTHING — string, number, object, etc.
// Sometimes you want to RESTRICT T to only types that have certain properties.
//
// Use 'extends' to add constraints:
//   <T extends string>      → T must be a string or a subtype of string
//   <T extends object>      → T must be an object (not a primitive)
//   <T extends { id: number }> → T must have at least an 'id' number property
//   <T extends Iterable<unknown>> → T must be iterable
//
// Constraints let you access specific properties/methods on T safely.
// =============================================================================

// ── Without Constraints (and the problem) ───────────────────────────────────
function getLength<T>(value: T): number {
    // return value.length; // ← Error! T might not have a .length property
    return 0; // we can't do anything useful without constraints
}

// ── With Constraints ─────────────────────────────────────────────────────────
// Constrain T to types that have a 'length' property
interface HasLength {
    length: number;
}

function getLength2<T extends HasLength>(value: T): number {
    return value.length; // ✔ safe! T is guaranteed to have .length
}

console.log(getLength2("hello"));         // → 5   (string has length)
console.log(getLength2([1, 2, 3, 4]));   // → 4   (array has length)
console.log(getLength2({ length: 10, name: "test" })); // → 10 (object with length)
// getLength2(42);  // ← Error! number doesn't have a 'length' property

// ── keyof Constraint ─────────────────────────────────────────────────────────
// 'keyof T' gives you the union of all property names of T as literal strings
// Together with extends, you can create type-safe property access

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]; // TypeScript knows the return type is T[K] — perfectly safe!
}

let user = { id: 1, name: "Alice", age: 30, email: "alice@example.com" };
let name = getProperty(user, "name");   // TypeScript knows: returns string
let id = getProperty(user, "id");       // TypeScript knows: returns number
// getProperty(user, "phone");          // ← Error! "phone" is not a key of user
console.log(name, id); // → Alice 1

// ── Constrain to Object and Use in Real Function ──────────────────────────────
function updateObject<T extends object, K extends keyof T>(
    obj: T,
    key: K,
    value: T[K]  // value must match the type of the property
): T {
    return { ...obj, [key]: value };
}

let updatedUser = updateObject(user, "name", "Alicia"); // ✔ name is string → "Alicia" is string
// let bad = updateObject(user, "age", "thirty");       // ← Error! age is number → "thirty" is string
console.log(updatedUser); // → { id: 1, name: 'Alicia', age: 30, email: '...' }

// ── Constraining to Types with a Specific Shape ───────────────────────────────
interface Identifiable {
    id: number;
}

// Works with any object that has an 'id: number' field
function findById<T extends Identifiable>(items: T[], id: number): T | undefined {
    return items.find(item => item.id === id);
}

interface Product { id: number; name: string; price: number; }
let products: Product[] = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Phone", price: 499 },
];

let found = findById(products, 2); // returns Product | undefined — fully typed!
console.log(found?.name);  // → Phone
console.log(found?.price); // → 499

// ── Default Type Parameters ────────────────────────────────────────────────────
// Type parameters can have defaults — used when the type is not specified
interface Container<T = string> { // default to string if not specified
    value: T;
}
let c1: Container = { value: "hello" };       // T defaults to string
let c2: Container<number> = { value: 42 };    // T is explicitly number

// =============================================================================
// EXERCISE FOR YOU:
// 1. Write a function 'largest<T extends { size: number }>(items: T[]): T'
//    that returns the item with the largest 'size' property
// 2. Write a function 'pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>'
//    that picks specific properties from an object
// 3. Write a generic function 'clamp<T extends number | bigint>(val, min, max): T'
// =============================================================================

export {};

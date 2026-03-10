// =============================================================================
// DAY 04 — FILE 01: Object Types
// =============================================================================
//
// Objects are collections of key-value pairs. In TypeScript, you define the
// SHAPE of an object — what properties it has and what type each property is.
//
// You can type an object:
//   1. Inline  → { name: string; age: number }
//   2. type alias → type Person = { name: string; age: number }
//   3. interface → interface Person { name: string; age: number }
//   (Interfaces are covered in the next file)
// =============================================================================

// ── Inline Object Type Annotation ────────────────────────────────────────────
let user: { name: string; age: number; isAdmin: boolean } = {
    name: "Alice",
    age: 30,
    isAdmin: true,
};
console.log(user.name);    // → Alice
console.log(user.age);     // → 30
console.log(user.isAdmin); // → true

// TypeScript prevents accessing non-existent properties:
// console.log(user.email);  ← UNCOMMENT: Error! Property 'email' does not exist

// ── Type Alias for Objects ────────────────────────────────────────────────────
// Reusable named type for an object shape
type Point = {
    x: number;
    y: number;
};

let origin: Point = { x: 0, y: 0 };
let corner: Point = { x: 100, y: 200 };
console.log(origin, corner);

// ── Nested Objects ───────────────────────────────────────────────────────────
type Address = {
    street: string;
    city: string;
    country: string;
};

type Person = {
    name: string;
    age: number;
    address: Address; // nested object
};

let alice: Person = {
    name: "Alice",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA",
    },
};
console.log(alice.address.city); // → New York

// ── Object Destructuring ─────────────────────────────────────────────────────
// Extract properties into variables
let { name, age } = alice;
console.log(name, age); // → Alice 30

// Rename while destructuring using :
let { name: personName, address: { city } } = alice;
console.log(personName, city); // → Alice New York

// ── Objects as Function Parameters ───────────────────────────────────────────
function greet(user: { name: string; age: number }): string {
    return `Hi ${user.name}, you are ${user.age} years old!`;
}
console.log(greet({ name: "Bob", age: 25 })); // → Hi Bob, you are 25 years old!

// ── Excess Property Checks ────────────────────────────────────────────────────
// TypeScript flags extra properties when you assign an object literal directly
type Car = { brand: string; year: number };
// let myCar: Car = { brand: "Toyota", year: 2020, color: "red" };
// UNCOMMENT above ↑ → Error! 'color' does not exist in type 'Car'

// But if assigned via a variable first, it's allowed (structural compatibility)
let carData = { brand: "Toyota", year: 2020, color: "red" }; // extra 'color' here
let myCar: Car = carData; // NO error — carData satisfies the Car shape

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create a type 'Product' with: name (string), price (number), inStock (boolean)
// 2. Create 3 product objects using that type
// 3. Write a function that takes a Product and prints a formatted product listing
// 4. Create a type 'Order' that has a customer name and an array of Product objects
// =============================================================================

export {};

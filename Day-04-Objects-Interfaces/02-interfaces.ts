// =============================================================================
// DAY 04 — FILE 02: Interfaces
// =============================================================================
//
// An INTERFACE defines a CONTRACT — a shape that an object MUST satisfy.
// Interfaces are one of TypeScript's most important and widely-used features.
//
// interface vs type alias:
//   Both can describe object shapes. Key differences:
//   • interface can be EXTENDED (inheritance) and MERGED (declaration merging)
//   • type can represent unions, primitives, tuples — more flexible
//   • For objects: prefer interface (conventional TypeScript style)
//   • For unions/complex types: use type
// =============================================================================

// ── Basic Interface ───────────────────────────────────────────────────────────
interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

let user1: User = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    isActive: true,
};
console.log(user1); // → { id: 1, name: 'Alice', email: '...', isActive: true }

// ── Interfaces as Function Parameters ────────────────────────────────────────
function displayUser(user: User): void {
    console.log(`[${user.id}] ${user.name} — ${user.email} — Active: ${user.isActive}`);
}
displayUser(user1); // → [1] Alice — alice@example.com — Active: true

// ── Extending Interfaces ──────────────────────────────────────────────────────
// A child interface inherits all properties of the parent using 'extends'
interface Admin extends User {
    adminLevel: number;
    permissions: string[];
}

let adminUser: Admin = {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    isActive: true,
    adminLevel: 3,
    permissions: ["read", "write", "delete"],
};
console.log(adminUser.permissions); // → ['read', 'write', 'delete']

// ── Extending Multiple Interfaces ─────────────────────────────────────────────
interface Timestamped {
    createdAt: Date;
    updatedAt: Date;
}

interface BlogPost extends User, Timestamped {
    title: string;
    content: string;
}
// BlogPost has ALL properties from User, Timestamped, plus its own

// ── Interface for Functions ───────────────────────────────────────────────────
// Interfaces can also describe function shapes
interface MathOperation {
    (a: number, b: number): number;
}

const add: MathOperation = (a, b) => a + b;
const multiply: MathOperation = (a, b) => a * b;
console.log(add(5, 3));      // → 8
console.log(multiply(5, 3)); // → 15

// ── Interface for Indexable Types ─────────────────────────────────────────────
// Describes objects with dynamic index-based access
interface StringMap {
    [key: string]: string; // any string key maps to a string value
}

let translations: StringMap = {
    hello: "hola",
    goodbye: "adios",
    thanks: "gracias",
};
console.log(translations["hello"]); // → hola

// ── Declaration Merging ───────────────────────────────────────────────────────
// Interfaces with the SAME NAME are automatically MERGED (type aliases can't do this)
interface Vehicle {
    brand: string;
}
interface Vehicle {
    speed: number; // this merges with the first Vehicle interface
}

let car: Vehicle = { brand: "Toyota", speed: 120 }; // needs BOTH properties
console.log(car); // → { brand: 'Toyota', speed: 120 }

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create an interface 'Animal' with: name, species, age
// 2. Create an interface 'Pet' that extends 'Animal' and adds: ownerName
// 3. Create an interface 'GuardDog' that extends 'Pet' and adds: trainingLevel
// 4. Create an object of type GuardDog and print all its properties
// =============================================================================

export {};

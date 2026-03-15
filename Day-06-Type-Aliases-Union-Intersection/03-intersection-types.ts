// =============================================================================
// DAY 06 — FILE 03: Intersection Types
// =============================================================================
//
// An INTERSECTION TYPE combines MULTIPLE types into ONE.
// The resulting type has ALL properties of ALL combined types.
// Use the ampersand & symbol: typeA & typeB
//
// Think of it as: "This value must satisfy ALL of these types at once"
// Compare to Union: "This value is ONE OF these types"
// =============================================================================

// ── Basic Intersection ──────────────────────────────────────────────────────────
type HasName = { name: string };
type HasAge = { age: number };
type HasEmail = { email: string };

// Intersection: must have ALL properties from ALL types
type Person = HasName & HasAge;
type ContactPerson = HasName & HasAge & HasEmail;

let person: Person = { name: "Alice", age: 30 };
let contact: ContactPerson = { name: "Bob", age: 25, email: "bob@example.com" };

console.log(person);  // → { name: 'Alice', age: 30 }
console.log(contact); // → { name: 'Bob', age: 25, email: '...' }

// ── Real-World: Role Composition ──────────────────────────────────────────────
// Intersections are great for "mixins" — combining behaviors
type Serializable = {
    serialize(): string;
};
type Loggable = {
    log(): void;
};
type Configurable = {
    getConfig(): object;
};

type FullService = Serializable & Loggable & Configurable;

// An object that satisfies FullService must implement ALL three methods:
const service: FullService = {
    serialize: () => JSON.stringify({ status: "ok" }),
    log: () => console.log("Service running"),
    getConfig: () => ({ timeout: 5000, retries: 3 }),
};
service.log();
console.log(service.serialize());

// ── Intersection vs Interface Extension ─────────────────────────────────────
// These two are functionally similar:
interface Animal { legs: number }
interface Bird extends Animal { canFly: boolean } // interface extension

type Animal2 = { legs: number };
type Bird2 = Animal2 & { canFly: boolean }; // intersection type

// Both result in { legs: number; canFly: boolean }

// ── Conflicting Properties in Intersections ──────────────────────────────────
// If the SAME property exists in both types with DIFFERENT types, the result is 'never'
// (because nothing can be both string AND number simultaneously)
type A = { id: string };
type B = { id: number };
type Conflict = A & B;
// let bad: Conflict = { id: "hello" }; ← Error! id must be string & number = never

// ── Practical Pattern: Adding Timestamps ─────────────────────────────────────
// Instead of adding timestamps to every type, create one reusable mixin
type Timestamped = {
    createdAt: Date;
    updatedAt: Date;
};

type User = { id: number; name: string };
type Post = { id: number; title: string; content: string };

type TimestampedUser = User & Timestamped;
type TimestampedPost = Post & Timestamped;

let user: TimestampedUser = {
    id: 1,
    name: "Alice",
    createdAt: new Date(),
    updatedAt: new Date(),
};
console.log(user);

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create three types: 'Flyable' (speed: number, altitude: number),
//    'Swimmable' (depth: number), 'Walkable' (stepCount: number)
// 2. Create a 'Duck' type as an intersection of all three
// 3. Create a duck object satisfying all properties
// 4. Write a function that accepts a 'Flyable & Swimmable' and prints its abilities
// =============================================================================

export {};

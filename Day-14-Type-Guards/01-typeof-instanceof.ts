// =============================================================================
// DAY 14 — FILE 01: typeof and instanceof Type Guards
// =============================================================================
//
// TYPE GUARDS are expressions that narrow down the type of a value within
// a specific block of code. Because of type guards, TypeScript can safely
// let you use type-specific properties and methods.
//
// Built-in type guards:
//   typeof    → narrow primitive types (string, number, boolean, etc.)
//   instanceof → narrow class instance types
//   Array.isArray() → narrow arrays
//   in operator → narrow object types by property existence
// =============================================================================

// ── typeof Type Guard ─────────────────────────────────────────────────────────
// typeof returns: "string" | "number" | "boolean" | "object" | "function" | "undefined" | "symbol" | "bigint"

function process(value: string | number | boolean | null): string {
    if (typeof value === "string") {
        // TypeScript knows 'value' is string here
        return `String: "${value.toUpperCase()}"`;
    }
    if (typeof value === "number") {
        // TypeScript knows 'value' is number here
        return `Number: ${value.toFixed(2)}`;
    }
    if (typeof value === "boolean") {
        // TypeScript knows 'value' is boolean here
        return `Boolean: ${value ? "YES" : "NO"}`;
    }
    // TypeScript knows 'value' is null here (all other branches exhausted)
    return "null value";
}

console.log(process("hello"));  // → String: "HELLO"
console.log(process(3.14));     // → Number: 3.14
console.log(process(true));     // → Boolean: YES
console.log(process(null));     // → null value

// ── typeof Limitations ────────────────────────────────────────────────────────
// typeof cannot distinguish between different object types:
// typeof [] === "object"       (array!)
// typeof null === "object"     (the famous JS bug!)
// typeof new Date() === "object"
// Use instanceof or custom type guards for objects

// ── instanceof Type Guard ──────────────────────────────────────────────────────
// instanceof checks if an object is an instance of a specific class/constructor
class Dog {
    bark(): void { console.log("Woof!"); }
    name: string;
    constructor(name: string) { this.name = name; }
}

class Cat {
    meow(): void { console.log("Meow!"); }
    name: string;
    constructor(name: string) { this.name = name; }
}

type Pet = Dog | Cat;

function makeNoise(pet: Pet): void {
    if (pet instanceof Dog) {
        pet.bark(); // TypeScript knows: pet is Dog → .bark() is available
    } else {
        pet.meow(); // TypeScript knows: pet is Cat → .meow() is available
    }
}

makeNoise(new Dog("Rex"));  // → Woof!
makeNoise(new Cat("Kitty")); // → Meow!

// ── Array.isArray() Guard ─────────────────────────────────────────────────────
function flatten(input: string | string[]): string[] {
    if (Array.isArray(input)) {
        return input; // TypeScript knows: input is string[]
    }
    return [input];  // TypeScript knows: input is string
}

console.log(flatten("hello"));           // → ['hello']
console.log(flatten(["a", "b", "c"])); // → ['a', 'b', 'c']

// ── 'in' Operator Guard ───────────────────────────────────────────────────────
// 'key in obj' returns true if 'key' is a property of obj
interface Admin { role: "admin"; adminLevel: number; }
interface RegularUser { role: "user"; subscription: string; }
type User = Admin | RegularUser;

function handleUser(user: User): void {
    if ("adminLevel" in user) {
        // TypeScript narrows: user is Admin (because only Admin has adminLevel)
        console.log(`Admin level: ${user.adminLevel}`);
    } else {
        // TypeScript narrows: user is RegularUser
        console.log(`Subscription: ${user.subscription}`);
    }
}

handleUser({ role: "admin", adminLevel: 3 }); // → Admin level: 3
handleUser({ role: "user", subscription: "premium" }); // → Subscription: premium

// =============================================================================
// EXERCISE FOR YOU:
// 1. Write a function 'describe(input: unknown): string' that handles:
//    string, number, boolean, null, undefined, array, and other objects
//    Use typeof, Array.isArray, and === null checks
// 2. Create 3 classes (Car, Truck, Motorcycle) and a function that accepts
//    'Car | Truck | Motorcycle' and uses instanceof to call the right method
// =============================================================================

export {};

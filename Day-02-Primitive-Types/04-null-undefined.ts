// =============================================================================
// DAY 02 — FILE 04: null and undefined
// =============================================================================
//
// null       → intentional absence of a value (you explicitly set it)
// undefined  → variable declared but never assigned a value
//
// With 'strictNullChecks: true' in tsconfig.json (recommended!):
//   null and undefined are their OWN types — they cannot be assigned to other
//   types unless you explicitly allow it with a union.
// =============================================================================

// ── undefined ────────────────────────────────────────────────────────────────
let notAssigned: undefined = undefined;  // explicitly typed as undefined
let declaredOnly: string | undefined;    // declared but no value → undefined
console.log(declaredOnly);               // → undefined

// ── null ─────────────────────────────────────────────────────────────────────
let empty: null = null;           // explicitly typed as null
let noValue: string | null = null; // can be string OR null
console.log(empty);               // → null

// ── null vs undefined — the difference ───────────────────────────────────────
// undefined = "this was never given a value"
// null      = "this was explicitly set to NOTHING"
console.log(typeof undefined); // → "undefined"
console.log(typeof null);      // → "object" (this is a famous JS quirk!)
console.log(null === undefined);   // → false (different types)
console.log(null == undefined);    // → true  (loose equality, avoid this)

// ── Optional Values (union with null/undefined) ───────────────────────────────
// A function parameter might not always be provided
function greet(name: string | undefined): void {
    if (name === undefined) {
        console.log("Hello, Guest!");
    } else {
        console.log(`Hello, ${name}!`);
    }
}
greet("Alice");     // → Hello, Alice!
greet(undefined);   // → Hello, Guest!

// ── Nullish Coalescing Operator (??) ─────────────────────────────────────────
// Returns the RIGHT side only if the LEFT side is null or undefined
// (NOT for 0 or "" like || does)
let userInput: string | null = null;
let displayName: string = userInput ?? "Anonymous";
console.log(displayName); // → Anonymous

let providedName: string | null = "Bob";
let name2: string = providedName ?? "Anonymous";
console.log(name2); // → Bob

// ── Optional Chaining (?.) ───────────────────────────────────────────────────
// Safely access properties of an object that might be null/undefined
type User = { name: string; address?: { city: string } };
// Use a type assertion so TypeScript doesn't narrow 'user' to just 'null'
let user = null as User | null;

let city = user?.address?.city; // safe — won't throw if user is null
console.log(city); // → undefined (instead of throwing an error)

// ── Non-null Assertion Operator (!) ──────────────────────────────────────────
// Use '!' when YOU know a value is not null/undefined but TypeScript doesn't
// WARNING: This bypasses type checking — only use when you are 100% sure
let maybeNull: string | null = "definitelyHasValue";
let definiteValue: string = maybeNull!; // tell TypeScript: "trust me, it's not null"
console.log(definiteValue.toUpperCase()); // → DEFINITELYHASVALUE

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create a function that takes a 'phone: string | null' parameter.
//    If phone is null print "No phone provided", otherwise print the phone number.
// 2. Use the ?? operator to provide a default for a possibly-null variable
// =============================================================================

export {};

// =============================================================================
// DAY 04 — FILE 04: Readonly Properties
// =============================================================================
//
// The 'readonly' modifier on a property means: you can SET it when the object
// is first created, but you CANNOT change it afterward.
//
// Great for: IDs, configuration values, constants in objects/interfaces.
// =============================================================================

interface Config {
    readonly host: string;    // cannot be changed after creation
    readonly port: number;    // cannot be changed after creation
    timeout: number;          // CAN be changed (no readonly)
}

let config: Config = {
    host: "localhost",
    port: 3000,
    timeout: 5000,
};

// config.host = "production.server.com";  ← UNCOMMENT: Error! Cannot assign to readonly
// config.port = 8080;                     ← UNCOMMENT: Error! Cannot assign to readonly
config.timeout = 10000; // ← OK! timeout is NOT readonly
console.log(config);

// ── Real-World: Immutable User Record ────────────────────────────────────────
interface User {
    readonly id: number;      // once created, ID never changes
    readonly createdAt: Date; // creation time never changes
    name: string;             // name CAN change (user can update it)
    email: string;            // email CAN change
}

let user: User = {
    id: 1001,
    createdAt: new Date(),
    name: "Alice",
    email: "alice@example.com",
};

user.name = "Alicia";  // ✔ allowed — name is not readonly
user.email = "alicia@example.com"; // ✔ allowed

// user.id = 9999;     ← Error! Cannot assign to readonly property 'id'
console.log(user);

// ── Readonly with Class Properties ────────────────────────────────────────────
// (Preview of Day 08 — Classes)
class Circle {
    readonly pi: number = 3.14159; // set once, never changes
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    area(): number {
        return this.pi * this.radius * this.radius;
    }
}

let c = new Circle(5);
console.log(c.area()); // → 78.53975
// c.pi = 3;           ← Error! Cannot assign to readonly property 'pi'

// ── Readonly vs const ─────────────────────────────────────────────────────────
// const: prevents reassigning the VARIABLE BINDING
// readonly: prevents reassigning an OBJECT PROPERTY

const obj = { name: "Alice" };
obj.name = "Bob"; // ← ALLOWED (const doesn't protect properties)
// obj = {};      // ← Error (const protects the binding)

// ── Utility Type: Readonly<T> ─────────────────────────────────────────────────
// Makes ALL properties of a type readonly at once
interface Point { x: number; y: number; }
type ReadonlyPoint = Readonly<Point>;

let p: ReadonlyPoint = { x: 10, y: 20 };
// p.x = 5;  ← UNCOMMENT: Error! x is readonly
console.log(p); // → { x: 10, y: 20 }

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create an interface 'BankAccount' with:
//    - readonly accountNumber: string
//    - readonly openedDate: Date
//    - balance: number (can change)
//    - ownerName: string (can change if transferred)
// 2. Create an account, try to change accountNumber (observe error),
//    then update the balance
// =============================================================================

export {};

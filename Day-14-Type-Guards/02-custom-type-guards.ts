// =============================================================================
// DAY 14 — FILE 02: Custom Type Guards
// =============================================================================
//
// When built-in guards (typeof, instanceof) aren't enough, you can write
// your own CUSTOM TYPE GUARD functions.
//
// A custom type guard is a function that returns: 'value is SomeType'
// This is called a TYPE PREDICATE.
//
// Syntax: function isXxx(value: any): value is Xxx { ... }
//
// When this function returns true, TypeScript knows the value is 'Xxx'.
// =============================================================================

// ── Type Predicate Syntax ─────────────────────────────────────────────────────
interface Fish {
    type: "fish";
    swim(): void;
}

interface Bird {
    type: "bird";
    fly(): void;
}

// Custom type guard — the 'pet is Fish' return type is the type predicate
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
    // OR: return pet.type === "fish"; (if using discriminant property)
}

function move(pet: Fish | Bird): void {
    if (isFish(pet)) {
        pet.swim(); // TypeScript knows: pet is Fish here
    } else {
        pet.fly();  // TypeScript knows: pet is Bird here
    }
}

let fish: Fish = { type: "fish", swim: () => console.log("Swimming...") };
let bird: Bird = { type: "bird", fly: () => console.log("Flying...") };

move(fish); // → Swimming...
move(bird); // → Flying...

// ── Narrowing 'unknown' with Type Guards ────────────────────────────────────
// 'unknown' is the safest way to receive data you don't know the shape of
// (e.g., API responses, user input)

interface User {
    id: number;
    name: string;
    email: string;
}

// Type guard to validate an unknown value is a User
function isUser(value: unknown): value is User {
    return (
        typeof value === "object" &&
        value !== null &&
        "id" in value &&
        "name" in value &&
        "email" in value &&
        typeof (value as User).id === "number" &&
        typeof (value as User).name === "string" &&
        typeof (value as User).email === "string"
    );
}

// Simulating received data (e.g., from an API):
const unknownData: unknown = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
};

if (isUser(unknownData)) {
    // TypeScript knows: unknownData is User here
    console.log(unknownData.name.toUpperCase()); // → ALICE
} else {
    console.log("Invalid user data");
}

// ── Assertion Functions ────────────────────────────────────────────────────────
// TypeScript 3.7+: functions that throw on invalid input
// After calling, TypeScript narrows the type for the rest of the scope
function assertIsString(value: unknown): asserts value is string {
    if (typeof value !== "string") {
        throw new Error(`Expected string, got ${typeof value}`);
    }
}

function processInput(input: unknown): void {
    assertIsString(input);
    // After this line, TypeScript knows 'input' is a string
    console.log(input.toUpperCase()); // safe!
}

processInput("hello"); // → HELLO
try { processInput(42); } catch (e: any) { console.log(e.message); }

// ── Combining Type Guards ─────────────────────────────────────────────────────
interface Square { kind: "square"; size: number; }
interface Circle { kind: "circle"; radius: number; }
interface Triangle { kind: "triangle"; base: number; height: number; }
type Shape = Square | Circle | Triangle;

function isSquare(s: Shape): s is Square { return s.kind === "square"; }
function isCircle(s: Shape): s is Circle { return s.kind === "circle"; }
function isTriangle(s: Shape): s is Triangle { return s.kind === "triangle"; }

function computeArea(shape: Shape): number {
    if (isSquare(shape)) return shape.size ** 2;
    if (isCircle(shape)) return Math.PI * shape.radius ** 2;
    return 0.5 * shape.base * shape.height;
}
console.log(computeArea({ kind: "circle", radius: 5 })); // → 78.53...

// =============================================================================
// EXERCISE FOR YOU:
// 1. Write type guards for the following: isString, isNumber, isBoolean, isNull
// 2. Write a type guard 'isNonEmptyArray<T>(arr: unknown): arr is T[]'
//    that checks if something is a non-empty array
// 3. Write an assertion function 'assertDefined<T>(val: T | null | undefined): asserts val is T'
// =============================================================================

export {};

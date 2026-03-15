// =============================================================================
// DAY 06 — FILE 02: Union Types
// =============================================================================
//
// A UNION TYPE allows a value to be ONE OF several types.
// Use the pipe | symbol: typeA | typeB | typeC
//
// The value must match EXACTLY ONE of the listed types.
// When using a union, TypeScript only allows operations safe for ALL members.
// Use TYPE NARROWING to work with the specific type inside conditions.
// =============================================================================

// ── Basic Union Types ─────────────────────────────────────────────────────────
let id: string | number;   // id can be either a string OR a number
id = "user-001";           // string ✔
id = 42;                   // number ✔
// id = true;              // ← Error! boolean is not in the union

let maybeNull: string | null = null;     // string or null
let maybeUnset: number | undefined;      // number or undefined

// ── Union as Parameter ────────────────────────────────────────────────────────
function printId(id: string | number): void {
    console.log(`ID: ${id}`);
}
printId("ABC-123"); // → ID: ABC-123
printId(456);       // → ID: 456

// ── Type Narrowing ────────────────────────────────────────────────────────────
// When you have a union, narrow it down to the SPECIFIC type before using
// type-specific methods
function process(value: string | number): string {
    if (typeof value === "string") {
        // TypeScript knows 'value' is a string here
        return value.toUpperCase(); // ← string method — safe!
    }
    // TypeScript knows 'value' is a number here
    return value.toFixed(2);         // ← number method — safe!
}
console.log(process("hello")); // → HELLO
console.log(process(3.14159)); // → 3.14

// ── Narrowing with instanceof ─────────────────────────────────────────────────
function formatError(error: string | Error): string {
    if (error instanceof Error) {
        return `Error: ${error.message}`;
    }
    return `Error: ${error}`;
}
console.log(formatError("Something went wrong")); // → Error: Something went wrong
console.log(formatError(new Error("File not found"))); // → Error: File not found

// ── Union with Object Types ───────────────────────────────────────────────────
type Cat = { type: "cat"; meow(): void };
type Dog = { type: "dog"; bark(): void };
type Pet = Cat | Dog;

function makeSound(pet: Pet): void {
    if (pet.type === "cat") {
        pet.meow(); // TypeScript knows it's a Cat here
    } else {
        pet.bark(); // TypeScript knows it's a Dog here
    }
}
// The 'type' property is called a "discriminant" — more on this in Day 14!

// ── Literal Union Types ─────────────────────────────────────────────────────
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
type HttpStatus = 200 | 201 | 400 | 401 | 403 | 404 | 500;

function request(url: string, method: HttpMethod): void {
    console.log(`${method} ${url}`);
}
request("/api/users", "GET");
// request("/api/users", "CONNECT"); ← Error! not in HttpMethod

// ── Narrowing with Array ──────────────────────────────────────────────────────
function processItems(items: string | string[]): string[] {
    if (Array.isArray(items)) {
        return items;            // already an array
    }
    return [items];              // wrap single string in array
}
console.log(processItems("hello"));          // → ['hello']
console.log(processItems(["a", "b", "c"])); // → ['a', 'b', 'c']

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create a type 'Padding' that can be: number (pixels) or string (e.g., "10px")
// 2. Write a function that accepts a Padding and always returns a string like "10px"
//    - If number is passed, append "px"
//    - If string is passed, return as-is
// 3. Create a union type 'Shape' = "circle" | "rectangle" | "triangle"
//    Write a function that takes a Shape and returns the number of sides
// =============================================================================

export {};

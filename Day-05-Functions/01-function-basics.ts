// =============================================================================
// DAY 05 — FILE 01: Function Basics
// =============================================================================
//
// Functions in TypeScript work just like JavaScript functions, but you ADD:
//   • TYPE ANNOTATIONS on parameters (what goes IN)
//   • TYPE ANNOTATIONS on the return type (what comes OUT)
//
// TypeScript will error if you:
//   - Pass the wrong type of argument
//   - Return the wrong type of value
//   - Call a function with too few or too many arguments
// =============================================================================

// ── Basic Function with Type Annotations ─────────────────────────────────────
function greet(name: string): string {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));  // → Hello, Alice!
// greet(42);                 ← UNCOMMENT: Error! Argument of type 'number' not assignable to 'string'

// ── Multiple Parameters ────────────────────────────────────────────────────────
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(5, 10)); // → 15

// ── void Return Type ──────────────────────────────────────────────────────────
// Use 'void' when the function does NOT return a meaningful value
function logMessage(message: string): void {
    console.log(`[LOG]: ${message}`);
    // no return statement required
}
logMessage("Server started"); // → [LOG]: Server started

// ── never Return Type ─────────────────────────────────────────────────────────
// 'never' means the function NEVER returns — it throws an error or loops forever
function throwError(message: string): never {
    throw new Error(message);
    // after throw, code never continues, so never is the correct return type
}

function infiniteLoop(): never {
    while (true) {
        // runs forever — never returns
    }
}

// ── Function Type Expressions ─────────────────────────────────────────────────
// Variables that HOLD functions have a function type
// Syntax: (paramName: paramType) => returnType
let multiply: (a: number, b: number) => number;
multiply = (a, b) => a * b; // assign a matching function
console.log(multiply(4, 5)); // → 20

// let multiply2: (a: number, b: number) => number;
// multiply2 = (a, b) => a.toString() + b; ← Error! Return type string ≠ number

// ── Functions as Parameters (Callbacks) ───────────────────────────────────────
// A function that takes another function as a parameter
function applyOperation(a: number, b: number, operation: (x: number, y: number) => number): number {
    return operation(a, b);
}

console.log(applyOperation(10, 5, add));        // → 15
console.log(applyOperation(10, 5, multiply));    // → 50
console.log(applyOperation(10, 5, (x, y) => x - y)); // → 5 (inline function)

// ── Inferred Return Types ────────────────────────────────────────────────────
// TypeScript can infer the return type — but explicit is usually better
function square(n: number) {   // return type inferred as number
    return n * n;
}
// Hover over 'square' in VS Code to see the inferred type

// =============================================================================
// EXERCISE FOR YOU:
// 1. Write a function 'divide(a, b)' that takes two numbers and returns a number.
//    Add a check: if b is 0, log "Cannot divide by zero" and return 0.
// 2. Write a function 'repeat(str, times)' that returns a string repeated N times
// 3. Write a higher-order function 'transform(arr, fn)' where arr is number[] and
//    fn is a function that takes a number and returns a number. Return the result
//    of applying fn to every element.
// =============================================================================

export {};

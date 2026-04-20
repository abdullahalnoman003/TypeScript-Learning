// =============================================================================
// DAY 14 — FILE 03: Discriminated Unions
// =============================================================================
//
// A DISCRIMINATED UNION (also called: tagged union / algebraic data type) is a
// union of types that each share one COMMON LITERAL PROPERTY called the
// "discriminant" or "tag".
//
// TypeScript narrows the union based on that common field.
//
// Pattern:
//   type Shape = Circle | Square | Triangle
//   each has a shared field like: kind: "circle" | "square" | "triangle"
//
// Benefits:
//   ✅ Safe narrowing without casting
//   ✅ Exhaustiveness checking via 'never'
//   ✅ Excellent IDE autocomplete
// =============================================================================

// ── Basic Discriminated Union ─────────────────────────────────────────────────
type Circle   = { kind: "circle";   radius: number };
type Square   = { kind: "square";   side: number };
type Rectangle = { kind: "rectangle"; width: number; height: number };

type Shape = Circle | Square | Rectangle;

function area(shape: Shape): number {
    switch (shape.kind) { // 'kind' is the discriminant
        case "circle":
            return Math.PI * shape.radius ** 2;  // narrowed to Circle
        case "square":
            return shape.side ** 2;              // narrowed to Square
        case "rectangle":
            return shape.width * shape.height;   // narrowed to Rectangle
    }
}
console.log(area({ kind: "circle", radius: 5 }));         // → 78.53...
console.log(area({ kind: "square", side: 4 }));           // → 16
console.log(area({ kind: "rectangle", width: 3, height: 6 })); // → 18

// ── Exhaustiveness Checking with 'never' ──────────────────────────────────────
// If you add a new type to the union but forget to handle it in the switch,
// 'never' ensures TypeScript gives you a compile-time error.

function assertNever(x: never, message?: string): never {
    throw new Error(message ?? `Unexpected value: ${JSON.stringify(x)}`);
}

function describeShape(shape: Shape): string {
    switch (shape.kind) {
        case "circle":    return `Circle with radius ${shape.radius}`;
        case "square":    return `Square with side ${shape.side}`;
        case "rectangle": return `Rectangle ${shape.width}×${shape.height}`;
        default:
            return assertNever(shape, "Unhandled shape kind");
            // If you add a Triangle type but forget this case, TypeScript errors ✅
    }
}
console.log(describeShape({ kind: "square", side: 7 })); // → Square with side 7

// ── Result Type Pattern ─────────────────────────────────────────────────────
// A very common real-world use of discriminated unions:
// representing success OR failure

type Result<T, E = string> =
    | { success: true;  value: T }
    | { success: false; error: E };

function divide(a: number, b: number): Result<number> {
    if (b === 0) return { success: false, error: "Division by zero" };
    return { success: true, value: a / b };
}

const result = divide(10, 2);
if (result.success) {
    console.log("Result:", result.value);  // 5  — TypeScript knows .value exists
} else {
    console.log("Error:", result.error);   // TypeScript knows .error exists
}

// ── Redux-Style Action Pattern ────────────────────────────────────────────────
// Discriminated unions are the foundation of Redux actions
type Action =
    | { type: "INCREMENT"; amount: number }
    | { type: "DECREMENT"; amount: number }
    | { type: "RESET" };

function reducer(state: number, action: Action): number {
    switch (action.type) {
        case "INCREMENT": return state + action.amount;
        case "DECREMENT": return state - action.amount;
        case "RESET":     return 0;
        // No 'default' needed — TypeScript knows all possible action types
    }
}
console.log(reducer(5, { type: "INCREMENT", amount: 3 })); // → 8
console.log(reducer(5, { type: "RESET" }));                // → 0

// ── Network Request State Pattern ────────────────────────────────────────────
type FetchState<T> =
    | { status: "idle" }
    | { status: "loading" }
    | { status: "success"; data: T }
    | { status: "error"; message: string };

function renderState(state: FetchState<string[]>): string {
    switch (state.status) {
        case "idle":    return "Waiting to fetch...";
        case "loading": return "Loading...";
        case "success": return `Got ${state.data.length} items`;
        case "error":   return `Error: ${state.message}`;
    }
}
console.log(renderState({ status: "loading" }));
console.log(renderState({ status: "success", data: ["a", "b", "c"] }));

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create a discriminated union for a payment system with types:
//    CreditCard (cardNumber, expiry), PayPal (email), BankTransfer (accountNumber, bankCode)
// 2. Write a function 'processPayment(method: PaymentMethod): string'
//    that handles each case and returns a description
// 3. Add exhaustiveness checking using assertNever
// 4. Create a Result<T, E> type and use it in a function that reads a file name (string)
//    and returns success with the content or failure with an error code (number)
// =============================================================================

export {};

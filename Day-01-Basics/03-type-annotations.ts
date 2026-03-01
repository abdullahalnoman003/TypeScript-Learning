// =============================================================================
// DAY 01 — FILE 03: Type Annotations
// =============================================================================
//
// TYPE ANNOTATION: You explicitly tell TypeScript what type a variable is.
// Syntax: variableName: type
//
// WHY ANNOTATE?
//   - Makes your intent clear to other developers (and to yourself later)
//   - TypeScript will enforce the type strictly
//   - Better autocompletion in your editor
//
// WHERE CAN YOU ADD ANNOTATIONS?
//   ✔ Variables
//   ✔ Function parameters
//   ✔ Function return types
//   ✔ Object properties
//   ✔ Array contents
// =============================================================================

// ── Variable Annotations ─────────────────────────────────────────────────────
let username: string = "Alice";
let score: number = 100;
let isActive: boolean = true;

// ── Function Parameter Annotations ──────────────────────────────────────────
// Annotate each parameter with its expected type
// The ': number' AFTER the closing parenthesis is the RETURN TYPE annotation
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(5, 10));  // → 15
// console.log(add("5", 10));  ← UNCOMMENT: Error! Argument of type 'string' is not assignable to 'number'

// ── Void Return Type ─────────────────────────────────────────────────────────
// Use 'void' when the function does NOT return a value
function printScore(name: string, points: number): void {
    console.log(`${name} scored ${points} points`);
}
printScore("Alice", 100);  // → Alice scored 100 points

// ── Object Type Annotations ───────────────────────────────────────────────────
// You can annotate objects inline using curly braces
let user: { name: string; age: number; isAdmin: boolean } = {
    name: "Bob",
    age: 30,
    isAdmin: false
};
console.log(user.name);    // → Bob
console.log(user.isAdmin); // → false

// ── Array Type Annotations ────────────────────────────────────────────────────
// Two equivalent ways to annotate arrays:
let numbers: number[] = [1, 2, 3, 4, 5];     // style 1 (more common)
let words: Array<string> = ["hello", "world"]; // style 2 (generic syntax)
console.log(numbers);  // → [1, 2, 3, 4, 5]
console.log(words);    // → ['hello', 'world']

// ── Annotating with Literal Types ────────────────────────────────────────────
// You can restrict a variable to ONLY specific values using literal types
let direction: "north" | "south" | "east" | "west" = "north";
// direction = "up";  ← UNCOMMENT: Error! "up" is not in the allowed values
console.log(direction); // → north

// =============================================================================
// EXERCISE FOR YOU:
// 1. Write a function called 'multiply' that takes two number params and
//    returns their product. Add a return type annotation.
// 2. Write a function called 'introduce' that takes a name (string) and
//    age (number) and prints a sentence. Return type should be void.
// 3. Create an object for a book with: title (string), pages (number),
//    isAvailable (boolean). Annotate the object type inline.
// =============================================================================

export {};

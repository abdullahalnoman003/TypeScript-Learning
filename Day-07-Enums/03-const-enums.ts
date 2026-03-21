// =============================================================================
// DAY 07 — FILE 03: Const Enums
// =============================================================================
//
// A CONST ENUM is compiled differently from a regular enum.
//
// Regular enum → TypeScript generates a JavaScript object at runtime (takes memory)
// Const enum   → TypeScript INLINES the values at compile time (zero runtime cost)
//
// The const enum disappears completely in the compiled JavaScript — TypeScript
// just replaces every use of it with its literal value.
//
// USE WHEN: Performance matters and you don't need runtime enum access
// AVOID WHEN: You need reverse mapping or access the enum at runtime
// =============================================================================

// ── Regular Enum (for comparison) ────────────────────────────────────────────
enum RegularDirection {
    North = 0,
    South = 1,
    East = 2,
    West = 3,
}
// Compiles to a JS object that exists at runtime:
// var RegularDirection;
// RegularDirection[RegularDirection["North"] = 0] = "North";
// ... etc.

// ── Const Enum ────────────────────────────────────────────────────────────────
const enum Direction {
    North = 0,
    South = 1,
    East = 2,
    West = 3,
}
// NO JS object is generated! Instead each usage is inlined:
// Direction.North → 0 (directly in the compiled output)

let facing: Direction = Direction.North;
// Compiles to: let facing = 0;  ← completely inlined!

function move(dir: Direction): void {
    if (dir === Direction.North) {
        console.log("Going North");
    }
    // Compiles to: if (dir === 0) { ... }  — no enum object needed!
}
move(Direction.East); // → (no output — East block not handled, just example)
move(Direction.North); // → Going North

// ── Const Enum with String Values ─────────────────────────────────────────────
const enum Emoji {
    Happy = "😊",
    Sad = "😢",
    Fire = "🔥",
    Star = "⭐",
}
let mood: Emoji = Emoji.Happy;
console.log(mood); // → 😊

// ── When to Use Each ──────────────────────────────────────────────────────────
// | Feature                         | enum | const enum |
// | Runtime JS object exists        |  ✔   |     ✗      |
// | Reverse mapping (value → name)  |  ✔   |     ✗      |
// | Zero runtime cost (inlined)     |  ✗   |     ✔      |
// | Safe to use across modules      |  ✔   |  ⚠ Careful |
// Note: const enums can cause issues when used across separate files/packages
//       In those cases, prefer regular enums or literal union types

// ── Alternative: Literal Union Type (preferred in modern TypeScript) ──────────
// Some TypeScript experts now prefer literal union types over enums entirely:
type Dir = "north" | "south" | "east" | "west";
let dir: Dir = "north";
// This has zero runtime overhead AND is easily serializable as a string!

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create a const enum 'Season' with Spring, Summer, Autumn, Winter
// 2. Write a function that takes a Season and returns a description string
// 3. Compile the file with 'tsc' and look at the output — notice the enum
//    is completely replaced with inline values!
//    Command: tsc Day-07-Enums/03-const-enums.ts --target ES2020 && cat Day-07-Enums/03-const-enums.js
// =============================================================================

export {};

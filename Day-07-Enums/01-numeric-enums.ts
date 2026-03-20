// =============================================================================
// DAY 07 — FILE 01: Numeric Enums
// =============================================================================
//
// An ENUM (enumeration) is a named set of named constants.
// It gives human-readable names to a set of related numeric (or string) values.
//
// By default, TypeScript enums are NUMERIC — they auto-assign numbers starting from 0.
//
// Use enums when you have a fixed set of related named values
// (e.g., directions, days of the week, user roles, HTTP status codes)
// =============================================================================

// ── Basic Numeric Enum ────────────────────────────────────────────────────────
enum Direction {
    North,   // = 0  (auto-assigned)
    South,   // = 1
    East,    // = 2
    West,    // = 3
}

let facing: Direction = Direction.North;
console.log(facing);            // → 0  (the underlying numeric value)
console.log(Direction.South);   // → 1
console.log(Direction.East);    // → 2

// ── Using Enum in a Function ───────────────────────────────────────────────────
function move(direction: Direction): void {
    switch (direction) {
        case Direction.North: console.log("Moving North"); break;
        case Direction.South: console.log("Moving South"); break;
        case Direction.East:  console.log("Moving East");  break;
        case Direction.West:  console.log("Moving West");  break;
    }
}
move(Direction.East); // → Moving East
// move(99);          // TypeScript warns — 99 is technically a number but suspicious

// ── Custom Starting Value ─────────────────────────────────────────────────────
enum Status {
    Pending = 1,   // start from 1
    Active,        // = 2  (auto-increments)
    Inactive,      // = 3
    Banned,        // = 4
}
console.log(Status.Pending);  // → 1
console.log(Status.Active);   // → 2
console.log(Status.Banned);   // → 4

// ── Custom Values ─────────────────────────────────────────────────────────────
enum HttpStatus {
    OK = 200,
    Created = 201,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
    InternalServerError = 500,
}
console.log(HttpStatus.OK);        // → 200
console.log(HttpStatus.NotFound);  // → 404

// ── Reverse Mapping (numeric enums only!) ────────────────────────────────────
// TypeScript numeric enums support reverse lookup: value → name
console.log(Direction[0]);   // → "North"  (0 maps back to the name!)
console.log(Direction[2]);   // → "East"

// This is useful for debugging
let val: number = 3;
console.log(`Direction name: ${Direction[val]}`); // → Direction name: West

// ── Computed Enum Members ────────────────────────────────────────────────────
enum FileAccess {
    None,              // 0
    Read = 1 << 1,     // 2  (bitwise shift — used for flags)
    Write = 1 << 2,    // 4
    ReadWrite = Read | Write, // 6  (bitwise OR)
}
console.log(FileAccess.Read);      // → 2
console.log(FileAccess.Write);     // → 4
console.log(FileAccess.ReadWrite); // → 6

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create an enum 'DayOfWeek' with values Monday through Sunday (1-7)
// 2. Write a function that takes a DayOfWeek and returns true if it's a weekend
// 3. Create an enum 'Priority' with Low=1, Medium=5, High=10, Critical=100
// 4. Write a function that takes two Priority values and returns the higher one
// =============================================================================

export {};

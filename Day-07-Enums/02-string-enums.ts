// =============================================================================
// DAY 07 — FILE 02: String Enums
// =============================================================================
//
// String enums assign STRING values to each member instead of numbers.
// They are more readable in logs and debugging — you see the name, not a number.
//
// Downside: No reverse mapping (unlike numeric enums)
// Upside: Much clearer in runtime output, API responses, databases
//
// RULE OF THUMB: Prefer string enums for anything serialized (JSON, DBs, APIs)
// =============================================================================

enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE",
    Yellow = "YELLOW",
}

let favoriteColor: Color = Color.Blue;
console.log(favoriteColor);      // → "BLUE"  (the string, not a number!)
console.log(Color.Red);          // → "RED"
console.log(Color.Green);        // → "GREEN"

// ── More Readable in Logs ─────────────────────────────────────────────────────
enum LogLevel {
    Debug = "DEBUG",
    Info = "INFO",
    Warning = "WARNING",
    Error = "ERROR",
    Critical = "CRITICAL",
}

function log(level: LogLevel, message: string): void {
    console.log(`[${level}] ${message}`);
}
log(LogLevel.Info, "Server started");      // → [INFO] Server started
log(LogLevel.Error, "Connection failed");  // → [ERROR] Connection failed

// ── String Enums in APIs ─────────────────────────────────────────────────────
// Perfect for values that go over the network or into a database
enum UserRole {
    Admin = "admin",
    Editor = "editor",
    Viewer = "viewer",
    Guest = "guest",
}

interface User {
    id: number;
    name: string;
    role: UserRole;
}

let alice: User = { id: 1, name: "Alice", role: UserRole.Admin };
let bob: User = { id: 2, name: "Bob", role: UserRole.Viewer };

// When serialized to JSON, you'd see "admin" and "viewer" — totally readable!
console.log(JSON.stringify(alice)); // → {"id":1,"name":"Alice","role":"admin"}

// ── Checking Enum Values ───────────────────────────────────────────────────────
function isAdmin(user: User): boolean {
    return user.role === UserRole.Admin;
}
console.log(isAdmin(alice)); // → true
console.log(isAdmin(bob));   // → false

// ── String Enum Has NO Reverse Mapping ────────────────────────────────────────
// console.log(Color["RED"]);  ← This will be undefined (no reverse mapping for string enums)
// console.log(LogLevel["DEBUG"]); ← undefined

// ── Mixing Numeric and String in One Enum (Heterogeneous — Avoid!) ────────────
// TypeScript allows mixing but it's confusing — don't do this in real code
enum Mixed {
    Yes = 1,
    No = "NO",
}
// Generally avoid mixed enums — use all-numeric OR all-string

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create a string enum 'Continent' with all 7 continent names
// 2. Create an interface 'Country' with name (string) and continent (Continent)
// 3. Create 3 country objects and log them as JSON (see the readable string values)
// =============================================================================

export {};

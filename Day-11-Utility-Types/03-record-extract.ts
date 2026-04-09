// =============================================================================
// DAY 11 — FILE 03: Record and Extract
// =============================================================================
//
//   Record<K, V>  → creates an object type with keys of type K and values of type V
//   Extract<T, U> → opposite of Exclude — KEEPS only types from T assignable to U
// =============================================================================

// ── Record<K, V> ──────────────────────────────────────────────────────────────
// Creates a type like: { [key: K]: V }
// K must be a string | number | symbol

// Simple string map:
type ColorHex = Record<string, string>;
let palette: ColorHex = {
    primary: "#007bff",
    secondary: "#6c757d",
    success: "#28a745",
    danger: "#dc3545",
};

// Constrained keys (ensures all cases are handled):
type DayOfWeek = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
type DaySchedule = Record<DayOfWeek, string[]>; // each day maps to a list of events

let weeklySchedule: DaySchedule = {
    Mon: ["Morning standup", "Code review"],
    Tue: ["Design meeting"],
    Wed: ["Sprint planning"],
    Thu: ["1:1 with manager"],
    Fri: ["Retrospective"],
    Sat: [],
    Sun: ["Personal project"],
};
// If you forget a day: TypeScript will complain!

// ── Record for Lookup Tables ──────────────────────────────────────────────────
type CountryCode = "US" | "CA" | "GB" | "DE" | "FR";
type CountryInfo = { name: string; currency: string; };

const countries: Record<CountryCode, CountryInfo> = {
    US: { name: "United States", currency: "USD" },
    CA: { name: "Canada", currency: "CAD" },
    GB: { name: "United Kingdom", currency: "GBP" },
    DE: { name: "Germany", currency: "EUR" },
    FR: { name: "France", currency: "EUR" },
};
console.log(countries.US.currency); // → USD

// ── Record for Caching ────────────────────────────────────────────────────────
// id → User lookup cache
interface User { id: number; name: string; }
const cache: Record<number, User> = {};
cache[1] = { id: 1, name: "Alice" };
cache[2] = { id: 2, name: "Bob" };
console.log(cache[1].name); // → Alice

// ── Extract<T, U> ─────────────────────────────────────────────────────────────
// KEEPS members of T that ARE assignable to U (opposite of Exclude)
type AllShapes = "circle" | "square" | "triangle" | "rectangle" | "pentagon";
type SimpleShapes = Extract<AllShapes, "circle" | "square" | "triangle">;
// → "circle" | "square" | "triangle"

type Mixed = string | number | boolean | string[] | number[];
type OnlyArrays = Extract<Mixed, any[]>;  // → string[] | number[]
type OnlyPrimitives = Exclude<Mixed, any[]>; // → string | number | boolean

// ── Extract for Narrowing Interfaces ─────────────────────────────────────────
interface Cat { type: "cat"; meow(): void; }
interface Dog { type: "dog"; bark(): void; }
interface Bird { type: "bird"; chirp(): void; }
type Pet = Cat | Dog | Bird;

// Extract only the types that have type: "cat" | "dog"
type FurryPet = Extract<Pet, { type: "cat" | "dog" }>; // → Cat | Dog

// ── Building a Type-safe Error Map ────────────────────────────────────────────
type ErrorCode = "NOT_FOUND" | "UNAUTHORIZED" | "FORBIDDEN" | "SERVER_ERROR";
type ErrorMessage = Record<ErrorCode, string>;

const errors: ErrorMessage = {
    NOT_FOUND: "The requested resource was not found.",
    UNAUTHORIZED: "You are not authenticated.",
    FORBIDDEN: "You do not have permission to access this resource.",
    SERVER_ERROR: "An internal server error occurred.",
};
console.log(errors.NOT_FOUND);

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create a Record<string, number> to store word frequencies in a sentence
//    Write a function that takes a string and returns this frequency map
// 2. Create a type 'HttpStatusMessages' using Record with HTTP status codes as
//    keys (200, 201, 400, 401, 404, 500) and string values
// 3. Use Extract to get only string-valued properties from a union of types
// =============================================================================

export {};

// =============================================================================
// DAY 10 — FILE 01: Mapped Types
// =============================================================================
//
// MAPPED TYPES let you transform every property of an existing type into a new type.
// You "iterate" over the keys of a type and apply modifications.
//
// Syntax: { [K in keyof T]: ... }
//
// This is how TypeScript's built-in Partial<T>, Readonly<T>, Required<T>
// are actually implemented under the hood!
// =============================================================================

// ── Problem Mapped Types Solve ────────────────────────────────────────────────
// Suppose you have:
interface User {
    id: number;
    name: string;
    email: string;
}

// Without mapped types, making all properties optional requires manual copy:
interface PartialUserManual {
    id?: number;
    name?: string;
    email?: string;
}
// This is error-prone — if 'User' changes, you must update this too!

// ── Basic Mapped Type ─────────────────────────────────────────────────────────
// Make ALL properties of User optional — automatically!
type PartialUser = { [K in keyof User]?: User[K] };
// [K in keyof User] → for each property name K in User
// ?                  → make it optional
// User[K]           → the original value type

// ── Re-implementing built-in utility types ────────────────────────────────────
// These are exactly how TypeScript implements Partial, Required, Readonly:

type MyPartial<T> = { [K in keyof T]?: T[K] };
type MyRequired<T> = { [K in keyof T]-?: T[K] }; // -? removes optionality
type MyReadonly<T> = { readonly [K in keyof T]: T[K] };
type MyMutable<T> = { -readonly [K in keyof T]: T[K] }; // -readonly removes readonly

// Test them:
type PartialUser2 = MyPartial<User>;
type ReadonlyUser = MyReadonly<User>;

let partial: PartialUser2 = { name: "Alice" }; // only name provided — OK!
let locked: ReadonlyUser = { id: 1, name: "Bob", email: "b@b.com" };
// locked.name = "Charlie"; // ← Error! name is readonly

// ── Adding Modifiers and Transforming Values ──────────────────────────────────
// Transform each property to a nullable version (T | null)
type Nullable<T> = { [K in keyof T]: T[K] | null };
type NullableUser = Nullable<User>;

let nu: NullableUser = { id: 1, name: null, email: "a@b.com" }; // name can be null

// ── Record<K, V> — another mapped type ────────────────────────────────────────
// Creates an object where keys are K and values are V
type MyRecord<K extends string | number | symbol, V> = { [P in K]: V };

type ColorMap = MyRecord<"red" | "green" | "blue", string>;
let colors: ColorMap = { red: "#FF0000", green: "#00FF00", blue: "#0000FF" };
console.log(colors.red); // → #FF0000

// ── Practical: Flag Map ────────────────────────────────────────────────────────
// Create a type where every property of User becomes a boolean flag
type UserFlags = { [K in keyof User]: boolean };
let flags: UserFlags = { id: true, name: false, email: true };

// ── Remapping Keys (TypeScript 4.1+) ─────────────────────────────────────────
// Use 'as' to rename keys during mapping
type Getters<T> = {
    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
};
type UserGetters = Getters<User>;
// Results in: { getId(): number; getName(): string; getEmail(): string; }

let userGetters: UserGetters = {
    getId: () => 1,
    getName: () => "Alice",
    getEmail: () => "alice@example.com",
};
console.log(userGetters.getName()); // → Alice

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create a mapped type 'Optional<T, K extends keyof T>' that makes only
//    specific properties (K) optional while keeping others required
// 2. Create a mapped type 'Stringify<T>' that converts all properties to string
// 3. Create a mapped type 'Validate<T>' where each property becomes a function
//    that validates that property: (value: T[K]) => boolean
// =============================================================================

export {};

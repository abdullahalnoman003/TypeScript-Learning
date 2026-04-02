// =============================================================================
// DAY 10 — FILE 02: Conditional Types
// =============================================================================
//
// CONDITIONAL TYPES allow types to be chosen based on a condition.
// They follow the ternary operator pattern:
//
//   T extends U ? X : Y
//   → "If T is assignable to U, the type is X; otherwise it's Y"
//
// This lets you write type-level logic — incredibly powerful for libraries.
// =============================================================================

// ── Basic Conditional Type ────────────────────────────────────────────────────
type IsString<T> = T extends string ? true : false;

type A = IsString<string>;  // true
type B = IsString<number>;  // false
type C = IsString<"hello">; // true (string literal extends string)

// ── Practical: Non-Nullable ───────────────────────────────────────────────────
// Remove null and undefined from a type
type NonNullable2<T> = T extends null | undefined ? never : T;
// This is how TypeScript's built-in NonNullable<T> is implemented!

type D = NonNullable2<string | null>;      // string
type E = NonNullable2<number | undefined>; // number
type F = NonNullable2<null>;               // never

// ── Distributive Conditional Types ────────────────────────────────────────────
// When T is a UNION type, the condition distributes over each member:
type ToArray<T> = T extends unknown ? T[] : never;

type G = ToArray<string | number>; // string[] | number[]
// It's distributed: ToArray<string> | ToArray<number> = string[] | number[]

// ── Flatten Type ──────────────────────────────────────────────────────────────
// If T is an array, get its element type; otherwise keep T
type Flatten<T> = T extends Array<infer Item> ? Item : T;

type H = Flatten<string[]>;  // string (unwrapped)
type I = Flatten<number[]>;  // number (unwrapped)
type J = Flatten<boolean>;   // boolean (not an array, kept as-is)

// ── Extract and Exclude ────────────────────────────────────────────────────────
// These are built-in utility types using conditional types internally:

// Extract<T, U> — keeps only types in T that are assignable to U
type MyExtract<T, U> = T extends U ? T : never;
type OnlyStrings = MyExtract<string | number | boolean | null, string | null>;
// → string | null

// Exclude<T, U> — removes types in T that are assignable to U
type MyExclude<T, U> = T extends U ? never : T;
type NoNulls = MyExclude<string | number | null | undefined, null | undefined>;
// → string | number

// ── ReturnType ────────────────────────────────────────────────────────────────
// Built using conditional types + infer:
type MyReturnType<T extends (...args: any) => any> =
    T extends (...args: any) => infer R ? R : never;

function fetchUser() { return { id: 1, name: "Alice" }; }
type FetchUserReturn = MyReturnType<typeof fetchUser>; // { id: number; name: string }

// ── Nested Conditional Types ──────────────────────────────────────────────────
// Types can be nested for complex logic (use sparingly — can get confusing!)
type TypeName<T> =
    T extends string   ? "string"  :
    T extends number   ? "number"  :
    T extends boolean  ? "boolean" :
    T extends null     ? "null"    :
    T extends undefined? "undefined" :
    T extends Function ? "function" :
    "object";

type K = TypeName<string>;    // "string"
type L = TypeName<42>;        // "number"
type M = TypeName<boolean>;   // "boolean"
type N = TypeName<() => void>; // "function"

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create 'IsArray<T>' — returns true if T is an array, false otherwise
// 2. Create 'UnwrapPromise<T>' that gets the type inside a Promise<T>
//    (hint: T extends Promise<infer U> ? U : T)
// 3. Create 'DeepReadonly<T>' that recursively makes all nested objects readonly
// =============================================================================

export {};

// =============================================================================
// DAY 10 — FILE 04: The infer Keyword
// =============================================================================
//
// 'infer' is used INSIDE conditional types to CAPTURE and NAME a type
// that TypeScript infers from a pattern match.
//
// Think of it as: "When this condition matches, let TypeScript figure out
// what type goes HERE, and call it R (or whatever name you choose)"
//
// Syntax: T extends SomeType<infer R> ? R : never
// =============================================================================

// ── Basic infer Usage ─────────────────────────────────────────────────────────
// Get the element type of an array
type ArrayElement<T> = T extends Array<infer Element> ? Element : never;

type StrElement = ArrayElement<string[]>;    // string
type NumElement = ArrayElement<number[]>;    // number
type BoolElement = ArrayElement<boolean[]>;  // boolean
type NeverEl = ArrayElement<string>;        // never (not an array)

// ── ReturnType<T> — the classic infer example ─────────────────────────────────
// Capture the return type of a function
type MyReturnType<T extends (...args: any) => any> =
    T extends (...args: any) => infer Return ? Return : never;
//                                      ↑ TypeScript infers what R is from the actual function

function greet(name: string): string { return `Hello, ${name}`; }
function add(a: number, b: number): number { return a + b; }
function getUser(): { id: number; name: string } { return { id: 1, name: "Alice" }; }

type GreetReturn = MyReturnType<typeof greet>;   // string
type AddReturn = MyReturnType<typeof add>;       // number
type GetUserReturn = MyReturnType<typeof getUser>; // { id: number; name: string }

// ── Parameters<T> — another built-in using infer ─────────────────────────────
type MyParameters<T extends (...args: any) => any> =
    T extends (...args: infer P) => any ? P : never;
//                           ↑ P captures the params tuple

type AddParams = MyParameters<typeof add>; // [a: number, b: number]

// ── Infer from Promise ────────────────────────────────────────────────────────
type UnwrapPromise<T> = T extends Promise<infer Value> ? Value : T;

type AsyncStr = UnwrapPromise<Promise<string>>;   // string
type AsyncNum = UnwrapPromise<Promise<number>>;   // number
type NotAsync = UnwrapPromise<boolean>;           // boolean (not a Promise, returned as-is)

// ── Deep Unwrap ───────────────────────────────────────────────────────────────
// Recursively unwrap nested Promises: Promise<Promise<Promise<string>>> → string
type DeepUnwrap<T> = T extends Promise<infer U> ? DeepUnwrap<U> : T;
type Nested = DeepUnwrap<Promise<Promise<Promise<string>>>>; // string!

// ── Infer from Constructor ────────────────────────────────────────────────────
type InstanceType2<T extends new (...args: any) => any> =
    T extends new (...args: any) => infer Instance ? Instance : never;

class Dog { breed: string = "Labrador"; }
type DogInstance = InstanceType2<typeof Dog>; // Dog

// ── Infer from Tuple Positions ────────────────────────────────────────────────
// Get the head (first element) of a tuple
type Head<T extends any[]> = T extends [infer H, ...any[]] ? H : never;
// Get the tail (everything after first) of a tuple
type Tail<T extends any[]> = T extends [any, ...infer Rest] ? Rest : never;

type H = Head<[string, number, boolean]>; // string
type TailT = Tail<[string, number, boolean]>; // [number, boolean]

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create 'FirstArgument<T>' that extracts the type of the first parameter
//    of a function type T
// 2. Create 'LastElement<T extends any[]>' that gets the last element of a tuple
// 3. Create 'PromiseOrDirect<T>' that returns the awaited value regardless of
//    whether T is a Promise or a direct value
// =============================================================================

export {};

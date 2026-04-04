// =============================================================================
// DAY 10 — FILE 03: Template Literal Types
// =============================================================================
//
// Template literal types (TypeScript 4.1+) let you construct new string types
// by combining string literal types - just like template literals in JavaScript.
//
// Syntax: `${TypeA}${TypeB}`
//
// This enables creating precise string types based on combinations of values.
// =============================================================================

// ── Basic Template Literal Type ───────────────────────────────────────────────
type Greeting = `Hello, ${string}!`;
let g: Greeting = "Hello, Alice!";  // ✔
let g2: Greeting = "Hello, World!"; // ✔
// let g3: Greeting = "Hi there!";  // ← Error! doesn't match the template

// ── Combining String Unions ────────────────────────────────────────────────────
// When used with unions, TypeScript creates all possible combinations!
type Color = "red" | "green" | "blue";
type Shade = "light" | "dark";
type ColoredShade = `${Shade}-${Color}`;
// TypeScript generates: "light-red" | "light-green" | "light-blue" | "dark-red" | "dark-green" | "dark-blue"

let myColor: ColoredShade = "light-blue"; // ✔
// let bad: ColoredShade = "medium-red";  // ← Error!

// ── CSS Property Types ────────────────────────────────────────────────────────
type MarginDir = "top" | "right" | "bottom" | "left";
type MarginProp = `margin-${MarginDir}`;
// → "margin-top" | "margin-right" | "margin-bottom" | "margin-left"

type PaddingProp = `padding-${MarginDir}`;
// → "padding-top" | "padding-right" | "padding-bottom" | "padding-left"

// ── Event Names ───────────────────────────────────────────────────────────────
type EventName = "click" | "focus" | "blur" | "change" | "submit";
type EventHandler = `on${Capitalize<EventName>}`;
// → "onClick" | "onFocus" | "onBlur" | "onChange" | "onSubmit"

// ── Intrinsic String Manipulation Types ───────────────────────────────────────
// TypeScript provides built-in string manipulation types:
type Upper = Uppercase<"hello">;        // "HELLO"
type Lower = Lowercase<"HELLO">;        // "hello"
type Cap = Capitalize<"hello">;         // "Hello"
type Uncap = Uncapitalize<"Hello">;     // "hello"

type EventHandlers = {
    [K in EventName as `on${Capitalize<K>}`]: (event: Event) => void;
};
// → { onClick: (e) => void; onFocus: (e) => void; ... }

// ── Getter/Setter Types ───────────────────────────────────────────────────────
type User = { name: string; age: number; email: string };

type GetterNames = `get${Capitalize<keyof User & string>}`;
// → "getName" | "getAge" | "getEmail"

type SetterNames = `set${Capitalize<keyof User & string>}`;
// → "setName" | "setAge" | "setEmail"

// ── Route Types ───────────────────────────────────────────────────────────────
// Type-safe URL paths
type Entity = "user" | "product" | "order";
type Action = "list" | "create" | "update" | "delete";
type Route = `/${Entity}/${Action}`;
// → "/user/list" | "/user/create" | "/product/list" | ... (many combinations!)

let route: Route = "/user/list";
// let bad: Route = "/user/search"; // ← Error! "search" is not in Action

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create a type 'CSSUnit' = "px" | "em" | "rem" | "vh" | "vw"
//    Create a type 'CSSValue' that is like: "10px" | "20em" etc.
//    (hint: `${number}${CSSUnit}` — template literal with number)
// 2. Create a 'PropEventSource<T>' that adds 'on{PropertyName}Changed' event
//    listeners for all properties of T
// =============================================================================

export {};

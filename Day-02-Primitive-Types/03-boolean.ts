// =============================================================================
// DAY 02 — FILE 03: The Boolean Type
// =============================================================================
//
// 'boolean' can only be one of two values: true or false.
// Booleans are the foundation of all decision-making in code (if, while, etc.)
// =============================================================================

// ── Declaring Booleans ────────────────────────────────────────────────────────
let isLoggedIn: boolean = true;
let hasPermission: boolean = false;
let isAdmin: boolean = false;
console.log(isLoggedIn, hasPermission, isAdmin); // → true false false

// ── Booleans from Comparisons ────────────────────────────────────────────────
// Comparison operators always produce a boolean result
let a: number = 10;
let b: number = 20;
console.log(a > b);   // → false
console.log(a < b);   // → true
console.log(a === b); // → false  (strict equality — ALWAYS use === not ==)
console.log(a !== b); // → true   (strict inequality)
console.log(a >= 10); // → true
console.log(a <= 9);  // → false

// ── Boolean Logic (Logical Operators) ────────────────────────────────────────
//  &&  AND  → both sides must be true
//  ||  OR   → at least one side must be true
//  !   NOT  → flips true to false and false to true

let hasAccount: boolean = true;
let hasVerifiedEmail: boolean = false;

// AND: user can login only if they have account AND verified email
let canLogin: boolean = hasAccount && hasVerifiedEmail;
console.log("Can login:", canLogin); // → false

// OR: show a welcome message if either condition is true
let showWelcome: boolean = hasAccount || hasVerifiedEmail;
console.log("Show welcome:", showWelcome); // → true

// NOT: flip the value
let isGuest: boolean = !hasAccount;
console.log("Is guest:", isGuest); // → false (because hasAccount is true)

// ── Truthy and Falsy Values ──────────────────────────────────────────────────
// In TypeScript/JS, non-boolean values can behave like booleans in conditions.
// FALSY values (treated as false): false, 0, "", null, undefined, NaN
// TRUTHY values (treated as true): everything else

let emptyString: string = "";
let zeroValue: number = 0;
let nonEmptyString: string = "hello";
let positiveNum: number = 42;

if (emptyString) { console.log("truthy"); } else { console.log("falsy"); } // → falsy
if (zeroValue) { console.log("truthy"); } else { console.log("falsy"); }   // → falsy
if (nonEmptyString) { console.log("truthy"); } else { console.log("falsy"); } // → truthy
if (positiveNum) { console.log("truthy"); } else { console.log("falsy"); }    // → truthy

// ── Boolean() Conversion ─────────────────────────────────────────────────────
console.log(Boolean(""));    // → false
console.log(Boolean("hi"));  // → true
console.log(Boolean(0));     // → false
console.log(Boolean(1));     // → true
console.log(Boolean(null));  // → false

// =============================================================================
// EXERCISE FOR YOU:
// 1. Write a function 'canVote(age: number): boolean' that returns true if age >= 18
// 2. Write a function 'isEven(n: number): boolean' that returns true if n is even
// 3. Use && and || to create a complex condition of your choice
// =============================================================================

export {};

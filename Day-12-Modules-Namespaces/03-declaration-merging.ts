// =============================================================================
// DAY 12 — FILE 03: Declaration Merging
// =============================================================================
//
// DECLARATION MERGING: TypeScript can merge multiple declarations with the same
// name into a single definition. This only works for certain combinations.
//
// Mergeable combinations:
//   • interface + interface ← most common
//   • namespace + namespace
//   • namespace + class
//   • namespace + function
//   • namespace + enum
//
// This is NOT possible with 'type' aliases (they cannot be merged).
// =============================================================================

// ── Interface Merging ─────────────────────────────────────────────────────────
// Two interfaces with the same name are automatically merged into one
interface Animal {
    name: string;
    age: number;
}

interface Animal {
    // Adding to the already-defined Animal interface
    sound: string;
    makeSound(): void;
}

// The merged Animal has: name, age, sound, makeSound()
let dog: Animal = {
    name: "Rex",
    age: 3,
    sound: "Woof",
    makeSound() { console.log(this.sound); }
};
dog.makeSound(); // → Woof

// ── Real-World Use: Extending Third-Party Types ─────────────────────────────
// VERY COMMON in real projects: augmenting third-party library types!
//
// Example: Express.js defines a Request interface.
// You want to add a 'user' property to it in your app.
//
// In express.d.ts (library):
//   interface Request { method: string; path: string; body: any; }
//
// You declare in your type augmentation file:
//   declare global {
//     namespace Express {
//       interface Request { user?: { id: number; name: string }; }
//     }
//   }
// Now ALL Express Requests have the 'user' property typed correctly!

// ── Namespace Merging ─────────────────────────────────────────────────────────
namespace Utilities {
    export function formatDate(d: Date): string {
        return d.toLocaleDateString();
    }
}

namespace Utilities {
    // Merges with the first Utilities namespace
    export function formatCurrency(amount: number, currency: string = "USD"): string {
        return `${currency} ${amount.toFixed(2)}`;
    }
}

// Result: Utilities has BOTH formatDate and formatCurrency
console.log(Utilities.formatDate(new Date())); // → locale date string
console.log(Utilities.formatCurrency(99.9));   // → USD 99.90

// ── Merging Namespace with Function ─────────────────────────────────────────
// You can add properties to a function via namespace
function validate(input: string): boolean {
    return input.length > 0;
}

namespace validate {
    // Adding 'email' as a sub-validator to the validate function
    export function email(input: string): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
    }
    export function phone(input: string): boolean {
        return /^\+?[\d\s-]{10,}$/.test(input);
    }
}

console.log(validate("hello"));             // → true (base function)
console.log(validate.email("a@b.com"));     // → true (namespace member)
console.log(validate.phone("+1 555 1234")); // → true

// ── Merging Namespace with Enum ────────────────────────────────────────────
enum Direction { North, South, East, West }

namespace Direction {
    // Add a function to the Direction enum via namespace
    export function opposite(d: Direction): Direction {
        switch (d) {
            case Direction.North: return Direction.South;
            case Direction.South: return Direction.North;
            case Direction.East:  return Direction.West;
            case Direction.West:  return Direction.East;
        }
    }
}

console.log(Direction.opposite(Direction.North)); // → 1 (South)

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create an interface 'Plugin' in 3 separate declarations, each adding new methods
//    (simulating a plugin system that gets extended over time)
// 2. Create a namespace for a simple event emitter: 'Events'
//    In one declaration: emit, on; In another: off, once
//    Merge them and use all methods
// =============================================================================

export {};

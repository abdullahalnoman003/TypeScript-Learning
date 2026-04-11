// =============================================================================
// DAY 12 — FILE 02: Namespaces
// =============================================================================
//
// NAMESPACES are a TypeScript-specific way to organize code under a named scope.
// They prevent naming conflicts by grouping related code under one name.
//
// NOTE: In modern TypeScript (ES modules era), PREFER ES Modules over namespaces.
// Namespaces are mostly useful when working with legacy code or global scripts.
// However, understanding them is important for reading existing TypeScript code.
// =============================================================================

// ── Basic Namespace ───────────────────────────────────────────────────────────
namespace Geometry {
    // All declarations inside are scoped to 'Geometry'
    export interface Point {
        x: number;
        y: number;
    }

    export function distance(p1: Point, p2: Point): number {
        return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
    }

    export function midpoint(p1: Point, p2: Point): Point {
        return {
            x: (p1.x + p2.x) / 2,
            y: (p1.y + p2.y) / 2,
        };
    }

    // Nested namespace
    export namespace Shapes {
        export interface Circle {
            center: Point;
            radius: number;
        }

        export function area(circle: Circle): number {
            return Math.PI * circle.radius ** 2;
        }
    }
}

// ── Using Namespace Members ───────────────────────────────────────────────────
// Members must be accessed with the namespace prefix:
let p1: Geometry.Point = { x: 0, y: 0 };
let p2: Geometry.Point = { x: 3, y: 4 };

console.log(Geometry.distance(p1, p2));    // → 5
console.log(Geometry.midpoint(p1, p2));    // → { x: 1.5, y: 2 }

let circle: Geometry.Shapes.Circle = { center: p1, radius: 5 };
console.log(Geometry.Shapes.area(circle)); // → 78.53...

// ── Alias for Long Namespace Paths ────────────────────────────────────────────
import Shapes = Geometry.Shapes; // create a shorter alias
let c: Shapes.Circle = { center: { x: 0, y: 0 }, radius: 10 };

// ── Namespace for Validation ──────────────────────────────────────────────────
namespace Validation {
    export interface Validator {
        isValid(input: string): boolean;
        errorMessage: string;
    }

    export class EmailValidator implements Validator {
        errorMessage = "Invalid email address";
        isValid(input: string): boolean {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
        }
    }

    export class PasswordValidator implements Validator {
        errorMessage = "Password must be at least 8 characters";
        isValid(input: string): boolean {
            return input.length >= 8;
        }
    }

    export function validate(input: string, validator: Validator): boolean {
        const valid = validator.isValid(input);
        if (!valid) console.log(validator.errorMessage);
        return valid;
    }
}

let emailValidator = new Validation.EmailValidator();
let passValidator = new Validation.PasswordValidator();

console.log(Validation.validate("alice@example.com", emailValidator)); // → true
console.log(Validation.validate("bad-email", emailValidator));         // → false (+ message)
console.log(Validation.validate("short", passValidator));              // → false (+ message)
console.log(Validation.validate("longpassword", passValidator));       // → true

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create a 'StringUtils' namespace with functions:
//    - capitalize, reverse, isPalindrome, truncate(str, maxLen)
// 2. Create a nested 'StringUtils.Case' namespace with:
//    - toCamelCase, toSnakeCase, toKebabCase
// 3. Use all functions from both namespaces
// =============================================================================

export {};

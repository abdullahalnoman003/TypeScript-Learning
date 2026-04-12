// =============================================================================
// DAY 13 — FILE 01: Class Decorators
// =============================================================================
//
// DECORATORS are functions that modify classes, methods, properties, or parameters.
// They are prefixed with @. They are executed at CLASS DEFINITION TIME, not at
// instance creation time.
//
// PREREQUISITE: Enable in tsconfig.json:
//   "experimentalDecorators": true
//   "emitDecoratorMetadata": true  (for metadata decorators)
//
// DECORATOR PATTERN:
//   @decoratorName   — a decorator used as-is
//   @decoratorName() — a decorator FACTORY (returns a decorator)
//
// NOTE: Decorators are a Stage 3 TC39 proposal. The TypeScript implementation
//       uses the older (legacy) decorator spec. Modern TypeScript (5.0+) also
//       supports the new spec. This file covers the legacy spec which is still
//       widely used (Angular, NestJS, TypeORM all use it).
// =============================================================================

// ── Simple Class Decorator ────────────────────────────────────────────────────
// A class decorator takes the CONSTRUCTOR as its argument
function Sealed(constructor: Function): void {
    // Object.seal prevents new properties from being added
    Object.seal(constructor);
    Object.seal(constructor.prototype);
    console.log(`Class ${constructor.name} has been sealed.`);
}

@Sealed
class Person {
    constructor(public name: string, public age: number) {}
    greet(): void { console.log(`Hi, I'm ${this.name}`); }
}
// Output when class is defined: "Class Person has been sealed."

let p = new Person("Alice", 30);
p.greet(); // → Hi, I'm Alice

// ── Decorator Factory ─────────────────────────────────────────────────────────
// Returns a decorator — lets you pass arguments to the decorator
function Logged(prefix: string) {
    return function (constructor: Function): void {
        console.log(`[${prefix}] Class registered: ${constructor.name}`);
    };
}

@Logged("INFO")
class UserService {
    getUser(id: number): { id: number; name: string } {
        return { id, name: "Alice" };
    }
}
// Output when class is defined: "[INFO] Class registered: UserService"

// ── Class Decorator that Modifies/Extends the Class ───────────────────────────
// A decorator can RETURN a new constructor to replace or extend the original
function Timestamped<T extends new (...args: any[]) => {}>(constructor: T) {
    // Return a new class that extends the original, adding timestamp properties
    return class extends constructor {
        createdAt = new Date();
        updatedAt = new Date();
    };
}

@Timestamped
class Post {
    constructor(public title: string, public content: string) {}
}

let post = new Post("Hello World", "My first post");
console.log(post.title);     // → Hello World
console.log((post as any).createdAt); // → Date object (added by decorator)

// ── Multiple Decorators — Applied Bottom to Top ──────────────────────────────
function First() { return (constructor: Function) => console.log("First decorator"); }
function Second() { return (constructor: Function) => console.log("Second decorator"); }
function Third() { return (constructor: Function) => console.log("Third decorator"); }

@First()
@Second()
@Third()
class MultiDecorated {}
// Output order: Third decorator → Second decorator → First decorator
// (decorators are evaluated top-to-bottom but applied bottom-to-top)

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create a decorator '@Singleton' that ensures only ONE instance of a class
//    can ever be created (subsequent new() calls return the same instance)
// 2. Create a decorator '@Deprecated(message)' that logs a warning when an
//    instance of the decorated class is created
// 3. Create a decorator '@Mixin(OtherClass)' that copies all methods from
//    OtherClass onto the decorated class
// =============================================================================

export {};

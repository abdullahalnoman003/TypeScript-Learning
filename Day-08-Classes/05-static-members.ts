// =============================================================================
// DAY 08 — FILE 05: Static Members
// =============================================================================
//
// STATIC members belong to the CLASS ITSELF, not to instances of the class.
//
// Regular (instance) members: each instance has its own copy
// Static members: ONE shared copy that belongs to the class
//
// Access static members via: ClassName.propertyName / ClassName.methodName()
// NOT via: instance.propertyName (that's for instance members)
//
// Use static for: utility functions, constants, counters, factory methods
// =============================================================================

// ── Static Properties ─────────────────────────────────────────────────────────
class MathUtils {
    static readonly PI: number = 3.14159265358979; // shared constant
    static readonly E: number = 2.71828182845905;  // Euler's number

    static circleArea(radius: number): number {
        return MathUtils.PI * radius * radius;
    }

    static isPrime(n: number): boolean {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    static factorial(n: number): number {
        if (n <= 1) return 1;
        return n * MathUtils.factorial(n - 1);
    }
}

// Access via CLASS NAME — no 'new MathUtils()' needed!
console.log(MathUtils.PI);               // → 3.14159...
console.log(MathUtils.circleArea(5));    // → 78.539...
console.log(MathUtils.isPrime(17));      // → true
console.log(MathUtils.factorial(5));     // → 120

// ── Static Counter ────────────────────────────────────────────────────────────
// A classic use of static: counting instances
class User {
    static count: number = 0; // shared across ALL User instances
    readonly id: number;

    constructor(public name: string) {
        User.count++;         // increment the SHARED counter
        this.id = User.count; // assign unique auto-incremented id
    }

    static getCount(): number {
        return User.count;
    }
}

let u1 = new User("Alice");
let u2 = new User("Bob");
let u3 = new User("Charlie");

console.log(u1.id);          // → 1
console.log(u2.id);          // → 2
console.log(u3.id);          // → 3
console.log(User.getCount()); // → 3 (class-level access)
// u1.count  ← available but bad practice — always use User.count

// ── Static Factory Methods ────────────────────────────────────────────────────
// A common pattern: static methods that create and return instances
class Color {
    private constructor(
        public readonly r: number,
        public readonly g: number,
        public readonly b: number
    ) {}

    // Factory methods — the only way to create Color objects
    static red(): Color { return new Color(255, 0, 0); }
    static green(): Color { return new Color(0, 255, 0); }
    static blue(): Color { return new Color(0, 0, 255); }
    static fromHex(hex: string): Color {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return new Color(r, g, b);
    }

    toString(): string { return `rgb(${this.r}, ${this.g}, ${this.b})`; }
}

let red = Color.red();             // ✔ use factory method
let custom = Color.fromHex("#FF8800");
// let c = new Color(1,2,3);      // ← Error! constructor is private

console.log(red.toString());    // → rgb(255, 0, 0)
console.log(custom.toString()); // → rgb(255, 136, 0)

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create a class 'Config' where the constructor is private and all access
//    goes through a static 'getInstance()' method (Singleton pattern — Day 15)
// 2. Create a class 'StringHelper' with only static methods:
//    - capitalize(s: string): string
//    - reverse(s: string): string
//    - isPalindrome(s: string): boolean
//    - wordCount(s: string): number
// =============================================================================

export {};

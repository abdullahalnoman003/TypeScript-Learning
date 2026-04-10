// =============================================================================
// DAY 11 — FILE 04: ReturnType, Parameters, Awaited, and More
// =============================================================================
//
// TypeScript ships with many more utility types for working with FUNCTIONS
// and ASYNCHRONOUS types:
//
//   ReturnType<T>     → the return type of a function
//   Parameters<T>     → a tuple of the parameter types of a function
//   ConstructorParameters<T> → parameters of a class constructor
//   InstanceType<T>   → the instance type of a constructor
//   Awaited<T>        → the type after awaiting a Promise (TypeScript 4.5+)
//   ThisType<T>       → specify the type of 'this' in an object
// =============================================================================

// ── ReturnType<T> ─────────────────────────────────────────────────────────────
function createUser(name: string, age: number) {
    return { id: Math.random(), name, age, createdAt: new Date() };
}

type NewUser = ReturnType<typeof createUser>;
// → { id: number; name: string; age: number; createdAt: Date }
// Now you can reuse this return type without defining a separate interface!

let user: NewUser = createUser("Alice", 30);
console.log(user.name);      // → Alice (TypeScript knows it's string)
console.log(user.createdAt); // → Date object (TypeScript knows it's Date)

// ── Parameters<T> ─────────────────────────────────────────────────────────────
function loginUser(email: string, password: string, rememberMe: boolean): boolean {
    return true; // simplified
}

type LoginParams = Parameters<typeof loginUser>;
// → [email: string, password: string, rememberMe: boolean]

// Use it to ensure argument types match without duplicating them:
let loginArgs: LoginParams = ["alice@example.com", "secret", true];
console.log(loginUser(...loginArgs)); // → true

// ── ConstructorParameters<T> & InstanceType<T> ─────────────────────────────
class DataProcessor {
    constructor(
        public readonly source: string,
        public readonly batchSize: number,
        private timeout: number = 5000
    ) {}

    process(): void {
        console.log(`Processing ${this.source} in batches of ${this.batchSize}`);
    }
}

type ProcessorArgs = ConstructorParameters<typeof DataProcessor>;
// → [source: string, batchSize: number, timeout?: number]

type ProcessorInstance = InstanceType<typeof DataProcessor>;
// → DataProcessor

let args: ProcessorArgs = ["database", 100];
let processor: ProcessorInstance = new DataProcessor(...args);
processor.process(); // → Processing database in batches of 100

// ── Awaited<T> — unwrapping nested Promises ────────────────────────────────
async function fetchData(): Promise<{ id: number; value: string }> {
    return { id: 1, value: "hello" };
}

type FetchResult = Awaited<ReturnType<typeof fetchData>>;
// → { id: number; value: string }  (Promise is unwrapped!)

// Works through nested promises too:
type DeepNested = Awaited<Promise<Promise<Promise<string>>>>; // → string

// ── Combining Utilities ────────────────────────────────────────────────────────
// A utility to extract the return types of all methods in a class
interface Service {
    findUser(id: number): Promise<{ id: number; name: string }>;
    createUser(name: string): Promise<{ id: number; name: string; createdAt: Date }>;
    deleteUser(id: number): Promise<boolean>;
}

type ServiceReturnTypes = {
    [K in keyof Service]: Awaited<ReturnType<Service[K]>>;
};
// → { findUser: { id: number; name: string }; createUser: {...}; deleteUser: boolean }

// ── NonNullable<T> ────────────────────────────────────────────────────────────
type MaybeString = string | null | undefined;
type DefiniteString = NonNullable<MaybeString>; // → string
// Removes null and undefined from the union

// =============================================================================
// EXERCISE FOR YOU:
// 1. Write 3 different functions with complex return types.
//    Use ReturnType<> to extract each return type and use it as a variable type.
// 2. Write a function 'callWithParams<F extends (...args: any[]) => any>'
//    that takes a function F and its Parameters<F> and calls F with those params
// 3. Use Awaited<> to extract the resolved type of a complex async function
// =============================================================================

export {};

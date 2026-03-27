// =============================================================================
// DAY 09 — FILE 02: Generic Interfaces
// =============================================================================
//
// Interfaces can also have type parameters, making them reusable across types.
// This is how many built-in TypeScript types work: Array<T>, Promise<T>, etc.
// =============================================================================

// ── Generic Interface ─────────────────────────────────────────────────────────
interface Box<T> {
    value: T;
    label: string;
}

let stringBox: Box<string> = { value: "Hello", label: "text box" };
let numberBox: Box<number> = { value: 42, label: "number box" };
let boolBox: Box<boolean> = { value: true, label: "bool box" };

console.log(stringBox.value.toUpperCase()); // TypeScript knows it's a string
console.log(numberBox.value.toFixed(2));    // TypeScript knows it's a number

// ── Generic API Response Wrapper ──────────────────────────────────────────────
// A very common real-world pattern: wrap all API responses in a generic type
interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
    timestamp: Date;
}

interface User { id: number; name: string; email: string; }
interface Product { id: number; name: string; price: number; }

let userResponse: ApiResponse<User> = {
    data: { id: 1, name: "Alice", email: "alice@example.com" },
    status: 200,
    message: "Success",
    timestamp: new Date(),
};

let productResponse: ApiResponse<Product[]> = {
    data: [
        { id: 1, name: "Laptop", price: 999 },
        { id: 2, name: "Phone", price: 499 },
    ],
    status: 200,
    message: "Success",
    timestamp: new Date(),
};

console.log(userResponse.data.name);                     // → Alice
console.log(productResponse.data[0].price);             // → 999

// ── Generic Interface for Functions ──────────────────────────────────────────
interface Transformer<TInput, TOutput> {
    transform(input: TInput): TOutput;
}

// Implementing the interface with specific types
class NumberToString implements Transformer<number, string> {
    transform(input: number): string {
        return input.toString();
    }
}

class StringToArray implements Transformer<string, string[]> {
    transform(input: string): string[] {
        return input.split("");
    }
}

let t1 = new NumberToString();
let t2 = new StringToArray();
console.log(t1.transform(42));       // → "42"
console.log(t2.transform("hello")); // → ['h', 'e', 'l', 'l', 'o']

// ── Generic Repository Pattern ────────────────────────────────────────────────
// A database-like interface that works for any entity type
interface Repository<T extends { id: number }> {
    findById(id: number): T | undefined;
    findAll(): T[];
    save(entity: T): void;
    delete(id: number): void;
}

// Implementing for User:
class UserRepository implements Repository<User> {
    private users: User[] = [];

    findById(id: number): User | undefined {
        return this.users.find(u => u.id === id);
    }

    findAll(): User[] { return [...this.users]; }

    save(user: User): void {
        const idx = this.users.findIndex(u => u.id === user.id);
        if (idx >= 0) { this.users[idx] = user; } else { this.users.push(user); }
    }

    delete(id: number): void {
        this.users = this.users.filter(u => u.id !== id);
    }
}

let repo = new UserRepository();
repo.save({ id: 1, name: "Alice", email: "alice@example.com" });
repo.save({ id: 2, name: "Bob", email: "bob@example.com" });
console.log(repo.findAll());
console.log(repo.findById(1)?.name); // → Alice

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create a generic interface 'Stack<T>' with methods:
//    push(item: T): void, pop(): T | undefined, peek(): T | undefined, isEmpty(): boolean
// 2. Implement it in a class 'ArrayStack<T>'
// 3. Test with a Stack<string> and Stack<number>
// =============================================================================

export {};

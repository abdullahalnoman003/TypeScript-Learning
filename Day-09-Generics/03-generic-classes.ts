// =============================================================================
// DAY 09 — FILE 03: Generic Classes
// =============================================================================
//
// Classes can also use type parameters to make them work with any type.
// Real examples: Array<T>, Set<T>, Map<K,V>, Promise<T> are all generic classes!
//
// The type parameter is declared after the class name: class Foo<T> { ... }
// Inside the class, T can be used as a type anywhere.
// =============================================================================

// ── Generic Stack Class ────────────────────────────────────────────────────────
// A stack is a Last-In-First-Out (LIFO) data structure
class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    get size(): number {
        return this.items.length;
    }

    toArray(): T[] {
        return [...this.items];
    }
}

// Using the Stack with different types:
let numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
console.log(numberStack.peek());       // → 3
console.log(numberStack.pop());        // → 3
console.log(numberStack.size);         // → 2

let stringStack = new Stack<string>();
stringStack.push("hello");
stringStack.push("world");
console.log(stringStack.toArray()); // → ['hello', 'world']
// stringStack.push(42);            // ← Error! number is not a string

// ── Generic Queue Class ────────────────────────────────────────────────────────
// A queue is a First-In-First-Out (FIFO) data structure
class Queue<T> {
    private items: T[] = [];

    enqueue(item: T): void {
        this.items.push(item);     // add to back
    }

    dequeue(): T | undefined {
        return this.items.shift(); // remove from front
    }

    front(): T | undefined {
        return this.items[0];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    get size(): number {
        return this.items.length;
    }
}

let taskQueue = new Queue<string>();
taskQueue.enqueue("Task 1");
taskQueue.enqueue("Task 2");
taskQueue.enqueue("Task 3");
console.log(taskQueue.dequeue()); // → Task 1 (first in, first out)
console.log(taskQueue.front());   // → Task 2

// ── Generic Pair Class ────────────────────────────────────────────────────────
class Pair<T, U> {
    constructor(public first: T, public second: U) {}

    swap(): Pair<U, T> {
        return new Pair(this.second, this.first);
    }

    toArray(): [T, U] {
        return [this.first, this.second];
    }
}

let nameAge = new Pair("Alice", 30);
console.log(nameAge.first);         // → Alice (string)
console.log(nameAge.second);        // → 30 (number)
let swapped = nameAge.swap();
console.log(swapped.first);         // → 30 (number)
console.log(swapped.second);        // → Alice (string)

// ── Generic class extending another class ─────────────────────────────────────
class PriorityQueue<T> extends Queue<T> {
    private priorities: Map<string, number> = new Map();

    enqueueWithPriority(item: T, priority: number): void {
        // Simplified: just enqueue (in real use, you'd sort by priority)
        this.priorities.set(JSON.stringify(item), priority);
        this.enqueue(item);
    }
}

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create a generic class 'Cache<T>' that:
//    - Stores key-value pairs (key: string, value: T)
//    - Has methods: set(key, value), get(key), has(key), clear()
//    - Has a maxSize property — when exceeded, removes the oldest entry
// 2. Test with Cache<User> and Cache<number>
// =============================================================================

export {};

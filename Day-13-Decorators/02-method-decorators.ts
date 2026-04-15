// =============================================================================
// DAY 13 — FILE 02: Method Decorators
// =============================================================================
//
// A METHOD DECORATOR is applied to class methods. It receives:
//   1. target      → the class prototype (or constructor for static methods)
//   2. propertyKey → the name of the method (as a string)
//   3. descriptor  → the PropertyDescriptor of the method
//
// By modifying the PropertyDescriptor, you can wrap the original function,
// add logging, measure performance, add caching, etc.
// =============================================================================

// ── PropertyDescriptor reference ─────────────────────────────────────────────
// Every property has a descriptor: { value, writable, enumerable, configurable }
// For methods: value = the function itself

// ── Logging Decorator ─────────────────────────────────────────────────────────
function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value; // save the original method

    descriptor.value = function (...args: any[]) {
        console.log(`[LOG] Calling ${propertyKey} with args:`, args);
        const result = originalMethod.apply(this, args); // call the original
        console.log(`[LOG] ${propertyKey} returned:`, result);
        return result;
    };

    return descriptor; // return modified descriptor
}

// ── Readonly Decorator ─────────────────────────────────────────────────────────
function Readonly(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    descriptor.writable = false; // prevent the method from being overridden
    return descriptor;
}

// ── Performance Timer Decorator ───────────────────────────────────────────────
function Timer(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const start = performance.now();
        const result = originalMethod.apply(this, args);
        const end = performance.now();
        console.log(`[TIMER] ${propertyKey} took ${(end - start).toFixed(3)}ms`);
        return result;
    };

    return descriptor;
}

// ── Memoize Decorator (simple caching) ────────────────────────────────────────
function Memoize(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;
    const cache = new Map<string, any>();

    descriptor.value = function (...args: any[]) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log(`[CACHE HIT] ${propertyKey}(${key})`);
            return cache.get(key);
        }
        const result = originalMethod.apply(this, args);
        cache.set(key, result);
        return result;
    };

    return descriptor;
}

// ── Usage ─────────────────────────────────────────────────────────────────────
class MathService {
    @Log
    @Timer
    add(a: number, b: number): number {
        return a + b;
    }

    @Memoize
    heavyComputation(n: number): number {
        // Simulate heavy work
        let result = 0;
        for (let i = 0; i < n; i++) result += i;
        return result;
    }

    @Readonly
    greet(): string {
        return "Hello!";
    }
}

let svc = new MathService();
console.log(svc.add(3, 4));          // logs call + result + time
svc.heavyComputation(1000);           // computes
svc.heavyComputation(1000);           // cache hit!
svc.heavyComputation(1000);           // cache hit!

// ── Decorator Factory for Validation ──────────────────────────────────────────
function Validate(min: number, max: number) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        const originalMethod = descriptor.value;
        descriptor.value = function (value: number) {
            if (value < min || value > max) {
                throw new Error(`${propertyKey}: value ${value} is out of range [${min}, ${max}]`);
            }
            return originalMethod.apply(this, [value]);
        };
        return descriptor;
    };
}

class AgeService {
    @Validate(0, 150)
    setAge(age: number): string {
        return `Age set to ${age}`;
    }
}

let ageSvc = new AgeService();
console.log(ageSvc.setAge(25));  // → Age set to 25
try { ageSvc.setAge(200); }      // → throws Error!
catch (e: any) { console.log(e.message); }

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create a '@Retry(times: number)' decorator that retries a method up to N times
//    if it throws an error
// 2. Create a '@Throttle(ms: number)' decorator that prevents a method from being
//    called more than once within 'ms' milliseconds
// =============================================================================

export {};

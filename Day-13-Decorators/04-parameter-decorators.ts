// =============================================================================
// DAY 13 — FILE 04: Parameter Decorators
// =============================================================================
//
// A PARAMETER DECORATOR is applied to function/constructor parameters.
// It receives:
//   1. target         → the class prototype (or constructor for static)
//   2. propertyKey    → the name of the method the param belongs to
//   3. parameterIndex → the zero-based index of the parameter in the param list
//
// Parameter decorators are most commonly used to store METADATA that other
// decorators (like method decorators) can read at runtime.
// This is how frameworks like NestJS implement dependency injection!
//
// Requires: "emitDecoratorMetadata": true in tsconfig.json
//           npm install reflect-metadata (for full metadata support)
// =============================================================================

// ── Simple Parameter Decorator ────────────────────────────────────────────────
function LogParam(target: any, propertyKey: string, parameterIndex: number): void {
    console.log(`[PARAM] @LogParam on ${propertyKey}, parameter index: ${parameterIndex}`);
}

class UserService {
    getUser(@LogParam userId: number, @LogParam includeDetails: boolean): string {
        return `User ${userId}${includeDetails ? " (with details)" : ""}`;
    }
}
// Output at class definition:
// [PARAM] @LogParam on getUser, parameter index: 1  (includeDetails)
// [PARAM] @LogParam on getUser, parameter index: 0  (userId)
// Note: decorators on params are evaluated RIGHT to LEFT!

// ── Metadata-based Validation System ─────────────────────────────────────────
// A practical example: mark parameters as 'required' using metadata storage
const requiredParams: Map<string, number[]> = new Map();

// Parameter decorator: marks this parameter as required (not null/undefined)
function Required(target: any, propertyKey: string, parameterIndex: number): void {
    const key = `${target.constructor.name}.${propertyKey}`;
    if (!requiredParams.has(key)) {
        requiredParams.set(key, []);
    }
    requiredParams.get(key)!.push(parameterIndex);
}

// Method decorator: validates the required params before calling the method
function Validate(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;
    const key = `${target.constructor.name}.${propertyKey}`;

    descriptor.value = function (...args: any[]) {
        const required = requiredParams.get(key) || [];
        for (const index of required) {
            if (args[index] === null || args[index] === undefined) {
                throw new Error(`Parameter at index ${index} in ${propertyKey} is required!`);
            }
        }
        return originalMethod.apply(this, args);
    };

    return descriptor;
}

class OrderService {
    @Validate
    createOrder(
        @Required customerId: number,
        @Required productId: number,
        couponCode?: string  // optional — NOT marked as @Required
    ): string {
        return `Order created: customer=${customerId}, product=${productId}${couponCode ? `, coupon=${couponCode}` : ""}`;
    }
}

let orderSvc = new OrderService();

// Valid call:
console.log(orderSvc.createOrder(1, 42, "SAVE10")); // → Order created: ...
console.log(orderSvc.createOrder(2, 99));             // → Order created (no coupon)

// Invalid call — missing required parameter:
try {
    orderSvc.createOrder(null as any, 42); // customerId is null!
} catch (e: any) {
    console.log(e.message); // → Parameter at index 0 in createOrder is required!
}

// ── Real-World Context: NestJS-style Dependency Injection ────────────────────
// In NestJS, you use parameter decorators like:
//   @Get("/users/:id")
//   async getUser(@Param("id") id: string) { ... }
//
// The @Param("id") decorator registers metadata so NestJS knows to inject
// the route parameter 'id' into the variable at that position.
// This is the SAME pattern we built above — just more sophisticated!

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create a '@DefaultValue(value)' parameter decorator that substitutes a
//    default value when the argument is undefined
// 2. Create a '@Transform(fn)' parameter decorator that runs the argument
//    through a transformation function before the method receives it
//    (e.g., @Transform(Number) to always parse a string to number)
// =============================================================================

export {};

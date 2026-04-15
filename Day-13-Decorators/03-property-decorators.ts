// =============================================================================
// DAY 13 — FILE 03: Property Decorators
// =============================================================================
//
// A PROPERTY DECORATOR is applied to class properties.
// It receives:
//   1. target      → the class prototype (or constructor for static)
//   2. propertyKey → the name of the property
//
// NOTE: Unlike method decorators, property decorators do NOT receive a descriptor.
// They cannot directly modify the property value. Instead, they often define
// a new property using Object.defineProperty or store metadata.
// =============================================================================

// ── Simple Property Decorator ─────────────────────────────────────────────────
function Log(target: any, propertyKey: string): void {
    console.log(`[PROPERTY] Decorator applied to: ${target.constructor.name}.${propertyKey}`);
}

class User {
    @Log
    name: string;

    @Log
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
}
// Output at class definition:
// [PROPERTY] Decorator applied to: User.name
// [PROPERTY] Decorator applied to: User.email

// ── Making a Property Observable ──────────────────────────────────────────────
// Use defineProperty to intercept get/set on any property
function Observable(target: any, propertyKey: string): void {
    let value: any;

    Object.defineProperty(target, propertyKey, {
        // Custom getter
        get() {
            return value;
        },
        // Custom setter — fires whenever the property is assigned
        set(newValue: any) {
            console.log(`[OBSERVE] ${propertyKey} changed: ${value} → ${newValue}`);
            value = newValue;
        },
        enumerable: true,
        configurable: true,
    });
}

class Settings {
    @Observable
    theme: string = "light";

    @Observable
    language: string = "en";
}

let settings = new Settings();
settings.theme = "dark";         // → [OBSERVE] theme changed: undefined → dark
settings.theme = "system";       // → [OBSERVE] theme changed: dark → system
settings.language = "fr";        // → [OBSERVE] language changed: undefined → fr

// ── Validator Property Decorator Factory ─────────────────────────────────────
// Metadata for validation rules
const validationRules: Map<string, Map<string, (val: any) => boolean>> = new Map();

function MinLength(min: number) {
    return function (target: any, propertyKey: string): void {
        if (!validationRules.has(target.constructor.name)) {
            validationRules.set(target.constructor.name, new Map());
        }
        validationRules.get(target.constructor.name)!.set(
            propertyKey,
            (val: string) => val.length >= min
        );
    };
}

function validate(obj: any): boolean {
    const className = obj.constructor.name;
    const rules = validationRules.get(className);
    if (!rules) return true;

    let isValid = true;
    rules.forEach((rule, prop) => {
        if (!rule(obj[prop])) {
            console.log(`Validation failed: ${className}.${prop}`);
            isValid = false;
        }
    });
    return isValid;
}

class SignupForm {
    @MinLength(3)
    username: string = "";

    @MinLength(8)
    password: string = "";
}

let form = new SignupForm();
form.username = "Al";          // too short!
form.password = "secret123";

console.log(validate(form));   // → Validation failed: SignupForm.username → false

form.username = "Alice";
console.log(validate(form));   // → true

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create a '@ReadOnly' property decorator that prevents the property from
//    being set after the first assignment
// 2. Create a '@Format(fn)' decorator that automatically transforms the value
//    through 'fn' whenever it is set (e.g., always store strings in lowercase)
// =============================================================================

export {};

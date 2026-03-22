// =============================================================================
// DAY 08 — FILE 01: Class Basics
// =============================================================================
//
// A CLASS is a blueprint for creating objects. It bundles together:
//   • PROPERTIES — data the object holds
//   • METHODS — functions the object can perform
//   • CONSTRUCTOR — a special method that runs when creating a new instance
//
// TypeScript classes build on JavaScript classes and add:
//   - Type annotations on properties and methods
//   - Access modifiers (public, private, protected)
//   - Parameter properties (shorthand in constructors)
//   - Abstract classes and readonly properties
// =============================================================================

// ── Basic Class ────────────────────────────────────────────────────────────────
class Person {
    // Properties — declared with their types
    name: string;
    age: number;

    // Constructor — called automatically when you do 'new Person(...)'
    constructor(name: string, age: number) {
        this.name = name; // 'this' refers to the new object being created
        this.age = age;
    }

    // Method — a function that belongs to this class
    greet(): string {
        return `Hi, I'm ${this.name} and I am ${this.age} years old.`;
    }

    // Method that modifies properties
    birthday(): void {
        this.age += 1;
        console.log(`Happy birthday ${this.name}! You are now ${this.age}.`);
    }
}

// Creating instances (objects) from the class
let alice = new Person("Alice", 30);
let bob = new Person("Bob", 25);

console.log(alice.greet()); // → Hi, I'm Alice and I am 30 years old.
alice.birthday();            // → Happy birthday Alice! You are now 31.
console.log(alice.age);     // → 31

// ── Parameter Properties (Shorthand) ─────────────────────────────────────────
// Instead of declaring properties separately and then assigning in constructor,
// TypeScript lets you use 'access modifier' directly in the constructor parameter
class Dog {
    constructor(
        public name: string,    // public property declared AND assigned in one line
        public breed: string,
        private age: number     // private — only accessible inside the class
    ) {
        // No need to write: this.name = name; this.breed = breed; etc.
        // TypeScript does it automatically with this shorthand!
    }

    describe(): string {
        return `${this.name} is a ${this.breed}, ${this.age} year(s) old`;
    }
}

let rex = new Dog("Rex", "German Shepherd", 3);
console.log(rex.name);       // → Rex     (public — accessible from outside)
console.log(rex.breed);      // → German Shepherd
// console.log(rex.age);     // ← UNCOMMENT: Error! 'age' is private
console.log(rex.describe()); // → Rex is a German Shepherd, 3 year(s) old

// ── Getters and Setters ────────────────────────────────────────────────────────
// Control access to and from properties with computed get/set
class Temperature {
    private _celsius: number;

    constructor(celsius: number) {
        this._celsius = celsius;
    }

    // Getter — accessed like a property: temp.fahrenheit
    get fahrenheit(): number {
        return (this._celsius * 9) / 5 + 32;
    }

    // Setter — assigned like a property: temp.fahrenheit = 100
    set fahrenheit(value: number) {
        this._celsius = ((value - 32) * 5) / 9;
    }

    get celsius(): number { return this._celsius; }
    set celsius(value: number) {
        if (value < -273.15) throw new Error("Below absolute zero!");
        this._celsius = value;
    }
}

let temp = new Temperature(100);
console.log(temp.fahrenheit); // → 212 (boiling point)
temp.fahrenheit = 32;
console.log(temp.celsius);    // → 0 (freezing point)

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create a class 'Rectangle' with width and height properties (use parameter shorthand)
// 2. Add methods: area(), perimeter(), isSquare()
// 3. Create a class 'Counter' with a private count (starts at 0).
//    Add methods: increment(), decrement(), reset(), getCount()
// =============================================================================

export {};

// =============================================================================
// DAY 08 — FILE 03: Inheritance
// =============================================================================
//
// INHERITANCE lets a class (the child/subclass) INHERIT all properties and
// methods from another class (the parent/superclass).
//
// Use 'extends' to inherit from another class.
// Use 'super()' to call the parent's constructor.
// Use 'super.method()' to call a parent's method.
//
// Benefits:
//   • Code reuse — define once, inherit many times
//   • "is-a" relationships — Dog IS-A Animal
//   • Method overriding — customize inherited behavior
// =============================================================================

// ── Parent Class ──────────────────────────────────────────────────────────────
class Animal {
    constructor(
        public name: string,
        public sound: string
    ) {}

    makeSound(): void {
        console.log(`${this.name} says: ${this.sound}`);
    }

    move(distance: number = 1): void {
        console.log(`${this.name} moved ${distance} meters.`);
    }

    toString(): string {
        return `Animal(${this.name})`;
    }
}

// ── Child Classes ─────────────────────────────────────────────────────────────
class Dog extends Animal {
    constructor(
        name: string,
        public breed: string
    ) {
        super(name, "Woof"); // call parent constructor — MUST be first line
    }

    // Additional method specific to Dog
    fetch(item: string): void {
        console.log(`${this.name} fetches the ${item}!`);
    }

    // OVERRIDE parent method — customize behavior
    toString(): string {
        return `Dog(${this.name}, ${this.breed})`;
    }
}

class Cat extends Animal {
    constructor(name: string, public isIndoor: boolean) {
        super(name, "Meow");
    }

    purr(): void {
        console.log(`${this.name} purrs contentedly...`);
    }
}

class Bird extends Animal {
    constructor(name: string, public canFly: boolean) {
        super(name, "Tweet");
    }

    // Override move to describe flying
    move(distance: number = 10): void {
        if (this.canFly) {
            console.log(`${this.name} flew ${distance} meters.`);
        } else {
            super.move(distance); // call parent's version of move
        }
    }
}

// ── Using Inherited Classes ────────────────────────────────────────────────────
let dog = new Dog("Rex", "German Shepherd");
dog.makeSound();       // → Rex says: Woof  (inherited from Animal)
dog.fetch("ball");     // → Rex fetches the ball!  (Dog's own method)
dog.move(5);           // → Rex moved 5 meters.  (inherited from Animal)
console.log(dog.toString()); // → Dog(Rex, German Shepherd)  (overridden)

let cat = new Cat("Whiskers", true);
cat.makeSound(); // → Whiskers says: Meow
cat.purr();      // → Whiskers purrs contentedly...

let parrot = new Bird("Polly", true);
parrot.move(50); // → Polly flew 50 meters.  (overridden)

let penguin = new Bird("Pingu", false);
penguin.move(5); // → Pingu moved 5 meters.  (calls super.move)

// ── Polymorphism ──────────────────────────────────────────────────────────────
// A parent type variable can hold any child type
let animals: Animal[] = [dog, cat, parrot, penguin];
animals.forEach(animal => {
    animal.makeSound(); // each calls its own version (or inherited version)
});

// ── instanceof Check ─────────────────────────────────────────────────────────
console.log(dog instanceof Dog);    // → true
console.log(dog instanceof Animal); // → true  (Dog is-a Animal)
console.log(cat instanceof Dog);    // → false

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create a class 'Shape' with a method 'area(): number' (returns 0)
// 2. Extend 'Shape' with:
//    - 'Circle' (radius) that overrides area() with π*r²
//    - 'Rectangle' (width, height) that overrides area() with w*h
//    - 'Triangle' (base, height) that overrides area() with 0.5*b*h
// 3. Create an array of Shape objects and print each area
// =============================================================================

export {};

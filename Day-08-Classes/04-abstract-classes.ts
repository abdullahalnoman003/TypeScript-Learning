// =============================================================================
// DAY 08 — FILE 04: Abstract Classes
// =============================================================================
//
// An ABSTRACT CLASS is a class that CANNOT be instantiated directly.
// It serves as a BASE CLASS for other classes to extend from.
//
// Key features:
//   • Marked with 'abstract' keyword
//   • Can have ABSTRACT METHODS — declared but NOT implemented (no body)
//   • Subclasses MUST implement all abstract methods
//   • CAN have regular (concrete) methods with implementations
//   • CAN have properties
//
// Use abstract classes when: you want to enforce that all subclasses implement
// certain methods, while sharing common functionality.
// =============================================================================

// ── Abstract Class ────────────────────────────────────────────────────────────
abstract class Shape {
    // Regular property
    color: string;

    constructor(color: string) {
        this.color = color;
    }

    // Abstract method — subclasses MUST implement this
    abstract area(): number;

    // Abstract method — subclasses MUST implement this
    abstract perimeter(): number;

    // Concrete method — shared by all subclasses (no need to override)
    describe(): string {
        return `A ${this.color} shape with area ${this.area().toFixed(2)} and perimeter ${this.perimeter().toFixed(2)}`;
    }

    // toString is concrete
    toString(): string {
        return `${this.constructor.name}(${this.color})`;
    }
}

// new Shape("red");  // ← UNCOMMENT: Error! Cannot create instance of abstract class

// ── Concrete Subclasses ───────────────────────────────────────────────────────
class Circle extends Shape {
    constructor(color: string, public radius: number) {
        super(color);
    }

    // MUST implement abstract methods:
    area(): number {
        return Math.PI * this.radius ** 2;
    }

    perimeter(): number {
        return 2 * Math.PI * this.radius; // circumference
    }
}

class Rectangle extends Shape {
    constructor(color: string, public width: number, public height: number) {
        super(color);
    }

    area(): number {
        return this.width * this.height;
    }

    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}

class Triangle extends Shape {
    constructor(color: string, public base: number, public height: number, private hypotenuse: number) {
        super(color);
    }

    area(): number {
        return 0.5 * this.base * this.height;
    }

    perimeter(): number {
        // simplified — assumes right triangle: base + height + hypotenuse
        return this.base + this.height + this.hypotenuse;
    }
}

// ── Using the Subclasses ──────────────────────────────────────────────────────
let shapes: Shape[] = [
    new Circle("red", 5),
    new Rectangle("blue", 4, 6),
    new Triangle("green", 3, 4, 5),
];

shapes.forEach(shape => {
    console.log(shape.describe()); // calls each class's own area() and perimeter()
});
// → A red shape with area 78.54 and perimeter 31.42
// → A blue shape with area 24.00 and perimeter 20.00
// → A green shape with area 6.00 and perimeter 12.00

// ── Abstract vs Interface ──────────────────────────────────────────────────────
// | Feature                          | Abstract Class | Interface  |
// | Can have implementations         |      ✔         |    ✗       |
// | Can have state (properties)      |      ✔         |    ✗*      |
// | Can be instantiated              |      ✗         |    ✗       |
// | Multiple inheritance             |      ✗         |    ✔       |
// | Access modifiers                 |      ✔         |    ✗       |
// Use abstract class when you want SHARED IMPLEMENTATION + ENFORCED CONTRACT
// Use interface when you want PURE CONTRACT (no implementation)

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create an abstract class 'Animal' with:
//    - abstract method: makeSound(): string
//    - concrete method: sleep() that logs "[name] is sleeping"
// 2. Create Dog, Cat, and Cow subclasses that each implement makeSound()
// 3. Create an array of Animal and call both makeSound() and sleep() on each
// =============================================================================

export {};

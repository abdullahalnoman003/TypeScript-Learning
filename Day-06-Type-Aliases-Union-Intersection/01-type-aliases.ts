// =============================================================================
// DAY 06 — FILE 01: Type Aliases
// =============================================================================
//
// A TYPE ALIAS gives a name to any type. Use the 'type' keyword.
// Unlike interfaces (which only describe objects), type aliases can represent:
//   • Object shapes
//   • Primitive types
//   • Union types
//   • Intersection types
//   • Tuples
//   • Function types
//   • ... and more
// =============================================================================

// ── Basic Type Aliases ─────────────────────────────────────────────────────────
type UserID = number;        // alias for number
type Username = string;      // alias for string
type IsActive = boolean;     // alias for boolean

let id: UserID = 1001;
let user: Username = "Alice";
let active: IsActive = true;

// ── Object Type Alias ─────────────────────────────────────────────────────────
type Product = {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
};

let laptop: Product = { id: 1, name: "Laptop", price: 999.99, inStock: true };
console.log(laptop);

// ── Function Type Alias ────────────────────────────────────────────────────────
type MathFn = (a: number, b: number) => number;

const add: MathFn = (a, b) => a + b;
const subtract: MathFn = (a, b) => a - b;
console.log(add(10, 5));      // → 15
console.log(subtract(10, 5)); // → 5

// ── Literal Type Alias ────────────────────────────────────────────────────────
// Restrict a type to specific literal values — very powerful!
type Direction = "north" | "south" | "east" | "west";
type Status = "pending" | "active" | "inactive" | "banned";
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

let facing: Direction = "north";
// facing = "up";  ← Error! "up" is not one of the allowed values

let accountStatus: Status = "active";
let roll: DiceRoll = 4;

// ── Tuple Type Alias ──────────────────────────────────────────────────────────
type Coordinate = [number, number];
type RGB = [number, number, number];

let point: Coordinate = [10, 20];
let color: RGB = [255, 0, 128];

// ── Recursive Type Alias ──────────────────────────────────────────────────────
// A type that refers to ITSELF — useful for tree-like structures
type TreeNode = {
    value: number;
    left?: TreeNode;   // optional child (of same type)
    right?: TreeNode;  // optional child (of same type)
};

let tree: TreeNode = {
    value: 1,
    left: {
        value: 2,
        left: { value: 4 },
        right: { value: 5 },
    },
    right: {
        value: 3,
    },
};
console.log(tree.left?.right?.value); // → 5

// ── type vs interface ─────────────────────────────────────────────────────────
// | Feature                    | type | interface |
// | Object shapes              |  ✔   |    ✔      |
// | Union types                |  ✔   |    ✗      |
// | Primitive aliases          |  ✔   |    ✗      |
// | Extension (inheritance)    |  ✔   |    ✔      |
// | Declaration merging        |  ✗   |    ✔      |
// Guideline: use 'interface' for OO patterns, 'type' for everything else

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create a type alias 'Color' with string variants: "red", "green", "blue", "yellow"
// 2. Create a type alias 'Callback' for a function: (error: string | null, data?: unknown) => void
// 3. Create a type alias 'Matrix' for a 2D number array: number[][]
// 4. Use each in a real variable and function
// =============================================================================

export {};

// =============================================================================
// DAY 11 — FILE 01: Partial, Required, and Readonly
// =============================================================================
//
// TypeScript ships with many built-in UTILITY TYPES — pre-built generic types
// that transform other types in useful ways. No need to install anything!
//
// Today: the fundamental transformation utility types
//   Partial<T>  → makes all properties optional
//   Required<T> → makes all properties required (removes optionality)
//   Readonly<T> → makes all properties readonly
// =============================================================================

interface User {
    id: number;
    name: string;
    email: string;
    phone?: string;  // already optional
    address?: string; // already optional
}

// ── Partial<T> ────────────────────────────────────────────────────────────────
// Makes ALL properties optional — very useful for UPDATE functions!
type PartialUser = Partial<User>;
// Equivalent to: { id?: number; name?: string; email?: string; phone?: string; address?: string }

// Common use case: update functions need only the fields being changed
function updateUser(userId: number, updates: Partial<User>): void {
    console.log(`Updating user ${userId}:`, updates);
    // In a real app, you'd fetch the user and merge the updates
}

updateUser(1, { name: "Alice Smith" });                    // only name changed
updateUser(2, { email: "new@email.com", phone: "555-1234" }); // email + phone
updateUser(3, { id: 3, name: "Charlie", email: "c@c.com" }); // all fields

// ── Required<T> ───────────────────────────────────────────────────────────────
// Makes ALL properties required — removes all ? optionality markers
type RequiredUser = Required<User>;
// Equivalent to: { id: number; name: string; email: string; phone: string; address: string }
// Note: phone and address are now REQUIRED (were optional in User)

let fullUser: RequiredUser = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    phone: "555-0001",
    address: "123 Main St",
};

// ── Readonly<T> ────────────────────────────────────────────────────────────────
// Makes ALL properties readonly — prevents accidental mutations
type ReadonlyUser = Readonly<User>;
// Equivalent to: { readonly id: number; readonly name: string; ... }

let lockedUser: ReadonlyUser = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
};
// lockedUser.name = "Bob";  // ← Error! Cannot assign to readonly property

// ── Combining Utility Types ────────────────────────────────────────────────────
// You can nest utility types
type ReadonlyPartialUser = Readonly<Partial<User>>;
// → all properties are optional AND readonly

let rp: ReadonlyPartialUser = { name: "Alice" }; // only name, and can't change it
// rp.name = "Bob"; // ← Error! readonly

// ── Real-World Pattern: Create vs Update ──────────────────────────────────────
interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
}

type CreateProduct = Omit<Product, "id">;           // all fields except id (id is generated)
type UpdateProduct = Partial<Omit<Product, "id">>;  // all fields optional except id

function createProduct(data: CreateProduct): Product {
    return { id: Math.random(), ...data };
}

function patchProduct(id: number, data: UpdateProduct): void {
    console.log(`Patching product ${id}:`, data);
}

createProduct({ name: "Laptop", price: 999, description: "Great laptop", category: "Electronics" });
patchProduct(1, { price: 899 }); // only update price

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create an interface 'Config' with 10 different settings
// 2. Create types: DefaultConfig (all Required), UserConfig (all Partial),
//    FrozenConfig (all Readonly)
// 3. Write a function 'mergeConfig(defaults: Required<Config>, overrides: Partial<Config>): Required<Config>'
// =============================================================================

export {};

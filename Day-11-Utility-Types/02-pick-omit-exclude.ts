// =============================================================================
// DAY 11 — FILE 02: Pick, Omit, and Exclude
// =============================================================================
//
// Three utility types for SELECTING or REMOVING parts of types:
//
//   Pick<T, K>    → create a new type with ONLY the listed keys from T
//   Omit<T, K>    → create a new type with all keys EXCEPT the listed keys
//   Exclude<T, U> → from a UNION type T, remove types assignable to U
// =============================================================================

interface User {
    id: number;
    name: string;
    email: string;
    password: string;  // sensitive!
    createdAt: Date;
    updatedAt: Date;
}

// ── Pick<T, K> ────────────────────────────────────────────────────────────────
// Create a new type with ONLY the specified keys
type UserPreview = Pick<User, "id" | "name">;
// → { id: number; name: string }

type PublicUser = Pick<User, "id" | "name" | "email" | "createdAt">;
// → { id: number; name: string; email: string; createdAt: Date }
// Notice: password is NOT included — safe to send to frontend!

let preview: UserPreview = { id: 1, name: "Alice" };
// preview.email  // ← Error! email was not picked

// ── Omit<T, K> ──────────────────────────────────────────────────────────────
// Create a new type EXCLUDING the specified keys
type SafeUser = Omit<User, "password">; // all fields except password
// → { id: number; name: string; email: string; createdAt: Date; updatedAt: Date }

type UserWithoutDates = Omit<User, "createdAt" | "updatedAt">;
// → { id: number; name: string; email: string; password: string }

let safeUser: SafeUser = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    createdAt: new Date(),
    updatedAt: new Date(),
};
// safeUser.password  // ← Error! password was omitted

// ── Pick vs Omit ──────────────────────────────────────────────────────────────
// Use Pick when you know the FEW fields you WANT
// Use Omit when you know the FEW fields you DON'T WANT
// If you're removing 1-2 fields from a large type: Omit is cleaner
// If you only want 1-2 fields from a large type: Pick is cleaner

// ── Exclude<T, U> ────────────────────────────────────────────────────────────
// Works on UNION TYPES (not objects!) — removes members from a union
type AllTypes = string | number | boolean | null | undefined;
type Primitives = Exclude<AllTypes, null | undefined>; // → string | number | boolean
type JustStrings = Exclude<string | number[], string>; // → number[]

type Status = "pending" | "active" | "inactive" | "banned";
type ActiveStatuses = Exclude<Status, "inactive" | "banned">; // → "pending" | "active"

let status: ActiveStatuses = "active";
// let bad: ActiveStatuses = "banned";  // ← Error!

// ── Real-World: DTO Pattern (Data Transfer Object) ────────────────────────────
// When sending data between layers, use Pick/Omit to shape it
interface DbUser {
    id: number;
    name: string;
    email: string;
    passwordHash: string;
    salt: string;
    createdAt: Date;
    loginAttempts: number;
    isLocked: boolean;
}

// What we send to the API response (no sensitive internal fields):
type ApiUserResponse = Omit<DbUser, "passwordHash" | "salt" | "loginAttempts" | "isLocked">;

// What we need from the client to create a user:
type CreateUserDto = Pick<DbUser, "name" | "email">;

// =============================================================================
// EXERCISE FOR YOU:
// 1. Given an interface 'Post' with: id, title, content, authorId, tags, views, likes
//    Create: PostSummary (id, title, views, likes), PostEditor (title, content, tags)
// 2. Use Exclude to remove "admin" and "superuser" from a Role union type
// 3. Create a function that takes a User and returns a SafeUser (without password)
// =============================================================================

export {};

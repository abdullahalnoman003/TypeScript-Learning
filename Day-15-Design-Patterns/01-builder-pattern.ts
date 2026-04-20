// =============================================================================
// DAY 15 — FILE 01: Builder Pattern
// =============================================================================
//
// The BUILDER PATTERN separates the construction of a complex object from
// its representation. It lets you build complex objects step-by-step using a
// FLUENT INTERFACE (method chaining).
//
// When to use:
//   ✅ Object has many optional parameters (avoid telescoping constructors)
//   ✅ Object construction requires multiple steps/validation
//   ✅ You want a readable, self-documenting API
//
// Real-world examples:
//   - Query builders (Knex.js, TypeORM QueryBuilder)
//   - HTTP request builders (axios config)
//   - Form builders, email builders
// =============================================================================

// ── Problem Without Builder ───────────────────────────────────────────────────
// Imagine constructing a "User" with many optional fields:
//
//   const user = new User("Alice", "alice@example.com", 30, "Admin", true, ...10 more args)
//
// This is called a TELESCOPING CONSTRUCTOR — unreadable and error-prone.

// ── Basic Builder ──────────────────────────────────────────────────────────────
interface UserConfig {
    name: string;
    email: string;
    age?: number;
    role?: "admin" | "user" | "moderator";
    isVerified?: boolean;
    bio?: string;
}

class User {
    readonly name: string;
    readonly email: string;
    readonly age: number | undefined;
    readonly role: "admin" | "user" | "moderator";
    readonly isVerified: boolean;
    readonly bio: string;

    constructor(config: UserConfig) {
        this.name = config.name;
        this.email = config.email;
        this.age = config.age;
        this.role = config.role ?? "user";
        this.isVerified = config.isVerified ?? false;
        this.bio = config.bio ?? "";
    }
}

// The Builder class:
class UserBuilder {
    // Start with required fields only
    private config: UserConfig;

    constructor(name: string, email: string) {
        this.config = { name, email };
    }

    // Each method sets one property and returns 'this' (for chaining)
    setAge(age: number): this {
        this.config.age = age;
        return this; // ← enables method chaining
    }

    setRole(role: "admin" | "user" | "moderator"): this {
        this.config.role = role;
        return this;
    }

    verify(): this {
        this.config.isVerified = true;
        return this;
    }

    setBio(bio: string): this {
        this.config.bio = bio;
        return this;
    }

    build(): User {
        // Validation can go here before building
        if (!this.config.email.includes("@")) {
            throw new Error("Invalid email address");
        }
        return new User(this.config);
    }
}

// Usage — clean, readable, self-documenting:
const user = new UserBuilder("Alice", "alice@example.com")
    .setAge(30)
    .setRole("admin")
    .verify()
    .setBio("Full-stack developer")
    .build();

console.log(user.name);       // → Alice
console.log(user.role);       // → admin
console.log(user.isVerified); // → true

// ── Query Builder Example ─────────────────────────────────────────────────────
class QueryBuilder {
    private table: string = "";
    private conditions: string[] = [];
    private selectedCols: string[] = ["*"];
    private limitVal: number | null = null;
    private orderByCol: string | null = null;

    from(table: string): this {
        this.table = table;
        return this;
    }

    select(...columns: string[]): this {
        this.selectedCols = columns;
        return this;
    }

    where(condition: string): this {
        this.conditions.push(condition);
        return this;
    }

    limit(n: number): this {
        this.limitVal = n;
        return this;
    }

    orderBy(column: string): this {
        this.orderByCol = column;
        return this;
    }

    build(): string {
        let query = `SELECT ${this.selectedCols.join(", ")} FROM ${this.table}`;
        if (this.conditions.length) query += ` WHERE ${this.conditions.join(" AND ")}`;
        if (this.orderByCol) query += ` ORDER BY ${this.orderByCol}`;
        if (this.limitVal !== null) query += ` LIMIT ${this.limitVal}`;
        return query;
    }
}

const query = new QueryBuilder()
    .from("users")
    .select("id", "name", "email")
    .where("age > 18")
    .where("isVerified = true")
    .orderBy("name")
    .limit(10)
    .build();

console.log(query);
// → SELECT id, name, email FROM users WHERE age > 18 AND isVerified = true ORDER BY name LIMIT 10

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create a PizzaBuilder with toppings (addTopping), size ("small"|"medium"|"large"),
//    crustType ("thin"|"thick"), and a build() that returns a Pizza object
// 2. Create an EmailBuilder with: to(), from(), subject(), body(), addAttachment()
//    and a send() method that logs the email details
// 3. Add validation to your builder: require at least one topping, verify email
// =============================================================================

export {};

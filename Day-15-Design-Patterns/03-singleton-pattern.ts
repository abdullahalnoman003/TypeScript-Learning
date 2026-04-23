// =============================================================================
// DAY 15 — FILE 03: Singleton Pattern
// =============================================================================
//
// The SINGLETON PATTERN ensures a class has only ONE instance, and provides
// a global point of access to it.
//
// Implementation requires:
//   1. Private constructor (prevents 'new ClassName()')
//   2. Private static instance field
//   3. Public static getInstance() method
//
// When to use:
//   ✅ Configuration manager
//   ✅ Logger (shared app-wide)
//   ✅ Database connection pool
//   ✅ Event bus / message broker
//
// When NOT to use:
//   ❌ When you need multiple instances
//   ❌ When testability matters (singletons are hard to mock)
// =============================================================================

// ── Basic Singleton ────────────────────────────────────────────────────────────
class ConfigManager {
    // 1. Private static field to hold the single instance
    private static instance: ConfigManager | null = null;

    // Internal config map
    private settings: Map<string, string> = new Map();

    // 2. Private constructor — prevents: new ConfigManager()
    private constructor() {
        // Initialize with default settings
        this.settings.set("theme", "light");
        this.settings.set("language", "en");
        this.settings.set("version", "1.0.0");
        console.log("ConfigManager initialized (only happens once)");
    }

    // 3. Public static factory method — returns the single instance
    static getInstance(): ConfigManager {
        if (!ConfigManager.instance) {
            ConfigManager.instance = new ConfigManager();
        }
        return ConfigManager.instance;
    }

    get(key: string): string | undefined {
        return this.settings.get(key);
    }

    set(key: string, value: string): void {
        this.settings.set(key, value);
    }
}

const config1 = ConfigManager.getInstance(); // → "ConfigManager initialized"
const config2 = ConfigManager.getInstance(); // → (no log — same instance)

console.log(config1 === config2); // → true (same object!)

config1.set("theme", "dark");
console.log(config2.get("theme")); // → "dark" (same instance, shared state)

// ── Database Connection Singleton ─────────────────────────────────────────────
class Database {
    private static instance: Database | null = null;
    private isConnected: boolean = false;
    private connectionString: string;

    private constructor(connectionString: string) {
        this.connectionString = connectionString;
    }

    static getInstance(connectionString: string = "localhost:5432/mydb"): Database {
        if (!Database.instance) {
            Database.instance = new Database(connectionString);
        }
        return Database.instance;
    }

    connect(): void {
        if (!this.isConnected) {
            console.log(`Connecting to: ${this.connectionString}`);
            this.isConnected = true;
        } else {
            console.log("Already connected — reusing connection");
        }
    }

    query(sql: string): string {
        if (!this.isConnected) throw new Error("Not connected!");
        return `Result of: ${sql}`;
    }

    disconnect(): void {
        this.isConnected = false;
        console.log("Disconnected");
    }
}

const db1 = Database.getInstance();
const db2 = Database.getInstance("other-host:5432/other"); // ignored — same instance

db1.connect();  // → Connecting to: localhost:5432/mydb
db2.connect();  // → Already connected — reusing connection
console.log(db1 === db2); // → true

// ── Singleton with Reset (for Testing) ───────────────────────────────────────
// Problem: true singletons are hard to test because state persists
// Solution: add a reset method (only use in tests!)
class AppState {
    private static _instance: AppState | null = null;
    public count: number = 0;

    private constructor() {}

    static getInstance(): AppState {
        if (!AppState._instance) AppState._instance = new AppState();
        return AppState._instance;
    }

    // For testing only
    static _resetInstance(): void {
        AppState._instance = null;
    }
}

AppState.getInstance().count = 42;
console.log(AppState.getInstance().count); // → 42

AppState._resetInstance(); // clear for next test
console.log(AppState.getInstance().count); // → 0 (fresh instance)

// ── Module-Level Singleton (Simpler Approach) ─────────────────────────────────
// In TypeScript/Node.js, module-level constants are already singletons
// because modules are cached after first import

// appConfig.ts would contain:
// export const appConfig = {
//     apiUrl: "https://api.example.com",
//     timeout: 5000,
// };
// Every file that imports appConfig gets the SAME object reference.

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create a Logger singleton that:
//    - Stores all log messages in an array
//    - Has log(message) and getLogs() methods
//    - Ensures only one instance exists
// 2. Create a ThemeManager singleton that toggles between "light" and "dark"
//    and notifies about the change
// 3. Refactor the Logger singleton to support a reset method for unit tests
// =============================================================================

export {};

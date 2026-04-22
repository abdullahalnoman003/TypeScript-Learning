// =============================================================================
// DAY 15 — FILE 02: Factory Pattern
// =============================================================================
//
// The FACTORY PATTERN provides an interface for creating objects, but lets
// subclasses or functions decide which class to instantiate.
//
// Two common forms:
//   1. Factory Function  — a plain function that creates objects
//   2. Factory Method    — a method in a class (often abstract) that subclasses override
//
// When to use:
//   ✅ Object creation is complex or depends on conditions
//   ✅ You want to hide implementation details from the caller
//   ✅ You need to switch between implementations at runtime
// =============================================================================

// ── 1. Simple Factory Function ─────────────────────────────────────────────────
interface Logger {
    log(message: string): void;
    error(message: string): void;
}

class ConsoleLogger implements Logger {
    log(message: string): void {
        console.log(`[INFO]  ${new Date().toISOString()} - ${message}`);
    }
    error(message: string): void {
        console.error(`[ERROR] ${new Date().toISOString()} - ${message}`);
    }
}

class FileLogger implements Logger {
    constructor(private filename: string) {}
    log(message: string): void {
        console.log(`[FILE: ${this.filename}] INFO: ${message}`);
    }
    error(message: string): void {
        console.log(`[FILE: ${this.filename}] ERROR: ${message}`);
    }
}

class NoOpLogger implements Logger {
    log(_message: string): void {} // does nothing (useful in tests)
    error(_message: string): void {}
}

// Factory function — caller doesn't need to know which class is used
function createLogger(type: "console" | "file" | "none", filename?: string): Logger {
    switch (type) {
        case "console": return new ConsoleLogger();
        case "file":    return new FileLogger(filename ?? "app.log");
        case "none":    return new NoOpLogger();
    }
}

const logger = createLogger("console");
logger.log("Application started");  // → [INFO]  ... - Application started

const fileLogger = createLogger("file", "errors.log");
fileLogger.error("Something broke"); // → [FILE: errors.log] ERROR: Something broke

// ── 2. Factory Method Pattern ──────────────────────────────────────────────────
// Abstract base class with an abstract factory method that subclasses implement

// Note: renamed to 'AppNotification' to avoid conflict with browser's built-in Notification API
abstract class AppNotification {
    abstract send(to: string, message: string): void;

    // Template method — uses the factory method internally
    notify(to: string, message: string): void {
        console.log(`Sending notification to ${to}...`);
        this.send(to, message);
    }
}

class EmailNotification extends AppNotification {
    send(to: string, message: string): void {
        console.log(`📧 Email to ${to}: ${message}`);
    }
}

class SmsNotification extends AppNotification {
    send(to: string, message: string): void {
        console.log(`📱 SMS to ${to}: ${message}`);
    }
}

class PushNotification extends AppNotification {
    send(to: string, message: string): void {
        console.log(`🔔 Push to ${to}: ${message}`);
    }
}

// The factory
function createNotification(type: "email" | "sms" | "push"): AppNotification {
    switch (type) {
        case "email": return new EmailNotification();
        case "sms":   return new SmsNotification();
        case "push":  return new PushNotification();
    }
}

const notif = createNotification("email");
notif.notify("alice@example.com", "Your order has shipped!");
// → Sending notification to alice@example.com...
// → 📧 Email to alice@example.com: Your order has shipped!

// ── 3. Generic Factory with Registry ─────────────────────────────────────────
// Allow dynamic registration of types — no if/switch needed
type Constructor<T> = new (...args: any[]) => T;

class Factory<T> {
    private registry: Map<string, Constructor<T>> = new Map();

    register(key: string, cls: Constructor<T>): void {
        this.registry.set(key, cls);
    }

    create(key: string, ...args: any[]): T {
        const Cls = this.registry.get(key);
        if (!Cls) throw new Error(`No class registered for key: "${key}"`);
        return new Cls(...args);
    }
}

interface Transport { deliver(item: string): void; }
class TruckTransport  implements Transport { deliver(i: string) { console.log(`🚚 Truck: ${i}`); } }
class DroneTransport  implements Transport { deliver(i: string) { console.log(`🚁 Drone: ${i}`); } }
class ShipTransport   implements Transport { deliver(i: string) { console.log(`🚢 Ship: ${i}`); } }

const transportFactory = new Factory<Transport>();
transportFactory.register("truck", TruckTransport);
transportFactory.register("drone", DroneTransport);
transportFactory.register("ship",  ShipTransport);

transportFactory.create("drone").deliver("Package A"); // → 🚁 Drone: Package A
transportFactory.create("truck").deliver("Package B"); // → 🚚 Truck: Package B

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create a ShapeFactory that creates Circle, Rectangle, and Triangle
//    objects based on a string key; each shape has an area() method
// 2. Create a DatabaseFactory with adapters for "postgres", "mysql", "sqlite"
//    each adapter has connect(): string and query(sql: string): string methods
// 3. Use the generic Factory<T> class to build a plugin registry
// =============================================================================

export {};

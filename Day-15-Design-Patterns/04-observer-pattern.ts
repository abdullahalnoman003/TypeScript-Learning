// =============================================================================
// DAY 15 — FILE 04: Observer Pattern
// =============================================================================
//
// The OBSERVER PATTERN defines a one-to-many dependency between objects.
// When one object (the SUBJECT / PUBLISHER) changes state, all its dependents
// (OBSERVERS / SUBSCRIBERS) are notified automatically.
//
// Also known as: Publish-Subscribe (Pub/Sub), Event Emitter
//
// When to use:
//   ✅ UI event handling (click, input, scroll)
//   ✅ Real-time data feeds (stock prices, chat messages)
//   ✅ State management (React's useState internally uses this)
//   ✅ Decoupling components that shouldn't know about each other
// =============================================================================

// ── Interfaces ─────────────────────────────────────────────────────────────────
// Define contracts for Subject and Observer

interface Observer<T> {
    update(data: T): void;
}

interface Subject<T> {
    subscribe(observer: Observer<T>): void;
    unsubscribe(observer: Observer<T>): void;
    notify(data: T): void;
}

// ── Generic EventEmitter ───────────────────────────────────────────────────────
// A type-safe, generic implementation of Subject

class EventEmitter<T> implements Subject<T> {
    private observers: Set<Observer<T>> = new Set();

    subscribe(observer: Observer<T>): void {
        this.observers.add(observer);
        console.log(`Observer subscribed (total: ${this.observers.size})`);
    }

    unsubscribe(observer: Observer<T>): void {
        this.observers.delete(observer);
        console.log(`Observer unsubscribed (total: ${this.observers.size})`);
    }

    notify(data: T): void {
        this.observers.forEach(observer => observer.update(data));
    }
}

// ── Stock Price Example ───────────────────────────────────────────────────────
interface StockData {
    symbol: string;
    price: number;
    change: number;
}

class StockMarket extends EventEmitter<StockData> {
    private prices: Map<string, number> = new Map();

    updatePrice(symbol: string, newPrice: number): void {
        const oldPrice = this.prices.get(symbol) ?? newPrice;
        const change = newPrice - oldPrice;
        this.prices.set(symbol, newPrice);
        this.notify({ symbol, price: newPrice, change });
    }
}

class StockDisplay implements Observer<StockData> {
    update(data: StockData): void {
        const arrow = data.change >= 0 ? "▲" : "▼";
        console.log(`📊 ${data.symbol}: $${data.price} ${arrow} ${Math.abs(data.change)}`);
    }
}

class StockAlert implements Observer<StockData> {
    private threshold: number;
    constructor(threshold: number) { this.threshold = threshold; }

    update(data: StockData): void {
        if (Math.abs(data.change) > this.threshold) {
            console.log(`🚨 ALERT: ${data.symbol} moved by ${data.change} (threshold: ${this.threshold})`);
        }
    }
}

const market = new StockMarket();
const display = new StockDisplay();
const stockAlert = new StockAlert(5); // renamed: 'alert' would conflict with browser's window.alert

market.subscribe(display);
market.subscribe(stockAlert);

market.updatePrice("AAPL", 175);
market.updatePrice("AAPL", 183);  // 8 point jump — triggers alert

market.unsubscribe(stockAlert);
market.updatePrice("AAPL", 185);  // display only, no alert

// ── Functional Pub/Sub (callback-based) ───────────────────────────────────────
// Modern approach: no need for Observer interface — use functions directly

type Listener<T> = (data: T) => void;

class TypedEventBus<Events extends Record<string, any>> {
    private listeners: Partial<{ [K in keyof Events]: Listener<Events[K]>[] }> = {};

    on<K extends keyof Events>(event: K, listener: Listener<Events[K]>): () => void {
        if (!this.listeners[event]) this.listeners[event] = [];
        this.listeners[event]!.push(listener);
        // Return an unsubscribe function
        return () => this.off(event, listener);
    }

    off<K extends keyof Events>(event: K, listener: Listener<Events[K]>): void {
        this.listeners[event] = this.listeners[event]?.filter(l => l !== listener);
    }

    emit<K extends keyof Events>(event: K, data: Events[K]): void {
        this.listeners[event]?.forEach(l => l(data));
    }
}

// Define app events
interface AppEvents {
    "user:login":  { userId: number; username: string };
    "user:logout": { userId: number };
    "cart:update": { itemCount: number };
}

const bus = new TypedEventBus<AppEvents>();

const unsubLogin = bus.on("user:login", ({ username }) => {
    console.log(`👋 Welcome, ${username}!`);
});

bus.on("cart:update", ({ itemCount }) => {
    console.log(`🛒 Cart has ${itemCount} items`);
});

bus.emit("user:login", { userId: 1, username: "Alice" }); // → 👋 Welcome, Alice!
bus.emit("cart:update", { itemCount: 3 });                // → 🛒 Cart has 3 items

unsubLogin(); // unsubscribe from user:login
bus.emit("user:login", { userId: 2, username: "Bob" });  // → (no output — unsubscribed)

// =============================================================================
// EXERCISE FOR YOU:
// 1. Build a WeatherStation that extends EventEmitter<WeatherData> where
//    WeatherData = { temperature, humidity, windSpeed }
//    Create 3 observers: TemperatureDisplay, HumidityAlert, WeatherLogger
// 2. Use TypedEventBus to build a simple form validation system with events:
//    "field:change" { name, value } and "form:submit" { data: Record<string, string> }
// 3. Implement a once() method on TypedEventBus that fires the listener only once
// =============================================================================

export {};

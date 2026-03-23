// =============================================================================
// DAY 08 — FILE 02: Access Modifiers
// =============================================================================
//
// Access modifiers control WHERE a class property or method can be accessed from.
//
//   public    → Accessible from ANYWHERE (default — same as writing nothing)
//   private   → Only accessible from INSIDE the class itself
//   protected → Accessible from the class AND its SUBCLASSES (not outside)
//
// These are TypeScript-only features — they're erased in compiled JavaScript.
// At runtime (in JS), all properties are technically accessible — TypeScript
// enforces access at COMPILE TIME only.
// =============================================================================

class BankAccount {
    public owner: string;        // accessible from anywhere
    protected balance: number;   // accessible in BankAccount and subclasses
    private pin: string;         // accessible ONLY inside BankAccount

    constructor(owner: string, initialBalance: number, pin: string) {
        this.owner = owner;
        this.balance = initialBalance;
        this.pin = pin;
    }

    // Public method — anyone can call this
    public getBalance(): number {
        return this.balance;
    }

    // Public method — uses private pin internally
    public withdraw(amount: number, enteredPin: string): boolean {
        if (!this.verifyPin(enteredPin)) {  // can call private method internally
            console.log("❌ Wrong PIN");
            return false;
        }
        if (amount > this.balance) {
            console.log("❌ Insufficient funds");
            return false;
        }
        this.balance -= amount;
        console.log(`✔ Withdrew $${amount}. New balance: $${this.balance}`);
        return true;
    }

    // Private method — internal helper, not part of the public API
    private verifyPin(enteredPin: string): boolean {
        return this.pin === enteredPin;
    }
}

let account = new BankAccount("Alice", 1000, "1234");
console.log(account.owner);          // → Alice       (public ✔)
console.log(account.getBalance());   // → 1000        (public method ✔)
account.withdraw(200, "1234");       // → Withdrew $200. New balance: $800
account.withdraw(100, "9999");       // → ❌ Wrong PIN

// account.pin;                      // ← UNCOMMENT: Error! 'pin' is private
// account.verifyPin("1234");        // ← UNCOMMENT: Error! 'verifyPin' is private

// ── Protected — Accessible in Subclasses ──────────────────────────────────────
class SavingsAccount extends BankAccount {
    private interestRate: number;

    constructor(owner: string, balance: number, pin: string, interestRate: number) {
        super(owner, balance, pin);
        this.interestRate = interestRate;
    }

    addInterest(): void {
        // 'balance' is PROTECTED — accessible in this subclass
        const interest = this.balance * this.interestRate;
        this.balance += interest; // ✔ allowed (protected)
        console.log(`Interest added: $${interest.toFixed(2)}. New balance: $${this.balance.toFixed(2)}`);

        // this.pin  // ← Error! pin is PRIVATE to BankAccount — not accessible here
    }
}

let savings = new SavingsAccount("Bob", 2000, "5678", 0.05);
savings.addInterest(); // → Interest added: $100.00. New balance: $2100.00
// savings.balance;    // ← UNCOMMENT: Error! balance is protected (not accessible outside)

// ── Access Level Summary ──────────────────────────────────────────────────────
//                 | Inside class | Subclass | Outside class
// public          |     ✔        |    ✔     |      ✔
// protected       |     ✔        |    ✔     |      ✗
// private         |     ✔        |    ✗     |      ✗

// ── JavaScript Private Fields (#) ────────────────────────────────────────────
// ES2022 added TRUE runtime-private fields using # prefix (TypeScript supports this too)
class Secret {
    #password: string;  // TRUE private — enforced at runtime by JavaScript, not just TypeScript
    constructor(pwd: string) { this.#password = pwd; }
    check(p: string): boolean { return p === this.#password; }
}
let s = new Secret("abc123");
console.log(s.check("abc123")); // → true
// s.#password  // ← Syntax error even in JavaScript!

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create a class 'Employee' with:
//    - public: name, jobTitle
//    - protected: salary
//    - private: ssn (social security number)
// 2. Create a class 'Manager' that extends 'Employee' and can give a raise
//    (access to protected salary) but cannot access ssn
// =============================================================================

export {};

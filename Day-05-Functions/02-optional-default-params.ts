// =============================================================================
// DAY 05 — FILE 02: Optional and Default Parameters
// =============================================================================
//
// OPTIONAL PARAMETERS: Mark with '?' — the caller can omit them
//   Inside the function the value will be undefined if not provided
//
// DEFAULT PARAMETERS: Assign a default value — if caller omits the arg,
//   the default is used instead of undefined
//
// RULES:
//   - Optional/default params MUST come AFTER required params
//   - Optional params and default params serve similar purposes
//     but default params are often cleaner
// =============================================================================

// ── Optional Parameters ───────────────────────────────────────────────────────
function greet(name: string, greeting?: string): string {
    // 'greeting' might be undefined — handle both cases
    if (greeting === undefined) {
        return `Hello, ${name}!`;
    }
    return `${greeting}, ${name}!`;
}

console.log(greet("Alice"));             // → Hello, Alice!  (greeting omitted)
console.log(greet("Bob", "Good morning")); // → Good morning, Bob!

// ── Default Parameters ─────────────────────────────────────────────────────────
function createUser(name: string, role: string = "viewer", active: boolean = true) {
    return { name, role, active };
}

console.log(createUser("Alice"));                        // → { name: 'Alice', role: 'viewer', active: true }
console.log(createUser("Bob", "admin"));                // → { name: 'Bob', role: 'admin', active: true }
console.log(createUser("Charlie", "editor", false));    // → { name: 'Charlie', role: 'editor', active: false }

// ── Mixing Parameters ─────────────────────────────────────────────────────────
// Order: required → optional/default
function sendEmail(
    to: string,                     // required
    subject: string,                // required
    body: string = "No message",    // default
    cc?: string,                    // optional
    bcc?: string                    // optional
): void {
    console.log(`To: ${to} | Subject: ${subject} | Body: ${body}`);
    if (cc) console.log(`CC: ${cc}`);
    if (bcc) console.log(`BCC: ${bcc}`);
}

sendEmail("alice@example.com", "Hello");
sendEmail("bob@example.com", "Meeting", "See you at 3pm", "manager@example.com");

// ── Default Values from Expressions ───────────────────────────────────────────
// Default values can be any valid expression, not just literals
function stamp(message: string, timestamp: Date = new Date()): string {
    return `[${timestamp.toISOString()}] ${message}`;
}
console.log(stamp("Server started")); // uses current time as default

// ── IMPORTANT: undefined triggers default, null does NOT ─────────────────────
function test(value: string = "default"): void {
    console.log(value);
}
test(undefined); // → "default"  (triggers the default)
// test(null);   ← Error! null is not string — null does NOT trigger defaults

// =============================================================================
// EXERCISE FOR YOU:
// 1. Write a function 'buildURL(base, path?, protocol?)' that returns a URL string.
//    Default protocol to "https", handle missing path
// 2. Write a function 'rollDice(sides = 6)' that returns a random number from
//    1 to 'sides'. Calling rollDice() should default to a 6-sided die.
// =============================================================================

export {};

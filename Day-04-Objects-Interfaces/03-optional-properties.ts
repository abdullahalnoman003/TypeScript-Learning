// =============================================================================
// DAY 04 — FILE 03: Optional and Required Properties
// =============================================================================
//
// In an interface or type alias, you can mark properties as OPTIONAL using '?'
// An optional property may or may not be present in the object.
// All properties are REQUIRED by default unless marked with '?'
// =============================================================================

interface UserProfile {
    id: number;         // REQUIRED — must always be present
    name: string;       // REQUIRED
    email?: string;     // OPTIONAL — may or may not be provided
    phone?: string;     // OPTIONAL
    website?: string;   // OPTIONAL
}

// ── Objects with optional properties ─────────────────────────────────────────
let minimalUser: UserProfile = {
    id: 1,
    name: "Alice",
    // email, phone, website are all omitted — that's fine!
};

let fullUser: UserProfile = {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    phone: "+1-555-1234",
    website: "https://bob.dev",
};

console.log(minimalUser); // → { id: 1, name: 'Alice' }
console.log(fullUser);

// ── Accessing Optional Properties Safely ─────────────────────────────────────
// TypeScript knows optional properties might be undefined
// You must check before using them!
function printEmail(user: UserProfile): void {
    // user.email.toUpperCase(); ← DANGER! email might be undefined
    if (user.email !== undefined) {
        console.log(user.email.toUpperCase()); // safe inside the check
    } else {
        console.log("No email provided");
    }
}
printEmail(minimalUser); // → No email provided
printEmail(fullUser);    // → BOB@EXAMPLE.COM

// ── Optional Chaining with Optional Properties ────────────────────────────────
function getEmailLength(user: UserProfile): number {
    return user.email?.length ?? 0; // safe access with fallback
}
console.log(getEmailLength(minimalUser)); // → 0
console.log(getEmailLength(fullUser));    // → 15

// ── Utility Type: Required<T> ─────────────────────────────────────────────────
// Makes ALL properties of an interface required (opposite of optional)
type RequiredProfile = Required<UserProfile>;
// Now 'RequiredProfile' has id, name, email, phone, website all REQUIRED

// ── Utility Type: Partial<T> ──────────────────────────────────────────────────
// Makes ALL properties optional (useful for update functions!)
type PartialProfile = Partial<UserProfile>;
// Now you can create a profile with ZERO properties — useful for partial updates

function updateUser(userId: number, updates: Partial<UserProfile>): void {
    // updates can have any subset of UserProfile properties
    console.log(`Updating user ${userId} with:`, updates);
}
updateUser(1, { email: "newemail@example.com" }); // only update email
updateUser(2, { name: "Bobby", phone: "+1-555-9999" }); // update name and phone

// =============================================================================
// EXERCISE FOR YOU:
// 1. Create a 'BookOrder' interface with: orderId (required), bookTitle (required),
//    discountCode (optional), giftMessage (optional), deliveryAddress (optional)
// 2. Create two order objects — one minimal, one fully filled
// 3. Write a function that prints an order summary, handling optional fields
// =============================================================================

export {};

# TypeScript — Zero to Expert Learning Repository

> A structured, day-by-day, section-by-section guide to mastering TypeScript from absolute scratch.  
> Every file is heavily commented. Every concept is explained line by line.

---

## Who Is This For?

- Complete beginners with zero TypeScript knowledge
- JavaScript developers who want to add TypeScript to their skill set
- Anyone who wants a structured, self-paced roadmap to TypeScript mastery

---

## Prerequisites

| Requirement | Details |
| --- | --- |
| Basic JavaScript | Variables, functions, objects, arrays |
| Node.js installed | [Download here](https://nodejs.org) |
| A code editor | VS Code recommended |

---

## Setup — Get Started in 3 Steps

```bash
# Step 1 — Install TypeScript and ts-node globally
npm install -g typescript ts-node

# Step 2 — Verify installation
tsc --version
ts-node --version

# Step 3 — Run any file in this repo
ts-node Day-01-Basics/01-introduction.ts
```

---

## Repository Structure

```text
TypeScript/
│
├── new.ts                              ← Full structure map (start here)
├── README.md                           ← This file
├── tsconfig.json                       ← TypeScript compiler config
│
├── SECTION 1 — FOUNDATIONS
│   ├── Day-01-Basics/
│   ├── Day-02-Primitive-Types/
│   ├── Day-03-Arrays-Tuples/
│   └── Day-04-Objects-Interfaces/
│
├── SECTION 2 — FUNCTIONS & TYPE POWER
│   ├── Day-05-Functions/
│   ├── Day-06-Type-Aliases-Union-Intersection/
│   └── Day-07-Enums/
│
├── SECTION 3 — OBJECT-ORIENTED TYPESCRIPT
│   ├── Day-08-Classes/
│   └── Day-09-Generics/
│
├── SECTION 4 — ADVANCED TYPES
│   ├── Day-10-Advanced-Types/
│   └── Day-11-Utility-Types/
│
├── SECTION 5 — MODULES, DECORATORS & TYPE GUARDS
│   ├── Day-12-Modules-Namespaces/
│   ├── Day-13-Decorators/
│   └── Day-14-Type-Guards/
│
└── SECTION 6 — EXPERT PATTERNS & REAL WORLD
    ├── Day-15-Design-Patterns/
    ├── Day-16-Async-TypeScript/
    ├── Day-17-TypeScript-With-Node/
    ├── Day-18-TypeScript-With-React/
    ├── Day-19-tsconfig-Deep-Dive/
    └── Day-20-Real-World-Project/
```

---

## Day-by-Day Learning Plan

### Section 1 — Foundations

| Day | Folder | Topics Covered |
| --- | --- | --- |
| Day 01 | `Day-01-Basics/` | Introduction, Variables, Type Annotations, Type Inference |
| Day 02 | `Day-02-Primitive-Types/` | string, number, boolean, null, undefined, symbol, bigint |
| Day 03 | `Day-03-Arrays-Tuples/` | Typed arrays, Tuples, readonly |
| Day 04 | `Day-04-Objects-Interfaces/` | Object types, Interfaces, Optional & Readonly properties |

### Section 2 — Functions & Type Power

| Day | Folder | Topics Covered |
| --- | --- | --- |
| Day 05 | `Day-05-Functions/` | Typed functions, Optional/default params, Rest params, Overloading |
| Day 06 | `Day-06-Type-Aliases-Union-Intersection/` | type aliases, Union types, Intersection types |
| Day 07 | `Day-07-Enums/` | Numeric enums, String enums, const enums |

### Section 3 — Object-Oriented TypeScript

| Day | Folder | Topics Covered |
| --- | --- | --- |
| Day 08 | `Day-08-Classes/` | Classes, Access modifiers, Inheritance, Abstract, Static |
| Day 09 | `Day-09-Generics/` | Generic functions, interfaces, classes, constraints |

### Section 4 — Advanced Types

| Day | Folder | Topics Covered |
| --- | --- | --- |
| Day 10 | `Day-10-Advanced-Types/` | Mapped types, Conditional types, Template literal types, infer |
| Day 11 | `Day-11-Utility-Types/` | Partial, Required, Readonly, Pick, Omit, Record, ReturnType |

### Section 5 — Modules, Decorators & Type Guards

| Day | Folder | Topics Covered |
| --- | --- | --- |
| Day 12 | `Day-12-Modules-Namespaces/` | ES Modules, Namespaces, Declaration merging |
| Day 13 | `Day-13-Decorators/` | Class, Method, Property, Parameter decorators |
| Day 14 | `Day-14-Type-Guards/` | typeof, instanceof, custom guards, discriminated unions |

### Section 6 — Expert Patterns & Real World

| Day | Folder | Topics Covered |
| --- | --- | --- |
| Day 15 | `Day-15-Design-Patterns/` | Builder, Factory, Singleton, Observer patterns |
| Day 16 | `Day-16-Async-TypeScript/` | Typed Promises, async/await, error handling |
| Day 17 | `Day-17-TypeScript-With-Node/` | Node.js with TypeScript, @types/node |
| Day 18 | `Day-18-TypeScript-With-React/` | React components, props, state, hooks |
| Day 19 | `Day-19-tsconfig-Deep-Dive/` | Compiler options, project references |
| Day 20 | `Day-20-Real-World-Project/` | Full project using all concepts |

---

## How Each File Is Organized

Every `.ts` file in this repository follows this consistent pattern:

```text
1. Topic title and day number (comment)
2. Concept explanation (comment)
3. Syntax breakdown (comment)
4. Live code example
5. Console output shown in comments
6. Common mistakes and how to avoid them (comment)
7. Exercise for you to try
```

---

## Running the Files

```bash
# Run a single file
ts-node Day-01-Basics/01-introduction.ts

# Compile to JavaScript first, then run
tsc Day-01-Basics/01-introduction.ts
node Day-01-Basics/01-introduction.js

# Compile the entire project using tsconfig.json
tsc
```

---

## Useful Resources

| Resource | Link |
| --- | --- |
| Official TypeScript Docs | <https://www.typescriptlang.org/docs/> |
| TypeScript Playground | <https://www.typescriptlang.org/play> |
| TypeScript Handbook | <https://www.typescriptlang.org/docs/handbook/intro.html> |
| DefinitelyTyped (@types) | <https://github.com/DefinitelyTyped/DefinitelyTyped> |
| TypeScript GitHub | <https://github.com/microsoft/TypeScript> |

---

## Tips for Success

- **Type every example yourself** — don't copy-paste
- **Read every comment** — they explain the WHY, not just the WHAT
- **Break the code** — change types on purpose and read the errors
- **Take it one day at a time** — don't rush
- **After Day 09**, you'll be able to write real TypeScript projects
- **After Day 15**, you'll be at an expert level

---

## Progress Tracker

Track your progress by checking off each day:

- [ ] Day 01 — Basics
- [ ] Day 02 — Primitive Types
- [ ] Day 03 — Arrays & Tuples
- [ ] Day 04 — Objects & Interfaces
- [ ] Day 05 — Functions
- [ ] Day 06 — Type Aliases, Union & Intersection
- [ ] Day 07 — Enums
- [ ] Day 08 — Classes
- [ ] Day 09 — Generics
- [ ] Day 10 — Advanced Types
- [ ] Day 11 — Utility Types
- [ ] Day 12 — Modules & Namespaces
- [ ] Day 13 — Decorators
- [ ] Day 14 — Type Guards
- [ ] Day 15 — Design Patterns
- [ ] Day 16 — Async TypeScript
- [ ] Day 17 — TypeScript with Node.js
- [ ] Day 18 — TypeScript with React
- [ ] Day 19 — tsconfig Deep Dive
- [ ] Day 20 — Real World Project

---

*Happy Learning! You've got this.*

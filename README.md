# TypeScript — Zero to Expert Learning Repository

> A **structured, day-by-day** guide to mastering **TypeScript from absolute scratch**.  
> Every file is **heavily commented**. Every concept is **explained line by line**.  
> **72 practice files** across **20 days** organized in **6 sections**.

---

## Repository Stats

| Metric | Value |
| --- | --- |
| **Total Learning Days** | 20 |
| **Total TypeScript Files** | 72 .ts files |
| **Total Sections** | 6 (Foundations → Expert) |
| **Estimated Time to Complete** | 20-30 hours |
| **Code Examples** | 100+ hands-on examples |
| **Difficulty Progression** | Beginner → Intermediate → Expert |

---

## Who Is This For?

 **Complete beginners** with zero TypeScript knowledge  
 **JavaScript developers** who want to add TypeScript to their skill set  
 **Working professionals** who need a structured, self-paced roadmap  
 **Team leads** looking for a resource to onboard developers  
 **Anyone** who wants to master TypeScript from fundamentals to expert patterns

---

## Prerequisites

| Requirement | Details |
| --- | --- |
| **Basic JavaScript** | Variables, functions, objects, arrays, ES6 fundamentals |
| **Node.js v14+** | [Download here](https://nodejs.org) — Essential for running TypeScript |
| **Code Editor** | VS Code recommended (with TypeScript extensions) |
| **Patience & Curiosity** | Willingness to break code and learn from errors |



## Setup — Get Started in 3 Steps

```bash
# Step 1 — Install TypeScript and ts-node globally
npm install -g typescript ts-node

# Step 2 — Verify installation
tsc --version
ts-node --version

# Step 3 — Run any file in this repo (example)
ts-node Day-01-Basics/01-introduction.ts
```

---

## Repository Structure

```text
TypeScript/
│
├── new.ts                              ← Full structure map
├── README.md                           ← This file
├── Roadmap.ts                          ← Detailed learning roadmap
├── tsconfig.json                       ← TypeScript compiler config
│
├── SECTION 1 — FOUNDATIONS (Days 01-04) [~4 hours]
│   ├── Day-01-Basics/ (4 files)
│   ├── Day-02-Primitive-Types/ (5 files)
│   ├── Day-03-Arrays-Tuples/ (3 files)
│   └── Day-04-Objects-Interfaces/ (4 files)
│
├── SECTION 2 — FUNCTIONS & TYPE POWER (Days 05-07) [~3.5 hours]
│   ├── Day-05-Functions/ (5 files)
│   ├── Day-06-Type-Aliases-Union-Intersection/ (3 files)
│   └── Day-07-Enums/ (3 files)
│
├── SECTION 3 — OBJECT-ORIENTED TYPESCRIPT (Days 08-09) [~3 hours]
│   ├── Day-08-Classes/ (5 files)
│   └── Day-09-Generics/ (4 files)
│
├── SECTION 4 — ADVANCED TYPES (Days 10-11) [~3.5 hours]
│   ├── Day-10-Advanced-Types/ (4 files)
│   └── Day-11-Utility-Types/ (4 files)
│
├── SECTION 5 — MODULES & ADVANCED PATTERNS (Days 12-14) [~3 hours]
│   ├── Day-12-Modules-Namespaces/ (3 files)
│   ├── Day-13-Decorators/ (4 files)
│   └── Day-14-Type-Guards/ (3 files)
│
└── SECTION 6 — EXPERT PATTERNS & REAL WORLD (Days 15-20) [~5 hours]
    ├── Day-15-Design-Patterns/ (4 files)
    ├── Day-16-Async-TypeScript/ (3 files)
    ├── Day-17-TypeScript-With-Node/ (3 files)
    ├── Day-18-TypeScript-With-React/ (3 files)
    ├── Day-19-tsconfig-Deep-Dive/ (2 files)
    └── Day-20-Real-World-Project/ (2 files)
```

---

## Section Overview & Learning Outcomes

### SECTION 1: FOUNDATIONS (Days 1-4) — Est. 4 hours

Master the **absolute basics** of TypeScript. Perfect if you're coming from pure JavaScript.

| Day | Folder | Files | Topics | Time |
| --- | --- | ---: | --- | ---: |
| 1 | `Day-01-Basics/` | 4 | Intro, Variables, Type Annotations, Type Inference | 45 min |
| 2 | `Day-02-Primitive-Types/` | 5 | string, number, boolean, null, undefined, symbol, bigint | 60 min |
| 3 | `Day-03-Arrays-Tuples/` | 3 | Typed arrays, Tuples, readonly arrays | 50 min |
| 4 | `Day-04-Objects-Interfaces/` | 4 | Objects, Interfaces, Optional & Readonly properties | 55 min |

**What you'll learn:** Type system basics, primitive types, collections, object typing, interfaces  
**Milestone:**  You understand TypeScript's core purpose and can type basic data structures

---

### SECTION 2: FUNCTIONS & TYPE POWER (Days 5-7) — Est. 3.5 hours

Learn how to **write strongly-typed functions** and create sophisticated type definitions.

| Day | Folder | Files | Topics | Time |
| --- | --- | ---: | --- | ---: |
| 5 | `Day-05-Functions/` | 5 | Function types, Optional/default params, Rest params, Overloading, Arrow functions | 60 min |
| 6 | `Day-06-Type-Aliases-Union-Intersection/` | 3 | Type aliases, Union types, Intersection types | 50 min |
| 7 | `Day-07-Enums/` | 3 | Numeric enums, String enums, const enums | 40 min |

**What you'll learn:** Function signatures, advanced type composition, enums, type combinations  
**Milestone:**  You can create reusable, composable types for real-world functions

---

### SECTION 3: OBJECT-ORIENTED TYPESCRIPT (Days 8-9) — Est. 3 hours

Master **classes, inheritance, and generics** for enterprise-grade OOP code.

| Day | Folder | Files | Topics | Time |
| --- | --- | ---: | --- | ---: |
| 8 | `Day-08-Classes/` | 5 | Classes, Access modifiers, Inheritance, Abstract, Static members | 60 min |
| 9 | `Day-09-Generics/` | 4 | Generic functions, interfaces, classes, constraints | 60 min |

**What you'll learn:** OOP patterns, class hierarchies, access control, generic programming  
**Milestone:**  **EXPERT CHECKPOINT** — You can now build real TypeScript projects (Node.js, React, etc.)

---

### SECTION 4: ADVANCED TYPES (Days 10-11) — Est. 3.5 hours

Unlock **TypeScript's most powerful features** for advanced type manipulation.

| Day | Folder | Files | Topics | Time |
| --- | --- | ---: | --- | ---: |
| 10 | `Day-10-Advanced-Types/` | 4 | Mapped types, Conditional types, Template literal types, infer keyword | 60 min |
| 11 | `Day-11-Utility-Types/` | 4 | Partial, Required, Readonly, Pick, Omit, Record, Extract, ReturnType | 55 min |

**What you'll learn:** Meta-programming with types, type transformation, advanced type queries  
**Milestone:**  You can write sophisticated type utilities that scale to complex applications

---

### SECTION 5: MODULES & ADVANCED PATTERNS (Days 12-14) — Est. 3 hours

Learn **modern module systems**, **decorators**, and **type safety patterns**.

| Day | Folder | Files | Topics | Time |
| --- | --- | ---: | --- | ---: |
| 12 | `Day-12-Modules-Namespaces/` | 3 | ES Modules, Namespaces, Declaration merging | 45 min |
| 13 | `Day-13-Decorators/` | 4 | Class, Method, Property, Parameter decorators | 55 min |
| 14 | `Day-14-Type-Guards/` | 3 | typeof, instanceof, custom guards, discriminated unions | 40 min |

**What you'll learn:** Module organization, decorator patterns, type narrowing, discriminated unions  
**Milestone:**  You understand advanced patterns used in frameworks (NestJS, Angular, etc.)

---

### SECTION 6: EXPERT PATTERNS & REAL WORLD (Days 15-20) — Est. 5 hours

Apply **everything** to **real-world frameworks** and **architecture patterns**.

| Day | Folder | Files | Topics | Time |
| --- | --- | ---: | --- | ---: |
| 15 | `Day-15-Design-Patterns/` | 4 | Builder, Factory, Singleton, Observer patterns | 60 min |
| 16 | `Day-16-Async-TypeScript/` | 3 | Promises, async/await, typed error handling | 45 min |
| 17 | `Day-17-TypeScript-With-Node/` | 3 | Express setup, File system, REST APIs | 50 min |
| 18 | `Day-18-TypeScript-With-React/` | 3 | Props typing, Hooks typing, Context & Forms | 50 min |
| 19 | `Day-19-tsconfig-Deep-Dive/` | 2 | Compiler options, Declaration files | 40 min |
| 20 | `Day-20-Real-World-Project/` | 2 | Full project starter & implementation guide | 45 min |

**What you'll learn:** Production patterns, framework integration, error handling, project configuration  
**Milestone:**  **EXPERT LEVEL ACHIEVED** — You can architect TypeScript applications for production

---

## Complete Day-by-Day List

- [x] **Section 1** — Foundations (4 days, 16 files)
- [x] **Section 2** — Functions & Types (3 days, 11 files)
- [x] **Section 3** — OOP (2 days, 9 files)
- [x] **Section 4** — Advanced Types (2 days, 8 files)
- [x] **Section 5** — Modules & Patterns (3 days, 10 files)
- [x] **Section 6** — Real World (6 days, 17 files)

---

## How Each File Is Organized

Every `.ts` file in this repository follows a **consistent learning structure**:

```text
1. Topic title and day number (comment header)
2. Concept explanation (detailed comment)
3. Syntax breakdown (annotated examples)
4. Live code example (ready to run)
5. Console output shown (in comments)
6. Common mistakes & how to avoid them (comments)
7. Exercise for you to try (challenge at the end)
```

---

## Running the Files

### Option 1: Run with ts-node (Fastest)
```bash
# Run a single file directly
ts-node Day-01-Basics/01-introduction.ts

# Run any file without compilation
ts-node Day-05-Functions/01-function-basics.ts
```

### Option 2: Compile & Run
```bash
# Compile a single file to JavaScript
tsc Day-01-Basics/01-introduction.ts

# Run the compiled JavaScript
node Day-01-Basics/01-introduction.js
```

### Option 3: Compile Entire Project
```bash
# Compile all files using tsconfig.json
tsc

# Then run individual compiled files
node Day-01-Basics/01-introduction.js
```

### Pro Tip
Use `ts-node` for quick learning and experimentation. It compiles and runs in one step!

---

## Useful Resources

| Resource | Purpose | Link |
| --- | --- | --- |
| **Official TypeScript Docs** | Complete reference & guides | <https://www.typescriptlang.org/docs/> |
| **TypeScript Playground** | Browser-based experimentation | <https://www.typescriptlang.org/play> |
| **TypeScript Handbook** | In-depth concept explanations | <https://www.typescriptlang.org/docs/handbook/intro.html> |
| **DefinitelyTyped (@types)** | Type definitions for libraries | <https://github.com/DefinitelyTyped/DefinitelyTyped> |
| **TypeScript GitHub** | Source code & issues | <https://github.com/microsoft/TypeScript> |
| **TypeScript Cheat Sheet** | Quick reference | <https://www.typescriptlang.org/cheatsheets> |

---

## Tips for Success

- **Type every example yourself** — Don't copy-paste. Your fingers need the muscle memory.

- **Read every comment** — They explain the WHY, not just the WHAT.

- **Break the code intentionally** — Change types on purpose and read the error messages. This is how you learn!

- **One day at a time** — Don't rush. TypeScript has depth. 20 days of focus beats 2 days of cramming.

- **Practice the exercises** — Each file has a challenge. Do them. They reinforce concepts.

- **Test your understanding** — Try creating small projects combining concepts from multiple days.

### Milestones

- **After Day 04:** You understand TypeScript's type system
- **After Day 09:** [Expert Checkpoint] You can build real projects (Node.js, React, Next.js)
- **After Day 14:** You know advanced patterns used in enterprise frameworks
- **After Day 20:** [Expert Level] You can architect TypeScript applications

---

## Progress Tracker

Track your progress by checking off each section as you complete it:

### Section 1 — Foundations
- [ ] Day 01 — Basics & Type Annotations
- [ ] Day 02 — Primitive Types
- [ ] Day 03 — Arrays & Tuples
- [ ] Day 04 — Objects & Interfaces

### Section 2 — Functions & Type Power  
- [ ] Day 05 — Functions
- [ ] Day 06 — Type Aliases, Union & Intersection
- [ ] Day 07 — Enums

### Section 3 — OOP TypeScript
- [ ] Day 08 — Classes & Inheritance
- [ ] Day 09 — Generics

### Section 4 — Advanced Types
- [ ] Day 10 — Advanced Types (Mapped, Conditional, Template Literals)
- [ ] Day 11 — Utility Types (Partial, Pick, Omit, etc.)

### Section 5 — Modules & Patterns
- [ ] Day 12 — Modules & Namespaces
- [ ] Day 13 — Decorators
- [ ] Day 14 — Type Guards

### Section 6 — Real World & Expert Patterns
- [ ] Day 15 — Design Patterns
- [ ] Day 16 — Async TypeScript
- [ ] Day 17 — TypeScript with Node.js
- [ ] Day 18 — TypeScript with React
- [ ] Day 19 — tsconfig Deep Dive
- [ ] Day 20 — Real World Project

---

## Estimated Study Time

| Section | Days | Files | Hours | Difficulty |
| --- | ---: | ---: | ---: | --- |
| **Section 1** — Foundations | 4 | 16 | 4.0 | Beginner |
| **Section 2** — Functions | 3 | 11 | 3.5 | Beginner |
| **Section 3** — OOP | 2 | 9 | 3.0 | Intermediate |
| **Section 4** — Advanced Types | 2 | 8 | 3.5 | Intermediate |
| **Section 5** — Modules & Patterns | 3 | 10 | 3.0 | Intermediate |
| **Section 6** — Real World | 6 | 17 | 5.0 | Advanced |
| **TOTAL** | **20** | **72** | **22 hours** | **Expert** |

> This is an estimate for careful, thorough learning. Adjust based on your pace and background.

---

## What You'll Be Able to Do

After completing this course, you'll be able to:

- Write **production-grade TypeScript** with confidence  
- Design **sophisticated type systems** for complex applications  
- Build **scalable projects** with Node.js, Express, React, and Next.js  
- Use **advanced patterns** like generics, decorators, and conditional types  
- Configure **TypeScript projects** for maximum safety and performance  
- Understand **error messages** and fix them independently  
- Write **reusable, type-safe utilities** that scale  
- Mentor others in TypeScript best practices  

---

## Contributing & Feedback

If you find issues, typos, or have suggestions for improvement:
- Create an issue
- Submit improvements via pull request
- Share your learning journey!

---

## License

This learning repository is open for personal and educational use.

---

## Give This Repo a Star!

If this helped you learn TypeScript, please **star** this repository! It helps others discover it.

---

*Start with Day 01. Take it one step at a time. You've got this!*

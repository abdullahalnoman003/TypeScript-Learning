// =============================================================================
//           TYPESCRIPT COMPLETE LEARNING REPOSITORY - STRUCTURE MAP
//           From Zero to Expert | Day-by-Day | Section-by-Section
// =============================================================================
//
// HOW TO USE THIS REPOSITORY:
//   - Follow the days in order (Day-01 → Day-15+)
//   - Each day builds on the previous day's knowledge
//   - Read every line of code and every comment carefully
//   - Run each file using: npx ts-node <filename>.ts
//   - Attempt the exercises at the end of each file
//
// PREREQUISITES: Node.js installed | Basic programming mindset
// TOOLS NEEDED:  Node.js, npm, TypeScript (npm install -g typescript ts-node)
//
// =============================================================================
//
//  SECTION 1 — FOUNDATIONS  (Day 01 – Day 04)
//  ─────────────────────────────────────────────────────────────────────────────
//  Day-01-Basics/
//  │   01-introduction.ts          → What is TypeScript? Why use it? Setup
//  │   02-variables-and-datatypes.ts → let, const, var + basic data types
//  │   03-type-annotations.ts      → Explicitly typing variables & returns
//  │   04-type-inference.ts        → How TypeScript guesses types for you
//
//  Day-02-Primitive-Types/
//  │   01-string.ts                → String type, template literals
//  │   02-number.ts                → Number, NaN, Infinity
//  │   03-boolean.ts               → Boolean type, truthy/falsy
//  │   04-null-undefined.ts        → null vs undefined, strictNullChecks
//  │   05-symbol-bigint.ts         → Symbol and BigInt types
//
//  Day-03-Arrays-Tuples/
//  │   01-arrays.ts                → Typed arrays, Array<T>, T[] syntax
//  │   02-tuples.ts                → Fixed-length typed arrays (tuples)
//  │   03-readonly.ts              → readonly arrays and tuples
//
//  Day-04-Objects-Interfaces/
//  │   01-objects.ts               → Object type annotations
//  │   02-interfaces.ts            → Defining contracts with interface
//  │   03-optional-properties.ts   → Optional (?) and required properties
//  │   04-readonly-properties.ts   → readonly in interfaces and objects
//
// =============================================================================
//
//  SECTION 2 — FUNCTIONS & TYPE POWER  (Day 05 – Day 07)
//  ─────────────────────────────────────────────────────────────────────────────
//  Day-05-Functions/
//  │   01-function-basics.ts       → Typed parameters and return types
//  │   02-optional-default-params.ts → Optional params, default values
//  │   03-rest-params.ts           → Rest parameters (...args)
//  │   04-function-overloading.ts  → Multiple signatures for one function
//  │   05-arrow-functions.ts       → Arrow functions with TypeScript types
//
//  Day-06-Type-Aliases-Union-Intersection/
//  │   01-type-aliases.ts          → Creating reusable types with `type`
//  │   02-union-types.ts           → A | B — value can be one of many types
//  │   03-intersection-types.ts    → A & B — combining multiple types
//
//  Day-07-Enums/
//  │   01-numeric-enums.ts         → Default numeric enum behavior
//  │   02-string-enums.ts          → Enums with string values
//  │   03-const-enums.ts           → const enum for zero-cost abstraction
//
// =============================================================================
//
//  SECTION 3 — OBJECT-ORIENTED TYPESCRIPT  (Day 08 – Day 09)
//  ─────────────────────────────────────────────────────────────────────────────
//  Day-08-Classes/
//  │   01-class-basics.ts          → Class syntax, constructor, properties
//  │   02-access-modifiers.ts      → public, private, protected
//  │   03-inheritance.ts           → extends, super(), method overriding
//  │   04-abstract-classes.ts      → Abstract classes and abstract methods
//  │   05-static-members.ts        → Static properties and methods
//
//  Day-09-Generics/
//  │   01-generic-functions.ts     → Writing reusable functions with <T>
//  │   02-generic-interfaces.ts    → Interfaces with type parameters
//  │   03-generic-classes.ts       → Classes with type parameters
//  │   04-constraints.ts           → extends constraint in generics
//
// =============================================================================
//
//  SECTION 4 — ADVANCED TYPES  (Day 10 – Day 11)
//  ─────────────────────────────────────────────────────────────────────────────
//  Day-10-Advanced-Types/
//  │   01-mapped-types.ts          → Transform every property of a type
//  │   02-conditional-types.ts     → T extends U ? X : Y logic in types
//  │   03-template-literal-types.ts → String manipulation at type level
//  │   04-infer-keyword.ts         → infer keyword inside conditionals
//
//  Day-11-Utility-Types/
//  │   01-partial-required-readonly.ts → Partial<T>, Required<T>, Readonly<T>
//  │   02-pick-omit-exclude.ts     → Pick<T,K>, Omit<T,K>, Exclude<T,U>
//  │   03-record-extract.ts        → Record<K,V>, Extract<T,U>
//  │   04-returntype-parameters.ts → ReturnType<T>, Parameters<T>, Awaited<T>
//
// =============================================================================
//
//  SECTION 5 — MODULES, DECORATORS & TYPE GUARDS  (Day 12 – Day 14)
//  ─────────────────────────────────────────────────────────────────────────────
//  Day-12-Modules-Namespaces/
//  │   01-es-modules.ts            → import / export in TypeScript
//  │   02-namespaces.ts            → Organizing code with namespace
//  │   03-declaration-merging.ts   → Merging interfaces and namespaces
//
//  Day-13-Decorators/
//  │   01-class-decorators.ts      → Decorating entire classes
//  │   02-method-decorators.ts     → Decorating class methods
//  │   03-property-decorators.ts   → Decorating class properties
//  │   04-parameter-decorators.ts  → Decorating function parameters
//
//  Day-14-Type-Guards/
//  │   01-typeof-instanceof.ts     → typeof and instanceof narrowing
//  │   02-custom-type-guards.ts    → is keyword — write your own guards
//  │   03-discriminated-unions.ts  → Using a common field to narrow types
//
// =============================================================================
//
//  SECTION 6 — EXPERT PATTERNS & REAL WORLD  (Day 15+)
//  ─────────────────────────────────────────────────────────────────────────────
//  Day-15-Design-Patterns/
//  │   01-builder-pattern.ts       → Fluent builder with TypeScript types
//  │   02-factory-pattern.ts       → Factory functions and classes
//  │   03-singleton-pattern.ts     → Single instance with private constructor
//  │   04-observer-pattern.ts      → Event emitter / pub-sub pattern
//
//  Day-16-Async-TypeScript/        → (Add as you progress)
//  │   01-promises.ts              → Typed Promises: Promise<T>
//  │   02-async-await.ts           → async/await with proper typing
//  │   03-error-handling.ts        → try/catch, typed errors
//
//  Day-17-TypeScript-With-Node/    → (Add as you progress)
//  │   01-node-setup.ts            → @types/node, tsconfig for Node
//  │   02-file-system.ts           → fs module with types
//  │   03-http-server.ts           → Building a typed HTTP server
//
//  Day-18-TypeScript-With-React/   → (Add as you progress)
//  │   01-react-components.tsx     → Typed functional components
//  │   02-props-and-state.tsx      → Typing props and useState
//  │   03-hooks.tsx                → Typing useEffect, useRef, useContext
//
//  Day-19-tsconfig-Deep-Dive/      → (Add as you progress)
//  │   01-compiler-options.ts      → strict, target, module, paths, etc.
//  │   02-project-references.ts    → Splitting large projects
//
//  Day-20-Real-World-Project/      → (Add as you progress)
//  │   → Build a fully typed REST API or CLI tool using all concepts learned
//
// =============================================================================
//
//  ROOT FILES IN THE REPOSITORY:
//  ─────────────────────────────────────────────────────────────────────────────
//  new.ts          → THIS FILE — Full structure map and learning guide
//  README.md       → Getting started, how to run files, learning path
//  tsconfig.json   → TypeScript compiler configuration for the project
//
// =============================================================================
//
//  LEARNING TIPS FOR STUDENTS:
//  ─────────────────────────────────────────────────────────────────────────────
//  ✔  Do NOT skip days — TypeScript concepts build on each other
//  ✔  Type out the code yourself, do NOT just read it
//  ✔  After each topic, modify the examples and see what errors appear
//  ✔  Google every error you see — reading errors is a skill
//  ✔  Use the official docs: https://www.typescriptlang.org/docs/
//  ✔  Use the TypeScript Playground: https://www.typescriptlang.org/play
//  ✔  After Day 09 you will feel confident; after Day 15 you are an expert
//
// =============================================================================

export {};

// =============================================================================
// DAY 19 — FILE 01: tsconfig.json Deep Dive — Compiler Options
// =============================================================================
//
// TOPICS TO COVER:
//   - Breakdown of every tsconfig.json field
//   - Type Checking: strict, strictNullChecks, noImplicitAny, strictFunctionTypes
//   - Module Options: module, moduleResolution, esModuleInterop, allowSyntheticDefaultImports
//   - Output Options: outDir, rootDir, declaration, declarationMap, sourceMap
//   - Path Aliases: paths, baseUrl (and how to use them with webpack/vite)
//   - Project References: composite, references (monorepo setups)
//   - Lib: which built-in types to include (DOM, ES2020, WebWorker, etc.)
//   - experimentalDecorators, emitDecoratorMetadata (for NestJS, TypeORM)
//
// TODO: Fill in this file when you reach Day 19
//
// ANNOTATED tsconfig.json REFERENCE:
//
// {
//   "compilerOptions": {
//
//     // ── OUTPUT ──────────────────────────────────────────────
//     "target": "ES2020",          // JS version to output
//     "module": "CommonJS",        // Module system (CommonJS for Node, ESNext for bundlers)
//     "outDir": "./dist",          // Where compiled files go
//     "rootDir": "./src",          // Root of source files
//     "declaration": true,         // Generate .d.ts files
//     "sourceMap": true,           // Enable debugging to .ts source
//
//     // ── TYPE CHECKING ────────────────────────────────────────
//     "strict": true,              // Enables ALL strict checks below
//     "noImplicitAny": true,       // No implicit 'any' type
//     "strictNullChecks": true,    // null/undefined not assignable to other types
//     "strictFunctionTypes": true, // Stricter function type checking
//     "noUnusedLocals": true,      // Error on unused variables
//     "noUnusedParameters": true,  // Error on unused function params
//     "noImplicitReturns": true,   // All code paths must return a value
//
//     // ── MODULES ─────────────────────────────────────────────
//     "baseUrl": ".",
//     "paths": { "@utils/*": ["./src/utils/*"] }, // path aliases
//     "esModuleInterop": true,     // Allows 'import React from "react"'
//     "moduleResolution": "node",  // How TypeScript finds modules
//
//     // ── DECORATORS ──────────────────────────────────────────
//     "experimentalDecorators": true,
//     "emitDecoratorMetadata": true
//   }
// }
//
// =============================================================================

export {};

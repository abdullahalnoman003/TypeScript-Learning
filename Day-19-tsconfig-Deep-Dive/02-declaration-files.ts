// =============================================================================
// DAY 19 — FILE 02: Declaration Files (.d.ts) & Type Definitions
// =============================================================================
//
// TOPICS TO COVER:
//   - What are .d.ts files? (type information without runtime code)
//   - How TypeScript finds types: @types/ packages, included types
//   - Writing your own .d.ts file to type a plain JavaScript library
//   - declare module, declare global, declare namespace
//   - Augmenting existing type declarations (module augmentation)
//   - DefinitelyTyped (@types/xxx) and how to contribute
//   - skipLibCheck and when to use it
//
// TODO: Fill in this file when you reach Day 19
//
// EXAMPLE STRUCTURE:
//
// // Typing a plain JS library that has no types:
// // my-library.d.ts
// declare module "my-library" {
//     export function greet(name: string): string;
//     export const version: string;
//     export interface Config { timeout: number; retries: number; }
//     export function createClient(config?: Config): Client;
//     export interface Client { get(url: string): Promise<unknown>; }
// }
//
// // Global augmentation — add to Window, Array, String, etc.
// declare global {
//     interface Window { __APP_CONFIG__: { apiUrl: string }; }
//     interface Array<T> { last(): T | undefined; }          // extending Array prototype
//     interface String { toTitleCase(): string; }            // extending String prototype
// }
//
// // Module augmentation — add to existing npm package types
// declare module "express-serve-static-core" {
//     interface Request { user?: { id: number; role: string }; }
// }
//
// =============================================================================

export {};

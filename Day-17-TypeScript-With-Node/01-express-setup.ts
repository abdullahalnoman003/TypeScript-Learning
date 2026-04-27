// =============================================================================
// DAY 17 — FILE 01: TypeScript with Node.js — Setup & Express
// =============================================================================
//
// TOPICS TO COVER:
//   - Setting up a Node.js + TypeScript project (tsconfig, ts-node)
//   - Installing @types/node, @types/express
//   - Typed Express request/response objects
//   - Request body, params, query typing with generics
//   - Typed middleware
//   - Typed environment variables (process.env)
//
// SETUP COMMANDS (run in terminal):
//   npm init -y
//   npm install express
//   npm install -D typescript ts-node @types/node @types/express
//   npx tsc --init
//
// TODO: Fill in this file when you reach Day 17
//
// EXAMPLE STRUCTURE:
//
// import express, { Request, Response, NextFunction } from "express";
//
// interface CreateUserBody { name: string; email: string; }
//
// const app = express();
// app.use(express.json());
//
// app.post("/users", (req: Request<{}, {}, CreateUserBody>, res: Response) => {
//     const { name, email } = req.body; // fully typed!
//     res.status(201).json({ id: 1, name, email });
// });
//
// app.listen(3000, () => console.log("Server running on port 3000"));
//
// =============================================================================

// Your code here ↓

export {};

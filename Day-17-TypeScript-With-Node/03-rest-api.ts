// =============================================================================
// DAY 17 — FILE 03: TypeScript with Node.js — Building a REST API
// =============================================================================
//
// TOPICS TO COVER:
//   - Structuring an Express app with TypeScript (controllers, routes, services)
//   - Typed request validation (using zod or class-validator)
//   - Generic repository pattern with TypeScript
//   - Error handling middleware with typed errors
//   - Typed OpenAPI/Swagger integration
//   - Environment config typing (dotenv + type assertions)
//
// TODO: Fill in this file when you reach Day 17
//
// PROJECT STRUCTURE:
//   src/
//     controllers/   userController.ts
//     services/      userService.ts
//     models/        user.ts (interfaces/types)
//     routes/        userRoutes.ts
//     middleware/    errorHandler.ts
//     app.ts         express setup
//     server.ts      entry point
//
// EXAMPLE:
//
// // models/user.ts
// export interface User { id: number; name: string; email: string; }
// export interface CreateUserDto { name: string; email: string; }
//
// // services/userService.ts
// export class UserService {
//     private users: User[] = [];
//     create(dto: CreateUserDto): User {
//         const user = { id: Date.now(), ...dto };
//         this.users.push(user);
//         return user;
//     }
//     findAll(): User[] { return this.users; }
//     findById(id: number): User | undefined { return this.users.find(u => u.id === id); }
// }
//
// =============================================================================

// Your code here ↓

export {};

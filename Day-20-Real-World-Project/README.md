# Day 20 — Real World Project

## Congratulations! 🎉

You've completed the 20-day TypeScript learning journey! This final day is about applying **everything you've learned** to build a real-world TypeScript project from scratch.

---

## Project Options

Choose **one** of the following projects that interests you most:

### Option A: CLI Task Manager

A command-line todo app using Node.js + TypeScript that:

- Reads from / writes to a JSON file
- Supports: `add <task>`, `done <id>`, `list`, `delete <id>`
- Uses: Interfaces, generics, discriminated unions, async file I/O, enums for status

### Option B: Typed REST API

A small Express.js REST API for a "Library" system:

- Entities: `Book`, `Author`, `Member`
- CRUD endpoints for all entities
- Uses: Classes, generics, decorators, utility types, typed middleware

### Option C: React TypeScript Dashboard

A simple analytics dashboard with:

- Typed components, hooks, context
- Data fetching with typed responses (JSONPlaceholder or mock data)
- Charts using `recharts` (all props fully typed)

---

## Concepts You Will Use

Make sure your project uses **at least 8** of the following:

| Concept | Day Learned |
| --- | --- |
| Interfaces | Day 4 |
| Generics | Day 9 |
| Enums | Day 7 |
| Type Guards | Day 14 |
| Utility Types | Day 11 |
| Async/Await | Day 16 |
| Discriminated Unions | Day 14 |
| Decorators | Day 13 |
| Design Patterns | Day 15 |
| Modules | Day 12 |
| Advanced Types | Day 10 |

---

## Project Structure Template (Option A — CLI Task Manager)

```text
Day-20-Real-World-Project/
├── src/
│   ├── models/
│   │   └── task.ts           ← Task interface, Status enum
│   ├── services/
│   │   └── taskService.ts    ← TaskService class (generic Repository<T>)
│   ├── storage/
│   │   └── fileStorage.ts    ← Read/write JSON with fs/promises
│   ├── cli/
│   │   └── commands.ts       ← Command handlers (discriminated union of commands)
│   └── index.ts              ← Entry point
├── data/
│   └── tasks.json            ← Persisted tasks
├── tsconfig.json
└── package.json
```

---

## Getting Started

```bash
mkdir src/models src/services src/storage src/cli
npm init -y
npm install -D typescript ts-node @types/node
npx tsc --init
```

---

## Submission / Review Checklist

- [ ] No `any` types used
- [ ] All functions have typed parameters and return types
- [ ] At least one generic function or class
- [ ] Error handling is typed (custom error class or Result<T,E> pattern)
- [ ] Code compiles with zero TypeScript errors (`tsc --noEmit`)
- [ ] At least one utility type used (Partial, Pick, Omit, etc.)
- [ ] At least one discriminated union or type guard

---

## You Are Now a TypeScript Developer

Review this checklist of everything you learned:

- [x] **Day 1–5**: Core syntax, types, functions
- [x] **Day 6–8**: Type system (unions, enums, classes)
- [x] **Day 9**: Generics
- [x] **Day 10–11**: Advanced and utility types
- [x] **Day 12–13**: Modules and decorators
- [x] **Day 14**: Type guards and narrowing
- [x] **Day 15**: Design patterns
- [x] **Day 16–18**: Async, Node.js, React
- [x] **Day 19**: tsconfig and .d.ts files
- [x] **Day 20**: Real-world project ← **YOU ARE HERE**

---

*Keep building! The best way to master TypeScript is to write TypeScript every day.*

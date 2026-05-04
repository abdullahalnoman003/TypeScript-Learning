// =============================================================================
// DAY 20 — Real World Project: Starter Template
// =============================================================================
//
// This file serves as a starting point for your real-world TypeScript project.
//
// READ README.md IN THIS FOLDER FIRST — it explains your project options,
// structure, and the checklist you need to satisfy.
//
// =============================================================================
//
// STARTER CODE — CLI Task Manager (Option A)
// Feel free to delete this and start from scratch with another option!
// =============================================================================

// NOTE: This starter uses Node.js built-in modules.
// Before running, install type definitions: npm i -D @types/node
// Then run: ts-node starter.ts list
//
// import * as fs from "fs/promises";
// import * as path from "path";
// import * as readline from "readline";

// Minimal type for Node.js process (avoids requiring @types/node for this template)
declare const process: { argv: string[] };

// ── Types ─────────────────────────────────────────────────────────────────────
enum TaskStatus {
    Pending   = "pending",
    Done      = "done",
    Cancelled = "cancelled",
}

interface Task {
    id: number;
    title: string;
    status: TaskStatus;
    createdAt: string;
}

type CreateTaskDto = Pick<Task, "title">;

// ── Discriminated Union for CLI Commands ──────────────────────────────────────
type Command =
    | { action: "add";    title: string }
    | { action: "done";   id: number }
    | { action: "delete"; id: number }
    | { action: "list" }
    | { action: "help" };

// ── Result Type ───────────────────────────────────────────────────────────────
type Result<T, E = string> =
    | { ok: true;  data: T }
    | { ok: false; error: E };

// ── Task Service ──────────────────────────────────────────────────────────────
// TODO: Implement the TaskService class
// It should:
//   - Load/save tasks from a JSON file
//   - Add, complete, delete, and list tasks
//   - Return Result<T> from each operation

// ── Command Parser ────────────────────────────────────────────────────────────
function parseCommand(args: string[]): Command {
    const [action, ...rest] = args;
    switch (action) {
        case "add":    return { action: "add", title: rest.join(" ") };
        case "done":   return { action: "done", id: parseInt(rest[0]) };
        case "delete": return { action: "delete", id: parseInt(rest[0]) };
        case "list":   return { action: "list" };
        default:       return { action: "help" };
    }
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main(): Promise<void> {
    const args = process.argv.slice(2);
    const command = parseCommand(args);

    switch (command.action) {
        case "add":
            console.log(`TODO: Add task: "${command.title}"`);
            break;
        case "done":
            console.log(`TODO: Mark task ${command.id} as done`);
            break;
        case "delete":
            console.log(`TODO: Delete task ${command.id}`);
            break;
        case "list":
            console.log("TODO: List all tasks");
            break;
        case "help":
            console.log(`
TypeScript Task Manager
Usage:
  ts-node index.ts add <title>    Add a new task
  ts-node index.ts done <id>      Mark a task as done
  ts-node index.ts delete <id>    Delete a task
  ts-node index.ts list           List all tasks
`);
    }
}

main().catch(console.error);

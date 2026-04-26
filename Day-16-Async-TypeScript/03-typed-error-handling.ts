// =============================================================================
// DAY 16 — FILE 03: Typed Error Handling in Async Code
// =============================================================================
//
// TOPICS TO COVER:
//   - TypeScript's 'unknown' type in catch blocks (TS 4.0+)
//   - Custom error classes with typed properties
//   - Result<T, E> pattern for async functions (no throws)
//   - Creating a safeAsync wrapper utility
//   - Handling multiple error types
//
// TODO: Fill in this file when you reach Day 16
//
// EXAMPLE STRUCTURE:
//
// class NetworkError extends Error {
//     constructor(public statusCode: number, message: string) {
//         super(message);
//         this.name = "NetworkError";
//     }
// }
//
// function isNetworkError(err: unknown): err is NetworkError {
//     return err instanceof NetworkError;
// }
//
// async function safeAsync<T>(fn: () => Promise<T>): Promise<[T, null] | [null, Error]> {
//     try {
//         return [await fn(), null];
//     } catch (err) {
//         return [null, err instanceof Error ? err : new Error(String(err))];
//     }
// }
//
// const [data, error] = await safeAsync(() => fetchUser(1));
// if (error) console.error(error.message);
// else console.log(data.name);
//
// =============================================================================

// Your code here ↓

export {};

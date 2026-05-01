// =============================================================================
// DAY 18 — FILE 02: TypeScript with React — Hooks Typing
// =============================================================================
//
// TOPICS TO COVER:
//   - useState<T>: explicit vs inferred generic
//   - useRef<T>: DOM refs (HTMLInputElement, HTMLDivElement, etc.)
//   - useReducer with typed state and actions (discriminated unions)
//   - useContext with typed context values
//   - useMemo<T> and useCallback typing
//   - Custom hooks with typed return values
//   - Generic custom hooks
//
// TODO: Fill in this file when you reach Day 18
//
// EXAMPLE STRUCTURE:
//
// // typed useState
// const [count, setCount] = useState<number>(0);
// const [user, setUser] = useState<User | null>(null);
//
// // typed useRef
// const inputRef = useRef<HTMLInputElement>(null);
// inputRef.current?.focus();
//
// // typed useReducer with discriminated union actions
// type Action =
//     | { type: "increment"; amount: number }
//     | { type: "decrement"; amount: number }
//     | { type: "reset" };
//
// function reducer(state: number, action: Action): number { ... }
// const [state, dispatch] = useReducer(reducer, 0);
//
// // Custom hook
// function useFetch<T>(url: string): { data: T | null; loading: boolean; error: string | null } { ... }
//
// =============================================================================

export {};

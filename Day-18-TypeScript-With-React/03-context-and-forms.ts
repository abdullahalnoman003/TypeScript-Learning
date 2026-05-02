// =============================================================================
// DAY 18 — FILE 03: TypeScript with React — Context, Redux & Forms
// =============================================================================
//
// TOPICS TO COVER:
//   - Typing React Context (createContext with generics)
//   - Avoiding the 'undefined' context pitfall
//   - Redux Toolkit with TypeScript (typed store, state, dispatch)
//   - Type-safe form handling (controlled inputs, event types)
//   - react-hook-form with TypeScript (generic useForm<T>)
//   - Generic form components
//
// TODO: Fill in this file when you reach Day 18
//
// EXAMPLE STRUCTURE:
//
// // Typed context
// interface ThemeContextValue { theme: "light" | "dark"; toggle: () => void; }
//
// const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
//
// function useTheme(): ThemeContextValue {
//     const ctx = useContext(ThemeContext);
//     if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
//     return ctx;
// }
//
// // Typed form with react-hook-form
// interface LoginForm { email: string; password: string; rememberMe: boolean; }
//
// const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
// const onSubmit: SubmitHandler<LoginForm> = (data) => console.log(data);
//
// =============================================================================

export {};

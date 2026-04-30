// =============================================================================
// DAY 18 — FILE 01: TypeScript with React — Setup & Props Typing
// =============================================================================
//
// TOPICS TO COVER:
//   - Creating a React + TypeScript project (Vite or Create React App)
//   - Typing component props with interfaces
//   - React.FC vs function declarations
//   - Children prop: React.ReactNode, React.PropsWithChildren
//   - Optional vs required props
//   - Default props with destructuring
//   - Typing events: React.ChangeEvent, React.MouseEvent, React.FormEvent
//
// SETUP (Vite):
//   npm create vite@latest my-app -- --template react-ts
//   cd my-app && npm install && npm run dev
//
// TODO: Fill in this file when you reach Day 18
//
// EXAMPLE STRUCTURE:
//
// interface ButtonProps {
//     label: string;
//     onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
//     variant?: "primary" | "secondary" | "danger";
//     disabled?: boolean;
//     children?: React.ReactNode;
// }
//
// const Button: React.FC<ButtonProps> = ({
//     label,
//     onClick,
//     variant = "primary",
//     disabled = false,
// }) => (
//     <button className={`btn btn-${variant}`} onClick={onClick} disabled={disabled}>
//         {label}
//     </button>
// );
//
// =============================================================================

// Your code here ↓

export {};

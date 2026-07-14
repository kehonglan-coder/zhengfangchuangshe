import { defineConfig, globalIgnores } from "eslint/config";

// TypeScript correctness is enforced by `tsc --noEmit` and Next.js builds.
// Keep ESLint dependency-free and stable across Node/TypeScript versions.
export default defineConfig([
  globalIgnores([".next/**", "node_modules/**", ".pnpm-store/**"]),
  { files: ["**/*.{js,mjs,cjs}"], rules: { "no-undef": "error", "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }] } }
]);

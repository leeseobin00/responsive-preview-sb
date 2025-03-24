/**
 * ESLint configuration
 * Defines linting rules for JavaScript/TypeScript to maintain code quality and consistency
 */
module.exports = {
  env: {
    browser: true, // Browser environment
    es2021: true, // ES2021 syntax support
    node: true, // Node.js environment
  },

  extends: ["eslint:recommended"], // Apply recommended ESLint rules

  parserOptions: {
    ecmaVersion: "latest", // Use latest ECMAScript version
    sourceType: "module", // Use module system
  },

  // TypeScript support
  parser: "@typescript-eslint/parser", // TypeScript parser
  plugins: ["@typescript-eslint", "react", "react-hooks", "prettier"], // Required plugins
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],

  settings: {
    // Auto-detect React version
    react: {
      version: "detect",
    },
  },

  rules: {
    "no-console": "warn", // Warn on console usage
    "no-unused-vars": "warn", // Warn on unused variables
    "prefer-const": "error", // Prefer const over let
    "no-var": "error", // Forbid var usage
    semi: ["error", "always"], // Require semicolons
    quotes: ["error", "single"], // Use single quotes

    // React rules
    "react/prop-types": "off", // Disable prop-types with TypeScript
    "react/react-in-jsx-scope": "off", // Not needed in React 17+
  },
};

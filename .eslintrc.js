module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    // Example ESLint rules
    "no-console": "warn", // Enforce warning for console.log, console.error, etc.
    indent: ["error", 2], // Enforce 2-space indentation
    "@typescript-eslint/no-unused-vars": "warn",
    "prettier/prettier": "warn",
    "no-undef": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

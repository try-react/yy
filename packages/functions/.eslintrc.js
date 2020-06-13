const IS = {
  OFF: 0,
  WARN: 1,
  ERROR: 2,
};

/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:jest/recommended",
    "@cybozu/eslint-config/presets/node-typescript-prettier",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-explicit-any": IS.ERROR,
    "@typescript-eslint/class-name-casing": IS.OFF,
    "@typescript-eslint/no-empty-function": IS.OFF,
    "@typescript-eslint/no-unused-vars": IS.OFF,
  },
};

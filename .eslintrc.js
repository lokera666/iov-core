module.exports = {
  env: {
    es6: true,
    jasmine: true,
    node: true,
    worker: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint", "prettier", "simple-import-sort", "import"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:import/typescript",
  ],
  rules: {
    curly: ["warn", "multi-line", "consistent"],
    "no-console": ["warn", { allow: ["error", "info", "warn"] }],
    "no-param-reassign": "warn",
    "no-shadow": "warn",
    "prefer-const": "warn",
    "spaced-comment": ["warn", "always", { line: { markers: ["/ <reference"] } }],
    "import/no-cycle": "warn",
    "simple-import-sort/sort": "warn",
    "@typescript-eslint/explicit-function-return-type": ["warn", { allowExpressions: true }],
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-floating-promises": "warn",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
    "@typescript-eslint/no-unnecessary-type-assertion": "warn",
    "@typescript-eslint/no-use-before-define": "warn",
    "@typescript-eslint/require-array-sort-compare": "warn",
  },
  overrides: [
    {
      files: "**/*.js",
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: "**/*.spec.ts",
      rules: {
        "@typescript-eslint/no-non-null-assertion": "off",
      },
    },
    {
      files: "jasmine-testrunner.js",
      rules: {
        "@typescript-eslint/camelcase": ["error", { properties: "never" }],
      },
    },
    {
      files: "packages/{iov-bns,iov-tendermint-rpc}/**/*.ts",
      rules: {
        "@typescript-eslint/camelcase": ["error", { allow: ["v0_[0-9]+"] }],
      },
    },
  ],
};

//TODO: с переходом на eslint 10 этот конфиг перестанет поддерживаться, нужно переписать его в новый формат eslint.config.js
module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint/eslint-plugin",
    "simple-import-sort",
    "unused-imports",
    "import",
  ],
  rules: {
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/sort-type-constituents": "error",
    "no-console": "warn",
    "prettier/prettier": "error",
    "simple-import-sort/imports": "off",
    "simple-import-sort/exports": "off",
    "unused-imports/no-unused-imports": "warn",
    "import/no-duplicates": "error",
    "react/jsx-no-useless-fragment": "error",
    "react/display-name": "off",
    "react/self-closing-comp": "error",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-max-depth": ["error", { max: 7 }],
    "react/jsx-boolean-value": "warn",
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        shorthandFirst: true,
        multiline: "last",
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: ["key", "ref"],
      },
    ],
  },
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              // Packages `react` related packages come first.
              ["^react", "^@?\\w"],
              // Internal packages.
              ["^(src)(/.*|$)"],
              // Side effect imports.
              ["^\\u0000"],
              // Parent imports. Put `..` last.
              ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
              // Other relative imports. Put same-folder imports and `.` last.
              ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
              // Style imports.
              ["^.+\\.?(css)$"],
              // svg imports.
              ["^.+\\.?(svg)$"],
            ],
          },
        ],
      },
    },
  ],
}

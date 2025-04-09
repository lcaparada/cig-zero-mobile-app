module.exports = {
  extends: [
    "expo",
    "prettier",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[jt]s?(x)",
  ],
  plugins: [
    "import",
    "prettier",
    "@tanstack/query",
    "plugin:testing-library/react",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "import/order": [
          "error",
          {
            groups: ["external", "builtin", "internal", "parent", "sibling"],
            pathGroups: [
              {
                pattern: "react+(|-native)",
                group: "external",
                position: "before",
              },
              {
                pattern: "@+(routes|screens|components|hooks|theme)",
                group: "internal",
                position: "before",
              },
              {
                pattern: "./",
                group: "internal",
                position: "before",
              },
            ],
            pathGroupsExcludedImportTypes: ["react+(|-native)"],
            alphabetize: {
              order: "asc",
              caseInsensitive: true,
            },
            "newlines-between": "always",
          },
        ],
      },
    },
  ],
};

/**
 * Commitlint configuration
 * Enforces consistent commit message format to maintain clear code history
 * Commit format: "emoji[type] subject"
 */
module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern:
        /^([\u{1F300}-\u{1F6FF}\u{2600}-\u{26FF}])\[(.*?)\]\s(.*)$/u, // Emoji[type] subject pattern
      headerCorrespondence: ["emoji", "type", "subject"], // Groups to extract from pattern
    },
  },
  rules: {
    "header-match-team-pattern": [2, "always"], // Check team pattern match (2: error level)
    "type-enum": [
      2,
      "always",
      [
        "feat", // New feature
        "fix", // Bug fix
        "docs", // Documentation change
        "style", // Code style change
        "refactor", // Code refactoring
        "perf", // Performance improvement
        "test", // Test addition/modification
        "build", // Build system change
        "ci", // CI configuration change
        "chore", // Miscellaneous tasks
        "revert", // Revert previous commit
        "init", // Initial setup
      ],
    ],
    "type-case": [2, "always", "lower-case"], // Type must be lowercase
    "type-empty": [2, "never"], // Type must not be empty
    "subject-empty": [2, "never"], // Subject must not be empty
    "subject-full-stop": [2, "never", "."], // Subject must not end with period
    "header-max-length": [2, "always", 100], // Max header length of 100 chars
  },
  plugins: [
    {
      rules: {
        "header-match-team-pattern": (parsed) => {
          const { emoji, type, subject } = parsed;
          if (emoji && type && subject) {
            return [true];
          }
          return [
            false,
            'Commit message must follow format: "🎉[init] Add project initial setup"',
          ];
        },
      },
    },
  ],
};

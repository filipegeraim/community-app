module.exports = {
  extends: ["custom/next"],
  plugins: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "**/*.test.ts",
          "**/*.test.tsx"
        ]
      }
    ]
  }
};

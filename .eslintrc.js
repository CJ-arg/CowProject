const OFF = 0;
module.exports = {
  extends: ["airbnb", "airbnb/hooks", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
      {
        trailingComma: "es5",
        semi: false,
        singleQuote: false,
        printWidth: 120,
      },
      { usePrettierrc: false },
    ],
    // "react/prop-types": OFF,
    "react/jsx-props-no-spreading": OFF,
  },
};

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
    ],
    "react/prop-types": OFF,
    "react/jsx-props-no-spreading": OFF,
  },
};

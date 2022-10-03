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
    "linebreak-style": 0,
    "eslint linebreak-style": [0, "error", "windows"],
    "comma-dangle": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "max-len": "off",
    "no-console": "off",
    "no-plusplus": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
  },
};

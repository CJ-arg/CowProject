module.exports = {
  extends: 'airbnb',
  rules: {
    'react/prop-types': 'off',
    'react/destructuring-assignment': [
      'error',
      'always',
      {
        ignoreClassFields: true,
      },
    ],
    'linebreak-style': [
      'error',
      process.platform === 'win32' ? 'windows' : 'unix',
    ],
  },
};

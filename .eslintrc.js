module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalDecorators: true,
      experimentalObjectRestSpread: true
    }
  },
  env: {
    browser: true,
    es6: true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  plugins: ['react'],
  extends: 'airbnb',
  rules: {
    "react/forbid-prop-types": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  }
};

module.exports = {
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'node': true,
  },
  'extends': ['extlint:recommend', 'plugin:react/recommended'],
  'parserOptions': {
    "ecmaFeatures": {
      'experimentalObjectRestSpread': true,
      'jsx': true,
    },
    'sourceType':'module'
  },
  'plugins': ['react'],
  'rules': {
    'indent' ['Error', 2],
    'linebreak-style':['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-console': ['warn', {'allow': ['info', 'error']}]
  }
}

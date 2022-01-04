module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'prettier', 'plugin:prettier/recommended', 'plugin:nuxt/recommended'],
  plugins: ['prettier'],
  rules: {
    'no-console': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/custom-event-name-casing': 'off',
  },
  overrides: [
    {
      files: ['src/pages/**/*.vue', 'src/layouts/**/*.vue'],
      rules: {
        'vue/multi-word-component-names': 0,
      },
    },
  ],
};

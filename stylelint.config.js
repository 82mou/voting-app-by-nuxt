module.exports = {
  extends: 'stylelint-config-recommended-scss',
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'font-family-no-missing-generic-family-keyword': null,
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
  },
};

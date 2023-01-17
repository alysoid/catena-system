const Configuration = {
  // Resolve and load @commitlint/config-conventional
  extends: ['@commitlint/config-conventional'],
  // Override rules from @commitlint/config-conventional
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always'],
  },
}

module.exports = Configuration

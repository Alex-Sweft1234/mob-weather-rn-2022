module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'import/no-cycle': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'prettier/prettier': [
          'error',
          {
            endOfLine: 'auto',
            bracketSpacing: true,
            jsxBracketSameLine: false,
            singleQuote: true,
            jsxSingleQuote: false,
            printWidth: 120,
            proseWrap: 'preserve',
          },
        ],
      },
    },
  ],
};

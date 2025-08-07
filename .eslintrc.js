module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.app.json',
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    env: {
        node: true,
        es6: true,
        browser: true,
    },
    ignorePatterns: ['dist', 'node_modules', '*.js', '**/*.spec.ts'],
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
    ],
    rules: {
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-unused-vars': 'error',
        'no-console': 'warn',
        'no-unused-vars': 'off', // Turn off base rule as it conflicts with @typescript-eslint/no-unused-vars
        'prefer-const': 'error', // Use built-in rule instead of TypeScript-specific one
    },
};

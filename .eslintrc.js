module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    env: {
        commonjs: true,
        es6: true,
        node: true,
    },
    extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        // Prettier must go last so that it can turn off other rules
        'prettier',
    ],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
    },
    rules: {
        // These get flagged incorrectly because none of the code being linted
        // actually ends up in the `dist. Without this, nearly all imports
        // would error with "<Package> should be listed in the project's
        // dependencies, not devDependencies".
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

        // Enabled in airbnb, but we don't want to use extensions in TS files
        'import/extensions': 'off',
        'import/no-unresolved': 'off',

        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
    },
};

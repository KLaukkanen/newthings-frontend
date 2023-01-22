module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'standard-with-typescript'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['react'],
    rules: {
        'react/react-in-jsx-scope': 0,
        '@typescript-eslint/indent': 0,
        indent: 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        'comma-dangle': 0,
        '@typescript-eslint/comma-dangle': 0,
        '@typescript-eslint/space-before-function-paren': 0,
    },
}

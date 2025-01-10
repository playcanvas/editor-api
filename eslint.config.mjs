import playcanvasConfig from '@playcanvas/eslint-config';
// eslint-disable-next-line import/no-unresolved
import typescriptParser from '@typescript-eslint/parser';
import globals from 'globals';

export default [
    ...playcanvasConfig,
    {
        files: ['**/*.ts'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            parser: typescriptParser,
            parserOptions: {
                requireConfigFile: false
            },
            globals: {
                ...globals.browser,
                ...globals.mocha,
                ...globals.node
            }
        },
        rules: {
            'jsdoc/require-jsdoc': 'off',
            'jsdoc/require-param': 'off',
            'jsdoc/require-param-type': 'off',
            'jsdoc/require-returns': 'off',
            'no-use-before-define': 'off'
        }
    },
    {
        settings: {
            'import/resolver': {
                node: {
                    extensions: ['.js', '.ts', '.mjs']
                }
            }
        }
    },
    {
        files: ['test/**/*.mjs'],
        rules: {
            'no-unused-expressions': 'off',
            'prefer-arrow-callback': 'off' // Mocha uses function callbacks
        }
    },
    {
        ignores: [
            'dist/**',
            'test/**'
        ]
    }
];

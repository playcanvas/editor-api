import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { dts } from 'rollup-plugin-dts';
import polyfills from 'rollup-plugin-polyfill-node';

import { runTsc } from './utils/plugins/rollup-run-tsc.mjs';

const umd = {
    external: ['@playcanvas/observer'],
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'umd',
        name: 'api',
        globals: {
            '@playcanvas/observer': 'observer'
        }
    },
    plugins: [
        commonjs(),
        polyfills(),
        resolve(),
        babel({
            babelHelpers: 'bundled',
            babelrc: false,
            comments: false,
            compact: false,
            minified: false,
            presets: [
                [
                    '@babel/preset-env', {
                        bugfixes: true,
                        loose: true,
                        modules: false,
                        targets: {
                            esmodules: true
                        }
                    }
                ]
            ]
        })
    ]
};

const module = {
    external: ['@playcanvas/observer'],
    input: 'src/index.js',
    output: {
        file: 'dist/index.mjs',
        format: 'module',
        globals: {
            '@playcanvas/observer': 'observer'
        }
    },
    plugins: [
        commonjs(),
        polyfills(),
        resolve()
    ]
};

const footer = `export as namespace api;
declare global {
    const editor: typeof globals;
}`;

const types = {
    input: 'types/index.d.ts',
    output: [{
        file: 'dist/index.d.ts',
        footer: footer,
        format: 'es'
    }],
    plugins: [
        runTsc('tsconfig.build.json'),
        dts()
    ]
};

export default (args) => {
    return process.env.target === 'types' ? [types] : [umd, module];
};

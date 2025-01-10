import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import polyfills from 'rollup-plugin-polyfill-node';

const umd = {
    external: ['@playcanvas/observer'],
    input: 'src/index.ts',
    output: {
        file: 'dist/index.js',
        format: 'umd',
        name: 'api',
        globals: {
            '@playcanvas/observer': 'observer'
        }
    },
    plugins: [
        typescript({
            sourceMap: false
        }),
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
    input: 'src/index.ts',
    output: {
        file: 'dist/index.mjs',
        format: 'module',
        globals: {
            '@playcanvas/observer': 'observer'
        }
    },
    plugins: [
        typescript({
            sourceMap: false
        }),
        commonjs(),
        polyfills(),
        resolve()
    ]
};

export default () => {
    return [umd, module];
};

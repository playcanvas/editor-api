import babel from '@rollup/plugin-babel';
import dts from 'rollup-plugin-dts';

const umd = {
    external: ['@playcanvas/observer'],
    input: 'index.js',
    output: {
        file: 'dist/index.js',
        format: 'umd',
        name: 'api',
        globals: {
            '@playcanvas/observer': 'observer'
        }
    },
    plugins: [
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
    input: 'index.js',
    output: {
        file: 'dist/index.mjs',
        format: 'module',
        globals: {
            '@playcanvas/observer': 'observer'
        }
    }
};

const types = {
    input: 'types/index.d.ts',
    output: [{
        file: 'dist/index.d.ts',
        footer: 'export as namespace editor;',
        format: 'es'
    }],
    plugins: [
        dts()
    ]
};

export default (args) => {
    const envTarget = process.env.target ? process.env.target.toLowerCase() : null;
    if (envTarget === 'types') {
        return [types];
    }

    return [umd, module];
};

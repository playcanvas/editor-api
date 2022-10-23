import babel from '@rollup/plugin-babel';

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

export default [umd, module];

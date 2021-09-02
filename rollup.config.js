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
    }
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

import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default options => {
    return {
        external: ['core-js', 'prop-types', 'react', 'react-dom', 'react-spring', 'styled-components'],
        input: options.input,
        output: [
            {
                file: `./lib/index.cjs.js`,
                format: 'cjs',
            },
            {
                file: `./lib/index.esm.js`,
                format: 'esm',
            },
        ],
        plugins: [
            peerDepsExternal(),
            nodeResolve({
                extensions: ['.js', '.jsx'],
            }),
            commonjs({
                include: '../../node_modules/**',
            }),
            babel({
                babelHelpers: 'runtime',
                comments: false,
                configFile: '../../babel.config.js',
                exclude: '../../node_modules/**',
            }),
        ],
    };
};

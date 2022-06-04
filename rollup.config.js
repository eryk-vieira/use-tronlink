import sass from 'rollup-plugin-sass';
import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'lib',
    },
  ],
  plugins: [sass({ insert: true }), typescript(), uglify()],
  external: ['react', 'react-dom'],
};

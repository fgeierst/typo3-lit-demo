import {defineConfig} from 'vite'
import svgLoader from 'vite-svg-loader'
import {viteStaticCopy} from 'vite-plugin-static-copy'
import * as path from "path";

export default defineConfig(({command, mode}) => {
  return {
    mode: 'production',
    plugins: [
      svgLoader(),
      viteStaticCopy({
        targets: [
          {
            src: path.resolve(__dirname, './assets/Image') + '/[!.]*',
            dest: 'Image'
          },
          {
            src: path.resolve(__dirname, 'node_modules/@shoelace-style/shoelace/dist/assets'),
            dest: path.resolve(__dirname, 'packages/site-distribution/Resources/Public/assets/shoelace')
          }
        ]
      })
    ],
    publicDir: false,
    base: './',
    build: {
      manifest: true,
      target: 'es2020',
      rollupOptions: {
        input: 'assets/JavaScript/app.js',
      },
      outDir: 'packages/site-distribution/Resources/Public/',
      cssMinify: 'lightningcss',
    },
    css: {
      transformer: 'lightningcss',
      lightningcss: {
        drafts: {
          nesting: true,
        }
      },
      devSourcemap: true,
    },
    server: {
      origin: `${process.env.DDEV_PRIMARY_URL}:${process.env.VITE_PRIMARY_PORT}/`,
    },
  }
});

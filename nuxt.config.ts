import { NuxtConfig } from '@nuxt/types';
import Sass from 'sass';
import Fiber from 'fibers';

const routerBase = {
  router: {
    base: '',
  },
};

const config: NuxtConfig = {
  srcDir: 'src',
  target: 'static',
  ssr: true,
  head: {
    htmlAttrs: {
      lang: 'ja',
    },
    title: '投票システム',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: '投票システム' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: '//www.gstatic.com/firebasejs/4.6.0/firebase.js',
      },
    ],
    // innerHTML内の文字がエスケープされるのを防ぐ
    __dangerouslyDisableSanitizers: ['script'],
  },
  // css: ["~/assets/styles/global.scss"],
  plugins: [{ src: '~/plugins/firebase.ts', mode: 'client' }],
  components: ['~/components/'],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
    'nuxt-svg-loader',
  ],
  modules: ['bootstrap-vue/nuxt', 'nuxt-webfontloader'],
  styleResources: {
    scss: [
      './src/assets/styles/_variables.scss',
      './src/assets/styles/_mixins.scss',
      './src/assets/styles/_function.scss',
    ],
  },
  svgLoader: {
    svgoConfig: {
      plugins: [{ removeViewBox: false }, { removeTitle: false }],
    },
  },
  generate: {
    cache: false,
    fallback: false,
    crawler: false,
  },
  ...routerBase,
  webfontloader: {
    google: {
      families: ['Noto+Sans+JP:500,700'],
    },
  },
  build: {
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber,
        },
      },
    },
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 },
            },
          ],
        ];
      },
    },
  },
};

export default config;

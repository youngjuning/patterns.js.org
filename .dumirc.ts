import { defineConfig } from 'dumi';

export default defineConfig({
  favicons: ['https://www.patterns.dev/favicon.ico'],
  autoAlias: false,
  themeConfig: {
    name: 'Patterns',
    logo: 'https://www.patterns.dev/favicon.ico',
    prefersColor: { default: 'auto' },
    editLink: "https://github.com/youngjuning/patterns.js.org/edit/main/{filename}",
    socialLinks: {
      github: 'https://github.com/youngjuning/patterns.js.org',
      twitter: 'https://twitter.com/luozhu2021'
    },
    hd: { rules: [] },
    footer: 'Made with ❤️ by <a href="https://github.com/youngjuning" target="_blank">紫竹</a>'
  },
  theme: {
    '@c-primary': '#ec008c',
  },
  publicPath: '/',
  // analytics: {
    // ga_v2: '',
  // },
  // sitemap: {
    // hostname: 'https://patterns.js.org',
  // },
  hash: true,
  exportStatic: {},
  headScripts: [
    {src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7962287588031867', async: true, crossorigin: 'anonymous'},
  ]
});

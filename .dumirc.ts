import { defineConfig } from 'dumi';

export default defineConfig({
  favicons: ['https://www.patterns.dev/favicon.ico'],
  autoAlias: false,
  themeConfig: {
    name: 'Patterns',
    logo: 'https://www.patterns.dev/favicon.ico',
    prefersColor: { default: 'auto' },
    socialLinks: {
      github: 'https://github.com/zizhuspot/patterns',
      twitter: 'https://twitter.com/luozhu2021'
    },
    hd: { rules: [] },
    footer: '<a href="/sitemap.xml" target="_blank">站点地图</a><br/>Made with ❤️ by <a href="https://github.com/zizhuspot" target="_blank">紫竹光点计划</a>'
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
    {src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7029815294762181', async: true, crossorigin: 'anonymous'},
  ]
});

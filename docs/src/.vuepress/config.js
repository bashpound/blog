const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Bashpound.log()',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  port: 3000,
  base: "",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', contesnt: 'black' }],
    ['link', { rel: "shortcut icon", href: "favicon.ico"}],
    ['script', { async: "true", src: "https://www.googletagmanager.com/gtag/js?id=G-SFLYNCGZNJ"}],
    ['script', { src: "/ga/ga.js"}],
    ['script', { 'data-ad-client': 'ca-pub-1383612348871633', async:true, src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'}]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: '/images/logo.jpg',
    lastUpdated: 'Last Updated',
    repo: 'bashpound',
    editLinks: false,
    editLinkText: '',
    smoothScroll: true,
    nav: [
      {
        text: 'Blog',
        link: '/article/',
      },
      {
        text: 'About',
        link: '/about/',
      }
    ],
    sidebar: {
      '/article/': [
        {
          title: 'Tech',
          collapsable: true,
          children: [
            '',
            'flux-dataflow',
          ]
        },
        {
          title: 'Dev.log',
          collapsable: true,
          children: [
            'spring-vue',
          ]
        },
        {
          title: 'Life.log',
          collapsable: true,
          children: [
            'life',
          ]
        }
      ],
    }
  },
  markdown: {
    lineNumbers: true
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    },
    [
    '@vuepress/google-analytics',
    {
      'ga': 'G-SFLYNCGZNJ'
    }
  ]
  ]
}

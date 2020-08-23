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
  base: "/blog/",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3e77b5' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Blog',
        link: '/blog/',
      },
      {
        text: 'More',
        link: 'https://github.com/bashpound'
      }
    ],
    sidebar: {
      '/blog/': [
        {
          title: 'Patterns',
          collapsable: true,
          children: [
            '',
            'flux-dataflow',
          ]
        },
        {
          title: 'Dev. log',
          collapsable: true,
          children: [
            'spring-vue',
          ]
        }
      ],
    }
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
    }
  ]
}

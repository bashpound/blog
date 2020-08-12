module.exports = {
    title: 'VuePress 시작!',
    description: 'Hello World',
    themeConfig: {
      nav: [
        {
          text: 'About',
          items: [
             { text: 'About Me', link: '/about/me' },
             { text: 'About Blog', link: '/about/blog' }
          ]
        }
      ]
    },
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }]
      ]
  }
/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f69f710e05cad5da828830dc79af87b8"
  },
  {
    "url": "about/index.html",
    "revision": "4770414fce1a6f52df599904b2297c2e"
  },
  {
    "url": "article/detection.html",
    "revision": "42bbfde811cfe167f91a773ec111258d"
  },
  {
    "url": "article/flux-dataflow.html",
    "revision": "1eb2fe689f6d1b5dd097f0d2cea750a9"
  },
  {
    "url": "article/highschool.html",
    "revision": "420d7b0fa59d4d768ed89ef1f1b79b4b"
  },
  {
    "url": "article/idx.html",
    "revision": "e7338162b02250c706ba03b8122d5bab"
  },
  {
    "url": "article/index.html",
    "revision": "1f590849dc6351c11132b1f0aab1b1cc"
  },
  {
    "url": "article/smartjack.html",
    "revision": "25b39d265b622309e0e1ea28d81ce19b"
  },
  {
    "url": "article/spring-react.html",
    "revision": "5fd759fce781452addf75ecdf3dd1850"
  },
  {
    "url": "article/spring-vue.html",
    "revision": "0f0f6e297abd6d5b6fc26b6b5041aa87"
  },
  {
    "url": "assets/css/0.styles.a1882a04.css",
    "revision": "7a84a0fbdba7e7262d27ff0a19307508"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.01828297.js",
    "revision": "bd9325a02dbfa6cfb009b75241412975"
  },
  {
    "url": "assets/js/11.8bd91edb.js",
    "revision": "a3f9e75cb3f6e5e139aee72a156954fe"
  },
  {
    "url": "assets/js/12.7f783125.js",
    "revision": "3c6516ef3c80ab7cc0584847931f102f"
  },
  {
    "url": "assets/js/13.8db73462.js",
    "revision": "ce52ff32ca1a4f6a3c1659541200df5e"
  },
  {
    "url": "assets/js/14.7545e089.js",
    "revision": "b215e4dfd0e0f65d1d66112c35c4da04"
  },
  {
    "url": "assets/js/15.f79d5a99.js",
    "revision": "5744fbb3a4b703d8ead16039db980105"
  },
  {
    "url": "assets/js/16.11fb589b.js",
    "revision": "8e2121ae517995b9c4ae6704d94e2b1e"
  },
  {
    "url": "assets/js/17.7be63535.js",
    "revision": "424fe15b0e868c40c258a98a27b764af"
  },
  {
    "url": "assets/js/18.880e48b3.js",
    "revision": "e5947f5fe9fc50a6e849ef88e2548dd7"
  },
  {
    "url": "assets/js/19.0255ea9b.js",
    "revision": "65776b266a81e62134deb914afa63ed3"
  },
  {
    "url": "assets/js/2.62b87973.js",
    "revision": "ad335b75e80308d24c23e7b8775a11ef"
  },
  {
    "url": "assets/js/20.16b99aa1.js",
    "revision": "24fe3523529e54bc49f29ad726374170"
  },
  {
    "url": "assets/js/21.52124c9c.js",
    "revision": "486884cea06a8cb2fabdbfa2871cdcc1"
  },
  {
    "url": "assets/js/22.c931d650.js",
    "revision": "b3d2301f4f9154c0307be4291e9f0893"
  },
  {
    "url": "assets/js/23.46322cd2.js",
    "revision": "aeab5ad3463493025e0fbe41d0bfa199"
  },
  {
    "url": "assets/js/24.f749ff90.js",
    "revision": "ad8ab8d5726fbbb68124a0bedc7ad2b5"
  },
  {
    "url": "assets/js/25.0922a256.js",
    "revision": "3fbbe0e0a477f3e020fe8e1459f510b9"
  },
  {
    "url": "assets/js/26.91b50bde.js",
    "revision": "7c2fc89c433181b80ba2ceb634bab0ab"
  },
  {
    "url": "assets/js/27.5fef9f12.js",
    "revision": "0a47534dd5ee628ecb9d49739f343d65"
  },
  {
    "url": "assets/js/3.06564547.js",
    "revision": "a64487fbbb38666771fca78ea328db00"
  },
  {
    "url": "assets/js/4.399f8887.js",
    "revision": "8c09688928c0c30adfaa2e965319a206"
  },
  {
    "url": "assets/js/5.9baa4189.js",
    "revision": "bebae24fac92e5c847485b964ee3cb2a"
  },
  {
    "url": "assets/js/6.5d016d58.js",
    "revision": "74cefaa89309730ccc1103778382abe8"
  },
  {
    "url": "assets/js/7.ac9eb2ba.js",
    "revision": "bd1ce244693ac48dd81ead2b7924acab"
  },
  {
    "url": "assets/js/8.fc0946e7.js",
    "revision": "6e2ee376584d084e3d2d25aa3c20ae94"
  },
  {
    "url": "assets/js/9.6d43baac.js",
    "revision": "0eedd39a9ac3d6c2b07a8958d875cecc"
  },
  {
    "url": "assets/js/app.9b410e29.js",
    "revision": "2dbda8adc4493211c06029c3e60a54b7"
  },
  {
    "url": "config/index.html",
    "revision": "9ae4d096e408dab9b70f5e0215d7202b"
  },
  {
    "url": "ga/ga.js",
    "revision": "603bc8b8fde5f28541f46d5f6ee0fc17"
  },
  {
    "url": "images/binary.jpg",
    "revision": "92091fd539709febc5c4425e268091a1"
  },
  {
    "url": "images/coordinates.png",
    "revision": "e7b8f21beeaf7d1a46a2110a40841488"
  },
  {
    "url": "images/delivery.jpg",
    "revision": "a3797fac0503f3bc7f8a215689eac511"
  },
  {
    "url": "images/image (1).png",
    "revision": "9b0d9eac14902f21032b5b8de1db41c0"
  },
  {
    "url": "images/image.png",
    "revision": "e7ae3f978e3b3779a0298f1576317150"
  },
  {
    "url": "images/index.jpg",
    "revision": "ab6e612245a15e2fdcb161b960ac0a84"
  },
  {
    "url": "images/kc.jpg",
    "revision": "1daf9f1d0fe957c9b6678c174fbf87aa"
  },
  {
    "url": "images/logo-padd.jpg",
    "revision": "720f8b1e2c8b442b49e81212c57a2d0b"
  },
  {
    "url": "images/logo.jpg",
    "revision": "b759e4a52e52e61fba8d9dff07bec4ae"
  },
  {
    "url": "images/monthly.jpg",
    "revision": "a51cf5c538eed1cde136478743674c71"
  },
  {
    "url": "images/octahedral.png",
    "revision": "84368fe226190ec9cfa7acc5b31567a6"
  },
  {
    "url": "images/phonebook.jpg",
    "revision": "676875b8dc0f01d4a59ca267b6754404"
  },
  {
    "url": "images/pointofview.png",
    "revision": "848e563dde39382fc0a1d77bd3bec4c2"
  },
  {
    "url": "images/silla.jpg",
    "revision": "db052ad3b4220deabdfa72d7b98656a9"
  },
  {
    "url": "images/smartjack.jpg",
    "revision": "cf75b84b5523fa6f2129f21d6ee5e58c"
  },
  {
    "url": "images/smartjackdog.jpg",
    "revision": "c72dab2c28d9da2267dd9f018ba54fc6"
  },
  {
    "url": "images/truston.jpg",
    "revision": "36c1407fc829b9ecaacd3061a939c99e"
  },
  {
    "url": "index.html",
    "revision": "31d6af5a96fad7a3b437d0c74cd64476"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

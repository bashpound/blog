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
    "revision": "fca1857705f5bb386fd1c739dcc12d19"
  },
  {
    "url": "about/index.html",
    "revision": "2140a3b10128117dad1cc9e302f13550"
  },
  {
    "url": "article/flux-dataflow.html",
    "revision": "ce870ab4488c0f4e489f92e8da3c1833"
  },
  {
    "url": "article/index.html",
    "revision": "e8b35a9762ac91100cff5c0301309751"
  },
  {
    "url": "article/life.html",
    "revision": "a542c36f1bcfb82fc70ffeb4b135e58b"
  },
  {
    "url": "article/spring-vue.html",
    "revision": "7a606a772dcc5613da5fe701fafca01f"
  },
  {
    "url": "assets/css/0.styles.a77d1a8b.css",
    "revision": "b48f06fe1cbda86e51dfbfca2196a36d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.32186d32.js",
    "revision": "7a47a8f7901629f83cb29ba1eb01e22c"
  },
  {
    "url": "assets/js/11.68afa8d2.js",
    "revision": "db2bab2a82cabc2d0ad1cdb7b3f9b65a"
  },
  {
    "url": "assets/js/12.e247dd60.js",
    "revision": "c20b74c0c8e1519c439e856913c6dec7"
  },
  {
    "url": "assets/js/13.c3bd9316.js",
    "revision": "95fc0d3e00dd8e24b5699af1811e5fdd"
  },
  {
    "url": "assets/js/14.20a05a79.js",
    "revision": "d48d951655e59fb55d240dbff7bcc4be"
  },
  {
    "url": "assets/js/15.7bc9511e.js",
    "revision": "1d9c104103967e48b0bdab0387ba3de6"
  },
  {
    "url": "assets/js/16.8a984be0.js",
    "revision": "c1b5db71d87b4eb3e9b77e537c8b57fa"
  },
  {
    "url": "assets/js/17.886c9ebf.js",
    "revision": "660e6b1b402b1acb66c2abba3b34ad0a"
  },
  {
    "url": "assets/js/2.9e383634.js",
    "revision": "4e00d67ea90b699e73149373e9838133"
  },
  {
    "url": "assets/js/3.f716c831.js",
    "revision": "3f38ce15eb563f49f39e1bfbbda4cfc5"
  },
  {
    "url": "assets/js/4.f6f28712.js",
    "revision": "12fff3f284eaad7540eee3303a3c4aac"
  },
  {
    "url": "assets/js/5.9a867c4e.js",
    "revision": "3abfb5ea5da2ee660b080427dbecbb37"
  },
  {
    "url": "assets/js/6.1b601b09.js",
    "revision": "afaaa562be3efab1348dc61418b5b365"
  },
  {
    "url": "assets/js/7.c9dba9d2.js",
    "revision": "6dcc28c2dc2a4fb85466e4e5167f97f1"
  },
  {
    "url": "assets/js/8.72ade92b.js",
    "revision": "fcd44ddc16a68e336ef7f9dfde4f0412"
  },
  {
    "url": "assets/js/9.074e391b.js",
    "revision": "292013d5a43d3a80644fb65c1fb85ef3"
  },
  {
    "url": "assets/js/app.dd04539a.js",
    "revision": "082b25a3f79641e6a652a0835d75bedd"
  },
  {
    "url": "config/index.html",
    "revision": "574073769762eb593e4443e69c92a9ae"
  },
  {
    "url": "ga/ga.js",
    "revision": "603bc8b8fde5f28541f46d5f6ee0fc17"
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
    "url": "index.html",
    "revision": "44e38ec01bb1b57187eb86152d89f866"
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

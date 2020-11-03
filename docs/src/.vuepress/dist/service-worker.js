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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "defe58043f271de2caf334362ce23719"
  },
  {
    "url": "article/flux-dataflow.html",
    "revision": "ca5ecc144535e030a511364f805b9d93"
  },
  {
    "url": "article/index.html",
    "revision": "7b16fa57501636731f6ab2cf2f0e1b1b"
  },
  {
    "url": "article/life.html",
    "revision": "6eb33f75e36d50a7c7eb484fb7227967"
  },
  {
    "url": "article/spring-vue.html",
    "revision": "57f6082fbf5c7e0fff0f41edab02e160"
  },
  {
    "url": "assets/css/0.styles.1c7bde55.css",
    "revision": "82fec7e44e31a750848e43c4547f1e4c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d829aef1.js",
    "revision": "72318c56f75f176f2e9bb4d27215e83e"
  },
  {
    "url": "assets/js/11.9196c02f.js",
    "revision": "029d485b66942f664d021b183841f917"
  },
  {
    "url": "assets/js/12.d35b52ab.js",
    "revision": "9223c99e8a810fe4cfb9d78ad1fbe05d"
  },
  {
    "url": "assets/js/13.a51883a7.js",
    "revision": "a99d27a0617c21d69becf47ca66db06a"
  },
  {
    "url": "assets/js/2.a32fed46.js",
    "revision": "b0c8792f805fd3910f057b7fb32619bd"
  },
  {
    "url": "assets/js/3.c30abdf0.js",
    "revision": "a4c79923bec7cab8b3b721f352d19550"
  },
  {
    "url": "assets/js/4.4da9d1b2.js",
    "revision": "2b4780d2bc6a788dda583cc25c614a68"
  },
  {
    "url": "assets/js/5.600dffe8.js",
    "revision": "10b25a4e3b9e7cbda46d02bc0fd7a921"
  },
  {
    "url": "assets/js/6.e9f67e17.js",
    "revision": "410d773c5b538255e98faa226955bc47"
  },
  {
    "url": "assets/js/7.983486c1.js",
    "revision": "4c3d3dfd17c13bfa1a19a85c8a411767"
  },
  {
    "url": "assets/js/8.36345e84.js",
    "revision": "ce2f54c7623e2df3d263c0d403832a1e"
  },
  {
    "url": "assets/js/9.4bf64a46.js",
    "revision": "64bbf501d692927ea553e8c6dcd412c7"
  },
  {
    "url": "assets/js/app.e412248b.js",
    "revision": "be38854d7b9180ba276198841090acc6"
  },
  {
    "url": "config/index.html",
    "revision": "90edd17b6279ae65632b8092001b6bd6"
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
    "revision": "c2263c1af09191b59336b3194f533b61"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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

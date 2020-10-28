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
    "revision": "676ec9f66e701fda6ed0838b26d64c4b"
  },
  {
    "url": "assets/css/0.styles.f69dd514.css",
    "revision": "10b489275ac896d5d211b92b90af0244"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7a14a314.js",
    "revision": "c014a77d725351ba8d54df24b83234d5"
  },
  {
    "url": "assets/js/11.e9beebd0.js",
    "revision": "25fd5e498fbba7f213984cb6023352b9"
  },
  {
    "url": "assets/js/12.9c0857ef.js",
    "revision": "fae38fec628a5b736204a3f02e544e39"
  },
  {
    "url": "assets/js/2.bb09066a.js",
    "revision": "b0fada16bf6f295e41c26d53d54fbf13"
  },
  {
    "url": "assets/js/3.f09f155c.js",
    "revision": "27490e259eb72bcce6c7adbc6a10eb20"
  },
  {
    "url": "assets/js/4.5d05ac2d.js",
    "revision": "bc016e75e8fdc802b0541f45dd277db2"
  },
  {
    "url": "assets/js/5.414ced0a.js",
    "revision": "04b4d3c849119d08047426ae2069f1ae"
  },
  {
    "url": "assets/js/6.6ac40378.js",
    "revision": "8be784fbf6adf985b4d9a6a0d4baa783"
  },
  {
    "url": "assets/js/7.faf98d4d.js",
    "revision": "c0c30bec2181f387a045181d51ae5e23"
  },
  {
    "url": "assets/js/8.8ffe4e54.js",
    "revision": "db471767ac5f467dc7a05e8378dd111e"
  },
  {
    "url": "assets/js/9.bc5cf07c.js",
    "revision": "4d5a979942328dadaa90607409a569c8"
  },
  {
    "url": "assets/js/app.944eec28.js",
    "revision": "fa973f6bcd00277ec0aa1d5e61e1936b"
  },
  {
    "url": "blog/flux-dataflow.html",
    "revision": "6253810ed8714186b2812a8bef0dbf89"
  },
  {
    "url": "blog/index.html",
    "revision": "39a1a95e3fa05a7d5c0be391d708317e"
  },
  {
    "url": "blog/spring-vue.html",
    "revision": "9176584e0e861b9a1687cb70ae1fb835"
  },
  {
    "url": "config/index.html",
    "revision": "dd9164fe78f00f79bc097b0de80a694c"
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
    "revision": "37bbc1d757bdc481b43acc92d92d89c5"
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

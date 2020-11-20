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
    "revision": "bbd9894b0fc625366cdc5a32f5f56e24"
  },
  {
    "url": "about/index.html",
    "revision": "44c6937c13ec2b90ed1a36fc388328b3"
  },
  {
    "url": "article/detection.html",
    "revision": "c343464fe29c428d4f583d14f4532108"
  },
  {
    "url": "article/flux-dataflow.html",
    "revision": "2d89eee08c7437b7f53c7610c897a3fc"
  },
  {
    "url": "article/idx.html",
    "revision": "7fb4665fd28dc714e5b66950dc18c2ff"
  },
  {
    "url": "article/index.html",
    "revision": "1c83a68079d4d2627bc8f6e705673a52"
  },
  {
    "url": "article/smartjack.html",
    "revision": "79595d200c5c4004fbdf3780110d9c22"
  },
  {
    "url": "article/spring-react.html",
    "revision": "e75ac126a96b33d1dcf0c56e3d5a159f"
  },
  {
    "url": "article/spring-vue.html",
    "revision": "a96196579ffb2bbc2bf9a74c4dc1f66f"
  },
  {
    "url": "assets/css/0.styles.a32aa191.css",
    "revision": "15ea879e59097207165ff6dbd4ce3752"
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
    "url": "assets/js/11.752a0414.js",
    "revision": "871ccbb3350d30484fc464bc716239fb"
  },
  {
    "url": "assets/js/12.7f783125.js",
    "revision": "3c6516ef3c80ab7cc0584847931f102f"
  },
  {
    "url": "assets/js/13.119eb59e.js",
    "revision": "e8dbcdcfd521abc5589cebb9ead7b48d"
  },
  {
    "url": "assets/js/14.892175ff.js",
    "revision": "9638e910b64bd5886ab4e02257d3831a"
  },
  {
    "url": "assets/js/15.f9a2539b.js",
    "revision": "07dbef71b32bc4fba6628092cd853e08"
  },
  {
    "url": "assets/js/16.ae3708c5.js",
    "revision": "0484dfe675eb39e39e5ac46232f9e499"
  },
  {
    "url": "assets/js/17.03a50c8d.js",
    "revision": "5eb29f17e32880ebd1c94f8af8233b9e"
  },
  {
    "url": "assets/js/18.848dc709.js",
    "revision": "d8fc6604b31567c2bc462c481eeb9782"
  },
  {
    "url": "assets/js/19.638318ba.js",
    "revision": "505d65d1b0522b48ac383505573aaee2"
  },
  {
    "url": "assets/js/2.62b87973.js",
    "revision": "ad335b75e80308d24c23e7b8775a11ef"
  },
  {
    "url": "assets/js/20.25212c3e.js",
    "revision": "b1c25c7db4dddc21c1ad657fadcb3931"
  },
  {
    "url": "assets/js/21.f0d42f62.js",
    "revision": "7fefa19330668b4c53b744b812b0644c"
  },
  {
    "url": "assets/js/22.f6255a3f.js",
    "revision": "a45668a13934c55aada41f65036a5853"
  },
  {
    "url": "assets/js/23.e3593d09.js",
    "revision": "4a0e555601f99981e1c5b5006bd2d541"
  },
  {
    "url": "assets/js/24.ecdc41dd.js",
    "revision": "de5ef3b95ae04e33fea8c8daf0871387"
  },
  {
    "url": "assets/js/25.d6db078c.js",
    "revision": "ca121918d3f00b9e0da890e75fd5a4f0"
  },
  {
    "url": "assets/js/26.701879ca.js",
    "revision": "7b1b54c658aae12bc202ca33e267dbcc"
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
    "url": "assets/js/6.22164595.js",
    "revision": "46605dd313c8d2a0a1f79593a246355c"
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
    "url": "assets/js/app.7881df9f.js",
    "revision": "5c284fdcbdaaec3d0ebee322c1d301b7"
  },
  {
    "url": "config/index.html",
    "revision": "8b1b18ed62ce274a165f76923835bdac"
  },
  {
    "url": "ga/ga.js",
    "revision": "603bc8b8fde5f28541f46d5f6ee0fc17"
  },
  {
    "url": "images/coordinates.png",
    "revision": "e7b8f21beeaf7d1a46a2110a40841488"
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
    "url": "images/pointofview.png",
    "revision": "848e563dde39382fc0a1d77bd3bec4c2"
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
    "revision": "8e3972b3d22a2180cc43c621e57213df"
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

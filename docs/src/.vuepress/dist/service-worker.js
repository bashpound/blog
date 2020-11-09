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
    "revision": "9a399f8e5d0390a9dc96453599823c19"
  },
  {
    "url": "about/index.html",
    "revision": "55a3b2b3ea8f97ba905d4c60267bc0c5"
  },
  {
    "url": "article/flux-dataflow.html",
    "revision": "dc117416ce7e3833f76f145ade036861"
  },
  {
    "url": "article/idx.html",
    "revision": "f4119771442faf6b648eda831936e182"
  },
  {
    "url": "article/index.html",
    "revision": "fe514bf01f33d3cc15cd094585cf3f06"
  },
  {
    "url": "article/smartjack.html",
    "revision": "f1f31e13ef0363bced211548e060cbb0"
  },
  {
    "url": "article/spring-react.html",
    "revision": "e353bb9dc78bc45f5505a0f38279805a"
  },
  {
    "url": "article/spring-vue.html",
    "revision": "b4762ed497423e83d5a3ad439a069c8d"
  },
  {
    "url": "assets/css/0.styles.44913d10.css",
    "revision": "f8a036203b2c655e09da419fbc909b79"
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
    "url": "assets/js/11.55189e69.js",
    "revision": "e4ad194b50945d41482e875d4db5d142"
  },
  {
    "url": "assets/js/12.7f783125.js",
    "revision": "3c6516ef3c80ab7cc0584847931f102f"
  },
  {
    "url": "assets/js/13.e4aa2b2f.js",
    "revision": "431ad3e62b2f0b7112179342d863a14e"
  },
  {
    "url": "assets/js/14.7545e089.js",
    "revision": "b215e4dfd0e0f65d1d66112c35c4da04"
  },
  {
    "url": "assets/js/15.0404074c.js",
    "revision": "55cd3bee4299b60644e1da52c56d2588"
  },
  {
    "url": "assets/js/16.d672467a.js",
    "revision": "266a35adc710ce950ca800559db203e8"
  },
  {
    "url": "assets/js/17.21c0d294.js",
    "revision": "951c2573b38efce6b1a420299d61a3bf"
  },
  {
    "url": "assets/js/18.ab69a4a1.js",
    "revision": "8e75bd74e722a68758f692895bffcddc"
  },
  {
    "url": "assets/js/19.599bedb5.js",
    "revision": "59099fc46c88f9798d1a1417be259527"
  },
  {
    "url": "assets/js/2.62b87973.js",
    "revision": "ad335b75e80308d24c23e7b8775a11ef"
  },
  {
    "url": "assets/js/20.e4becced.js",
    "revision": "5a1a46abd2015464844a8f3411ed5798"
  },
  {
    "url": "assets/js/21.8a4d3147.js",
    "revision": "592591157b879bb477bbc123ecbe3fa0"
  },
  {
    "url": "assets/js/22.5ade9cfc.js",
    "revision": "fb40e9a5cc7600b158dcf744b8cdffcc"
  },
  {
    "url": "assets/js/23.35d099d1.js",
    "revision": "2f9a8bc971ab4fff056ce162321182f6"
  },
  {
    "url": "assets/js/24.bfdaa502.js",
    "revision": "faaf759fb89d6c7e51fc824b68aefeb0"
  },
  {
    "url": "assets/js/25.3c19d53c.js",
    "revision": "a5516461fd34f13e9ecf8c75a764ba1b"
  },
  {
    "url": "assets/js/3.06564547.js",
    "revision": "a64487fbbb38666771fca78ea328db00"
  },
  {
    "url": "assets/js/4.878a42b7.js",
    "revision": "0185ece1d7c2cd294f4fd11acdaa19a7"
  },
  {
    "url": "assets/js/5.817caeb5.js",
    "revision": "bda7ea76301415962a2938281d33be14"
  },
  {
    "url": "assets/js/6.54878dd9.js",
    "revision": "7e94bc912ce5c6ecac0f98d3de62ac10"
  },
  {
    "url": "assets/js/7.d2a6556f.js",
    "revision": "71ce9cfbf54943bf2644f008d2ff3663"
  },
  {
    "url": "assets/js/8.362a7653.js",
    "revision": "655c2cc0d2f1821088c8ca4efc80b59c"
  },
  {
    "url": "assets/js/9.6d43baac.js",
    "revision": "0eedd39a9ac3d6c2b07a8958d875cecc"
  },
  {
    "url": "assets/js/app.46370eb3.js",
    "revision": "cff5e2398b3e5fa661d3b1ccf0358cec"
  },
  {
    "url": "config/index.html",
    "revision": "cb95fa9e488aec1c8760bad466bcc294"
  },
  {
    "url": "ga/ga.js",
    "revision": "603bc8b8fde5f28541f46d5f6ee0fc17"
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
    "revision": "d7c8122aeed4eb0e4126a9ab44ae4bee"
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

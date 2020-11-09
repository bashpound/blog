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
    "revision": "32122a0ec49836ff62754b6a7ecf02f2"
  },
  {
    "url": "about/index.html",
    "revision": "7db568c6507a0c7799c898ba7fdda546"
  },
  {
    "url": "article/flux-dataflow.html",
    "revision": "beb9b963783c420be899a9beec00a80b"
  },
  {
    "url": "article/idx.html",
    "revision": "42b4b5d4663720e0002358b3e2d103e4"
  },
  {
    "url": "article/index.html",
    "revision": "a8ef366fe931642f88aaca7227c7efab"
  },
  {
    "url": "article/smartjack.html",
    "revision": "cef5a4711fac26e93f48454988609ae3"
  },
  {
    "url": "article/spring-react.html",
    "revision": "d35e3b321aeb10e0bd9491f55a283a08"
  },
  {
    "url": "article/spring-vue.html",
    "revision": "9379d2272c8be3e7b44aeb713131a13f"
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
    "url": "assets/js/14.892175ff.js",
    "revision": "9638e910b64bd5886ab4e02257d3831a"
  },
  {
    "url": "assets/js/15.f9a2539b.js",
    "revision": "07dbef71b32bc4fba6628092cd853e08"
  },
  {
    "url": "assets/js/16.febd86b2.js",
    "revision": "9083b19b7b1ee8fd8fe6a381e9b407c4"
  },
  {
    "url": "assets/js/17.6e4049a2.js",
    "revision": "d4ead5a849858ec1181c6f57391d29d1"
  },
  {
    "url": "assets/js/18.c6fe4dd4.js",
    "revision": "7959b6abbd3f7cecffdb6f1910dda52b"
  },
  {
    "url": "assets/js/19.288f6701.js",
    "revision": "fcbf76079e28f3540738d9577e8130b1"
  },
  {
    "url": "assets/js/2.62b87973.js",
    "revision": "ad335b75e80308d24c23e7b8775a11ef"
  },
  {
    "url": "assets/js/20.dd775552.js",
    "revision": "bb152d9f278ffd12f89a60551f4016da"
  },
  {
    "url": "assets/js/21.762494ab.js",
    "revision": "c177792a13351fa46abdaef757e9a554"
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
    "url": "assets/js/25.7676239d.js",
    "revision": "163167e52281046313a50140796259b4"
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
    "url": "assets/js/6.54878dd9.js",
    "revision": "7e94bc912ce5c6ecac0f98d3de62ac10"
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
    "url": "assets/js/app.aca3ae5f.js",
    "revision": "d61345edd3cae966d83741af504a3869"
  },
  {
    "url": "config/index.html",
    "revision": "4e1967d3acb25b46d83efeca74d587df"
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
    "revision": "d53b6e8f4bb3e76ac4173c91f65bb177"
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

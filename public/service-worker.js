if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let s = Promise.resolve();
      return (
        n[e] ||
          (s = new Promise(async (s) => {
            if ("document" in self) {
              const n = document.createElement("script");
              (n.src = e), document.head.appendChild(n), (n.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!n[e]) throw new Error(`Module ${e} didn’t register its module`);
          return n[e];
        })
      );
    },
    s = (s, n) => {
      Promise.all(s.map(e)).then((e) => n(1 === e.length ? e[0] : e));
    },
    n = { require: Promise.resolve(s) };
  self.define = (s, i, c) => {
    n[s] ||
      (n[s] = Promise.resolve().then(() => {
        let n = {};
        const t = { uri: location.origin + s.slice(1) };
        return Promise.all(
          i.map((s) => {
            switch (s) {
              case "exports":
                return n;
              case "module":
                return t;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = c(...e);
          return n.default || (n.default = s), n;
        });
      }));
  };
}
define("./service-worker.js", ["./workbox-ea903bce"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/WbBN9MbdTmN-OAcsHtySh/_buildManifest.js",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/WbBN9MbdTmN-OAcsHtySh/_ssgManifest.js",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/chunks/109.1aa189705ccb43247bb9.js",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/chunks/127-b8700369e782712967e5.js",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/chunks/176.931f44877dde7537e420.js",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/chunks/1bfc9850.a02f867f9de72a24e20d.js",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/chunks/293.4fd65fa891105e4a9ce7.js",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/chunks/344.17dd1553dabd63f393d1.js",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/chunks/38-3a1b8de2af1f01d327e8.js",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/chunks/54.0b291476e2e68e66f80a.js",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/chunks/548.ee650595075d5dcdb715.js",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/chunks/6728d85a.d2a36e36744f029734a1.js",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/chunks/714-db004e109763ea6efe6c.js",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/chunks/845.3ad2093d4a02f0deff4f.js",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/chunks/850.4bfc9255dc40402203e3.js",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/chunks/879.df2e6e54c38f73063511.js",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/chunks/929.0f865eef0e467f5f578c.js",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/chunks/95b64a6e.d983bbc0867897f86d74.js",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/chunks/981-fe831f72efa2b8459ed5.js",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/chunks/commons-1d440055d34e7d1dbf88.js",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/chunks/d0447323.c71ade820edd863b6fc6.js",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/chunks/framework-c93ed74a065331c4bd75.js",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/chunks/main-88211a2901518b764083.js",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/chunks/pages/404-8897806309a9c55dadfa.js",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/chunks/pages/_app-16ac4bda7e11195f378d.js",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/chunks/pages/_error-91ee45bda8a4adb5406c.js",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/chunks/pages/article/%5Buid%5D-7da3a805e4b6b824477e.js",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/chunks/pages/category/%5Bcategory%5D-6cf9d034c28b710683b7.js",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/chunks/pages/index-db5e8290fdf3bee756b8.js",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/chunks/pages/tag/%5Btag%5D-d05ee67841990e416aca.js",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/chunks/webpack-7c8114bc126fa06942cd.js",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/css/5aa65d68d44e3b06530c.css",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/css/c4767471f4d2fd445513.css",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/media/CeraRoundPro-Bold.d5d5f0d75db4717277ec87c6f3e05309.woff",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/media/CeraRoundPro-Light.7350cc889a4ac294f13c3da2f831e001.woff",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/media/CeraRoundPro-Medium.647ae5a91bb7dba38f076264c7b0284c.woff",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/_next/static/media/CeraRoundPro-Regular.51f02b1b1e211d8d9d8af32f39147068.woff",
          revision: "WbBN9MbdTmN-OAcsHtySh",
        },
        {
          url: "/android-chrome-192x192.png",
          revision: "6b24935cad0bcbb9475e8a7387c2f904",
        },
        {
          url: "/android-chrome-512x512.png",
          revision: "5c43a0f3dde47e793e75e79947f8819f",
        },
        {
          url: "/apple-touch-icon.png",
          revision: "1cf9f42b743616c46addacaf2b6351bd",
        },
        {
          url: "/browserconfig.xml",
          revision: "b12227034b6bd8dfd0f73fadabf326f8",
        },
        {
          url: "/favicon-16x16.png",
          revision: "43bbab791e2021d3067a85110d2e20e8",
        },
        {
          url: "/favicon-32x32.png",
          revision: "39c0991d72719d255511da8946cd4f60",
        },
        {
          url: "/favicon.ico",
          revision: "d4d68c44d45800a2de746d79ede8f686",
        },
        {
          url: "/fonts/CeraRoundPro-Bold.woff",
          revision: "6ecafd596e45505827b3088a49b1a132",
        },
        {
          url: "/fonts/CeraRoundPro-Light.woff",
          revision: "fbc5cf21d2d712c925680afc9d21ad37",
        },
        {
          url: "/fonts/CeraRoundPro-Medium.woff",
          revision: "f8455aed3690e53167c56bc5add9fbdd",
        },
        {
          url: "/fonts/CeraRoundPro-Regular.woff",
          revision: "6b2e6fb69972e2f4611f85c7785cdfe1",
        },
        {
          url: "/icons/icon-144x144.png",
          revision: "70e561c6b6a3de7465f3854f2732f8c8",
        },
        {
          url: "/icons/icon-192x192.png",
          revision: "df20db7cf0916e483388150cff88de6a",
        },
        {
          url: "/icons/icon-256x256.png",
          revision: "0dfe5383b88887a7af8b034406bc4609",
        },
        {
          url: "/icons/icon-384x384.png",
          revision: "90f1baa420f17c9c9981e7e556b8e0ea",
        },
        {
          url: "/icons/icon-48x48.png",
          revision: "5065183dc3fe7c5a459f71597f5d27e8",
        },
        {
          url: "/icons/icon-512x512.png",
          revision: "f73b196c8f899418a92d065a62e685f6",
        },
        {
          url: "/icons/icon-72x72.png",
          revision: "fbf20079e5878dd7d1658b95f9d951c1",
        },
        {
          url: "/icons/icon-96x96.png",
          revision: "8ad7e16e28700588c25f2a69ed7dc17a",
        },
        {
          url: "/manifest.webmanifest",
          revision: "8f0e55453fc2895e4027bb4e6a773e08",
        },
        {
          url: "/mstile-150x150.png",
          revision: "e7d4efa5883769a08ca00809a7159801",
        },
        {
          url: "/page-not-found.jpg",
          revision: "f6f9d72164b1b691ea40628f5990942d",
        },
        {
          url: "/page-not-found.webp",
          revision: "23356ad69b23dff4facdf21603e61288",
        },
        {
          url: "/prismic-icon.jpg",
          revision: "0cccc655d4f0b1ad6faf4e5055e855dc",
        },
        {
          url: "/prismic-icon.webp",
          revision: "9f147356365401eadd47c5f412a0e5e8",
        },
        {
          url: "/safari-pinned-tab.svg",
          revision: "7bf6dea24d77f5587b199bbfe7cc3959",
        },
        {
          url: "/site_image.png",
          revision: "d88ed2f16319572c9daec511883225de",
        },
        {
          url: "/vercel.svg",
          revision: "9082e95300e5ca7011c6e3e5e3a76eb7",
        },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: i,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|mp4)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-media-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 3600,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    );
});

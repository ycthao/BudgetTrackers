const CACHE_NAME = "static-cache";
const DATA_CACHE_NAME = "data-cache";
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/index.js",
  "/manifest.webmanifest",
  "/styles.css",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
];

// install
self.addEventListener("install", function (evt) {
  // pre cache all static assets
  evt.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE)));

  self.skipWaiting();
});

// activate
self.addEventListener("activate", function (evt) {});

// fetch
self.addEventListener("fetch", function (evt) {});

// respond
evt.respondWith(
  caches.open(CACHE_NAME).then((caches) => {
    return caches.match(evt.request).then((response) => {
      return response || fetch(evt.request);
    });
  })
);

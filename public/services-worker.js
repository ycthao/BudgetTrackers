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
self.addEventListener("install", function (evt) {});

// activate
self.addEventListener("activate", function (evt) {});

// fetch
self.addEventListener("fetch", function (evt) {});

// respond
evt.respondWith();

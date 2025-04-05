
const CACHE_NAME = 'nudel-cache-v1';
const urlsToCache = [
  'nudelinventur.html',
  'manifest.json',
  'icon-192.png',
  'icon-512.png',
  'https://unpkg.com/html5-qrcode'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

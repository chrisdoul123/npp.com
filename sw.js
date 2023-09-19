sw.js
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('my-cache')
      .then(cache => cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/scripts.js',
      ]))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => cachedResponse || fetch(event.request))
  );
});

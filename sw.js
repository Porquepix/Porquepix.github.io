self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('alexis-andrieu').then(function(cache) {
      return cache.addAll([
        '/',
        'index.html',
        'app.css',
        'app.js',
        'logo.png'
      ]);
    })
  );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
        return fetch(event.request);
      // return response || fetch(event.request);
    })
  );
});

var CACHE_NAME = 'alexis-andrieu';
var URL_TO_CACHE = [
    '/',
    'index.html',
    'app.css',
    'app.js',
    'logo.png'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(URL_TO_CACHE);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            console.log(response);
            return response || fetch(event.request);
        })
    );
});

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
        caches.open(CACHE_NAME)
        .then(function(cache) {
            return cache.match(event.request);
        })
        .then(function(response) {
            if (response) return response;
            console.log(event.request.url)
            return fetch(event.request);
        })
    );
});

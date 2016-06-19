'use strict';

//https://developers.google.com/web/fundamentals/getting-started/push-notifications/step-03

// Register the service worker
if ('serviceWorker' in navigator) {
    console.log('Service Worker is supported');
    navigator.serviceWorker.register('sw.js').then(function(reg) {
        console.log("Service Worker Registered");
    }).catch(function(err) {
        console.log(err);
    });
}
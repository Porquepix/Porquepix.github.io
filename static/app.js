'use strict';

// Register the service worker
if ('serviceWorker' in navigator) {
    console.log('Service Worker is supported');
    navigator.serviceWorker.register('/sw.js').then(function(reg) {
        console.log('Registration worked!');
    }).catch(function(error) {
        console.log('Registration failed!', error);
    });
}
'use strict';

// Register the service worker
if (navigator.serviceWorker) {
    console.log('Service Worker is supported');
    navigator.serviceWorker.register('/sw.js').then(function(reg) {
        reg.onupdatefound = function () {
            displayMessageOnInstall(reg);
        }
    }).catch(function(err) {
        console.log(err);
    });

    var removeMessageOnInstall = function() {
        document.getElementById('sw-installed').classList.remove('sw-show');
    };

    var displayMessageOnInstall = function(reg) {
        var installingWorker = reg.installing;
        installingWorker.onstatechange = function() {
            if (installingWorker.state == 'installed') {
                if (!navigator.serviceWorker.controller) {
                    document.getElementById('sw-installed').classList.add('sw-show');
                    setTimeout(removeMessageOnInstall, 6000);
                }
            }
        }
    };

}

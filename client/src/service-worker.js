// console.log("Hi from your service-worker.js file! ECOM MOBILE");

// const FILES_TO_CACHE = [
//     "/",
//     "./",
//     "/index.html",
//     "/offline.html",
//     "/favicon.ico",
//     "/manifest.webmanifest",
//     "/assets/css/App.css",
//     "/assets/images/icons/icon-72x72.png",
//     "/assets/images/icons/icon-96x96.png",
//     "/assets/images/icons/icon-128x128.png",
//     "/assets/images/icons/icon-144x144.png",
//     "/assets/images/icons/icon-152x152.png",
//     "/assets/images/icons/icon-192x192.png",
//     "/assets/images/icons/icon-384x384.png",
//     "/assets/images/icons/icon-512x512.png",
//     "/assets/images/slide1.jpg",
//     "/assets/images/slide2.jpg",
//     "/assets/images/slide3.jpg",
//     "/assets/images/headshot1.jpg",
//     "/assets/images/headshot2.jpg",
//     "/assets/images/headshot3.jpg",
//     "/assets/js/loadapi.js"
// ]

// const CACHE_NAME = "static-cache-v2";
// const DATA_CACHE_NAME = "data-cache-v1";

// // install
// self.addEventListener("install", function (evt) {
//     evt.waitUntil(
//         caches.open(CACHE_NAME).then(cache => {
//             console.log("Your files were pre-cached successfully!");
//             return cache.addAll(FILES_TO_CACHE);
//         })
//     );

//     self.skipWaiting();
// });

// self.addEventListener("activate", function (evt) {
//     evt.waitUntil(
//         caches.keys().then(keyList => {
//             return Promise.all(
//                 keyList.map(key => {
//                     if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
//                         console.log("Removing old cache data", key);
//                         return caches.delete(key);
//                     }
//                 })
//             );
//         })
//     );

//     self.clients.claim();
// });

// // fetch
// self.addEventListener("fetch", function (evt) {
//     if (evt.request.url.includes("/api/")) {
//         evt.respondWith(
//             caches.open(DATA_CACHE_NAME).then(cache => {
//                 return fetch(evt.request)
//                     .then(response => {
//                         // If the response was good, clone it and store it in the cache.
//                         if (response.status === 200) {
//                             cache.put(evt.request.url, response.clone());
//                         }

//                         return response;
//                     })
//                     .catch(err => {
//                         // Network request failed, try to get it from the cache.
//                         return cache.match(evt.request);

//                     });
//             }).catch(err => {
//                 console.log(err)
//             })
//         );

//         return;
//     }

//     self.addEventListener('fetch', (event) => {
//         if (event.request.method === 'GET') {
//             event.respondWith(
//                 caches.match(event.request)
//                     .then((cached) => {
//                         var networked = fetch(event.request)
//                             .then((response) => {
//                                 let cacheCopy = response.clone()
//                                 caches.open(CACHE_NAME)
//                                     .then(cache => cache.put(event.request, cacheCopy))
//                                 return response;
//                             })
//                             .catch(() => caches.match(offlinePage));
//                         return cached || networked;
//                     })
//             )
//         }
//         return;
//     });


//     evt.respondWith(
//         caches.open(CACHE_NAME).then(cache => {
//             return cache.match(evt.request).then(response => {
//                 return response || fetch(evt.request);
//             });
//         })
//     );
// });

// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read http://bit.ly/CRA-PWA

const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function register(config) {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        // The URL constructor is available in all browsers that support SW.
        const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
        if (publicUrl.origin !== window.location.origin) {
            // Our service worker won't work if PUBLIC_URL is on a different origin
            // from what our page is served on. This might happen if a CDN is used to
            // serve assets; see https://github.com/facebook/create-react-app/issues/2374
            return;
        }

        window.addEventListener('load', () => {
            const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

            if (isLocalhost) {
                // This is running on localhost. Let's check if a service worker still exists or not.
                checkValidServiceWorker(swUrl, config);

                // Add some additional logging to localhost, pointing developers to the
                // service worker/PWA documentation.
                navigator.serviceWorker.ready.then(() => {
                    console.log(
                        'This web app is being served cache-first by a service ' +
                        'worker. To learn more, visit http://bit.ly/CRA-PWA'
                    );
                });
            } else {
                // Is not localhost. Just register service worker
                registerValidSW(swUrl, config);
            }
        });
    }
}

function registerValidSW(swUrl, config) {
    navigator.serviceWorker
        .register(swUrl)
        .then(registration => {
            registration.onupdatefound = () => {
                const installingWorker = registration.installing;
                if (installingWorker == null) {
                    return;
                }
                installingWorker.onstatechange = () => {
                    if (installingWorker.state === 'installed') {
                        if (navigator.serviceWorker.controller) {
                            // At this point, the updated precached content has been fetched,
                            // but the previous service worker will still serve the older
                            // content until all client tabs are closed.
                            console.log(
                                'New content is available and will be used when all ' +
                                'tabs for this page are closed. See http://bit.ly/CRA-PWA.'
                            );

                            // Execute callback
                            if (config && config.onUpdate) {
                                config.onUpdate(registration);
                            }
                        } else {
                            // At this point, everything has been precached.
                            // It's the perfect time to display a
                            // "Content is cached for offline use." message.
                            console.log('Content is cached for offline use.');

                            // Execute callback
                            if (config && config.onSuccess) {
                                config.onSuccess(registration);
                            }
                        }
                    }
                };
            };
        })
        .catch(error => {
            console.error('Error during service worker registration:', error);
        });
}

function checkValidServiceWorker(swUrl, config) {
    // Check if the service worker can be found. If it can't reload the page.
    fetch(swUrl)
        .then(response => {
            // Ensure service worker exists, and that we really are getting a JS file.
            const contentType = response.headers.get('content-type');
            if (
                response.status === 404 ||
                (contentType != null && contentType.indexOf('javascript') === -1)
            ) {
                // No service worker found. Probably a different app. Reload the page.
                navigator.serviceWorker.ready.then(registration => {
                    registration.unregister().then(() => {
                        window.location.reload();
                    });
                });
            } else {
                // Service worker found. Proceed as normal.
                registerValidSW(swUrl, config);
            }
        })
        .catch(() => {
            console.log(
                'No internet connection found. App is running in offline mode.'
            );
        });
}

export function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registration => {
            registration.unregister();
        });
    }
}
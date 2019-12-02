console.log("Hi from your service-worker.js file! ECOM MOBILE");

const FILES_TO_CACHE = [
    "/",
    "./",
    "/index.html",
    "/offline.html",
    "/favicon.ico",
    "/manifest.webmanifest",
    "/assets/css/App.css",
    "/assets/images/icons/icon-72x72.png",
    "/assets/images/icons/icon-96x96.png",
    "/assets/images/icons/icon-128x128.png",
    "/assets/images/icons/icon-144x144.png",
    "/assets/images/icons/icon-152x152.png",
    "/assets/images/icons/icon-192x192.png",
    "/assets/images/icons/icon-384x384.png",
    "/assets/images/icons/icon-512x512.png",
    "/assets/images/slide1.jpg",
    "/assets/images/slide2.jpg",
    "/assets/images/slide3.jpg",
    "/assets/images/headshot1.jpg",
    "/assets/images/headshot2.jpg",
    "/assets/images/headshot3.jpg",
    "/assets/js/loadapi.js"
]

const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";

// install
self.addEventListener("install", function (evt) {
    evt.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("Your files were pre-cached successfully!");
            return cache.addAll(FILES_TO_CACHE);
        })
    );

    self.skipWaiting();
});

self.addEventListener("activate", function (evt) {
    evt.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(
                keyList.map(key => {
                    if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
                        console.log("Removing old cache data", key);
                        return caches.delete(key);
                    }
                })
            );
        })
    );

    self.clients.claim();
});

// fetch
self.addEventListener("fetch", function (evt) {
    if (evt.request.url.includes("/api/")) {
        evt.respondWith(
            caches.open(DATA_CACHE_NAME).then(cache => {
                return fetch(evt.request)
                    .then(response => {
                        // If the response was good, clone it and store it in the cache.
                        if (response.status === 200) {
                            cache.put(evt.request.url, response.clone());
                        }

                        return response;
                    })
                    .catch(err => {
                        // Network request failed, try to get it from the cache.
                        return cache.match(evt.request);

                    });
            }).catch(err => {
                console.log(err)
            })
        );

        return;
    }

    self.addEventListener('fetch', (event) => {
        if (event.request.method === 'GET') {
            event.respondWith(
                caches.match(event.request)
                    .then((cached) => {
                        var networked = fetch(event.request)
                            .then((response) => {
                                let cacheCopy = response.clone()
                                caches.open(CACHE_NAME)
                                    .then(cache => cache.put(event.request, cacheCopy))
                                return response;
                            })
                            .catch(() => caches.match(offlinePage));
                        return cached || networked;
                    })
            )
        }
        return;
    });


    evt.respondWith(
        caches.open(CACHE_NAME).then(cache => {
            return cache.match(evt.request).then(response => {
                return response || fetch(evt.request);
            });
        })
    );
});
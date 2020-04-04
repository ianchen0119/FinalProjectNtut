importScripts("precache-manifest.60e564d97461d2ad5ba410d2dd79e29b.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('install', (event) => {
    console.log('Version installing', event);
 
    // event.waitUntil(
        // caches.open("static-v1").then(cache => cache.add("https://kaiyouhu.github.io/TMESIS/dist/img/TMESIS-logo.35b33ef8.png"))
    // );
});
 
self.addEventListener('activate', (event) => {
    console.log('Version now ready to handle',event);
});
 
self.addEventListener("fetch", event => {
    const url = new URL(event.request.url);
    console.log('fetch', event.request);
})
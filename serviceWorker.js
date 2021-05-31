self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["/maths_masters/img/logo192.png"])
        })
    );
 });
 
 
 self.addEventListener("fetch", e => {
     e.respondWith(
         caches.match(e.request).then(response => {
             return response || fetch(e.request);
         })
     );
 })
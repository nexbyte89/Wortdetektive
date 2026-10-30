const CACHE='wortdetektive-v0.9';
const FILES=['./','index.html','manifest.webmanifest','impressum.html','datenschutz.html','icons/icon.svg','icons/icon-192.png','icons/icon-512.png','icons/apple-touch-icon.png',
'fonts/baloo-2-latin-600-normal.woff2','fonts/baloo-2-latin-700-normal.woff2','fonts/baloo-2-latin-800-normal.woff2','fonts/lexend-latin-400-normal.woff2','fonts/lexend-latin-500-normal.woff2','fonts/lexend-latin-600-normal.woff2'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
 e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html'))))});

const CACHE_VERSION = 'dunya-v1';
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const DYNAMIC_CACHE = `${CACHE_VERSION}-dynamic`;
const MAX_CACHE_ITEMS = 50;

const STATIC_ASSETS = [
  '/',
  '/offline.html',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.log('Cache install failed:', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== STATIC_CACHE && key !== DYNAMIC_CACHE)
          .map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  
  if (request.method !== 'GET') return;
  
  if (request.url.includes('/api/')) {
    event.respondWith(
      fetch(request).catch(() => {
        return new Response(JSON.stringify({ error: 'Offline' }), {
          headers: { 'Content-Type': 'application/json' }
        });
      })
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(request).then((response) => {
        if (
          !response ||
          response.status !== 200 ||
          response.type === 'error' ||
          request.url.includes('chrome-extension') ||
          request.url.includes('googletagmanager') ||
          request.url.includes('facebook')
        ) {
          return response;
        }

        const responseToCache = response.clone();

        caches.open(DYNAMIC_CACHE).then((cache) => {
          cache.put(request, responseToCache);
          
          cache.keys().then((keys) => {
            if (keys.length > MAX_CACHE_ITEMS) {
              cache.delete(keys[0]);
            }
          });
        });

        return response;
      }).catch(() => {
        return caches.match('/offline.html') || new Response('Offline', { status: 503 });
      });
    })
  );
});

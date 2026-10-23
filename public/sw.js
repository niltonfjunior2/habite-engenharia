/**
 * Service Worker — Habite Engenharia PWA
 * Estratégia: Stale-While-Revalidate para navegação e assets com fallback offline
 */

const CACHE_NAME = 'habite-pwa-v1';

const STATIC_PRECACHE = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/assets/favicon.svg',
  '/icons/icon.svg',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/icons/apple-touch-icon.png',
  '/assets/logo-para-site.webp',
  '/assets/logo-habite-site-quem-somos.webp',
  '/assets/servicos-regularizacao2.webp',
  '/assets/servico-combate-e-prevencao-de-incendio.webp',
  '/assets/divisa-branco-seta.webp'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_PRECACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Não interferir em APIs externas ou URLs do WhatsApp
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          })
          .catch(() => {
            // Em caso de falha de rede e sem cache, se for navegação, retorna a raiz
            if (event.request.mode === 'navigate') {
              return cache.match('/index.html') || cache.match('/');
            }
          });

        return cachedResponse || fetchPromise;
      });
    })
  );
});

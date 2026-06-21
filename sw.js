const CACHE_NAME = 'stockflow-v1';
const STATIC_ASSETS = [
  '/StockFlow/',
  '/StockFlow/index.html',
  '/StockFlow/css/app.css',
  '/StockFlow/css/components.css',
  '/StockFlow/css/print.css',
  '/StockFlow/js/app.js',
  '/StockFlow/js/firebase.js',
  '/StockFlow/js/auth.js',
  '/StockFlow/js/modules/dashboard.js',
  '/StockFlow/js/modules/products.js',
  '/StockFlow/js/modules/purchases.js',
  '/StockFlow/js/modules/sales.js',
  '/StockFlow/js/modules/customers.js',
  '/StockFlow/js/modules/suppliers.js',
  '/StockFlow/js/modules/reports.js',
  '/StockFlow/js/modules/barcode.js',
  '/StockFlow/js/modules/receipt.js',
  '/StockFlow/js/utils/csv.js',
  '/StockFlow/js/utils/charts.js',
  '/StockFlow/js/utils/currency.js',
  '/StockFlow/js/utils/validators.js',
  '/StockFlow/js/utils/alerts.js',
];

const CDN_CACHE = 'stockflow-cdn-v1';
const CDN_ORIGINS = [
  'https://esm.run',
  'https://cdn.jsdelivr.net',
  'https://unpkg.com',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('[SW] Falha ao cachear alguns assets:', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== CACHE_NAME && k !== CDN_CACHE)
          .map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // CDN — Cache First
  if (CDN_ORIGINS.some((o) => request.url.startsWith(o))) {
    event.respondWith(
      caches.open(CDN_CACHE).then(async (cache) => {
        const cached = await cache.match(request);
        if (cached) return cached;
        const fresh = await fetch(request);
        cache.put(request, fresh.clone());
        return fresh;
      })
    );
    return;
  }

  // App shell — Cache First, fallback network
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(request).then((cached) => {
        return cached || fetch(request).then((fresh) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, fresh.clone());
            return fresh;
          });
        });
      })
    );
  }
});

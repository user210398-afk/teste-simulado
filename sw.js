const CACHE_NAME = 'simulados-med-v1';

// Instalação do Service Worker
self.addEventListener('install', (evt) => {
  self.skipWaiting();
});

// Ativação e limpeza de caches antigos
self.addEventListener('activate', (evt) => {
  self.clients.claim();
});

// Interceção de requisições
self.addEventListener('fetch', (evt) => {
  evt.respondWith(
    fetch(evt.request).catch(() => caches.match(evt.request))
  );
});

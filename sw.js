// Nome della cache (puoi cambiarlo quando aggiorni la grafica dell'index/manifest)
const CACHE_NAME = 'raffreddamento-pacchi-v1';

// Forza il service worker appena installato a diventare subito attivo
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Prende immediatamente il controllo della pagina senza aspettare il riavvio del browser
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Intercetta le richieste di rete (lascia passare l'iframe verso Google Script)
self.addEventListener('fetch', (event) => {
  // Lasciamo che le richieste vadano direttamente alla rete
  // Nota: l'iframe con Google Apps Script NON può essere salvato in cache per motivi di sicurezza
  return;
});

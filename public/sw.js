self.addEventListener("install", function (event) {
  console.log("Hello world from the Service Worker");
});

self.addEventListener('activate', (event) => {
  console.log('activate');
});

self.addEventListener('fetch', (event) => {
  console.log('SW_FETCH')
  const requestUrl = new URL(event.request.url);
  if (requestUrl.pathname.includes('_next/data')) {
    console.log('PREVENT_SW_FETCH')
    event.respondWith(new Response('', { status: 200 }));
    return;
  }
  event.respondWith(fetch(event.request));
});
const CACHE_NAME = "nextgrid-style-v1";

const OFFLINE_URL = "/offline.html";

const ASSETS = [
  "/",
  "/offline.html",
  "/manifest.json",
];

/* INSTALL */
self.addEventListener("install", (event) => {
  console.log("Service Worker installed");

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );

  self.skipWaiting();
});

/* ACTIVATE */
self.addEventListener("activate", (event) => {
  console.log("Service Worker activated");

  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );

  self.clients.claim();
});

/* FETCH */
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return (
        cachedResponse ||
        fetch(event.request)
          .then((networkResponse) => {
            const responseClone =
              networkResponse.clone();

            caches.open(CACHE_NAME).then((cache) => {
              cache.put(
                event.request,
                responseClone
              );
            });

            return networkResponse;
          })
          .catch(() => {
            return caches.match(
              OFFLINE_URL
            );
          })
      );
    })
  );
});

/* BACKGROUND SYNC */
self.addEventListener("sync", (event) => {
  if (event.tag === "nextgrid-sync") {
    event.waitUntil(
      (async () => {
        console.log(
          "Background Sync Triggered"
        );

        try {
          await fetch("/");
        } catch (error) {
          console.log(
            "Sync failed",
            error
          );
        }
      })()
    );
  }
});

/* PERIODIC SYNC */
self.addEventListener(
  "periodicsync",
  (event) => {
    if (
      event.tag ===
      "nextgrid-periodic-sync"
    ) {
      event.waitUntil(
        (async () => {
          console.log(
            "Periodic Sync Triggered"
          );

          try {
            await fetch("/");
          } catch (error) {
            console.log(
              "Periodic sync failed",
              error
            );
          }
        })()
      );
    }
  }
);

/* PUSH NOTIFICATIONS */
self.addEventListener("push", (event) => {
  let data = {
    title: "NextGrid Style",

    body:
      "New luxury fashion updates available.",
  };

  if (event.data) {
    data = event.data.json();
  }

  event.waitUntil(
    self.registration.showNotification(
      data.title,
      {
        body: data.body,

        icon:
          "/icons/icon-192.webp",

        badge:
          "/icons/icon-96.webp",

        vibrate: [
          200,
          100,
          200,
        ],

        data: {
          url: "/",
        },
      }
    )
  );
});

/* NOTIFICATION CLICK */
self.addEventListener(
  "notificationclick",
  (event) => {
    event.notification.close();

    event.waitUntil(
      clients.openWindow(
        event.notification.data.url || "/"
      )
    );
  }
);
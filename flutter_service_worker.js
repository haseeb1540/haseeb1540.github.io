'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d331dcd490b70f890a064e27cf08645d",
"assets/assets/appstore.png": "77ca8b6daef7f3a2c81f8266a17cd96a",
"assets/assets/banner.png": "94dceb038c5aa108653b1978784a61a8",
"assets/assets/beauty.png": "1daab0a5a499eb3f27eaab21c3ae8f2c",
"assets/assets/beverages.png": "388606a6f098724910dc38e2a6fb918d",
"assets/assets/bg.png": "1aa616acfc0a2b3c77c7debd4cbb0cca",
"assets/assets/cfg/configuration.json": "1fd57d5ebf03c3882f3d239ad87a73f6",
"assets/assets/deal_bg.png": "d8a728dc43a9a9496cedfe6c64d6433e",
"assets/assets/facebook.png": "3989df5c380e16b32e543afd7c06134e",
"assets/assets/footer_1.png": "7daf784ca2368136b7ab778c3f0b60eb",
"assets/assets/footer_2.png": "94940e6e683c695c2c02ca248d61be5e",
"assets/assets/grocery.png": "54ba7a59cdb68af905dc9f7e1db16069",
"assets/assets/instagram.png": "373086de78b5d9928c36d125b0451caf",
"assets/assets/justme_icon.png": "336933e8664636de54c6efaf6dd9248d",
"assets/assets/linkedin.png": "d68a4356d0d6502b4a3c17e9b8af8239",
"assets/assets/login_banner.png": "933d4c2b8f9589cb9096bfde72d77179",
"assets/assets/men.png": "97bb30b6f2b621b52470ea469da68edf",
"assets/assets/personal_care.png": "97456c3c24d01b7f1d031c6cf8fe3d35",
"assets/assets/playstore.png": "1f12a6762bc48d9b8718238d2da2c41d",
"assets/assets/product_1.png": "eecd002fd82ed2e35c0dfb538676fb6d",
"assets/assets/qrcode.png": "513f496cef27655126d1a02456bddab6",
"assets/assets/special_deal.png": "9c84192c347f3f6931b20aaafaaaf458",
"assets/assets/splash.jpg": "5017abd8ede5c5173e35bb845e0e7293",
"assets/assets/top_rated.png": "0172f8dc43d2b6becb1e70693fd6f958",
"assets/assets/twitter.png": "84056c4bbbf39e186c83b51385ceb1d6",
"assets/assets/veg.png": "bff6c72fe9a583087363039c2963a575",
"assets/assets/weak_deal.png": "bdebae84173f9325d9cf07859d267457",
"assets/assets/women.png": "1172e9317c46791fe9ed968f37b70481",
"assets/assets/youtube.png": "a5b2ea8094ba132b1b40bb406a59e241",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "b3c27791fea194b245c8e2c983d1d229",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "967255d761f961852477e37072fbae16",
"/": "967255d761f961852477e37072fbae16",
"main.dart.js": "8810c6234eac2fca597174999a35bc00",
"manifest.json": "4b9de85c116de6b72017882b7bd4c499",
"version.json": "f9105f7af95f8c314f09a299deed7cd1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "bfee995fe1c9e4d3c3e1150736a9e8c0",
"assets/assets/address.png": "4c2257116e20f2b894fd2b474cf87720",
"assets/assets/amex.png": "ed4bd1f9131d3ae2b03f0cad69a10ec9",
"assets/assets/appstore.png": "c8a2623fac5d67c02d63ac0f3956b57f",
"assets/assets/beverages.png": "388606a6f098724910dc38e2a6fb918d",
"assets/assets/bg.png": "1aa616acfc0a2b3c77c7debd4cbb0cca",
"assets/assets/cfg/configuration.json": "5677408081dab28e53e756c1ff34474f",
"assets/assets/deal_bg1.png": "4badd62ba72c5e48b8fb5bee44a11f6b",
"assets/assets/discover.png": "140ba92e61d14041c1d84b48fa9251b5",
"assets/assets/facebook.png": "3989df5c380e16b32e543afd7c06134e",
"assets/assets/fav.png": "6607b247e950f911b0a087889dffd25d",
"assets/assets/footer_1.png": "7daf784ca2368136b7ab778c3f0b60eb",
"assets/assets/footer_2.png": "94940e6e683c695c2c02ca248d61be5e",
"assets/assets/Fresh.png": "ab12e4c3ae019013f00401796ac93fce",
"assets/assets/google.png": "21704b07643dbbf3ce6fed5a6ae0412b",
"assets/assets/grocery.png": "54ba7a59cdb68af905dc9f7e1db16069",
"assets/assets/instagram.png": "373086de78b5d9928c36d125b0451caf",
"assets/assets/justme_banner_low.png": "f224191a153c2cb19fcd729c64cee2c4",
"assets/assets/justme_banner_low1.png": "be620872c6362a438b0726242351608d",
"assets/assets/justme_banner_low_small.png": "e5e7c28b9362ccbe4d082ed2e844136d",
"assets/assets/justme_banner_low_small_1.png": "8480ae9c1da666519390e320a58445f4",
"assets/assets/justme_icon.png": "a53d4fea259d880646f0bca844be21ac",
"assets/assets/justme_icon1.png": "336933e8664636de54c6efaf6dd9248d",
"assets/assets/linkedin.png": "d68a4356d0d6502b4a3c17e9b8af8239",
"assets/assets/location.png": "50f498cf345321f635c3ac9e3499d5bd",
"assets/assets/location_selected.png": "ca3a6a312f3143f6dc7c4d2a6b3ca2b3",
"assets/assets/login_banner.png": "320879ba35406b1d6c2ca1b1b3e6d8ef",
"assets/assets/mail.png": "bead89aeb9bc5aebdc97232ad34d62b4",
"assets/assets/mastercard.png": "bdb720988b5096fbb433f6b6f73e0b1d",
"assets/assets/men.png": "97bb30b6f2b621b52470ea469da68edf",
"assets/assets/no_image.png": "31c8b15a4bf36f5a24d648d680c083a2",
"assets/assets/orders.png": "6473012694997d012e3a41b703529066",
"assets/assets/package.png": "9aa88168e7e9b05466845caaabf1633c",
"assets/assets/package_selected.png": "cb6fb85a35045aaacab4e1edae2cb615",
"assets/assets/personal_care.png": "97456c3c24d01b7f1d031c6cf8fe3d35",
"assets/assets/playstore.png": "d3b0a1642ea2da0f791df76aeef83fee",
"assets/assets/point.png": "cd5a2603b2f9bc1bf3d10713669c5abb",
"assets/assets/product_1.png": "eecd002fd82ed2e35c0dfb538676fb6d",
"assets/assets/profile.png": "10cedfceb73a826ec64ac800c25b9003",
"assets/assets/qrcode.png": "513f496cef27655126d1a02456bddab6",
"assets/assets/returns.png": "fc90e3546a4d030998b165a474809cbd",
"assets/assets/return_order.png": "1587759ccaf246ae8c20f0a3b518f854",
"assets/assets/return_order_select.png": "1fe179d5fa3fd20dd3e7dba4416f1748",
"assets/assets/special_deal.png": "9c84192c347f3f6931b20aaafaaaf458",
"assets/assets/splash.jpeg": "0569d995a643647a9a2050cbff537c95",
"assets/assets/telephone.png": "9f7e88c9d3ffb9645da886e84bb64aed",
"assets/assets/top_rated.png": "0172f8dc43d2b6becb1e70693fd6f958",
"assets/assets/twitter.png": "84056c4bbbf39e186c83b51385ceb1d6",
"assets/assets/user.png": "361ec9deff2394543e535c9857932918",
"assets/assets/user_selected.png": "13500bc6969bccc7eeb5b945460b08c3",
"assets/assets/veg.png": "fc6395e47af8b5569c8a0f88e76471a5",
"assets/assets/visa.png": "11e2a5a719b33db2c640660386ae68c9",
"assets/assets/weak_deal.png": "bdebae84173f9325d9cf07859d267457",
"assets/assets/women.png": "1172e9317c46791fe9ed968f37b70481",
"assets/assets/youtube.png": "a5b2ea8094ba132b1b40bb406a59e241",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "8f8ad6470415642a5816dceeb11ad90f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "8032a61d7bc7e310a2c56d5ecf1595b8",
"/": "8032a61d7bc7e310a2c56d5ecf1595b8",
"main.dart.js": "cd4b7ecc568497bd88d98ae784dbed35",
"manifest.json": "4b9de85c116de6b72017882b7bd4c499",
"version.json": "9e90b87cd3c8c7722e0e168d5ea09ac9"
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

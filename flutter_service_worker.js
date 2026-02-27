'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f44b44c94103bd5be66402b20250993c",
"index.html": "dfcb7baca5d7cb13d1540611db7c9d7b",
"/": "dfcb7baca5d7cb13d1540611db7c9d7b",
"main.dart.js": "42ccf1ce533ed4b551a888a5cb27b9a1",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "570475cded466d28e2e50906b108c21f",
"icons/Icon-192.png": "570475cded466d28e2e50906b108c21f",
"icons/Icon-maskable-192.png": "570475cded466d28e2e50906b108c21f",
"icons/Icon-maskable-512.png": "570475cded466d28e2e50906b108c21f",
"icons/Icon-512.png": "570475cded466d28e2e50906b108c21f",
"manifest.json": "c1dcaf2a9116af0f6b6e47dae25d5131",
"assets/AssetManifest.json": "5da9aef163db98e4af203e4f0c16d1aa",
"assets/NOTICES": "7732b01d4e4ec704a4bcdd1d368aaeb9",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "a2a3da5d290a7b2cb14c3a36a6a3c80a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "088d57bc5172ba21afd70fcd83429955",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa0f94a2d6462cc26507cbbfb9904656",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5b29d47bd1c57e858a9c0dbdafef6566",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "39a933d232759e851916e7639bc45add",
"assets/fonts/MaterialIcons-Regular.otf": "7d42adf639fb96ef949d3945a0e13470",
"assets/assets/images/logo_SA_r.png": "570475cded466d28e2e50906b108c21f",
"assets/assets/images/coffee.png": "0a3380640f0eb6e36b694dafb7fe8e97",
"assets/assets/images/tpsu-logo.jpeg": "decd5a22fbfedab5b319d8ce17c6cb18",
"assets/assets/images/ari_head.png": "d2f74f6a3c697b85d304e74b06975627",
"assets/assets/images/ari_head.JPG": "955eee60cfbccd9f8f30500354b9ca63",
"assets/assets/images/doctor.png": "b7a983fb5bf36114133c169f66bbfef7",
"assets/assets/images/portfolio-caricature.png": "acec6010facd5c5e298e431db98e650e",
"assets/assets/images/cui.png": "287f9787968f5df14897e9066c22a388",
"assets/assets/images/ari-magic-is-happening.jpg": "c37b974cb12f1744a32b001c74ca08db",
"assets/assets/images/task.png": "62d6be2ebaef80434b114eacd9102a52",
"assets/assets/images/logo-haais.png": "b82e111ee8c2e6460ec28e28b57e2838",
"assets/assets/images/ari-with-tree.jpg": "ae57d5f4c947552e6331d8190c695a89",
"assets/assets/images/alarm.jpg": "7f8f2e55f5f47deaf440b3be64ca15d7",
"assets/assets/images/logo_SA.png": "f4a0ca29a7fb8a2ce4209733ae6bac82",
"assets/assets/images/profile-with-jobs.jpg": "1f15743a535e22e526c0727eb4b7860c",
"assets/assets/images/car.png": "ae3e0dda1da997a4e0ccd5cf1a25d2cd",
"assets/assets/images/profile.png": "1d35475ce4996f70c2bce6dc8607d077",
"assets/assets/images/chat.png": "489b7f6246ce741be85ca0d551e9d07b",
"assets/assets/images/recipe.png": "47c72988f9bb6d301948ac38877b231c",
"assets/assets/images/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/assets/images/player.png": "612730c3861b2af0a0ae161ac8a72345",
"assets/assets/languages/ja.json": "9ab6423bb3c4ae3cf1e5f43a24eb2381",
"assets/assets/languages/en.json": "d6743fd028c7ea6ffb8fa142f93a0697",
"assets/assets/languages/mn.json": "8cbb89c9dcb808c1c031d6bc1f962de9",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/icons/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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

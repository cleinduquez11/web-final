'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "eb260e9ae827821beceeed4104f0ad89",
".git/config": "ce0b45ad2c1b7318c57e23f21f61feed",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f72490006870889f8d40ebfd55ce7386",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "29f80de00f6d99d7d73f058acf2897b8",
".git/logs/refs/heads/main": "5134c1c45bdf91e1bfb95b24753ce298",
".git/objects/15/2a610741ddbc0e74977b8cfd979c9373bfab34": "88b35c1135106eefb04eb9ea516fa65c",
".git/objects/22/ac5b7f3a5a283ddc6bd445ad2b23c9f949e235": "be2fc2ba9d7d367767302f8ce31d2757",
".git/objects/55/41d15563d278b4d39cb2824953b41bf4018f5f": "b595ced9497d2e822021aff7042656de",
".git/objects/70/e4b782f9308b69c89ed1beba0ab3d5eef88944": "62e784c4473b0030f34d28fcc0c7f215",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e0/236e2707319b47282cb93c404fbd84e75d9f92": "533a136c97fe8decb050b46c97fa2e0e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/refs/heads/main": "31c4cb41a2f7c40ecc5decdf321210ec",
"assets/AssetManifest.json": "c3ea676c7cafd7ae2cb5252ae6c3b0c0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/lib/Hotlines/Assets/bfplogo.png": "1041f33065f7a056463f09b93b338b18",
"assets/lib/Hotlines/Assets/cdrrmologo.png": "d76da480a70f25eedb0ebbda344db649",
"assets/lib/Hotlines/Assets/evacmap.png": "c784075c1cfc6d8b5fda5456d5a9bb83",
"assets/lib/Hotlines/Assets/firestationmap.png": "a169c005d5885f7dd51425d561aeb011",
"assets/lib/Hotlines/Assets/mmmhlogo.png": "7a38a4ce96fa62d57755e64f9d324fac",
"assets/lib/Hotlines/Assets/mmmhmap.png": "cb5ffad4794868a400a6d5637871aa85",
"assets/lib/Hotlines/Assets/pnplogo.png": "375ca95f14d0dbd6f85235bd185ef71e",
"assets/lib/Hotlines/Assets/pnpmap.png": "73516c0360af43877d0058d85be92d7d",
"assets/lib/LoginRegister/Assets/logo.png": "497168c46e9b4737333494947b0b20fe",
"assets/lib/LoginRegister/Assets/logo_2.png": "678c0ee1741498fde720295ff7f22ff8",
"assets/lib/Notification/Assets/ColdTemperatureR1.png": "4e3d683fa8dde214a1d93c8ba2975d23",
"assets/lib/Notification/Assets/ColdTemperatureR2.png": "0bf43aaabbe0440256b3c5d469953bbf",
"assets/lib/Notification/Assets/EarthquakeSensor.png": "4928d22dd12c53b6c241316ebd8e6404",
"assets/lib/Notification/Assets/HotTemperatureR1.png": "820cd359fdc39b03373fa907812ba39c",
"assets/lib/Notification/Assets/HotTemperatureR2.png": "7efaf6eebe0f415efd80bad7583d8976",
"assets/lib/Notification/Assets/SmokeSensorR1.png": "a161163745b3d343a78af542470ea0b3",
"assets/lib/Notification/Assets/SmokeSensorR2.png": "5648ebe0dc73901889b658bb0a0ce83c",
"assets/lib/SafetyTips/Video/covid.mp4": "2f6cc019ff5f574262b8e0af6ca7bea0",
"assets/lib/SafetyTips/Video/earthquake.mp4": "eb47ab36aa023f88ebe2dabe802b386a",
"assets/lib/SafetyTips/Video/fire.mp4": "b5da4de350373d51acb393cf8d4987c8",
"assets/lib/SafetyTips/Video/flood.mp4": "8743ae0f04217b454c9f815ed9d473fd",
"assets/lib/Sensors/Assets/dht.png": "9ecf4dc36f935d79a0597b25dc4412fb",
"assets/lib/Sensors/Assets/earthquake.png": "c712731e59bf1db064f113165bf08b15",
"assets/lib/Sensors/Assets/fire.png": "0980209ad5c26f821db11a7a2c3c8778",
"assets/lib/Sensors/Assets/waterlevel.png": "91f6a326eee58bc895d882d2b0f035d1",
"assets/NOTICES": "f6082ca5a6da531b694a43b9678cf164",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "d45d231daa4c31d7d4f6dbd41a82acbb",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "1f26d800e22156b046db366aac9e122b",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ce0f916d6c9bb8ddf86ba596dc6130ae",
"/": "ce0f916d6c9bb8ddf86ba596dc6130ae",
"main.dart.js": "58ae3f922faccb4659e555c0512c8cb0",
"manifest.json": "2cf007c281d8134d0c0d6b3194ed99d7",
"version.json": "aaa0bf516757fceb5daf5d0ec3ab095e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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

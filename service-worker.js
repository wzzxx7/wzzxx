/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["E:/blog_space/wzzxx/public/2020/03/10/起步/index.html","8076d16ec917135ba6426d8e01fcec8a"],["E:/blog_space/wzzxx/public/2020/03/11/Facebook如何避免广告拦截器/ad.jpg","70e3490dfbd2b841e82d45b81739cbc1"],["E:/blog_space/wzzxx/public/2020/03/11/Facebook如何避免广告拦截器/fb_encode.gif","c5d80f78feefcf81858fcedde2da070d"],["E:/blog_space/wzzxx/public/2020/03/11/Facebook如何避免广告拦截器/index.html","9b356545f5c6b003189a2e0a9a980f2e"],["E:/blog_space/wzzxx/public/2020/03/12/分析网站的攻击日志/chart.jpg","1b5ca2e8de7e3e72eb5ac715da8576a8"],["E:/blog_space/wzzxx/public/2020/03/12/分析网站的攻击日志/cities.jpg","2b1e0546df832d3a18839e017a987774"],["E:/blog_space/wzzxx/public/2020/03/12/分析网站的攻击日志/countries.jpg","96af7d45401f29d3b9297992b384fdfa"],["E:/blog_space/wzzxx/public/2020/03/12/分析网站的攻击日志/index.html","ad94509c0097703a2fa7e35af405e085"],["E:/blog_space/wzzxx/public/2020/03/12/分析网站的攻击日志/ip_list.png","dc05eb40c45d20492c64e34c804bac42"],["E:/blog_space/wzzxx/public/2020/03/12/分析网站的攻击日志/sheel.jpg","3eee3481f21c0814a9e94afbfcf9f9b0"],["E:/blog_space/wzzxx/public/2020/03/12/分析网站的攻击日志/subdivisions.jpg","7a83a2f8a4afae302c11b77f88b3652b"],["E:/blog_space/wzzxx/public/2020/03/13/像素跟踪是如何工作的/fb-old-navy.png","b8f8278899d2320301a88876bd4d44b7"],["E:/blog_space/wzzxx/public/2020/03/13/像素跟踪是如何工作的/firefox-helpful.png","c3f042d742ff87e114223560374d60cb"],["E:/blog_space/wzzxx/public/2020/03/13/像素跟踪是如何工作的/index.html","1813f58ef4769cdd9399da4aa08fdca1"],["E:/blog_space/wzzxx/public/2020/04/08/pyqt5有疑问的一些地方/index.html","64d59815bcfb3de7ae3f30f34f1742d7"],["E:/blog_space/wzzxx/public/2020/04/08/关于代码模块化/index.html","f5c61f5e9b80bb082032a6f76952dd6a"],["E:/blog_space/wzzxx/public/2020/04/19/SQLite3-知识点汇总/index.html","1bd3c8242d1a71acacc70325ace5d71f"],["E:/blog_space/wzzxx/public/2020/04/19/python-数据类型转换/index.html","6adb0c6dcfb560d17c4f02df726344b8"],["E:/blog_space/wzzxx/public/2020/04/19/python-知识点汇总/index.html","0e9cbd339ac7a63ac326c0063cb09796"],["E:/blog_space/wzzxx/public/2020/04/19/写作即是思考-学习自信写作/class.jpg","9a613b912fdb587b29879fbba4ee488c"],["E:/blog_space/wzzxx/public/2020/04/19/写作即是思考-学习自信写作/index.html","8e23e4288aaf4b0320f8ed00eee8087a"],["E:/blog_space/wzzxx/public/2020/04/21/科技爱好者周刊资源整理1/index.html","ce66c68bb91cf95d74af6821b2745d29"],["E:/blog_space/wzzxx/public/2020/04/26/科技爱好者周刊抓取过程/index.html","d709d9665a72f940f6c9be785981f9ce"],["E:/blog_space/wzzxx/public/2020/04/26/科技爱好者周刊资源整理2/index.html","35a678b499eb2656ce417990ebde0da9"],["E:/blog_space/wzzxx/public/404.html","c63d234e6be6448afaaecd6bb9a0b44b"],["E:/blog_space/wzzxx/public/about/index.html","1ab380ab50d18025c286b9575b21fa10"],["E:/blog_space/wzzxx/public/archives/2020/03/index.html","20f67c6ff5b134db2ea01cfe3a2a016b"],["E:/blog_space/wzzxx/public/archives/2020/04/index.html","ff88255c9ba43f31ed0838d208cd5732"],["E:/blog_space/wzzxx/public/archives/2020/index.html","73819748de5f0f505eff6b2fb6d22409"],["E:/blog_space/wzzxx/public/archives/2020/page/2/index.html","4d51490ac9001e1aa178d013dc7fe470"],["E:/blog_space/wzzxx/public/archives/index.html","d057a727ff08a70c67c1d67ea7e52a33"],["E:/blog_space/wzzxx/public/archives/page/2/index.html","d057a727ff08a70c67c1d67ea7e52a33"],["E:/blog_space/wzzxx/public/categories/index.html","752be0d4fc1ffb88d3a6e102bab9cefd"],["E:/blog_space/wzzxx/public/categories/每日一译/index.html","2a0933e74312cb70bc5561cbcbb1ea48"],["E:/blog_space/wzzxx/public/categories/过往整理/index.html","1eea25b57dcbef41d002f7930dd64752"],["E:/blog_space/wzzxx/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["E:/blog_space/wzzxx/public/css/style.css","97845a3d61dbc5c6eab26e389ad9839c"],["E:/blog_space/wzzxx/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/blog_space/wzzxx/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/blog_space/wzzxx/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/blog_space/wzzxx/public/friends/index.html","e72033e6c2db32f2af3390071b3651f7"],["E:/blog_space/wzzxx/public/images/avatar.jpg","9fa618036c955c9874240ccef168d19a"],["E:/blog_space/wzzxx/public/images/load.jpg","f971542d02c4fd53b4e170d56063b2e1"],["E:/blog_space/wzzxx/public/images/logo.png","e26864c9f1c90b3f7efca6027cbabdc0"],["E:/blog_space/wzzxx/public/images/logo_bak.png","08ce12495defd96e82d0456512a70580"],["E:/blog_space/wzzxx/public/images/qq.png","c1c06449a02d4019feac2a6dd69be9a7"],["E:/blog_space/wzzxx/public/images/qzone.png","d290ce63299d7190194ed52650c8f1a5"],["E:/blog_space/wzzxx/public/images/strike.gif","2e4cd4f9ed6c6c63b182339724f1b18a"],["E:/blog_space/wzzxx/public/images/weibo.png","683d4b6e58fdb4960a34da3192e4ac7a"],["E:/blog_space/wzzxx/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/blog_space/wzzxx/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/blog_space/wzzxx/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/blog_space/wzzxx/public/index.html","ba797ba68ecb2f43c2d86d5243675083"],["E:/blog_space/wzzxx/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["E:/blog_space/wzzxx/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["E:/blog_space/wzzxx/public/js/valine.js","c5c9473e2af6ab5fe16ffbb0bd09c6a7"],["E:/blog_space/wzzxx/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["E:/blog_space/wzzxx/public/mylist/index.html","f1af19571b13efb1a24ecfe2b6534cba"],["E:/blog_space/wzzxx/public/page/2/index.html","8ebb45b3bd4631c5194253a569bb6543"],["E:/blog_space/wzzxx/public/tags/index.html","4867b4a3954b4f841075fe7cf840dc93"],["E:/blog_space/wzzxx/public/tags/pyqt5/index.html","09dac5bcc3a7f429ef865350ccb0b8f7"],["E:/blog_space/wzzxx/public/tags/python/index.html","163f5514215490d970f60f18f39ffe62"],["E:/blog_space/wzzxx/public/tags/为啥呀/index.html","c99656978b51a044edd25e9deb46288c"],["E:/blog_space/wzzxx/public/tags/像素跟踪/index.html","7ea8851aa563478f4ece44e504090f0a"],["E:/blog_space/wzzxx/public/tags/广告拦截/index.html","41a84591eb18586aac859d0ad3e2132f"],["E:/blog_space/wzzxx/public/tags/每日一译/index.html","ad606b76e027fd1d082feaa1b8626306"],["E:/blog_space/wzzxx/public/tags/点滴感悟/index.html","2bce5eb61d9652c578ef8e64e4359e81"],["E:/blog_space/wzzxx/public/tags/爬虫/index.html","748e85f81fbda6dfc5235bfd2cc3538a"],["E:/blog_space/wzzxx/public/tags/科技爱好者周刊/index.html","ef7c849e9043dc79b791af3627e4f41c"],["E:/blog_space/wzzxx/public/tags/网络安全/index.html","b60fa839b456d5692983fbf122402aec"],["E:/blog_space/wzzxx/public/tags/自定义模块/index.html","7afb5cfc235f2acd0daf31ee198a1f54"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});








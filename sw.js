/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/12/02/WuCup CTF/index.html","98e40bf71823e801e42e7d2ec142ef38"],["/2024/12/05/博客折腾日记（一）/index.html","e9aa9695866e7c5c39b90c5a2523cfe1"],["/2024/12/06/博客折腾日记（二）添加小组件/index.html","71e1ec98a6ea268f65e14fb938fc2f69"],["/2024/12/08/攻防世界前10题wp（引导模式）/index.html","28ff8726b30f9e1353f862591ac559cc"],["/2024/12/17/隼目CTF-wp/index.html","02e3895ad343c5f71f54a9ff721af68d"],["/2025/01/26/启航杯CTF/index.html","a412e84262a85cfd88ffe4a7c0914b0d"],["/2025/02/12/hgame-week1/index.html","d11af4105c5deacd7b1d73aa7413723d"],["/2025/02/18/CSS随记/index.html","67e17d7e04b06d709b9e19c9bc6cb1ec"],["/2025/02/20/hgame-week2/index.html","6f348a89ded545028e6cdca7c4982c30"],["/2025/02/23/java/index.html","3913d91dc4f1164b77f5b980b93a100d"],["/2025/02/23/博客问题/index.html","2c98c42765e01f9bcf778cc80b980fbc"],["/2025/03/05/Java拓展（偏后端）/index.html","07a230488685b3a7109e6f8a7c150812"],["/2025/03/05/vs-code美化及有关问题解决/index.html","ac51f44c281164a56a7eb2a6f6e8c5a0"],["/archives/2024/12/index.html","c66d2b4bcedb1c8e5d8278dd0121945f"],["/archives/2024/index.html","16531a6ece60a7bfe5a9c6a608f8a8d1"],["/archives/2025/01/index.html","11b541a4b2b54c8d829c52491f75f1a1"],["/archives/2025/02/index.html","4072ff5a944ccfe3e23c8184ae6bd03a"],["/archives/2025/03/index.html","578c221078fcee1f6102f591955d6520"],["/archives/2025/index.html","427f4d611e4c82733626ae83ad17f310"],["/archives/index.html","d12be408896c571eea0f4b01637c9cea"],["/archives/page/2/index.html","86a3914e6cbe521179a7b072c69711d4"],["/categories/CTF/index.html","ed237700959d32d43543930e8e59ca92"],["/categories/index.html","9fb5a0905cb52abe44bcc60e1cda11ce"],["/categories/一个web蒟蒻的成长日记/index.html","48a13e3bc04ac313f0c551f5edbbdc26"],["/categories/前端开发/index.html","08ce9a315d279aa1b8c1c304ef9b470a"],["/categories/博客折腾日记/index.html","6c9acaa60d72e5de803e4ac7469dae54"],["/categories/电脑折腾随记/index.html","1e1247b347d4c7fd586c1debd7750ee1"],["/categories/编程-？/index.html","074447d6dba836b38b53118d1ab38629"],["/css/custom.css","cd01d68160945eddfceeca510e075ea7"],["/css/font.css","dcefd3d982ce12dc126a7aac9b9de6ce"],["/css/index.css","5d33b57663567d7278ed9f257b93643d"],["/css/runtime.css","2d46d019efdcc597f21381b61099e09b"],["/css/transpancy.css","7c75b15ba4cb4d4a8a76f7ceb8a6335b"],["/css/universe.css","634bbccd301760e7e1d016c7a5512783"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/CSS1/111.png","357897b822697ba7df49c0a9c79e93ee"],["/img/CSS1/image-20250118144530-eicelmh.png","7990cd93bea65c1825d8c4db6833c37b"],["/img/CSS1/image-20250119130010-pplwgo0.png","58f23359c31cdc79b09b1170fdaea220"],["/img/CSS1/image-20250218103506-n2kwhki.png","307da54432142fb965423f5befdacfce"],["/img/CSS1/image-20250218185201-4gbqja3.png","f92c510934c5f0754184edb840e7efed"],["/img/CSS1/image-20250218190303-0pce4sk.png","1f8470fbf8af1ff40291dba834cf48fd"],["/img/CSS1/image-20250218190911-8ki56wa.png","af89c7159d281e4539541f5af13b08d0"],["/img/CSS1/image-20250218210349-u79f62a.png","6a62d952f95b8618ba8c614d83add3ad"],["/img/CSS1/image-20250218211113-t8qcwjj.png","baec6340782fef6b3ac14462491f4bbc"],["/img/CSS1/image-20250218211257-ax7ym6e.png","21961d478721dace82d7bea980c4710c"],["/img/CSS1/image-20250218211521-96a8ag5.png","fe1917073525e2ad3575c786182a5d74"],["/img/CSS1/image-20250218211913-bjd6u9a.png","2f4daf35936381688a8666b743d48264"],["/img/CSS1/image-20250218212040-18s9qzk.png","e4d5b745aa12c8249033036ef7655bb8"],["/img/GFSJ10/GFSJ1.png","b29db864ff4818b555e103bdcb2fb3a2"],["/img/GFSJ10/GFSJ2.png","9fd945a4f2f8d68d49b5121ec50d8a40"],["/img/GFSJ10/GFSJ3.png","4798605ebc5c048bae0975fa48d0bb7c"],["/img/GFSJ10/GFSJ4.png","2cb7ece0ec4a6753037a60f52172f8ae"],["/img/Java后端/image-20250220162133-tnej10g.png","b830bd99bb5fbd92796672538645c0c4"],["/img/WuCup/WuCup1.png","dc388a76b8880dbab019eb016514ec9e"],["/img/WuCup/WuCup10.png","c33e4063b8149a1ce19a8051cd93e4fa"],["/img/WuCup/WuCup11.png","e0b024fc41e72f84ca4b9053222ab50f"],["/img/WuCup/WuCup2.png","79d26a88e48e8d49e6ef09a26d33c7a7"],["/img/WuCup/WuCup3.png","cbc9b460905f089fdf75b939f9f32231"],["/img/WuCup/WuCup4.png","1b8b2b33b57a90e5c9b85e023c5d0cea"],["/img/WuCup/WuCup5.png","d75ef41f982a5e98ab16cc7e456eebbc"],["/img/WuCup/WuCup6.png","ddd03f57ba67b86544c29e64febdeb6d"],["/img/WuCup/WuCup7.png","6579e56112bbb19aa512c0c56a09c951"],["/img/WuCup/WuCup8.png","133ff9c3d98748852bfa1ed4b009083a"],["/img/WuCup/WuCup9.png","75515eb5152b66031a0516fbc21e5d4e"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/friends/hicancan.jpg","daa42559f2ea52882f6773bbb9558a85"],["/img/friends/seandictionary.png","fd8086a01eec366a45e9789ed52cda57"],["/img/friends/st4rr.jpg","6cd03bfc884b8b5dca9cfa3c97d39068"],["/img/friends/yolo.jpg","1179ee44e8ed56d2b452fe0de190cbb7"],["/img/girls/雪中少女.jpg","1cc32bf98018cffd8ad30cacbc6ce3e6"],["/img/hgame1/1905a7b75161eb8a39d436a39db6ca9a-20250211204837-qcw0xa5.png","1905a7b75161eb8a39d436a39db6ca9a"],["/img/hgame1/700ca2ea5b9a3eaae339b8f32257ce5e-20250211205056-pbl0udl.png","700ca2ea5b9a3eaae339b8f32257ce5e"],["/img/hgame1/81836c77c6125b5b580d1ffacb6ba3ec-20250212020918-ro806bj.png","81836c77c6125b5b580d1ffacb6ba3ec"],["/img/hgame1/94f1925f6fb30f45915e4730f04a0107-20250212040544-op09tml.png","94f1925f6fb30f45915e4730f04a0107"],["/img/hgame1/e0e7ad9a4d6df2fc8820e6c4df1dd60f-20250211205017-engbc46.png","e0e7ad9a4d6df2fc8820e6c4df1dd60f"],["/img/hgame1/image-20250211205259-7em88hk.png","ec44a9d7d8eeae149fd1781e3c5762ab"],["/img/hgame1/image-20250212003526-3hb3kvq.png","ec313fe77c818d7c294b51b149dc4038"],["/img/hgame1/image-20250212010219-a6ro19g.png","e59262b108306dcd986194df432b542d"],["/img/hgame1/image-20250212025612-mdd5e7b.png","9432e9812b0c880528967c742b214135"],["/img/landscape/紫山.jpg","df6c8adfcbfd39f1fe9799190e3a5afd"],["/img/landscape/风景1.jpg","f53123d238796a3f010ec4f0bb64b623"],["/img/landscape/风景2.jpg","f0f624af3190f6aa008496156cd6d962"],["/img/landscape/风景3.jpg","1b20af9335caa5686133e6429979bf7e"],["/img/landscape/风景4.jpg","fe2c5f368b27385dd903fc09fa677da8"],["/img/landscape/风景5.jpg","c577ddde61b2765d32e9025987a97adc"],["/img/landscape/风景6.jpg","5d899f7388ed71bfd40e5636e14165b9"],["/img/landscape/风景7.jpg","cff0e25913c8828595536d816a5b453b"],["/img/landscape/风景9.jpg","f777b158af330bf6caff76914ab1d062"],["/img/location/location0.png","e50d3c1bd804f29bedd519e8d043ed4a"],["/img/location/location1.png","e755ab4cbc78b4705bcba5b77bec5ec0"],["/img/location/location2.png","ddbe55fe0c0ab8451926df4e5e35ae24"],["/img/location/location3.png","dcefef78cdbe3aacecca078615a1d62c"],["/img/location/location4.png","b97e015526952efb06436535eef37301"],["/img/location/location5.png","b4a65f54f9940a5c89dfc128e5517c20"],["/img/location/location6.png","ca0acdf02119f11d0d2ec886b808a585"],["/img/vs美化及有关问题解决/image-20250305165914-muvbvus.png","34d9cad18a97f4bfc30db10f4b806a5b"],["/img/vs美化及有关问题解决/image-20250305171026-5jfkwmr.png","1bfb1cc9e1d1666388cc5a223837c384"],["/img/vs美化及有关问题解决/image-20250305171411-wpxerp7.png","02373d2d4353a416379b384b6059ac60"],["/img/wtw.jpg","ad59672e82517887a153aa24cccea2ea"],["/img/启航杯CTF/clip_image002-20250126093903-gg09w36.jpg","85d521297c98558d7ef772a7f84f1009"],["/img/启航杯CTF/clip_image004-20250126093903-ogbtqo2.jpg","52359b26e89f9545f2f69d7ef8f25d41"],["/img/启航杯CTF/clip_image006-20250126093903-ezm3rh7.jpg","8f18db7a55492a81d00c0ca4baca80e9"],["/img/启航杯CTF/clip_image008-20250126093903-mwn1yha.jpg","949456970e5cfc411d2d777d8f2a9af6"],["/img/启航杯CTF/clip_image010-20250126093903-3t08nbs.jpg","922cd17956a8d5619a1adf8c293afb97"],["/img/启航杯CTF/clip_image012-20250126093903-9lzidgz.jpg","25ceac79510cb730153c0d9a97cc6353"],["/img/启航杯CTF/clip_image014-20250126093903-85qjn13.jpg","37d961ca8615b3b2ab521847f54a0c4e"],["/img/启航杯CTF/clip_image016-20250126093903-xenlqrf.jpg","7b604ded6aebefb82369f38f9f6b5f45"],["/img/启航杯CTF/clip_image018-20250126093903-n0xh6rx.jpg","8c67e1af19e4272d5d280d15023ef834"],["/img/启航杯CTF/clip_image020-20250126093903-az7koce.jpg","92817ac484bb3f4a9096bead32183a0d"],["/img/启航杯CTF/clip_image022-20250126093903-sdi999f.jpg","513f8dc6874978521b719805fff0700d"],["/img/启航杯CTF/clip_image024-20250126093903-1qdiw8l.jpg","79c37e7c9f3106faa80340cc597f6cd2"],["/img/启航杯CTF/clip_image026-20250126093903-25pq5b5.jpg","cb18a45f97cd4f18df8c0ad7763db951"],["/img/启航杯CTF/clip_image028-20250126093903-59j3usj.jpg","65d0815df1fd47a7b4b942164da2ad62"],["/img/启航杯CTF/clip_image030-20250126093903-g51hy7c.jpg","45b90afcbae2bb60d3adc3857d71b350"],["/img/启航杯CTF/clip_image032-20250126093903-j7x6co2.jpg","3ae34fd885935897c8a3a159afccc3c5"],["/img/桥.jpg","e4d2e1b829a286d6a0069f41030af4ce"],["/img/绿色头像.jpg","2cbdc225fa7031e8c0f5abd663d34d8e"],["/img/绿色打赏.jpg","9c205a0f8a684e30d72935cf9aad8686"],["/img/蓝色虞姬.jpg","9230de6dc4920b5f2b89d465f28b97af"],["/img/隼目/隼目4.png","34268d9568641edb820deba545d5b804"],["/img/隼目/隼目5.png","0c7003ad239ca0aa8d11f3e0dc5fa338"],["/img/隼目/隼目6.png","1a02c229f7bcbf878d70a41336b5c24d"],["/index.html","2e1679f73fc0ccc4f1c912f854131328"],["/js/fps.js","5b07c2ac73ebecef3f07beafd2326ce0"],["/js/main.js","f93d9674fa0a266eefc65e92b21778be"],["/js/runtime.js","2381eab6272c224ad0944b5cb8194a42"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/txmap.js","6fab930aeef45baa4fd198619408276d"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/link/index.html","8216e407d01f49b9b5ed0393045abfb6"],["/page/2/index.html","4e6a69df6803cdd2f5835e7055cbf0c5"],["/scripts/realtime.js","872ecfbbb82189168b2cb9657009cefb"],["/sw-register.js","325d19516e7cffd939afe26d75fe4c64"],["/tags/CSS/index.html","be720cf523195b7924b03997b07ee26d"],["/tags/CTF/index.html","e7313923649cce4e1609d9589896aee6"],["/tags/Java/index.html","e51bf0e998fa00d5cad51b3253bf1b15"],["/tags/index.html","610bdf5ebedf2f735d1c71dc3274763b"],["/tags/web/index.html","ad89fa9c49653b99c94a1bf77f4c93ba"],["/tags/wp/index.html","8473871f45c414c003785adb9628b064"],["/tags/前端/index.html","9b564c9eaa215a79c43fee642f49b980"],["/tags/博客搭建/index.html","3852706d262b0041e8f4c46ed3e54e1a"],["/tags/攻防世界/index.html","edc01696b65dfc81f022a9f5a93d772a"],["/tags/杂/index.html","8b2e30f14044206766f264d2746500ee"],["/tags/避坑/index.html","c81bc4d64dd49d4a4649acf40e356cfb"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */

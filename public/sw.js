if(!self.define){let e,o={};const i=(i,f)=>(i=new URL(i+".js",f).href,o[i]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=o,document.head.appendChild(e)}else e=i,importScripts(i),o()})).then((()=>{let e=o[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(f,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(o[r])return;let a={};const c=e=>i(e,r),s={module:{uri:r},exports:a,require:c};o[r]=Promise.all(f.map((e=>s[e]||c(e)))).then((e=>(n(...e),a)))}}define(["./workbox-21e1591c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/app.css",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"favicon.ico",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fonts/vendor/@fortawesome/fontawesome-free/webfa-brands-400.ttf",revision:"a78ffbbed2d858c61e068e3b756c9988"},{url:"fonts/vendor/@fortawesome/fontawesome-free/webfa-brands-400.woff2",revision:"cd2b4095e9ce66cde642c3502a4022d9"},{url:"fonts/vendor/@fortawesome/fontawesome-free/webfa-regular-400.ttf",revision:"b1a1bebb63656b34a23982706f712f71"},{url:"fonts/vendor/@fortawesome/fontawesome-free/webfa-regular-400.woff2",revision:"e8a1ba418ee6d897d1339ef22e6d8e60"},{url:"fonts/vendor/@fortawesome/fontawesome-free/webfa-solid-900.ttf",revision:"738201559a50502aacabdbdb02720910"},{url:"fonts/vendor/@fortawesome/fontawesome-free/webfa-solid-900.woff2",revision:"55b416a8df21f9f987aa352f10d1343b"},{url:"fonts/vendor/@fortawesome/fontawesome-free/webfa-v4compatibility.ttf",revision:"0d6f5f1852affca569715821fe4aa29b"},{url:"fonts/vendor/@fortawesome/fontawesome-free/webfa-v4compatibility.woff2",revision:"786e6b3373bab47e928c81c26eeccb08"},{url:"fonts/vendor/@mdi/materialdesignicons-webfont.eot",revision:"9cacdc876e2049988fcab540c21738d5"},{url:"fonts/vendor/@mdi/materialdesignicons-webfont.ttf",revision:"b62641afc9ab487008e996a5c5865e56"},{url:"fonts/vendor/@mdi/materialdesignicons-webfont.woff",revision:"a0711490bcd581b647329230b3e915cf"},{url:"fonts/vendor/@mdi/materialdesignicons-webfont.woff2",revision:"9d243c168a4f1c2cb3cec74884344de7"},{url:"img/icon/android-chrome-192x192.png",revision:"9e5b3888a103a1138850d4a661cc486f"},{url:"img/icon/android-chrome-512x512.png",revision:"b2c91096db6758c414b9cff57e5d1f0c"},{url:"img/icon/android-chrome-maskable-192x192.png",revision:"9e5b3888a103a1138850d4a661cc486f"},{url:"img/icon/android-chrome-maskable-512x512.png",revision:"b2c91096db6758c414b9cff57e5d1f0c"},{url:"img/icon/apple-touch-icon-120x120.png",revision:"e641ae913a667df22a7cac19dcf2ffe9"},{url:"img/icon/apple-touch-icon-152x152.png",revision:"5139ba4e43c38cef69e97d23cb3c3221"},{url:"img/icon/apple-touch-icon-180x180.png",revision:"302bcd301a41f244d79dedf952308050"},{url:"img/icon/apple-touch-icon-60x60.png",revision:"d17bd8bff566a39fb330852efe491959"},{url:"img/icon/apple-touch-icon-76x76.png",revision:"9a9af46961532461fd6ca92d44b7af4d"},{url:"img/icon/apple-touch-icon.png",revision:"d17bd8bff566a39fb330852efe491959"},{url:"img/icon/favicon-16x16.png",revision:"ebd874796c254f900a4c4838889c6b02"},{url:"img/icon/favicon-32x32.png",revision:"8c9101a8af7bf1924d82110e0e7a45a6"},{url:"index.php",revision:"5a103096101822bb0148afa440a5e9b5"},{url:"manifest.json",revision:"4581f90a56b3c707e2d3956b3e6b9432"},{url:"mix-manifest.json",revision:"0f4e2ee0f7e2ca9da665d2f8035743df"},{url:"robots.txt",revision:"735ab4f94fbcd57074377afca324c813"},{url:"web.config",revision:"ab5508ed3caf17b6314319df40d453f6"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map

if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const c=e=>n(e,r),l={module:{uri:r},exports:o,require:c};i[r]=Promise.all(s.map((e=>l[e]||c(e)))).then((e=>(t(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-Blb1xAKX.js",revision:null},{url:"index.html",revision:"05974d63a7ab605beb338c6c9f145383"},{url:"registerSW.js",revision:"267c134b78cbb423d3ea6483ec78dfa1"},{url:"manifest.webmanifest",revision:"8678df80d36f3f2989bc63ce6d5c7270"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const d=e=>n(e,t),l={module:{uri:t},exports:o,require:d};i[t]=Promise.all(s.map((e=>l[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BmOdxxlo.js",revision:null},{url:"assets/index-En5Tstaa.css",revision:null},{url:"index.html",revision:"a88f29ef5ab96d568ddd3060284e31d7"},{url:"registerSW.js",revision:"267c134b78cbb423d3ea6483ec78dfa1"},{url:"icon-192x192.png",revision:"e599a577ce363f584b16e59bb3e3b548"},{url:"icon-512x512.png",revision:"ec62784beda6fc92b288168a6136a3eb"},{url:"manifest.webmanifest",revision:"bd5554d7355fbbc06293184973f6f205"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

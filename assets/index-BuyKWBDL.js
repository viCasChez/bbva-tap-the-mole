var Bn=Object.defineProperty;var qn=(e,t,n)=>t in e?Bn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var P=(e,t,n)=>qn(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const jn=!1;var Wn=Array.isArray,Fn=Array.from,zn=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,Je=Object.getOwnPropertyDescriptors,Ze=Object.getPrototypeOf;const X=()=>{};function Vn(e){return e()}function Qt(e){for(var t=0;t<e.length;t++)e[t]()}const x=2,Xe=4,yt=8,pe=16,N=32,bt=64,te=128,q=256,Mt=512,b=1024,H=2048,nt=4096,Rt=8192,rt=16384,Yn=32768,Qe=65536,Kn=1<<17,Jn=1<<19,tn=1<<20,ee=Symbol("$state"),Zn=Symbol("legacy props"),Xn=Symbol("");function en(e){return e===this.v}function nn(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function rn(e){return!nn(e,this.v)}function Qn(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function tr(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function er(e){throw new Error("https://svelte.dev/e/effect_orphan")}function nr(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function rr(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function sr(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function ir(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let $t=!1;function or(){$t=!0}function sn(e){return{f:0,v:e,reactions:null,equals:en,version:0}}function on(e,t=!1){var r;const n=sn(e);return t||(n.equals=rn),$t&&v!==null&&v.l!==null&&((r=v.l).s??(r.s=[])).push(n),n}function ne(e,t=!1){return lr(on(e,t))}function lr(e){return _!==null&&_.f&x&&(T===null?Cr([e]):T.push(e)),e}function O(e,t){return _!==null&&ye()&&_.f&(x|pe)&&(T===null||!T.includes(e))&&ir(),ar(e,t)}function ar(e,t){return e.equals(t)||(e.v=t,e.version=Cn(),ln(e,H),ye()&&d!==null&&d.f&b&&!(d.f&N)&&(y!==null&&y.includes(e)?(C(d,H),Bt(d)):U===null?Pr([e]):U.push(e))),t}function ln(e,t){var n=e.reactions;if(n!==null)for(var r=ye(),s=n.length,i=0;i<s;i++){var o=n[i],a=o.f;a&H||!r&&o===d||(C(o,t),a&(b|q)&&(a&x?ln(o,nt):Bt(o)))}}const ur=1,cr=2,fr=8,hr=1,dr=2;var ke,an,un;function pr(){if(ke===void 0){ke=window;var e=Element.prototype,t=Node.prototype;an=Xt(t,"firstChild").get,un=Xt(t,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function _r(e=""){return document.createTextNode(e)}function re(e){return an.call(e)}function cn(e){return un.call(e)}function Y(e,t){return re(e)}function F(e,t=1,n=!1){let r=e;for(;t--;)r=cn(r);return r}function _e(e){var t=x|H;d===null?t|=q:d.f|=tn;var n=_!==null&&_.f&x?_:null;const r={children:null,ctx:v,deps:null,equals:en,f:t,fn:e,reactions:null,v:null,version:0,parent:n??d};return n!==null&&(n.children??(n.children=[])).push(r),r}function vr(e){const t=_e(e);return t.equals=rn,t}function fn(e){var t=e.children;if(t!==null){e.children=null;for(var n=0;n<t.length;n+=1){var r=t[n];r.f&x?ve(r):it(r)}}}function mr(e){for(var t=e.parent;t!==null;){if(!(t.f&x))return t;t=t.parent}return null}function hn(e){var t,n=d;w(mr(e));try{fn(e),t=Pn(e)}finally{w(n)}return t}function dn(e){var t=hn(e),n=(Z||e.f&q)&&e.deps!==null?nt:b;C(e,n),e.equals(t)||(e.v=t,e.version=Cn())}function ve(e){fn(e),_t(e,0),C(e,rt),e.v=e.children=e.deps=e.ctx=e.reactions=null}function pn(e){d===null&&_===null&&er(),_!==null&&_.f&q&&tr(),ge&&Qn()}function gr(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function st(e,t,n,r=!0){var s=(e&bt)!==0,i=d,o={ctx:v,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|H,first:null,fn:t,last:null,next:null,parent:s?null:i,prev:null,teardown:null,transitions:null,version:0};if(n){var a=Q;try{Oe(!0),Gt(o),o.f|=Yn}catch(f){throw it(o),f}finally{Oe(a)}}else t!==null&&Bt(o);var l=n&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&tn)===0;if(!l&&!s&&r&&(i!==null&&gr(o,i),_!==null&&_.f&x)){var u=_;(u.children??(u.children=[])).push(o)}return o}function _n(e){const t=st(yt,null,!1);return C(t,b),t.teardown=e,t}function Ne(e){pn();var t=d!==null&&(d.f&N)!==0&&v!==null&&!v.m;if(t){var n=v;(n.e??(n.e=[])).push({fn:e,effect:d,reaction:_})}else{var r=vn(e);return r}}function yr(e){return pn(),me(e)}function br(e){const t=st(bt,e,!0);return()=>{it(t)}}function vn(e){return st(Xe,e,!1)}function mn(e,t){var n=v,r={effect:null,ran:!1};n.l.r1.push(r),r.effect=me(()=>{e(),!r.ran&&(r.ran=!0,O(n.l.r2,!0),be(t))})}function gn(){var e=v;me(()=>{if(S(e.l.r2)){for(var t of e.l.r1){var n=t.effect;n.f&b&&C(n,nt),Et(n)&&Gt(n),t.ran=!1}e.l.r2.v=!1}})}function me(e){return st(yt,e,!0)}function $r(e){return yn(e)}function yn(e,t=0){return st(yt|pe|t,e,!0)}function bn(e,t=!0){return st(yt|N,e,!0,t)}function $n(e){var t=e.teardown;if(t!==null){const n=ge,r=_;Me(!0),k(null);try{t.call(null)}finally{Me(n),k(r)}}}function En(e){var t=e.deriveds;if(t!==null){e.deriveds=null;for(var n=0;n<t.length;n+=1)ve(t[n])}}function An(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){var r=n.next;it(n,t),n=r}}function Er(e){for(var t=e.first;t!==null;){var n=t.next;t.f&N||it(t),t=n}}function it(e,t=!0){var n=!1;if((t||e.f&Jn)&&e.nodes_start!==null){for(var r=e.nodes_start,s=e.nodes_end;r!==null;){var i=r===s?null:cn(r);r.remove(),r=i}n=!0}An(e,t&&!n),En(e),_t(e,0),C(e,rt);var o=e.transitions;if(o!==null)for(const l of o)l.stop();$n(e);var a=e.parent;a!==null&&a.first!==null&&wn(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function wn(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Ar(e,t){var n=[];Sn(e,n,!0),wr(n,()=>{it(e)})}function wr(e,t){var n=e.length;if(n>0){var r=()=>--n||t();for(var s of e)s.out(r)}else t()}function Sn(e,t,n){if(!(e.f&Rt)){if(e.f^=Rt,e.transitions!==null)for(const o of e.transitions)(o.is_global||n)&&t.push(o);for(var r=e.first;r!==null;){var s=r.next,i=(r.f&Qe)!==0||(r.f&N)!==0;Sn(r,t,i?n:!1),r=s}}}let se=!1,ie=[];function Sr(){se=!1;const e=ie.slice();ie=[],Qt(e)}function xr(e){se||(se=!0,queueMicrotask(Sr)),ie.push(e)}let kt=!1,Ut=!1,Lt=null,Q=!1,ge=!1;function Oe(e){Q=e}function Me(e){ge=e}let oe=[],ft=0;let _=null;function k(e){_=e}let d=null;function w(e){d=e}let T=null;function Cr(e){T=e}let y=null,A=0,U=null;function Pr(e){U=e}let xn=0,Z=!1,v=null;function Cn(){return++xn}function ye(){return!$t||v!==null&&v.l===null}function Et(e){var o,a;var t=e.f;if(t&H)return!0;if(t&nt){var n=e.deps,r=(t&q)!==0;if(n!==null){var s;if(t&Mt){for(s=0;s<n.length;s++)((o=n[s]).reactions??(o.reactions=[])).push(e);e.f^=Mt}for(s=0;s<n.length;s++){var i=n[s];if(Et(i)&&dn(i),r&&d!==null&&!Z&&!((a=i==null?void 0:i.reactions)!=null&&a.includes(e))&&(i.reactions??(i.reactions=[])).push(e),i.version>e.version)return!0}}r||C(e,b)}return!1}function Tr(e,t){for(var n=t;n!==null;){if(n.f&te)try{n.fn(e);return}catch{n.f^=te}n=n.parent}throw kt=!1,e}function kr(e){return(e.f&rt)===0&&(e.parent===null||(e.parent.f&te)===0)}function It(e,t,n,r){if(kt){if(n===null&&(kt=!1),kr(t))throw e;return}n!==null&&(kt=!0);{Tr(e,t);return}}function Pn(e){var h;var t=y,n=A,r=U,s=_,i=Z,o=T,a=v,l=e.f;y=null,A=0,U=null,_=l&(N|bt)?null:e,Z=!Q&&(l&q)!==0,T=null,v=e.ctx;try{var u=(0,e.fn)(),f=e.deps;if(y!==null){var c;if(_t(e,A),f!==null&&A>0)for(f.length=A+y.length,c=0;c<y.length;c++)f[A+c]=y[c];else e.deps=f=y;if(!Z)for(c=A;c<f.length;c++)((h=f[c]).reactions??(h.reactions=[])).push(e)}else f!==null&&A<f.length&&(_t(e,A),f.length=A);return u}finally{y=t,A=n,U=r,_=s,Z=i,T=o,v=a}}function Nr(e,t){let n=t.reactions;if(n!==null){var r=n.indexOf(e);if(r!==-1){var s=n.length-1;s===0?n=t.reactions=null:(n[r]=n[s],n.pop())}}n===null&&t.f&x&&(y===null||!y.includes(t))&&(C(t,nt),t.f&(q|Mt)||(t.f^=Mt),_t(t,0))}function _t(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Nr(e,n[r])}function Gt(e){var t=e.f;if(!(t&rt)){C(e,b);var n=d,r=v;d=e;try{t&pe?Er(e):An(e),En(e),$n(e);var s=Pn(e);e.teardown=typeof s=="function"?s:null,e.version=xn}catch(i){It(i,e,n,r||e.ctx)}finally{d=n}}}function Or(){if(ft>1e3){ft=0;try{nr()}catch(e){if(Lt!==null)It(e,Lt,null);else throw e}}ft++}function Mr(e){var t=e.length;if(t!==0){Or();var n=Q;Q=!0;try{for(var r=0;r<t;r++){var s=e[r];s.f&b||(s.f^=b);var i=[];Tn(s,i),Rr(i)}}finally{Q=n}}}function Rr(e){var t=e.length;if(t!==0)for(var n=0;n<t;n++){var r=e[n];if(!(r.f&(rt|Rt)))try{Et(r)&&(Gt(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?wn(r):r.fn=null))}catch(s){It(s,r,null,r.ctx)}}}function Ur(){if(Ut=!1,ft>1001)return;const e=oe;oe=[],Mr(e),Ut||(ft=0,Lt=null)}function Bt(e){Ut||(Ut=!0,queueMicrotask(Ur)),Lt=e;for(var t=e;t.parent!==null;){t=t.parent;var n=t.f;if(n&(bt|N)){if(!(n&b))return;t.f^=b}}oe.push(t)}function Tn(e,t){var n=e.first,r=[];t:for(;n!==null;){var s=n.f,i=(s&N)!==0,o=i&&(s&b)!==0,a=n.next;if(!o&&!(s&Rt))if(s&yt){if(i)n.f^=b;else try{Et(n)&&Gt(n)}catch(c){It(c,n,null,n.ctx)}var l=n.first;if(l!==null){n=l;continue}}else s&Xe&&r.push(n);if(a===null){let c=n.parent;for(;c!==null;){if(e===c)break t;var u=c.next;if(u!==null){n=u;continue t}c=c.parent}}n=a}for(var f=0;f<r.length;f++)l=r[f],t.push(l),Tn(l,t)}function S(e){var f;var t=e.f,n=(t&x)!==0;if(n&&t&rt){var r=hn(e);return ve(e),r}if(_!==null){T!==null&&T.includes(e)&&sr();var s=_.deps;y===null&&s!==null&&s[A]===e?A++:y===null?y=[e]:y.push(e),U!==null&&d!==null&&d.f&b&&!(d.f&N)&&U.includes(e)&&(C(d,H),Bt(d))}else if(n&&e.deps===null)for(var i=e,o=i.parent,a=i;o!==null;)if(o.f&x){var l=o;a=l,o=l.parent}else{var u=o;(f=u.deriveds)!=null&&f.includes(a)||(u.deriveds??(u.deriveds=[])).push(a);break}return n&&(i=e,Et(i)&&dn(i)),e.v}function be(e){const t=_;try{return _=null,e()}finally{_=t}}const Lr=~(H|nt|b);function C(e,t){e.f=e.f&Lr|t}function qt(e,t=!1,n){v={p:v,c:null,e:null,m:!1,s:e,x:null,l:null},$t&&!t&&(v.l={s:null,u:null,r1:[],r2:sn(!1)})}function jt(e){const t=v;if(t!==null){const o=t.e;if(o!==null){var n=d,r=_;t.e=null;try{for(var s=0;s<o.length;s++){var i=o[s];w(i.effect),k(i.reaction),vn(i.fn)}}finally{w(n),k(r)}}v=t.p,t.m=!0}return{}}function Hr(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(ee in e)le(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&ee in n&&le(n)}}}function le(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{le(e[r],t)}catch{}const n=Ze(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=Je(n);for(let s in r){const i=r[s].get;if(i)try{i.call(e)}catch{}}}}}function Dr(e){var t=_,n=d;k(null),w(null);try{return e()}finally{k(t),w(n)}}const Ir=new Set,Re=new Set;function Gr(e,t,n,r){function s(i){if(r.capture||ct.call(t,i),!i.cancelBubble)return Dr(()=>n.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?xr(()=>{t.addEventListener(e,s,r)}):t.addEventListener(e,s,r),s}function K(e,t,n,r,s){var i={capture:r,passive:s},o=Gr(e,t,n,i);(t===document.body||t===window||t===document)&&_n(()=>{t.removeEventListener(e,o,i)})}function ct(e){var St;var t=this,n=t.ownerDocument,r=e.type,s=((St=e.composedPath)==null?void 0:St.call(e))||[],i=s[0]||e.target,o=0,a=e.__root;if(a){var l=s.indexOf(a);if(l!==-1&&(t===document||t===window)){e.__root=t;return}var u=s.indexOf(t);if(u===-1)return;l<=u&&(o=l)}if(i=s[o]||e.target,i!==t){zn(e,"currentTarget",{configurable:!0,get(){return i||n}});var f=_,c=d;k(null),w(null);try{for(var h,p=[];i!==null;){var m=i.assignedSlot||i.parentNode||i.host||null;try{var $=i["__"+r];if($!==void 0&&!i.disabled)if(Wn($)){var[j,...E]=$;j.apply(i,[e,...E])}else $.call(i,e)}catch(W){h?p.push(W):h=W}if(e.cancelBubble||m===t||m===null)break;i=m}if(h){for(let W of p)queueMicrotask(()=>{throw W});throw h}}finally{e.__root=t,delete e.currentTarget,k(f),w(c)}}}function Br(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function Ue(e,t){var n=d;n.nodes_start===null&&(n.nodes_start=e,n.nodes_end=t)}function $e(e,t){var n=(t&hr)!==0,r=(t&dr)!==0,s,i=!e.startsWith("<!>");return()=>{s===void 0&&(s=Br(i?e:"<!>"+e),n||(s=re(s)));var o=r?document.importNode(s,!0):s.cloneNode(!0);if(n){var a=re(o),l=o.lastChild;Ue(a,l)}else Ue(o,o);return o}}function Ee(e,t){e!==null&&e.before(t)}const qr=["touchstart","touchmove"];function jr(e){return qr.includes(e)}function Vt(e,t){var n=t==null?"":typeof t=="object"?t+"":t;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function Wr(e,t){return Fr(e,t)}const z=new Map;function Fr(e,{target:t,anchor:n,props:r={},events:s,context:i,intro:o=!0}){pr();var a=new Set,l=c=>{for(var h=0;h<c.length;h++){var p=c[h];if(!a.has(p)){a.add(p);var m=jr(p);t.addEventListener(p,ct,{passive:m});var $=z.get(p);$===void 0?(document.addEventListener(p,ct,{passive:m}),z.set(p,1)):z.set(p,$+1)}}};l(Fn(Ir)),Re.add(l);var u=void 0,f=br(()=>{var c=n??t.appendChild(_r());return bn(()=>{if(i){qt({});var h=v;h.c=i}s&&(r.$$events=s),u=e(c,r)||{},i&&jt()}),()=>{var m;for(var h of a){t.removeEventListener(h,ct);var p=z.get(h);--p===0?(document.removeEventListener(h,ct),z.delete(h)):z.set(h,p)}Re.delete(l),Le.delete(u),c!==n&&((m=c.parentNode)==null||m.removeChild(c))}});return Le.set(u,f),u}let Le=new WeakMap;function zr(e,t,n){var r=e,s,i;yn(()=>{s!==(s=t())&&(i&&(Ar(i),i=null),s&&(i=bn(()=>n(r,s))))},Qe)}function Vr(e,t,n,r){var s=e.__attributes??(e.__attributes={});s[t]!==(s[t]=n)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[Xn]=n),n==null?e.removeAttribute(t):typeof n!="string"&&kn(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function at(e,t,n){var r=_,s=d;k(null),w(null);try{(ae.has(e.nodeName)||customElements.get(e.tagName.toLowerCase())?kn(e).includes(t):n&&typeof n=="object")?e[t]=n:Vr(e,t,n==null?n:String(n))}finally{k(r),w(s)}}var ae=new Map;function kn(e){var t=ae.get(e.nodeName);if(t)return t;ae.set(e.nodeName,t=[]);for(var n,r=e,s=Element.prototype;s!==r;){n=Je(r);for(var i in n)n[i].set&&t.push(i);r=Ze(r)}return t}function Ae(e=!1){const t=v,n=t.l.u;if(!n)return;let r=()=>Hr(t.s);if(e){let s=0,i={};const o=_e(()=>{let a=!1;const l=t.s;for(const u in l)l[u]!==i[u]&&(i[u]=l[u],a=!0);return a&&s++,s});r=()=>S(o)}n.b.length&&yr(()=>{He(t,r),Qt(n.b)}),Ne(()=>{const s=be(()=>n.m.map(Vn));return()=>{for(const i of s)typeof i=="function"&&i()}}),n.a.length&&Ne(()=>{He(t,r),Qt(n.a)})}function He(e,t){if(e.l.s)for(const n of e.l.s)S(n);t()}function Nn(e,t,n){if(e==null)return t(void 0),X;const r=be(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}let Ct=!1;function Pt(e,t,n){const r=n[t]??(n[t]={store:null,source:on(void 0),unsubscribe:X});if(r.store!==e)if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=X;else{var s=!0;r.unsubscribe=Nn(e,i=>{s?r.source.v=i:O(r.source,i)}),s=!1}return S(r.source)}function Yr(){const e={};return _n(()=>{for(var t in e)e[t].unsubscribe()}),e}function Kr(e){var t=Ct;try{return Ct=!1,[e(),Ct]}finally{Ct=t}}function Jr(e){for(var t=d,n=d;t!==null&&!(t.f&(N|bt));)t=t.parent;try{return w(t),e()}finally{w(n)}}function On(e,t,n,r){var j;var s=(n&ur)!==0,i=!$t||(n&cr)!==0,o=(n&fr)!==0,a=!1,l;[l,a]=Kr(()=>e[t]);var u=ee in e||Zn in e,f=((j=Xt(e,t))==null?void 0:j.set)??(u&&o&&t in e?E=>e[t]=E:void 0),c=r,h=!0,p=()=>(h&&(h=!1,c=r),c);l===void 0&&r!==void 0&&(f&&i&&rr(),l=p(),f&&f(l));var m;if(i)m=()=>{var E=e[t];return E===void 0?p():(h=!0,E)};else{var $=Jr(()=>(s?_e:vr)(()=>e[t]));$.f|=Kn,m=()=>{var E=S($);return E!==void 0&&(c=void 0),E===void 0?c:E}}return m}const Zr="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Zr);or();const Ht="/bbva-tap-the-mole";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=globalThis,we=Nt.ShadowRoot&&(Nt.ShadyCSS===void 0||Nt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Se=Symbol(),De=new WeakMap;let Mn=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==Se)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(we&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=De.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&De.set(n,t))}return t}toString(){return this.cssText}};const Xr=e=>new Mn(typeof e=="string"?e:e+"",void 0,Se),At=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,s,i)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]);return new Mn(n,e,Se)},Qr=(e,t)=>{if(we)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),s=Nt.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=n.cssText,e.appendChild(r)}},Ie=we?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return Xr(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ts,defineProperty:es,getOwnPropertyDescriptor:ns,getOwnPropertyNames:rs,getOwnPropertySymbols:ss,getPrototypeOf:is}=Object,L=globalThis,Ge=L.trustedTypes,os=Ge?Ge.emptyScript:"",Yt=L.reactiveElementPolyfillSupport,ht=(e,t)=>e,ue={toAttribute(e,t){switch(t){case Boolean:e=e?os:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Rn=(e,t)=>!ts(e,t),Be={attribute:!0,type:String,converter:ue,reflect:!1,hasChanged:Rn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),L.litPropertyMetadata??(L.litPropertyMetadata=new WeakMap);class J extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Be){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,n);s!==void 0&&es(this.prototype,t,s)}}static getPropertyDescriptor(t,n,r){const{get:s,set:i}=ns(this.prototype,t)??{get(){return this[n]},set(o){this[n]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const a=s==null?void 0:s.call(this);i.call(this,o),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Be}static _$Ei(){if(this.hasOwnProperty(ht("elementProperties")))return;const t=is(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ht("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ht("properties"))){const n=this.properties,r=[...rs(n),...ss(n)];for(const s of r)this.createProperty(s,n[s])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,s]of n)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const s=this._$Eu(n,r);s!==void 0&&this._$Eh.set(s,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)n.unshift(Ie(s))}else t!==void 0&&n.push(Ie(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$EO)==null||n.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Qr(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EC(t,n){var i;const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){const o=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:ue).toAttribute(n,r.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,n){var i;const r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const o=r.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)==null?void 0:i.fromAttribute)!==void 0?o.converter:ue;this._$Em=s,this[s]=a.fromAttribute(n,o.type),this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??Rn)(this[t],n))return;this.P(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,o]of s)o.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],o)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(r=this._$EO)==null||r.forEach(s=>{var i;return(i=s.hostUpdate)==null?void 0:i.call(s)}),this.update(n)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$EO)==null||n.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(t){}firstUpdated(t){}}J.elementStyles=[],J.shadowRootOptions={mode:"open"},J[ht("elementProperties")]=new Map,J[ht("finalized")]=new Map,Yt==null||Yt({ReactiveElement:J}),(L.reactiveElementVersions??(L.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=globalThis,Dt=dt.trustedTypes,qe=Dt?Dt.createPolicy("lit-html",{createHTML:e=>e}):void 0,Un="$lit$",R=`lit$${Math.random().toFixed(9).slice(2)}$`,Ln="?"+R,ls=`<${Ln}>`,B=document,vt=()=>B.createComment(""),mt=e=>e===null||typeof e!="object"&&typeof e!="function",xe=Array.isArray,as=e=>xe(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Kt=`[ 	
\f\r]`,ut=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,je=/-->/g,We=/>/g,I=RegExp(`>|${Kt}(?:([^\\s"'>=/]+)(${Kt}*=${Kt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Fe=/'/g,ze=/"/g,Hn=/^(?:script|style|textarea|title)$/i,us=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),D=us(1),tt=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Ve=new WeakMap,G=B.createTreeWalker(B,129);function Dn(e,t){if(!xe(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return qe!==void 0?qe.createHTML(t):t}const cs=(e,t)=>{const n=e.length-1,r=[];let s,i=t===2?"<svg>":t===3?"<math>":"",o=ut;for(let a=0;a<n;a++){const l=e[a];let u,f,c=-1,h=0;for(;h<l.length&&(o.lastIndex=h,f=o.exec(l),f!==null);)h=o.lastIndex,o===ut?f[1]==="!--"?o=je:f[1]!==void 0?o=We:f[2]!==void 0?(Hn.test(f[2])&&(s=RegExp("</"+f[2],"g")),o=I):f[3]!==void 0&&(o=I):o===I?f[0]===">"?(o=s??ut,c=-1):f[1]===void 0?c=-2:(c=o.lastIndex-f[2].length,u=f[1],o=f[3]===void 0?I:f[3]==='"'?ze:Fe):o===ze||o===Fe?o=I:o===je||o===We?o=ut:(o=I,s=void 0);const p=o===I&&e[a+1].startsWith("/>")?" ":"";i+=o===ut?l+ls:c>=0?(r.push(u),l.slice(0,c)+Un+l.slice(c)+R+p):l+R+(c===-2?a:p)}return[Dn(e,i+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class gt{constructor({strings:t,_$litType$:n},r){let s;this.parts=[];let i=0,o=0;const a=t.length-1,l=this.parts,[u,f]=cs(t,n);if(this.el=gt.createElement(u,r),G.currentNode=this.el.content,n===2||n===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=G.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(Un)){const h=f[o++],p=s.getAttribute(c).split(R),m=/([.?@])?(.*)/.exec(h);l.push({type:1,index:i,name:m[2],strings:p,ctor:m[1]==="."?hs:m[1]==="?"?ds:m[1]==="@"?ps:Wt}),s.removeAttribute(c)}else c.startsWith(R)&&(l.push({type:6,index:i}),s.removeAttribute(c));if(Hn.test(s.tagName)){const c=s.textContent.split(R),h=c.length-1;if(h>0){s.textContent=Dt?Dt.emptyScript:"";for(let p=0;p<h;p++)s.append(c[p],vt()),G.nextNode(),l.push({type:2,index:++i});s.append(c[h],vt())}}}else if(s.nodeType===8)if(s.data===Ln)l.push({type:2,index:i});else{let c=-1;for(;(c=s.data.indexOf(R,c+1))!==-1;)l.push({type:7,index:i}),c+=R.length-1}i++}}static createElement(t,n){const r=B.createElement("template");return r.innerHTML=t,r}}function et(e,t,n=e,r){var o,a;if(t===tt)return t;let s=r!==void 0?(o=n._$Co)==null?void 0:o[r]:n._$Cl;const i=mt(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==i&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),i===void 0?s=void 0:(s=new i(e),s._$AT(e,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=s:n._$Cl=s),s!==void 0&&(t=et(e,s._$AS(e,t.values),s,r)),t}class fs{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,s=((t==null?void 0:t.creationScope)??B).importNode(n,!0);G.currentNode=s;let i=G.nextNode(),o=0,a=0,l=r[0];for(;l!==void 0;){if(o===l.index){let u;l.type===2?u=new wt(i,i.nextSibling,this,t):l.type===1?u=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(u=new _s(i,this,t)),this._$AV.push(u),l=r[++a]}o!==(l==null?void 0:l.index)&&(i=G.nextNode(),o++)}return G.currentNode=B,s}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class wt{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,r,s){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=et(this,t,n),mt(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==tt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):as(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==g&&mt(this._$AH)?this._$AA.nextSibling.data=t:this.T(B.createTextNode(t)),this._$AH=t}$(t){var i;const{values:n,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=gt.createElement(Dn(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)==null?void 0:i._$AD)===s)this._$AH.p(n);else{const o=new fs(s,this),a=o.u(this.options);o.p(n),this.T(a),this._$AH=o}}_$AC(t){let n=Ve.get(t.strings);return n===void 0&&Ve.set(t.strings,n=new gt(t)),n}k(t){xe(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,s=0;for(const i of t)s===n.length?n.push(r=new wt(this.O(vt()),this.O(vt()),this,this.options)):r=n[s],r._$AI(i),s++;s<n.length&&(this._$AR(r&&r._$AB.nextSibling,s),n.length=s)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}}class Wt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,s,i){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=n,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=g}_$AI(t,n=this,r,s){const i=this.strings;let o=!1;if(i===void 0)t=et(this,t,n,0),o=!mt(t)||t!==this._$AH&&t!==tt,o&&(this._$AH=t);else{const a=t;let l,u;for(t=i[0],l=0;l<i.length-1;l++)u=et(this,a[r+l],n,l),u===tt&&(u=this._$AH[l]),o||(o=!mt(u)||u!==this._$AH[l]),u===g?t=g:t!==g&&(t+=(u??"")+i[l+1]),this._$AH[l]=u}o&&!s&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class hs extends Wt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}}class ds extends Wt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}}class ps extends Wt{constructor(t,n,r,s,i){super(t,n,r,s,i),this.type=5}_$AI(t,n=this){if((t=et(this,t,n,0)??g)===tt)return;const r=this._$AH,s=t===g&&r!==g||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==g&&(r===g||s);s&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}}class _s{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){et(this,t)}}const Jt=dt.litHtmlPolyfillSupport;Jt==null||Jt(gt,wt),(dt.litHtmlVersions??(dt.litHtmlVersions=[])).push("3.2.1");const vs=(e,t,n)=>{const r=(n==null?void 0:n.renderBefore)??t;let s=r._$litPart$;if(s===void 0){const i=(n==null?void 0:n.renderBefore)??null;r._$litPart$=s=new wt(t.insertBefore(vt(),i),i,void 0,n??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class M extends J{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=vs(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return tt}}var Ke;M._$litElement$=!0,M.finalized=!0,(Ke=globalThis.litElementHydrateSupport)==null||Ke.call(globalThis,{LitElement:M});const Zt=globalThis.litElementPolyfillSupport;Zt==null||Zt({LitElement:M});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");class In extends M{render(){return D`
      <div class="mole">
        <div class="head">
          <div class="eye left"></div>
          <div class="eye right"></div>
          <div class="nose"></div>
        </div>
      </div>
    `}}P(In,"styles",At`
    :host {
      position: absolute;
      bottom: 0px;
      left: 9px;
    }

    .mole {
      position: relative;
    }

    .head {
      position: relative;
      width: 56px;
      height: 56px;
      border-radius: 50% 50% 0 0;
      margin: 0 auto;
      z-index: 1;
      border: 3px solid #000;
      background-color: #8b4513;
    }

    .eye {
      position: absolute;
      width: 10px;
      height: 10px;
      background: #000;
      border-radius: 50%;
      top: 30%;
    }

    .eye.left {
      left: 20%;
    }

    .eye.right {
      right: 20%;
    }

    .nose {
      position: absolute;
      width: 10px;
      height: 10px;
      background: #000;
      top: 54%;
      left: 50%;
      transform: translateX(-50%);
    }
  `);customElements.define("mole-element",In);class ce extends M{constructor(){super(),this.name="",this.errorMessage=""}handleInput(t){this.name=t.target.value,this.errorMessage=""}handleSubmit(t){t.preventDefault();const n=this.name.trim(),r=n.length>=3;if(n&&r){const s=new CustomEvent("name-submitted",{detail:{name:this.name.trim()},bubbles:!0,composed:!0});this.dispatchEvent(s),this.errorMessage=""}else{const s=this.name.trim().length===0;this.name="",this.errorMessage=s?"Name cannot be empty":"Please enter a valid name, minimum 3 characters"}}render(){return D`
      <h1>Tap the Mole</h1>
      <img src="./img/mole.webp" alt="Tap the Mole" />
      <form @submit="${t=>t.preventDefault()}">
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          required
          placeholder="Enter your name"
          .value="${this.name}"
          @input="${this.handleInput}"
        />
        <button @click="${this.handleSubmit}">JOIN</button>
        ${this.errorMessage?D`<p>${this.errorMessage}</p>`:""}
      </form>
    `}}P(ce,"properties",{name:{type:String},errorMessage:{type:String}}),P(ce,"styles",At`
    :host {
      display: block;
      text-align: center;
    }

    h1 {
      font-size: 2rem;
      color: #333;
    }

    img {
      width: 250px;
    }

    label { display: block; }

    label, input, button { 
      margin: 16px auto 0;
    }

    input { padding: 6px; }

    button {
      padding: 8px 16px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    p {
      color: red;
      font-size: .8rem;
      margin-top: 8px;
    }

  `);customElements.define("home-form",ce);const V=[];function Ft(e,t=X){let n=null;const r=new Set;function s(a){if(nn(e,a)&&(e=a,n)){const l=!V.length;for(const u of r)u[1](),V.push(u,e);if(l){for(let u=0;u<V.length;u+=2)V[u][0](V[u+1]);V.length=0}}}function i(a){s(a(e))}function o(a,l=X){const u=[a,l];return r.add(u),r.size===1&&(n=t(s,i)||X),a(e),()=>{r.delete(u),r.size===0&&n&&(n(),n=null)}}return{set:s,update:i,subscribe:o}}function Ot(e){let t;return Nn(e,n=>t=n)(),t}const pt=Ft(""),fe=Ft(0),Ce=Ft(!1),Pe=Ft(0);function ms(e){pt.set(e.trim())}function gs(e){Ce.set(e)}function ys(e){fe.set(e)}function bs(e){Pe.update(t=>t+e)}function $s(){Ce.set(!1),Pe.set(0)}var Es=$e("<home-form></home-form>",2);function Ye(e,t){qt(t,!1);let n=On(t,"navigate",8);function r(i){const o=i.detail.name;o.trim()&&(ms(o),n()(`${Ht}/game`))}Ae();var s=Es();K("name-submitted",s,r),Ee(e,s),jt()}var Tt;let As=(Tt=class extends M{constructor(){super(),this.playGame=!1,this.secondsWait=500,this.holeSelected=-1,this.holeStates=Array(9).fill(null)}eventUpdatePoints(){const t=new CustomEvent("update-points",{bubbles:!0,composed:!0});this.dispatchEvent(t),this.holeStates[this.holeSelected]="success",this.holeSelected=-1,navigator.vibrate&&navigator.vibrate(100)}startGame(){this.interval?clearInterval(this.interval):this.randomShowMole(),this.interval=setInterval(this.randomShowMole.bind(this),this.secondsWait)}stopGame(){clearInterval(this.interval),this.holeSelected=-1}getRandomMole(){let t=Math.floor(Math.random()*9);return t===this.holeSelected&&(t=t===8?0:t+1),console.log(`👽 [vi... ${Date.now()}]: Hoyo: `,t),t}randomShowMole(){this.playGame&&(this.holeStates[this.holeSelected]="fail",this.holeSelected=this.getRandomMole())}handleAnimationEnd(){this.holeStates=Array(9).fill(null)}render(){return D`
      <div class="grid grid-hole">
        ${Array.from({length:9}).map((t,n)=>D`<div
                  class="hole ${n===this.holeSelected?"selected":""} ${this.holeStates[n]}"
                  id="hole-${n}"
                  @animationend="${this.handleAnimationEnd}"
                >
                  <mole-element @click="${this.eventUpdatePoints}"></mole-element>
                </div>`)}
      </div>
    `}update(t){super.update(t),this.playGame?this.startGame():this.stopGame()}},P(Tt,"properties",{playGame:{type:Boolean},secondsWait:{type:Number},holeSelected:{type:Number}}),P(Tt,"styles",At`
    :host {
      display: block;
      text-align: center;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(3, 100px);
      gap: 30px;
      justify-content: center;
      margin: 20px 0;
    }

    .grid-hole {
      margin: 80px 0;
    }

    .hole {
      position: relative;
      width: calc(100% - 20px);
      height: 36px;
      border: 10px solid #000;
      border-radius: 50%;
      box-shadow: 2px 2px 6px 2px #999;
      background-color: #a9a9a9;
      transition: background-color 500ms ease;
    }

    .hole.success {
      background-color: #9acd32;
      animation: success-animation 1000ms ease forwards;
    }

    .hole.fail {
      background-color: #cd5c5c;
      animation: fail-animation 1000ms ease forwards;
    }

    mole-element {
      display: none;
    }

    .hole.selected mole-element {
      display: block;
    }
  
    @keyframes success-animation {
      0% {
        background-color: #9acd32;
      }
      100% {
        background-color: #a9a9a9;
      }
    }

    @keyframes fail-animation {
      0% {
        background-color: #cd5c5c;
      }
      100% {
        background-color: #a9a9a9;
      }
    }
  `),Tt);customElements.define("game-view",As);class he extends M{constructor(){super(),this.levelSelected=0,this.buttonLevels=[]}toggleLevel(t){const n=new CustomEvent("update-level",{detail:{level:parseInt(t.target.dataset.index)},bubbles:!0,composed:!0});this.dispatchEvent(n)}render(){return D`
        <div class="grid">
          ${this.buttonLevels.map((t,n)=>D`<button 
                  type="button"
                  data-index="${n}"
                  class="${t.class} ${this.levelSelected===n?"selected":""}"
                  @click="${this.toggleLevel}"
                >
                  ${t.text}
                </button>
              `)}
        </div>
    `}}P(he,"properties",{levelSelected:{type:Number},buttonLevels:{type:Array}}),P(he,"styles",At`
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 100px);
      gap: 30px;
      justify-content: center;
      margin: 20px 0;
    }

    button {
      padding: 10px 15px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .grid button {
      opacity: 0.5;
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    button.low {
      background-color: #9acd32;
      border: 3px solid #9acd32;
    }
    button.medium {
      background-color: #ffa500;
      border: 3px solid #ffa500;
    }
    button.high {
      background-color: #cd5c5c;
      border: 3px solid #cd5c5c;
    }

    .grid button:hover, button.selected {
      border: 3px solid #000;
      opacity: 1;
    }
  `);customElements.define("levels-element",he);class de extends M{constructor(){super(),this.playGame=!1}toggleGame(){const t=new CustomEvent("update-game",{detail:{playGame:!this.playGame},bubbles:!0,composed:!0});this.dispatchEvent(t)}goToHome(){const t=new CustomEvent("game-exit",{bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){return D`
      <p>${this.playGame?"Click 'Stop' to GAME OVER!":"Click 'Play' to start!"}</p>
      <button type="button" class="btn-stop-play" @click="${this.toggleGame}">
        ${this.playGame?"Stop":"Play"}
      </button>
      <button type="button" class="btn-home" @click="${this.goToHome}">Exit</button>
    `}}P(de,"properties",{playGame:{type:Boolean}}),P(de,"styles",At`
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 100px);
      gap: 30px;
      justify-content: center;
      margin: 20px 0;
    }

    button {
      padding: 10px 15px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button.btn-home, button.btn-stop-play {
      width: 90px;
    }

    button.btn-home {
      background-color: #cd5c5c;
      margin-left: 16px;
    }
  `);customElements.define("buttons-element",de);var ws=$e('<div class="game"><h1> </h1> <p>Points: <span> </span></p> <levels-element></levels-element> <p> </p> <game-view></game-view> <buttons-element></buttons-element></div>',2);function Ss(e,t){qt(t,!1);const n=Yr(),r=()=>Pt(fe,"$level",n),s=()=>Pt(pt,"$name",n),i=()=>Pt(Pe,"$points",n),o=()=>Pt(Ce,"$playGame",n),a=ne();let l=On(t,"navigate",8);function u(){l()(`${Ht}/home`),$s()}function f(){const lt=p[Ot(fe)].points;bs(lt)}function c(lt){ys(lt.detail.level)}function h(lt){gs(lt.detail.playGame)}const p=[{text:"Low",class:"low",points:10,secondsWait:1e3},{text:"Medium",class:"medium",points:20,secondsWait:750},{text:"High",class:"high",points:30,secondsWait:500}];mn(()=>r(),()=>{O(a,p[r()].secondsWait)}),gn(),Ae();var m=ws(),$=Y(m),j=Y($),E=F($,2),St=F(Y(E)),W=Y(St),xt=F(E,2);at(xt,"buttonLevels",p);var Te=F(xt,2),Gn=Y(Te),ot=F(Te,2),zt=F(ot,2);$r(()=>{Vt(j,`Welcome, ${s()??""}!!!`),Vt(W,i()),at(xt,"levelSelected",r()),Vt(Gn,`Cada $${S(a)??""} aparecerá un topo.`),at(ot,"playGame",o()),at(ot,"secondsWait",S(a)),at(zt,"playGame",o())}),K("update-level",xt,c),K("update-points",ot,f),K("update-game",ot,h),K("game-exit",zt,u),K("update-game",zt,h),Ee(e,m),jt()}var xs=$e("<main><!></main>");function Cs(e,t){qt(t,!1);const n=ne();let r=ne(window.location.pathname);const s=`${Ht}/`,i=`${Ht}/game`;S(r)===i&&!Ot(pt)&&(O(r,s),history.replaceState({},"",s));function o(u){u===i&&!Ot(pt)?(O(r,s),history.pushState({},"",s)):(O(r,u),history.pushState({},"",u))}window.onpopstate=()=>{window.location.pathname===i&&!Ot(pt)?(O(r,s),history.replaceState({},"",s)):O(r,window.location.pathname)},mn(()=>(S(r),Ye),()=>{O(n,S(r)===i?Ss:Ye)}),gn(),Ae();var a=xs(),l=Y(a);zr(l,()=>S(n),(u,f)=>{f(u,{navigate:o})}),Ee(e,a),jt()}Wr(Cs,{target:document.getElementById("app")});

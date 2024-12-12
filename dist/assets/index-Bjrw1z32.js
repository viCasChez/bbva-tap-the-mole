var $n=Object.defineProperty;var bn=(e,t,n)=>t in e?$n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var B=(e,t,n)=>bn(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const En=!1;var An=Array.isArray,wn=Array.from,Sn=Object.defineProperty,Dt=Object.getOwnPropertyDescriptor,Me=Object.getOwnPropertyDescriptors,It=Object.getPrototypeOf;const W=()=>{};function xn(e){return e()}function qt(e){for(var t=0;t<e.length;t++)e[t]()}const A=2,Re=4,ft=8,Jt=16,T=32,ht=64,Bt=128,q=256,Et=512,$=1024,U=2048,Z=4096,At=8192,X=16384,Cn=32768,Ue=65536,Pn=1<<17,Tn=1<<19,Le=1<<20,zt=Symbol("$state"),Nn=Symbol("legacy props");function He(e){return e===this.v}function De(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Ie(e){return!De(e,this.v)}function On(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function kn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Mn(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Rn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Un(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Ln(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function Hn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let dt=!1;function Dn(){dt=!0}function qe(e){return{f:0,v:e,reactions:null,equals:He,version:0}}function Be(e,t=!1){var r;const n=qe(e);return t||(n.equals=Ie),dt&&v!==null&&v.l!==null&&((r=v.l).s??(r.s=[])).push(n),n}function fe(e,t=!1){return In(Be(e,t))}function In(e){return p!==null&&p.f&A&&(C===null?ur([e]):C.push(e)),e}function O(e,t){return p!==null&&ee()&&p.f&(A|Jt)&&(C===null||!C.includes(e))&&Hn(),qn(e,t)}function qn(e,t){return e.equals(t)||(e.v=t,e.version=on(),ze(e,U),ee()&&d!==null&&d.f&$&&!(d.f&T)&&(y!==null&&y.includes(e)?(w(d,U),Tt(d)):M===null?cr([e]):M.push(e))),t}function ze(e,t){var n=e.reactions;if(n!==null)for(var r=ee(),i=n.length,s=0;s<i;s++){var o=n[s],a=o.f;a&U||!r&&o===d||(w(o,t),a&($|q)&&(a&A?ze(o,Z):Tt(o)))}}const Bn=1,zn=2,Fn=8,jn=1,Gn=2;var he,Fe,je;function Wn(){if(he===void 0){he=window;var e=Element.prototype,t=Node.prototype;Fe=Dt(t,"firstChild").get,je=Dt(t,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function Vn(e=""){return document.createTextNode(e)}function Ft(e){return Fe.call(e)}function Yn(e){return je.call(e)}function Kn(e,t){return Ft(e)}function Zt(e){var t=A|U;d===null?t|=q:d.f|=Le;var n=p!==null&&p.f&A?p:null;const r={children:null,ctx:v,deps:null,equals:He,f:t,fn:e,reactions:null,v:null,version:0,parent:n??d};return n!==null&&(n.children??(n.children=[])).push(r),r}function Jn(e){const t=Zt(e);return t.equals=Ie,t}function Ge(e){var t=e.children;if(t!==null){e.children=null;for(var n=0;n<t.length;n+=1){var r=t[n];r.f&A?Xt(r):tt(r)}}}function Zn(e){for(var t=e.parent;t!==null;){if(!(t.f&A))return t;t=t.parent}return null}function We(e){var t,n=d;E(Zn(e));try{Ge(e),t=ln(e)}finally{E(n)}return t}function Ve(e){var t=We(e),n=(G||e.f&q)&&e.deps!==null?Z:$;w(e,n),e.equals(t)||(e.v=t,e.version=on())}function Xt(e){Ge(e),lt(e,0),w(e,X),e.v=e.children=e.deps=e.ctx=e.reactions=null}function Ye(e){d===null&&p===null&&Mn(),p!==null&&p.f&q&&kn(),te&&On()}function Xn(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function Q(e,t,n,r=!0){var i=(e&ht)!==0,s=d,o={ctx:v,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|U,first:null,fn:t,last:null,next:null,parent:i?null:s,prev:null,teardown:null,transitions:null,version:0};if(n){var a=V;try{pe(!0),Pt(o),o.f|=Cn}catch(f){throw tt(o),f}finally{pe(a)}}else t!==null&&Tt(o);var l=n&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&Le)===0;if(!l&&!i&&r&&(s!==null&&Xn(o,s),p!==null&&p.f&A)){var u=p;(u.children??(u.children=[])).push(o)}return o}function Ke(e){const t=Q(ft,null,!1);return w(t,$),t.teardown=e,t}function de(e){Ye();var t=d!==null&&(d.f&T)!==0&&v!==null&&!v.m;if(t){var n=v;(n.e??(n.e=[])).push({fn:e,effect:d,reaction:p})}else{var r=Je(e);return r}}function Qn(e){return Ye(),Qt(e)}function tr(e){const t=Q(ht,e,!0);return()=>{tt(t)}}function Je(e){return Q(Re,e,!1)}function er(e,t,n,r){var i=v,s={effect:null,ran:!1};i.l.r1.push(s),s.effect=Qt(()=>{e(),!s.ran&&(s.ran=!0,O(i.l.r2,!0),ne(t))})}function nr(){var e=v;Qt(()=>{if(N(e.l.r2)){for(var t of e.l.r1){var n=t.effect;n.f&$&&w(n,Z),pt(n)&&Pt(n),t.ran=!1}e.l.r2.v=!1}})}function Qt(e){return Q(ft,e,!0)}function rr(e){return Ze(e)}function Ze(e,t=0){return Q(ft|Jt|t,e,!0)}function Xe(e,t=!0){return Q(ft|T,e,!0,t)}function Qe(e){var t=e.teardown;if(t!==null){const n=te,r=p;_e(!0),P(null);try{t.call(null)}finally{_e(n),P(r)}}}function tn(e){var t=e.deriveds;if(t!==null){e.deriveds=null;for(var n=0;n<t.length;n+=1)Xt(t[n])}}function en(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){var r=n.next;tt(n,t),n=r}}function ir(e){for(var t=e.first;t!==null;){var n=t.next;t.f&T||tt(t),t=n}}function tt(e,t=!0){var n=!1;if((t||e.f&Tn)&&e.nodes_start!==null){for(var r=e.nodes_start,i=e.nodes_end;r!==null;){var s=r===i?null:Yn(r);r.remove(),r=s}n=!0}en(e,t&&!n),tn(e),lt(e,0),w(e,X);var o=e.transitions;if(o!==null)for(const l of o)l.stop();Qe(e);var a=e.parent;a!==null&&a.first!==null&&nn(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function nn(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function sr(e,t){var n=[];rn(e,n,!0),or(n,()=>{tt(e)})}function or(e,t){var n=e.length;if(n>0){var r=()=>--n||t();for(var i of e)i.out(r)}else t()}function rn(e,t,n){if(!(e.f&At)){if(e.f^=At,e.transitions!==null)for(const o of e.transitions)(o.is_global||n)&&t.push(o);for(var r=e.first;r!==null;){var i=r.next,s=(r.f&Ue)!==0||(r.f&T)!==0;rn(r,t,s?n:!1),r=i}}}let jt=!1,Gt=[];function lr(){jt=!1;const e=Gt.slice();Gt=[],qt(e)}function ar(e){jt||(jt=!0,queueMicrotask(lr)),Gt.push(e)}let $t=!1,wt=!1,St=null,V=!1,te=!1;function pe(e){V=e}function _e(e){te=e}let Wt=[],rt=0;let p=null;function P(e){p=e}let d=null;function E(e){d=e}let C=null;function ur(e){C=e}let y=null,b=0,M=null;function cr(e){M=e}let sn=0,G=!1,v=null;function on(){return++sn}function ee(){return!dt||v!==null&&v.l===null}function pt(e){var o,a;var t=e.f;if(t&U)return!0;if(t&Z){var n=e.deps,r=(t&q)!==0;if(n!==null){var i;if(t&Et){for(i=0;i<n.length;i++)((o=n[i]).reactions??(o.reactions=[])).push(e);e.f^=Et}for(i=0;i<n.length;i++){var s=n[i];if(pt(s)&&Ve(s),r&&d!==null&&!G&&!((a=s==null?void 0:s.reactions)!=null&&a.includes(e))&&(s.reactions??(s.reactions=[])).push(e),s.version>e.version)return!0}}r||w(e,$)}return!1}function fr(e,t){for(var n=t;n!==null;){if(n.f&Bt)try{n.fn(e);return}catch{n.f^=Bt}n=n.parent}throw $t=!1,e}function hr(e){return(e.f&X)===0&&(e.parent===null||(e.parent.f&Bt)===0)}function Ct(e,t,n,r){if($t){if(n===null&&($t=!1),hr(t))throw e;return}n!==null&&($t=!0);{fr(e,t);return}}function ln(e){var h;var t=y,n=b,r=M,i=p,s=G,o=C,a=v,l=e.f;y=null,b=0,M=null,p=l&(T|ht)?null:e,G=!V&&(l&q)!==0,C=null,v=e.ctx;try{var u=(0,e.fn)(),f=e.deps;if(y!==null){var c;if(lt(e,b),f!==null&&b>0)for(f.length=b+y.length,c=0;c<y.length;c++)f[b+c]=y[c];else e.deps=f=y;if(!G)for(c=b;c<f.length;c++)((h=f[c]).reactions??(h.reactions=[])).push(e)}else f!==null&&b<f.length&&(lt(e,b),f.length=b);return u}finally{y=t,b=n,M=r,p=i,G=s,C=o,v=a}}function dr(e,t){let n=t.reactions;if(n!==null){var r=n.indexOf(e);if(r!==-1){var i=n.length-1;i===0?n=t.reactions=null:(n[r]=n[i],n.pop())}}n===null&&t.f&A&&(y===null||!y.includes(t))&&(w(t,Z),t.f&(q|Et)||(t.f^=Et),lt(t,0))}function lt(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)dr(e,n[r])}function Pt(e){var t=e.f;if(!(t&X)){w(e,$);var n=d,r=v;d=e;try{t&Jt?ir(e):en(e),tn(e),Qe(e);var i=ln(e);e.teardown=typeof i=="function"?i:null,e.version=sn}catch(s){Ct(s,e,n,r||e.ctx)}finally{d=n}}}function pr(){if(rt>1e3){rt=0;try{Rn()}catch(e){if(St!==null)Ct(e,St,null);else throw e}}rt++}function _r(e){var t=e.length;if(t!==0){pr();var n=V;V=!0;try{for(var r=0;r<t;r++){var i=e[r];i.f&$||(i.f^=$);var s=[];an(i,s),vr(s)}}finally{V=n}}}function vr(e){var t=e.length;if(t!==0)for(var n=0;n<t;n++){var r=e[n];if(!(r.f&(X|At)))try{pt(r)&&(Pt(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?nn(r):r.fn=null))}catch(i){Ct(i,r,null,r.ctx)}}}function mr(){if(wt=!1,rt>1001)return;const e=Wt;Wt=[],_r(e),wt||(rt=0,St=null)}function Tt(e){wt||(wt=!0,queueMicrotask(mr)),St=e;for(var t=e;t.parent!==null;){t=t.parent;var n=t.f;if(n&(ht|T)){if(!(n&$))return;t.f^=$}}Wt.push(t)}function an(e,t){var n=e.first,r=[];t:for(;n!==null;){var i=n.f,s=(i&T)!==0,o=s&&(i&$)!==0,a=n.next;if(!o&&!(i&At))if(i&ft){if(s)n.f^=$;else try{pt(n)&&Pt(n)}catch(c){Ct(c,n,null,n.ctx)}var l=n.first;if(l!==null){n=l;continue}}else i&Re&&r.push(n);if(a===null){let c=n.parent;for(;c!==null;){if(e===c)break t;var u=c.next;if(u!==null){n=u;continue t}c=c.parent}}n=a}for(var f=0;f<r.length;f++)l=r[f],t.push(l),an(l,t)}function N(e){var f;var t=e.f,n=(t&A)!==0;if(n&&t&X){var r=We(e);return Xt(e),r}if(p!==null){C!==null&&C.includes(e)&&Ln();var i=p.deps;y===null&&i!==null&&i[b]===e?b++:y===null?y=[e]:y.push(e),M!==null&&d!==null&&d.f&$&&!(d.f&T)&&M.includes(e)&&(w(d,U),Tt(d))}else if(n&&e.deps===null)for(var s=e,o=s.parent,a=s;o!==null;)if(o.f&A){var l=o;a=l,o=l.parent}else{var u=o;(f=u.deriveds)!=null&&f.includes(a)||(u.deriveds??(u.deriveds=[])).push(a);break}return n&&(s=e,pt(s)&&Ve(s)),e.v}function ne(e){const t=p;try{return p=null,e()}finally{p=t}}const gr=~(U|Z|$);function w(e,t){e.f=e.f&gr|t}function Nt(e,t=!1,n){v={p:v,c:null,e:null,m:!1,s:e,x:null,l:null},dt&&!t&&(v.l={s:null,u:null,r1:[],r2:qe(!1)})}function Ot(e){const t=v;if(t!==null){const o=t.e;if(o!==null){var n=d,r=p;t.e=null;try{for(var i=0;i<o.length;i++){var s=o[i];E(s.effect),P(s.reaction),Je(s.fn)}}finally{E(n),P(r)}}v=t.p,t.m=!0}return{}}function yr(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(zt in e)Vt(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&zt in n&&Vt(n)}}}function Vt(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{Vt(e[r],t)}catch{}const n=It(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=Me(n);for(let i in r){const s=r[i].get;if(s)try{s.call(e)}catch{}}}}}function $r(e){var t=p,n=d;P(null),E(null);try{return e()}finally{P(t),E(n)}}const br=new Set,ve=new Set;function Er(e,t,n,r){function i(s){if(r.capture||nt.call(t,s),!s.cancelBubble)return $r(()=>n.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?ar(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}function un(e,t,n,r,i){var s={capture:r,passive:i},o=Er(e,t,n,s);(t===document.body||t===window||t===document)&&Ke(()=>{t.removeEventListener(e,o,s)})}function nt(e){var ce;var t=this,n=t.ownerDocument,r=e.type,i=((ce=e.composedPath)==null?void 0:ce.call(e))||[],s=i[0]||e.target,o=0,a=e.__root;if(a){var l=i.indexOf(a);if(l!==-1&&(t===document||t===window)){e.__root=t;return}var u=i.indexOf(t);if(u===-1)return;l<=u&&(o=l)}if(s=i[o]||e.target,s!==t){Sn(e,"currentTarget",{configurable:!0,get(){return s||n}});var f=p,c=d;P(null),E(null);try{for(var h,_=[];s!==null;){var m=s.assignedSlot||s.parentNode||s.host||null;try{var S=s["__"+r];if(S!==void 0&&!s.disabled)if(An(S)){var[vt,...x]=S;vt.apply(s,[e,...x])}else S.call(s,e)}catch(mt){h?_.push(mt):h=mt}if(e.cancelBubble||m===t||m===null)break;s=m}if(h){for(let mt of _)queueMicrotask(()=>{throw mt});throw h}}finally{e.__root=t,delete e.currentTarget,P(f),E(c)}}}function Ar(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function me(e,t){var n=d;n.nodes_start===null&&(n.nodes_start=e,n.nodes_end=t)}function re(e,t){var n=(t&jn)!==0,r=(t&Gn)!==0,i,s=!e.startsWith("<!>");return()=>{i===void 0&&(i=Ar(s?e:"<!>"+e),n||(i=Ft(i)));var o=r?document.importNode(i,!0):i.cloneNode(!0);if(n){var a=Ft(o),l=o.lastChild;me(a,l)}else me(o,o);return o}}function ie(e,t){e!==null&&e.before(t)}const wr=["touchstart","touchmove"];function Sr(e){return wr.includes(e)}function xr(e,t){return Cr(e,t)}const z=new Map;function Cr(e,{target:t,anchor:n,props:r={},events:i,context:s,intro:o=!0}){Wn();var a=new Set,l=c=>{for(var h=0;h<c.length;h++){var _=c[h];if(!a.has(_)){a.add(_);var m=Sr(_);t.addEventListener(_,nt,{passive:m});var S=z.get(_);S===void 0?(document.addEventListener(_,nt,{passive:m}),z.set(_,1)):z.set(_,S+1)}}};l(wn(br)),ve.add(l);var u=void 0,f=tr(()=>{var c=n??t.appendChild(Vn());return Xe(()=>{if(s){Nt({});var h=v;h.c=s}i&&(r.$$events=i),u=e(c,r)||{},s&&Ot()}),()=>{var m;for(var h of a){t.removeEventListener(h,nt);var _=z.get(h);--_===0?(document.removeEventListener(h,nt),z.delete(h)):z.set(h,_)}ve.delete(l),ge.delete(u),c!==n&&((m=c.parentNode)==null||m.removeChild(c))}});return ge.set(u,f),u}let ge=new WeakMap;function Pr(e,t,n){var r=e,i,s;Ze(()=>{i!==(i=t())&&(s&&(sr(s),s=null),i&&(s=Xe(()=>n(r,i))))},Ue)}function Tr(e,t,n,r){var i=e.__attributes??(e.__attributes={});i[t]!==(i[t]=n)&&(n==null?e.removeAttribute(t):typeof n!="string"&&cn(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function Nr(e,t,n){var r=p,i=d;P(null),E(null);try{cn(e).includes(t)?e[t]=n:Tr(e,t,n)}finally{P(r),E(i)}}var ye=new Map;function cn(e){var t=ye.get(e.nodeName);if(t)return t;ye.set(e.nodeName,t=[]);for(var n,r=It(e),i=Element.prototype;i!==r;){n=Me(r);for(var s in n)n[s].set&&t.push(s);r=It(r)}return t}function se(e=!1){const t=v,n=t.l.u;if(!n)return;let r=()=>yr(t.s);if(e){let i=0,s={};const o=Zt(()=>{let a=!1;const l=t.s;for(const u in l)l[u]!==s[u]&&(s[u]=l[u],a=!0);return a&&i++,i});r=()=>N(o)}n.b.length&&Qn(()=>{$e(t,r),qt(n.b)}),de(()=>{const i=ne(()=>n.m.map(xn));return()=>{for(const s of i)typeof s=="function"&&s()}}),n.a.length&&de(()=>{$e(t,r),qt(n.a)})}function $e(e,t){if(e.l.s)for(const n of e.l.s)N(n);t()}function fn(e,t,n){if(e==null)return t(void 0),W;const r=ne(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}let gt=!1;function Or(e,t,n){const r=n[t]??(n[t]={store:null,source:Be(void 0),unsubscribe:W});if(r.store!==e)if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=W;else{var i=!0;r.unsubscribe=fn(e,s=>{i?r.source.v=s:O(r.source,s)}),i=!1}return N(r.source)}function kr(){const e={};return Ke(()=>{for(var t in e)e[t].unsubscribe()}),e}function Mr(e){var t=gt;try{return gt=!1,[e(),gt]}finally{gt=t}}function Rr(e){for(var t=d,n=d;t!==null&&!(t.f&(T|ht));)t=t.parent;try{return E(t),e()}finally{E(n)}}function hn(e,t,n,r){var vt;var i=(n&Bn)!==0,s=!dt||(n&zn)!==0,o=(n&Fn)!==0,a=!1,l;[l,a]=Mr(()=>e[t]);var u=zt in e||Nn in e,f=((vt=Dt(e,t))==null?void 0:vt.set)??(u&&o&&t in e?x=>e[t]=x:void 0),c=r,h=!0,_=()=>(h&&(h=!1,c=r),c);l===void 0&&r!==void 0&&(f&&s&&Un(),l=_(),f&&f(l));var m;if(s)m=()=>{var x=e[t];return x===void 0?_():(h=!0,x)};else{var S=Rr(()=>(i?Zt:Jn)(()=>e[t]));S.f|=Pn,m=()=>{var x=N(S);return x!==void 0&&(c=void 0),x===void 0?c:x}}return m}const Ur="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ur);Dn();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bt=globalThis,oe=bt.ShadowRoot&&(bt.ShadyCSS===void 0||bt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,le=Symbol(),be=new WeakMap;let dn=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==le)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(oe&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=be.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&be.set(n,t))}return t}toString(){return this.cssText}};const Lr=e=>new dn(typeof e=="string"?e:e+"",void 0,le),ae=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new dn(n,e,le)},Hr=(e,t)=>{if(oe)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),i=bt.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},Ee=oe?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return Lr(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Dr,defineProperty:Ir,getOwnPropertyDescriptor:qr,getOwnPropertyNames:Br,getOwnPropertySymbols:zr,getPrototypeOf:Fr}=Object,R=globalThis,Ae=R.trustedTypes,jr=Ae?Ae.emptyScript:"",Mt=R.reactiveElementPolyfillSupport,it=(e,t)=>e,Yt={toAttribute(e,t){switch(t){case Boolean:e=e?jr:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},pn=(e,t)=>!Dr(e,t),we={attribute:!0,type:String,converter:Yt,reflect:!1,hasChanged:pn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),R.litPropertyMetadata??(R.litPropertyMetadata=new WeakMap);class j extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=we){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&Ir(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){const{get:i,set:s}=qr(this.prototype,t)??{get(){return this[n]},set(o){this[n]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){const a=i==null?void 0:i.call(this);s.call(this,o),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??we}static _$Ei(){if(this.hasOwnProperty(it("elementProperties")))return;const t=Fr(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(it("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(it("properties"))){const n=this.properties,r=[...Br(n),...zr(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(Ee(i))}else t!==void 0&&n.push(Ee(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$EO)==null||n.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Hr(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EC(t,n){var s;const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const o=(((s=r.converter)==null?void 0:s.toAttribute)!==void 0?r.converter:Yt).toAttribute(n,r.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,n){var s;const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=r.getPropertyOptions(i),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:Yt;this._$Em=i,this[i]=a.fromAttribute(n,o.type),this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??pn)(this[t],n))return;this.P(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,o]of i)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],o)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(r=this._$EO)==null||r.forEach(i=>{var s;return(s=i.hostUpdate)==null?void 0:s.call(i)}),this.update(n)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$EO)==null||n.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(t){}firstUpdated(t){}}j.elementStyles=[],j.shadowRootOptions={mode:"open"},j[it("elementProperties")]=new Map,j[it("finalized")]=new Map,Mt==null||Mt({ReactiveElement:j}),(R.reactiveElementVersions??(R.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st=globalThis,xt=st.trustedTypes,Se=xt?xt.createPolicy("lit-html",{createHTML:e=>e}):void 0,_n="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,vn="?"+k,Gr=`<${vn}>`,I=document,at=()=>I.createComment(""),ut=e=>e===null||typeof e!="object"&&typeof e!="function",ue=Array.isArray,Wr=e=>ue(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Rt=`[ 	
\f\r]`,et=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xe=/-->/g,Ce=/>/g,L=RegExp(`>|${Rt}(?:([^\\s"'>=/]+)(${Rt}*=${Rt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Pe=/'/g,Te=/"/g,mn=/^(?:script|style|textarea|title)$/i,Vr=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),Y=Vr(1),K=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Ne=new WeakMap,H=I.createTreeWalker(I,129);function gn(e,t){if(!ue(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Se!==void 0?Se.createHTML(t):t}const Yr=(e,t)=>{const n=e.length-1,r=[];let i,s=t===2?"<svg>":t===3?"<math>":"",o=et;for(let a=0;a<n;a++){const l=e[a];let u,f,c=-1,h=0;for(;h<l.length&&(o.lastIndex=h,f=o.exec(l),f!==null);)h=o.lastIndex,o===et?f[1]==="!--"?o=xe:f[1]!==void 0?o=Ce:f[2]!==void 0?(mn.test(f[2])&&(i=RegExp("</"+f[2],"g")),o=L):f[3]!==void 0&&(o=L):o===L?f[0]===">"?(o=i??et,c=-1):f[1]===void 0?c=-2:(c=o.lastIndex-f[2].length,u=f[1],o=f[3]===void 0?L:f[3]==='"'?Te:Pe):o===Te||o===Pe?o=L:o===xe||o===Ce?o=et:(o=L,i=void 0);const _=o===L&&e[a+1].startsWith("/>")?" ":"";s+=o===et?l+Gr:c>=0?(r.push(u),l.slice(0,c)+_n+l.slice(c)+k+_):l+k+(c===-2?a:_)}return[gn(e,s+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class ct{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let s=0,o=0;const a=t.length-1,l=this.parts,[u,f]=Yr(t,n);if(this.el=ct.createElement(u,r),H.currentNode=this.el.content,n===2||n===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=H.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(_n)){const h=f[o++],_=i.getAttribute(c).split(k),m=/([.?@])?(.*)/.exec(h);l.push({type:1,index:s,name:m[2],strings:_,ctor:m[1]==="."?Jr:m[1]==="?"?Zr:m[1]==="@"?Xr:kt}),i.removeAttribute(c)}else c.startsWith(k)&&(l.push({type:6,index:s}),i.removeAttribute(c));if(mn.test(i.tagName)){const c=i.textContent.split(k),h=c.length-1;if(h>0){i.textContent=xt?xt.emptyScript:"";for(let _=0;_<h;_++)i.append(c[_],at()),H.nextNode(),l.push({type:2,index:++s});i.append(c[h],at())}}}else if(i.nodeType===8)if(i.data===vn)l.push({type:2,index:s});else{let c=-1;for(;(c=i.data.indexOf(k,c+1))!==-1;)l.push({type:7,index:s}),c+=k.length-1}s++}}static createElement(t,n){const r=I.createElement("template");return r.innerHTML=t,r}}function J(e,t,n=e,r){var o,a;if(t===K)return t;let i=r!==void 0?(o=n._$Co)==null?void 0:o[r]:n._$Cl;const s=ut(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==s&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=i:n._$Cl=i),i!==void 0&&(t=J(e,i._$AS(e,t.values),i,r)),t}class Kr{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=((t==null?void 0:t.creationScope)??I).importNode(n,!0);H.currentNode=i;let s=H.nextNode(),o=0,a=0,l=r[0];for(;l!==void 0;){if(o===l.index){let u;l.type===2?u=new _t(s,s.nextSibling,this,t):l.type===1?u=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(u=new Qr(s,this,t)),this._$AV.push(u),l=r[++a]}o!==(l==null?void 0:l.index)&&(s=H.nextNode(),o++)}return H.currentNode=I,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class _t{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,r,i){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=J(this,t,n),ut(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==K&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Wr(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==g&&ut(this._$AH)?this._$AA.nextSibling.data=t:this.T(I.createTextNode(t)),this._$AH=t}$(t){var s;const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=ct.createElement(gn(r.h,r.h[0]),this.options)),r);if(((s=this._$AH)==null?void 0:s._$AD)===i)this._$AH.p(n);else{const o=new Kr(i,this),a=o.u(this.options);o.p(n),this.T(a),this._$AH=o}}_$AC(t){let n=Ne.get(t.strings);return n===void 0&&Ne.set(t.strings,n=new ct(t)),n}k(t){ue(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of t)i===n.length?n.push(r=new _t(this.O(at()),this.O(at()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}}class kt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,s){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=g}_$AI(t,n=this,r,i){const s=this.strings;let o=!1;if(s===void 0)t=J(this,t,n,0),o=!ut(t)||t!==this._$AH&&t!==K,o&&(this._$AH=t);else{const a=t;let l,u;for(t=s[0],l=0;l<s.length-1;l++)u=J(this,a[r+l],n,l),u===K&&(u=this._$AH[l]),o||(o=!ut(u)||u!==this._$AH[l]),u===g?t=g:t!==g&&(t+=(u??"")+s[l+1]),this._$AH[l]=u}o&&!i&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Jr extends kt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}}class Zr extends kt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}}class Xr extends kt{constructor(t,n,r,i,s){super(t,n,r,i,s),this.type=5}_$AI(t,n=this){if((t=J(this,t,n,0)??g)===K)return;const r=this._$AH,i=t===g&&r!==g||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==g&&(r===g||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}}class Qr{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const Ut=st.litHtmlPolyfillSupport;Ut==null||Ut(ct,_t),(st.litHtmlVersions??(st.litHtmlVersions=[])).push("3.2.1");const ti=(e,t,n)=>{const r=(n==null?void 0:n.renderBefore)??t;let i=r._$litPart$;if(i===void 0){const s=(n==null?void 0:n.renderBefore)??null;r._$litPart$=i=new _t(t.insertBefore(at(),s),s,void 0,n??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class D extends j{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ti(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return K}}var ke;D._$litElement$=!0,D.finalized=!0,(ke=globalThis.litElementHydrateSupport)==null||ke.call(globalThis,{LitElement:D});const Lt=globalThis.litElementPolyfillSupport;Lt==null||Lt({LitElement:D});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");class yn extends D{render(){return Y`
      <div class="mole">
        <div class="head">
          <div class="eye left"></div>
          <div class="eye right"></div>
          <div class="nose"></div>
        </div>
      </div>
    `}}B(yn,"styles",ae`
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
  `);customElements.define("mole-element",yn);class Kt extends D{constructor(){super(),this.name="",this.errorMessage=""}handleInput(t){this.name=t.target.value,this.errorMessage=""}handleSubmit(t){t.preventDefault();const n=this.name.trim(),r=n.length>=3;if(n&&r){const i=new CustomEvent("name-submitted",{detail:{name:this.name.trim()},bubbles:!0,composed:!0});this.dispatchEvent(i),this.errorMessage=""}else{const i=this.name.trim().length===0;this.name="",this.errorMessage=i?"Name cannot be empty":"Please enter a valid name, minimum 3 characters"}}render(){return Y`
      <h1>Tap the Mole</h1>
      <img src="/img/mole.webp" alt="Tap the Mole" />
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
        ${this.errorMessage?Y`<p>${this.errorMessage}</p>`:""}
      </form>
    `}}B(Kt,"properties",{name:{type:String},errorMessage:{type:String}}),B(Kt,"styles",ae`
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

  `);customElements.define("home-form",Kt);const F=[];function ei(e,t=W){let n=null;const r=new Set;function i(a){if(De(e,a)&&(e=a,n)){const l=!F.length;for(const u of r)u[1](),F.push(u,e);if(l){for(let u=0;u<F.length;u+=2)F[u][0](F[u+1]);F.length=0}}}function s(a){i(a(e))}function o(a,l=W){const u=[a,l];return r.add(u),r.size===1&&(n=t(i,s)||W),a(e),()=>{r.delete(u),r.size===0&&n&&(n(),n=null)}}return{set:i,update:s,subscribe:o}}function Ht(e){let t;return fn(e,n=>t=n)(),t}const ot=ei("");function ni(e){ot.set(e.trim())}var ri=re("<home-form></home-form>",2);function Oe(e,t){Nt(t,!1);let n=hn(t,"navigate",8);function r(s){const o=s.detail.name;o.trim()&&(ni(o),n()("/game"))}se();var i=ri();un("name-submitted",i,r),ie(e,i),Ot()}var yt;let ii=(yt=class extends D{constructor(){super(),this.playerName="",this.playGame=!1,this.levelSelected=0,this.points=0,this.holeSelected=-1,this.buttonLevel=[{text:"Low",class:"low",points:10,secondWait:1e3},{text:"Medium",class:"medium",points:20,secondWait:750},{text:"High",class:"high",points:30,secondWait:500}]}toggleGame(){this.playGame=!this.playGame,this.playGame?(this.points=0,this.randomShowMole()):(this.holeSelected=-1,this.levelSelected=0)}randomShowMole(){this.playGame&&(this.holeSelected=this.getRandomMole(),setTimeout(()=>{this.randomShowMole()},this.buttonLevel[this.levelSelected].secondWait))}getRandomMole(){let t=Math.floor(Math.random()*9);return t===this.holeSelected&&(t=t===8?0:t+1),t}toggleLevel(t){this.levelSelected=parseInt(t.target.dataset.index)}handleMoleClick(){this.points+=this.buttonLevel[this.levelSelected].points}exitGame(){const t=new CustomEvent("game-exit",{detail:{playGame:this.playGame},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){return Y`
      <div>
        <h1>Welcome, ${this.playerName}!</h1>
        <p>Points: <span>${this.points}</span></p>

        <div class="grid">
          ${this.buttonLevel.map((t,n)=>Y`<button 
                  type="button"
                  data-index="${n}"
                  class="${t.class} ${this.levelSelected===n?"selected":""}"
                  @click="${this.toggleLevel}"
                >
                  ${t.text}
                </button>
              `)}
        </div>

        <div class="grid grid-hole">
          ${Array.from({length:9}).map((t,n)=>Y`<div class="hole ${n===this.holeSelected?"mole":""}" id="hole-${n}">
                    <mole-element @click="${this.handleMoleClick}"></mole-element>
                  </div>`)}
        </div>

        <p>${this.playGame?"Let's play!":"Click 'Play' to start!"}</p>
        <button type="button" @click="${this.toggleGame}">
          ${this.playGame?"Stop":"Play"}
        </button>
        <button class="btn-exit" type="button" @click="${this.exitGame}">Exit</button>
      </div>
    `}},B(yt,"properties",{playerName:{type:String},playGame:{type:Boolean},levelSelected:{type:Number},points:{type:Number},holeSelected:{type:Number},buttonLevel:{type:Array}}),B(yt,"styles",ae`
    :host {
      display: block;
      text-align: center;
    }

    mole-element {
      display: none;
    }

    .hole.mole mole-element {
      display: block;
    }

    h1 {
      font-size: 2rem;
      color: #333;
    }

    p {
      font-size: 1.2rem;
      color: #666;
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

    button.btn-exit {
      background-color: #cd5c5c;
      margin-left: 16px;
    }

    .grid button:hover, button.selected {
      border: 3px solid #000;
      opacity: 1;
    }

  `),yt);customElements.define("game-view",ii);var si=re("<game-view></game-view>",2);function oi(e,t){Nt(t,!1);const n=kr(),r=()=>Or(ot,"$name",n);let i=hn(t,"navigate",8);function s(a){i()("/home")}se();var o=si();rr(()=>Nr(o,"playerName",r())),un("game-exit",o,s),ie(e,o),Ot()}var li=re("<main><!></main>");function ai(e,t){Nt(t,!1);const n=fe();let r=fe(window.location.pathname);N(r)==="/game"&&!Ht(ot)&&(O(r,"/"),history.replaceState({},"","/"));function i(a){a==="/game"&&!Ht(ot)?(O(r,"/"),history.pushState({},"","/")):(O(r,a),history.pushState({},"",a))}window.onpopstate=()=>{window.location.pathname==="/game"&&!Ht(ot)?(O(r,"/"),history.replaceState({},"","/")):O(r,window.location.pathname)},er(()=>(N(r),Oe),()=>{O(n,N(r)==="/game"?oi:Oe)}),nr(),se();var s=li(),o=Kn(s);Pr(o,()=>N(n),(a,l)=>{l(a,{navigate:i})}),ie(e,s),Ot()}xr(ai,{target:document.getElementById("app")});

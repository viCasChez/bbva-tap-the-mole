var Dn=Object.defineProperty;var In=(e,t,n)=>t in e?Dn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var C=(e,t,n)=>In(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Gn=!1;var Bn=Array.isArray,qn=Array.from,jn=Object.defineProperty,Jt=Object.getOwnPropertyDescriptor,Ye=Object.getOwnPropertyDescriptors,Ke=Object.getPrototypeOf;const J=()=>{};function Wn(e){return e()}function Zt(e){for(var t=0;t<e.length;t++)e[t]()}const S=2,Je=4,yt=8,he=16,O=32,bt=64,Xt=128,q=256,Mt=512,b=1024,H=2048,tt=4096,Rt=8192,et=16384,Fn=32768,Ze=65536,zn=1<<17,Vn=1<<19,Xe=1<<20,Qt=Symbol("$state"),Yn=Symbol("legacy props"),Kn=Symbol("");function Qe(e){return e===this.v}function tn(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function en(e){return!tn(e,this.v)}function Jn(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Zn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Xn(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Qn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function tr(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function er(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function nr(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let $t=!1;function rr(){$t=!0}function nn(e){return{f:0,v:e,reactions:null,equals:Qe,version:0}}function rn(e,t=!1){var r;const n=nn(e);return t||(n.equals=en),$t&&v!==null&&v.l!==null&&((r=v.l).s??(r.s=[])).push(n),n}function te(e,t=!1){return sr(rn(e,t))}function sr(e){return _!==null&&_.f&S&&(T===null?wr([e]):T.push(e)),e}function k(e,t){return _!==null&&me()&&_.f&(S|he)&&(T===null||!T.includes(e))&&nr(),ir(e,t)}function ir(e,t){return e.equals(t)||(e.v=t,e.version=Sn(),sn(e,H),me()&&d!==null&&d.f&b&&!(d.f&O)&&(y!==null&&y.includes(e)?(x(d,H),Gt(d)):U===null?Sr([e]):U.push(e))),t}function sn(e,t){var n=e.reactions;if(n!==null)for(var r=me(),s=n.length,i=0;i<s;i++){var o=n[i],a=o.f;a&H||!r&&o===d||(x(o,t),a&(b|q)&&(a&S?sn(o,tt):Gt(o)))}}const or=1,lr=2,ar=8,ur=1,cr=2;var Ce,on,ln;function fr(){if(Ce===void 0){Ce=window;var e=Element.prototype,t=Node.prototype;on=Jt(t,"firstChild").get,ln=Jt(t,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function hr(e=""){return document.createTextNode(e)}function ee(e){return on.call(e)}function an(e){return ln.call(e)}function ut(e,t){return ee(e)}function ot(e,t=1,n=!1){let r=e;for(;t--;)r=an(r);return r}function de(e){var t=S|H;d===null?t|=q:d.f|=Xe;var n=_!==null&&_.f&S?_:null;const r={children:null,ctx:v,deps:null,equals:Qe,f:t,fn:e,reactions:null,v:null,version:0,parent:n??d};return n!==null&&(n.children??(n.children=[])).push(r),r}function dr(e){const t=de(e);return t.equals=en,t}function un(e){var t=e.children;if(t!==null){e.children=null;for(var n=0;n<t.length;n+=1){var r=t[n];r.f&S?pe(r):rt(r)}}}function pr(e){for(var t=e.parent;t!==null;){if(!(t.f&S))return t;t=t.parent}return null}function cn(e){var t,n=d;w(pr(e));try{un(e),t=xn(e)}finally{w(n)}return t}function fn(e){var t=cn(e),n=(K||e.f&q)&&e.deps!==null?tt:b;x(e,n),e.equals(t)||(e.v=t,e.version=Sn())}function pe(e){un(e),_t(e,0),x(e,et),e.v=e.children=e.deps=e.ctx=e.reactions=null}function hn(e){d===null&&_===null&&Xn(),_!==null&&_.f&q&&Zn(),ve&&Jn()}function _r(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function nt(e,t,n,r=!0){var s=(e&bt)!==0,i=d,o={ctx:v,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|H,first:null,fn:t,last:null,next:null,parent:s?null:i,prev:null,teardown:null,transitions:null,version:0};if(n){var a=Z;try{Te(!0),It(o),o.f|=Fn}catch(f){throw rt(o),f}finally{Te(a)}}else t!==null&&Gt(o);var l=n&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&Xe)===0;if(!l&&!s&&r&&(i!==null&&_r(o,i),_!==null&&_.f&S)){var u=_;(u.children??(u.children=[])).push(o)}return o}function dn(e){const t=nt(yt,null,!1);return x(t,b),t.teardown=e,t}function Pe(e){hn();var t=d!==null&&(d.f&O)!==0&&v!==null&&!v.m;if(t){var n=v;(n.e??(n.e=[])).push({fn:e,effect:d,reaction:_})}else{var r=pn(e);return r}}function vr(e){return hn(),_e(e)}function mr(e){const t=nt(bt,e,!0);return()=>{rt(t)}}function pn(e){return nt(Je,e,!1)}function _n(e,t){var n=v,r={effect:null,ran:!1};n.l.r1.push(r),r.effect=_e(()=>{e(),!r.ran&&(r.ran=!0,k(n.l.r2,!0),ge(t))})}function vn(){var e=v;_e(()=>{if(P(e.l.r2)){for(var t of e.l.r1){var n=t.effect;n.f&b&&x(n,tt),Et(n)&&It(n),t.ran=!1}e.l.r2.v=!1}})}function _e(e){return nt(yt,e,!0)}function gr(e){return mn(e)}function mn(e,t=0){return nt(yt|he|t,e,!0)}function gn(e,t=!0){return nt(yt|O,e,!0,t)}function yn(e){var t=e.teardown;if(t!==null){const n=ve,r=_;Ne(!0),N(null);try{t.call(null)}finally{Ne(n),N(r)}}}function bn(e){var t=e.deriveds;if(t!==null){e.deriveds=null;for(var n=0;n<t.length;n+=1)pe(t[n])}}function $n(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){var r=n.next;rt(n,t),n=r}}function yr(e){for(var t=e.first;t!==null;){var n=t.next;t.f&O||rt(t),t=n}}function rt(e,t=!0){var n=!1;if((t||e.f&Vn)&&e.nodes_start!==null){for(var r=e.nodes_start,s=e.nodes_end;r!==null;){var i=r===s?null:an(r);r.remove(),r=i}n=!0}$n(e,t&&!n),bn(e),_t(e,0),x(e,et);var o=e.transitions;if(o!==null)for(const l of o)l.stop();yn(e);var a=e.parent;a!==null&&a.first!==null&&En(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function En(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function br(e,t){var n=[];An(e,n,!0),$r(n,()=>{rt(e)})}function $r(e,t){var n=e.length;if(n>0){var r=()=>--n||t();for(var s of e)s.out(r)}else t()}function An(e,t,n){if(!(e.f&Rt)){if(e.f^=Rt,e.transitions!==null)for(const o of e.transitions)(o.is_global||n)&&t.push(o);for(var r=e.first;r!==null;){var s=r.next,i=(r.f&Ze)!==0||(r.f&O)!==0;An(r,t,i?n:!1),r=s}}}let ne=!1,re=[];function Er(){ne=!1;const e=re.slice();re=[],Zt(e)}function Ar(e){ne||(ne=!0,queueMicrotask(Er)),re.push(e)}let Nt=!1,Ut=!1,Lt=null,Z=!1,ve=!1;function Te(e){Z=e}function Ne(e){ve=e}let se=[],ft=0;let _=null;function N(e){_=e}let d=null;function w(e){d=e}let T=null;function wr(e){T=e}let y=null,A=0,U=null;function Sr(e){U=e}let wn=0,K=!1,v=null;function Sn(){return++wn}function me(){return!$t||v!==null&&v.l===null}function Et(e){var o,a;var t=e.f;if(t&H)return!0;if(t&tt){var n=e.deps,r=(t&q)!==0;if(n!==null){var s;if(t&Mt){for(s=0;s<n.length;s++)((o=n[s]).reactions??(o.reactions=[])).push(e);e.f^=Mt}for(s=0;s<n.length;s++){var i=n[s];if(Et(i)&&fn(i),r&&d!==null&&!K&&!((a=i==null?void 0:i.reactions)!=null&&a.includes(e))&&(i.reactions??(i.reactions=[])).push(e),i.version>e.version)return!0}}r||x(e,b)}return!1}function xr(e,t){for(var n=t;n!==null;){if(n.f&Xt)try{n.fn(e);return}catch{n.f^=Xt}n=n.parent}throw Nt=!1,e}function Cr(e){return(e.f&et)===0&&(e.parent===null||(e.parent.f&Xt)===0)}function Dt(e,t,n,r){if(Nt){if(n===null&&(Nt=!1),Cr(t))throw e;return}n!==null&&(Nt=!0);{xr(e,t);return}}function xn(e){var h;var t=y,n=A,r=U,s=_,i=K,o=T,a=v,l=e.f;y=null,A=0,U=null,_=l&(O|bt)?null:e,K=!Z&&(l&q)!==0,T=null,v=e.ctx;try{var u=(0,e.fn)(),f=e.deps;if(y!==null){var c;if(_t(e,A),f!==null&&A>0)for(f.length=A+y.length,c=0;c<y.length;c++)f[A+c]=y[c];else e.deps=f=y;if(!K)for(c=A;c<f.length;c++)((h=f[c]).reactions??(h.reactions=[])).push(e)}else f!==null&&A<f.length&&(_t(e,A),f.length=A);return u}finally{y=t,A=n,U=r,_=s,K=i,T=o,v=a}}function Pr(e,t){let n=t.reactions;if(n!==null){var r=n.indexOf(e);if(r!==-1){var s=n.length-1;s===0?n=t.reactions=null:(n[r]=n[s],n.pop())}}n===null&&t.f&S&&(y===null||!y.includes(t))&&(x(t,tt),t.f&(q|Mt)||(t.f^=Mt),_t(t,0))}function _t(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Pr(e,n[r])}function It(e){var t=e.f;if(!(t&et)){x(e,b);var n=d,r=v;d=e;try{t&he?yr(e):$n(e),bn(e),yn(e);var s=xn(e);e.teardown=typeof s=="function"?s:null,e.version=wn}catch(i){Dt(i,e,n,r||e.ctx)}finally{d=n}}}function Tr(){if(ft>1e3){ft=0;try{Qn()}catch(e){if(Lt!==null)Dt(e,Lt,null);else throw e}}ft++}function Nr(e){var t=e.length;if(t!==0){Tr();var n=Z;Z=!0;try{for(var r=0;r<t;r++){var s=e[r];s.f&b||(s.f^=b);var i=[];Cn(s,i),Or(i)}}finally{Z=n}}}function Or(e){var t=e.length;if(t!==0)for(var n=0;n<t;n++){var r=e[n];if(!(r.f&(et|Rt)))try{Et(r)&&(It(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?En(r):r.fn=null))}catch(s){Dt(s,r,null,r.ctx)}}}function kr(){if(Ut=!1,ft>1001)return;const e=se;se=[],Nr(e),Ut||(ft=0,Lt=null)}function Gt(e){Ut||(Ut=!0,queueMicrotask(kr)),Lt=e;for(var t=e;t.parent!==null;){t=t.parent;var n=t.f;if(n&(bt|O)){if(!(n&b))return;t.f^=b}}se.push(t)}function Cn(e,t){var n=e.first,r=[];t:for(;n!==null;){var s=n.f,i=(s&O)!==0,o=i&&(s&b)!==0,a=n.next;if(!o&&!(s&Rt))if(s&yt){if(i)n.f^=b;else try{Et(n)&&It(n)}catch(c){Dt(c,n,null,n.ctx)}var l=n.first;if(l!==null){n=l;continue}}else s&Je&&r.push(n);if(a===null){let c=n.parent;for(;c!==null;){if(e===c)break t;var u=c.next;if(u!==null){n=u;continue t}c=c.parent}}n=a}for(var f=0;f<r.length;f++)l=r[f],t.push(l),Cn(l,t)}function P(e){var f;var t=e.f,n=(t&S)!==0;if(n&&t&et){var r=cn(e);return pe(e),r}if(_!==null){T!==null&&T.includes(e)&&er();var s=_.deps;y===null&&s!==null&&s[A]===e?A++:y===null?y=[e]:y.push(e),U!==null&&d!==null&&d.f&b&&!(d.f&O)&&U.includes(e)&&(x(d,H),Gt(d))}else if(n&&e.deps===null)for(var i=e,o=i.parent,a=i;o!==null;)if(o.f&S){var l=o;a=l,o=l.parent}else{var u=o;(f=u.deriveds)!=null&&f.includes(a)||(u.deriveds??(u.deriveds=[])).push(a);break}return n&&(i=e,Et(i)&&fn(i)),e.v}function ge(e){const t=_;try{return _=null,e()}finally{_=t}}const Mr=~(H|tt|b);function x(e,t){e.f=e.f&Mr|t}function Bt(e,t=!1,n){v={p:v,c:null,e:null,m:!1,s:e,x:null,l:null},$t&&!t&&(v.l={s:null,u:null,r1:[],r2:nn(!1)})}function qt(e){const t=v;if(t!==null){const o=t.e;if(o!==null){var n=d,r=_;t.e=null;try{for(var s=0;s<o.length;s++){var i=o[s];w(i.effect),N(i.reaction),pn(i.fn)}}finally{w(n),N(r)}}v=t.p,t.m=!0}return{}}function Rr(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Qt in e)ie(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&Qt in n&&ie(n)}}}function ie(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{ie(e[r],t)}catch{}const n=Ke(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=Ye(n);for(let s in r){const i=r[s].get;if(i)try{i.call(e)}catch{}}}}}function Ur(e){var t=_,n=d;N(null),w(null);try{return e()}finally{N(t),w(n)}}const Lr=new Set,Oe=new Set;function Hr(e,t,n,r){function s(i){if(r.capture||ct.call(t,i),!i.cancelBubble)return Ur(()=>n.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Ar(()=>{t.addEventListener(e,s,r)}):t.addEventListener(e,s,r),s}function V(e,t,n,r,s){var i={capture:r,passive:s},o=Hr(e,t,n,i);(t===document.body||t===window||t===document)&&dn(()=>{t.removeEventListener(e,o,i)})}function ct(e){var St;var t=this,n=t.ownerDocument,r=e.type,s=((St=e.composedPath)==null?void 0:St.call(e))||[],i=s[0]||e.target,o=0,a=e.__root;if(a){var l=s.indexOf(a);if(l!==-1&&(t===document||t===window)){e.__root=t;return}var u=s.indexOf(t);if(u===-1)return;l<=u&&(o=l)}if(i=s[o]||e.target,i!==t){jn(e,"currentTarget",{configurable:!0,get(){return i||n}});var f=_,c=d;N(null),w(null);try{for(var h,p=[];i!==null;){var m=i.assignedSlot||i.parentNode||i.host||null;try{var $=i["__"+r];if($!==void 0&&!i.disabled)if(Bn($)){var[j,...E]=$;j.apply(i,[e,...E])}else $.call(i,e)}catch(W){h?p.push(W):h=W}if(e.cancelBubble||m===t||m===null)break;i=m}if(h){for(let W of p)queueMicrotask(()=>{throw W});throw h}}finally{e.__root=t,delete e.currentTarget,N(f),w(c)}}}function Dr(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function ke(e,t){var n=d;n.nodes_start===null&&(n.nodes_start=e,n.nodes_end=t)}function ye(e,t){var n=(t&ur)!==0,r=(t&cr)!==0,s,i=!e.startsWith("<!>");return()=>{s===void 0&&(s=Dr(i?e:"<!>"+e),n||(s=ee(s)));var o=r?document.importNode(s,!0):s.cloneNode(!0);if(n){var a=ee(o),l=o.lastChild;ke(a,l)}else ke(o,o);return o}}function be(e,t){e!==null&&e.before(t)}const Ir=["touchstart","touchmove"];function Gr(e){return Ir.includes(e)}function Me(e,t){var n=t==null?"":typeof t=="object"?t+"":t;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function Br(e,t){return qr(e,t)}const F=new Map;function qr(e,{target:t,anchor:n,props:r={},events:s,context:i,intro:o=!0}){fr();var a=new Set,l=c=>{for(var h=0;h<c.length;h++){var p=c[h];if(!a.has(p)){a.add(p);var m=Gr(p);t.addEventListener(p,ct,{passive:m});var $=F.get(p);$===void 0?(document.addEventListener(p,ct,{passive:m}),F.set(p,1)):F.set(p,$+1)}}};l(qn(Lr)),Oe.add(l);var u=void 0,f=mr(()=>{var c=n??t.appendChild(hr());return gn(()=>{if(i){Bt({});var h=v;h.c=i}s&&(r.$$events=s),u=e(c,r)||{},i&&qt()}),()=>{var m;for(var h of a){t.removeEventListener(h,ct);var p=F.get(h);--p===0?(document.removeEventListener(h,ct),F.delete(h)):F.set(h,p)}Oe.delete(l),Re.delete(u),c!==n&&((m=c.parentNode)==null||m.removeChild(c))}});return Re.set(u,f),u}let Re=new WeakMap;function jr(e,t,n){var r=e,s,i;mn(()=>{s!==(s=t())&&(i&&(br(i),i=null),s&&(i=gn(()=>n(r,s))))},Ze)}function Wr(e,t,n,r){var s=e.__attributes??(e.__attributes={});s[t]!==(s[t]=n)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[Kn]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Pn(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function lt(e,t,n){var r=_,s=d;N(null),w(null);try{(oe.has(e.nodeName)||customElements.get(e.tagName.toLowerCase())?Pn(e).includes(t):n&&typeof n=="object")?e[t]=n:Wr(e,t,n==null?n:String(n))}finally{N(r),w(s)}}var oe=new Map;function Pn(e){var t=oe.get(e.nodeName);if(t)return t;oe.set(e.nodeName,t=[]);for(var n,r=e,s=Element.prototype;s!==r;){n=Ye(r);for(var i in n)n[i].set&&t.push(i);r=Ke(r)}return t}function $e(e=!1){const t=v,n=t.l.u;if(!n)return;let r=()=>Rr(t.s);if(e){let s=0,i={};const o=de(()=>{let a=!1;const l=t.s;for(const u in l)l[u]!==i[u]&&(i[u]=l[u],a=!0);return a&&s++,s});r=()=>P(o)}n.b.length&&vr(()=>{Ue(t,r),Zt(n.b)}),Pe(()=>{const s=ge(()=>n.m.map(Wn));return()=>{for(const i of s)typeof i=="function"&&i()}}),n.a.length&&Pe(()=>{Ue(t,r),Zt(n.a)})}function Ue(e,t){if(e.l.s)for(const n of e.l.s)P(n);t()}function Tn(e,t,n){if(e==null)return t(void 0),J;const r=ge(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}let Ct=!1;function Pt(e,t,n){const r=n[t]??(n[t]={store:null,source:rn(void 0),unsubscribe:J});if(r.store!==e)if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=J;else{var s=!0;r.unsubscribe=Tn(e,i=>{s?r.source.v=i:k(r.source,i)}),s=!1}return P(r.source)}function Fr(){const e={};return dn(()=>{for(var t in e)e[t].unsubscribe()}),e}function zr(e){var t=Ct;try{return Ct=!1,[e(),Ct]}finally{Ct=t}}function Vr(e){for(var t=d,n=d;t!==null&&!(t.f&(O|bt));)t=t.parent;try{return w(t),e()}finally{w(n)}}function Nn(e,t,n,r){var j;var s=(n&or)!==0,i=!$t||(n&lr)!==0,o=(n&ar)!==0,a=!1,l;[l,a]=zr(()=>e[t]);var u=Qt in e||Yn in e,f=((j=Jt(e,t))==null?void 0:j.set)??(u&&o&&t in e?E=>e[t]=E:void 0),c=r,h=!0,p=()=>(h&&(h=!1,c=r),c);l===void 0&&r!==void 0&&(f&&i&&tr(),l=p(),f&&f(l));var m;if(i)m=()=>{var E=e[t];return E===void 0?p():(h=!0,E)};else{var $=Vr(()=>(s?de:dr)(()=>e[t]));$.f|=zn,m=()=>{var E=P($);return E!==void 0&&(c=void 0),E===void 0?c:E}}return m}const Yr="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Yr);rr();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot=globalThis,Ee=Ot.ShadowRoot&&(Ot.ShadyCSS===void 0||Ot.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ae=Symbol(),Le=new WeakMap;let On=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==Ae)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Ee&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=Le.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Le.set(n,t))}return t}toString(){return this.cssText}};const Kr=e=>new On(typeof e=="string"?e:e+"",void 0,Ae),At=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,s,i)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]);return new On(n,e,Ae)},Jr=(e,t)=>{if(Ee)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),s=Ot.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=n.cssText,e.appendChild(r)}},He=Ee?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return Kr(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Zr,defineProperty:Xr,getOwnPropertyDescriptor:Qr,getOwnPropertyNames:ts,getOwnPropertySymbols:es,getPrototypeOf:ns}=Object,L=globalThis,De=L.trustedTypes,rs=De?De.emptyScript:"",zt=L.reactiveElementPolyfillSupport,ht=(e,t)=>e,le={toAttribute(e,t){switch(t){case Boolean:e=e?rs:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},kn=(e,t)=>!Zr(e,t),Ie={attribute:!0,type:String,converter:le,reflect:!1,hasChanged:kn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),L.litPropertyMetadata??(L.litPropertyMetadata=new WeakMap);class Y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Ie){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,n);s!==void 0&&Xr(this.prototype,t,s)}}static getPropertyDescriptor(t,n,r){const{get:s,set:i}=Qr(this.prototype,t)??{get(){return this[n]},set(o){this[n]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const a=s==null?void 0:s.call(this);i.call(this,o),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ie}static _$Ei(){if(this.hasOwnProperty(ht("elementProperties")))return;const t=ns(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ht("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ht("properties"))){const n=this.properties,r=[...ts(n),...es(n)];for(const s of r)this.createProperty(s,n[s])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,s]of n)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const s=this._$Eu(n,r);s!==void 0&&this._$Eh.set(s,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)n.unshift(He(s))}else t!==void 0&&n.push(He(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$EO)==null||n.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Jr(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EC(t,n){var i;const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){const o=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:le).toAttribute(n,r.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,n){var i;const r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const o=r.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)==null?void 0:i.fromAttribute)!==void 0?o.converter:le;this._$Em=s,this[s]=a.fromAttribute(n,o.type),this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??kn)(this[t],n))return;this.P(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,o]of s)o.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],o)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(r=this._$EO)==null||r.forEach(s=>{var i;return(i=s.hostUpdate)==null?void 0:i.call(s)}),this.update(n)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$EO)==null||n.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(t){}firstUpdated(t){}}Y.elementStyles=[],Y.shadowRootOptions={mode:"open"},Y[ht("elementProperties")]=new Map,Y[ht("finalized")]=new Map,zt==null||zt({ReactiveElement:Y}),(L.reactiveElementVersions??(L.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=globalThis,Ht=dt.trustedTypes,Ge=Ht?Ht.createPolicy("lit-html",{createHTML:e=>e}):void 0,Mn="$lit$",R=`lit$${Math.random().toFixed(9).slice(2)}$`,Rn="?"+R,ss=`<${Rn}>`,B=document,vt=()=>B.createComment(""),mt=e=>e===null||typeof e!="object"&&typeof e!="function",we=Array.isArray,is=e=>we(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Vt=`[ 	
\f\r]`,at=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Be=/-->/g,qe=/>/g,I=RegExp(`>|${Vt}(?:([^\\s"'>=/]+)(${Vt}*=${Vt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),je=/'/g,We=/"/g,Un=/^(?:script|style|textarea|title)$/i,os=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),D=os(1),X=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Fe=new WeakMap,G=B.createTreeWalker(B,129);function Ln(e,t){if(!we(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ge!==void 0?Ge.createHTML(t):t}const ls=(e,t)=>{const n=e.length-1,r=[];let s,i=t===2?"<svg>":t===3?"<math>":"",o=at;for(let a=0;a<n;a++){const l=e[a];let u,f,c=-1,h=0;for(;h<l.length&&(o.lastIndex=h,f=o.exec(l),f!==null);)h=o.lastIndex,o===at?f[1]==="!--"?o=Be:f[1]!==void 0?o=qe:f[2]!==void 0?(Un.test(f[2])&&(s=RegExp("</"+f[2],"g")),o=I):f[3]!==void 0&&(o=I):o===I?f[0]===">"?(o=s??at,c=-1):f[1]===void 0?c=-2:(c=o.lastIndex-f[2].length,u=f[1],o=f[3]===void 0?I:f[3]==='"'?We:je):o===We||o===je?o=I:o===Be||o===qe?o=at:(o=I,s=void 0);const p=o===I&&e[a+1].startsWith("/>")?" ":"";i+=o===at?l+ss:c>=0?(r.push(u),l.slice(0,c)+Mn+l.slice(c)+R+p):l+R+(c===-2?a:p)}return[Ln(e,i+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class gt{constructor({strings:t,_$litType$:n},r){let s;this.parts=[];let i=0,o=0;const a=t.length-1,l=this.parts,[u,f]=ls(t,n);if(this.el=gt.createElement(u,r),G.currentNode=this.el.content,n===2||n===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=G.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(Mn)){const h=f[o++],p=s.getAttribute(c).split(R),m=/([.?@])?(.*)/.exec(h);l.push({type:1,index:i,name:m[2],strings:p,ctor:m[1]==="."?us:m[1]==="?"?cs:m[1]==="@"?fs:jt}),s.removeAttribute(c)}else c.startsWith(R)&&(l.push({type:6,index:i}),s.removeAttribute(c));if(Un.test(s.tagName)){const c=s.textContent.split(R),h=c.length-1;if(h>0){s.textContent=Ht?Ht.emptyScript:"";for(let p=0;p<h;p++)s.append(c[p],vt()),G.nextNode(),l.push({type:2,index:++i});s.append(c[h],vt())}}}else if(s.nodeType===8)if(s.data===Rn)l.push({type:2,index:i});else{let c=-1;for(;(c=s.data.indexOf(R,c+1))!==-1;)l.push({type:7,index:i}),c+=R.length-1}i++}}static createElement(t,n){const r=B.createElement("template");return r.innerHTML=t,r}}function Q(e,t,n=e,r){var o,a;if(t===X)return t;let s=r!==void 0?(o=n._$Co)==null?void 0:o[r]:n._$Cl;const i=mt(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==i&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),i===void 0?s=void 0:(s=new i(e),s._$AT(e,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=s:n._$Cl=s),s!==void 0&&(t=Q(e,s._$AS(e,t.values),s,r)),t}class as{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,s=((t==null?void 0:t.creationScope)??B).importNode(n,!0);G.currentNode=s;let i=G.nextNode(),o=0,a=0,l=r[0];for(;l!==void 0;){if(o===l.index){let u;l.type===2?u=new wt(i,i.nextSibling,this,t):l.type===1?u=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(u=new hs(i,this,t)),this._$AV.push(u),l=r[++a]}o!==(l==null?void 0:l.index)&&(i=G.nextNode(),o++)}return G.currentNode=B,s}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class wt{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,r,s){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Q(this,t,n),mt(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==X&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):is(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==g&&mt(this._$AH)?this._$AA.nextSibling.data=t:this.T(B.createTextNode(t)),this._$AH=t}$(t){var i;const{values:n,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=gt.createElement(Ln(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)==null?void 0:i._$AD)===s)this._$AH.p(n);else{const o=new as(s,this),a=o.u(this.options);o.p(n),this.T(a),this._$AH=o}}_$AC(t){let n=Fe.get(t.strings);return n===void 0&&Fe.set(t.strings,n=new gt(t)),n}k(t){we(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,s=0;for(const i of t)s===n.length?n.push(r=new wt(this.O(vt()),this.O(vt()),this,this.options)):r=n[s],r._$AI(i),s++;s<n.length&&(this._$AR(r&&r._$AB.nextSibling,s),n.length=s)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}}class jt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,s,i){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=n,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=g}_$AI(t,n=this,r,s){const i=this.strings;let o=!1;if(i===void 0)t=Q(this,t,n,0),o=!mt(t)||t!==this._$AH&&t!==X,o&&(this._$AH=t);else{const a=t;let l,u;for(t=i[0],l=0;l<i.length-1;l++)u=Q(this,a[r+l],n,l),u===X&&(u=this._$AH[l]),o||(o=!mt(u)||u!==this._$AH[l]),u===g?t=g:t!==g&&(t+=(u??"")+i[l+1]),this._$AH[l]=u}o&&!s&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class us extends jt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}}class cs extends jt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}}class fs extends jt{constructor(t,n,r,s,i){super(t,n,r,s,i),this.type=5}_$AI(t,n=this){if((t=Q(this,t,n,0)??g)===X)return;const r=this._$AH,s=t===g&&r!==g||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==g&&(r===g||s);s&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}}class hs{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const Yt=dt.litHtmlPolyfillSupport;Yt==null||Yt(gt,wt),(dt.litHtmlVersions??(dt.litHtmlVersions=[])).push("3.2.1");const ds=(e,t,n)=>{const r=(n==null?void 0:n.renderBefore)??t;let s=r._$litPart$;if(s===void 0){const i=(n==null?void 0:n.renderBefore)??null;r._$litPart$=s=new wt(t.insertBefore(vt(),i),i,void 0,n??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class M extends Y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ds(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return X}}var Ve;M._$litElement$=!0,M.finalized=!0,(Ve=globalThis.litElementHydrateSupport)==null||Ve.call(globalThis,{LitElement:M});const Kt=globalThis.litElementPolyfillSupport;Kt==null||Kt({LitElement:M});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");class Hn extends M{render(){return D`
      <div class="mole">
        <div class="head">
          <div class="eye left"></div>
          <div class="eye right"></div>
          <div class="nose"></div>
        </div>
      </div>
    `}}C(Hn,"styles",At`
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
  `);customElements.define("mole-element",Hn);class ae extends M{constructor(){super(),this.name="",this.errorMessage=""}handleInput(t){this.name=t.target.value,this.errorMessage=""}handleSubmit(t){t.preventDefault();const n=this.name.trim(),r=n.length>=3;if(n&&r){const s=new CustomEvent("name-submitted",{detail:{name:this.name.trim()},bubbles:!0,composed:!0});this.dispatchEvent(s),this.errorMessage=""}else{const s=this.name.trim().length===0;this.name="",this.errorMessage=s?"Name cannot be empty":"Please enter a valid name, minimum 3 characters"}}render(){return D`
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
    `}}C(ae,"properties",{name:{type:String},errorMessage:{type:String}}),C(ae,"styles",At`
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

  `);customElements.define("home-form",ae);const z=[];function Wt(e,t=J){let n=null;const r=new Set;function s(a){if(tn(e,a)&&(e=a,n)){const l=!z.length;for(const u of r)u[1](),z.push(u,e);if(l){for(let u=0;u<z.length;u+=2)z[u][0](z[u+1]);z.length=0}}}function i(a){s(a(e))}function o(a,l=J){const u=[a,l];return r.add(u),r.size===1&&(n=t(s,i)||J),a(e),()=>{r.delete(u),r.size===0&&n&&(n(),n=null)}}return{set:s,update:i,subscribe:o}}function kt(e){let t;return Tn(e,n=>t=n)(),t}const pt=Wt(""),ue=Wt(0),Se=Wt(!1),xe=Wt(0);function ps(e){pt.set(e.trim())}function _s(e){Se.set(e)}function vs(e){ue.set(e)}function ms(e){xe.update(t=>t+e)}function gs(){Se.set(!1),xe.set(0)}var ys=ye("<home-form></home-form>",2);function ze(e,t){Bt(t,!1);let n=Nn(t,"navigate",8);function r(i){const o=i.detail.name;o.trim()&&(ps(o),n()("/game"))}$e();var s=ys();V("name-submitted",s,r),be(e,s),qt()}var Tt;let bs=(Tt=class extends M{constructor(){super(),this.playGame=!1,this.secondsWait=500,this.holeSelected=-1}eventUpdatePoints(){const t=new CustomEvent("update-points",{bubbles:!0,composed:!0});this.dispatchEvent(t)}startGame(){this.interval?clearInterval(this.interval):this.randomShowMole(),this.interval=setInterval(this.randomShowMole.bind(this),this.secondsWait)}stopGame(){clearInterval(this.interval),this.holeSelected=-1}getRandomMole(){let t=Math.floor(Math.random()*9);return t===this.holeSelected&&(t=t===8?0:t+1),t}randomShowMole(){this.holeSelected=this.getRandomMole()}render(){return D`
      <div class="grid grid-hole">
        ${Array.from({length:9}).map((t,n)=>D`<div class="hole ${n===this.holeSelected?"selected":""}" id="hole-${n}">
                  <mole-element @click="${this.eventUpdatePoints}"></mole-element>
                </div>`)}
      </div>
    `}update(t){super.update(t),this.playGame?this.startGame():this.stopGame()}},C(Tt,"properties",{playGame:{type:Boolean},secondsWait:{type:Number},holeSelected:{type:Number}}),C(Tt,"styles",At`
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
    }

    mole-element {
      display: none;
    }

    .hole.selected mole-element {
      display: block;
    }
  
  `),Tt);customElements.define("game-view",bs);class ce extends M{constructor(){super(),this.levelSelected=0,this.buttonLevels=[]}toggleLevel(t){const n=new CustomEvent("update-level",{detail:{level:parseInt(t.target.dataset.index)},bubbles:!0,composed:!0});this.dispatchEvent(n)}render(){return D`
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
    `}}C(ce,"properties",{levelSelected:{type:Number},buttonLevels:{type:Array}}),C(ce,"styles",At`
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
  `);customElements.define("levels-element",ce);class fe extends M{constructor(){super(),this.playGame=!1}toggleGame(){const t=new CustomEvent("update-game",{detail:{playGame:!this.playGame},bubbles:!0,composed:!0});this.dispatchEvent(t)}goToHome(){const t=new CustomEvent("game-exit",{bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){return D`
      <p>${this.playGame?"Click 'Stop' to GAME OVER!":"Click 'Play' to start!"}</p>
      <button type="button" class="btn-stop-play" @click="${this.toggleGame}">
        ${this.playGame?"Stop":"Play"}
      </button>
      <button type="button" class="btn-home" @click="${this.goToHome}">Exit</button>
    `}}C(fe,"properties",{playGame:{type:Boolean}}),C(fe,"styles",At`
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
  `);customElements.define("buttons-element",fe);var $s=ye('<div class="game"><h1> </h1> <p>Points: <span> </span></p> <levels-element></levels-element> <game-view></game-view> <buttons-element></buttons-element></div>',2);function Es(e,t){Bt(t,!1);const n=Fr(),r=()=>Pt(ue,"$level",n),s=()=>Pt(pt,"$name",n),i=()=>Pt(xe,"$points",n),o=()=>Pt(Se,"$playGame",n),a=te();let l=Nn(t,"navigate",8);function u(){l()("/home"),gs()}function f(){const it=p[kt(ue)].points;ms(it)}function c(it){vs(it.detail.level)}function h(it){_s(it.detail.playGame)}const p=[{text:"Low",class:"low",points:10,secondsWait:1e3},{text:"Medium",class:"medium",points:20,secondsWait:750},{text:"High",class:"high",points:30,secondsWait:500}];_n(()=>r(),()=>{k(a,p[r()].secondsWait)}),vn(),$e();var m=$s(),$=ut(m),j=ut($),E=ot($,2),St=ot(ut(E)),W=ut(St),xt=ot(E,2);lt(xt,"buttonLevels",p);var st=ot(xt,2),Ft=ot(st,2);gr(()=>{Me(j,`Welcome, ${s()??""}!!!`),Me(W,i()),lt(xt,"levelSelected",r()),lt(st,"playGame",o()),lt(st,"secondsWait",P(a)),lt(Ft,"playGame",o())}),V("update-level",xt,c),V("update-points",st,f),V("update-game",st,h),V("game-exit",Ft,u),V("update-game",Ft,h),be(e,m),qt()}var As=ye("<main><!></main>");function ws(e,t){Bt(t,!1);const n=te();let r=te(window.location.pathname);P(r)==="/game"&&!kt(pt)&&(k(r,"/"),history.replaceState({},"","/"));function s(a){a==="/game"&&!kt(pt)?(k(r,"/"),history.pushState({},"","/")):(k(r,a),history.pushState({},"",a))}window.onpopstate=()=>{window.location.pathname==="/game"&&!kt(pt)?(k(r,"/"),history.replaceState({},"","/")):k(r,window.location.pathname)},_n(()=>(P(r),ze),()=>{k(n,P(r)==="/game"?Es:ze)}),vn(),$e();var i=As(),o=ut(i);jr(o,()=>P(n),(a,l)=>{l(a,{navigate:s})}),be(e,i),qt()}Br(ws,{target:document.getElementById("app")});

import{s as At,u as J,a as Ot,i as Q,n as rt,d as ot,r as st,c as H,h as ct,p as Ee,b as xe,w as it,e as at,m as ut,f as xt,g as fe,j as lt,t as jt,k as It,o as Mt,l as Lt}from"./arco.080acf72.js";/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Z=typeof document<"u";function ft(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Nt(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&ft(e.default)}const C=Object.assign;function we(e,t){const n={};for(const r in t){const o=t[r];n[r]=B(o)?o.map(e):e(o)}return n}const se=()=>{},B=Array.isArray,ht=/#/g,Tt=/&/g,$t=/\//g,Ht=/=/g,Bt=/\?/g,dt=/\+/g,Vt=/%5B/g,zt=/%5D/g,pt=/%5E/g,Wt=/%60/g,mt=/%7B/g,qt=/%7C/g,gt=/%7D/g,Dt=/%20/g;function je(e){return encodeURI(""+e).replace(qt,"|").replace(Vt,"[").replace(zt,"]")}function Kt(e){return je(e).replace(mt,"{").replace(gt,"}").replace(pt,"^")}function Ce(e){return je(e).replace(dt,"%2B").replace(Dt,"+").replace(ht,"%23").replace(Tt,"%26").replace(Wt,"`").replace(mt,"{").replace(gt,"}").replace(pt,"^")}function Gt(e){return Ce(e).replace(Ht,"%3D")}function Ut(e){return je(e).replace(ht,"%23").replace(Bt,"%3F")}function Ft(e){return e==null?"":Ut(e).replace($t,"%2F")}function ae(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Qt=/\/$/,Yt=e=>e.replace(Qt,"");function Se(e,t,n="/"){let r,o={},s="",h="";const p=t.indexOf("#");let i=t.indexOf("?");return p<i&&p>=0&&(i=-1),i>-1&&(r=t.slice(0,i),s=t.slice(i+1,p>-1?p:t.length),o=e(s)),p>-1&&(r=r||t.slice(0,p),h=t.slice(p,t.length)),r=en(r!=null?r:t,n),{fullPath:r+(s&&"?")+s+h,path:r,query:o,hash:ae(h)}}function Xt(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ne(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Zt(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&ee(t.matched[r],n.matched[o])&&vt(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function ee(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function vt(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Jt(e[n],t[n]))return!1;return!0}function Jt(e,t){return B(e)?Te(e,t):B(t)?Te(t,e):e===t}function Te(e,t){return B(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function en(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let s=n.length-1,h,p;for(h=0;h<r.length;h++)if(p=r[h],p!==".")if(p==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(h).join("/")}const G={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ue;(function(e){e.pop="pop",e.push="push"})(ue||(ue={}));var ce;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ce||(ce={}));function tn(e){if(!e)if(Z){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Yt(e)}const nn=/^[^#]+#/;function rn(e,t){return e.replace(nn,"#")+t}function on(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const he=()=>({left:window.scrollX,top:window.scrollY});function sn(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=on(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function $e(e,t){return(history.state?history.state.position-t:-1)+e}const _e=new Map;function cn(e,t){_e.set(e,t)}function an(e){const t=_e.get(e);return _e.delete(e),t}let un=()=>location.protocol+"//"+location.host;function yt(e,t){const{pathname:n,search:r,hash:o}=t,s=e.indexOf("#");if(s>-1){let p=o.includes(e.slice(s))?e.slice(s).length:1,i=o.slice(p);return i[0]!=="/"&&(i="/"+i),Ne(i,"")}return Ne(n,e)+r+o}function ln(e,t,n,r){let o=[],s=[],h=null;const p=({state:l})=>{const f=yt(e,location),R=n.value,S=t.value;let k=0;if(l){if(n.value=f,t.value=l,h&&h===R){h=null;return}k=S?l.position-S.position:0}else r(f);o.forEach(O=>{O(n.value,R,{delta:k,type:ue.pop,direction:k?k>0?ce.forward:ce.back:ce.unknown})})};function i(){h=n.value}function u(l){o.push(l);const f=()=>{const R=o.indexOf(l);R>-1&&o.splice(R,1)};return s.push(f),f}function d(){const{history:l}=window;!l.state||l.replaceState(C({},l.state,{scroll:he()}),"")}function a(){for(const l of s)l();s=[],window.removeEventListener("popstate",p),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",p),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:i,listen:u,destroy:a}}function He(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?he():null}}function fn(e){const{history:t,location:n}=window,r={value:yt(e,n)},o={value:t.state};o.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(i,u,d){const a=e.indexOf("#"),l=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+i:un()+e+i;try{t[d?"replaceState":"pushState"](u,"",l),o.value=u}catch(f){console.error(f),n[d?"replace":"assign"](l)}}function h(i,u){const d=C({},t.state,He(o.value.back,i,o.value.forward,!0),u,{position:o.value.position});s(i,d,!0),r.value=i}function p(i,u){const d=C({},o.value,t.state,{forward:i,scroll:he()});s(d.current,d,!0);const a=C({},He(r.value,i,null),{position:d.position+1},u);s(i,a,!1),r.value=i}return{location:r,state:o,push:p,replace:h}}function hn(e){e=tn(e);const t=fn(e),n=ln(e,t.state,t.location,t.replace);function r(s,h=!0){h||n.pauseListeners(),history.go(s)}const o=C({location:"",base:e,go:r,createHref:rn.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Fn(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),hn(e)}function dn(e){return typeof e=="string"||e&&typeof e=="object"}function Rt(e){return typeof e=="string"||typeof e=="symbol"}const Et=Symbol("");var Be;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Be||(Be={}));function te(e,t){return C(new Error,{type:e,[Et]:!0},t)}function q(e,t){return e instanceof Error&&Et in e&&(t==null||!!(e.type&t))}const Ve="[^/]+?",pn={sensitive:!1,strict:!1,start:!0,end:!0},mn=/[.+*?^${}()[\]/\\]/g;function gn(e,t){const n=C({},pn,t),r=[];let o=n.start?"^":"";const s=[];for(const u of e){const d=u.length?[]:[90];n.strict&&!u.length&&(o+="/");for(let a=0;a<u.length;a++){const l=u[a];let f=40+(n.sensitive?.25:0);if(l.type===0)a||(o+="/"),o+=l.value.replace(mn,"\\$&"),f+=40;else if(l.type===1){const{value:R,repeatable:S,optional:k,regexp:O}=l;s.push({name:R,repeatable:S,optional:k});const E=O||Ve;if(E!==Ve){f+=10;try{new RegExp(`(${E})`)}catch($){throw new Error(`Invalid custom RegExp for param "${R}" (${E}): `+$.message)}}let b=S?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;a||(b=k&&u.length<2?`(?:/${b})`:"/"+b),k&&(b+="?"),o+=b,f+=20,k&&(f+=-8),S&&(f+=-20),E===".*"&&(f+=-50)}d.push(f)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const h=new RegExp(o,n.sensitive?"":"i");function p(u){const d=u.match(h),a={};if(!d)return null;for(let l=1;l<d.length;l++){const f=d[l]||"",R=s[l-1];a[R.name]=f&&R.repeatable?f.split("/"):f}return a}function i(u){let d="",a=!1;for(const l of e){(!a||!d.endsWith("/"))&&(d+="/"),a=!1;for(const f of l)if(f.type===0)d+=f.value;else if(f.type===1){const{value:R,repeatable:S,optional:k}=f,O=R in u?u[R]:"";if(B(O)&&!S)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const E=B(O)?O.join("/"):O;if(!E)if(k)l.length<2&&(d.endsWith("/")?d=d.slice(0,-1):a=!0);else throw new Error(`Missing required param "${R}"`);d+=E}}return d||"/"}return{re:h,score:r,keys:s,parse:p,stringify:i}}function vn(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function wt(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const s=vn(r[n],o[n]);if(s)return s;n++}if(Math.abs(o.length-r.length)===1){if(ze(r))return 1;if(ze(o))return-1}return o.length-r.length}function ze(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const yn={type:0,value:""},Rn=/[a-zA-Z0-9_]/;function En(e){if(!e)return[[]];if(e==="/")return[[yn]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(f){throw new Error(`ERR (${n})/"${u}": ${f}`)}let n=0,r=n;const o=[];let s;function h(){s&&o.push(s),s=[]}let p=0,i,u="",d="";function a(){!u||(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(i==="*"||i==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:d,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):t("Invalid state to consume buffer"),u="")}function l(){u+=i}for(;p<e.length;){if(i=e[p++],i==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:i==="/"?(u&&a(),h()):i===":"?(a(),n=1):l();break;case 4:l(),n=r;break;case 1:i==="("?n=2:Rn.test(i)?l():(a(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&p--);break;case 2:i===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+i:n=3:d+=i;break;case 3:a(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&p--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),a(),h(),o}function wn(e,t,n){const r=gn(En(e.path),n),o=C(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Sn(e,t){const n=[],r=new Map;t=Ke({strict:!1,end:!0,sensitive:!1},t);function o(a){return r.get(a)}function s(a,l,f){const R=!f,S=qe(a);S.aliasOf=f&&f.record;const k=Ke(t,a),O=[S];if("alias"in a){const $=typeof a.alias=="string"?[a.alias]:a.alias;for(const I of $)O.push(qe(C({},S,{components:f?f.record.components:S.components,path:I,aliasOf:f?f.record:S})))}let E,b;for(const $ of O){const{path:I}=$;if(l&&I[0]!=="/"){const V=l.record.path,M=V[V.length-1]==="/"?"":"/";$.path=l.record.path+(I&&M+I)}if(E=wn($,l,k),f?f.alias.push(E):(b=b||E,b!==E&&b.alias.push(E),R&&a.name&&!De(E)&&h(a.name)),St(E)&&i(E),S.children){const V=S.children;for(let M=0;M<V.length;M++)s(V[M],E,f&&f.children[M])}f=f||E}return b?()=>{h(b)}:se}function h(a){if(Rt(a)){const l=r.get(a);l&&(r.delete(a),n.splice(n.indexOf(l),1),l.children.forEach(h),l.alias.forEach(h))}else{const l=n.indexOf(a);l>-1&&(n.splice(l,1),a.record.name&&r.delete(a.record.name),a.children.forEach(h),a.alias.forEach(h))}}function p(){return n}function i(a){const l=Cn(a,n);n.splice(l,0,a),a.record.name&&!De(a)&&r.set(a.record.name,a)}function u(a,l){let f,R={},S,k;if("name"in a&&a.name){if(f=r.get(a.name),!f)throw te(1,{location:a});k=f.record.name,R=C(We(l.params,f.keys.filter(b=>!b.optional).concat(f.parent?f.parent.keys.filter(b=>b.optional):[]).map(b=>b.name)),a.params&&We(a.params,f.keys.map(b=>b.name))),S=f.stringify(R)}else if(a.path!=null)S=a.path,f=n.find(b=>b.re.test(S)),f&&(R=f.parse(S),k=f.record.name);else{if(f=l.name?r.get(l.name):n.find(b=>b.re.test(l.path)),!f)throw te(1,{location:a,currentLocation:l});k=f.record.name,R=C({},l.params,a.params),S=f.stringify(R)}const O=[];let E=f;for(;E;)O.unshift(E.record),E=E.parent;return{name:k,path:S,params:R,matched:O,meta:bn(O)}}e.forEach(a=>s(a));function d(){n.length=0,r.clear()}return{addRoute:s,resolve:u,removeRoute:h,clearRoutes:d,getRoutes:p,getRecordMatcher:o}}function We(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function qe(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Pn(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Pn(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function De(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function bn(e){return e.reduce((t,n)=>C(t,n.meta),{})}function Ke(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Cn(e,t){let n=0,r=t.length;for(;n!==r;){const s=n+r>>1;wt(e,t[s])<0?r=s:n=s+1}const o=_n(e);return o&&(r=t.lastIndexOf(o,r-1)),r}function _n(e){let t=e;for(;t=t.parent;)if(St(t)&&wt(e,t)===0)return t}function St({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function kn(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const s=r[o].replace(dt," "),h=s.indexOf("="),p=ae(h<0?s:s.slice(0,h)),i=h<0?null:ae(s.slice(h+1));if(p in t){let u=t[p];B(u)||(u=t[p]=[u]),u.push(i)}else t[p]=i}return t}function Ge(e){let t="";for(let n in e){const r=e[n];if(n=Gt(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(B(r)?r.map(s=>s&&Ce(s)):[r&&Ce(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function An(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=B(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const On=Symbol(""),Ue=Symbol(""),de=Symbol(""),Ie=Symbol(""),ke=Symbol("");function oe(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function F(e,t,n,r,o,s=h=>h()){const h=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((p,i)=>{const u=l=>{l===!1?i(te(4,{from:n,to:t})):l instanceof Error?i(l):dn(l)?i(te(2,{from:t,to:l})):(h&&r.enterCallbacks[o]===h&&typeof l=="function"&&h.push(l),p())},d=s(()=>e.call(r&&r.instances[o],t,n,u));let a=Promise.resolve(d);e.length<3&&(a=a.then(u)),a.catch(l=>i(l))})}function Pe(e,t,n,r,o=s=>s()){const s=[];for(const h of e)for(const p in h.components){let i=h.components[p];if(!(t!=="beforeRouteEnter"&&!h.instances[p]))if(ft(i)){const d=(i.__vccOpts||i)[t];d&&s.push(F(d,n,r,h,p,o))}else{let u=i();s.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${p}" at "${h.path}"`);const a=Nt(d)?d.default:d;h.mods[p]=d,h.components[p]=a;const f=(a.__vccOpts||a)[t];return f&&F(f,n,r,h,p,o)()}))}}return s}function Fe(e){const t=Q(de),n=Q(Ie),r=H(()=>{const i=J(e.to);return t.resolve(i)}),o=H(()=>{const{matched:i}=r.value,{length:u}=i,d=i[u-1],a=n.matched;if(!d||!a.length)return-1;const l=a.findIndex(ee.bind(null,d));if(l>-1)return l;const f=Qe(i[u-2]);return u>1&&Qe(d)===f&&a[a.length-1].path!==f?a.findIndex(ee.bind(null,i[u-2])):l}),s=H(()=>o.value>-1&&Ln(n.params,r.value.params)),h=H(()=>o.value>-1&&o.value===n.matched.length-1&&vt(n.params,r.value.params));function p(i={}){if(Mn(i)){const u=t[J(e.replace)?"replace":"push"](J(e.to)).catch(se);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:H(()=>r.value.href),isActive:s,isExactActive:h,navigate:p}}function xn(e){return e.length===1?e[0]:e}const jn=ot({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Fe,setup(e,{slots:t}){const n=st(Fe(e)),{options:r}=Q(de),o=H(()=>({[Ye(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ye(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&xn(t.default(n));return e.custom?s:ct("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),In=jn;function Mn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ln(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!B(o)||o.length!==r.length||r.some((s,h)=>s!==o[h]))return!1}return!0}function Qe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ye=(e,t,n)=>e!=null?e:t!=null?t:n,Nn=ot({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Q(ke),o=H(()=>e.route||r.value),s=Q(Ue,0),h=H(()=>{let u=J(s);const{matched:d}=o.value;let a;for(;(a=d[u])&&!a.components;)u++;return u}),p=H(()=>o.value.matched[h.value]);Ee(Ue,H(()=>h.value+1)),Ee(On,p),Ee(ke,o);const i=xe();return it(()=>[i.value,p.value,e.name],([u,d,a],[l,f,R])=>{d&&(d.instances[a]=u,f&&f!==d&&u&&u===l&&(d.leaveGuards.size||(d.leaveGuards=f.leaveGuards),d.updateGuards.size||(d.updateGuards=f.updateGuards))),u&&d&&(!f||!ee(d,f)||!l)&&(d.enterCallbacks[a]||[]).forEach(S=>S(u))},{flush:"post"}),()=>{const u=o.value,d=e.name,a=p.value,l=a&&a.components[d];if(!l)return Xe(n.default,{Component:l,route:u});const f=a.props[d],R=f?f===!0?u.params:typeof f=="function"?f(u):f:null,k=ct(l,C({},R,t,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(a.instances[d]=null)},ref:i}));return Xe(n.default,{Component:k,route:u})||k}}});function Xe(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Tn=Nn;function Qn(e){const t=Sn(e.routes,e),n=e.parseQuery||kn,r=e.stringifyQuery||Ge,o=e.history,s=oe(),h=oe(),p=oe(),i=At(G);let u=G;Z&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=we.bind(null,c=>""+c),a=we.bind(null,Ft),l=we.bind(null,ae);function f(c,g){let m,v;return Rt(c)?(m=t.getRecordMatcher(c),v=g):v=c,t.addRoute(v,m)}function R(c){const g=t.getRecordMatcher(c);g&&t.removeRoute(g)}function S(){return t.getRoutes().map(c=>c.record)}function k(c){return!!t.getRecordMatcher(c)}function O(c,g){if(g=C({},g||i.value),typeof c=="string"){const y=Se(n,c,g.path),j=t.resolve({path:y.path},g),re=o.createHref(y.fullPath);return C(y,j,{params:l(j.params),hash:ae(y.hash),redirectedFrom:void 0,href:re})}let m;if(c.path!=null)m=C({},c,{path:Se(n,c.path,g.path).path});else{const y=C({},c.params);for(const j in y)y[j]==null&&delete y[j];m=C({},c,{params:a(y)}),g.params=a(g.params)}const v=t.resolve(m,g),A=c.hash||"";v.params=d(l(v.params));const x=Xt(r,C({},c,{hash:Kt(A),path:v.path})),w=o.createHref(x);return C({fullPath:x,hash:A,query:r===Ge?An(c.query):c.query||{}},v,{redirectedFrom:void 0,href:w})}function E(c){return typeof c=="string"?Se(n,c,i.value.path):C({},c)}function b(c,g){if(u!==c)return te(8,{from:g,to:c})}function $(c){return M(c)}function I(c){return $(C(E(c),{replace:!0}))}function V(c){const g=c.matched[c.matched.length-1];if(g&&g.redirect){const{redirect:m}=g;let v=typeof m=="function"?m(c):m;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=E(v):{path:v},v.params={}),C({query:c.query,hash:c.hash,params:v.path!=null?{}:c.params},v)}}function M(c,g){const m=u=O(c),v=i.value,A=c.state,x=c.force,w=c.replace===!0,y=V(m);if(y)return M(C(E(y),{state:typeof y=="object"?C({},A,y.state):A,force:x,replace:w}),g||m);const j=m;j.redirectedFrom=g;let re;return!x&&Zt(r,v,m)&&(re=te(16,{to:j,from:v}),Me(v,v,!0,!1)),(re?Promise.resolve(re):N(j,v)).catch(T=>q(T)?q(T,2)?T:ve(T):ge(T,j,v)).then(T=>{if(T){if(q(T,2))return M(C({replace:w},E(T.to),{state:typeof T.to=="object"?C({},A,T.to.state):A,force:x}),g||j)}else T=D(j,v,!0,w,A);return z(j,v,T),T})}function _(c,g){const m=b(c,g);return m?Promise.reject(m):Promise.resolve()}function P(c){const g=le.values().next().value;return g&&typeof g.runWithContext=="function"?g.runWithContext(c):c()}function N(c,g){let m;const[v,A,x]=$n(c,g);m=Pe(v.reverse(),"beforeRouteLeave",c,g);for(const y of v)y.leaveGuards.forEach(j=>{m.push(F(j,c,g))});const w=_.bind(null,c,g);return m.push(w),Y(m).then(()=>{m=[];for(const y of s.list())m.push(F(y,c,g));return m.push(w),Y(m)}).then(()=>{m=Pe(A,"beforeRouteUpdate",c,g);for(const y of A)y.updateGuards.forEach(j=>{m.push(F(j,c,g))});return m.push(w),Y(m)}).then(()=>{m=[];for(const y of x)if(y.beforeEnter)if(B(y.beforeEnter))for(const j of y.beforeEnter)m.push(F(j,c,g));else m.push(F(y.beforeEnter,c,g));return m.push(w),Y(m)}).then(()=>(c.matched.forEach(y=>y.enterCallbacks={}),m=Pe(x,"beforeRouteEnter",c,g,P),m.push(w),Y(m))).then(()=>{m=[];for(const y of h.list())m.push(F(y,c,g));return m.push(w),Y(m)}).catch(y=>q(y,8)?y:Promise.reject(y))}function z(c,g,m){p.list().forEach(v=>P(()=>v(c,g,m)))}function D(c,g,m,v,A){const x=b(c,g);if(x)return x;const w=g===G,y=Z?history.state:{};m&&(v||w?o.replace(c.fullPath,C({scroll:w&&y&&y.scroll},A)):o.push(c.fullPath,A)),i.value=c,Me(c,g,m,w),ve()}let W;function me(){W||(W=o.listen((c,g,m)=>{if(!Le.listening)return;const v=O(c),A=V(v);if(A){M(C(A,{replace:!0,force:!0}),v).catch(se);return}u=v;const x=i.value;Z&&cn($e(x.fullPath,m.delta),he()),N(v,x).catch(w=>q(w,12)?w:q(w,2)?(M(C(E(w.to),{force:!0}),v).then(y=>{q(y,20)&&!m.delta&&m.type===ue.pop&&o.go(-1,!1)}).catch(se),Promise.reject()):(m.delta&&o.go(-m.delta,!1),ge(w,v,x))).then(w=>{w=w||D(v,x,!1),w&&(m.delta&&!q(w,8)?o.go(-m.delta,!1):m.type===ue.pop&&q(w,20)&&o.go(-1,!1)),z(v,x,w)}).catch(se)}))}let ne=oe(),K=oe(),L;function ge(c,g,m){ve(c);const v=K.list();return v.length?v.forEach(A=>A(c,g,m)):console.error(c),Promise.reject(c)}function kt(){return L&&i.value!==G?Promise.resolve():new Promise((c,g)=>{ne.add([c,g])})}function ve(c){return L||(L=!c,me(),ne.list().forEach(([g,m])=>c?m(c):g()),ne.reset()),c}function Me(c,g,m,v){const{scrollBehavior:A}=e;if(!Z||!A)return Promise.resolve();const x=!m&&an($e(c.fullPath,0))||(v||!m)&&history.state&&history.state.scroll||null;return rt().then(()=>A(c,g,x)).then(w=>w&&sn(w)).catch(w=>ge(w,c,g))}const ye=c=>o.go(c);let Re;const le=new Set,Le={currentRoute:i,listening:!0,addRoute:f,removeRoute:R,clearRoutes:t.clearRoutes,hasRoute:k,getRoutes:S,resolve:O,options:e,push:$,replace:I,go:ye,back:()=>ye(-1),forward:()=>ye(1),beforeEach:s.add,beforeResolve:h.add,afterEach:p.add,onError:K.add,isReady:kt,install(c){const g=this;c.component("RouterLink",In),c.component("RouterView",Tn),c.config.globalProperties.$router=g,Object.defineProperty(c.config.globalProperties,"$route",{enumerable:!0,get:()=>J(i)}),Z&&!Re&&i.value===G&&(Re=!0,$(o.location).catch(A=>{}));const m={};for(const A in G)Object.defineProperty(m,A,{get:()=>i.value[A],enumerable:!0});c.provide(de,g),c.provide(Ie,Ot(m)),c.provide(ke,i);const v=c.unmount;le.add(c),c.unmount=function(){le.delete(c),le.size<1&&(u=G,W&&W(),W=null,i.value=G,Re=!1,L=!1),v()}}};function Y(c){return c.reduce((g,m)=>g.then(()=>P(m)),Promise.resolve())}return Le}function $n(e,t){const n=[],r=[],o=[],s=Math.max(t.matched.length,e.matched.length);for(let h=0;h<s;h++){const p=t.matched[h];p&&(e.matched.find(u=>ee(u,p))?r.push(p):n.push(p));const i=e.matched[h];i&&(t.matched.find(u=>ee(u,i))||o.push(i))}return[n,r,o]}function Yn(){return Q(de)}function Xn(e){return Q(Ie)}var Hn=!1;/*!
 * pinia v2.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let Pt;const pe=e=>Pt=e,bt=Symbol();function Ae(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var ie;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(ie||(ie={}));function Zn(){const e=at(!0),t=e.run(()=>xe({}));let n=[],r=[];const o=ut({install(s){pe(o),o._a=s,s.provide(bt,o),s.config.globalProperties.$pinia=o,r.forEach(h=>n.push(h)),r=[]},use(s){return!this._a&&!Hn?r.push(s):n.push(s),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return o}const Ct=()=>{};function Ze(e,t,n,r=Ct){e.push(t);const o=()=>{const s=e.indexOf(t);s>-1&&(e.splice(s,1),r())};return!n&&It()&&Mt(o),o}function X(e,...t){e.slice().forEach(n=>{n(...t)})}const Bn=e=>e(),Je=Symbol(),be=Symbol();function Oe(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,r)=>e.set(r,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],o=e[n];Ae(o)&&Ae(r)&&e.hasOwnProperty(n)&&!fe(r)&&!lt(r)?e[n]=Oe(o,r):e[n]=r}return e}const Vn=Symbol();function zn(e){return!Ae(e)||!e.hasOwnProperty(Vn)}const{assign:U}=Object;function Wn(e){return!!(fe(e)&&e.effect)}function qn(e,t,n,r){const{state:o,actions:s,getters:h}=t,p=n.state.value[e];let i;function u(){p||(n.state.value[e]=o?o():{});const d=Lt(n.state.value[e]);return U(d,s,Object.keys(h||{}).reduce((a,l)=>(a[l]=ut(H(()=>{pe(n);const f=n._s.get(e);return h[l].call(f,f)})),a),{}))}return i=_t(e,u,t,n,r,!0),i}function _t(e,t,n={},r,o,s){let h;const p=U({actions:{}},n),i={deep:!0};let u,d,a=[],l=[],f;const R=r.state.value[e];!s&&!R&&(r.state.value[e]={}),xe({});let S;function k(_){let P;u=d=!1,typeof _=="function"?(_(r.state.value[e]),P={type:ie.patchFunction,storeId:e,events:f}):(Oe(r.state.value[e],_),P={type:ie.patchObject,payload:_,storeId:e,events:f});const N=S=Symbol();rt().then(()=>{S===N&&(u=!0)}),d=!0,X(a,P,r.state.value[e])}const O=s?function(){const{state:P}=n,N=P?P():{};this.$patch(z=>{U(z,N)})}:Ct;function E(){h.stop(),a=[],l=[],r._s.delete(e)}const b=(_,P="")=>{if(Je in _)return _[be]=P,_;const N=function(){pe(r);const z=Array.from(arguments),D=[],W=[];function me(L){D.push(L)}function ne(L){W.push(L)}X(l,{args:z,name:N[be],store:I,after:me,onError:ne});let K;try{K=_.apply(this&&this.$id===e?this:I,z)}catch(L){throw X(W,L),L}return K instanceof Promise?K.then(L=>(X(D,L),L)).catch(L=>(X(W,L),Promise.reject(L))):(X(D,K),K)};return N[Je]=!0,N[be]=P,N},$={_p:r,$id:e,$onAction:Ze.bind(null,l),$patch:k,$reset:O,$subscribe(_,P={}){const N=Ze(a,_,P.detached,()=>z()),z=h.run(()=>it(()=>r.state.value[e],D=>{(P.flush==="sync"?d:u)&&_({storeId:e,type:ie.direct,events:f},D)},U({},i,P)));return N},$dispose:E},I=st($);r._s.set(e,I);const M=(r._a&&r._a.runWithContext||Bn)(()=>r._e.run(()=>(h=at()).run(()=>t({action:b}))));for(const _ in M){const P=M[_];if(fe(P)&&!Wn(P)||lt(P))s||(R&&zn(P)&&(fe(P)?P.value=R[_]:Oe(P,R[_])),r.state.value[e][_]=P);else if(typeof P=="function"){const N=b(P,_);M[_]=N,p.actions[_]=P}}return U(I,M),U(jt(I),M),Object.defineProperty(I,"$state",{get:()=>r.state.value[e],set:_=>{k(P=>{U(P,_)})}}),r._p.forEach(_=>{U(I,h.run(()=>_({store:I,app:r._a,pinia:r,options:p})))}),R&&s&&n.hydrate&&n.hydrate(I.$state,R),u=!0,d=!0,I}/*! #__NO_SIDE_EFFECTS__ */function Jn(e,t,n){let r,o;const s=typeof t=="function";typeof e=="string"?(r=e,o=s?n:t):(o=e,r=e.id);function h(p,i){const u=xt();return p=p||(u?Q(bt,null):null),p&&pe(p),p=Pt,p._s.has(r)||(s?_t(r,t,o,p):qn(r,o,p)),p._s.get(r)}return h.$id=r,h}var et;const Dn=typeof window<"u",tt=()=>{};Dn&&((et=window==null?void 0:window.navigator)==null?void 0:et.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function nt(e){return typeof e=="function"?e():J(e)}function Kn(e,t){function n(...r){return new Promise((o,s)=>{Promise.resolve(e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})).then(o).catch(s)})}return n}function Gn(e,t={}){let n,r,o=tt;const s=p=>{clearTimeout(p),o(),o=tt};return p=>{const i=nt(e),u=nt(t.maxWait);return n&&s(n),i<=0||u!==void 0&&u<=0?(r&&(s(r),r=null),Promise.resolve(p())):new Promise((d,a)=>{o=t.rejectOnCancel?a:d,u&&!r&&(r=setTimeout(()=>{n&&s(n),r=null,d(p())},u)),n=setTimeout(()=>{r&&s(r),r=null,d(p())},i)})}}function er(e,t=200,n={}){return Kn(Gn(t,n),e)}export{Qn as a,Fn as b,Zn as c,Jn as d,Xn as e,er as f,Yn as u};

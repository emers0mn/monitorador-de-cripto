(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[721],{8464:function(e,t,r){Promise.resolve().then(r.bind(r,2898))},9969:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(7437);function o(){return(0,n.jsx)("div",{className:"spinner-container",children:(0,n.jsx)("div",{className:"loading-spinner"})})}r(2265),r(7590)},437:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n,o=r(2265);let i=e=>{let t;let r=new Set,n=(e,n)=>{let o="function"==typeof e?e(t):e;if(!Object.is(o,t)){let e=t;t=(null!=n?n:"object"!=typeof o||null===o)?o:Object.assign({},t,o),r.forEach(r=>r(t,e))}},o=()=>t,i={setState:n,getState:o,getInitialState:()=>c,subscribe:e=>(r.add(e),()=>r.delete(e))},c=t=e(n,o,i);return i},c=e=>e?i(e):i,s=e=>e,u=e=>{let t=c(e),r=e=>(function(e,t=s){let r=o.useSyncExternalStore(e.subscribe,()=>t(e.getState()),()=>t(e.getInitialState()));return o.useDebugValue(r),r})(t,e);return Object.assign(r,t),r};/*! js-cookie v3.0.5 | MIT */function a(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)e[n]=r[n]}return e}var l=function e(t,r){function n(e,n,o){if("undefined"!=typeof document){"number"==typeof(o=a({},r,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i="";for(var c in o)o[c]&&(i+="; "+c,!0!==o[c]&&(i+="="+o[c].split(";")[0]));return document.cookie=e+"="+t.write(n,e)+i}}return Object.create({set:n,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var r=document.cookie?document.cookie.split("; "):[],n={},o=0;o<r.length;o++){var i=r[o].split("="),c=i.slice(1).join("=");try{var s=decodeURIComponent(i[0]);if(n[s]=t.read(c,s),e===s)break}catch(e){}}return e?n[e]:n}},remove:function(e,t){n(e,"",a({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,a({},this.attributes,t))},withConverter:function(t){return e(a({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"}),f=(n=e=>({token:l.get("token")||"",setToken:t=>{e({token:t}),l.set("token",t,{expires:1/1440})}}))?u(n):u},2898:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(7437),o=r(2265),i=r(437),c=r(9969),s=r(4033);function u(){let e=(0,s.useRouter)(),{token:t}=(0,i.Z)(),[r,u]=(0,o.useState)(null);return(0,o.useEffect)(()=>{(async()=>{t||e.push("/login");let r=new Headers;r.append("Authorization","Bearer ".concat(t));try{let e=await fetch("http://localhost:85/api/Produtos/Lista",{method:"GET",headers:r});if(!e.ok)throw Error("Erro na resposta da API");let t=await e.json();u(t.value)}catch(e){console.error("Erro ao buscar produtos:",e)}})()},[t]),(0,n.jsx)("div",{children:r?r.map(e=>(0,n.jsxs)("div",{children:[(0,n.jsxs)("p",{children:["Nome: ",e.nome]}),(0,n.jsxs)("p",{children:["Marca: ",e.marca]}),(0,n.jsxs)("p",{children:["Pre\xe7o: R$",e.price.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})]})]},e.idUsuario)):(0,n.jsx)(c.Z,{})})}},7590:function(){},622:function(e,t,r){"use strict";var n=r(2265),o=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,u={},a=null,l=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,n)&&!s.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===u[n]&&(u[n]=t[n]);return{$$typeof:o,type:e,key:a,ref:l,props:u,_owner:c.current}}t.jsx=u,t.jsxs=u},7437:function(e,t,r){"use strict";e.exports=r(622)},4033:function(e,t,r){e.exports=r(5313)}},function(e){e.O(0,[971,993,744],function(){return e(e.s=8464)}),_N_E=e.O()}]);
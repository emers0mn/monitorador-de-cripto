(()=>{var e={};e.id=444,e.ids=[444],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},948:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>m,tree:()=>c});var a=r(482),s=r(9108),n=r(2563),o=r.n(n),i=r(8300),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let c=["",{children:["enviar",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5685)),"/home/emerson/Documentos/monitorador-de-cripto/app/enviar/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,6264)),"/home/emerson/Documentos/monitorador-de-cripto/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/emerson/Documentos/monitorador-de-cripto/app/enviar/page.tsx"],p="/enviar/page",u={require:r,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/enviar/page",pathname:"/enviar",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},4414:(e,t,r)=>{Promise.resolve().then(r.bind(r,9744))},9744:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var a=r(5344),s=r(3729);function n(){let[e,t]=(0,s.useState)(),[r,n]=(0,s.useState)(),[o,i]=(0,s.useState)(),[l,c]=(0,s.useState)(),d=async t=>{t.preventDefault();try{let t=await fetch("https://localhost:44380/api/FomrsAPIHayps",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:0,name:e,numberPhone:o,cep:r,cpf:"000000000",age:0,email:l})});if(!t.ok)throw Error("Erro na resposta da API");let a=await t.json();console.log("Dados enviados com sucesso:",a)}catch(e){console.error("Erro ao enviar dados:",e)}};return a.jsx("section",{children:(0,a.jsxs)("form",{children:[(0,a.jsxs)("div",{children:[a.jsx("label",{children:"Nome completo:"}),a.jsx("input",{onChange:e=>t(e.target.value),placeholder:"escreva aqui"})]}),a.jsx("br",{}),(0,a.jsxs)("div",{children:[a.jsx("label",{children:"CEP:"}),a.jsx("input",{onChange:e=>n(e.target.value),placeholder:"escreva aqui"})]}),a.jsx("br",{}),(0,a.jsxs)("div",{children:[a.jsx("label",{children:"WhatsApp:"}),a.jsx("input",{onChange:e=>i(e.target.value),placeholder:"escreva aqui"})]}),a.jsx("br",{}),(0,a.jsxs)("div",{children:[a.jsx("label",{children:"e-mail:"}),a.jsx("input",{onChange:e=>c(e.target.value),placeholder:"escreva aqui"})]}),a.jsx("br",{}),a.jsx("div",{children:a.jsx("button",{type:"submit",onClick:d,children:"Enviar"})})]})})}},5685:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>s,default:()=>o});let a=(0,r(6843).createProxy)(String.raw`/home/emerson/Documentos/monitorador-de-cripto/app/enviar/page.tsx`),{__esModule:s,$$typeof:n}=a,o=a.default},7481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(337);let s=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[638,201,337,314],()=>r(948));module.exports=a})();
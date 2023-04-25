"use strict";(self.webpackChunkprintnanny_docs=self.webpackChunkprintnanny_docs||[]).push([[274],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>y});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c=r.createContext({}),s=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},p=function(n){var e=s(n.components);return r.createElement(c.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,c=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),d=s(t),y=o,m=d["".concat(c,".").concat(y)]||d[y]||u[y]||a;return t?r.createElement(m,i(i({ref:e},p),{},{components:t})):r.createElement(m,i({ref:e},p))}));function y(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=n,l.mdxType="string"==typeof n?n:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5630:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:3},i="Connect PrintNanny Cloud",l={unversionedId:"quick-start/connect-printnanny-cloud",id:"quick-start/connect-printnanny-cloud",title:"Connect PrintNanny Cloud",description:"This section will show you how to open PrintNanny OS's dashboard, then link your PrintNanny Cloud account.",source:"@site/docs/quick-start/connect-printnanny-cloud.md",sourceDirName:"quick-start",slug:"/quick-start/connect-printnanny-cloud",permalink:"/docs/quick-start/connect-printnanny-cloud",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"quickStartSidebar",previous:{title:"PrintNanny OS Image",permalink:"/docs/quick-start/create-printnanny-os-image"},next:{title:"Frequently Asked Questions",permalink:"/docs/category/frequently-asked-questions"}},c={},s=[{value:"1. Open PrintNanny OS dashboard in your browser",id:"1-open-printnanny-os-dashboard-in-your-browser",level:3},{value:"2. Enter your email address",id:"2-enter-your-email-address",level:3},{value:"3. Enter the temporary login code",id:"3-enter-the-temporary-login-code",level:3},{value:"4. \ud83d\udc4b Welcome to PrintNanny OS",id:"4--welcome-to-printnanny-os",level:3}],p={toc:s};function u(n){let{components:e,...a}=n;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connect-printnanny-cloud"},"Connect PrintNanny Cloud"),(0,o.kt)("p",null,"This section will show you how to open ",(0,o.kt)("em",{parentName:"p"},"PrintNanny OS's dashboard"),", then link your ",(0,o.kt)("strong",{parentName:"p"},"PrintNanny Cloud")," account."),(0,o.kt)("h3",{id:"1-open-printnanny-os-dashboard-in-your-browser"},"1. Open PrintNanny OS dashboard in your browser"),(0,o.kt)("p",null,"The url will be ",(0,o.kt)("inlineCode",{parentName:"p"},"http://<hostname>.local")),(0,o.kt)("p",null,"So if you named your Raspberry Pi ",(0,o.kt)("inlineCode",{parentName:"p"},"printnanny"),", you would go to: ",(0,o.kt)("a",{parentName:"p",href:"http://printnanny.local/"},"http://printnanny.local/")),(0,o.kt)("h3",{id:"2-enter-your-email-address"},"2. Enter your email address"),(0,o.kt)("p",null,"You'll be prompted to enter your email address, so you can receive a temporary login code."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"PrintNanny OS email login prompt",src:t(4348).Z,width:"1420",height:"996"}),"."),(0,o.kt)("h3",{id:"3-enter-the-temporary-login-code"},"3. Enter the temporary login code"),(0,o.kt)("p",null,"Enter the temporary login code that was sent to your email address."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"PrintNanny OS email 2fa prompt",src:t(7969).Z,width:"1500",height:"1146"}),"."),(0,o.kt)("h3",{id:"4--welcome-to-printnanny-os"},"4. \ud83d\udc4b Welcome to PrintNanny OS"),(0,o.kt)("p",null,"After you connect your account, you'll be redirected to PrintNanny OS's mission control dashboard."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"PrintNanny OS Mission control",src:t(979).Z,width:"3024",height:"1890"}),"."))}u.isMDXComponent=!0},7969:(n,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/printnanny-os-login-2fa-d1b06790441c76cf92be41dce00c36d6.png"},4348:(n,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/printnanny-os-login-email-199e74085f9244229ef7012fd4d7a72f.png"},979:(n,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/printnanny-os-mission-control-50bd68ba5defdf8ee8c1ecafb17b6ec4.png"}}]);
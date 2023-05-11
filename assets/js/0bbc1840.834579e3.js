"use strict";(self.webpackChunkprintnanny_docs=self.webpackChunkprintnanny_docs||[]).push([[465],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=s(n),h=r,f=c["".concat(p,".").concat(h)]||c[h]||u[h]||o;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:4},i="Update PrintNanny OS",d={unversionedId:"update-printnanny-os",id:"update-printnanny-os",title:"Update PrintNanny OS",description:"Check this doc each time you upgrade PrintNanny OS.",source:"@site/docs/update-printnanny-os.md",sourceDirName:".",slug:"/update-printnanny-os",permalink:"/docs/update-printnanny-os",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"quickStartSidebar",previous:{title:"Tailscale VPN",permalink:"/docs/addons/tailscale"},next:{title:"Release History",permalink:"/docs/category/release-history"}},p={},s=[{value:"1. Download <code>.swu</code> update file",id:"1-download-swu-update-file",level:3},{value:"2. Browse to PrintNanny Cloud Dashboard.",id:"2-browse-to-printnanny-cloud-dashboard",level:3},{value:"Click the &quot;Update&quot; button to open device update UI.",id:"click-the-update-button-to-open-device-update-ui",level:3},{value:"3. Click or drag/drop the <code>.swu</code> file into the update UI",id:"3-click-or-dragdrop-the-swu-file-into-the-update-ui",level:3},{value:"4. Wait for the update to finish",id:"4-wait-for-the-update-to-finish",level:3}],l={toc:s};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"update-printnanny-os"},"Update PrintNanny OS"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Check this doc each time you upgrade PrintNanny OS. "),(0,r.kt)("p",{parentName:"admonition"},"The directions are subject to change during the Beta.")),(0,r.kt)("p",null,"PrintNanny OS can be updated in place, which means you don't have to re-image your SD card to enjoy the latest features."),(0,r.kt)("h3",{id:"1-download-swu-update-file"},"1. Download ",(0,r.kt)("inlineCode",{parentName:"h3"},".swu")," update file"),(0,r.kt)("p",null,"Browse to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bitsy-ai/printnanny-os/releases"},"the releases page")," and download the latest ",(0,r.kt)("inlineCode",{parentName:"p"},".swu")," file."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Arrow pointing to .swu file among release assets",src:n(737).Z,width:"2150",height:"750"})),(0,r.kt)("h3",{id:"2-browse-to-printnanny-cloud-dashboard"},"2. Browse to ",(0,r.kt)("a",{parentName:"h3",href:"https://printnanny.ai/dashboard/"},"PrintNanny Cloud Dashboard"),"."),(0,r.kt)("h3",{id:"click-the-update-button-to-open-device-update-ui"},'Click the "Update" button to open device update UI.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Arrow pointing to update button in PrintNanny Cloud dashboard",src:n(6586).Z,width:"2360",height:"400"})),(0,r.kt)("h3",{id:"3-click-or-dragdrop-the-swu-file-into-the-update-ui"},"3. Click or drag/drop the ",(0,r.kt)("inlineCode",{parentName:"h3"},".swu")," file into the update UI"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Click or drag/drop update file into the Update UI",src:n(6987).Z,width:"2466",height:"1664"})),(0,r.kt)("h3",{id:"4-wait-for-the-update-to-finish"},"4. Wait for the update to finish"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PrintNanny update in-progress",src:n(8497).Z,width:"3024",height:"1890"})))}u.isMDXComponent=!0},737:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/download-swu-file-3f4983c8d435a4ec045d036a0d48a455.png"},8497:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/swupdate-messages-602657ef2df76574984e9c5032af6073.png"},6987:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/swupdate-ui-cdfe49b260d44910e67eee615305696a.png"},6586:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/update-button-9a6f92f81d47393190ea234c0b061672.png"}}]);
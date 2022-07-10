"use strict";(self.webpackChunkprintnanny_docs=self.webpackChunkprintnanny_docs||[]).push([[465],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),c=s(n),h=a,f=c["".concat(p,".").concat(h)]||c[h]||l[h]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},i="Update PrintNanny OS",d={unversionedId:"update-printnanny-os",id:"update-printnanny-os",title:"Update PrintNanny OS",description:"Check this doc each time you upgrade PrintNanny OS.",source:"@site/docs/update-printnanny-os.md",sourceDirName:".",slug:"/update-printnanny-os",permalink:"/docs/update-printnanny-os",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configure PrintNanny OS",permalink:"/docs/quick-start/configure-printnanny-os"},next:{title:"Release History",permalink:"/docs/category/release-history"}},p={},s=[{value:"1. Download <code>.swu</code> update file",id:"1-download-swu-update-file",level:3},{value:"2. Browse to PrintNanny Cloud Dashboard.",id:"2-browse-to-printnanny-cloud-dashboard",level:3},{value:"Click the &quot;Update&quot; button to open device update UI.",id:"click-the-update-button-to-open-device-update-ui",level:3},{value:"3. Click or drag/drop the <code>.swu</code> file into the update UI",id:"3-click-or-dragdrop-the-swu-file-into-the-update-ui",level:3},{value:"4. Wait for the update to finish",id:"4-wait-for-the-update-to-finish",level:3}],u={toc:s};function l(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"update-printnanny-os"},"Update PrintNanny OS"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Check this doc each time you upgrade PrintNanny OS. "),(0,a.kt)("p",{parentName:"admonition"},"The directions are subject to change during the Beta.")),(0,a.kt)("p",null,"PrintNanny OS can be updated in place, which means you don't have to re-image your SD card to enjoy the latest features."),(0,a.kt)("h3",{id:"1-download-swu-update-file"},"1. Download ",(0,a.kt)("inlineCode",{parentName:"h3"},".swu")," update file"),(0,a.kt)("p",null,"Browse to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bitsy-ai/printnanny-os/releases"},"the releases page")," and download the latest ",(0,a.kt)("inlineCode",{parentName:"p"},".swu")," file."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Arrow pointing to .swu file among release assets",src:n(737).Z,width:"2150",height:"750"})),(0,a.kt)("h3",{id:"2-browse-to-printnanny-cloud-dashboard"},"2. Browse to ",(0,a.kt)("a",{parentName:"h3",href:"https://printnanny.ai/dashboard/"},"PrintNanny Cloud Dashboard"),"."),(0,a.kt)("h3",{id:"click-the-update-button-to-open-device-update-ui"},'Click the "Update" button to open device update UI.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Arrow pointing to update button in PrintNanny Cloud dashboard",src:n(6586).Z,width:"2360",height:"400"})),(0,a.kt)("h3",{id:"3-click-or-dragdrop-the-swu-file-into-the-update-ui"},"3. Click or drag/drop the ",(0,a.kt)("inlineCode",{parentName:"h3"},".swu")," file into the update UI"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Click or drag/drop update file into the Update UI",src:n(6987).Z,width:"2466",height:"1664"})),(0,a.kt)("h3",{id:"4-wait-for-the-update-to-finish"},"4. Wait for the update to finish"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"PrintNanny update in-progress",src:n(8497).Z,width:"3024",height:"1890"})))}l.isMDXComponent=!0},737:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/download-swu-file-3f4983c8d435a4ec045d036a0d48a455.png"},8497:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/swupdate-messages-602657ef2df76574984e9c5032af6073.png"},6987:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/swupdate-ui-cdfe49b260d44910e67eee615305696a.png"},6586:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/update-button-9a6f92f81d47393190ea234c0b061672.png"}}]);
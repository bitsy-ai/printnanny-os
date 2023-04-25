"use strict";(self.webpackChunkprintnanny_docs=self.webpackChunkprintnanny_docs||[]).push([[862],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6539:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:2},o="PrintNanny OS Image",s={unversionedId:"quick-start/create-printnanny-os-image",id:"quick-start/create-printnanny-os-image",title:"PrintNanny OS Image",description:"This section will walk you through writing a PrintNanny OS image to your SD card.",source:"@site/docs/quick-start/create-printnanny-os-image.md",sourceDirName:"quick-start",slug:"/quick-start/create-printnanny-os-image",permalink:"/docs/quick-start/create-printnanny-os-image",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"quickStartSidebar",previous:{title:"Required Hardware",permalink:"/docs/quick-start/hardware"},next:{title:"Connect PrintNanny Cloud",permalink:"/docs/quick-start/connect-printnanny-cloud"}},l={},p=[{value:"1. Install Raspberry Pi Imager",id:"1-install-raspberry-pi-imager",level:2},{value:"2. Download PrintNanny OS image",id:"2-download-printnanny-os-image",level:2},{value:"3. Burn Image to SD Card",id:"3-burn-image-to-sd-card",level:2}],c={toc:p};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"printnanny-os-image"},"PrintNanny OS Image"),(0,a.kt)("p",null,"This section will walk you through writing a PrintNanny OS image to your SD card."),(0,a.kt)("h2",{id:"1-install-raspberry-pi-imager"},"1. Install Raspberry Pi Imager"),(0,a.kt)("p",null,"Download and install ",(0,a.kt)("a",{parentName:"p",href:"https://www.raspberrypi.com/software/"},"Raspberry Pi Imager"),"."),(0,a.kt)("h2",{id:"2-download-printnanny-os-image"},"2. Download PrintNanny OS image"),(0,a.kt)("p",null,"Browse to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bitsy-ai/printnanny-os/releases"},"PrintNanny OS releases page")," and download the latest ",(0,a.kt)("inlineCode",{parentName:"p"},".wic.gz")," file."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Arrow pointing to .wic.gz among other assets attached to Github release",src:r(8690).Z,width:"2150",height:"748"})),(0,a.kt)("h2",{id:"3-burn-image-to-sd-card"},"3. Burn Image to SD Card"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open Raspberry Pi Imager. Click the ",(0,a.kt)("strong",{parentName:"li"},"Choose OS")," button, then select ",(0,a.kt)("strong",{parentName:"li"},"Use custom")," at the ",(0,a.kt)("strong",{parentName:"li"},"bottom")," of the menu.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Selecting the custom menu in Raspberry Pi Imager",src:r(9916).Z,width:"1584",height:"1120"}),"."),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"Choose Storage")," button and select your MicroSD Card from the menu."),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"\u2699\ufe0f Gear Icon")," or press ctrl + shift + x to open **Advanced."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Set the hostname")," of your Raspberry Pi (must be unique on your network.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Selecting the custom menu in Raspberry Pi Imager",src:r(9704).Z,width:"1584",height:"1120"}),"."),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Check the ",(0,a.kt)("strong",{parentName:"p"},"Enable SSH")," box and ",(0,a.kt)("strong",{parentName:"p"},"set a password for your Pi"),"."),(0,a.kt)("p",{parentName:"li"},"If you prefer to use SSH authentication, provide your public key instead")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure your ",(0,a.kt)("strong",{parentName:"p"},"wireless LAN")," SSID and passphrase.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Set your ",(0,a.kt)("strong",{parentName:"p"},"locale")," and ",(0,a.kt)("strong",{parentName:"p"},"keyboard layout"),"."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Selecting the custom menu in Raspberry Pi Imager",src:r(499).Z,width:"1584",height:"1120"}),"."),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Save")," to save your settings and then ",(0,a.kt)("strong",{parentName:"li"},"Write")," to burn the image to your SD card.")))}m.isMDXComponent=!0},8690:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/download-image-91248342e5457305ef0adcedaefdfb64.png"},499:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rpi-imager-eject-media-dd92801b993082daaefaa30fa46d5609.png"},9704:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rpi-imager-hostname-ecfa9c523337eafe251b9846721dd231.png"},9916:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rpi-imager-select-custom-77f104f7c011e4b642e5ebd27ceb79f6.png"}}]);
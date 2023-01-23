"use strict";(self.webpackChunkprintnanny_docs=self.webpackChunkprintnanny_docs||[]).push([[3822],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>d});var i=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function r(n,e){if(null==n)return{};var t,i,a=function(n,e){if(null==n)return{};var t,i,a={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=i.createContext({}),c=function(n){var e=i.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},p=function(n){var e=c(n.components);return i.createElement(s.Provider,{value:e},n.children)},h={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},y=i.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,s=n.parentName,p=r(n,["components","mdxType","originalType","parentName"]),y=c(t),d=a,u=y["".concat(s,".").concat(d)]||y[d]||h[d]||o;return t?i.createElement(u,l(l({ref:e},p),{},{components:t})):i.createElement(u,l({ref:e},p))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,l=new Array(o);l[0]=y;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=n,r.mdxType="string"==typeof n?n:a,l[1]=r;for(var c=2;c<o;c++)l[c]=t[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}y.displayName="MDXCreateElement"},1500:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=t(7462),a=(t(7294),t(3905));const o={sidebar_position:2},l="File Sync (Syncthing)",r={unversionedId:"addons/file-sync",id:"addons/file-sync",title:"File Sync (Syncthing)",description:"This section will show you how to set up Syncthing, which is keeps your files synchronized between multiple computers.",source:"@site/docs/addons/file-sync.md",sourceDirName:"addons",slug:"/addons/file-sync",permalink:"/docs/addons/file-sync",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"quickStartSidebar",previous:{title:"Addons & Extras",permalink:"/docs/category/addons--extras"},next:{title:"PrintNanny SDWire",permalink:"/docs/addons/sdwire"}},s={},c=[{value:"Install Syncthing on a Personal Computer",id:"install-syncthing-on-a-personal-computer",level:2},{value:"Install Syncthing Base (MacOS)",id:"install-syncthing-base-macos",level:3},{value:"Install Syncthing Base (Windows)",id:"install-syncthing-base-windows",level:3},{value:"Install Syncthing Base (Linux)",id:"install-syncthing-base-linux",level:3},{value:"Open PrintNanny OS Syncthing",id:"open-printnanny-os-syncthing",level:3},{value:"Connecting Syncthing devices",id:"connecting-syncthing-devices",level:3}],p={toc:c};function h(n){let{components:e,...o}=n;return(0,a.kt)("wrapper",(0,i.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"file-sync-syncthing"},"File Sync (Syncthing)"),(0,a.kt)("p",null,"This section will show you how to set up ",(0,a.kt)("a",{parentName:"p",href:"https://syncthing.net/"},"Syncthing"),", which is keeps your files synchronized between multiple computers."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Syncthing is like having your own private Dropbox or Google Drive."),(0,a.kt)("p",{parentName:"admonition"},"We love Syncthing because your data remains private. ",(0,a.kt)("strong",{parentName:"p"},"None of your data is ever stored anywhere else other than on your computers.")," There is no central server that might be compromised, legally or illegally."),(0,a.kt)("p",{parentName:"admonition"},"All communication between Syncthings is ",(0,a.kt)("strong",{parentName:"p"},"encrypted")," with TLS.")),(0,a.kt)("h2",{id:"install-syncthing-on-a-personal-computer"},"Install Syncthing on a Personal Computer"),(0,a.kt)("p",null,"First, you will need to install Syncthing on your laptop, desktop, or other personal computer. You only need to do this once!"),(0,a.kt)("p",null,"After Syncthing is installed, you should be able to open the Syncthing web ui. The default url is: ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.0:8384")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create a new connection to PrintNanny Cloud",src:t(7121).Z,width:"3840",height:"2160"}),"."),(0,a.kt)("h3",{id:"install-syncthing-base-macos"},"Install Syncthing Base (MacOS)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the universal MacOS Installer."),(0,a.kt)("li",{parentName:"ol"},"Unzip the ",(0,a.kt)("inlineCode",{parentName:"li"},"syncthing-macos-universal")," folder."),(0,a.kt)("li",{parentName:"ol"},"Double-click the ",(0,a.kt)("inlineCode",{parentName:"li"},"syncthing")," binary file to run syncthing in your terminal."),(0,a.kt)("li",{parentName:"ol"},"Syncthing will open ",(0,a.kt)("inlineCode",{parentName:"li"},"127.0.0.0:8384")," in your browser")),(0,a.kt)("p",null,"If you see a pop-up warning that says ",(0,a.kt)("strong",{parentName:"p"},"\u201csyncthing\u201d can\u2019t be opened because the identity of the developer cannot be confirmed."),", follow these steps to run syncthing."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open MacOS ",(0,a.kt)("strong",{parentName:"li"},"Security & Privacy")," in the Settings menu")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Open MacOS Security &amp; Privacy in the Settings menu",src:t(3804).Z,width:"1560",height:"1646"}),"."),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"lock icon")," in the lower left-hand corner to edit your security settings.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Click the lock icon in the lower left-hand corner to edit your settings.",src:t(4399).Z,width:"1560",height:"1398"}),"."),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"Open Anyway")," button to allow syncthing application.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Click the Open Anyway button to allow syncthing application.",src:t(6804).Z,width:"1560",height:"1398"}),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Download windows syncthing binary",src:t(6427).Z,width:"2432",height:"1276"}),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the universal MacOS Installer"),(0,a.kt)("li",{parentName:"ol"},"Unzip the ",(0,a.kt)("inlineCode",{parentName:"li"},"syncthing-macos-universal")," folder"),(0,a.kt)("li",{parentName:"ol"},"Double-click the ",(0,a.kt)("inlineCode",{parentName:"li"},"syncthing")," binary file.")),(0,a.kt)("h3",{id:"install-syncthing-base-windows"},"Install Syncthing Base (Windows)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the Windows installer for your CPU architecture"),(0,a.kt)("li",{parentName:"ol"},"Unzip the syncthing folder."),(0,a.kt)("li",{parentName:"ol"},"Double-click the ",(0,a.kt)("inlineCode",{parentName:"li"},"syncthing")," binary file to run syncthing in your terminal."),(0,a.kt)("li",{parentName:"ol"},"Syncthing will open ",(0,a.kt)("inlineCode",{parentName:"li"},"127.0.0.0:8384")," in your browser")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Download windows syncthing binary",src:t(5638).Z,width:"2432",height:"1276"}),"."),(0,a.kt)("h3",{id:"install-syncthing-base-linux"},"Install Syncthing Base (Linux)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the Linux installer for your CPU architecture"),(0,a.kt)("li",{parentName:"ol"},"Unzip the syncthing folder."),(0,a.kt)("li",{parentName:"ol"},"Double-click the ",(0,a.kt)("inlineCode",{parentName:"li"},"syncthing")," binary file to run syncthing in your terminal."),(0,a.kt)("li",{parentName:"ol"},"Syncthing will open ",(0,a.kt)("inlineCode",{parentName:"li"},"127.0.0.0:8384")," in your browser")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Download linux syncthing binary",src:t(6105).Z,width:"2432",height:"1276"}),"."),(0,a.kt)("h3",{id:"open-printnanny-os-syncthing"},"Open PrintNanny OS Syncthing"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open the ",(0,a.kt)("a",{parentName:"li",href:"https://printnanny.ai/devices"},"PrintNanny Cloud device dashboard")),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("em",{parentName:"li"},"Select Action")," menu and open the ",(0,a.kt)("em",{parentName:"li"},"Syncthing")," link")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"On the right-hand side, click Select Action and open the Syncthing link",src:t(1476).Z,width:"2746",height:"2216"}),"."),(0,a.kt)("h3",{id:"connecting-syncthing-devices"},"Connecting Syncthing devices"),(0,a.kt)("p",null,"Follow the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.syncthing.net/intro/getting-started.html#configuring"},"Syncthing Getting Started Guide")," to connect Syncthing on your personal computer with Syncthing on a Raspberry Pi."))}h.isMDXComponent=!0},6105:(n,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/download-syncthing-linux-1ce9f35bfac5e5d3bd727faade89a6a9.png"},6427:(n,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/download-syncthing-macos-0c3f6680fb9b674b760483570b9eb8b0.png"},5638:(n,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/download-syncthing-windows-03fd63a7b3cfbefccfa5152f9f06e38f.png"},6804:(n,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/macos-open-anyway-17a006c1428e96c5cf1ad3cabd52053d.png"},3804:(n,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/macos-security-privacy-696ce09db8e6199bf2d4110694f7a111.png"},4399:(n,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/macos-security-unlock-6b1f559541dfe5ff28b8ca3ec5b28b02.png"},1476:(n,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/printnanny-os-syncthing-1828f2772dfc504c3367022d736c5ab9.png"},7121:(n,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/syncthing-browser-fd7e3eb5bfb05a324eb00dbb30e63fe6.png"}}]);
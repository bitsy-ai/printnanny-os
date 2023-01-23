"use strict";(self.webpackChunkprintnanny_docs=self.webpackChunkprintnanny_docs||[]).push([[3829],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||i;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"OpenSSL security update for hundreds of Raspberry Pis",description:"How PrintNanny will address OpenSSL 3.x security vulnerability across hundreds of Raspberry Pis",slug:"patch-openssl-security-vulnerability-across-hundreds-of-raspberry-pis",authors:[{name:"Leigh Johnson",title:"Maintainer of PrintNanny.ai",url:"https://github.com/leigh-johnson",image_url:"https://github.com/leigh-johnson.png"}],tags:["engineering","security"],image:"/blog-static/2022-11-01-openssl/printnanny-worldwide-map.png",hide_table_of_contents:!1},s=void 0,o={permalink:"/blog/patch-openssl-security-vulnerability-across-hundreds-of-raspberry-pis",source:"@site/blog/2022-11-01-openssl.md",title:"OpenSSL security update for hundreds of Raspberry Pis",description:"How PrintNanny will address OpenSSL 3.x security vulnerability across hundreds of Raspberry Pis",date:"2022-11-01T00:00:00.000Z",formattedDate:"November 1, 2022",tags:[{label:"engineering",permalink:"/blog/tags/engineering"},{label:"security",permalink:"/blog/tags/security"}],readingTime:2.95,hasTruncateMarker:!1,authors:[{name:"Leigh Johnson",title:"Maintainer of PrintNanny.ai",url:"https://github.com/leigh-johnson",image_url:"https://github.com/leigh-johnson.png",imageURL:"https://github.com/leigh-johnson.png"}],frontMatter:{title:"OpenSSL security update for hundreds of Raspberry Pis",description:"How PrintNanny will address OpenSSL 3.x security vulnerability across hundreds of Raspberry Pis",slug:"patch-openssl-security-vulnerability-across-hundreds-of-raspberry-pis",authors:[{name:"Leigh Johnson",title:"Maintainer of PrintNanny.ai",url:"https://github.com/leigh-johnson",image_url:"https://github.com/leigh-johnson.png",imageURL:"https://github.com/leigh-johnson.png"}],tags:["engineering","security"],image:"/blog-static/2022-11-01-openssl/printnanny-worldwide-map.png",hide_table_of_contents:!1}},l={authorsImageUrls:[void 0]},p=[{value:"November 1st is the Spookiest Day of the Year",id:"november-1st-is-the-spookiest-day-of-the-year",level:2},{value:"PrintNanny will Patch Hundreds of Raspberry Pis",id:"printnanny-will-patch-hundreds-of-raspberry-pis",level:2},{value:"Over-the-Air Updates",id:"over-the-air-updates",level:2},{value:"Thanks for reading!",id:"thanks-for-reading",level:3}],u={toc:p};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("meta",{name:"keywords",content:"openssl, raspberry pi, automatic software updates, internet-of-things security vulnerability, manufacturing, software, automation"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The OpenSSL team is expected to release OpenSSL version 3.0.7 on ",(0,a.kt)("strong",{parentName:"p"},"Tuesday 1st November 2022 between 1300-1700 UTC"),"."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"PrintNanny OS version 0.4.1")," will include the latest security fixes. If you're a Founding Member, you'll receive an email when PrintNanny OS version 0.4.1 is available.")),(0,a.kt)("h2",{id:"november-1st-is-the-spookiest-day-of-the-year"},"November 1st is the Spookiest Day of the Year"),(0,a.kt)("p",null,"If you manage servers or computer systems, few things are spookier than a critical security vulnerability disclosure to ",(0,a.kt)("a",{parentName:"p",href:"https://mta.openssl.org/pipermail/openssl-announce/2022-October/000238.html"},"openssl.org's mailing list"),". \ud83d\udc7b "),(0,a.kt)("p",null,"OpenSSL is a software library used to secure communication between computers. The OpenSSL encryption library is used on most Unix-like systems, like Linux and Apple's MacOS."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Hello, The OpenSSL project team would like to announce the forthcoming release of OpenSSL version 3.0.7. This release will be made available on Tuesday 1st November 2022 between 1300-1700 UTC. OpenSSL 3.0.7 is a security-fix release. The highest severity issue fixed in this release is CRITICAL.",src:n(9148).Z,width:"1250",height:"884"}),"."),(0,a.kt)("p",null,"The OpenSSL team publishes ",(0,a.kt)("a",{parentName:"p",href:"https://www.openssl.org/policies/general/security-policy.html"},"issue severity guidance"),", with ",(0,a.kt)("strong",{parentName:"p"},"critical")," being the highest severity level. If you were managing computer systems in 2014, you might recall another critical security disclosure: ",(0,a.kt)("a",{parentName:"p",href:"https://heartbleed.com/"},"Heartbleed"),". "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"CRITICAL Severity. "),"\nThis affects common configurations and which are also likely to be exploitable. Examples include significant disclosure of the contents of server memory (potentially revealing user details), vulnerabilities which can be easily exploited remotely to compromise server private keys or where remote code execution is considered likely in common situations. These issues will be kept private and will trigger a new release of all supported versions. We will attempt to address these as soon as possible.\n-- ",(0,a.kt)("a",{parentName:"p",href:"https://www.openssl.org/policies/general/security-policy.html"},"OpenSSL Security Policy"))),(0,a.kt)("h2",{id:"printnanny-will-patch-hundreds-of-raspberry-pis"},"PrintNanny will Patch Hundreds of Raspberry Pis"),(0,a.kt)("p",null,"PrintNanny OS is a Linux distribution designed for additive manufacturing (3D printing) businesses, with optimizations for real-time computer-vision and quality monitoring tasks."),(0,a.kt)("p",null,"Unlike most Linux distributions, PrintNanny OS doesn't run in a datacenter. PrintNanny is deployed to ",(0,a.kt)("strong",{parentName:"p"},"hundreds of Raspberry Pis")," around the world."),(0,a.kt)("p",null,"When OpenSSL 3.0.7 is released, affected Pis will require a security update - but we've made the process easy! Read the next section to learn how PrintNanny OS's upgrade system works."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"World map showing PrintNanny OS usage worldwide",src:n(8060).Z,width:"1077",height:"525"}),"."),(0,a.kt)("h2",{id:"over-the-air-updates"},"Over-the-Air Updates"),(0,a.kt)("p",null,"Thanks to ",(0,a.kt)("a",{parentName:"p",href:"https://sbabic.github.io/swupdate/swupdate.html"},"swupdate"),", PrintNanny OS can easily be upgraded through a web GUI. Swupdate is an over-the-air (OTA) update system for internet-of-things (IoT) devices. "),(0,a.kt)("p",null,"Over-the-air software updates keep car computers, smart appliances, and other IoT devices current with the latest security fixes."),(0,a.kt)("p",null,"My favorite part of PrintNanny OS's updater is the ",(0,a.kt)("strong",{parentName:"p"},"A/B")," partition scheme, which means I always have a safe rollback option. "),(0,a.kt)("p",null,"Before I integrated swupdate, I had to run a configuration management tool (like Ansible) or re-image my Raspberry Pis to restore a previous state. The A/B partition strategy is so much more reliable!"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"PrintNanny Over-the-air updates",src:n(4424).Z,width:"974",height:"721"}),"."),(0,a.kt)("h3",{id:"thanks-for-reading"},"Thanks for reading!"),(0,a.kt)("p",null,"My name is Leigh, and I'm the creator of PrintNanny.ai. If you're a Founding Member and reading this, ",(0,a.kt)("strong",{parentName:"p"},"thank you for supporting PrintNanny's development"),"! "),(0,a.kt)("p",null,"Your trust and support means the world to me, and I'll be waking up early to ensure your devices remain secure. \ud83e\udee1 "),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"PrintNanny OS is currently in closed Beta. "),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://printnanny.ai/"},"Join the waitlist")," to receive stress-test invitations and launch/development updates."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://printnanny.ai/shop/founding-membership"},"Reserve your spot in the Founding Member program"),", which grants you ",(0,a.kt)("strong",{parentName:"p"},"immediate early access to PrintNanny for $149 USD.")," A limited number of spots open after each release, available on a first-come, first-serve basis. "),(0,a.kt)("p",{parentName:"admonition"},"Founding Members get access to a private Discord channel and unlimited use of PrintNanny services.")))}c.isMDXComponent=!0},9148:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/openssl-3-0-7-memo-ee714a653829a7d92a2776fa6d29bd41.png"},4424:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/update-printnanny-os-aaa4a36c18bf9fc26d118650e620137d.gif"},8060:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/printnanny-worldwide-map-66cb30fc930da0a63d8fedf55fa0d063.png"}}]);
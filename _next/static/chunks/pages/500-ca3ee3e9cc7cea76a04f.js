(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[573],{1752:function(e,r,t){"use strict";var n=t(2809),s=t(219),c=t(1664),a=t(1826),i=t(5893),o=["href","children"];function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.Z=function(e){var r,t=e.href,n=e.children,l=(0,s.Z)(e,o),d=(0,a.default)().publicRuntimeConfig,p=null!==(r=null===d||void 0===d?void 0:d.basePath)&&void 0!==r?r:"",f=p.endsWith("/")||t.startsWith("/")?"".concat(p).concat(t):"".concat(p,"/").concat(t);return(0,i.jsx)(c.default,u(u({href:t,as:f},l),{},{children:n}))}},22:function(e,r,t){"use strict";t.d(r,{Z:function(){return _}});var n=t(2809),s=t(219),c=t(7294),a=t(79),i=t(682),o=t(8871),l=t(1330),u=t(1752),d={src:"https://smartblock-static.s3.amazonaws.com/public-assets/smartblock-logo.svg",srcType:"url",mimeType:"image/svg+xml"},p={src:"https://smartblock-static.s3.amazonaws.com/public-assets/smartblock-icon.svg",srcType:"url",mimeType:"image/svg+xml"},f=function(){var e=!0;function r(){return{width:window.innerWidth,height:window.innerHeight}}var t=(0,c.useState)(r()),n=t[0],s=t[1];return(0,c.useEffect)((function(){var e=function(){s(r())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[e]),n},h=t(5893),b=function(){var e=f(),r=(0,c.useState)(),t=r[0],n=r[1];return(0,c.useEffect)((function(){var r=e.width&&e.width>=992?d.src:p.src;if("string"===typeof r)n(r);else{var t=new FileReader;t.readAsDataURL(r),t.onloadend=function(){var e=t.result;"string"===typeof e&&(console.log("Image dataURI obtainer. Raw data:",e.substr(e.indexOf(", ")+1)),n(e))}}}),[e]),(0,h.jsx)(a.Z,{bg:"light",expand:"lg",children:(0,h.jsxs)(i.Z,{children:[(0,h.jsx)(u.Z,{href:"/",passHref:!0,children:(0,h.jsx)(a.Z.Brand,{children:(0,h.jsx)(l.Z,{src:t,alt:"Smartblock",height:"45"})})}),(0,h.jsx)(o.Z.Item,{className:"text-center text-lg-start",children:(0,h.jsxs)("h5",{className:"d-inline my-0",children:[(0,h.jsx)("span",{className:"me-2 me-lg-3 d-none d-lg-inline",children:"|"}),"Knowledge Base"]})}),(0,h.jsx)(a.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,h.jsx)(a.Z.Collapse,{id:"basic-navbar-nav",children:(0,h.jsx)(o.Z,{className:"ms-auto"})})]})})},j=t(4051),g=t(1555),m=function(){var e=(0,c.useState)(2021),r=e[0],t=e[1];return(0,c.useEffect)((function(){t((new Date).getFullYear())}),[]),(0,h.jsx)(i.Z,{fluid:!0,className:"bg-light py-3",children:(0,h.jsx)(j.Z,{children:(0,h.jsx)(g.Z,{className:"text-center",children:(0,h.jsxs)("span",{children:[(0,h.jsx)("a",{href:"https://smartblock.cl",children:"Smartblock"})," Technologies SpA \xa9 ",r]})})})})},v=t(8521),w=t.n(v),x=t(9008),y=["pageTitle","children"];function O(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function Z(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?O(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var P="Smartblock Knowledge Base",_=function(e){var r=e.pageTitle,t=e.children,n=(0,s.Z)(e,y),a=(0,c.useState)(),i=a[0],o=a[1];return(0,c.useEffect)((function(){r&&o([r,"-",P].join(" ").trim())}),[r]),(0,h.jsxs)("div",Z(Z({},n),{},{className:w().bodyWrapper,children:[i?(0,h.jsx)(x.default,{children:(0,h.jsx)("title",{children:i})}):null,(0,h.jsx)(b,{}),(0,h.jsx)("div",{className:w().subWrapper,children:t}),(0,h.jsx)(m,{})]}))}},8608:function(e,r,t){"use strict";t.r(r);var n=t(22),s=t(682),c=t(1555),a=t(4051),i=t(5893);r.default=function(){return(0,i.jsx)(n.Z,{pageTitle:"Internal Server Error",children:(0,i.jsx)(s.Z,{className:"h-100",children:(0,i.jsx)(a.Z,{className:"h-100 align-content-center",children:(0,i.jsxs)(c.Z,{className:"text-center",children:[(0,i.jsx)("h1",{children:"500"}),(0,i.jsx)("h2",{children:"Oops, we are sorry to say you an unexpected error ocurred in our side"}),(0,i.jsx)("h5",{children:"Please do not worry to contact us for any question"})]})})})})}},662:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/500",function(){return t(8608)}])},8521:function(e){e.exports={bodyWrapper:"page-wrapper_bodyWrapper__11zuq",subWrapper:"page-wrapper_subWrapper__3Miup"}}},function(e){e.O(0,[774,509,888,179],(function(){return r=662,e(e.s=r);var r}));var r=e.O();_N_E=r}]);
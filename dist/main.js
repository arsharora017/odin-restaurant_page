(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>p});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),d=t.n(c),s=new URL(t(365),t.b),l=i()(o()),u=d()(s);l.push([n.id,`/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* My Project */\n\n:root {\n  --font-color: #eee;\n  --font-color-dark: #aaa;\n  --border-color: #222;\n  --background-dark: rgba(0, 0, 0, 0.9);\n  --background-light: rgba(0, 0, 0, 0.6);\n  --background-light-hover: rgba(99, 99, 99, 0.4);\n}\n\nbody {\n  /* font-family: sans-serif, monospace; */\n  font-family: "Montserrat", sans-serif, monospace;\n  /* font-size: 1.3rem; */\n  background-image: url(${u});\n  background-attachment: fixed;\n  background-size: cover;\n  color: var(--font-color);\n}\n\n#content {\n  /* padding: 50px; */\n  /* background: #45a049; */\n  height: 100vh;\n}\n\n/* header */\n\n.header {\n  background-color: var(--background-dark);\n  padding-top: 3rem;\n}\n\n.page-heading {\n  font-size: 4rem;\n  text-align: center;\n  font-family: "Tangerine", cursive;\n  color: var(--font-color);\n}\n\n.nav-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5rem;\n  height: 90px;\n}\n\n.tab {\n  padding: 8px 16px;\n  border: 2px solid black;\n  border-radius: 4px;\n  cursor: pointer;\n  width: 90px;\n  text-align: center;\n  font-weight: 300;\n  font-size: 1.7rem;\n  color: var(--font-color);\n  transition: transform 0.3s;\n  border-bottom: 2px solid transparent;\n}\n\n.tab:hover {\n  transform: translateY(-10%);\n}\n\n/* home page */\n\n.image {\n  height: 350px;\n  border-radius: 20px;\n}\n\n.main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 700px;\n  padding: 2rem;\n  margin: 2rem 0;\n  background-color: var(--background-light);\n  border: 1px solid var(--border-color);\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.outer-div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.outer-div-heading {\n  font-size: 3.6rem;\n}\n\n.outer-div-para1,\n.outer-div-para2 {\n  font-size: 1.4rem;\n}\n\n.outer-div,\n.image {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  opacity: 90%;\n}\n/*  */\n\n.contact-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\ninput {\n  margin: 10px 0;\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  font-size: 16px;\n}\n\ninput[type="submit"] {\n  background-color: 4caf50;\n  color: white;\n  font-size: 16px;\n  padding: 10px;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n}\ninput[type="submit"]:hover {\n  background-color: #45a049;\n}\n`,""]);const p=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],s=r.base?d[0]+r.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=r(n,o),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},365:(n,e,t)=>{n.exports=t.p+"b003c5056904d23ebb14.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=t.p+"19b23d49cb29e3abf663.jpg",e=()=>{const e=document.querySelector("#content"),t=document.createElement("div"),r=document.createElement("div"),o=document.createElement("h1"),a=document.createElement("p"),i=new Image;i.src=n;const c=document.createElement("p");t.classList.add("page-content"),t.classList.add("main"),r.classList.add("outer-div"),o.classList.add("outer-div-heading"),a.classList.add("outer-div-para1"),i.classList.add("image"),c.classList.add("outer-div-para2"),o.textContent="Welcome to Indilicious",a.textContent="Indian Restaurant. Serving North Indian Food",c.textContent="Order online or visit us",r.appendChild(o),r.appendChild(a),r.appendChild(i),r.appendChild(c),t.appendChild(r),e.appendChild(t)};var r=t(379),o=t.n(r),a=t(795),i=t.n(a),c=t(569),d=t.n(c),s=t(565),l=t.n(s),u=t(216),p=t.n(u),m=t(589),f=t.n(m),h=t(426),g={};function b(){const n=document.querySelector("#content"),e=document.querySelector(".page-content");e&&n.removeChild(e)}g.styleTagTransform=f(),g.setAttributes=l(),g.insert=d().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),o()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;(()=>{const n=document.querySelector("#content"),t=document.createElement("header"),r=document.createElement("h1"),o=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),c=document.createElement("div");a.setAttribute("id","home-btn"),i.setAttribute("id","menu-btn"),c.setAttribute("id","contact-btn"),t.classList.add("header"),r.classList.add("page-heading"),o.classList.add("nav-container"),a.classList.add("tab"),i.classList.add("tab"),c.classList.add("tab"),r.textContent="Indilicious",a.textContent="Home",i.textContent="Menu",c.textContent="Contact",o.appendChild(a),o.appendChild(i),o.appendChild(c),t.appendChild(r),t.appendChild(o),n.appendChild(t),a.addEventListener("click",(()=>{b(),e()})),i.addEventListener("click",(()=>{b(),document.querySelector("#content"),document.createElement("div").classList.add("page-content")})),c.addEventListener("click",(()=>{b(),(()=>{const n=document.querySelector("#content"),e=document.createElement("div");e.classList.add("page-content");const t=document.createElement("form");t.classList.add("contact-form");const r=document.createElement("input");r.type="text",r.placeholder="Enter heading",t.appendChild(r);const o=document.createElement("input");o.type="text",o.placeholder="Enter address",t.appendChild(o);const a=document.createElement("input");a.type="text",a.placeholder="Enter phone",t.appendChild(a);const i=document.createElement("input");i.type="button",i.value="Submit",t.appendChild(i),e.appendChild(t),n.appendChild(e)})()}))})(),e()})()})();
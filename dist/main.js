(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>u});var a=t(81),r=t.n(a),o=t(645),i=t.n(o),d=t(667),c=t.n(d),s=new URL(t(365),t.b),l=i()(r()),p=c()(s);l.push([n.id,`/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* My Project */\n\n:root {\n  --font-color: #eee;\n  --font-color-dark: #aaa;\n  --border-color: #222;\n  --background-dark: rgba(0, 0, 0, 0.9);\n  --background-light: rgba(0, 0, 0, 0.6);\n  --background-light-hover: rgba(99, 99, 99, 0.4);\n}\n\nbody {\n  /* font-family: sans-serif, monospace; */\n  font-family: "Montserrat", sans-serif, monospace;\n  /* font-size: 1.3rem; */\n  background-image: url(${p});\n  background-attachment: fixed;\n  background-size: cover;\n  color: var(--font-color);\n}\n\n#content {\n  height: 100vh;\n}\n\n/* header */\n\n.header {\n  background-color: var(--background-dark);\n  padding-top: 3rem;\n}\n\n.page-heading {\n  font-size: 4rem;\n  text-align: center;\n  font-family: "Tangerine", cursive;\n  color: var(--font-color);\n}\n\n.nav-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5rem;\n  height: 90px;\n}\n\n.tab {\n  padding: 8px 16px;\n  border: 2px solid black;\n  border-radius: 4px;\n  cursor: pointer;\n  width: 90px;\n  text-align: center;\n  font-weight: 300;\n  font-size: 1.7rem;\n  color: var(--font-color);\n  transition: transform 0.3s;\n  border-bottom: 2px solid transparent;\n}\n\n.tab:hover {\n  transform: translateY(-10%);\n}\n\n/* home page */\n\n.image {\n  height: 350px;\n  border-radius: 20px;\n}\n\n.main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 700px;\n  padding: 2rem;\n  margin: 2rem 0;\n  background-color: var(--background-light);\n  border: 1px solid var(--border-color);\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.outer-div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.outer-div-heading {\n  font-size: 3.6rem;\n}\n\n.outer-div-para1,\n.outer-div-para2 {\n  font-size: 1.4rem;\n}\n\n.outer-div,\n.image {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  opacity: 90%;\n}\n\n/* menu */\n\n.menu-container {\n  max-width: 800px;\n  padding: 4rem;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 2rem;\n  background-color: var(--background-light);\n  border: 1px solid var(--border-color);\n}\n\n.menu {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 4rem;\n  animation: fadeIn 1.5s;\n}\n\n/* Card */\n\n.card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 300px;\n  padding: 2rem;\n  cursor: pointer;\n  background-color: var(--background-light);\n  transition: background-color 0.3s;\n  border-radius: 10px;\n}\n\n.card h2 {\n  padding: 1.2rem;\n}\n\n.card-heading {\n  font-size: 2rem;\n  text-align: center;\n}\n\n.card-para {\n  font-size: 1.2rem;\n  width: 250px;\n  text-align: center;\n}\n\n.menu-card-img {\n  height: 200px;\n  width: 240px;\n  border-radius: 10px;\n}\n\n/* Contact */\n\n.contact-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\ninput {\n  margin: 10px 0;\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  font-size: 16px;\n}\n\ninput[type="submit"] {\n  background-color: 4caf50;\n  color: white;\n  font-size: 16px;\n  padding: 10px;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n}\ninput[type="submit"]:hover {\n  background-color: #45a049;\n}\n`,""]);const u=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(a)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);a&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var o={},i=[],d=0;d<n.length;d++){var c=n[d],s=a.base?c[0]+a.base:c[0],l=o[s]||0,p="".concat(s," ").concat(l);o[s]=l+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=r(m,a);a.byIndex=d,e.splice(d,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=a(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var d=t(o[i]);e[d].references--}for(var c=a(n,r),s=0;s<o.length;s++){var l=t(o[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=c}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},365:(n,e,t)=>{n.exports=t.p+"b003c5056904d23ebb14.jpg"}},e={};function t(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={id:a,exports:{}};return n[a](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var a=e.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&!n;)n=a[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=t.p+"19b23d49cb29e3abf663.jpg",e=()=>{const e=document.querySelector("#content"),t=document.createElement("div"),a=document.createElement("div"),r=document.createElement("h1"),o=document.createElement("p"),i=new Image;i.src=n;const d=document.createElement("p");t.classList.add("page-content"),t.classList.add("main"),a.classList.add("outer-div"),r.classList.add("outer-div-heading"),o.classList.add("outer-div-para1"),i.classList.add("image"),d.classList.add("outer-div-para2"),r.textContent="Welcome to Indilicious",o.textContent="Indian Restaurant. Serving North Indian Food",d.textContent="Order online or visit us",a.appendChild(r),a.appendChild(o),a.appendChild(i),a.appendChild(d),t.appendChild(a),e.appendChild(t)},a=[{img:t.p+"383143737fe79e898f1c.jpg",heading:"Butter Chicken",description:"Ultimate comfort food for your entire family!"},{img:t.p+"b261a213eef97880e5c7.jpg",heading:"Palak Chicken",description:"Creamy, flavorsome, amazingly delicious & makes for a comforting food!"},{img:t.p+"5efa41f408360fdd8da4.jpg",heading:"Chicken Tikka Masala",description:"Spicy, creamy, flavorable, and crazy delicious! "},{img:t.p+"4f5fde2fb37b90e539ad.jpg",heading:"Chicken Korma",description:"Curried dish made from ground spices and coconut"},{img:t.p+"98b1da7aa0083e09bf61.jpg",heading:"Tandoori Chicken",description:"Tender, juicy, moist and outrageously delicious "},{img:t.p+"375a488f24d0526593b3.jpg",heading:"Chicken Curry",description:"Traditional Indian dish made with plenty of spices, herbs, onions and tomatoes."}];var r=t(379),o=t.n(r),i=t(795),d=t.n(i),c=t(569),s=t.n(c),l=t(565),p=t.n(l),u=t(216),m=t.n(u),h=t(589),f=t.n(h),g=t(426),b={};function v(){const n=document.querySelector("#content"),e=document.querySelector(".page-content");e&&n.removeChild(e)}b.styleTagTransform=f(),b.setAttributes=p(),b.insert=s().bind(null,"head"),b.domAPI=d(),b.insertStyleElement=m(),o()(g.Z,b),g.Z&&g.Z.locals&&g.Z.locals;const y=()=>{const n=document.querySelector("#content"),t=document.createElement("header"),r=document.createElement("h1"),o=document.createElement("div"),i=document.createElement("div"),d=document.createElement("div"),c=document.createElement("div");i.setAttribute("id","home-btn"),d.setAttribute("id","menu-btn"),c.setAttribute("id","contact-btn"),t.classList.add("header"),r.classList.add("page-heading"),o.classList.add("nav-container"),i.classList.add("tab"),d.classList.add("tab"),c.classList.add("tab"),r.textContent="Indilicious",i.textContent="Home",d.textContent="Menu",c.textContent="Contact",o.appendChild(i),o.appendChild(d),o.appendChild(c),t.appendChild(r),t.appendChild(o),n.appendChild(t),i.addEventListener("click",(()=>{v(),e()})),d.addEventListener("click",(()=>{v(),(()=>{const n=document.querySelector("#content"),e=document.createElement("div");e.classList.add("page-content"),e.classList.add("menu-container");const t=document.createElement("div");t.classList.add("menu"),a.forEach((n=>{const e=document.createElement("div"),a=new Image,r=document.createElement("h2"),o=document.createElement("p");a.src=`${n.img}`,r.textContent=`${n.heading}`,o.textContent=`${n.description}`,e.classList.add("card"),a.classList.add("menu-card-img"),r.classList.add("card-heading"),o.classList.add("card-para"),e.appendChild(a),e.appendChild(r),e.appendChild(o),t.appendChild(e)})),e.appendChild(t),n.appendChild(e)})()})),c.addEventListener("click",(()=>{v(),(()=>{const n=document.querySelector("#content"),e=document.createElement("div");e.classList.add("page-content"),e.classList.add("contact-container");const t=document.createElement("div"),a=document.createElement("h1"),r=document.createElement("div"),o=document.createElement("div"),i=document.createElement("h2"),d=document.createElement("p"),c=document.createElement("p"),s=document.createElement("div"),l=document.createElement("h2"),p=document.createElement("p"),u=document.createElement("p"),m=document.createElement("p"),h=document.createElement("div"),f=document.createElement("h2"),g=document.createElement("p"),b=document.createElement("p");a.textContent="Contact",i.textContentt="Location",d.textContent="101 Rideau Street",c.textContent="Ottawa, ON",l.textContent="Hours",p.textContent="Tue - Thus, 8 am - 10pm",u.textContent="Fri - Sun, 8 am - 11 pm",m.textContent="Closed Mondays",f.textContent="Contact",g.textContent="(613) 555-1110",b.textContent="info@indilicious.com",t.classList.add("contact-main-heading-contaiiner"),f.classList.add("contact-heading"),r.classList.add("contact-body-container"),o.classList.add("location-wrapper"),s.classList.add("hours-wrapper"),h.classList.add("contact-wrapper"),t.appendChild(a),o.appendChild(i),o.appendChild(d),o.appendChild(c),s.appendChild(l),s.appendChild(p),s.appendChild(u),s.appendChild(m),h.appendChild(f),h.appendChild(g),h.appendChild(b),r.appendChild(o),r.appendChild(s),r.appendChild(h),e.appendChild(t),e.appendChild(r),n.appendChild(e)})()}))};y(),e()})()})();
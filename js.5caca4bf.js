parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/header-bg.jpeg":[["header-bg.ef277059.jpeg","ur1k"],"ur1k"],"./../fonts/Roboto-Regular.ttf":[["Roboto-Regular.e94e4f38.ttf","E3dE"],"E3dE"],"./../fonts/Roboto-Medium.ttf":[["Roboto-Medium.2629d878.ttf","qops"],"qops"],"./../fonts/GreatVibes-Regular.ttf":[["GreatVibes-Regular.aeb9f272.ttf","VBqj"],"VBqj"]}],"plPA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Spinner=void 0;var t=function(){return(t=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},e={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",fadeColor:"transparent",animation:"spinner-line-fade-default",rotate:0,direction:1,speed:1,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:"0 0 1px transparent",position:"absolute"},n=function(){function n(n){void 0===n&&(n={}),this.opts=t(t({},e),n)}return n.prototype.spin=function(t){return this.stop(),this.el=document.createElement("div"),this.el.className=this.opts.className,this.el.setAttribute("role","progressbar"),i(this.el,{position:this.opts.position,width:0,zIndex:this.opts.zIndex,left:this.opts.left,top:this.opts.top,transform:"scale("+this.opts.scale+")"}),t&&t.insertBefore(this.el,t.firstChild||null),o(this.el,this.opts),this},n.prototype.stop=function(){return this.el&&("undefined"!=typeof requestAnimationFrame?cancelAnimationFrame(this.animateId):clearTimeout(this.animateId),this.el.parentNode&&this.el.parentNode.removeChild(this.el),this.el=void 0),this},n}();function i(t,e){for(var n in e)t.style[n]=e[n];return t}function r(t,e){return"string"==typeof t?t:t[e%t.length]}function o(t,e){var n=Math.round(e.corners*e.width*500)/1e3+"px",o="none";!0===e.shadow?o="0 2px 4px #000":"string"==typeof e.shadow&&(o=e.shadow);for(var d=s(o),p=0;p<e.lines;p++){var h=~~(360/e.lines*p+e.rotate),l=i(document.createElement("div"),{position:"absolute",top:-e.width/2+"px",width:e.length+e.width+"px",height:e.width+"px",background:r(e.fadeColor,p),borderRadius:n,transformOrigin:"left",transform:"rotate("+h+"deg) translateX("+e.radius+"px)"}),u=p*e.direction/e.lines/e.speed;u-=1/e.speed;var c=i(document.createElement("div"),{width:"100%",height:"100%",background:r(e.color,p),borderRadius:n,boxShadow:a(d,h),animation:1/e.speed+"s linear "+u+"s infinite "+e.animation});l.appendChild(c),t.appendChild(l)}}function s(t){for(var e=/^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/,n=[],i=0,r=t.split(",");i<r.length;i++){var o=r[i].match(e);if(null!==o){var s=+o[2],a=+o[5],d=o[4],p=o[7];0!==s||d||(d=p),0!==a||p||(p=d),d===p&&n.push({prefix:o[1]||"",x:s,y:a,xUnits:d,yUnits:p,end:o[8]})}}return n}function a(t,e){for(var n=[],i=0,r=t;i<r.length;i++){var o=r[i],s=d(o.x,o.y,e);n.push(o.prefix+s[0]+o.xUnits+" "+s[1]+o.yUnits+o.end)}return n.join(", ")}function d(t,e,n){var i=n*Math.PI/180,r=Math.sin(i),o=Math.cos(i);return[Math.round(1e3*(t*o+e*r))/1e3,Math.round(1e3*(-t*r+e*o))/1e3]}exports.Spinner=n;
},{}],"Sc1o":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.target=exports.spinner=exports.opts=void 0;var e=require("spin.js");const t={lines:15,length:38,width:17,radius:45,scale:.5,corners:1,speed:1,rotate:0,animation:"spinner-line-shrink",direction:1,color:"#ff6b08",fadeColor:"transparent",top:"10%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"};exports.opts=t;const r=new e.Spinner(t);exports.spinner=r;const s=document.querySelector(".content");exports.target=s;
},{"spin.js":"plPA"}],"KUk1":[function(require,module,exports) {
"use strict";var e=s(require("../partials/price-list.html")),t=s(require("../partials/home.html")),n=s(require("../partials/news.html")),r=s(require("../partials/about-me.html")),i=s(require("../partials/video.html")),c=s(require("../partials/gift-sertificate.html")),l=s(require("../partials/contact.html")),u=s(require("../partials/massages.html")),a=require("./spinner");function s(e){return e&&e.__esModule?e:{default:e}}const o=document.querySelector(".js-price-list"),d=document.querySelector(".js-home"),f=document.querySelector(".js-news"),m=document.querySelector(".js-about-me"),L=document.querySelector(".content"),q=document.querySelector(".nav-list"),v=document.querySelector(".js-video"),p=document.querySelector(".js-gift-sertificate"),k=document.querySelector(".js-contacts"),y=document.querySelector(".js-massages");function S(e){if(!e.target.classList.contains("nav-link"))return;const t=document.querySelectorAll(".nav-link");for(const n of t)n.classList.remove("current");e.target.classList.add("current")}function h(t){t.preventDefault,console.log(),L.innerHTML=e.default}function M(e){e.preventDefault,S(e),L.innerHTML=t.default}function E(e){e.preventDefault,L.innerHTML=n.default}function H(e){e.preventDefault,L.innerHTML=r.default}function T(e){L.innerHTML=i.default}function j(e){L.innerHTML=c.default}function g(e){L.innerHTML=l.default}function D(e){L.innerHTML=u.default}q.addEventListener("click",S),p.addEventListener("click",j),v.addEventListener("click",T),o.addEventListener("click",h),d.addEventListener("click",M),f.addEventListener("click",E),m.addEventListener("click",H),k.addEventListener("click",g),y.addEventListener("click",D),L.innerHTML=t.default;
},{"../partials/price-list.html":"dRHv","../partials/home.html":"STfV","../partials/news.html":"ssVt","../partials/about-me.html":"QGLI","../partials/video.html":"j4hd","../partials/gift-sertificate.html":"Blag","../partials/contact.html":"ePGw","../partials/massages.html":"pmIJ","./spinner":"Sc1o"}],"gqgb":[function(require,module,exports) {
const e=document.querySelector(".appointment__backdrop"),t=document.querySelector("body"),n=document.querySelector(".appointment__modal--btn-close"),o=document.querySelector(".appointment__title"),i=document.querySelector(".appointment__page"),a=document.querySelector(".header-button"),c=document.querySelector(".appointment");a.addEventListener("click",d);const r=document.querySelector(".content");function d(a){if(a.target.classList.contains("js-buy-now-btn"))o.textContent="Cadeaubon",i.textContent="Bedrag 15. 25. 35. 50. 100. EUR:";else{if(!a.target.classList.contains("header-button"))return;o.textContent="AFSPRAAK MAKEN",i.textContent="? Hoe? Telefonisch, per e-mail of gebruik maken van het onderstaande contactformulier ? Wanneer? Op werkdagen tussen 10.00-21.00 uur ? Ik heb geen pin automaat, dus gelieve te betalen voor de dienst in contanten. ? Je 1e afspraak duur 15 minuten langer i.v.m. de kennismaking/intake"}a.preventDefault(),e.classList.remove("is-hidden"),t.style.overflow="hidden",n.addEventListener("click",u),e.addEventListener("click",l),window.addEventListener("keydown",m)}function s(){t.style.overflow="visible",e.classList.add("is-hidden"),n.removeEventListener("click",u),window.removeEventListener("keydown",m),e.removeEventListener("click",l)}function u(){s()}function l(e){e.target.classList.contains("appointment__backdrop")&&s()}function m(e){"Escape"===e.code&&s()}r.addEventListener("click",d);
},{}],"QvaY":[function(require,module,exports) {
"use strict";require("../sass/main.scss"),require("./pages"),require("./appointment-modal"),require("./spinner");
},{"../sass/main.scss":"clu1","./pages":"KUk1","./appointment-modal":"gqgb","./spinner":"Sc1o"}],"FheM":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"TUK3":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"FheM"}],"A3BY":[function(require,module,exports) {
module.exports=function(t){return fetch(t).then(function(t){return t.text()})};
},{}],0:[function(require,module,exports) {
var b=require("TUK3");b.register("html",require("A3BY"));b.load([["price-list.80055a70.html","dRHv"],["home.e3b8ab2c.html","STfV"],["news.567ce659.html","ssVt"],["about-me.60a0e79b.html","QGLI"],["video.16f1f804.html","j4hd"],["gift-sertificate.f828a15d.html","Blag"],["contact.1af4d41b.html","ePGw"],["massages.794c7980.html","pmIJ"]]).then(function(){require("QvaY");});
},{}]},{},[0], null)
//# sourceMappingURL=/alisamassage/js.5caca4bf.js.map
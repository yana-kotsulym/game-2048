parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n,e=0,t=4,r=4,o=0,c=document.querySelector("tbody"),a=document.querySelector(".message-win"),i=document.querySelector(".message-start"),u=document.querySelector(".message-lose"),s=document.querySelector(".button"),f=document.querySelector(".game-score");function d(){n=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],c.innerHTML=n.map(function(n,e){return"\n    <tr>\n      ".concat(n.map(function(n,t){return'\n        <td\n          class="field-cell '.concat(n>0?"field-cell--".concat(n):"",'"\n          id="').concat(e,"-").concat(t,'">\n          ').concat(n>0?n:"","\n        </td>\n      ")}).join(""),"\n    </tr>\n  ")}).join(""),S(),S()}function l(n,e){n.innerText="",n.classList.value="",n.classList.add("field-cell"),e>0&&(n.innerText=e.toString(),n.classList.add("field-cell--".concat(e)))}function v(n){switch(n.key){case"ArrowLeft":if(!x())return;g(),S();break;case"ArrowRight":if(!M())return;E(),S();break;case"ArrowUp":if(!T())return;w(),S();break;case"ArrowDown":if(!B())return;k(),S();break;default:return}++o>0&&m(),p()&&(u.classList.remove("hidden"),document.removeEventListener("keydown",v)),q()&&(a.classList.remove("hidden"),document.removeEventListener("keydown",v))}function m(){i.classList.add("hidden"),s.classList.remove("start"),s.classList.add("restart"),s.textContent="Restart",u.classList.add("hidden"),a.classList.add("hidden"),a.classList.add("hidden")}function L(){o=0,e=0,f.innerText=e,d(),m(),document.addEventListener("keydown",v)}function h(n){return n.filter(function(n){return 0!==n})}function y(n){for(var t=h(n),o=0;o<t.length-1;o++)t[o]===t[o+1]&&(t[o]*=2,t[o+1]=0,e+=t[o],f.innerText=e);for(t=h(t);t.length<r;)t.push(0);return t}function g(){(n=n.map(function(n){return y(n)})).forEach(function(n,e){n.forEach(function(n,t){l(document.getElementById("".concat(e,"-").concat(t)),n)})})}function E(){(n=n.map(function(n){return y(n.reverse()).reverse()})).forEach(function(n,e){n.forEach(function(n,t){l(document.getElementById("".concat(e,"-").concat(t)),n)})})}function w(){for(var e=0;e<r;e++){var o=[n[0][e],n[1][e],n[2][e],n[3][e]];o=y(o);for(var c=0;c<t;c++){n[c][e]=o[c],l(document.getElementById("".concat(c,"-").concat(e)),n[c][e])}}}function k(){for(var e=0;e<r;e++){var o=[n[0][e],n[1][e],n[2][e],n[3][e]];o=y(o.reverse()).reverse();for(var c=0;c<t;c++){n[c][e]=o[c],l(document.getElementById("".concat(c,"-").concat(e)),n[c][e])}}}function S(){if(b())for(var e=!1;!e;){var o=Math.floor(Math.random()*t),c=Math.floor(Math.random()*r);if(0===n[o][c]){var a=Math.random()>.9?4:2;n[o][c]=a;var i=document.getElementById("".concat(o,"-").concat(c));i.innerText=a,i.classList.add("field-cell--".concat(a)),e=!0}}}function b(){for(var e=0;e<t;e++)if(n[e].some(function(n){return 0===n}))return!0;return!1}function p(){if(!(x()||M()||T()||B()))return!0}function q(){for(var e=0;e<t;e++)if(n[e].some(function(n){return 2048===n}))return!0;return!1}function x(){for(var e=0;e<t;e++)for(var o=n[e],c=r-1;c>0;c--)if(0!==o[c]&&(0===o[c-1]||o[c]===o[c-1]))return!0;return!1}function M(){for(var e=0;e<t;e++)for(var o=n[e].reverse(),c=r-1;c>0;c--)if(0!==o[c]&&(0===o[c-1]||o[c]===o[c-1]))return!0;return!1}function T(){for(var e=0;e<r;e++)for(var t=[n[0][e],n[1][e],n[2][e],n[3][e]],o=r-1;o>0;o--)if(0!==t[o]&&(0===t[o-1]||t[o]===t[o-1]))return!0;return!1}function B(){for(var e=0;e<r;e++)for(var t=[n[0][e],n[1][e],n[2][e],n[3][e]].reverse(),o=r-1;o>0;o--)if(0!==t[o]&&(0===t[o-1]||t[o]===t[o-1]))return!0;return!1}window.onload=function(){d()},document.addEventListener("keydown",v),s.addEventListener("click",function(n){n.target.classList.contains("restart")?L():n.target.classList.contains("start")&&m()});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.1cc6ad32.js.map
"use strict";(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[16744],{866934:(t,e,r)=>{r.d(e,{default:()=>o});var n=r(624402),a=r(872575),u=Object.prototype.hasOwnProperty;const o=function(t,e,r){var o=t[e];u.call(t,e)&&(0,a.default)(o,r)&&(void 0!==r||e in t)||(0,n.default)(t,e,r)}},624402:(t,e,r)=>{r.d(e,{default:()=>a});var n=r(776780);const a=function(t,e,r){"__proto__"==e&&n.default?(0,n.default)(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}},144315:(t,e,r)=>{r.d(e,{default:()=>K});var n=r(396335);const a=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););return t};var u=r(866934),o=r(175969),c=r(933358);const f=function(t,e){return t&&(0,o.default)(e,(0,c.default)(e),t)};var i=r(364162);const l=function(t,e){return t&&(0,o.default)(e,(0,i.default)(e),t)};var d=r(157508),s=r(458555),v=r(112644);const b=function(t,e){return(0,o.default)(t,(0,v.default)(t),e)};var j=r(749605);const y=function(t,e){return(0,o.default)(t,(0,j.default)(t),e)};var p=r(885747),w=r(847651),h=r(605832),g=Object.prototype.hasOwnProperty;const m=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&g.call(t,"index")&&(r.index=t.index,r.input=t.input),r};var A=r(544702);const O=function(t,e){var r=e?(0,A.default)(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)};var x=/\w*$/;const I=function(t){var e=new t.constructor(t.source,x.exec(t));return e.lastIndex=t.lastIndex,e};var S=r(503060),T=S.default?S.default.prototype:void 0,U=T?T.valueOf:void 0;const E=function(t){return U?Object(U.call(t)):{}};var M=r(839895);const k=function(t,e,r){var n=t.constructor;switch(e){case"[object ArrayBuffer]":return(0,A.default)(t);case"[object Boolean]":case"[object Date]":return new n(+t);case"[object DataView]":return O(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return(0,M.default)(t,r);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(t);case"[object RegExp]":return I(t);case"[object Symbol]":return E(t)}};var F=r(14905),N=r(854814),P=r(925247),B=r(383527);const D=function(t){return(0,B.default)(t)&&"[object Map]"==(0,h.default)(t)};var $=r(395256),C=r(159283),_=C.default&&C.default.isMap;const W=_?(0,$.default)(_):D;var L=r(598279);const R=function(t){return(0,B.default)(t)&&"[object Set]"==(0,h.default)(t)};var V=C.default&&C.default.isSet;const G=V?(0,$.default)(V):R;var q="[object Arguments]",z="[object Function]",H="[object Object]",J={}
;J[q]=J["[object Array]"]=J["[object ArrayBuffer]"]=J["[object DataView]"]=J["[object Boolean]"]=J["[object Date]"]=J["[object Float32Array]"]=J["[object Float64Array]"]=J["[object Int8Array]"]=J["[object Int16Array]"]=J["[object Int32Array]"]=J["[object Map]"]=J["[object Number]"]=J[H]=J["[object RegExp]"]=J["[object Set]"]=J["[object String]"]=J["[object Symbol]"]=J["[object Uint8Array]"]=J["[object Uint8ClampedArray]"]=J["[object Uint16Array]"]=J["[object Uint32Array]"]=!0,J["[object Error]"]=J[z]=J["[object WeakMap]"]=!1;const K=function t(e,r,o,i,v,j){var g,A=1&r,O=2&r,x=4&r;if(o&&(g=v?o(e,i,v,j):o(e)),void 0!==g)return g;if(!(0,L.default)(e))return e;var I=(0,N.default)(e);if(I){if(g=m(e),!A)return(0,s.default)(e,g)}else{var S=(0,h.default)(e),T=S==z||"[object GeneratorFunction]"==S;if((0,P.default)(e))return(0,d.default)(e,A);if(S==H||S==q||T&&!v){if(g=O||T?{}:(0,F.default)(e),!A)return O?y(e,l(g,e)):b(e,f(g,e))}else{if(!J[S])return v?e:{};g=k(e,S,A)}}j||(j=new n.default);var U=j.get(e);if(U)return U;j.set(e,g),G(e)?e.forEach((function(n){g.add(t(n,r,o,n,e,j))})):W(e)&&e.forEach((function(n,a){g.set(a,t(n,r,o,a,e,j))}));var E=x?O?w.default:p.default:O?keysIn:c.default,M=I?void 0:E(e);return a(M||e,(function(n,a){M&&(n=e[a=n]),(0,u.default)(g,a,t(n,r,o,a,e,j))})),g}},789478:(t,e,r)=>{r.d(e,{default:()=>u});var n=r(598279),a=Object.create;const u=function(){function t(){}return function(e){if(!(0,n.default)(e))return{};if(a)return a(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}()},544702:(t,e,r)=>{r.d(e,{default:()=>a});var n=r(735246);const a=function(t){var e=new t.constructor(t.byteLength);return new n.default(e).set(new n.default(t)),e}},157508:(t,e,r)=>{r.d(e,{default:()=>f});var n=r(178160);t=r.hmd(t);var a="object"==typeof exports&&exports&&!exports.nodeType&&exports,u=a&&t&&!t.nodeType&&t,o=u&&u.exports===a?n.default.Buffer:void 0,c=o?o.allocUnsafe:void 0;const f=function(t,e){if(e)return t.slice();var r=t.length,n=c?c(r):new t.constructor(r);return t.copy(n),n}},839895:(t,e,r)=>{r.d(e,{default:()=>a});var n=r(544702);const a=function(t,e){var r=e?(0,n.default)(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}},458555:(t,e,r)=>{r.d(e,{default:()=>n});const n=function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}},175969:(t,e,r)=>{r.d(e,{default:()=>u});var n=r(866934),a=r(624402);const u=function(t,e,r,u){var o=!r;r||(r={});for(var c=-1,f=e.length;++c<f;){var i=e[c],l=u?u(r[i],t[i],i,r,t):void 0;void 0===l&&(l=t[i]),o?(0,a.default)(r,i,l):(0,n.default)(r,i,l)}return r}},776780:(t,e,r)=>{r.d(e,{default:()=>a});var n=r(270830);const a=function(){try{var t=(0,n.default)(Object,"defineProperty");return t({},"",{}),t}catch(t){}}()},847651:(t,e,r)=>{r.d(e,{default:()=>o});var n=r(44631),a=r(749605),u=r(364162);const o=function(t){return(0,n.default)(t,u.default,a.default)}},156838:(t,e,r)=>{r.d(e,{default:()=>n});const n=(0,r(22828).default)(Object.getPrototypeOf,Object)},749605:(t,e,r)=>{r.d(e,{default:()=>c})
;var n=r(920883),a=r(156838),u=r(112644),o=r(335987);const c=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)(0,n.default)(e,(0,u.default)(t)),t=(0,a.default)(t);return e}:o.default},14905:(t,e,r)=>{r.d(e,{default:()=>o});var n=r(789478),a=r(156838),u=r(443744);const o=function(t){return"function"!=typeof t.constructor||(0,u.default)(t)?{}:(0,n.default)((0,a.default)(t))}},822914:(t,e,r)=>{r.d(e,{default:()=>a});var n=r(144315);const a=function(t){return(0,n.default)(t,5)}},12481:(t,e,r)=>{r.d(e,{default:()=>i});var n=r(598279),a=r(178160);const u=function(){return a.default.Date.now()};var o=r(968877),c=Math.max,f=Math.min;const i=function(t,e,r){var a,i,l,d,s,v,b=0,j=!1,y=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function w(e){var r=a,n=i;return a=i=void 0,b=e,d=t.apply(n,r)}function h(t){return b=t,s=setTimeout(m,e),j?w(t):d}function g(t){var r=t-v;return void 0===v||r>=e||r<0||y&&t-b>=l}function m(){var t=u();if(g(t))return A(t);s=setTimeout(m,function(t){var r=e-(t-v);return y?f(r,l-(t-b)):r}(t))}function A(t){return s=void 0,p&&a?w(t):(a=i=void 0,d)}function O(){var t=u(),r=g(t);if(a=arguments,i=this,v=t,r){if(void 0===s)return h(v);if(y)return clearTimeout(s),s=setTimeout(m,e),w(v)}return void 0===s&&(s=setTimeout(m,e)),d}return e=(0,o.default)(e)||0,(0,n.default)(r)&&(j=!!r.leading,l=(y="maxWait"in r)?c((0,o.default)(r.maxWait)||0,e):l,p="trailing"in r?!!r.trailing:p),O.cancel=function(){void 0!==s&&clearTimeout(s),b=0,a=v=i=s=void 0},O.flush=function(){return void 0===s?d:A(u())},O}},708875:(t,e,r)=>{r.d(e,{default:()=>u});var n=r(128177),a=r(383527);const u=function(t){return"symbol"==typeof t||(0,a.default)(t)&&"[object Symbol]"==(0,n.default)(t)}},364162:(t,e,r)=>{r.d(e,{default:()=>l});var n=r(488164),a=r(598279),u=r(443744);const o=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e};var c=Object.prototype.hasOwnProperty;const f=function(t){if(!(0,a.default)(t))return o(t);var e=(0,u.default)(t),r=[];for(var n in t)("constructor"!=n||!e&&c.call(t,n))&&r.push(n);return r};var i=r(29419);const l=function(t){return(0,i.default)(t)?(0,n.default)(t,!0):f(t)}},968877:(t,e,r)=>{r.d(e,{default:()=>l});var n=r(598279),a=r(708875),u=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,f=/^0o[0-7]+$/i,i=parseInt;const l=function(t){if("number"==typeof t)return t;if((0,a.default)(t))return NaN;if((0,n.default)(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=(0,n.default)(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var r=c.test(t);return r||f.test(t)?i(t.slice(2),r?2:8):o.test(t)?NaN:+t}}}]);
(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[5585],{650151:(e,r)=>{"use strict";function t(e,r){if(void 0===e)throw new Error("".concat(null!=r?r:"Value"," is undefined"));return e}function n(e,r){if(null===e)throw new Error("".concat(null!=r?r:"Value"," is null"));return e}Object.defineProperty(r,"__esModule",{value:!0}),r.ensureNever=r.ensure=r.ensureNotNull=r.ensureDefined=r.assert=void 0,r.assert=function(e,r){if(!e)throw new Error("Assertion failed".concat(r?": ".concat(r):""))},r.ensureDefined=t,r.ensureNotNull=n,r.ensure=function(e,r){return n(t(e,r),r)},r.ensureNever=function(e){}},150335:(e,r)=>{"use strict";function t(e){return Math.round(1e10*e)/1e10}Object.defineProperty(r,"__esModule",{value:!0}),r.alignTo=r.fixComputationError=r.isNaN=r.isInteger=r.isNumber=void 0,r.isNumber=function(e){return"number"==typeof e&&isFinite(e)},r.isInteger=function(e){return"number"==typeof e&&e%1==0},r.isNaN=function(e){return!(e<=0||e>0)},r.fixComputationError=t,r.alignTo=function(e,r){var n=e/r,o=Math.floor(n),i=n-o;return i>2e-10?t(i>.5?(o+1)*r:o*r):e}},724377:(e,r,t)=>{"use strict";var n=t(150335);function o(e,r,t){return n.isNaN(r)||r<e?e:r>t?t:Math.round(r)}function i(e,r,t){return n.isNaN(r)||r<e?e:r>t?t:Math.round(1e4*r)/1e4}function u(e){return o(0,e,255)}function f(e){return o(0,e,255)}function a(e){return o(0,e,255)}function c(e){return i(0,e,1)}function s(e){return i(0,e,1)}function l(e){return i(0,e,1)}function d(e){return i(0,e,1)}function p(e){return i(0,e,1)}function h(e){return i(0,e,1)}function b(e){var r=e[0]/255,t=e[1]/255,n=e[2]/255,o=Math.min(r,t,n),i=Math.max(r,t,n),u=0,f=0,a=(o+i)/2;if(o===i)u=0,f=0;else{var c=i-o;switch(f=a>.5?c/(2-i-o):c/(i+o),i){case r:u=((t-n)/c+(t<n?6:0))/6;break;case t:u=((n-r)/c+2)/6;break;case n:u=((r-t)/c+4)/6}}return[u,f,a]}function y(e,r,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+6*(r-e)*t:t<.5?r:t<2/3?e+(r-e)*(2/3-t)*6:e}function g(e){var r,t,n,o=e[0],i=e[1],c=e[2];if(0===i)r=t=n=c;else{var s=c<.5?c*(1+i):c+i-c*i,l=2*c-s;r=y(l,s,o+1/3),t=y(l,s,o),n=y(l,s,o-1/3)}return[u(255*r),f(255*t),a(255*n)]}r.normalizeAlphaComponent=c,r.rgb=function(e,r,t){return[u(e),f(r),a(t)]},r.areEqualRgb=function(e,r){return e[0]===r[0]&&e[1]===r[1]&&e[2]===r[2]},r.rgba=function(e,r,t,n){if(Array.isArray(e)){var o=e;return n=r,[o[0],o[1],o[2],c(n)]}var i=r;return t=t||0,n=n||0,[u(e),f(i),a(t),c(n)]},r.areEqualRgba=function(e,r){return e[0]===r[0]&&e[1]===r[1]&&e[2]===r[2]&&e[3]===r[3]},r.rgbToHsl=b,r.hslToRgb=g;var v=[.199,.687,.114];function m(e){return v[0]*e[0]+v[1]*e[1]+v[2]*e[2]}function w(e,r,t){void 0===t&&(t=.05);var n=b(e),o=n[0]+r*t;return n[0]=s(o-Math.floor(o)),g(n)}function E(e,r,t){void 0===t&&(t=.05);var n=e[0],o=e[1],i=e[2],u=e[3],f=w([n,o,i],r,t);return[f[0],f[1],f[2],u]}r.distanceRgb=function(e,r){var t=e[0],n=e[1],o=e[2],i=r[0]-t,u=r[1]-n,f=r[2]-o;return Math.sqrt(i*i+u*u+f*f)},r.invertRgb=function(e){return[255-e[0],255-e[1],255-e[2]]},r.blendRgba=function(e,r){var t=e[0],n=e[1],o=e[2],i=e[3],s=r[0],l=r[1],d=r[2],p=r[3],h=c(1-(1-p)*(1-i))
;return[u(s*p/h+t*i*(1-p)/h),f(l*p/h+n*i*(1-p)/h),a(d*p/h+o*i*(1-p)/h),h]},r.shiftRgb=w,r.shiftRgba=E,r.shiftColor=function(e,r,t){return void 0===t&&(t=.05),O(E($(e),r,t))};var k,N,S,_,j={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",feldspar:"#d19275",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslateblue:"#8470ff",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",violetred:"#d02090",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function R(e,r){return r in e}
function I(e){var r=k.re.exec(e);return null!==r?k.parse(r):null}function A(e){var r=N.re.exec(e);return null!==r?N.parse(r):null}function P(e){var r=S.re.exec(e);return null!==r?S.parse(r):null}function x(e){var r=_.re.exec(e);return null!==r?_.parse(r):null}function O(e){return"rgba("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}function C(e){if(e=e.toLowerCase(),R(j,e)){var r=A(j[e]);if(null!==r)return r;throw new Error("Invalid named color definition")}var t=I(e);if(null!==t)return t;var n=A(e);if(null!==n)return n;var o=P(e);if(null!==o)return o;var i=x(e);return null!==i?[i[0],i[1],i[2]]:null}function q(e){if(e=e.toLowerCase(),R(j,e)){var r=A(j[e]);if(null!==r)return[r[0],r[1],r[2],1];throw new Error("Invalid named color definition")}var t=I(e);if(null!==t)return[t[0],t[1],t[2],1];var n=A(e);if(null!==n)return[n[0],n[1],n[2],1];var o=P(e);if(null!==o)return[o[0],o[1],o[2],1];var i=x(e);return null!==i?i:null}function $(e){var r=q(e);if(null!==r)return r;throw new Error("Passed color string does not match any of the known color representations")}!function(e){e.re=/^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/,e.parse=function(e){return[u(parseInt(e[1],10)),f(parseInt(e[2],10)),a(parseInt(e[3],10))]}}(k||(k={})),function(e){e.re=/^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,e.parse=function(e){return[u(parseInt(e[1],16)),f(parseInt(e[2],16)),a(parseInt(e[3],16))]}}(N||(N={})),r.rgbToHexString=function(e){var r=e[0],t=e[1],n=e[2],o=r.toString(16),i=t.toString(16),u=n.toString(16);return"#"+(1===o.length?"0":"")+o+(1===i.length?"0":"")+i+(1===u.length?"0":"")+u},function(e){e.re=/^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/,e.parse=function(e){return[u(parseInt(e[1]+e[1],16)),f(parseInt(e[2]+e[2],16)),a(parseInt(e[3]+e[3],16))]}}(S||(S={})),function(e){e.re=/^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/,e.parse=function(e){return[u(parseInt(e[1],10)),f(parseInt(e[2],10)),a(parseInt(e[3],10)),c(parseFloat(e[4]))]}}(_||(_={})),r.rgbaToString=O,r.rgbToBlackWhiteString=function(e,r){if(r<0||r>255)throw new Error("invalid threshold value, valid values are [0, 255]");return m(e)>=r?"white":"black"},r.tryParseRgb=C,r.parseRgb=function(e){var r=C(e);if(null!==r)return r;throw new Error("Passed color string does not match any of the known color representations")},r.tryParseRgba=q,r.parseRgba=$},960521:function(e,r,t){var n;!function(o){"use strict";var i,u=1e6,f=1e6,a="[big.js] ",c=a+"Invalid ",s=c+"decimal places",l=a+"Division by zero",d={},p=void 0,h=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function b(e,r,t,n){var o=e.c;if(t===p&&(t=e.constructor.RM),0!==t&&1!==t&&2!==t&&3!==t)throw Error("[big.js] Invalid rounding mode");if(r<1)n=3===t&&(n||!!o[0])||0===r&&(1===t&&o[0]>=5||2===t&&(o[0]>5||5===o[0]&&(n||o[1]!==p))),o.length=1,n?(e.e=e.e-r+1,o[0]=1):o[0]=e.e=0;else if(r<o.length){if(n=1===t&&o[r]>=5||2===t&&(o[r]>5||5===o[r]&&(n||o[r+1]!==p||1&o[r-1]))||3===t&&(n||!!o[0]),o.length=r--,n)for(;++o[r]>9;)o[r]=0,r--||(++e.e,o.unshift(1))
;for(r=o.length;!o[--r];)o.pop()}return e}function y(e,r,t){var n=e.e,o=e.c.join(""),i=o.length;if(r)o=o.charAt(0)+(i>1?"."+o.slice(1):"")+(n<0?"e":"e+")+n;else if(n<0){for(;++n;)o="0"+o;o="0."+o}else if(n>0)if(++n>i)for(n-=i;n--;)o+="0";else n<i&&(o=o.slice(0,n)+"."+o.slice(n));else i>1&&(o=o.charAt(0)+"."+o.slice(1));return e.s<0&&t?"-"+o:o}d.abs=function(){var e=new this.constructor(this);return e.s=1,e},d.cmp=function(e){var r,t=this,n=t.c,o=(e=new t.constructor(e)).c,i=t.s,u=e.s,f=t.e,a=e.e;if(!n[0]||!o[0])return n[0]?i:o[0]?-u:0;if(i!=u)return i;if(r=i<0,f!=a)return f>a^r?1:-1;for(u=(f=n.length)<(a=o.length)?f:a,i=-1;++i<u;)if(n[i]!=o[i])return n[i]>o[i]^r?1:-1;return f==a?0:f>a^r?1:-1},d.div=function(e){var r=this,t=r.constructor,n=r.c,o=(e=new t(e)).c,i=r.s==e.s?1:-1,f=t.DP;if(f!==~~f||f<0||f>u)throw Error(s);if(!o[0])throw Error(l);if(!n[0])return e.s=i,e.c=[e.e=0],e;var a,c,d,h,y,g=o.slice(),v=a=o.length,m=n.length,w=n.slice(0,a),E=w.length,k=e,N=k.c=[],S=0,_=f+(k.e=r.e-e.e)+1;for(k.s=i,i=_<0?0:_,g.unshift(0);E++<a;)w.push(0);do{for(d=0;d<10;d++){if(a!=(E=w.length))h=a>E?1:-1;else for(y=-1,h=0;++y<a;)if(o[y]!=w[y]){h=o[y]>w[y]?1:-1;break}if(!(h<0))break;for(c=E==a?o:g;E;){if(w[--E]<c[E]){for(y=E;y&&!w[--y];)w[y]=9;--w[y],w[E]+=10}w[E]-=c[E]}for(;!w[0];)w.shift()}N[S++]=h?d:++d,w[0]&&h?w[E]=n[v]||0:w=[n[v]]}while((v++<m||w[0]!==p)&&i--);return N[0]||1==S||(N.shift(),k.e--,_--),S>_&&b(k,_,t.RM,w[0]!==p),k},d.eq=function(e){return 0===this.cmp(e)},d.gt=function(e){return this.cmp(e)>0},d.gte=function(e){return this.cmp(e)>-1},d.lt=function(e){return this.cmp(e)<0},d.lte=function(e){return this.cmp(e)<1},d.minus=d.sub=function(e){var r,t,n,o,i=this,u=i.constructor,f=i.s,a=(e=new u(e)).s;if(f!=a)return e.s=-a,i.plus(e);var c=i.c.slice(),s=i.e,l=e.c,d=e.e;if(!c[0]||!l[0])return l[0]?e.s=-a:c[0]?e=new u(i):e.s=1,e;if(f=s-d){for((o=f<0)?(f=-f,n=c):(d=s,n=l),n.reverse(),a=f;a--;)n.push(0);n.reverse()}else for(t=((o=c.length<l.length)?c:l).length,f=a=0;a<t;a++)if(c[a]!=l[a]){o=c[a]<l[a];break}if(o&&(n=c,c=l,l=n,e.s=-e.s),(a=(t=l.length)-(r=c.length))>0)for(;a--;)c[r++]=0;for(a=r;t>f;){if(c[--t]<l[t]){for(r=t;r&&!c[--r];)c[r]=9;--c[r],c[t]+=10}c[t]-=l[t]}for(;0===c[--a];)c.pop();for(;0===c[0];)c.shift(),--d;return c[0]||(e.s=1,c=[d=0]),e.c=c,e.e=d,e},d.mod=function(e){var r,t=this,n=t.constructor,o=t.s,i=(e=new n(e)).s;if(!e.c[0])throw Error(l);return t.s=e.s=1,r=1==e.cmp(t),t.s=o,e.s=i,r?new n(t):(o=n.DP,i=n.RM,n.DP=n.RM=0,t=t.div(e),n.DP=o,n.RM=i,this.minus(t.times(e)))},d.plus=d.add=function(e){var r,t,n,o=this,i=o.constructor;if(e=new i(e),o.s!=e.s)return e.s=-e.s,o.minus(e);var u=o.e,f=o.c,a=e.e,c=e.c;if(!f[0]||!c[0])return c[0]||(f[0]?e=new i(o):e.s=o.s),e;if(f=f.slice(),r=u-a){for(r>0?(a=u,n=c):(r=-r,n=f),n.reverse();r--;)n.push(0);n.reverse()}for(f.length-c.length<0&&(n=c,c=f,f=n),r=c.length,t=0;r;f[r]%=10)t=(f[--r]=f[r]+c[r]+t)/10|0;for(t&&(f.unshift(t),++a),r=f.length;0===f[--r];)f.pop();return e.c=f,e.e=a,e},d.pow=function(e){var r=this,t=new r.constructor("1"),n=t,o=e<0
;if(e!==~~e||e<-1e6||e>f)throw Error(c+"exponent");for(o&&(e=-e);1&e&&(n=n.times(r)),e>>=1;)r=r.times(r);return o?t.div(n):n},d.prec=function(e,r){if(e!==~~e||e<1||e>u)throw Error(c+"precision");return b(new this.constructor(this),e,r)},d.round=function(e,r){if(e===p)e=0;else if(e!==~~e||e<-u||e>u)throw Error(s);return b(new this.constructor(this),e+this.e+1,r)},d.sqrt=function(){var e,r,t,n=this,o=n.constructor,i=n.s,u=n.e,f=new o("0.5");if(!n.c[0])return new o(n);if(i<0)throw Error(a+"No square root");0===(i=Math.sqrt(n+""))||i===1/0?((r=n.c.join("")).length+u&1||(r+="0"),u=((u+1)/2|0)-(u<0||1&u),e=new o(((i=Math.sqrt(r))==1/0?"5e":(i=i.toExponential()).slice(0,i.indexOf("e")+1))+u)):e=new o(i+""),u=e.e+(o.DP+=4);do{t=e,e=f.times(t.plus(n.div(t)))}while(t.c.slice(0,u).join("")!==e.c.slice(0,u).join(""));return b(e,(o.DP-=4)+e.e+1,o.RM)},d.times=d.mul=function(e){var r,t=this,n=t.constructor,o=t.c,i=(e=new n(e)).c,u=o.length,f=i.length,a=t.e,c=e.e;if(e.s=t.s==e.s?1:-1,!o[0]||!i[0])return e.c=[e.e=0],e;for(e.e=a+c,u<f&&(r=o,o=i,i=r,c=u,u=f,f=c),r=new Array(c=u+f);c--;)r[c]=0;for(a=f;a--;){for(f=0,c=u+a;c>a;)f=r[c]+i[a]*o[c-a-1]+f,r[c--]=f%10,f=f/10|0;r[c]=f}for(f?++e.e:r.shift(),a=r.length;!r[--a];)r.pop();return e.c=r,e},d.toExponential=function(e,r){var t=this,n=t.c[0];if(e!==p){if(e!==~~e||e<0||e>u)throw Error(s);for(t=b(new t.constructor(t),++e,r);t.c.length<e;)t.c.push(0)}return y(t,!0,!!n)},d.toFixed=function(e,r){var t=this,n=t.c[0];if(e!==p){if(e!==~~e||e<0||e>u)throw Error(s);for(e=e+(t=b(new t.constructor(t),e+t.e+1,r)).e+1;t.c.length<e;)t.c.push(0)}return y(t,!1,!!n)},d.toJSON=d.toString=function(){var e=this,r=e.constructor;return y(e,e.e<=r.NE||e.e>=r.PE,!!e.c[0])},d.toNumber=function(){var e=Number(y(this,!0,!0));if(!0===this.constructor.strict&&!this.eq(e.toString()))throw Error(a+"Imprecise conversion");return e},d.toPrecision=function(e,r){var t=this,n=t.constructor,o=t.c[0];if(e!==p){if(e!==~~e||e<1||e>u)throw Error(c+"precision");for(t=b(new n(t),e,r);t.c.length<e;)t.c.push(0)}return y(t,e<=t.e||t.e<=n.NE||t.e>=n.PE,!!o)},d.valueOf=function(){var e=this,r=e.constructor;if(!0===r.strict)throw Error(a+"valueOf disallowed");return y(e,e.e<=r.NE||e.e>=r.PE,!0)},i=function e(){function r(t){var n=this;if(!(n instanceof r))return t===p?e():new r(t);if(t instanceof r)n.s=t.s,n.e=t.e,n.c=t.c.slice();else{if("string"!=typeof t){if(!0===r.strict)throw TypeError(c+"number");t=0===t&&1/t<0?"-0":String(t)}!function(e,r){var t,n,o;if(!h.test(r))throw Error(c+"number");e.s="-"==r.charAt(0)?(r=r.slice(1),-1):1,(t=r.indexOf("."))>-1&&(r=r.replace(".",""));(n=r.search(/e/i))>0?(t<0&&(t=n),t+=+r.slice(n+1),r=r.substring(0,n)):t<0&&(t=r.length);for(o=r.length,n=0;n<o&&"0"==r.charAt(n);)++n;if(n==o)e.c=[e.e=0];else{for(;o>0&&"0"==r.charAt(--o););for(e.e=t-n-1,e.c=[],t=0;n<=o;)e.c[t++]=+r.charAt(n++)}}(n,t)}n.constructor=r}return r.prototype=d,r.DP=20,r.RM=1,r.NE=-7,r.PE=21,r.strict=false,r.roundDown=0,r.roundHalfUp=1,r.roundHalfEven=2,r.roundUp=3,r}(),i.default=i.Big=i,void 0===(n=function(){return i
}.call(r,t,r,e))||(e.exports=n)}()},778785:(e,r,t)=>{"use strict";t.d(r,{mobiletouch:()=>o,setClasses:()=>u,touch:()=>i});var n=t(167175);const o=n.mobiletouch,i=n.touch;function u(){document.documentElement.classList.add(n.touch?"feature-touch":"feature-no-touch",n.mobiletouch?"feature-mobiletouch":"feature-no-mobiletouch")}},444372:(e,r,t)=>{"use strict";t.r(r),t.d(r,{t:()=>n.t,withTranslationContext:()=>o});t(586463);var n=t(631110);function o(e){throw new Error("Not implemented")}},695257:(e,r)=>{"use strict";var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),a=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,y={};function g(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||h}function v(){}function m(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var w=m.prototype=new v;w.constructor=m,b(w,g.prototype),w.isPureReactComponent=!0;var E=Array.isArray,k=Object.prototype.hasOwnProperty,N={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function _(e,r,n){var o,i={},u=null,f=null;if(null!=r)for(o in void 0!==r.ref&&(f=r.ref),void 0!==r.key&&(u=""+r.key),r)k.call(r,o)&&!S.hasOwnProperty(o)&&(i[o]=r[o]);var a=arguments.length-2;if(1===a)i.children=n;else if(1<a){for(var c=Array(a),s=0;s<a;s++)c[s]=arguments[s+2];i.children=c}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===i[o]&&(i[o]=a[o]);return{$$typeof:t,type:e,key:u,ref:f,props:i,_owner:N.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var R=/\/+/g;function I(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function A(e,r,o,i,u){var f=typeof e;"undefined"!==f&&"boolean"!==f||(e=null);var a=!1;if(null===e)a=!0;else switch(f){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case t:case n:a=!0}}if(a)return u=u(a=e),e=""===i?"."+I(a,0):i,E(u)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),A(u,r,o,"",(function(e){return e}))):null!=u&&(j(u)&&(u=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||a&&a.key===u.key?"":(""+u.key).replace(R,"$&/")+"/")+e)),r.push(u)),1;if(a=0,i=""===i?".":i+":",
E(e))for(var c=0;c<e.length;c++){var s=i+I(f=e[c],c);a+=A(f,r,o,s,u)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),c=0;!(f=e.next()).done;)a+=A(f=f.value,r,o,s=i+I(f,c++),u);else if("object"===f)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return a}function P(e,r,t){if(null==e)return e;var n=[],o=0;return A(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function x(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},C={transition:null},q={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:C,ReactCurrentOwner:N};r.Children={map:P,forEach:function(e,r,t){P(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return P(e,(function(){r++})),r},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!j(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=g,r.Fragment=o,r.Profiler=u,r.PureComponent=m,r.StrictMode=i,r.Suspense=s,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=b({},e.props),i=e.key,u=e.ref,f=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,f=N.current),void 0!==r.key&&(i=""+r.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in r)k.call(r,c)&&!S.hasOwnProperty(c)&&(o[c]=void 0===r[c]&&void 0!==a?a[c]:r[c])}var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){a=Array(c);for(var s=0;s<c;s++)a[s]=arguments[s+2];o.children=a}return{$$typeof:t,type:e.type,key:i,ref:u,props:o,_owner:f}},r.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},r.createElement=_,r.createFactory=function(e){var r=_.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:c,render:e}},r.isValidElement=j,r.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:x}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=C.transition;C.transition={};try{e()}finally{C.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return O.current.useCallback(e,r)},r.useContext=function(e){return O.current.useContext(e)},r.useDebugValue=function(){},
r.useDeferredValue=function(e){return O.current.useDeferredValue(e)},r.useEffect=function(e,r){return O.current.useEffect(e,r)},r.useId=function(){return O.current.useId()},r.useImperativeHandle=function(e,r,t){return O.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return O.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return O.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return O.current.useMemo(e,r)},r.useReducer=function(e,r,t){return O.current.useReducer(e,r,t)},r.useRef=function(e){return O.current.useRef(e)},r.useState=function(e){return O.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return O.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return O.current.useTransition()},r.version="18.2.0"},389137:function(e,r,t){var n;e=t.nmd(e);var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},i=function(e){return"object"==typeof e&&null!==e};function u(e){return"number"==typeof e&&isFinite(e)}function f(e){return null!=e&&(e.constructor===Function||"[object Function]"===Object.prototype.toString.call(e))}function a(e,r){e.prototype=Object.create(r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}"undefined"!=typeof window?(n=window.TradingView=window.TradingView||{},window.isNumber=u,window.isFunction=f,window.inherit=a,window.isArray=o):n=this.TradingView=this.TradingView||{},n.isNaN=function(e){return!(e<=0||e>0)},n.isAbsent=function(e){return null==e},n.isExistent=function(e){return null!=e},Number.isNaN=Number.isNaN||function(e){return e!=e},n.isSameType=function(e,r){return Number.isNaN(e)||Number.isNaN(r)?Number.isNaN(e)===Number.isNaN(r):{}.toString.call(e)==={}.toString.call(r)},n.isInteger=function(e){return"number"==typeof e&&e%1==0},n.isString=function(e){return null!=e&&e.constructor===String},n.isInherited=function(e,r){if(null==e||null==e.prototype)throw new TypeError("isInherited: child should be a constructor function");if(null==r||null==r.prototype)throw new TypeError("isInherited: parent should be a constructor function");return e.prototype instanceof r||e.prototype===r.prototype},n.clone=function(e){if(!e||"object"!=typeof e)return e;var r,t,o;for(t in r="function"==typeof e.pop?[]:{},e)e.hasOwnProperty(t)&&(o=e[t],r[t]=o&&"object"==typeof o?n.clone(o):o);return r},n.deepEquals=function(e,r,t){if(t||(t=""),e===r)return[!0,t];if(f(e)&&(e=void 0),f(r)&&(r=void 0),void 0===e&&void 0!==r)return[!1,t];if(void 0===r&&void 0!==e)return[!1,t];if(null===e&&null!==r)return[!1,t];if(null===r&&null!==e)return[!1,t];if("object"!=typeof e&&"object"!=typeof r)return[e===r,t];if(Array.isArray(e)&&Array.isArray(r)){var i=e.length;if(i!==r.length)return[!1,t];for(var u=0;u<i;u++){if(!(c=n.deepEquals(e[u],r[u],t+"["+u+"]"))[0])return c}return[!0,t]}if(o(e)||o(r))return[!1,t];if(Object.keys(e).length!==Object.keys(r).length)return[!1,t];for(var a in e){var c;if(!(c=n.deepEquals(e[a],r[a],t+"["+a+"]"))[0])return c}return[!0,t]},n.merge=function(e,r){
for(var t in r)null!==r[t]&&"object"==typeof r[t]&&e.hasOwnProperty(t)?n.merge(e[t],r[t]):e[t]=r[t];return e},e&&e.exports&&(e.exports={inherit:a,clone:n.clone,merge:n.merge,isNumber:u,isInteger:n.isInteger,isString:n.isString,isObject:i,isHashObject:function(e){return i(e)&&-1!==e.constructor.toString().indexOf("function Object")},isPromise:function(e){return i(e)&&e.then},isNaN:n.isNaN,isAbsent:n.isAbsent,isExistent:n.isExistent,isSameType:n.isSameType,isArray:o,isFunction:f,parseBool:n.parseBool,deepEquals:n.deepEquals,notNull:function(e){return null!==e},notUndefined:function(e){return void 0!==e},isEven:function(e){return e%2==0},declareClassAsPureInterface:function(e,r){for(var t in e.prototype)"function"==typeof e.prototype[t]&&e.prototype.hasOwnProperty(t)&&(e.prototype[t]=function(){throw new Error(r+"::"+t+" is an interface member declaration and must be overloaded in order to be called")})},requireFullInterfaceImplementation:function(e,r,t,n){for(var o in t.prototype)if("function"==typeof t.prototype[o]&&!e.prototype[o])throw new Error("Interface implementation assertion failed: "+r+" does not implement "+n+"::"+o+" function")}})},586463:(e,r,t)=>{"use strict";t.r(r);var n=t(389137);const o=/{(\w+)}/g,i=/{(\d+)}/g;String.prototype.format=function(...e){const r=(0,n.isObject)(e[0]),t=r?o:i,u=r?(r,t)=>{const n=e[0];return void 0!==n[t]?n[t]:r}:(r,t)=>{const n=parseInt(t,10),o=e[n];return void 0!==o?o:r};return this.replace(t,u)}}}]);
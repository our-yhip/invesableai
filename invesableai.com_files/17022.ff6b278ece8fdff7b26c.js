"use strict";(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[17022,55848,95063],{359663:(e,t,n)=>{n.d(t,{FeatureToggleWatchedValue:()=>i});var r=n(125226),o=n(401580);class i extends o.WatchedValue{constructor(e,t){super(function(e,t){return(0,r.isFeatureEnabled)(e)}(e)),(0,r.onFeaturesStateChanged)().subscribe(this,(t=>{e===t&&this.setValue((0,r.isFeatureEnabled)(e))}))}destroy(){(0,r.onFeaturesStateChanged)().unsubscribeAll(this),super.destroy()}}},526225:(e,t,n)=>{n.d(t,{syncUserConversionData:()=>d,syncUserData:()=>c});var r=n(201089),o=n(345848),i=n(120780),s=n(290576);const a=(0,r.getLogger)("User.Sync");function l(e){return`${e}_${window.user&&window.user.username||""}`}function u(e,t,n,r=!0){n!==window.user.pro_plan&&(window.user.pro_plan=n,window.user.is_pro=Boolean(n),(0,o.trackEvent)("Sync User Data","Different Pro Plan",l(e))),t!==window.is_authenticated&&(window.is_authenticated=t,r&&window.loginStateChange.fire(),(0,o.trackEvent)("Sync User Data","Different Auth",l(e)))}async function c(e){try{u(e,!0,(await(0,s.getProPlanDetailsForUser)()).pro_plan)}catch(t){!function(e,t){403===t.status&&["not_authenticated","login_required"].includes(t.type||"")?u(e,!1,void 0):a.logError(t.message)}(e,t)}}async function d(e,t=!0){var n;const r=new URL("/gopro/",window.location.origin),o=new URLSearchParams(window.location.search);o.has("_test_country")&&r.searchParams.append("_test_country",null!==(n=o.get("_test_country"))&&void 0!==n?n:"");const s=await(0,i.fetch)(r.href),a=await s.json();return u(e,a.is_authenticated,a.user.pro_plan,t),a}},59171:(e,t,n)=>{var r=n(244842),o=[{d:"E-Mini S&P 500",t:"ES"},{d:"E-Mini Nasdaq 100",t:"NQ"},{d:"Gold",t:"GC"},{d:"Silver",t:"SI"},{d:"Crude Oil WTI",t:"CL"},{d:"Natural Gas",t:"NG"},{d:"Australian Dollar",t:"6A"},{d:"Australian Dollar (Floor)",t:"AD"},{d:"Euro FX",t:"6E"},{d:"Euro FX (Floor)",t:"EC"},{d:"Corn",t:"ZC"},{d:"Corn (Floor)",t:"C"},{d:"Eurodollar",t:"GE"},{d:"Eurodollar (Floor)",t:"ED"}],i=function(){var e=[{pattern:"(",ctor:s},{pattern:")",ctor:a},{pattern:"+",ctor:u},{pattern:"-",ctor:c},{pattern:"*",ctor:d},{pattern:"/",ctor:f},{pattern:"^",ctor:h},{pattern:/\d+(?:\.\d*|(?![a-zA-Z0-9_!:.&]))|\.\d+/,ctor:g},{pattern:/\./,ctor:y},{pattern:r.enabled("charting_library_base")?/[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF^][a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!:.&]*|'.+?'/:/[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF][a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!|:.&]*|'.+?'/,ctor:m},{pattern:/'[^']*/,ctor:b},{pattern:/[\0-\x20\s]+/,ctor:i}];function t(e,t){var n=function(){};return n.prototype=t.prototype,e.prototype=new n,e}function n(){}function i(e){this.value=e}function s(){}function a(){}function l(){}function u(){}function c(){}function d(){}function f(){}function h(){}n.prototype.toString=function(){return this.value},t(i,n),t(s,n),s.prototype.value="(",t(a,n),a.prototype.value=")",t(l,n),t(u,l),u.prototype.value="+",u.prototype.precedence=0,u.prototype.commutative=!0,t(c,l),c.prototype.value="-",c.prototype.precedence=0,
c.prototype.commutative=!1,t(d,l),d.prototype.value="*",d.prototype.precedence=1,d.prototype.commutative=!0,t(f,l),f.prototype.value="/",f.prototype.precedence=1,f.prototype.commutative=!1,t(h,l),h.prototype.value="^",h.prototype.precedence=2,h.prototype.commutative=!1;var p=/^'?(?:([A-Z0-9_]+):)?(.*?)'?$/i,v=/[+\-/*]/;function m(e){this.value=e}function g(e){this.value=e}function _(e){this.value=e}function b(){m.apply(this,arguments)}function y(){g.apply(this,arguments)}t(m,n),m.prototype.toString=function(){if(this.hasOwnProperty("_ticker")){var e=v.test(this._ticker)?"'":"";return e+(this._exchange?this._exchange+":":"")+this._ticker+e}return this.value},m.prototype.parse=function(){var e=p.exec(this.value);e[1]&&(this._exchange=e[1]),this._ticker=e[2]},m.prototype.parseAsFutures=function(){this.hasOwnProperty("_ticker")||this.parse();for(var e=function(e){return o.some((function(t){return t.t===e}))},t=2;t>=1;--t){var n=this._ticker.slice(0,t);if(e(n)){this._root=n,this._contract=this._ticker.slice(t);break}}},m.prototype.exchange=function(e){if(this.hasOwnProperty("_ticker")||this.parse(),!(arguments.length>0))return this._exchange;null==e?delete this._exchange:this._exchange=e+""},m.prototype.ticker=function(e){if(this.hasOwnProperty("_ticker")||this.parse(),!(arguments.length>0))return this._ticker;null==e?delete this._ticker:this._ticker=e+"",delete this._root,delete this._contract},m.prototype.root=function(e){if(this.hasOwnProperty("_root")||this.parseAsFutures(),!(arguments.length>0))return this._root;null==e?delete this._root:(this._root=e+"",this._root&&(this._ticker=this._root+(this._contract||"")))},m.prototype.contract=function(e){if(this.hasOwnProperty("_contract")||this.parseAsFutures(),!(arguments.length>0))return this._root;null==e?delete this._contract:(this._contract=e+"",this._root&&(this._ticker=this._root+this._contract))},t(g,n),g.prototype.toString=function(){return this.hasOwnProperty("_normalizedValue")?this._normalizedValue:this.value},g.prototype.parse=function(){this._normalizedValue=this.value.replace(/^0+|\.0*$/g,"").replace(/(\.\d*?)0+$/,"$1").replace(/^(\.|$)/,"0$1")},_.prototype.toString=function(){return this.value},t(b,m),b.prototype.isIncomplete=!0,b.prototype.incompleteSuggest=function(){if("'"!==this.value)return String("'")},t(y,g),y.prototype.isIncomplete=!0;var A=new RegExp(e.map((function(e){return"("+("string"==typeof e.pattern?e.pattern.replace(/[\^$()[\]{}*+?|\\]/g,"\\$&"):e.pattern.source)+")"})).concat(".").join("|"),"g");function w(t,n){var r,o=[];e:for(;r=A.exec(t);){for(var s=e.length;s--;)if(r[s+1]){if(e[s].ctor){var a=new e[s].ctor(r[s+1]);a._offset=r.index,o.push(a)}continue e}var l=new _(r[0]);l._offset=r.index,o.push(l)}if(n&&n.recover){var u;for(s=o.length;s--;){var c=o[s];if(c instanceof g||c instanceof m){if(void 0!==u){var d=new m(""),f=o.splice(s,u-s+1,d);d.value=f.map((function(e){return e.value})).join("")}u=s}else c instanceof i||(u=void 0)}}return o}function S(e){for(var t=[],n=0;n<e.length;n++)e[n]instanceof i||t.push(e[n]);return t}function k(e){
e=S(e);for(var t,n=[],r=[],o=0;o<e.length;o++){var i=e[o];if(i instanceof l)r.length&&r[r.length-1].minPrecedence>i.precedence&&(r[r.length-1].minPrecedence=i.precedence);else if(i instanceof s)r.push(t={minPrecedence:1/0,openBraceIndex:o});else if(i instanceof a){var u=e[(t=r.pop()).openBraceIndex-1],c=e[o+1];c instanceof l&&!(c.precedence<=t.minPrecedence)||!(!(u instanceof l)||u.precedence<t.minPrecedence||u.precedence===t.minPrecedence&&u.commutative)||(n.unshift(t.openBraceIndex),n.push(o),r.length&&r[r.length-1].minPrecedence>t.minPrecedence&&(r[r.length-1].minPrecedence=t.minPrecedence))}}for(o=n.length;o--;)e.splice(n[o],1);return e}function E(e){if("string"!=typeof e)throw new TypeError("expression must be a string");return(e=w(e)).filter((function(e){return e instanceof m})).map((function(e){return e.exchange()})).filter((function(e){return e}))}function T(e){return 1!==(e=E(e)).length?null:e[0]}function I(e,t){return(e=E(e)).some((function(e){return t.includes((e||"").toUpperCase())}))}function F(e){return e.join("")}return{tokenize:w,validate:function(e){if(r.enabled("charting_library_base"))return{currentState:"var"};for(var t="init",n="var",o=t,u={warnings:[],errors:[],isEmpty:!0},c=[],d=0;d<e.length;d++){if(!((h=e[d])instanceof i)){if(delete u.isEmpty,h.isIncomplete){var f={status:"incomplete",reason:"incomplete_token",offset:h._offset,token:h};if(h.incompleteSuggest&&(f.recover={append:h.incompleteSuggest()}),u.warnings.push(f),d!==e.length-1){f.status="error";continue}}if(h instanceof m||h instanceof g){if(o===n){u.errors.push({status:"error",reason:"unexpected_token",offset:h._offset,token:h});continue}o=n}else if(h instanceof l){if(o!==n){u.errors.push({status:"error",reason:"unexpected_token",offset:h._offset,token:h});continue}o="operator"}else if(h instanceof s){if(o===n){u.errors.push({status:"error",reason:"unexpected_token",offset:h._offset,token:h});continue}c.push(h),o=t}else if(h instanceof a){if(o!==n){u.errors.push({status:"error",reason:"unexpected_token",offset:h._offset,token:h});continue}c.pop()||u.errors.push({status:"error",reason:"unbalanced_brace",offset:h._offset,token:h,recover:{prepend:new s}}),o=n}else h instanceof _&&u.errors.push({status:"error",reason:"unparsed_entity",offset:h._offset,token:h})}}for(u.braceBalance=c.length,o!==n&&u.warnings.push({status:"incomplete"});c.length;){var h;f={status:"incomplete",reason:"unbalanced_brace",offset:(h=c.pop())._offset,token:h};o===n&&(f.recover={append:new a}),u.warnings.push(f)}return u.currentState=o,0===u.warnings.length&&delete u.warnings,0===u.errors.length&&delete u.errors,u},factorOutBraces:k,normalizeTokens:function(e){for(var t=0;t<e.length;t++)e[t].parse&&e[t].parse();return e},flip:function(e){var t=function(e){for(var t,n=0,r=1,o=2,u=3,c=n,d=0,h=0;h<e.length;h++){var p=e[h];if(!(p instanceof i))switch(c){case n:if(!(p instanceof g&&1==+p.value))return!1;c=r;break;case r:if(!(c===r&&p instanceof f))return!1;c=o,t=h+1;break;case o:if(p instanceof s)c=u,d=1;else if(p instanceof l)return!1;break;case u:
p instanceof s?d++:p instanceof a&&--d<=0&&(c=o)}}return e.slice(t)}(e);return k(t||[new g("1"),new f,new s].concat(e).concat(new a))},hasBatsSymbols:function(e){return I(e,["BATS"])},hasEodSymbols:function(e){return(e=T(e))&&-1!==e.toUpperCase().indexOf("_EOD")},hasChxjpySymbols:function(e){return I(e,["CHXJPY"])},hasFreeDelaySymbols:function(e){return I(e,pro.getProductsByType(pro.PRODUCT_TYPES.exchange).map((function(e){return e.exchange.toUpperCase()+"_DLY"})))},getExchange:T,getExchanges:E,isExchange:function(e,t){return!!(e=T(e))&&e.substring(0,t.length)===t},SymbolToken:m,IncompleteSymbolToken:b,NumberToken:g,BinaryOperatorToken:l,OpenBraceToken:s,CloseBraceToken:a,ticker:function(e){return new m(e).ticker()},shortName:function(e){if("string"!=typeof e)throw new TypeError("expression must be a string");var t=k(S(w(e)));return t.forEach((function(e){e instanceof m&&e.exchange(null)})),F(t)},normalize:function(e){if("string"!=typeof e)throw new TypeError("expression must be a string");return F(k(S(w(e))))}}}();e.exports=i},394093:(e,t,n)=>{var r;n.d(t,{AlertEditorAbortReason:()=>r}),function(e){e.AlertIsInvalid="alert-is-invalid",e.AlertsMaintenance="alerts-maintenance",e.ChartModelNotFound="chart-model-not-found",e.IsAlreadyPresent="is-already-present",e.MainSeriesIsATR="main-series-is-atr",e.MainSeriesIsInReplay="main-series-is-in-replay",e.MainSeriesIsOffline="main-series-is-offline",e.SourceIsDangerous="source-is-dangerous",e.SymbolInfoTimeout="symbol-info-timeout",e.SymbolIsInvalid="symbol-is-invalid",e.SymbolCurrencyConverted="symbol-currency-converted",e.SymbolUnitConverted="symbol-unit-converted",e.SymbolCurrencyAndUnitConverted="symbol-currency-and-unit-converted",e.SymbolIsEconomics="symbol-is-economics",e.UnsupportedResolution="unsupported-resolution",e.ManualAbort="manual-abort",e.MisleadingPriceScale="misleading-price-scale"}(r||(r={}))},862297:(e,t,n)=>{n.d(t,{ensureResolvedSymbolInfo:()=>_,ensureSeriesIsNotOffline:()=>g,getAlertDialogType:()=>f,shouldAbortAlertEditor:()=>h,showAbortExplainingDialog:()=>v});var r=n(444372),o=n(779923),i=n(394093),s=n(444331),a=n(583912),l=n(537133),u=n(781310),c=n(552279);const d=(0,n(594949).getAlertTrackers)().maintenance;function f(e){return e.alert?e.type||"edit_alert":"create_alert"}function h(e){var t;if(d.value())return i.AlertEditorAbortReason.AlertsMaintenance;if(!e.alert&&!e.dataSourceHub)return i.AlertEditorAbortReason.ChartModelNotFound;if(!l.alertEditorInvocationHandler.isAllowedToInvoke(e))return i.AlertEditorAbortReason.IsAlreadyPresent;const n=null===(t=e.dataSourceHub)||void 0===t?void 0:t.mainSeries();if(n&&p(n))return i.AlertEditorAbortReason.MainSeriesIsOffline;if(n&&function(e){return 4===e.status()}(n))return i.AlertEditorAbortReason.SymbolIsInvalid;if(n&&n.isConvertedToOtherCurrency()&&n.isConvertedToOtherUnit())return i.AlertEditorAbortReason.SymbolCurrencyAndUnitConverted;if(n&&n.isConvertedToOtherCurrency())return i.AlertEditorAbortReason.SymbolCurrencyConverted
;if(n&&n.isConvertedToOtherUnit())return i.AlertEditorAbortReason.SymbolUnitConverted;const r=f(e);if("create_alert"===r&&n&&function(e){const t=e.stateForAlert().styleInputs;return"style"in t&&"ATR"===t.style}(n))return i.AlertEditorAbortReason.MainSeriesIsATR;if("create_alert"===r&&n&&function(e){return e.isInReplay()}(n))return i.AlertEditorAbortReason.MainSeriesIsInReplay;if("create_alert"===r&&n&&function(e){return(0,s.isEconomicSymbol)(e.symbolInfo())}(n))return i.AlertEditorAbortReason.SymbolIsEconomics;const o=n?n.interval():a.linking.interval.value();return"create_alert"!==r||(0,u.canPlaceAlertOnResolution)(o)?null:i.AlertEditorAbortReason.UnsupportedResolution}function p(e){return 0===e.status()}function v(e,t){if(m.has(e))return;m.add(e);const s=()=>m.delete(e),a=function(e){return new Map([[i.AlertEditorAbortReason.UnsupportedResolution,"alertsOnSeconds"]]).get(e)||null}(e);if(a)return void(0,c.reloginOrGoPro)({feature:a,actionAfterClose:s});const l=function(e,t){const o=r.t(null,void 0,n(900850)),s=r.t(null,void 0,n(488322)),a=r.t(null,void 0,n(468988));return new Map([[i.AlertEditorAbortReason.AlertsMaintenance,{title:r.t(null,void 0,n(243322)),text:r.t(null,void 0,n(98333)),buttonText:a}],[i.AlertEditorAbortReason.MainSeriesIsOffline,{title:o,text:("create_alert"===t?r.t(null,void 0,n(680644)):r.t(null,void 0,n(878717)))+". "+r.t(null,void 0,n(443167))+".",buttonText:a}],[i.AlertEditorAbortReason.SymbolIsInvalid,{title:o,text:"create_alert"===t?r.t(null,void 0,n(396472)):r.t(null,void 0,n(601230)),buttonText:a}],[i.AlertEditorAbortReason.SymbolCurrencyAndUnitConverted,{title:r.t(null,void 0,n(535871)),text:"create_alert"===t?r.t(null,void 0,n(39546)):r.t(null,void 0,n(588989)),buttonText:r.t(null,void 0,n(875139))}],[i.AlertEditorAbortReason.SymbolCurrencyConverted,{title:r.t(null,void 0,n(203470)),text:"create_alert"===t?r.t(null,void 0,n(499303)):r.t(null,void 0,n(8180)),buttonText:r.t(null,void 0,n(875139))}],[i.AlertEditorAbortReason.SymbolUnitConverted,{title:r.t(null,void 0,n(806212)),text:"create_alert"===t?r.t(null,void 0,n(433335)):r.t(null,void 0,n(615119)),buttonText:r.t(null,void 0,n(875139))}],[i.AlertEditorAbortReason.SymbolIsEconomics,{title:r.t(null,void 0,n(282076)),text:r.t(null,void 0,n(914407)),buttonText:r.t(null,void 0,n(875139))}],[i.AlertEditorAbortReason.MainSeriesIsATR,{title:r.t(null,void 0,n(347599)),text:r.t(null,void 0,n(862688)),buttonText:a}],[i.AlertEditorAbortReason.MainSeriesIsInReplay,{title:r.t(null,void 0,n(198447)),text:r.t(null,void 0,n(881565)),buttonText:r.t(null,void 0,n(875139))}]]).get(e)||{title:o,text:s,buttonText:a}}(e,t);(0,o.showWarning)({...l,onClose:s})}const m=new Set;function g(e){return new Promise((t=>{if(!p(e))return void t();const n=()=>{p(e)||(e.onStatusChanged().unsubscribe(null,n),t())};e.onStatusChanged().subscribe(null,n)}))}function _(e){return new Promise((t=>{if(e.symbolInfo())return void t();e.dataEvents().symbolResolved().subscribe(null,(()=>{e.symbolInfo()&&t()}),!0)}))}},429589:(e,t,n)=>{n.d(t,{invokeAlertEditor:()=>h,
invokeAlertEditorWithOnlineSeries:()=>v});var r=n(650151),o=n(862297),i=n(949307),s=n(394093),a=n(726778),l=n(201089),u=n(125226),c=n(537133),d=n(594949);const f=(0,l.getLogger)("Alerts.Price.InvokeAlertEditor");function h(e){(0,d.getAlertTrackers)().maintenance.syncOnUserAction();const t=(0,o.shouldAbortAlertEditor)(e);if(null!==t)return t!==s.AlertEditorAbortReason.IsAlreadyPresent&&(0,o.showAbortExplainingDialog)(t,(0,o.getAlertDialogType)(e)),f.logWarn(`Aborted: ${t}`),void(e.onAborted&&e.onAborted(t));const{unlockInvocation:a,abortSignal:l}=c.alertEditorInvocationHandler.lockInvocation(e);!(0,u.isFeatureEnabled)("alerts-editor-use-facade")||e.silent?Promise.all([Promise.all([n.e(68716),n.e(17447),n.e(99607),n.e(36999),n.e(44565),n.e(25977),n.e(11843),n.e(16549),n.e(68647),n.e(83433),n.e(42292),n.e(75692),n.e(73600),n.e(41414),n.e(45840),n.e(71),n.e(44031),n.e(79169),n.e(34665),n.e(47944),n.e(72359),n.e(86922),n.e(41454),n.e(60273)]).then(n.t.bind(n,612708,19)),(0,i.getPriceAlertsDispatcher)(),p(e,a,l)]).then((e=>{const[t,n,r]=e;new t.AlertEditor(n,r)}),a):Promise.all([Promise.all([n.e(51369),n.e(22666),n.e(62253),n.e(92108),n.e(5993),n.e(9817),n.e(4015),n.e(92191),n.e(53842),n.e(34465),n.e(69121),n.e(38669),n.e(5145),n.e(88194),n.e(89842),n.e(93502),n.e(72639),n.e(32109),n.e(36884),n.e(68992),n.e(87845),n.e(58755),n.e(13152),n.e(84281),n.e(48986),n.e(49205),n.e(6209),n.e(73954),n.e(89434),n.e(22486),n.e(18511),n.e(26053),n.e(90592),n.e(54474),n.e(47981),n.e(34545),n.e(75058),n.e(3436),n.e(99872),n.e(17301),n.e(52455),n.e(19512),n.e(64032),n.e(50690),n.e(56488),n.e(85841),n.e(68985),n.e(44111),n.e(57774),n.e(76291),n.e(77895)]).then(n.bind(n,470939)),p(e,a,l)]).then((([{invokeDialogAlertEditor:e},t])=>{e(t,(0,r.ensureNotNull)((0,d.getAlertSession)().user.value()))}),a)}function p(e,t,n){return(e.series?(0,a.hasUserAccessToDataSource)(e.series):Promise.resolve(!0)).then((r=>{const{onDestroy:o}=e,i={...e,abortSignal:n,onDestroy:()=>{t(),o&&o()}};return r||(delete i.series,delete i.value),i}))}function v(e){e.dataSourceHub?(0,o.ensureSeriesIsNotOffline)(e.dataSourceHub.mainSeries()).then((()=>{h(e)})):h(e)}},919892:(e,t,n)=>{function r(e){return"="+JSON.stringify(o(e))}function o(e){return Object.keys(e).sort().reduce(((t,n)=>("[object Object]"===Object.prototype.toString.call(e[n])?t[n]=o(e[n]):t[n]=e[n],t)),{})}function i(e){return Boolean(e.inputs)}function s(e){return i(e)||Boolean(e.replay)||e.session||e.adjustment||e["currency-id"]||e["unit-id"]?r(e):e.symbol}function a(e){return"="===e[0]}function l(e){if(!a(e))return{symbol:e};try{return JSON.parse(e.slice(1))}catch(t){return{symbol:e}}}function u(e){return"string"==typeof e?e:u(e.symbol)}n.d(t,{decodeExtendedSymbol:()=>l,encodeExtendedSymbolOrGetSimpleSymbolString:()=>s,isEncodedExtendedSymbol:()=>a,isStudySymbol:()=>i,unwrapSimpleSymbol:()=>u})},827523:(e,t,n)=>{function r(e,t){return`${e}@${t}`}function o(e){return e.replace(/(@[^-]+-[^-]+).*$/,"$1")}n.d(t,{extractStudyId:()=>o,studyIdString:()=>r})},537133:(e,t,n)=>{n.d(t,{
alertEditorInvocationHandler:()=>a});var r=n(650151),o=n(401580),i=n(862297);class s{constructor(){this._state=new o.WatchedValue(!1)}subscribe(e){this._state.subscribe(e)}unsubscribe(e){this._state.unsubscribe(e)}value(){return this._state.value()}abort(){this._state.setValue(!0)}}const a=new class{constructor(){this._dialogInvocations=new o.WatchedValue(new Map)}getDialogInvocations(){return this._dialogInvocations}isAllowedToInvoke(e){return e.silent||!this._dialogInvocations.value().has(l(e))}lockInvocation(e){if(e.silent)return{unlockInvocation:()=>{}};const t=l(e),n=new s,r=new Map(this._dialogInvocations.value());return r.set(t,n),this._dialogInvocations.setValue(r),{abortSignal:n,unlockInvocation:()=>{const e=new Map(this._dialogInvocations.value());e.delete(t),this._dialogInvocations.setValue(e)}}}};function l(e){return"create_alert"===(0,i.getAlertDialogType)(e)?-1:(0,r.ensureDefined)(e.alert).id}},695242:(e,t,n)=>{n.d(t,{canPlaceAlertOnResolution:()=>s});var r=n(223699),o=n(778016),i=n(833813);function s(e){return!r.Interval.isSeconds(e)||(0,o.enabled)(i.ProductFeatures.ALERTS_ON_SECONDS)}},694839:(e,t,n)=>{n.d(t,{getAlertConfig:()=>u});var r=n(895171),o=n(650151),i=n(125226),s=n(588948),a=(n(659863),n(244842));const l={from:3e4,to:18e5},u=(0,r.default)((()=>({priceAlertsFacadeClientUrl:c(),fetchTokenMaxRetriesCount:1,restRequestsMaxRetriesCount:1,permissionProxyEnabled:(0,i.isFeatureEnabled)("alerts-facade-use-permission-proxy"),autoUnsetMaintenanceTimeout:(0,i.isFeatureEnabled)("alerts-maintenance-auto-unset")?l:null})));function c(){return a.enabled("alerts")?(0,o.ensureDefined)((0,s.getFreshInitData)().priceAlertsFacadeClientUrl):""}},726778:(e,t,n)=>{function r(e){return i().then((t=>t.hasUserAccessToDataSource(e)))}function o(e){return i().then((t=>t.filterAccessibleDataSources(e)))}n.d(t,{filterAccessibleDataSources:()=>o,hasUserAccessToDataSource:()=>r});const i=()=>Promise.all([n.e(68716),n.e(17447),n.e(99607),n.e(24028),n.e(11843),n.e(16549),n.e(83433),n.e(42292),n.e(75692),n.e(15674),n.e(73600),n.e(41414),n.e(45840),n.e(71),n.e(76332),n.e(34665),n.e(83441)]).then(n.bind(n,827019))},594949:(e,t,n)=>{n.d(t,{getAlertSession:()=>r.getAlertSession,getAlertTrackers:()=>o.getAlertTrackers});var r=n(168642),o=n(546567)},168642:(e,t,n)=>{n.r(t),n.d(t,{getAlertSession:()=>F});var r=n(895171),o=(n(659863),n(401580)),i=n(125226),s=n(799402),a=n(707957),l=n(822122),u=n(201089);function c(e){const t=JSON.parse(atob(e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/")));return Date.now()+3e5>1e3*t.exp}const d=(0,u.getLogger)("Alerts.CacheToken");class f{constructor(){this.invalidated=new a.Delegate,this._fetchTokenPromise=null,this._timersDifference=Date.now()-performance.now(),window.loginStateChange.subscribe(null,(e=>{e||this.invalidated.fire()}))}get(e=!1){if(this._fetchTokenPromise)return this._fetchTokenPromise;const t=Date.now()-performance.now(),n=Math.abs(t-this._timersDifference);return this._fetchTokenPromise=this._tryGetFreshToken(e||n>3e4).then((e=>(this._fetchTokenPromise=null,
this._timersDifference=t,e))).catch((e=>{throw this._fetchTokenPromise=null,this._timersDifference=t,d.logError(e instanceof Error?e.message:String(e)),e})),this._fetchTokenPromise}reset(){d.logWarn("Token has been force reset"),this.get(!0)}async _tryGetFreshToken(e){if(!window.is_authenticated){const e=new Error("Fetching token is denied for anonymous user");throw d.logError(e.message),e}d.logNormal("Getting token");let t=await this._fetchToken(e);return!e&&c(t)&&(d.logWarn("Fetched token is expired, force reloading token"),t=await this._fetchToken(!0)),c(t),t!==this._previousToken&&(this._previousToken&&this.invalidated.fire(),this._previousToken=t),t}async _fetchToken(e){const t=await fetch(`/entitlements-token/?user_id=${window.user.id}&pro_plan=${window.user.pro_plan||l.ProPlans.Free}`,{cache:e?"reload":"default"}),n=await t.json();if("code"in n)throw new Error(`Failed to fetch token, status ${t.status}, code: ${n.code}, message: ${n.detail}`);if(!t.ok)throw new Error(`Failed to fetch token, status ${t.status}`);return this._logFetchedToken(n.token),n.token}_logFetchedToken(e){e!==this._previousToken?d.logNormal(`Fetched new token: ${e}`):d.logNormal(`Fetched cached token: ${e}`)}}const h=(0,i.isFeatureEnabled)("alerts-use-browser-cache-for-jwt")?0:1,p=(0,r.default)((()=>new(0===h?f:s.AuthToken)));var v=n(833813),m=n(778016),g=n(62802),_=n.n(g);function b(){var e;const t=(0,m.getConfig)(v.ProductFeatures.SERVER_SIDE_ALERTS);return null!==(e=null==t?void 0:t.overall_limit)&&void 0!==e?e:2e3}function y(){var e,t;const n=(0,m.getConfig)(v.ProductFeatures.SERVER_SIDE_ALERTS);return void 0!==(null==n?void 0:n.primitive_limit)&&void 0!==(null==n?void 0:n.complex_limit)?{type:1,total:null!==(e=null==n?void 0:n.limit)&&void 0!==e?e:0,primitive:n.primitive_limit,complex:n.complex_limit}:{type:0,total:null!==(t=null==n?void 0:n.limit)&&void 0!==t?t:0}}var A=n(694839);const w=(0,u.getLogger)("Alerts.Session.TokenInfo"),S=Date.now();async function k(e){const t=p();e&&t.reset();const n=await E(t),r=Date.now();return 0===h?{token:n,managerImplementation:0}:{token:n,managerImplementation:1,metadata:{moduleLoadingTimestamp:S,tokenGettingTimestamp:r,isTokenForceReset:Boolean(e),isTokenInitial:n===window.user.auth_token}}}async function E(e,t=0){const n=await e.get();return c(n)&&t<(0,A.getAlertConfig)().fetchTokenMaxRetriesCount?(w.logWarn("Received token is expired, retrying with a token refresh"),e.reset(),E(e,t+1)):n}function T(){return window.is_authenticated&&window.user.id?{id:window.user.id,username:window.user.username,settings:_(),hasActiveEmail:()=>Boolean(window.user.has_active_email),getSmsEmail:()=>window.user.sms_email,getFeatures:I,getTokenInfo:k}:null}function I(){return{overallLimit:b(),activeLimits:y(),alertsWithWebhook:(0,m.enabled)(v.ProductFeatures.ALERTS_WEBHOOK),alertsNoExpiration:(0,m.enabled)(v.ProductFeatures.ALERTS_NO_EXPIRATION),alertsOnSeconds:(0,m.enabled)(v.ProductFeatures.ALERTS_ON_SECONDS)}}const F=(0,r.default)((()=>{const e=new o.WatchedValue(T()),t=p()
;return window.loginStateChange.subscribe(null,(()=>{const n=T();n&&t.reset(),e.setValue(n)})),{user:e}}))},546567:(e,t,n)=>{n.r(t),n.d(t,{getAlertTrackers:()=>l});var r=n(895171),o=n(359663),i=(n(659863),n(694839)),s=n(401580);class a{constructor(e,t){this._unsetMaintenanceTimeoutId=null,this._onAliveMaintenanceChange=e=>{if(e)this._clearMaintenanceUnsetTimeout(),this._state.setValue(!0);else if(this._config.autoUnsetMaintenanceTimeout){const e=this._config.autoUnsetMaintenanceTimeout;this._unsetMaintenanceTimeoutId=setTimeout((()=>this._syncMaintenanceState()),(t=e.from,n=e.to,Math.floor(Math.random()*(n-t)+t)))}var t,n},this._maintenanceValue=e,this._config=t,this._state=new s.WatchedValue(this._maintenanceValue.value()),this._maintenanceValue.subscribe(this._onAliveMaintenanceChange)}destroy(){this._clearMaintenanceUnsetTimeout(),this._maintenanceValue.unsubscribe(this._onAliveMaintenanceChange)}value(){return this._state.value()}syncOnUserAction(){this._syncMaintenanceState()}subscribe(e){this._state.subscribe(e)}unsubscribe(e){this._state.unsubscribe(e)}_syncMaintenanceState(){this._clearMaintenanceUnsetTimeout(),this._state.setValue(this._maintenanceValue.value())}_clearMaintenanceUnsetTimeout(){this._unsetMaintenanceTimeoutId&&(clearTimeout(this._unsetMaintenanceTimeoutId),this._unsetMaintenanceTimeoutId=null)}}const l=(0,r.default)((()=>{const e=new o.FeatureToggleWatchedValue("alerts-maintenance",!1),t=(0,i.getAlertConfig)();return{maintenance:new a(e,t)}}))}}]);
(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[41076,27034],{994861:t=>{t.exports={}},989897:t=>{t.exports={}},604286:(t,e,s)=>{"use strict";s.d(e,{hotKeyDeserialize:()=>o});var i=s(461794);function o(t){return JSON.parse((0,i.clean)(t,!0))}},780792:(t,e,s)=>{"use strict";s.d(e,{AbstractIndicator:()=>l});var i=s(201089),o=s(541558),n=s(876332);s(673747);const a=(0,i.getLogger)("GUI.Blocks.AbstractIndicator");class l{constructor(t){this._classSuffix="",this._quoteSessionPrefix="abstract-indicator",this._shortMode=!1,this._showTooltip=!0,this._subscribed=!1,this._tooltipType="custom",this._lastTooltipText="",this._quoteSession=t.quoteSession}getValue(){return this._value}getTooltipText(){return this._labelMap[this._value]||""}getLabel(){return this._labelMap[this._value]||""}getElement(){return this._el}update(t,e){this._updateValue(t,e),this._render()}setTooltipEnabled(t=!1){this._showTooltip!==t&&(this._showTooltip=t,this._renderTooltip())}enableShortMode(){!0!==this._shortMode&&(this._shortMode=!0,this._render())}disableShortMode(){!1!==this._shortMode&&(this._shortMode=!1,this._render())}isShortModeEnabled(){return this._shortMode}start(){!this._subscribed&&this._symbolName&&(this._quoteSession||(this._quoteSession=(0,n.getQuoteSessionInstance)("simple")),this._quoteSession.subscribe(this._getQuoteSessionId(),this._symbolName,this.update.bind(this)),this._subscribed=!0)}stop(){this._subscribed&&this._quoteSession&&this._symbolName&&(this._quoteSession.unsubscribe(this._getQuoteSessionId(),this._symbolName),this._subscribed=!1)}_init(t){this._el=t.el?t.el:document.createElement("span"),this._el.innerHTML="",this._classMap=t.classMap,this._labelMap=t.labelMap,this._showTooltip=t.showTooltip,this._classSuffix=t.classSuffix,this._symbolName=t.symbol,t.tooltipType&&(this._tooltipType=t.tooltipType),this._quoteSessionGUID=(0,o.guid)(),!0===t.short&&this.enableShortMode(),t.data&&this._updateValue(t.data)}_clearClasses(){Object.values(this._classMap).map((t=>{this._el.classList.remove(`${t}`),this._el.classList.remove(`${t}${this._classSuffix}`)}))}_render(){this._renderClasses(),this._renderTooltip(),this._renderLabel()}_renderLabel(){this._el.textContent=this.getLabel()}_updateValue(t,e){const s=this._getValueFromData(t);(e||s!==this._value)&&(this._value=s)}_renderClasses(){const t=this._el.classList;t.add(this._componentClass,this._componentClass+this._classSuffix);const e=this._classMap[this._value];for(const s in this._classMap){const i=this._classMap[s];i&&(i===e?t.add(i,i+this._classSuffix):t.remove(i,i+this._classSuffix))}!e&&this._value&&a.logWarn(`no className for status ${this._value}`)}_renderTooltip(){const t=this._showTooltip?this.getTooltipText():"";t!==this._lastTooltipText&&(this._lastTooltipText=t,this._el.setAttribute("title",t),"custom"===this._tooltipType&&this._el.classList.toggle("apply-common-tooltip",this._showTooltip))}_getQuoteSessionId(){return`${this._quoteSessionPrefix}.${this._quoteSessionGUID}`}}},719240:(t,e,s)=>{"use strict";s.d(e,{DataModeIndicator:()=>r})
;var i=s(444372),o=(s(586463),s(994861),s(780792));const n={connecting:"tv-data-mode--connecting",delayed:"tv-data-mode--delayed",delayed_streaming:"tv-data-mode--delayed",endofday:"tv-data-mode--endofday",forbidden:"tv-data-mode--forbidden",realtime:"tv-data-mode--realtime",snapshot:"tv-data-mode--snapshot",loading:"tv-data-mode--loading",replay:"tv-data-mode--replay"};function a(){return{connecting:i.t(null,{context:"data_mode_connecting_letter"},s(52587)),delayed:i.t(null,{context:"data_mode_delayed_letter"},s(469219)),delayed_streaming:i.t(null,{context:"data_mode_delayed_streaming_letter"},s(426211)),endofday:i.t(null,{context:"data_mode_end_of_day_letter"},s(960582)),forbidden:i.t(null,{context:"data_mode_forbidden_letter"},s(957357)),realtime:i.t(null,{context:"data_mode_realtime_letter"},s(647310)),snapshot:i.t(null,{context:"data_mode_snapshot_letter"},s(87817)),loading:"",replay:i.t(null,{context:"data_mode_replay_letter"},s(214485))}}const l={streaming:"realtime"};class r extends o.AbstractIndicator{constructor(t){super(t),this._quoteSessionPrefix="data-mode-indicator",this._componentClass="tv-data-mode",this._init(t)}getLabel(){return!0===this._shortMode?this._shortLabelMap[this._value]||"":super.getLabel()}setMode(t,e){this.update({values:{update_mode:t,update_mode_seconds:e}})}hide(){this._el.classList.add("i-hidden")}show(){this._el.classList.remove("i-hidden")}getTooltipText(){let t="";const e=this.getValue();if(""===e)return t;switch(e){case"delayed":t=i.t(null,void 0,s(728332));break;case"delayed_streaming":t=i.t(null,void 0,s(887267));break;default:t=this._labelMap[e]||t}return["delayed","delayed_streaming"].includes(e)&&(t=t.format({number:String(Math.round(this._modeInterval/60))})),t}_init(t={}){const e=Object.assign({},{classMap:n,classSuffix:"",data:{values:{update_mode:"connecting"}},labelMap:{connecting:i.t(null,void 0,s(413859)),delayed:i.t(null,void 0,s(78211)),delayed_streaming:i.t(null,void 0,s(78211)),endofday:i.t(null,void 0,s(132023)),forbidden:i.t(null,void 0,s(113439)),realtime:i.t(null,void 0,s(906530)),snapshot:i.t(null,void 0,s(502927)),loading:"",replay:i.t(null,void 0,s(688506))},modeInterval:600,short:!1,shortLabelMap:a(),showTooltip:!0,tooltipType:"custom"},t);this._modeInterval=e.modeInterval||600,this._shortLabelMap=e.shortLabelMap||a(),super._init(e),this._render()}_getValueFromData(t){let e;return e=void 0!==t.values&&void 0!==t.values.update_mode?t.values.update_mode:this.getValue(),l[e]||e}_updateValue(t,e){void 0!==t.values&&void 0!==t.values.update_mode_seconds&&(this._modeInterval=t.values.update_mode_seconds),super._updateValue(t,e)}}},600303:(t,e,s)=>{"use strict";s.d(e,{MarketStatusIndicator:()=>a});var i=s(444372),o=(s(989897),s(780792));const n={invalid:"tv-market-status--invalid",market:"tv-market-status--market",out_of_session:"tv-market-status--out-of-session",post_market:"tv-market-status--post-market",pre_market:"tv-market-status--pre-market",loading:"tv-market-status--loading",holiday:"tv-market-status--holiday",replay:"tv-market-status--replay"}
;class a extends o.AbstractIndicator{constructor(t){super(t),this._quoteSessionPrefix="market-status-indicator",this._componentClass="tv-market-status",this._extraTitle="",this._init(t)}setStatus(t,e){const s={values:{current_session:t}};this.update(s,e)}getTooltipText(){let t=super.getTooltipText();return""===t||""!==this._extraTitle&&(t=`${t}, ${this._extraTitle}`),t}setExtraTitle(t){this._extraTitle=t}reset(){this._clearClasses(),this._labelEl.textContent="",this._extraTitle="",this._el.setAttribute("title",""),this._value=""}enableShortMode(t=!0){void 0!==this._labelEl&&this._labelEl.classList.add("i-hidden"),super.enableShortMode()}disableShortMode(){void 0!==this._labelEl&&this._labelEl.classList.remove("i-hidden"),super.disableShortMode()}_renderLabel(){this._labelEl.textContent=this.getLabel()}_getValueFromData(t){return void 0!==t.values&&void 0!==t.values.current_session?t.values.current_session:this.getValue()}_render(){this._renderLabelElement(),this._renderDotElement(),super._render()}_init(t){const e=Object.assign({},function(){const t={invalid:i.t(null,void 0,s(814177)),market:i.t(null,void 0,s(486533)),out_of_session:i.t(null,void 0,s(548979)),post_market:i.t(null,void 0,s(566812)),pre_market:i.t(null,void 0,s(845198)),loading:i.t(null,void 0,s(25911)),holiday:i.t(null,void 0,s(988958)),replay:""};return{classMap:n,classSuffix:"",data:{},extraTitle:"",labelMap:t,short:!1,showTooltip:!0,tooltipType:"custom"}}(),t);super._init(e),this.setExtraTitle(e.extraTitle),this._render()}_renderLabelElement(){void 0===this._labelEl&&(this._labelEl=document.createElement("span"),this._labelEl.classList.add(`${this._componentClass}__label`),this._labelEl.classList.add(`${this._componentClass}__label${this._classSuffix}`),this._el.appendChild(this._labelEl))}_renderDotElement(){void 0===this._dotEl&&(this._dotEl=document.createElement("span"),this._dotEl.classList.add(`${this._componentClass}__dot`),this._dotEl.classList.add(`${this._componentClass}__dot${this._classSuffix}`),this._el.appendChild(this._dotEl))}}},461909:(t,e,s)=>{"use strict";function i(t){if(void 0===t)return null;const e=t.match(/(delayed_streaming)_([\d]{1,4})/);return null===e?null:{mode:e[1],interval:parseInt(e[2])}}function o(t){const e=i(t.update_mode);return null===e||(t.update_mode=e.mode,t.update_mode_seconds=e.interval),t}s.r(e),s.d(e,{normalizeUpdateMode:()=>o,parseUpdateMode:()=>i})},594275:(t,e,s)=>{"use strict";s.d(e,{isMcxQuoteData:()=>o});var i=s(12670);function o(t){var e;return!!t&&((0,i.isMcxFlag)(t.symbolname)||"permission_denied"===t.status&&(0,i.isMcxFlag)(null===(e=t.values)||void 0===e?void 0:e.alternative))}},564907:(t,e,s)=>{"use strict";s.d(e,{isSfQuoteData:()=>o});var i=s(852490);function o(t){return!!t&&(!(void 0===t.symbolname||!(0,i.isSfFlag)(t.symbolname))||Boolean("permission_denied"===t.status&&t.values&&void 0!==t.values.alternative&&(0,i.isSfFlag)(t.values.alternative)))}},12670:(t,e,s)=>{"use strict";s.d(e,{isMcxFlag:()=>o});var i=s(416234);function o(t){return t===i.SymbolGroup.McxFlag}},852490:(t,e,s)=>{
"use strict";function i(t){return t.endsWith("_dly")}s.d(e,{isSfFlag:()=>i})},416234:(t,e,s)=>{"use strict";s.d(e,{SymbolGroup:()=>i});var i;s(586463),s(444372);!function(t){t.NseFlag="nse_free",t.McxFlag="mcx_free"}(i||(i={}))},497981:(t,e,s)=>{"use strict";s.d(e,{PriceColorer:()=>i});var i,o=s(81979),n=s(987088);!function(t){function e(t,e){return 0===t?e&&void 0!==e.neutral?e.neutral:o.color.black70:t>0?e&&void 0!==e.up?e.up:n.colorsPalette["color-success"]:e&&void 0!==e.down?e.down:n.colorsPalette["color-danger"]}t.formatSign=e,t.formatDiff=function(t,s){return e(s-t)},t.domDifference=function(t,e,s=0,i="",o=""){function n(t){const e=document.createElement("span");return e.innerHTML=t,e}const a=document.createElement("div");if(!s)return a.appendChild(n(t)),a;const l=t+"",r=e+"";let h=null;if(l.length===r.length){for(let t=0;t<l.length;t++)if(l.charAt(t)!==r.charAt(t)){h=t;break}}else h=Number("0");if(null===h)return a.appendChild(n(l)),a;const d=n(l.substring(0,h)),c=document.createElement("span");return c.className=s<0?i:o,c.appendChild(n(l.substring(h))),a.appendChild(d),a.appendChild(c),a}}(i||(i={}))},327034:(t,e,s)=>{"use strict";s.d(e,{QuoteTicker:()=>y});var i=s(329806),o=s(201089),n=s(389137),a=s(541346),l=s(497981),r=s(624444),h=s(943994),d=s(600303),c=s(719240),_=s(665570),u=s(876332),m=s(594275),p=s(564907);const g=(0,o.getLogger)("QuoteTicker"),f={addDescriptionTitle:!0,changeDirectionDownClass:"down",changeDirectionUpClass:"up",changeDirectionNeutralClass:"neutral",changeInBrackets:!1,changePercentInBrackets:!1,lastPriceTimeInBrackets:!0,rtcTimeInBrackets:!0,clientName:"quote-ticker",dontDyePrice:!1,fallingBg:null,growingBg:null,lastFallingClass:"falling",lastGrowingClass:"growing",quoteSession:null,signNegative:!0,signPositive:!1,customPriceFormatter:null,customTimeFormatter:null,sessionStatusClassSuffix:"--for-ticker",dataModeClassSuffix:"--for-ticker",showInvalidSymbolStatus:!1,indicatorsTooltipType:"custom",lastPriceLastCharSup:!1,lastPriceHighlightDiffOnly:!1,initedHook:void 0,setStateHook:void 0,permissionDeniedHook:void 0,noSuchSymbolHook:void 0},v=String.fromCharCode(8198),b=/[K,M,B]/;function y(t,e,s={}){this.enabled=!0,this._symbol=t,this._symbolOriginal=null,this._options=(0,i.deepExtend)({},f,s),!1!==this._options.signNegative&&!0!==this._options.signNegative&&delete this._options.signNegative,s.customPriceFormatter&&(this._customPriceFormatter=s.customPriceFormatter),s.customTimeFormatter&&(void 0!==s.customTimeFormatter.lastPrice||void 0!==s.customTimeFormatter.rtc?this._timeFormatter=s.customTimeFormatter:this._timeFormatter={lastPrice:s.customPriceFormatter,rtc:s.customPriceFormatter}),this._percentFormatter=new a.PercentageFormatter,this._defaultPriceFormatter=new r.PriceFormatter(100),this._priceFormatter=this._customPriceFormatter||this._defaultPriceFormatter,this._volumeFormatter=new h.VolumeFormatter(2),this._cache={},this._lastPrice=null,this._lastPriceFormatted="",this._elements={},this._textNodes={},this._changeVolumeLetter=this._getChangeVolumeLetterCallback(),
this._setElements(e),this._highlighters={},this._initHighlighters(),this._options.setStateHook&&this.setStateHook(this._options.setStateHook),this.quoteSession=this._options.quoteSession||(0,u.getQuoteSessionInstance)("simple"),this._quoteSessionEventHandler=this.onData.bind(this),this._connectTimeoutId=setTimeout(this.connect.bind(this),0)}function x(t){const e=t.search(b),s=e>=0?`${v}${t.slice(e)}`:"";return[e>0?t.substring(e,0):0===e?"":t,s]}function N(t,e,s,i,o){var n,a=null;function l(){if(n&&(clearTimeout(n),n=void 0),s||e)for(var a=0;a<t.length;a++)t[a].style.background="";if(!s||!e)for(a=0;a<t.length;a++)i&&t[a].classList.remove(i),o&&t[a].classList.remove(o)}return{show:function(r){var h=0;if(r!==a){if(null!==a&&null!==r&&(h=r-a),l(),n=setTimeout(l,750),0<h){if(e)for(var d=0;d<t.length;d++)t[d].style.background=e;else if(i)for(d=0;d<t.length;d++)t[d].classList.add(i)}else if(h<0)if(s)for(d=0;d<t.length;d++)t[d].style.background=s;else if(o)for(d=0;d<t.length;d++)t[d].classList.add(o);null!==r&&(a=r)}},hide:l}}y.prototype._setElements=function(t){this._container=t,this._elements.change=this._findElements(t,["js-symbol-change","symbol-change"]),this._elements.changeDirection=this._findElements(t,["js-symbol-change-direction","symbol-change-direction"]),this._elements.extHrsChangeDirection=this._findElements(t,["js-symbol-ext-hrs-change-direction"]),this._elements.changePercent=this._findElements(t,["js-symbol-change-pt","symbol-change-pt"]),this._elements.description=this._findElements(t,["js-symbol-description-name","symbol-description-name"]),this._elements.extHrsChange=this._findElements(t,"js-symbol-ext-hrs-change"),this._elements.extHrsChangePercent=this._findElements(t,"js-symbol-ext-hrs-change-pt"),this._elements.extHrsClose=this._findElements(t,"js-symbol-ext-hrs-close"),this._elements.industry=this._findElements(t,["js-symbol-industry","symbol-industry"]),this._elements.last=this._findElements(t,["js-symbol-last","symbol-last"]),this._elements.sector=this._findElements(t,["js-symbol-sector","symbol-sector"]),this._elements.sessionStatus=this._findElements(t,"js-symbol-session-status"),this._elements.shortName=this._findElements(t,["js-symbol-short-name","symbol-short-name"]),this._elements.updateMode=this._findElements(t,"js-data-mode"),this._elements.updateMode.forEach((t=>t.classList.add("i-hidden"))),this._textNodes.change=this._getOrCreateTextNodes(this._elements.change),this._textNodes.changePercent=this._getOrCreateTextNodes(this._elements.changePercent),this._textNodes.extHrsChange=this._getOrCreateTextNodes(this._elements.extHrsChange),this._textNodes.extHrsChangePercent=this._getOrCreateTextNodes(this._elements.extHrsChangePercent),this._textNodes.extHrsClose=this._getOrCreateTextNodes(this._elements.extHrsClose),this._textNodes.last=this._getOrCreateTextNodes(this._elements.last),this._textNodes.open=this._findTextNodes(t,"js-symbol-open"),this._textNodes.eps=this._findTextNodes(t,"js-symbol-eps"),this._textNodes.marketCap=this._findTextNodes(t,"js-symbol-market-cap"),
this._textNodes.prevClose=this._findTextNodes(t,"js-symbol-prev-close"),this._textNodes.dividends=this._findTextNodes(t,"js-symbol-dividends"),this._textNodes.priceEarnings=this._findTextNodes(t,"js-symbol-pe"),this._textNodes.volume=this._findTextNodes(t,"js-symbol-volume"),this._textNodes.high=this._findTextNodes(t,"js-symbol-high"),this._textNodes.low=this._findTextNodes(t,"js-symbol-low"),this._textNodes.currency=this._findTextNodes(t,"js-symbol-currency"),this._textNodes.lastPriceTime=this._findTextNodes(t,"js-symbol-lp-time"),this._textNodes.rtcTime=this._findTextNodes(t,"js-symbol-rtc-time"),this._elements.lastHighlight=this._options.lastPriceHighlightDiffOnly?this._elements.last.map((t=>this._appendAndGetNewElement(t,"span"))):this._elements.last,this._textNodes.lastHighlight=this._getOrCreateTextNodes(this._elements.lastHighlight),this._elements.lastSup=this._options.lastPriceLastCharSup?this._elements.lastHighlight.map((t=>this._appendAndGetNewElement(t,"sup"))):[],this._textNodes.lastSup=this._getOrCreateTextNodes(this._elements.lastSup)},y.prototype._findElements=function(t,e){var s=(0,n.isArray)(e)?e:[e];return Array.prototype.concat.apply([],s.map((e=>Array.prototype.slice.call(t.getElementsByClassName(e)))))},y.prototype._findTextNodes=function(t,e){return this._getOrCreateTextNodes(this._findElements(t,e))},y.prototype._getOrCreateTextNodes=function(t){return t.map((t=>{var e=this._getFirstTextNode(t);return e||(e=t.ownerDocument.createTextNode(""),t.appendChild(e)),e}))},y.prototype._appendAndGetNewElement=function(t,e){const s=document.createElement(e);return t.appendChild(s),s},y.prototype._getFirstTextNode=function(t){for(var e=t.childNodes,s=e.length-1;s>=0;s--)if(3===e.item(s).nodeType)return e.item(s);return null},y.prototype.connect=function(t){this._subscribed||(this._subscribedSymbol=t||this._symbol,this.quoteSession.subscribe(this._options.clientName,this._subscribedSymbol,this._quoteSessionEventHandler),this._subscribed=!0)},y.prototype.disconnect=function(){clearTimeout(this._connectTimeoutId),this._subscribed&&(this.quoteSession.unsubscribe(this._options.clientName,this._subscribedSymbol,this._quoteSessionEventHandler),this._subscribed=!1)},y.prototype.onData=function(t,e){this.enabled&&("ok"===t.status?this.successData(t,e):"permission_denied"===t.status?this.onPermissionDenied(t):"error"===t.status&&this.errorData(t))},y.prototype.successData=function(t,e){t.values&&this.setState(t.values,t,e)},y.prototype.onPermissionDenied=function(t){(0,p.isSfQuoteData)(t)||(0,m.isMcxQuoteData)(t)?this._options.permissionDeniedHook?this._options.permissionDeniedHook(t,this._symbolOriginal||this._symbol):this.errorData(t):this.downgradeData(t)},y.prototype.errorData=function(t){this._options.showInvalidSymbolStatus&&(this.setShortName(this._symbol),this._elements.sessionStatus.map((t=>new d.MarketStatusIndicator({classSuffix:this._options.sessionStatusClassSuffix,el:t,data:{values:{current_session:"invalid"}},tooltipType:this._options.indicatorsTooltipType})))),
this._options.noSuchSymbolHook?(this._symbolOriginal&&this.setShortName(this._symbolOriginal),this._options.noSuchSymbolHook.call(this,t,this._symbolOriginal||this._symbol)):g.logWarn("No data for: "+this._symbol)},y.prototype.downgradeData=function(t){{const e=t&&t.values&&t.values.alternative,s=this._symbol===e;if(!(e&&-1!==e.indexOf(":"))||s)return void this.errorData(t);this._symbolOriginal=this._symbol,this._symbol=e,this._subscribed=!1,this.connect()}},y.prototype.setState=function(t,e,s){const i=s.values;this._isVolumeFormat="volume"===t.format,null==i.pricescale&&null==i.minmov&&null==i.fractional&&null==i.minmove2||(this._priceFormatter=this._customPriceFormatter||this._isVolumeFormat&&this._volumeFormatter||new r.PriceFormatter(t.pricescale||100,t.minmov||1,t.fractional,t.minmove2));const o=this._options,n=this._percentFormatter,a=this._priceFormatter,l=this._defaultPriceFormatter,u=this._volumeFormatter;i.timezone&&this._timeFormatter&&(this._timeFormatter.lastPrice&&this._timeFormatter.lastPrice.setTimezone(i.timezone),this._timeFormatter.rtc&&this._timeFormatter.rtc.setTimezone(i.timezone));const m=(t,e=!0)=>e?`(${t})`:t,p=void 0!==o.signPositiveChange?o.signPositiveChange:o.signPositive,f=t=>{const e=a.format(t,p,void 0,o.signNegative);return m(e,o.changeInBrackets)},v=t=>{const e=n.format(t,p,void 0,o.signNegative);return m(e,o.changePercentInBrackets)},b=a.format.bind(a),y=l.format.bind(l),x=u.format.bind(u),N=t=>null==t?h.PLACE_HOLDER:y(t);o.disableChange||(this._setNodesValue(this._textNodes.change,i.change,f),this._setNodesValue(this._textNodes.changePercent,i.change_percent,v),null!=i.change&&(o.dontDyePrice||this._setChangeFontColor([].concat(this._elements.change,this._elements.changePercent),i.change,o.changeUpFontColor,o.changeDownFontColor,o.changeNeutralFontColor),this._setChangeDirection(this._elements.changeDirection,i.change)),this._setNodesValue(this._textNodes.extHrsChange,i.rch,f),this._setNodesValue(this._textNodes.extHrsChangePercent,i.rchp,v),null!=i.rch&&(o.dontDyePrice||this._setChangeFontColor([].concat(this._elements.extHrsChange,this._elements.extHrsChangePercent),i.rch,o.changeUpFontColor,o.changeDownFontColor,o.changeNeutralFontColor),this._setChangeDirection(this._elements.extHrsChangeDirection,i.rch))),this._setNodesValue(this._textNodes.prevClose,i.prev_close_price,b),this._setNodesValue(this._textNodes.dividends,t.dividends_yield,(t=>null==t?h.PLACE_HOLDER:n.format(t,o.signPositive,void 0,o.signNegative)),!0);let S=(0,_.getTranslatedSymbolDescription)(i);if(S&&(S=this._prepareSymbolDescription(S),this._setTextsContent(this._elements.description,S),this._options.addDescriptionTitle))for(var C=0;C<this._elements.description.length;C++)this._elements.description[C].setAttribute("title",S);if((null!=i.short_name||null!=i.exchange)&&t.short_name){var T=t.short_name;"QUANDL"===t.exchange&&void 0!==t.short_name.split("/")[1]&&(T=t.short_name.split("/")[1]+", "+t.short_name.split("/")[0]),this.setShortName(T)}this._setLastValue(i.last_price,b),
this._setNodesValue(this._textNodes.extHrsClose,i.rtc,b),i.rtc&&this._highlighters.extHrsClose.show(i.rtc),i.industry&&this._setTextsContent(this._elements.industry,t.industry,(t=>t)),i.sector&&this._setTextsContent(this._elements.sector,t.sector),this._elements.sessionStatus&&i.current_session&&(this._sessionStatusInstances?this._sessionStatusInstances.forEach((t=>t.setStatus(i.current_session))):this._sessionStatusInstances=this._elements.sessionStatus.map((e=>new d.MarketStatusIndicator({classSuffix:this._options.sessionStatusClassSuffix,el:e,short:!0,data:{values:i},quoteSession:this.quoteSession,symbol:t.original_name,manualUpdate:!0,tooltipType:this._options.indicatorsTooltipType})))),this._setNodesValue(this._textNodes.open,i.open_price,b),this._setNodesValue(this._textNodes.high,i.high_price,b),this._setNodesValue(this._textNodes.low,i.low_price,b),this._setNodesValue(this._textNodes.eps,t.earnings_per_share_basic_ttm,N,!0),this._setNodesValue(this._textNodes.priceEarnings,t.price_earnings_ttm,N,!0),this._setNodesValue(this._textNodes.marketCap,t.market_cap_basic,x,!0),this._setNodesValue(this._textNodes.volume,t.volume,x,!0);const k=i.currency_code||i.value_unit_id;if(k&&this._setNodesValue(this._textNodes.currency,"PCT"===k?"%":k,null,!0),(i.lp_time||i.timezone&&t.lp_time)&&this._textNodes.lastPriceTime.length&&(this._timeFormatter&&this._timeFormatter.lastPrice?this._setNodesValue(this._textNodes.lastPriceTime,m(this._timeFormatter.lastPrice.format(t.lp_time),this._options.lastPriceTimeInBrackets)):g.logError("last price time field requested with no formatter provided")),(i.rtc_time||i.timezone&&t.rtc_time)&&this._textNodes.rtcTime.length&&(this._timeFormatter&&this._timeFormatter.rtc?this._setNodesValue(this._textNodes.rtcTime,m(this._timeFormatter.rtc.format(t.rtc_time),this._options.rtcTimeInBrackets)):g.logError("rtc time field requested with no formatter provided")),null!=i.last_price)for(C=0;C<this._elements.updateMode.length;C++)this._elements.updateMode[C].classList.remove("i-hidden");this._elements.updateMode&&(i.update_mode||i.update_mode_seconds)&&(this._updateModeInstances?this._updateModeInstances.forEach((e=>e.update({values:t}))):this._updateModeInstances=this._elements.updateMode.map((e=>new c.DataModeIndicator({classSuffix:this._options.dataModeClassSuffix,el:e,data:{values:t},modeInterval:t.update_mode_seconds,short:!0,tooltipType:this._options.indicatorsTooltipType})))),this._setStateHook&&this._setStateHook(e.values,s.values,e.complete),this._lastPrice?this._highlighters.last.show(t.last_price):null===this._lastPrice&&(this._container.classList.add("quote-ticker-inited"),"function"==typeof this._options.initedHook&&this._options.initedHook("last_price"in t)),this._lastPrice=t.last_price},y.prototype._setNodesValue=function(t,e,s,i){if(null!=e||i)for(var o="function"==typeof s?s(e):e,n=0;n<t.length;n++)t[n].nodeValue=o},y.prototype._setTextsContent=function(t,e,s){if(t&&t.length&&e)for(var i="function"==typeof s?s(e):e,o=0;o<t.length;o++)t[o].textContent=i},
y.prototype._setLastValue=function(t,e){if(null==t)return;const s="function"==typeof e?e(t):String(t);if(s===this._lastPriceFormatted)return;const[i,o,n]=this._options.lastPriceHighlightDiffOnly?this._getLastValueStringDiff(this._lastPriceFormatted,s):["",s,""],a=i,[l,r]=this._options.lastPriceLastCharSup?[o.slice(0,-1),o.slice(-1)]:[o,""];this._options.lastPriceHighlightDiffOnly&&(this._isVolumeFormat&&this._changeVolumeLetter.call(this,n),this._setNodesValue(this._textNodes.last,a)),this._setNodesValue(this._textNodes.lastHighlight,l),this._setNodesValue(this._textNodes.lastSup,r),this._lastPriceFormatted=s},y.prototype._getChangeVolumeLetterCallback=function(){let t;return function(e){e!==t&&(t=e,this._elements.last.forEach((e=>{3!==e.childNodes.length?e.appendChild(document.createTextNode(t)):e.childNodes[2].nodeValue=t})))}},y.prototype._getLastValueStringDiff=function(t,e){if(t===e){const[t,s]=x(e);return[t,"",s]}let s=0;for(;t[s]===e[s];)s++;const[i,o]=x(e.slice(s));return[e.slice(0,s),i,o]},y.prototype._setChangeFontColor=function(t,e,s,i,o){for(var n=l.PriceColorer.formatSign(e,{up:s,down:i,neutral:o}),a=0;a<t.length;a++)t[a].style.color=n},y.prototype._setChangeDirection=function(t,e){for(var s=0;s<t.length;s++){var i=t[s].classList;i.toggle(this._options.changeDirectionUpClass,e>0),i.toggle(this._options.changeDirectionDownClass,e<0),i.toggle(this._options.changeDirectionNeutralClass,0===e)}},y.prototype.setShortName=function(t=""){this._setTextsContent(this._elements.shortName,t)},y.prototype._prepareSymbolDescription=function(t){var e=this._getCache("symbol-description:"+t);return e||(e=t,this._setCache("symbol-description:"+t,e),e)},y.prototype._initHighlighters=function(){this._highlighters.last=new N(this._elements.lastHighlight,this._options.growingBg,this._options.fallingBg,this._options.lastGrowingClass,this._options.lastFallingClass),this._highlighters.extHrsClose=new N(this._elements.extHrsClose,this._options.growingBg,this._options.fallingBg,this._options.lastGrowingClass,this._options.lastFallingClass)},y.prototype.disable=function(){this.enabled=!1,this.disconnect()},y.prototype.enable=function(){this.enabled=!0,this.connect()},y.prototype.setStateHook=function(t){null===t&&this._setStateHook?delete this._setStateHook:"function"==typeof t&&(this._setStateHook=t)},y.prototype._setCache=function(t,e){null==e?delete this._cache[t]:this._cache[t]=e},y.prototype._getCache=function(t){return this._cache&&this._cache[t]}},337779:(t,e,s)=>{"use strict";function i(t){return t.reduce((function(t,e,s){return~t.indexOf(e)||t.push(e),t}),[])}s.r(e),s.d(e,{uniq:()=>i})}}]);
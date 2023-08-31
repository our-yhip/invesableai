"use strict";(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[3229],{778785:(t,e,s)=>{s.d(e,{mobiletouch:()=>o,setClasses:()=>a});var i=s(167175);const o=i.mobiletouch;i.touch;function a(){document.documentElement.classList.add(i.touch?"feature-touch":"feature-no-touch",i.mobiletouch?"feature-mobiletouch":"feature-no-mobiletouch")}},854734:(t,e,s)=>{s(318293);var i=s(650151),o=s(12481),a=(s(730128),s(192780)),l=s(901107),n=s(185515),r=s(242907),h=s(410899),d=s(596080),g=s(798218),c=s(453290),m=(s(809890),s(29481),s(589679),s(497754)),b=s.n(m),w=(s(823127),s(213398),s(987088)),p=s(724377),u=s(745269),C=s(17966),_=s(607546),v=s(647757),y=s(405128),f=s(246733),k=s(503344),L=s(208817),S=s(541558),T=s(668616),F=s(327034),j=s(600303),M=s(719240),P=s(401580),$=s(606311),D=s(62802),N=s(201089),W=s(960116),B=s(894065),E=s(39654),q=(s(521395),s(383906),s(823127)),U=s(213398);const x=(0,N.getLogger)("WidgetWatchlist"),A=["symbolActiveColor","symbolShortNameColor","symbolDescriptionColor","symbolSeparatorColor","tabActiveColor","tabInactiveColor","tabSliderColor","changeUpColor","changeDownColor","changeNeutralColor","lastColor","lastGrowingFlashColor","lastFallingFlashColor"],H=["plotLineColor","plotLineColorGrowing","plotLineColorFalling","gridLineColor","scaleFontColor","belowLineFillColorGrowing","belowLineFillColorFalling","belowLineFillColorGrowingBottom","belowLineFillColorFallingBottom","lastPriceLineColor","lastPriceLineColorGrowing","lastPriceLineColorFalling"];class R{constructor(t,e){if(this._symbols=[],this._chart=null,this._symbol=null,this._started=!1,this._hasDataPromise=null,t&&t.length||(x.logError("`$el` is required"),(0,i.assert)(Boolean(t&&t.length),"`$el` is required")),this.$el=t,this.$chart=t.find(".js-chart").eq(0),this.$symbolsWrapper=t.find(".js-symbols-wrapper").eq(0),this.hasChart=!!this.$chart.length,this.settings=this.transferSettings(e),this.showDataMode=!(!1===this.settings.showDataMode),this.showMarketStatus=!(!1===this.settings.showMarketStatus),this.chartColorMap=this.settings.chartColorMap,this.widgetColorClassMap=this.settings.widgetColorClassMap,"hotlists"===this.settings.widgetName||this.settings.isEmbedWidget){this._symbols=this.$el.data("symbols");this.$el.find(".js-symbols-wrapper").find(".js-symbols-body").append(this._renderPage())}this.settings.isEmbedWidget&&this.adjustToAvailableSizes(),this.start()}transferSettings(t){const e=t.utmInfo?q.param(t.utmInfo):void 0;let s;if(t.largeChartUrl){s=t.largeChartUrl;s.match(/^https?:\/\//)||(s="http://"+s)}return{chartColorMap:Object.assign({},this.defaultChartColors,t.chartColorMap),customer:t.customer,dateRange:t.dateRange,dateRangeOptions:t.dateRangeOptions,disableLastFallingFlash:Boolean(t.disableLastFallingFlash),disableLastGrowingFlash:Boolean(t.disableLastGrowingFlash),hideAbsoluteChange:Boolean(t.hideAbsoluteChange),indexNameBold:t.indexNameBold,indexNonClickable:t.indexNonClickable,isEmbedWidget:t.isEmbedWidget,largeChartUrl:s,noLinks:t.noLinks,onlyDescription:t.onlyDescription,
paintLastWithChangeColors:Boolean(t.paintLastWithChangeColors),showDataMode:t.showDataMode,showMarketStatus:t.showMarketStatus,showTitles:t.showTitles,tradingviewBaseUrl:t.tradingviewBaseUrl,utmStringified:e,valueBold:t.valueBold,valueTitleMarked:t.valueTitleMarked,widgetColorClassMap:Object.assign({},t.widgetColorClassMap),widgetName:t.widgetName,showSymbolLogo:t.showSymbolLogo,locale:t.locale,showFloatingTooltip:t.showFloatingTooltip,colorTheme:t.colorTheme}}get $symbols(){return this.$el.find(".js-quote-ticker")}set symbols(t){let e,s;const i=this._symbols.map((t=>t.s)),o=t.map((t=>t.s)),a=(t,s)=>q(s).data("symbol")===e;if(i&&i.toString()!==o.toString()){const l={},n=[],r=[];for(let t=0;t<i.length;t++){e=i[t];const r=o.indexOf(e),h=t,d=this.$symbols.filter(a);r!==h&&n.push(e),-1===r?(this._stopSymbolRow(d),this._symbol===e&&(s=o[h])):l[e]=d.detach()}const h=this.$el.find(".js-symbols-wrapper").find(".js-symbols-body");h.empty(),this.settings.showTitles&&h.append(this._renderTitle()),o.forEach((t=>{t in l?h.append(l[t]):(n.push(t),r.push(t),this._renderSymbol({s:t})),s&&s===t&&(this.symbol=s)})),this._symbols=t,this.$symbols.each(((t,e)=>{const s=q(e),i=s.data("symbol");-1!==n.indexOf(i)&&(s.addClass("tv-site-table__row--updated"),setTimeout((()=>s.removeClass("tv-site-table__row--updated")),2*u.dur)),-1!==r.indexOf(i)&&this._startSymbolRow(s)}))}}get defaultChartColors(){return{gridLineColor:(0,f.generateColor)(w.colorsPalette["color-widget-border"],100),scaleFontColor:(0,f.generateColor)(w.colorsPalette["color-text-secondary"]),plotLineColor:(0,f.generateColor)(w.colorsPalette["color-brand"]),plotLineColorGrowing:void 0,plotLineColorFalling:void 0,belowLineFillColorGrowing:(0,f.generateColor)(w.colorsPalette["color-tv-blue-500"],82),belowLineFillColorFalling:(0,f.generateColor)(w.colorsPalette["color-tv-blue-500"],82),belowLineFillColorGrowingBottom:(0,f.generateColor)(w.colorsPalette["color-tv-blue-500"],100),belowLineFillColorFallingBottom:(0,f.generateColor)(w.colorsPalette["color-tv-blue-500"],100),lastPriceLineColor:(0,f.generateColor)(w.colorsPalette["color-brand"],50),lastPriceLineColorGrowing:void 0,lastPriceLineColorFalling:void 0}}get pageTemplates(){return{page:"\n\t\t\t\t{{#showTitles}}\n\t\t\t\t\t{{>title}}\n\t\t\t\t{{/showTitles}}\n\t\t\t\t{{#symbols}}\n\t\t\t\t\t{{>symbol}}\n\t\t\t\t{{/symbols}}",symbol:`\n\t\t\t\t<div class="tv-widget-watch-list__row js-quote-ticker tv-site-table__row {{#showChart}} tv-site-table__row--interactive tv-widget-watch-list__row--interactive{{/showChart}}{{#updated}} tv-site-table__row--updated{{/updated}}" data-symbol="{{ s }}" data-description="{{ description }}">\n\t\t\t\t\t<div class="tv-site-table__column tv-widget-watch-list__main-column{{#symbolColumnClass}} {{symbolColumnClass}}{{/symbolColumnClass}}">\n\t\t\t\t\t\t<div class="tv-widget-watch-list__icon js-symbol-logo">\n\t\t\t\t\t\t\t${this.settings.showSymbolLogo&&(0,C.getCircleLogoAnyHtml)({logoUrls:[],size:"medium"
})}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="tv-widget-watch-list__name">\n\t\t\t\t\t\t\t<div class="tv-widget-watch-list__ticker">\n\t\t\t\t\t\t\t\t{{^noLinks}}\n\t\t\t\t\t\t\t\t\t<a\n\t\t\t\t\t\t\t\t\t\thref="{{^largeChartUrl}}{{ symbolUrl }}{{/largeChartUrl}}{{#largeChartUrl}}{{ largeChartUrl }}{{/largeChartUrl}}"\n\t\t\t\t\t\t\t\t\t\t{{#isEmbedWidget}}target="_blank"{{/isEmbedWidget}}\n\t\t\t\t\t\t\t\t{{/noLinks}}\n\t\t\t\t\t\t\t\t{{#noLinks}}\n\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t{{/noLinks}}\n\t\t\t\t\t\t\t\t\t\tdata-symbol="{{ s }}"\n\t\t\t\t\t\t\t\t\t\tclass="\n\t\t\t\t\t\t\t\t\t\t\ttv-widget-watch-list__short-name\n\t\t\t\t\t\t\t\t\t\t\tapply-overflow-tooltip\n\t\t\t\t\t\t\t\t\t\t\tjs-symbol-link\n\t\t\t\t\t\t\t\t\t\t\t{{#indexNameBold}}tv-widget-watch-list__short-name--bold{{/indexNameBold}}\n\t\t\t\t\t\t\t\t\t\t\t{{#noLinks}}tv-widget-watch-list__short-name--not-clickable{{/noLinks}}\n\t\t\t\t\t\t\t\t\t\t\t{{#onlyDescription}}\n\t\t\t\t\t\t\t\t\t\t\t\ttv-widget-watch-list__short-name--whole-height\n\t\t\t\t\t\t\t\t\t\t\t\t{{^description}}js-symbol-description-name{{/description}}\n\t\t\t\t\t\t\t\t\t\t\t\t{{#descriptionClass}}{{descriptionClass}}{{/descriptionClass}}\n\t\t\t\t\t\t\t\t\t\t\t{{/onlyDescription}}\n\t\t\t\t\t\t\t\t\t\t\t{{^onlyDescription}}\n\t\t\t\t\t\t\t\t\t\t\t\t{{#shortNameClass}}{{shortNameClass}}{{/shortNameClass}}\n\t\t\t\t\t\t\t\t\t\t\t{{/onlyDescription}}\n\t\t\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t{{^onlyDescription}}{{ shortName }}{{/onlyDescription}}\n\t\t\t\t\t\t\t\t\t\t{{#onlyDescription}}\n\t\t\t\t\t\t\t\t\t\t\t{{#description}}{{ description }}{{/description}}\n\t\t\t\t\t\t\t\t\t\t{{/onlyDescription}}\n\t\t\t\t\t\t\t\t{{^noLinks}}\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t{{/noLinks}}\n\t\t\t\t\t\t\t\t{{#noLinks}}\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t{{/noLinks}}\n\t\t\t\t\t\t\t\t{{#showDataMode}}\n\t\t\t\t\t\t\t\t\t<span class="tv-data-mode--watch-list js-data-mode"></span>\n\t\t\t\t\t\t\t\t{{/showDataMode}}\n\t\t\t\t\t\t\t\t{{#showMarketStatus}}\n\t\t\t\t\t\t\t\t\t<span class="tv-market-status--watch-list js-market-status"></span>\n\t\t\t\t\t\t\t\t{{/showMarketStatus}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t{{^onlyDescription}}\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<span class="tv-widget-watch-list__description{{^isEmbedWidget}} tv-widget-watch-list__description--uppercase{{/isEmbedWidget}} apply-overflow-tooltip{{^description}} js-symbol-description-name{{/description}}{{#descriptionClass}} {{descriptionClass}}{{/descriptionClass}}">\n\t\t\t\t\t\t\t\t\t{{#description}}{{ description }}{{/description}}{{^description}}&nbsp;{{/description}}\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t{{/onlyDescription}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="tv-widget-watch-list__quote-column tv-site-table__column tv-site-table__column--align_right tv-site-table__column--last-phone-vertical{{#symbolColumnClass}} {{symbolColumnClass}}{{/symbolColumnClass}}">\n\t\t\t\t\t\t<div class="tv-widget-watch-list__last-wrap">\n\t\t\t\t\t\t\t<div class="tv-widget-watch-list__last{{#valueBold}} tv-widget-watch-list__last--bold{{/valueBold}}{{#lastClass}} {{lastClass}}{{/lastClass}}{{#lastDirection}} js-symbol-change-direction{{/lastDirection}} js-symbol-last apply-overflow-tooltip">\n\t\t\t\t\t\t\t\t{{#last}}{{ last }}{{/last}}{{^last}}&nbsp;{{/last}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="tv-widget-watch-list__change{{#hideAbsoluteChange}} tv-widget-watch-list__change--whole-height{{/hideAbsoluteChange}} apply-overflow-tooltip js-symbol-change-direction">\n\t\t\t\t\t\t\t<span class="tv-widget-watch-list__change-inline{{#hideAbsoluteChange}} tv-widget-watch-list__change-inline--whole-height{{/hideAbsoluteChange}} js-symbol-change-pt">\n\t\t\t\t\t\t\t\t{{#change_pt}}{{ change_pt }}{{/change_pt}}{{^change_pt}}&nbsp;{{/change_pt}}\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t{{^hideAbsoluteChange}}\n\t\t\t\t\t\t\t<span class="tv-widget-watch-list__change-inline js-symbol-change">\n\t\t\t\t\t\t\t\t{{#change}}{{ change }}{{/change}}{{^change}}&nbsp;{{/change}}\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t{{/hideAbsoluteChange}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>`,
title:'\n\t\t\t\t<div class="tv-site-table__row js-symbols-titles">\n\t\t\t\t\t<div class="tv-site-table__column tv-widget-watch-list__main-column tv-widget-watch-list__main-column--title">\n\t\t\t\t\t\t<div class="tv-widget-watch-list__name">\n\t\t\t\t\t\t\t<span class="tv-widget-watch-list__title tv-widget-watch-list__short-name--whole-height apply-overflow-tooltip">Index</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="tv-widget-watch-list__quote-column tv-widget-watch-list__quote-column--title tv-site-table__column tv-site-table__column--align_right tv-site-table__column--last-phone-vertical">\n\t\t\t\t\t\t<div class="tv-widget-watch-list__last apply-overflow-tooltip tv-widget-watch-list__title">\n\t\t\t\t\t\t\tValue{{#valueTitleMarked}}*{{/valueTitleMarked}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="tv-widget-watch-list__change tv-widget-watch-list__title apply-overflow-tooltip">\n\t\t\t\t\t\t\t<span class="tv-widget-watch-list__change-inline">Change</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>'}}set symbol(t){if(this._symbol=t,this._chart&&this._chart.changeSymbol(t,this._getSeriesOptions()),this.hasChart){const e=b()("tv-site-table__row--highlighted tv-widget-watch-list__row--highlighted",this.widgetColorClassMap.symbolActiveColor);this.$symbols.removeClass(e).filter(((e,s)=>q(s).data("symbol")===t)).addClass(e)}else this.$symbols.filter(((e,s)=>q(s).data("symbol")===t))}get symbol(){return this._symbol||""}start(){this._started||(this.symbol||(this.symbol=this.$symbols.eq(0).data("symbol")),this.hasChart&&(this._bindSymbolClick(),this._startChart()),this._startSymbolRows(),this._started=!0)}stop(){this._started&&(this._unbindSymbolClick(),this._stopChart(),this._stopSymbolRows(),this._started=!1)}hasData(){if(null===this._hasDataPromise){const t=[];this.$symbols.each(((e,s)=>{const i=q(s).data("watchlist-widget__symbol-row");t.push(i.hasData())})),this._hasDataPromise=Promise.all(t).then((t=>t.some((t=>t))))}return this._hasDataPromise}adjustToAvailableSizes(){var t;const e=(0,i.ensureNotNull)(document.querySelector(".js-watchlist-widget")),s=(0,i.ensureNotNull)(document.querySelector(".js-quote-ticker"));let o=(0,i.ensureNotNull)(e.parentElement).offsetHeight-e.offsetHeight,a=this.hasChart?this.$chart[0].offsetHeight:0,l=this.$symbolsWrapper[0].offsetHeight,n=this.$symbolsWrapper[0].scrollHeight-l;if(0===o&&0===n)return;const r=s.offsetHeight;let h=0;o>0&&n>0?h=Math.min(n,o/2):o<0&&(h=this.hasChart?Math.max(Math.floor(o/2),r-l):o),l+=h,n-=h,o-=h,this.hasChart&&(a+=o,o=0),this.hasChart&&n>0&&n<Math.floor(a/4)&&(a-=n,l+=n),this.hasChart&&a<100&&(l-=100-a,a=100),this.$symbolsWrapper[0].style.height=l+"px",this.hasChart&&(this.$chart[0].style.height=a+"px",null===(t=this._chart)||void 0===t||t.resizeByContainer())}_bindSymbolClick(){this.$el.on("click",".js-quote-ticker",(t=>{this.symbol=q(t.currentTarget).data("symbol")}))}_unbindSymbolClick(){this.$el.off("click",".js-quote-ticker")}_getSymbolDataToRender(t){
const[e,s]=t.s.split(":"),i=t.t||s,o=this.settings.largeChartUrl&&(0,k.makeTemplateSymbolUrl)(this.settings.largeChartUrl,{shortName:s,exchange:e})||"",a=(0,k.makeSymbolPageUrl)({shortName:s,exchange:e},this.settings.utmInfo),l=t.d;return{s:t.s,description:l,exchange:e,shortName:i,symbolUrl:a,showChart:this.hasChart,onlyDescription:this.settings.onlyDescription,isEmbedWidget:this.settings.isEmbedWidget,utmStringified:this.settings.utmStringified,largeChartUrl:o,tradingviewBaseUrl:this.settings.tradingviewBaseUrl,showDataMode:this.showDataMode,showMarketStatus:this.showMarketStatus,indexNameBold:this.settings.indexNameBold,valueBold:this.settings.valueBold,shortNameClass:this.widgetColorClassMap.symbolShortNameColor,descriptionClass:this.widgetColorClassMap.symbolDescriptionColor,symbolColumnClass:this.widgetColorClassMap.symbolSeparatorColor,lastClass:this.widgetColorClassMap.lastColor,lastDirection:this.settings.paintLastWithChangeColors,hideAbsoluteChange:this.settings.hideAbsoluteChange,noLinks:this.settings.noLinks}}_renderSymbol(t){return U.render(this.pageTemplates.symbol,this._getSymbolDataToRender(t))}_renderPage(){const t=[];return this._symbols.forEach((e=>t.push(this._getSymbolDataToRender(e)))),U.render(this.pageTemplates.page,{symbols:t,showTitles:this.settings.showTitles,showDataMode:this.showDataMode,showMarketStatus:this.showMarketStatus,valueTitleMarked:this.settings.valueTitleMarked},this.pageTemplates)}_renderTitle(){return U.render(this.pageTemplates.title,{valueTitleMarked:this.settings.valueTitleMarked})}_startChart(){if(this._chart)return void this._chart.enable();if(!this.symbol)return;const t=this.settings.showFloatingTooltip,e=this._getSeriesOptions();let s;if(t){const t="dark"===this.settings.colorTheme?w.colorsPalette["color-cold-gray-700"]:w.colorsPalette["color-cold-gray-200"];s={vertLine:{visible:!0,style:B.LineStyle.Solid,width:1,color:t},mode:B.CrosshairMode.Magnet}}const i=(0,L.getMiniTimeFrameOptions)().filter((t=>!this.settings.dateRangeOptions||this.settings.dateRangeOptions.includes(t.value.value)));this._chart=new T.LightweightMiniChart({symbol:this.symbol},this.$chart.get(0),null,{timeframe:{visible:!0,container:this.$el.find(".js-timeframes").get(0),value:this.settings.dateRange,options:i,size:"xsmall"},valuesTracking:t?"1":"0",chartOptions:{minWidth:this.$chart.width(),minHeight:this.$chart.height(),chart:{grid:{horzLines:{visible:!0,color:this.chartColorMap.gridLineColor,style:B.LineStyle.Dotted}},crosshair:s,layout:{textColor:this.chartColorMap.scaleFontColor,fontSize:12},localization:{locale:(0,E.getIsoLanguageCodeFromLanguage)(this.settings.locale)},rightPriceScale:{visible:!1}},series:e,loading:{spinner:{visible:!0}}}})}_stopChart(){this._chart&&this._chart.disable()}_getSeriesOptions(){return{chartType:"area",lineColor:this.chartColorMap.plotLineColor,growingLineColor:this.chartColorMap.plotLineColorGrowing,fallingLineColor:this.chartColorMap.plotLineColorFalling,lineWidth:2,growingTopColor:this.chartColorMap.belowLineFillColorGrowing,
fallingTopColor:this.chartColorMap.belowLineFillColorFalling,growingBottomColor:this.chartColorMap.belowLineFillColorGrowingBottom,fallingBottomColor:this.chartColorMap.belowLineFillColorFallingBottom,crosshairMarkerVisible:this.settings.showFloatingTooltip,crosshairMarkerRadius:3.5,crosshairMarkerBorderColor:"dark"===this.settings.colorTheme?w.colorsPalette["color-cold-gray-850"]:w.colorsPalette["color-white"],scaleMargins:{top:.01,bottom:.05}}}_startSymbolRows(){this.$symbols.each(((t,e)=>{this._startSymbolRow(q(e))}))}_startSymbolRow(t){const e=t.data("watchlist-widget__symbol-row");e?e.start():t.data("watchlist-widget__symbol-row",new O(t,{tradingviewBaseUrl:this.settings.tradingviewBaseUrl,largeChartUrl:this.settings.largeChartUrl,isEmbedWidget:this.settings.isEmbedWidget,directionUpClass:this.widgetColorClassMap.changeUpColor,directionDownClass:this.widgetColorClassMap.changeDownColor,directionNeutralClass:this.widgetColorClassMap.changeNeutralColor,lastGrowingClass:this.settings.disableLastGrowingFlash?null:this.widgetColorClassMap.lastGrowingFlashColor,lastFallingClass:this.settings.disableLastFallingFlash?null:this.widgetColorClassMap.lastFallingFlashColor,noLinks:this.settings.noLinks,showSymbolLogo:this.settings.showSymbolLogo}))}_stopSymbolRows(){this.$symbols.each(((t,e)=>{this._stopSymbolRow(q(e))}))}_stopSymbolRow(t){const e=t.data("watchlist-widget__symbol-row");e&&e.stop()}}class O{constructor(t,e){this._hasData=new P.WatchedValue,this._setSymbolLinkCompleted=!1,t&&t.length||(x.logError("`$el` is required"),(0,i.assert)(Boolean(t&&t.length),"`$el` is required")),this.$el=t,this.symbol=t.data("symbol"),this.description=t.data("description"),this.start(),this._largeChartUrl=e.largeChartUrl||"",this._utmInfo=e.utmInfo||{},this._isEmbedWidget=!!e.isEmbedWidget,this._noLinks=e.noLinks,this._showSymbolLogo=e.showSymbolLogo;const s=(0,r.pickFields)(e,["directionUpClass","directionDownClass","directionNeutralClass","lastGrowingClass","lastFallingClass"]);this._directionUpClass=s.directionUpClass,this._directionDownClass=s.directionDownClass,this._directionNeutralClass=s.directionNeutralClass,this._lastGrowingClass=s.lastGrowingClass,this._lastFallingClass=s.lastFallingClass,this._setSymbolLogo=(0,_.getLogoUrlsHook)((t=>{const e=this.symbol.split(":")[1],s=(this.description||e||"")[0];(0,i.ensureNotNull)(this.$el[0].querySelector(".js-symbol-logo")).innerHTML=(0,C.getCircleLogoAnyHtml)({logoUrls:t,size:"medium",placeholderLetter:s})}))}start(){this._startQuoteTicker().then((()=>{this._startMarketStatus()})).catch((t=>x.logError(`${t.exchange} ${t.reason}`)))}stop(){this._stopQuoteTicker(),this._stopMarketStatus()}hasData(){return void 0===this._hasData.value()?new Promise((t=>{this._hasData.subscribe(t,{once:!0})})):Promise.resolve(this._hasData.value())}_startMarketStatus(){if(this.$el.find(".js-market-status")[0]){const t=new j.MarketStatusIndicator({classSuffix:"--for-watch-list",el:this.$el.find(".js-market-status")[0],short:!0,symbol:this.symbol});t.start(),this.$el.data("market-status",t)}
const t=this.$el.find(".js-data-mode")[0];if(t){const e=new M.DataModeIndicator({classSuffix:"--for-watch-list",el:t,short:!0,symbol:this.symbol});e.start(),this.$el.data("data-mode",e)}}_stopMarketStatus(){const t=this.$el.data("market-status"),e=this.$el.data("data-mode");t&&t.stop(),e&&e.stop()}_showSFWarning(){var t;const e=this.$el.get(0);if(e.getElementsByClassName("js-exclamationed-symbol").length)return;const s=document.createElement("span");s.classList.add("tv-widget-watch-list__symbol-exclamation-mark","js-exclamationed-symbol","apply-common-tooltip"),s.setAttribute("title",(0,y.getWarningTextForFreeUsers)());const o=e.getElementsByClassName("js-symbol-link").item(0);o&&(o.appendChild(s),null===(t=window.loginStateChange)||void 0===t||t.subscribe(null,(()=>{if(window.is_authenticated){const t=e.getElementsByClassName("js-exclamationed-symbol");for(;t.length>0;)(0,i.ensureNotNull)(t[0].parentNode).removeChild(t[0])}})))}_startQuoteTicker(){let t=this.$el.data("quote-ticker");if(t)return t.enable(),Promise.resolve(t);const e=this._showSFWarning.bind(this),s=(t,e,s)=>{this._setSymbolLinkCompleted||this._noLinks||this._setSymbolLink(t),this._showSymbolLogo&&this._setSymbolLogo(t,e,s)};return new Promise(((i,o)=>{(0,v.check)(this.symbol,!1).then((o=>{const a={dontDyePrice:!0,addDescriptionTitle:!1,signPositive:!0,changePercentInBrackets:!1,setStateHook:s,changeDirectionUpClass:this._directionUpClass||void 0,changeDirectionDownClass:this._directionDownClass||void 0,changeDirectionNeutralClass:this._directionNeutralClass||void 0,lastGrowingClass:this._lastGrowingClass||void 0,lastFallingClass:this._lastFallingClass||void 0,initedHook:()=>{this._hasData.setValue(!0)},noSuchSymbolHook:()=>{this._hasData.setValue(!1)},permissionDeniedHook:()=>{this._hasData.setValue(!1),e()}};t=new F.QuoteTicker(o,this.$el.get(0),a),this.$el.data("quote-ticker",t),i(t)})).catch((t=>{this._hasData.setValue(!1),e(),o(t)}))}))}_setSymbolLink(t){const e=t.short_name,s=t.exchange,i=t.pro_name,o=t.type;if(!(e&&s&&i&&o))return;const a=this.$el[0].getElementsByClassName("js-symbol-link")[0],l=this._largeChartUrl&&this._isEmbedWidget,n={shortName:e,exchange:s,proName:i,type:o};a.href=l?(0,k.makeTemplateSymbolUrl)(this._largeChartUrl,n):(0,k.makeSymbolPageUrl)(n,this._utmInfo),this._setSymbolLinkCompleted=!0}_stopQuoteTicker(){const t=this.$el.data("quote-ticker");t&&t.disable()}}const G=Object.assign({},window.initData.widget_defaults);G.whitelabel=Boolean(window.initData.widgetDefaults.whitelabel),G.noLinks=Boolean(window.initData.widgetDefaults.noLinks);const I=(0,a.parseUrlHashParams)(),z=Object.assign({},G);"showChart"in I&&(z.show_chart=I.showChart),z.customer=window.TradingView.widgetCustomer,"showSymbolLogo"in I&&(z.showSymbolLogo=Boolean(I.showSymbolLogo)),"showFloatingTooltip"in I&&(z.showFloatingTooltip=Boolean(I.showFloatingTooltip)),z.dateRange=(0,c.getActualTimeFrame)(I.dateRange||window.initData.widgetDefaults.dateRange),I.dateRangeOptions&&(z.dateRangeOptions=I.dateRangeOptions.map(c.getActualTimeFrame))
;const V=window.locale||G.locale||"en";z.locale=V;const Q=window.locale_domains[V]?window.locale_domains[V]:window.locale_domains.en;z.tradingviewBaseUrl=Q?document.location.protocol+"//"+Q:"",z.largeChartUrl=I.largeChartUrl;const K=I.isTransparent;I.tabs&&(z.tabs=I.tabs),z.show_chart&&(Object.assign(z,(0,r.pickFields)(I,H)),void 0===z.belowLineFillColorFallingBottom&&z.belowLineFillColorFalling&&(z.belowLineFillColorFallingBottom=z.belowLineFillColorFalling),void 0===z.belowLineFillColorGrowingBottom&&z.belowLineFillColorGrowing&&(z.belowLineFillColorGrowingBottom=z.belowLineFillColorGrowing)),z.colorTheme=I.colorTheme,Object.assign(z,(0,r.pickFields)(I,A)),I.tickerColorGrowing&&I.tickerColorFalling&&(z.paintLastWithChangeColors=!0,z.disableLastGrowingFlash=!0,z.disableLastFallingFlash=!0,z.changeUpColor=I.tickerColorGrowing,z.changeDownColor=I.tickerColorFalling),z.indexNameBold=Y("indexNameBold",I,z),z.valueBold=Y("valueBold",I,z),z.valueTitleMarked=Y("valueTitleMarked",I,z),z.paintLastWithChangeColors=Y("paintLastWithChangeColors",I,z),z.onlyDescription=Y("onlyDescription",I,z),z.hideAbsoluteChange=Y("hideAbsoluteChange",I,z);const J=(0,n.filterUtmInfo)(I),Z=(0,i.ensureNotNull)(document.querySelector("#widget-market-overview-container"));K&&(Z.style.backgroundColor="transparent"),(0,l.createEmbedWidgetWrapper)(Z,J,{isWhiteLabel:z.whitelabel,locale:V,customer:z.customer}),Z.classList.add("tv-site-widget"),Z.classList.add("tv-site-widget--bg_none"),Z.innerHTML='<div class="tv-widget-watch-list__head-embed js-widget-head">\n\t\t<div class="tv-site-widget__tabs\n\t\t\ttv-widget-watch-list__tabs\n\t\t\tjs-tabs\n\t\t"></div>\n\t</div>\n\t<div class="tv-widget-watch-list__body-embed js-widget-body">\n\t\t<div class="js-pages"></div>\n\t</div>',Object.assign(z,{utmInfo:J}),z.onActivePageLoaded=t=>{t||(0,h.dispatchEventToParent)(d.IFrameEvents.Names.NoData,g.frameElementId,void 0)};const X=new class{constructor(t,e={}){this._stopPageTimeouts={},this._activePageLoadedPromise=null,this._destroyTabLabels=null,t||(x.logError("`el` is required"),(0,i.assert)(Boolean(t),"`el` is required")),this.$el=q(t),this.settings=this._prepareSettings(e),this._activePageLoadedPromise=null,this.tabsLabels=this.settings.tabs.map((t=>t.title||t.title_raw));const s=(0,r.pickFields)(this.settings,A);this.widgetColorClassMap=function(t){const e=(0,S.randomHashN)(4);return t.reduce(((t,s)=>{const i=s.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`));return t[s]=`${i}--${e}`,t}),{})}(Object.keys(s)),t.appendChild(function(t,e,s){const i=(t,e)=>`.${t}, .${t}:hover, .${t}:active { color: ${e} }`,o={symbolActiveColor:(t,e)=>`.${t} { background: ${e} }`,symbolSeparatorColor:(t,e)=>`.${t}:after { background: ${e} }`,tabSliderColor:(t,e)=>`.${t} { background: ${e} }`},a=document.createElement("style"),l=[];for(const a of t){const t=s[a],n=e[a];if(!t||!n||null===(0,p.tryParseRgb)(n))continue;const r=o[a];l.push(r?r(t,n):i(t,n))}return a.textContent=l.join(" "),a}(A,s,this.widgetColorClassMap)),
this.settings.isEmbedWidget||"hotlists"===this.widgetName?(1===this.settings.tabs.length&&this.$el.find(".js-widget-head").addClass("i-hidden"),this.renderContent().then((()=>{this._initPages(),this.setAutoUpdate()}),(t=>{console.log("WidgetWatchlist constructor error",t)}))):this._initPages()}setAutoUpdate(){}get widgetName(){return"marketoverview"}get settingsKey(){return"watchlist__summary.properties"}get userSettings(){return{}}get templates(){return{tab:'\n\t\t\t\t<div class="tv-widget-watch-list__blank-tab js-widget-tab" data-content="{{ title_raw }}">{{ title }}\n\t\t\t\t</div>',tabContent:`\n\t\t\t\t<div class="tv-widget-watch-list{{^firstTab}} i-hidden{{/firstTab}}{{#firstTab}}{{#hotlistsSelectEnabled}} i-loading{{/hotlistsSelectEnabled}}{{/firstTab}}"{{#group}} data-tab-group="{{ group }}"{{/group}}>\n\t\t\t\t\t{{#showChart}}\n\t\t\t\t\t\t<div class="js-chart tv-widget-watch-list__chart"></div>\n\t\t\t\t\t\t<div class="js-timeframes tv-widget-watch-list__timeframe"></div>\n\t\t\t\t\t{{/showChart}}\n\t\t\t\t\t<div class="{{#isEmbedWidget}}tv-widget-watch-list__symbols-wrapper {{/isEmbedWidget}}js-symbols-wrapper"\n\t\t\t\t\t\t {{#minTableHeight}} style="min-height: {{ minTableHeight }}" {{/minTableHeight}}\n\t\t\t\t\t>\n\t\t\t\t\t\t<div class="tv-site-table tv-widget-watch-list__table\n\t\t\t\t\t\t\t{{#isEmbedWidget}} tv-site-table--start-border {{/isEmbedWidget}}\n\t\t\t\t\t\t\t{{^showChart}} tv-site-table--no-start-border {{/showChart}}\n\t\t\t\t\t\t\t{{#forceEndBorder}} tv-site-table--with-end-border {{/forceEndBorder}}\n\t\t\t\t\t\t\t js-symbols-body">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t{{^isEmbedWidget}}\n\t\t\t\t\t\t{{#quickLink}}\n\t\t\t\t\t\t\t<div class="js-quick-link-wrapper tv-feed-widget__quick-link-wrap tv-feed-widget__padded">\n\t\t\t\t\t\t\t\t<a class="tv-feed-widget__quick-link" href="{{ quickLink.href }}">{{ quickLink.title }}${s(108999)}</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t{{/quickLink}}\n\t\t\t\t\t{{/isEmbedWidget}}\n\t\t\t\t</div>`,tabContentSkin:'\n\t\t\t\t<div class="tv-widget-watch-list{{^firstTab}} i-hidden{{/firstTab}}{{#firstTab}}{{#hotlistsSelectEnabled}} i-loading{{/hotlistsSelectEnabled}}{{/firstTab}}"{{#group}} data-tab-group="{{ group }}"{{/group}}>\n\t\t\t\t</div>'}}renderContent(){const t=this.settings.tabs.map((t=>{const e=q(U.render(this.templates.tabContent,{showChart:this.settings.show_chart,isEmbedWidget:this.settings.isEmbedWidget,group:t.group,firstTab:t===this.settings.tabs[0],forceEndBorder:this.settings.force_end_border},this.templates));return e.data("symbols",t.symbols.map((t=>Object({s:t.s,d:t.d,t:t.t})))),this.$el.find(".js-pages").append(e),!0}));return new Promise((e=>{Promise.all(t).then(e)}))}saveToTVSettings(t){const e=window.locale;let s=(0,D.getJSON)(this.settingsKey);s||(s={}),s[e]=t,(0,D.setJSON)(this.settingsKey,s)}destroy(){this.$pagesContainer&&(this.$pagesContainer.children().each(((t,e)=>{this._stopPage(q(e))})),this._destroyTabLabels&&this._destroyTabLabels())}resetCaches(){
this.$pagesContainer&&this.$pagesContainer.children().each(((t,e)=>{const s=q(e);this._getCachedWidgetPage(s)&&this._cacheWidgetPage(s,this._createWidgetWatchlistPage(s))}))}adjustToAvailableSizes(){this.$pagesContainer.children().each(((t,e)=>{if(!e.classList.contains("i-hidden")){const t=this._getCachedWidgetPage(q(e));null==t||t.adjustToAvailableSizes()}}))}_startPage(t){let e=this._getCachedWidgetPage(t);if(e?(this._deleteStopTimeout(t),e.start()):(e=this._createWidgetWatchlistPage(t),this._cacheWidgetPage(t,e)),"function"==typeof this.settings.onActivePageLoaded){const t=this._activePageLoadedPromise=e.hasData().then((e=>{t===this._activePageLoadedPromise&&this.settings.onActivePageLoaded&&this.settings.onActivePageLoaded(e)}))}}_getCachedWidgetPage(t){return t.data("watchlist-widget-page")}_initPages(){const t=this.$el.find(".js-tabs").eq(0),e=this.$el.find(".js-pages").eq(0),s=1===e.children().length;this.settings.fixedChartHeight&&(this._normalizeSymbolListHeight(),setTimeout((()=>this._adjustSymbolsListHeight()),0)),s?this._startPage(e.children().eq(0)):(this._initTabs(t,e),!this.settings.fixedChartHeight&&this.settings.adjust_widget_height&&e.find(".js-chart").length&&this._adjustChartHeight(e,this.settings.adjust_widget_height)),this.$pagesContainer=e}_getPagesArray(t){return t?Array.prototype.slice.call(t.children):[]}_prepareSettings(t){let e;const s=this.$el.data("widget-data");if(s)if(s.is_embed_widget)e=Object.assign({},s,t);else{const i=this.userSettings;(!1===s.hotlists_select_enabled||s.override_user_exchange)&&delete i.exchange,e=Object.assign({},s,t,i)}else this.$el.data("widget-data",t),e=t;return void 0!==e.is_embed_widget&&(e.isEmbedWidget=e.is_embed_widget),e.is_embed_widget=void 0,e}_initTabs(t,e){const s=this._getPagesArray(e.get(0));(0,W.createTabLabels)("watchlist-widget-tab-labels",this.tabsLabels,t.get(0),s,this._onActivePageChanged.bind(this)).then((t=>this._destroyTabLabels=t)),this._startPage(q((0,i.ensureNotNull)(this._getActivePage(s))))}_adjustChartHeight(t,e){const s=t.children(),o=document.querySelector(".js-quote-ticker"),a=document.querySelector(".js-chart");if(o&&a){const t=o.offsetHeight,l=a.offsetHeight;for(let o=0;o<s.length;o++){let a=e-s[o].querySelectorAll(".js-quote-ticker").length;if(a===e&&(a=1),a<e){const e=s[o].querySelector(".js-chart");(0,i.ensureNotNull)(e).style.height=`${l+t*a}px`}}}}_normalizeSymbolListHeight(){const t=(0,i.ensureNotNull)(this.$el[0].firstElementChild),e=t.querySelector(".js-pages");if(!e)return;let s=0;if(e){let i=0;for(let t=0;t<e.children.length;t++){const o=e.children[t];if(i=Math.max(o.querySelectorAll(".js-quote-ticker").length,i),!o.classList.contains("i-hidden")){const t=o.querySelector(".js-quote-ticker");t&&(s=t.offsetHeight)}}const o=t.querySelectorAll(".js-symbols-wrapper");for(let t=0;t<o.length;t++){o[t].style.minHeight=s*i+"px"}}}_adjustSymbolsListHeight(){const t=this.$el[0].firstElementChild,e=getComputedStyle(t),s=t.offsetHeight-parseInt(e.paddingTop)-parseInt(e.paddingBottom),i=t.querySelector(".js-widget-head");let o=0
;if(i){const t=getComputedStyle(i);o=i.offsetHeight+parseInt(t.marginTop)+parseInt(t.marginBottom)}const a=t.querySelector(".js-pages");if(!a)return;let l=0,n=0,r=0;for(let t=0;t<a.children.length;t++){const e=a.children[t];if(!e.classList.contains("i-hidden")){const t=e.querySelector(".js-chart");t&&(l=t.offsetHeight);const s=e.querySelector(".js-timeframes");if(s){const t=getComputedStyle(s);n=s.offsetHeight+parseInt(t.marginTop)+parseInt(t.marginBottom)}const i=e.querySelector(".js-quick-link-wrapper");i&&(r=i.offsetHeight);break}}const h=s-o-(l+n+r),d=a.querySelectorAll(".js-symbols-wrapper");for(let t=0;t<d.length;t++){d[t].style.minHeight=`${h}px`}}_createWidgetWatchlistPage(t){return new R(t,{chartColorMap:(0,r.pickFields)(this.settings,H),dateRange:this.settings.dateRange||$.timeFrames["12m"].value.value,dateRangeOptions:this.settings.dateRangeOptions,disableLastFallingFlash:this.settings.disableLastFallingFlash,disableLastGrowingFlash:this.settings.disableLastGrowingFlash,hideAbsoluteChange:this.settings.hideAbsoluteChange,indexNameBold:this.settings.indexNameBold,indexNonClickable:this.settings.indexNonClickable,isEmbedWidget:this.settings.isEmbedWidget,largeChartUrl:this.settings.largeChartUrl,noLinks:this.settings.noLinks,onlyDescription:this.settings.onlyDescription,paintLastWithChangeColors:this.settings.paintLastWithChangeColors,showDataMode:this.settings.showDataMode,showMarketStatus:this.settings.showMarketStatus,showTitles:this.settings.showTitles,tradingviewBaseUrl:this.settings.tradingviewBaseUrl,utmInfo:this.settings.utmInfo,valueBold:this.settings.valueBold,valueTitleMarked:this.settings.valueTitleMarked,widgetColorClassMap:this.widgetColorClassMap,widgetName:this.widgetName,showSymbolLogo:this.settings.showSymbolLogo,locale:this.settings.locale,showFloatingTooltip:this.settings.showFloatingTooltip,colorTheme:this.settings.colorTheme})}_stopPage(t,e){const s=this._getCachedWidgetPage(t);s&&(e?this._setStopTimeout(t):s.stop())}_onActivePageChanged(t,e){e.forEach(((e,s)=>{if(t===s){if(this._startPage(q(e)),this.settings.isEmbedWidget){const t=this._getCachedWidgetPage(q(e));null==t||t.adjustToAvailableSizes()}}else this._stopPage(q(e))}))}_getActivePage(t){for(const e of t)if(!e.classList.contains("i-hidden"))return e;return null}_cacheWidgetPage(t,e){t.data("watchlist-widget-page",e)}_setStopTimeout(t){this._stopPageTimeouts[t.index()]=setTimeout(this._stopPage.bind(this,t))}_deleteStopTimeout(t){const e=this._stopPageTimeouts[t.index()];e&&(clearTimeout(e),delete this._stopPageTimeouts[t.index()])}}(Z,z);if(z.isEmbedWidget&&!z.fixedChartHeight&&!z.adjust_widget_height){const t=(0,i.ensureNotNull)(document.querySelector(".js-embed-widget-body"));new ResizeObserver((0,o.default)((function(t){const e=t[0].contentRect;e.width>0&&e.height>0&&X.adjustToAvailableSizes()}),200)).observe(t)}function Y(t,e,s){return t in e?"false"!==e[t]:s[t]}},81979:(t,e,s)=>{s.d(e,{color:()=>i.color,dur:()=>i.dur});var i=s(745269)}},t=>{
t.O(0,[18562,66949,36785,4015,89842,76592,92483,39855,50293,37124,67103,8545,4912,35103,5987,99131,16744,87061,57686,28884,23100,30128,37570,20450,14389,5023,41076,93892,25146,96320],(()=>{return e=854734,t(t.s=e);var e}));t.O()}]);
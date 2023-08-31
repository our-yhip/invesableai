"use strict";(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[41414],{854798:(t,e,i)=>{i.d(e,{Version:()=>o});var n=i(650151);class o{constructor(t,e){this._major=t,this._minor=e}major(){return this._major}minor(){return this._minor}isZero(){return 0===this._major&&0===this._minor}toString(){return this._major+"."+this._minor}compareTo(t){return this._major<t._major?-1:this._major>t._major?1:this._minor<t._minor?-1:this._minor>t._minor?1:0}isLess(t){return this.compareTo(t)<0}isLessOrEqual(t){return this.compareTo(t)<=0}isEqual(t){return 0===this.compareTo(t)}isGreater(t){return this.compareTo(t)>0}isGreaterOrEqual(t){return this.compareTo(t)>=0}static parse(t){if(t instanceof o)return new o(t.major(),t.minor());if("number"==typeof t)return(0,n.assert)(Math.floor(t)===t,"Version should not be a float number"),new o(t,0);if("string"==typeof t){const e=t.split(".");if(1===e.length){const i=parseInt(e[0],10);return(0,n.assert)(!isNaN(i),"Bad version string: "+t),new o(i,0)}if(2===e.length){const i=parseInt(e[0],10);(0,n.assert)(!isNaN(i),"Bad version string: "+t);const r=parseInt(e[1],10);return(0,n.assert)(!isNaN(r),"Bad version string: "+t),new o(i,r)}throw new Error("Bad version string (one dot expected): "+t)}throw new Error("Bad version: "+t)}}o.ZERO=new o(0,0)},855611:(t,e,i)=>{i.d(e,{FormattersSerializer:()=>u});var n=i(650151),o=i(624444),r=i(943994),s=i(541346);class l{constructor(t){this.type="quoteSessionPrice",this.reset(t)}state(){return this._priceFormatter.state()}reset(t){this._priceFormatter=t||new o.PriceFormatter(100,1,!1)}update(t,e){const i=null!=e.pricescale||null!=e.minmov||null!=e.fractional||null!=e.minmove2,n=null!=t.pricescale&&null!=t.minmov&&null!=t.fractional&&null!=t.minmove2;i&&n&&(this._priceFormatter=new o.PriceFormatter(t.pricescale,t.minmov,t.fractional||!1,t.minmove2))}format(t,e,i){return this._priceFormatter.format(t,e,i)}hasForexAdditionalPrecision(){return this._priceFormatter.hasForexAdditionalPrecision()}static serialize(t){return t.state()}static deserialize(t){const e=new o.PriceFormatter(t.priceScale,t.minMove,t.fractional,t.minMove2);return new l(e)}}const a={price:o.PriceFormatter,volume:r.VolumeFormatter,percentage:s.PercentageFormatter,quoteSessionPrice:l};var u;!function(t){function e(t){return(0,n.ensureDefined)(a[t.type]).deserialize(t.state)}t.serialize=function(t){const e=(0,n.ensureDefined)(a[t.type]);return{type:t.type,state:e.serialize(t)}},t.deserialize=e,t.safeDeserialize=function(t){try{return e(t)}catch(t){return null}}}(u||(u={}))},918208:(t,e,i)=>{i.d(e,{lineToolsLocalizedNames:()=>o});var n=i(444372);const o={LineTool5PointsPattern:n.t(null,void 0,i(566527)),LineToolABCD:n.t(null,void 0,i(532852)),LineToolArc:n.t(null,void 0,i(745104)),LineToolArrow:n.t(null,void 0,i(696237)),LineToolArrowMarkDown:n.t(null,void 0,i(908738)),LineToolArrowMarkLeft:n.t(null,void 0,i(835062)),LineToolArrowMarkRight:n.t(null,void 0,i(192163)),LineToolArrowMarkUp:n.t(null,void 0,i(633196)),LineToolBalloon:n.t(null,void 0,i(40664)),
LineToolComment:n.t(null,void 0,i(119372)),LineToolBarsPattern:n.t(null,void 0,i(98838)),LineToolBezierCubic:n.t(null,void 0,i(59368)),LineToolBezierQuadro:n.t(null,void 0,i(517206)),LineToolBrush:n.t(null,void 0,i(530251)),LineToolCallout:n.t(null,void 0,i(764149)),LineToolCircleLines:n.t(null,void 0,i(587761)),LineToolCypherPattern:n.t(null,void 0,i(927891)),LineToolDateAndPriceRange:n.t(null,void 0,i(379859)),LineToolDateRange:n.t(null,void 0,i(660222)),LineToolDisjointAngle:n.t(null,void 0,i(603556)),LineToolElliottCorrection:n.t(null,void 0,i(291215)),LineToolElliottDoubleCombo:n.t(null,void 0,i(180983)),LineToolElliottImpulse:n.t(null,void 0,i(674118)),LineToolElliottTriangle:n.t(null,void 0,i(95840)),LineToolElliottTripleCombo:n.t(null,void 0,i(866637)),LineToolEllipse:n.t(null,void 0,i(469418)),LineToolExtended:n.t(null,void 0,i(302578)),LineToolFibChannel:n.t(null,void 0,i(482719)),LineToolFibCircles:n.t(null,void 0,i(464192)),LineToolFibRetracement:n.t(null,void 0,i(463835)),LineToolFibSpeedResistanceArcs:n.t(null,void 0,i(418072)),LineToolFibSpeedResistanceFan:n.t(null,void 0,i(220877)),LineToolFibSpiral:n.t(null,void 0,i(476783)),LineToolFibTimeZone:n.t(null,void 0,i(489037)),LineToolFibWedge:n.t(null,void 0,i(472489)),LineToolFlagMark:n.t(null,void 0,i(155678)),LineToolImage:n.t(null,void 0,i(223450)),LineToolFlatBottom:n.t(null,void 0,i(829230)),LineToolAnchoredVWAP:n.t(null,void 0,i(961704)),LineToolGannComplex:n.t(null,void 0,i(366321)),LineToolGannFixed:n.t(null,void 0,i(887107)),LineToolGannFan:n.t(null,void 0,i(168102)),LineToolGannSquare:n.t(null,void 0,i(981180)),LineToolHeadAndShoulders:n.t(null,void 0,i(742616)),LineToolHorzLine:n.t(null,void 0,i(160049)),LineToolHorzRay:n.t(null,void 0,i(76604)),LineToolIcon:n.t(null,void 0,i(326579)),LineToolEmoji:n.t(null,void 0,i(285223)),LineToolSticker:n.t(null,void 0,i(184573)),LineToolInsidePitchfork:n.t(null,void 0,i(312354)),LineToolNote:n.t(null,void 0,i(275549)),LineToolNoteAbsolute:n.t(null,void 0,i(366828)),LineToolSignpost:n.t(null,void 0,i(368161)),LineToolParallelChannel:n.t(null,void 0,i(670394)),LineToolPitchfan:n.t(null,void 0,i(422293)),LineToolPitchfork:n.t(null,void 0,i(143852)),LineToolPolyline:n.t(null,void 0,i(953047)),LineToolPath:n.t(null,void 0,i(234402)),LineToolPrediction:n.t(null,void 0,i(436972)),LineToolPriceLabel:n.t(null,void 0,i(495921)),LineToolArrowMarker:n.t(null,void 0,i(982473)),LineToolPriceRange:n.t(null,void 0,i(102032)),LineToolProjection:n.t(null,void 0,i(187086)),LineToolRay:n.t(null,void 0,i(50470)),LineToolRectangle:n.t(null,void 0,i(200328)),LineToolCircle:n.t(null,void 0,i(490068)),LineToolRegressionTrend:n.t(null,void 0,i(435001)),LineToolRiskRewardLong:n.t(null,void 0,i(844604)),LineToolRiskRewardShort:n.t(null,void 0,i(937819)),LineToolFixedRangeVolumeProfile:n.t(null,{context:"study"},i(40434)),LineToolAnchoredVolumeProfile:n.t(null,{context:"study"},i(59791)),LineToolRotatedRectangle:n.t(null,void 0,i(409998)),LineToolSchiffPitchfork:n.t(null,void 0,i(518559)),
LineToolSchiffPitchfork2:n.t(null,void 0,i(298114)),LineToolSineLine:n.t(null,void 0,i(369502)),LineToolText:n.t(null,{context:"tool"},i(20936)),LineToolTextAbsolute:n.t(null,void 0,i(694782)),LineToolThreeDrivers:n.t(null,void 0,i(298538)),LineToolTimeCycles:n.t(null,void 0,i(395005)),LineToolTrendAngle:n.t(null,void 0,i(294770)),LineToolTrendBasedFibExtension:n.t(null,void 0,i(715501)),LineToolTrendBasedFibTime:n.t(null,void 0,i(931196)),LineToolTrendLine:n.t(null,void 0,i(423104)),LineToolInfoLine:n.t(null,void 0,i(627677)),LineToolTriangle:n.t(null,void 0,i(729245)),LineToolTrianglePattern:n.t(null,void 0,i(112390)),LineToolVertLine:n.t(null,void 0,i(156211)),LineToolCrossLine:n.t(null,void 0,i(260997)),LineToolHighlighter:n.t(null,void 0,i(831895)),LineToolPriceNote:n.t(null,void 0,i(328625)),LineToolVbPFixed:n.t(null,void 0,i(518426)),LineToolGhostFeed:n.t(null,void 0,i(807914))};o.LineToolTweet=n.t(null,void 0,i(100970)),o.LineToolIdea=n.t(null,void 0,i(241246))},9027:(t,e,i)=>{i.d(e,{patchSourceState:()=>o});var n=i(444372);function o(t){const e={palettes:{},inputs:[{defval:2,id:"upper diviation",max:500,min:-500,name:n.t(null,void 0,i(572894)),type:"integer"},{defval:-2,id:"lower diviation",max:500,min:-500,name:n.t(null,void 0,i(696882)),type:"integer"},{defval:!0,id:"use upper diviation",name:n.t(null,void 0,i(36834)),type:"bool"},{defval:!0,id:"use lower diviation",name:n.t(null,void 0,i(14072)),type:"bool"},{defval:0,id:"first bar time",max:253370764800,min:0,name:n.t(null,void 0,i(312541)),type:"time"},{defval:0,id:"last bar time",max:253370764800,min:0,name:n.t(null,void 0,i(955034)),type:"time"},{defval:"close",id:"source",name:n.t(null,void 0,i(746147)),options:["open","high","low","close","hl2","hlc3","ohlc4"],type:"text"}],plots:[],graphics:{},defaults:{inputs:{"first bar time":0,"last bar time":0,"lower diviation":-2,source:"close","upper diviation":2,"use lower diviation":!0,"use upper diviation":!0}},_metainfoVersion:6,description:"Regression Trend",id:"RegressionTrend@tv-basicstudies",is_price_study:!0,shortDescription:"Reg Trend",shortId:"RegressionTrend",version:"2",fullId:"RegressionTrend@tv-basicstudies-2",name:"RegressionTrend@tv-basicstudies"};return t.metaInfo||(t.metaInfo=e),t}},173948:(t,e,i)=>{var n=i(922814);function o(t){var e=JSON.stringify(t);return e=e.replace(/'/g,"\\'")}t.exports={formatCallstudyArg:o,prepareCallStudyArgs:function(t,e){var i={};if(e.isTVScript){var r=e.defaults.inputs.text;i.text=n.patchILTemplate(r,e,t)}else for(var s=Object.keys(t),l=s.length-1;l>=0;l--){var a=s[l],u=t[a]?t[a].id:null;u&&t[u]&&(i[u]=t[u])}return o(i)}}},29469:(t,e,i)=>{i.d(e,{generateSplitTitleForGui:()=>l,generateTitleForGui:()=>a});var n=i(650151),o=i(444372),r=i(168883);function s(t,e){return(Math.round(t*Math.pow(10,e))/Math.pow(10,e)).toString()||""}function l(t){const e="QUANDL"===(t=t||{}).exchange,l={title:"",description:"",interval:"",exchange:"",provider:"",chartStyle:"",sessionDescription:"",priceSource:""};let a=""
;if(t.description&&e)if(2===t.description.split("/").length)a=t.description.split("/")[1];else{t.description.split("'").filter((t=>t.length)).forEach((t=>{let e=[];e=t&&("/"===t[0]||/\d+\/\(?/.test(t))?[t]:t.split("/").filter((t=>t.length)),a+=e[2===e.length?1:0]}))}else a=t.description?t.description:t.symbol;if(t.ticker?(l.title=t.ticker,l.description=u(a)):l.title=u(a),t.interval&&(l.interval=(0,r.translatedIntervalString)(t.interval)),e&&t.description){const e=/[\w_]+\/[\w_]+/.exec(t.description);e&&e[0]?l.provider=u(e[0].split("/")[0]):l.provider=u(t.description.split("/")[0])}return t.exchange&&(l.exchange=u(t.exchange)),l.chartStyle=u(function(t){const e=t.inputs;switch(t.style){case 4:const r=e.style+("ATR"===e.style?`(${e.atrLength})`:""),l=(0,n.ensureDefined)(t.boxSize||e.boxSize);return`${o.t(null,void 0,i(20801))} [${r}, ${s(l,4)}]`;case 7:return`${o.t(null,void 0,i(717558))} [${e.lb}]`;case 5:const a=e.style+("ATR"===e.style?`(${e.atrLength})`:""),u=t.reversalAmount||e.reversalAmount,d=void 0!==u?`, ${s(u,8)}`:"";return`${o.t(null,void 0,i(292901))} [${a}${d}]`;case 6:const p=`${e.style}${"ATR"===e.style?"("+e.atrLength+")":""}`,c=t.boxSize||e.boxSize;return`${o.t(null,void 0,i(145113))} [${p}, ${s((0,n.ensureDefined)(c),8)}, ${e.reversalAmount}]`}return 11===t.style?o.t(null,void 0,i(490357)):8===t.style?o.t(null,void 0,i(240530)):""}(t)),t.sessionDescription&&(l.sessionDescription=u(t.sessionDescription)),void 0!==t.priceSource&&(l.priceSource=u(t.priceSource)),l}function a(t){const e=l(t);return(t.ticker?e.description:e.title)+(e.interval?", "+e.interval:"")+function(t,e=", "){return(t.provider?`${e}${t.provider}`:"")+(t.exchange?`${e}${t.exchange}`:"")+(t.chartStyle?`${e}${t.chartStyle}`:"")+(t.branding?`${e}${t.branding}`:"")+(t.sessionDescription?`${e}${t.sessionDescription}`:"")}(e)}function u(t){return t.replace(/'/g,"")}},819021:(t,e,i)=>{i.d(e,{migrateMetaInfoAndPropState:()=>d});var n=i(650151),o=i(526075),r=i(389137);const s=["PennantCP@tv-basicstudies","WedgeCP@tv-basicstudies"],l=["DoubleTopCP@tv-basicstudies","BullishFlagCP@tv-basicstudies","HeadAndShouldersCP@tv-basicstudies","TripleTopCP@tv-basicstudies"];class a{targetMetaInfoVersion(){return 53}migrateMetaInfo(t){const e=t,i=t;if(i._metainfoVersion=53,void 0!==e.defaults&&void 0!==e.defaults.inputs&&(s.includes(e.id)||l.includes(e.id)&&Number(e.version)<156)){const t=e.defaults.inputs["Invert Pattern"];i.id=this._getNewIdStudies(e.id,t)}}migratePropState(t){}_getNewIdStudies(t,e){return t.startsWith("WedgeCP")?e?"WedgeFallingCP@tv-basicstudies":"WedgeRisingCP@tv-basicstudies":t.startsWith("PennantCP")?e?"PennantBearishCP@tv-basicstudies":"PennantBullishCP@tv-basicstudies":t.startsWith("DoubleTopCP")&&e?"DoubleBottomCP@tv-basicstudies":t.startsWith("BullishFlagCP")&&e?"BearishFlagCP@tv-basicstudies":t.startsWith("HeadAndShouldersCP")&&e?"HeadAndShouldersInverseCP@tv-basicstudies":t.startsWith("TripleTopCP")&&e?"TripleBottomCP@tv-basicstudies":t}}const u=[new class{targetMetaInfoVersion(){return 47}migrateMetaInfo(t){const e=t,i=t
;if(i._metainfoVersion=47,!e.defaults||void 0===e.defaults.precision)return void(i.format={type:"inherit"});const n=e.defaults&&e.defaults.precision,o=(0,r.isNumber)(n)?n:parseInt(n);0===o?i.format={type:"volume"}:isFinite(o)?i.format={type:"price",precision:o}:i.format={type:"inherit"},delete e.defaults.precision}migratePropState(t){}},new class{targetMetaInfoVersion(){return 50}migrateMetaInfo(t){const e=t,i=t;if(i._metainfoVersion=50,void 0===e.defaults||void 0===e.defaults.ohlcPlots||void 0===e.ohlcPlots)return;const o=e.ohlcPlots,r=e.defaults.ohlcPlots,s=(0,n.ensureDefined)((0,n.ensureDefined)(i.defaults).ohlcPlots);for(const t of Object.keys(r)){const e=r[t];if("ohlc_candles"===e.plottype){let i=!1;const n=o[t];void 0!==n&&(i=!!n.drawBorder,delete n.drawBorder),s[t]={borderColor:"#000000",drawBorder:i,...e}}}}migratePropState(t){}},new class{targetMetaInfoVersion(){return 53}migrateMetaInfo(t){const e=t,i=t;if(i._metainfoVersion=53,void 0!==e.defaults){if(void 0!==e.defaults.ohlcPlots&&void 0!==e.ohlcPlots){const t=Object.keys(e.ohlcPlots),o=e.defaults.ohlcPlots,r=(0,n.ensureDefined)((0,n.ensureDefined)(i.defaults).ohlcPlots);for(const e of t){const t=o[e];if(void 0===t||void 0===t.visible)continue;const i=t.visible?15:0;delete t.visible,r[e]={display:i,...t}}}if(void 0!==e.defaults.styles&&void 0!==e.plots){const t=e.plots.map((t=>t.id)),o=e.defaults.styles,r=(0,n.ensureDefined)((0,n.ensureDefined)(i.defaults).styles);for(const e of t){const t=o[e];if(void 0===t||void 0===t.visible)continue;const i=t.visible?15:0;delete t.visible,r[e]={display:i,...t}}}}}migratePropState(t){if(t.ohlcPlots)for(const e of Object.keys(t.ohlcPlots)){const i=(0,n.ensureDefined)(t.ohlcPlots[e]);void 0!==i.visible&&(i.display=i.visible?15:0,delete i.visible)}if(t.styles)for(const e of Object.keys(t.styles)){const i=(0,n.ensureDefined)(t.styles[e]);void 0!==i.visible&&(i.display=i.visible?15:0,delete i.visible)}}}];function d(t,e){const i=o.StudyMetaInfo.versionOf(t),r=t;void 0===r._serverMetaInfoVersion&&(r._serverMetaInfoVersion=i);const s=["PennantCP@tv-basicstudies","WedgeCP@tv-basicstudies"].includes(t.id);u.forEach((o=>{(i<0||i>=o.targetMetaInfoVersion())&&!s||(o.migrateMetaInfo(t),void 0!==e&&o.migratePropState(e),(0,n.assert)(t._metainfoVersion===o.targetMetaInfoVersion()))}))}u.push(new a),u.sort((function(t,e){return t.targetMetaInfoVersion()-e.targetMetaInfoVersion()}))},626240:(t,e,i)=>{var n=i(854798).Version,o=i(201089).getLogger("Chart.StudyMigration");function r(t){this._studyId=t,this._maxToVers=n.ZERO,this._maxFromVers=n.ZERO,this._migrs=[]}r.prototype.addMigration=function(t,e,i){var o=n.parse(t),r=n.parse(e);o.isGreater(this._maxFromVers)&&(this._maxFromVers=o),r.isGreater(this._maxToVers)&&(this._maxToVers=r),this._migrs.push({fromVers:o,toVers:r,rules:i})},r.prototype.updateInputs=function(t,e,i){if(!i)return i;for(var n=TradingView.clone(i),r=t;r.isLess(e);){var s=this._findMigration(r);if(null==s)break
;if(o.logNormal("Migrating study inputs from "+s.fromVers+" to "+s.toVers+" version, studyId: "+this._studyId+", migration: "+JSON.stringify(s)+", inputs: "+JSON.stringify(i)),n=this._applyMigration(n,s),!r.isLess(s.toVers))throw new Error("Problems in study migration process... Possible infinite cycle has been detected and stopped.");r=s.toVers}return r>t&&o.logNormal("Study inputs migration is done, studyId: "+this._studyId+", inputs: "+JSON.stringify(n)),n},r.prototype._findMigration=function(t){for(var e=-1,i=this._maxFromVers,n=0;n<this._migrs.length;n++){var o=this._migrs[n];o.fromVers.isLess(t)||o.fromVers.isLessOrEqual(i)&&(i=o.fromVers,e=n)}return e<0?null:this._migrs[e]},r.prototype._applyMigration=function(t,e){for(var i=t,n=0;n<e.rules.length;n++){var o=e.rules[n];i=this._getApplyRuleFun(o.type)(i,o)}return i},r.prototype._getApplyRuleFun=function(t){if("inputRemoved"===t)return r._applyInputRemovedRule;if("inputChangedType"===t)return r._applyInputChangedTypeRule;if("inputChangedMinMax"===t)return r._applyInputChangedMinMaxRule;if("inputChangedOptions"===t)return r._applyInputChangedOptionsRule;throw new Error("Unknown migration rule type: "+t)},r._applyInputRemovedRule=function(t,e){if(!(e.inputId in t))return t;if("removeVal"!==e.action)throw new Error("Unexpected rule.action="+e.action+" in rule.type="+e.type);var i=t[e.inputId];return delete t[e.inputId],o.logNormal("Input "+e.inputId+"="+i+" removed"),t},r._applyInputChangedTypeRule=function(t,e){var i=t[e.inputId];if("resetToDefVal"===e.action)return t[e.inputId]=e.defVal,o.logNormal("Input "+e.inputId+"="+i+" reset to default value "+e.defVal),t;if("convertVal"===e.action){if(null==i)return t;if("float"===e.inputTypeFrom&&"integer"===e.inputType)return t[e.inputId]=Math.round(t[e.inputId]),o.logNormal("Input "+e.inputId+"="+i+" converted to value "+t[e.inputId]),t;if("integer"===e.inputTypeFrom&&"float"===e.inputType)return t;if("text"===e.inputTypeFrom&&"source"===e.inputType)return r._isValidSource(i,e.options)||(t[e.inputId]=e.defVal),t;throw new Error("Cannot convertVal from "+e.inputTypeFrom+" to "+e.inputType)}throw new Error("Unknown action "+e.action+" for rule with type "+e.type)},r._isValidSource=function(t,e){return t.indexOf("$")>=0||e.indexOf(t)>=0},r._applyInputChangedMinMaxRule=function(t,e){if("adjustValIfNeeded"!==e.action)throw new Error("Unknown action "+e.action+" for rule with type "+e.type);var i=t[e.inputId];return i<e.minVal?t[e.inputId]=e.minVal:i>e.maxVal&&(t[e.inputId]=e.maxVal),o.logNormal("Input "+e.inputId+"="+i+" adjusted to value "+t[e.inputId]),t},r._applyInputChangedOptionsRule=function(t,e){if(!(["text"].indexOf(e.inputType)>=0&&"resetToDefValIfNeeded"===e.action))throw new Error("Unexpected rule.inputType="+e.inputType+" in rule.action="+e.action);var i=t[e.inputId];return e.options.indexOf(i)<0&&(t[e.inputId]=e.defVal,o.logNormal("Input "+e.inputId+"="+i+" reset to default value "+e.defVal)),t},t.exports=r},691639:(t,e,i)=>{i.d(e,{StudyVersioning:()=>h});var n=i(626240),o=i.n(n);const r=(0,
i(201089).getLogger)("Chart.Study.Versioning");var s=i(650151).assert,l=i(9027).patchSourceState,a=i(516684),u=i(854798).Version,d=i(66974),p=i(526075).StudyMetaInfo,c=i(971417).extractPineId,v=i(819021).migrateMetaInfoAndPropState;const f=1e12;class h extends class{constructor(t,e){if(this._migrations={},!t)throw new Error("No studies metainfo");if(this._studiesMetainfo=t,!e)throw new Error("No studies migrations");this._studiesMigrations=e;for(let t=0;t<this._studiesMigrations.length;t++){const e=this._studiesMigrations[t],i=e.versFrom,n=e.versTo;for(let t=0;t<e.studyMigrations.length;t++){const s=e.studyMigrations[t],l=s.studyId;if(0===s.rules.length){r.logError("Study Migration should have at least one convertion rule");continue}const a=l in this._migrations?this._migrations[l]:new(o())(l);a.addMigration(i,n,s.rules),this._migrations[l]=a}}this._clientMigrations=[(t,e)=>{if(0===this._studiesMetainfo.length||!t.isTVScript||t.version>=22)return e;const i={};let n=0,o=0,r=e[o];for(;void 0!==r;){const t=e[r.id];r.isFake&&(r.id="in_"+n++),i[o]=r,i[r.id]=t,o++,r=e[o]}return i}]}}{updateMetaInfo(t){if(!t)return t;s(!t.isTVScript,"This method should update only built-in java indicators metaInfo. For Pine indicators use updateMetaInfoAsync");for(var e=null,i=this._studiesMetainfo,n=0;n<i.length;n++)if(i[n].id===t.id){e=i[n];break}return TradingView.clone(e)}updateMetaInfoAsync(t){if(!t)return{sync:!1,result:Promise.reject("No old metaInfo was given")};var e=new p(t),i=p.versionOf(t);if(t.isTVScript&&!t.pine&&i<p.VERSION_PINE_PROTECT_TV_4164){s(TradingView.isExistent(t.scriptIdPart),"scriptIdPart is missing, study "+JSON.stringify(t));var n=t.scriptIdPart,o=new Promise((function(i,o){a.processLegacy(n,t.TVScriptSourceCode).done((function(t){e.removeDefaults();var n=new p(t);n.createDefaults(),v(n),i(n)})).fail((function(t,e){o(t)}))}));return{sync:!1,result:o}}if(t.isTVScript&&t.pine){if((t._serverMetaInfoVersion||i)<p.CURRENT_METAINFO_FORMAT_VERSION){o=new Promise((function(i,n){a.translateScriptAsync2(t.scriptIdPart,t.pine.version).done((function(t){e.removeDefaults();var n=new p(t);n.createDefaults(),v(n),i(n)})).fail((function(t,e){n(t)}))}));return{sync:!1,result:o}}return e.createDefaults(),{sync:!0,result:e}}for(var r=null,l=this._studiesMetainfo,u=0;u<l.length;u++)if(l[u].id===t.id){r=l[u];break}return{sync:!0,result:r?TradingView.clone(r):null}}lastVersionOfStudy(t){return this._studiesMetainfo.find((function(e){return e.id===t})).version}updateStudyInputs(t,e,i,n,o){var s=TradingView.clone(n);if(t in this._migrations){var l,a=u.parse(e);if("last"===i){var d=this.lastVersionOfStudy(t);l=u.parse(d)}else l=u.parse(i);s=this._migrations[t].updateInputs(a,l,s)}if(null==o)return s;for(var p in o)p in s||(s[p]=o[p]);for(var p in s)if(!(p in o)){var c=s[p];r.logWarn("Extra input detected, studyId="+t+", versionFrom="+e+", inputId="+p+", inputValue="+c+", removing it and continue..."),delete s[p]}return s}updateStudyState(t,e,i){if(null==t||null==e||null==i)return t;if(t=TradingView.clone(t),
!(e.isTVScript||!!e.pine)&&e.version!==i.version){var n=i&&i.defaults.inputs,o=this.updateStudyInputs(e.id,e.version,i.version,t.inputs,n);t.inputs=o}for(var s=0;s<this._clientMigrations.length;++s){o=this._clientMigrations[s].call(this,e,t.inputs);Object.keys(o).length===Object.keys(t.inputs).length?t.inputs=o:r.logWarn("StudyVersioning._clientMigrations application returned bad result. Skipping it...")}var l=p.versionOf(e);if(e.isTVScript&&e.TVScriptSourceCode&&l>=12&&l<=26){var a={};for(s=0;s<e.plots.length;++s){var u=e.plots[s],d=i.plots[s];a[u.id]=d.id}var c=Object.keys(t.styles);for(s=0;s<c.length;++s){var v=c[s],f=t.styles[v];delete t.styles[v];var h=a[v];t.styles[h]=f}var g=Object.keys(t.plots);for(s=0;s<g.length;++s){var y=g[s];v=t.plots[y].id;t.plots[y].id=a[v]}}return t}patchPointsBasedStudyState(t){return h._fixInputsMaxValue(t.state,t.metaInfo),"LineToolRegressionTrend"===t.type&&(t=l(t)),t}patchPointsBasedStudyData(t,e){if(!d.isProd())return e;if(!t||!e)return e;var i=TradingView.clone(e);return"VbPFixed@tv-volumebyprice"===t.id&&t.version&&t.version<=4&&h._patchOldVolumeProfiles(0,i),i}patchStudyData(t,e,i,n){if(!d.isProd())return{data:e,nsData:i,indexes:n};var o=TradingView.clone(e),r=TradingView.clone(i),s=TradingView.clone(n);"VbPVisible@tv-volumebyprice"===t.id&&t.version&&t.version<=4&&h._patchOldVolumeProfiles(0,o.graphics),"VbPSessions@tv-volumebyprice"===t.id&&t.version&&t.version<=4&&h._patchOldVolumeProfiles(0,o.graphics);var l=p.versionOf(t);if(t.isTVScript&&t.TVScriptSourceCode&&l>=12&&l<=26){var a=o.columns;o.columns=[];for(var u=0;u<a.length;++u){var c="plot_"+u;o.columns.push(c)}}return{data:o,nsData:r,indexes:s}}static _patchOldVolumeProfiles(t,e){var i=e.hhists[t].data,n=[];for(var o in i)n=n.concat(i[o]);e.hhists[0].data=n}static _fixInputsOrder(t,e){for(var i=p.getOrderedInputIds(e),n=h.splitInputs(t.inputs),o=n.arr,r=n.obj,s=TradingView.merge({},r),l=0;l<i.length;++l){var a=i[l],u=h.findInputKeyById(o,a);if(null!==u){var d=o[u];s[l]=d}}t.inputs=s}static _verifyInputsMaxValue(t){if(t.inputs)for(var e=0;e<t.inputs.length;e++){var i=t.inputs[e];"integer"===i.type&&(i.max&&i.max>1e12&&r.logWarn("Bad integer input max value in metaInfo id="+t.id+" title="+t.description))}}static _fixInputsMaxValue(t,e){if(!TradingView.isAbsent(e)){var i=f;if(e.inputs)for(var n=0;n<e.inputs.length;n++){"integer"===(l=e.inputs[n]).type&&(l.max&&l.max>i&&(l.max=i))}if(t&&t.inputs){var o=h.splitInputs(t.inputs),r=o.arr;for(var s in r){var l;"integer"===(l=r[s]).type&&(l.max&&l.max>i&&(l.max=i))}t.inputs=TradingView.merge(o.obj,o.arr)}}}patchPropsStateAndMetaInfo(t,e,i){"Script$BOOKER"!==e.productId||e.alerts||delete t.alerts,h._fixInputsOrder(t,e),h._fixInputsMaxValue(t,e);var n=h.splitInputs(t.inputs);t.inputs=n.obj;var o=p.versionOf(e);o<p.METAINFO_FORMAT_VERSION_SOS_V2&&e.isChildStudy&&(t.isChildStudy=e.isChildStudy);if(e.isTVScript&&e.version<60&&("Script$TV_EARNINGS@tv-scripting"!==e.id&&"Script$TV_DIVIDENDS@tv-scripting"!==e.id&&"Script$TV_SPLITS@tv-scripting"!==e.id||delete e.TVScriptSourceCode),
"Volume"!==e.id&&"Volume@tv-basicstudies"!==e.id||0!==e.inputs.length||(e.inputs=[{id:"length",type:"integer",defval:20,min:1,max:1e3}],e.plots.push({id:"vol_ma",type:"line"})),"Volume@tv-basicstudies"===e.id&&e.version&&e.version<=46&&void 0===t.styles.vol.transparency&&(t.styles.vol.transparency=t.transparency||87),"PivotPointsStandard@tv-basicstudies"===e.id&&(0===e.inputs.length?(t.inputs={kind:"Traditional",showHistoricalPivots:!0},e.inputs=[{defval:"Traditional",id:"kind",type:"text",options:["Traditional","Fibonacci","Woodie","Classic","DeMark","Camarilla"]},{id:"showHistoricalPivots",type:"bool",defval:!0}]):1===e.inputs.length&&(t.inputs={kind:"Traditional"},e.inputs=[{defval:"Traditional",id:"kind",type:"text",options:["Traditional","Fibonacci","Woodie","Classic","DeMark","Camarilla"]},{id:"showHistoricalPivots",type:"bool",defval:!0}]),void 0===t._hardCodedDefaultsVersion)){t._hardCodedDefaultsVersion=1;var r=t.color;delete t.color,t.levelsStyle={colors:{P:r,"S1/R1":r,"S2/R2":r,"S3/R3":r,"S4/R4":r,"S5/R5":r}}}"CMF"===e.shortId&&2===e.inputs.length&&(t.inputs={length:t.inputs["length fast"]},e.inputs=e.inputs.splice(0,1),e.inputs[0].id="length"),e.defaults&&void 0===e.defaults.precision&&o<p.VERSION_NEW_STUDY_PRECISION_FORMAT&&(-1!==["Volume@tv-basicstudies","VbPVisible@tv-volumebyprice","VbPSessions@tv-volumebyprice"].indexOf(e.id)?e.defaults.precision=0:e.defaults.precision=4);if(e.version<60)for(var s=["TV_DIVIDENDS","TV_SPLITS","TV_EARNINGS"],l="Script".length,a=0;a<s.length;a++)e.id.startsWith("Script$"+s[a]+"@tv-scripting")&&(e.fullId="ESD"+e.fullId.substring(l),e.id="ESD"+e.id.substring(l),e.name="ESD"+e.name.substring(l),e.shortId="ESD"+e.shortId.substring(l),e.productId="ESD"+e.productId.substring(l));var u={"ESD$TV_EARNINGS@tv-scripting":{fullId:"Earnings@tv-basicstudies-129!",id:"Earnings@tv-basicstudies",name:"Earnings@tv-basicstudies",shortId:"Earnings",productId:"tv-basicstudies"},"ESD$TV_SPLITS@tv-scripting":{fullId:"Splits@tv-basicstudies-129!",id:"Splits@tv-basicstudies",name:"Splits@tv-basicstudies",shortId:"Splits",productId:"tv-basicstudies"},"ESD$TV_DIVIDENDS@tv-scripting":{fullId:"Dividends@tv-basicstudies-129!",id:"Dividends@tv-basicstudies",name:"Dividends@tv-basicstudies",shortId:"Dividends",productId:"tv-basicstudies"}};if(e.id in u&&Object.assign(e,u[e.id]),o<p.VERSION_PINE_PROTECT_TV_4164){var d={"StrategyScript$STD;Consecutive%1Ups/Downs%1Strategy":{pineId:"STD;Consecutive%1Ups%1Downs%1Strategy",className:"StrategyScript"},Script$EDGR_NET_INCOME_FROM_CONTINUING_OPERATIONS_APPLICABLE_TO_COMMON_V2:{pineId:"Script$EDGR_NET_INCOME_FROM_CONTINUING_OPS_APPLICABLE_TO_COMMON_V2",className:"Script"}};if(e.shortId in d){var f=d[e.shortId].className+"$"+d[e.shortId].pineId,g={scriptIdPart:d[e.shortId].pineId,fullId:e.fullId.replace(e.shortId,f),id:e.id.replace(e.shortId,f),name:e.name.replace(e.shortId,f),shortId:f};TradingView.merge(e,g),TradingView.merge(t,g)}var y=c(e.fullId),m=y&&y.match(/^(USER)(_\d+)(;)(.*)$/);if(m){var T=m[0],I=m[1]+m[3]+m[2]+m[4];g={scriptIdPart:I,
fullId:e.fullId.replace(T,I),id:e.id.replace(T,I),name:e.name.replace(T,I),shortId:e.shortId.replace(T,I)};TradingView.merge(e,g),TradingView.merge(t,g)}}if("MA"===e.id){var S=new p({id:"MAExp",properties:[{id:"is_price_study",type:"bool",value:"true"}],inputs:[{id:"length",type:"integer",defval:20,min:1,max:500},{id:"source",type:"text",defval:"close",options:["open","high","low","close"]}],plots:[{id:"MovAvgExp",type:"line"}],palettes:{}}),b=new p({id:"MASimple",properties:[{id:"is_price_study",type:"bool",value:"true"}],inputs:[{id:"length",type:"integer",defval:20,min:1,max:500},{id:"source",type:"text",defval:"close",options:["open","high","low","close"]}],plots:[{id:"MovAvgSimple",type:"line"}],palettes:{}}),_=new p({id:"MAVolumeWeighted",properties:[{id:"is_price_study",type:"bool",value:"true"}],inputs:[{id:"length",type:"integer",defval:20,min:1,max:500},{id:"source",type:"text",defval:"close",options:["open","high","low","close"]}],plots:[{id:"MovAvgVolumeWeighted",type:"line"}],palettes:{}}),V=new p({id:"MAWeighted",properties:[{id:"is_price_study",type:"bool",value:"true"}],inputs:[{id:"length",type:"integer",defval:20,min:1,max:500},{id:"source",type:"text",defval:"close",options:["open","high","low","close"]}],plots:[{id:"MovAvgWeighted",type:"line"}],palettes:{}});switch(t.inputs.type){case"exp":e=S;break;case"simple":e=b;break;case"weighted":e=V;break;case"volume weighted":e=_}t.styles[e.plots[0].id]=t.styles.MovAvg,delete t.styles.MovAvg,delete t.inputs.type}return i.oldShowStudyLastValueProperty&&(t.oldShowLastValue=t.showLastValue),delete t.showLastValue,delete t.showStudyArguments,v(e,t),{propsState:t,metaInfo:e}}static mergeInputs(t,e){h.mergeInputsArrPart(t,e),h.mergeInputsObjPart(t,e)}static mergeInputsArrPart(t,e){var i=h.splitInputs(e);for(var n in i.arr){var o=h.findInputKeyById(t,i.arr[n].id);o?TradingView.merge(t[o],i.arr[n]):h.appendInputInfoToArr(t,i.arr[n])}}static mergeInputsObjPart(t,e){var i=h.splitInputs(e);TradingView.merge(t,i.obj)}static appendInputInfoToArr(t,e){var i=-1;for(var n in t){var o=parseInt(n,10);isNumber(o)&&(o>i&&(i=o))}t[i+1]=e}static splitInputs(t){var e={},i={};for(var n in t)isNumber(parseInt(n,10))?e[n]=t[n]:i[n]=t[n];return{arr:e,obj:i}}static findInputKeyById(t,e){var i=null;for(var n in t)if(isNumber(parseInt(n,10))&&t[n].id===e){i=n;break}return i}static getInputKeyById(t,e){var i=h.findInputKeyById(t,e);if(!i)throw new Error("Cannot find input with id: "+e);return i}}},168883:(t,e,i)=>{i.d(e,{translatedIntervalString:()=>o});var n=i(731042);function o(t){const e=(0,n.getTranslatedResolutionModel)(t,!0);return null===e?t:e.multiplier+(e.mayOmitShortKind?"":e.shortKind)}},782856:(t,e,i)=>{var n;i.d(e,{DataSourceDangerReason:()=>n}),function(t){t.Spread="spread",t.PineRepainting="pine-repainting",t.CryptoCap="cryptocap"}(n||(n={}))},168682:(t,e,i)=>{var n=i(552698).isStudyStateForAlertType,o=i(368135),r=i(29469).generateTitleForGui,s=i(201089).getLogger("Alerts.Band"),l=i(444331),a=i(31341),u=i(918208).lineToolsLocalizedNames
;TradingView="object"==typeof i.g?i.g.TradingView:TradingView||{};var d={create:function(t){var e,i=t||{},o=i.type;if("MainSeries"===o)e=c;else if(n(o,!0))e=v;else if("Value"===o)e=f;else{if(!/^LineTool.*/i.test(o))return s.logError("Unknown alert band type "+o),null;e=h}return new e(i)}};function p(t){this._band=t||{}}function c(){p.apply(this,arguments)}function v(){p.apply(this,arguments)}function f(){p.apply(this,arguments)}function h(){p.apply(this,arguments)}p.prototype.id=function(){return this._band.id},p.prototype.type=function(){return this._band.type},p.prototype.title=function(){return this._band.title},p.prototype.isTVScript=function(){return this._band.isTVScript},p.prototype.scriptVersion=function(){return this._band.scriptVersion},p.prototype.hasPlots=function(){return this._band.plots&&this._band.plots.length},p.prototype.getActualSymbol=function(){return this._band.actualSymbol},p.prototype.getSymbolString=function(){return this._band.symbolString},p.prototype.getPlotTitle=function(t){return t.title?t.title:o.isOhlcOpenPlot(t)?t.ohlcTitle+" "+i.tf(null,void 0,i(539280)):o.isOhlcHighPlot(t)?t.ohlcTitle+" "+i.tf(null,void 0,i(330777)):o.isOhlcLowPlot(t)?t.ohlcTitle+" "+i.tf(null,void 0,i(608136)):o.isOhlcClosePlot(t)?t.ohlcTitle+" "+i.tf(null,void 0,i(931691)):"vol"===t.id?i.tf(null,void 0,i(101111)):"vol_ma"===t.id?i.tf(null,void 0,i(932998)):"open"===t.id?i.tf(null,void 0,i(539280)):"high"===t.id?i.tf(null,void 0,i(330777)):"low"===t.id?i.tf(null,void 0,i(608136)):"close"===t.id?i.tf(null,void 0,i(931691)):t.id},p.prototype.getPlots=function(t){var e=t||{};if(!this._band.plots||!this._band.plots.length)return this._band.plots;if("inputSelect"===e.format){var i=-1;return this._band.plots.map((function(t){return{value:++i,title:this.getPlotTitle(t)}}),this)}return this._band.plots},p.prototype.hasUsualPlots=function(){var t=this._band.plots;return!t||t.filter(o.isAlertConditionPlot).length<t.length},p.prototype.getInputs=function(){return{}},inherit(c,p),c.prototype.title=function(t){var e=i(59171),n=t||{},o=!!n.withInterval,s=this._band.actualSymbol;return e&&(s=e.shortName(s)),r({symbol:s,interval:o?this._band.interval:void 0,style:this._band.style,inputs:this._band.styleInputs||{},boxSize:this._band.boxSize,reversalAmount:this._band.reversalAmount,sessionDescription:n.sessionDescription})},c.prototype.getInterval=function(){return this._band.interval},c.prototype.getStyle=function(){return this._band.style},c.prototype.getStyleInputs=function(){return this._band.styleInputs},c.prototype.isRangeBasedStyle=function(){return l.isRangeBasedStyle(this._band.style)},c.prototype.isSpread=function(){return this._band.isSpread},c.prototype.sessionId=function(){return this._band.sessionId},c.prototype.sessionDescription=function(){return this._band.sessionDescription},c.prototype.getDividendsAdjustment=function(){return this._band.dividendsAdjustment},c.prototype.getBackAdjustment=function(){return this._band.backAdjustment},c.prototype.getSettlementAsClose=function(){return this._band.settlementAsClose},
inherit(v,p),v.prototype.title=function(t){var e,n,o,r=t||{},s=r.withPlotTitle,l=this._band;return r.short&&l.shortTitle?e=l.shortTitle:l.title?e=l.title:(e=l.shortDescription||"Study",n=[],Object.keys(l.inputs).forEach((function(t){var e=l.inputs[t]&&l.inputs[t].id;e&&!l.inputs[t].isHidden&&void 0!==l.inputs[e]&&n.push(l.inputs[e])})),n.length&&(e+=" ("+n.join(", ")+")")),s&&(o=this.selectedPlot())&&(e+=" "+(o.title||i.tf(null,void 0,i(886950)))),a.isRtl()&&(e=a.forceLTRStr(e)),e},v.prototype.selectedPlot=function(){var t=this._band;return void 0===t.plotIndex?null:this.getPlots().filter((function(e){return e.value===t.plotIndex}))[0]||null},v.prototype.getInputs=function(){return this._band.inputs||{}},v.prototype.isTVLibrary=function(){return this._band.isTVLibrary||!1},inherit(f,p),f.prototype.title=function(t){var e=this._band.value||0;return t.formatter?t.formatter.format(parseFloat(e)):parseFloat(e).toString()},inherit(h,p),h.prototype.title=function(){return u[this._band.type]||this.title()},t.exports.AlertBandAbstract=p,t.exports.AlertBandValue=f,t.exports.AlertBandStudy=v,t.exports.alertBandFactory=d},552698:(t,e,i)=>{var n;function o(t,e){let i="Study"===t||t===n.StudyLineTool||/^study_\w+/.test(t);return e&&(i=i||"StudyStrategy"===t),i}i.r(e),i.d(e,{StateForAlertType:()=>n,isStudyStateForAlertType:()=>o}),function(t){t.StudyLineTool="StudyLineTool"}(n||(n={}))},735337:(t,e,i)=>{i.d(e,{showGoProAlertsOnSecondsDialog:()=>o});var n=i(960337);function o(){(0,n.createGoProDialog)({feature:"alertsOnSeconds"})}},103221:(t,e,i)=>{function n(t){let e;if("object"!=typeof t||null==t||"number"==typeof t.nodeType)e=t;else if(t instanceof Date)e=new Date(t.valueOf());else if(Array.isArray(t)){e=[];let i=0;const o=t.length;for(;i<o;i++)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=n(t[i]))}else{e={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=n(t[i]))}return e}i.d(e,{deepCopy:()=>n})},97948:(t,e,i)=>{function n(t,e){e||(e={}),"function"==typeof e&&(e={cmp:e});var i=e.space||"";"number"==typeof i&&(i=Array(i+1).join(" "));var n,s="boolean"==typeof e.cycles&&e.cycles,l=e.replacer||function(t,e){return e},a=e.cmp&&(n=e.cmp,function(t){return function(e,i){var o={key:e,value:t[e]},r={key:i,value:t[i]};return n(o,r)}}),u=[];return function t(e,n,d,p){var c=i?"\n"+new Array(p+1).join(i):"",v=i?": ":":";if(d&&d.toJSON&&"function"==typeof d.toJSON&&(d=d.toJSON()),void 0!==(d=l.call(e,n,d))){if("object"!=typeof d||null===d)return JSON.stringify(d);if(o(d)){for(var f=[],h=0;h<d.length;h++){var g=t(d,h,d[h],p+1)||JSON.stringify(null);f.push(c+i+g)}return"["+f.join(",")+c+"]"}if(-1!==u.indexOf(d)){if(s)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}u.push(d);var y=r(d).sort(a&&a(d));for(f=[],h=0;h<y.length;h++){var m=t(d,n=y[h],d[n],p+1);if(m){var T=JSON.stringify(n)+v+m;f.push(c+i+T)}}return u.splice(u.indexOf(d),1),"{"+f.join(",")+c+"}"}}({"":t},"",t,0)}i.d(e,{sortedStringify:()=>n});var o=Array.isArray||function(t){
return"[object Array]"==={}.toString.call(t)},r=Object.keys||function(t){var e=Object.prototype.hasOwnProperty||function(){return!0},i=[];for(var n in t)e.call(t,n)&&i.push(n);return i}}}]);
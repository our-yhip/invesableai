(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[5023],{668477:o=>{o.exports={"common-tooltip":"common-tooltip-EJBD96zX","common-tooltip--hidden":"common-tooltip--hidden-EJBD96zX","common-tooltip--horizontal":"common-tooltip--horizontal-EJBD96zX","common-tooltip--farther":"common-tooltip--farther-EJBD96zX","common-tooltip--vertical":"common-tooltip--vertical-EJBD96zX","common-tooltip-farther":"common-tooltip-farther-EJBD96zX","common-tooltip--direction_normal":"common-tooltip--direction_normal-EJBD96zX","common-tooltip__body":"common-tooltip__body-EJBD96zX","common-tooltip__button-container":"common-tooltip__button-container-EJBD96zX","common-tooltip__body--no-buttons":"common-tooltip__body--no-buttons-EJBD96zX","common-tooltip__button":"common-tooltip__button-EJBD96zX","common-tooltip--direction_reversed":"common-tooltip--direction_reversed-EJBD96zX","common-tooltip__ear-holder":"common-tooltip__ear-holder-EJBD96zX","common-tooltip__ear-holder--below":"common-tooltip__ear-holder--below-EJBD96zX","common-tooltip__ear-holder--above":"common-tooltip__ear-holder--above-EJBD96zX","common-tooltip__ear-holder--before":"common-tooltip__ear-holder--before-EJBD96zX","common-tooltip__ear-holder--after":"common-tooltip__ear-holder--after-EJBD96zX","common-tooltip__body--with-hotkey":"common-tooltip__body--with-hotkey-EJBD96zX","common-tooltip__body--width_wide":"common-tooltip__body--width_wide-EJBD96zX","common-tooltip__body--width_narrow":"common-tooltip__body--width_narrow-EJBD96zX","common-tooltip__body--no-padding":"common-tooltip__body--no-padding-EJBD96zX","common-tooltip__hotkey-block":"common-tooltip__hotkey-block-EJBD96zX","common-tooltip__hotkey-block--divider":"common-tooltip__hotkey-block--divider-EJBD96zX","common-tooltip__hotkey-text":"common-tooltip__hotkey-text-EJBD96zX","common-tooltip__hotkey-button":"common-tooltip__hotkey-button-EJBD96zX","common-tooltip__plus-sign":"common-tooltip__plus-sign-EJBD96zX"}},645300:o=>{o.exports={}},764250:(o,e,r)=>{"use strict";r.d(e,{ActionGroup:()=>l});class t{constructor(o,e){this._group=o,this.hotkey=e.hotkey,this.handler=e.handler,this.desc=e.desc,this.element=e.element||null,e.isDisabled?"function"==typeof e.isDisabled?this.isDisabled=e.isDisabled:this.isDisabled=()=>!0:this.isDisabled=()=>!1}destroy(){this._group&&(this._group.remove(this),this._group=null)}}class l{constructor(o,e){this._actions=[],this._manager=o,this.modal=!(!e||!e.modal),e&&(this.desc=e.desc),e&&e.isDisabled?"function"==typeof e.isDisabled?this.isDisabled=e.isDisabled:this.isDisabled=()=>!0:this.isDisabled=()=>!1,this._manager.registerGroup(this)}add(o){const e=new t(this,o);return this._actions.push(e),e}remove(o){for(let e=this._actions.length;e-- >0;)this._actions[e]===o&&this._actions.splice(e,1)}handleHotkey(o,e){for(let r=this._actions.length;r-- >0;){const t=this._actions[r];if(t.hotkey===o&&((!t.element||e.target&&t.element.contains(e.target))&&!t.isDisabled()))return t.handler(e),e.preventDefault(),this._callMatchedHotkeyHandler(o),!0}return!1}promote(){
this._manager.promoteGroup(this)}destroy(){this._actions.length=0,this._manager.unregisterGroup(this)}static setMatchedHotkeyHandler(o){l._matchedHotkeyHandler=o}_callMatchedHotkeyHandler(o){l._matchedHotkeyHandler&&l._matchedHotkeyHandler(o)}}},163586:(o,e,r)=>{"use strict";r.d(e,{ActionManager:()=>i});var t=r(91679),l=r(591800),c=r(607423);class n{constructor(o,e){this.modifiers=o,this.code=e}altOrOptionCode(){return"AltLeft"===this.code||"AltRight"===this.code}controlOrMetaCode(){return l.isMacKeyboard?"MetaLeft"===this.code||"MetaRight"===this.code||"OSLeft"===this.code||"OSRight"===this.code:"ControlLeft"===this.code||"ControlRight"===this.code}}class a extends t.WatchedValue{setValue(o,e){const r=this.value();(e||void 0===r||r.code!==o.code||r.modifiers!==o.modifiers)&&super.setValue(o)}}class i{constructor(){this._groups=[],this._pressedKeys=new t.WatchedValue(0),this._keyboardPressedKeysState=new a(new n(0)),this._keyDownListener=o=>{if(o.defaultPrevented)return;const e=(0,l.hashFromEvent)(o);if(this._pressedKeys.setValue(e),this._keyboardPressedKeysState.setValue(new n((0,l.modifiersFromEvent)(o),o.code)),!(0,c.isNativeUIInteraction)(e,o.target))for(let r=this._groups.length;r-- >0;){const t=this._groups[r];if(!t.isDisabled()){if(t.handleHotkey(e,o))return;if(t.modal)return}}},this._keyUpListener=o=>{const e=(0,l.hashFromEvent)(o);this._pressedKeys.setValue(e),this._keyboardPressedKeysState.setValue(new n((0,l.modifiersFromEvent)(o),""))},this._blurEvent=()=>{this._pressedKeys.setValue(0),this._keyboardPressedKeysState.setValue(new n(0,""))},this._mouseEvent=o=>{var e;const r=(0,l.modifiersFromEvent)(o),t=255&(null!==(e=this._pressedKeys.value())&&void 0!==e?e:0);this._pressedKeys.setValue(r|t)}}listen(o){o.addEventListener("keydown",this._keyDownListener),o.addEventListener("keyup",this._keyUpListener),o.addEventListener("blur",this._blurEvent),o.addEventListener("mousemove",this._mouseEvent)}unlisten(o){o.removeEventListener("keydown",this._keyDownListener),o.removeEventListener("keyup",this._keyUpListener),o.removeEventListener("blur",this._blurEvent),o.removeEventListener("mousemove",this._mouseEvent)}registerGroup(o){this._groups.push(o)}unregisterGroup(o){for(let e=this._groups.length;e--;)this._groups[e]===o&&this._groups.splice(e,1)}promoteGroup(o){let e=this._groups.length-1;for(let r=this._groups.length;r--;){if(this._groups[r]===o)return void(r!==e&&(this._groups.splice(r,1),this._groups.splice(e,0,o)));this._groups[r].modal&&(e=r-1)}}pressedKeys(){return this._pressedKeys.readonly()}keyboardPressedKeysState(){return this._keyboardPressedKeysState.readonly()}}},129592:(o,e,r)=>{"use strict";r.d(e,{createGroup:()=>n,registerWindow:()=>a});var t=r(163586),l=r(764250);r(591800);const c=new t.ActionManager;c.pressedKeys(),c.keyboardPressedKeysState();function n(o){return new l.ActionGroup(c,o)}function a(o){c.listen(o)}},591800:(o,e,r)=>{"use strict";r.d(e,{Modifiers:()=>c,hashFromEvent:()=>a,humanReadableHash:()=>s,isMacKeyboard:()=>l,modifiersFromEvent:()=>n});var t=r(167175)
;const l=t.isMac||t.isIOS;var c;function n(o){let e=0;return o.shiftKey&&(e+=1024),o.altKey&&(e+=512),o.ctrlKey&&(e+=256),o.metaKey&&(e+=2048),e}function a(o){return n(o)|o.keyCode}!function(o){o[o.None=0]="None",o[o.Alt=512]="Alt",o[o.Shift=1024]="Shift",o[o.Mod=l?2048:256]="Mod",o[o.Control=256]="Control",o[o.Meta=2048]="Meta"}(c||(c={}));const i={9:"⇥",13:"↵",27:"Esc",8:l?"⌫":"Backspace",32:"Space",35:"End",36:"Home",37:"←",38:"↑",39:"→",40:"↓",45:"Ins",46:"Del",188:",",191:"/"};for(let o=1;o<=16;o++)i[o+111]=`F${o}`;function s(o){let e=function(o,e=!l){let r="";return 256&o&&(r+=l?"^":"Ctrl",e&&(r+=" + ")),512&o&&(r+=l?"⌥":"Alt",e&&(r+=" + ")),1024&o&&(r+=l?"⇧":"Shift",e&&(r+=" + ")),2048&o&&(r+=l?"⌘":"Win",e&&(r+=" + ")),r}(o);const r=255&o;return e+=r in i?i[r]:String.fromCharCode(r),e}},987088:(o,e,r)=>{"use strict";r.d(e,{colorsPalette:()=>g})
;const t=JSON.parse('{"color-white":"#ffffff","color-black":"#000000","color-cold-gray-50":"#F8F9FD","color-cold-gray-100":"#F0F3FA","color-cold-gray-150":"#E0E3EB","color-cold-gray-200":"#D1D4DC","color-cold-gray-250":"#C1C4CD","color-cold-gray-300":"#B2B5BE","color-cold-gray-350":"#A3A6AF","color-cold-gray-400":"#9598A1","color-cold-gray-450":"#868993","color-cold-gray-500":"#787B86","color-cold-gray-550":"#6A6D78","color-cold-gray-600":"#5D606B","color-cold-gray-650":"#50535E","color-cold-gray-700":"#434651","color-cold-gray-750":"#363A45","color-cold-gray-800":"#2A2E39","color-cold-gray-850":"#1E222D","color-cold-gray-900":"#131722","color-cold-gray-950":"#0C0E15","color-ripe-red-50":"#FFEBEC","color-ripe-red-100":"#FCCBCD","color-ripe-red-200":"#FAA1A4","color-ripe-red-300":"#F77C80","color-ripe-red-400":"#F7525F","color-ripe-red-500":"#F23645","color-ripe-red-600":"#CC2F3C","color-ripe-red-700":"#B22833","color-ripe-red-800":"#991F29","color-ripe-red-900":"#801922","color-ripe-red-a100":"#FF8080","color-ripe-red-a200":"#FF5252","color-ripe-red-a400":"#FF3333","color-ripe-red-a600":"#CC2929","color-ripe-red-a700":"#802028","color-ripe-red-a800":"#4D191D","color-ripe-red-a900":"#331F20","color-tan-orange-50":"#FFF3E0","color-tan-orange-100":"#FFE0B2","color-tan-orange-200":"#FFCC80","color-tan-orange-300":"#ffb74d","color-tan-orange-400":"#FFA726","color-tan-orange-500":"#FF9800","color-tan-orange-600":"#FB8C00","color-tan-orange-700":"#F57C00","color-tan-orange-800":"#EF6C00","color-tan-orange-900":"#e65100","color-tan-orange-a200":"#ffab40","color-tan-orange-a400":"#FF9100","color-tan-orange-a600":"#CC7014","color-tan-orange-a700":"#8C541C","color-tan-orange-a800":"#593A1B","color-tan-orange-a900":"#33261A","color-iguana-green-100":"#C8E6C9","color-iguana-green-200":"#A5D6A7","color-iguana-green-300":"#81c784","color-iguana-green-400":"#66BB6A","color-iguana-green-500":"#4caf50","color-iguana-green-600":"#43a047","color-iguana-green-700":"#388e3c","color-iguana-green-800":"#2E7D32","color-iguana-green-900":"#1B5E20","color-iguana-green-a700":"#00c853","color-banana-yellow-100":"#FFF9C4","color-banana-yellow-200":"#FFF59D","color-banana-yellow-300":"#FFF176","color-banana-yellow-400":"#ffee58","color-banana-yellow-500":"#ffeb3b","color-banana-yellow-600":"#fdd835","color-banana-yellow-700":"#fbc02d","color-banana-yellow-800":"#f9a825","color-banana-yellow-900":"#F57F17","color-banana-yellow-a400":"#ffea00","color-banana-yellow-a700":"#ffd600","color-tv-blue-50":"#E3EFFD","color-tv-blue-100":"#BBD9FB","color-tv-blue-200":"#90BFF9","color-tv-blue-300":"#5B9CF6","color-tv-blue-400":"#3179F5","color-tv-blue-500":"#2962FF","color-tv-blue-600":"#1E53E5","color-tv-blue-700":"#1848CC","color-tv-blue-800":"#143EB3","color-tv-blue-900":"#0C3299","color-tv-blue-a100":"#82b1ff","color-tv-blue-a200":"#448aff","color-tv-blue-a400":"#2979ff","color-tv-blue-a600":"#2962FF","color-tv-blue-a700":"#143A87","color-tv-blue-a800":"#142E61","color-tv-blue-a900":"#132042","color-deep-blue-50":"#EDE7F6","color-deep-blue-100":"#D1C4E9","color-deep-blue-200":"#B39DDB","color-deep-blue-300":"#9575cd","color-deep-blue-400":"#7e57c2","color-deep-blue-500":"#673ab7","color-deep-blue-700":"#512da8","color-deep-blue-800":"#4527A0","color-deep-blue-900":"#311B92","color-deep-blue-a100":"#b388ff","color-deep-blue-a200":"#7C4DFF","color-deep-blue-a400":"#651FFF","color-deep-blue-a700":"#6200EA","color-minty-green-50":"#DAF2EE","color-minty-green-100":"#ACE5DC","color-minty-green-200":"#70CCBD","color-minty-green-300":"#42BDA8","color-minty-green-400":"#22AB94","color-minty-green-500":"#089981","color-minty-green-600":"#06806B","color-minty-green-700":"#056656","color-minty-green-800":"#004D40","color-minty-green-900":"#00332A","color-minty-green-a400":"#2BD9BC","color-minty-green-a700":"#24B29B","color-minty-green-a900":"#082621","color-grapes-purple-50":"#F3E5F5","color-grapes-purple-100":"#E1BEE7","color-grapes-purple-200":"#CE93D8","color-grapes-purple-300":"#ba68c8","color-grapes-purple-400":"#ab47bc","color-grapes-purple-500":"#9c27b0","color-grapes-purple-600":"#8e24aa","color-grapes-purple-700":"#7b1fa2","color-grapes-purple-800":"#6A1B9A","color-grapes-purple-900":"#4A148C","color-grapes-purple-a100":"#EA80FC","color-grapes-purple-a200":"#E040FB","color-grapes-purple-a400":"#D500F9","color-grapes-purple-a700":"#aa00ff","color-berry-pink-100":"#F8BBD0","color-berry-pink-200":"#f48fb1","color-berry-pink-300":"#f06292","color-berry-pink-400":"#ec407a","color-berry-pink-500":"#e91e63","color-berry-pink-600":"#D81B60","color-berry-pink-700":"#C2185B","color-berry-pink-800":"#AD1457","color-berry-pink-900":"#880E4F","color-berry-pink-a100":"#ff80ab","color-berry-pink-a200":"#ff4081","color-berry-pink-a400":"#f50057","color-sky-blue-100":"#B2EBF2","color-sky-blue-200":"#80DEEA","color-sky-blue-300":"#4dd0e1","color-sky-blue-400":"#26c6da","color-sky-blue-500":"#00bcd4","color-sky-blue-600":"#00acc1","color-sky-blue-700":"#0097A7","color-sky-blue-800":"#00838F","color-sky-blue-900":"#006064","color-sky-blue-a400":"#00e5ff","color-sky-blue-a700":"#00B8D4","color-deep-blue-600":"#5E35B1","color-forest-green-50":"#DAF2E6","color-forest-green-100":"#ACE5C9","color-forest-green-200":"#70CC9E","color-forest-green-300":"#42BD7F","color-forest-green-400":"#22AB67","color-forest-green-500":"#089950","color-forest-green-600":"#068043","color-forest-green-700":"#056636","color-forest-green-800":"#004D27","color-forest-green-900":"#1A3326","color-facebook":"#1877F2","color-deep-facebook":"#1564CA","color-twitter":"#1DA1F2","color-deep-twitter":"#188CD3","color-youtube":"#FF0000","color-linkedin":"#007BB5","color-aqua-spring":"#ebf9f5","color-army-green":"#3d2c12","color-army-green-2":"#31230d","color-athens-gray-1":"#f2f3f5","color-athens-gray-2":"#f7f8fa","color-athens-gray-3":"#eceff2","color-black-180":"#b4b4b4","color-blue-dianne":"#21384d","color-bluish":"#2185cc","color-bright-gray":"#363c4e","color-brownish-grey":"#8d6e63","color-carnation":"#f04561","color-catskill-white":"#e1ecf2","color-charade":"#2f3241","color-charcoal-grey":"#323337","color-curious-blue":"#299dcd","color-dark-blue-grey":"#123440","color-darkness-blue-grey":"#12213b","color-dark-grey":"#292a2d","color-dark-grey-blue":"#28415a","color-dark-sky-blue":"#37a6ef","color-deep-sea-blue":"#016087","color-ebony-clay":"#262b3e","color-foam":"#d7f0fb","color-gull-gray":"#9db2bd","color-humming-bird":"#d3eef9","color-keppel-1":"#37bc9b","color-keppel-2":"#34b293","color-lavender-blush":"#ffedf0","color-lightish-purple":"#a75ee8","color-loblolly":"#c5cbce","color-manatee":"#878ca8","color-mandy":"#eb4d5c","color-medium-blue":"#2e7bb2","color-milk-chocolate":"#6f2626","color-mirage-1":"#131722","color-mirage-2":"#171b29","color-mirage-3":"#1c2030","color-mischka":"#d6d8e0","color-morning-glory":"#9addcc","color-oslo-gray":"#8b8e95","color-pale":"#fff2cf","color-pale-grey-1":"#f9fafb","color-pale-grey-2":"#e7ebee","color-pale-sky":"#6b7988","color-picton-blue-1":"#3bb3e4","color-puerto-rico":"#3bc2a1","color-purple-brown":"#4e2934","color-purple-brown-2":"#3d2028","color-radical-red":"#ff4a68","color-regent-gray":"#8797a5","color-scooter":"#38acdb","color-silver-tree":"#53b987","color-slate-gray":"#758696","color-sundown":"#ffa4b3","color-sunglow":"#ffca3b","color-tan-hide":"#ff9850","color-trout-1":"#4c525e","color-trout-2":"#4f5966","color-violet-1":"#332738","color-violet-2":"#271d2b","color-white-ice":"#ebf7fc","color-wild-watermelon":"#ff5773","color-readonly-input":"#b4b4b4","color-brand-dark":"#2a2c39","color-seeking-alpha-brand":"#ff7200"}'),l=JSON.parse('{"color-header-bg":"color-white","color-body-bg":"color-white","color-body-secondary-bg":"color-cold-gray-100","color-bg-primary":"color-white","color-bg-primary-hover":"color-cold-gray-100","color-bg-secondary":"color-white","color-bg-highlight":"color-cold-gray-50","color-bg-scroll-buttons":"color-cold-gray-100","color-legacy-bg-scroll-buttons":"color-cold-gray-850","color-legacy-bg-widget":"color-white","color-text-primary":"color-cold-gray-900","color-text-secondary":"color-cold-gray-550","color-text-tertiary":"color-cold-gray-400","color-text-disabled":"color-cold-gray-300","color-accent-content":"color-cold-gray-900","color-box-shadow":"color-cold-gray-300","color-divider":"color-cold-gray-150","color-divider-hover":"color-cold-gray-100","color-divider-secondary":"color-cold-gray-100","color-active-hover-text":"color-cold-gray-900","color-alert-text":"color-cold-gray-900","color-border-table":"color-cold-gray-100","color-brand":"color-tv-blue-500","color-brand-active":"color-tv-blue-700","color-brand-hover":"color-tv-blue-600","color-chart-page-bg":"color-cold-gray-150","color-common-tooltip-bg":"color-cold-gray-800","color-danger":"color-ripe-red-400","color-danger-hover":"color-ripe-red-500","color-danger-active":"color-ripe-red-600","color-depthrenderer-stroke-style":"color-cold-gray-100","color-halal":"color-iguana-green-400","color-continuous":"color-cold-gray-500","color-highlight-new":"color-tan-orange-50","color-input-bg":"color-white","color-input-publish-bg":"color-white","color-link":"color-tv-blue-500","color-link-hover":"color-tv-blue-600","color-link-active":"color-tv-blue-700","color-list-nth-child-bg":"color-cold-gray-50","color-pane-bg":"color-white","color-pane-secondary-bg":"color-cold-gray-100","color-popup-menu-item-hover-bg":"color-cold-gray-100","color-popup-menu-separator":"color-cold-gray-150","color-primary-symbol":"color-sky-blue-500","color-screener-description":"color-cold-gray-650","color-success":"color-minty-green-500","color-success-hover":"color-minty-green-600","color-success-active":"color-minty-green-700","color-toolbar-button-text":"color-cold-gray-900","color-toolbar-button-text-hover":"color-cold-gray-900","color-toolbar-button-text-active":"color-tv-blue-500","color-toolbar-button-text-active-hover":"color-tv-blue-600","color-toolbar-button-background-hover":"color-cold-gray-100","color-toolbar-button-background-secondary-hover":"color-cold-gray-150","color-toolbar-button-background-active":"color-tv-blue-50","color-toolbar-button-background-active-hover":"color-tv-blue-100","color-toolbar-toggle-button-background-active":"color-tv-blue-500","color-toolbar-toggle-button-background-active-hover":"color-tv-blue-600","color-toolbar-toggle-button-icon":"color-cold-gray-200","color-toolbar-interactive-element-text-normal":"color-cold-gray-900","color-toolbar-opened-element-bg":"color-cold-gray-100","color-toolbar-divider-background":"color-cold-gray-150","color-popup-background":"color-white","color-popup-element-text":"color-cold-gray-900","color-popup-element-text-hover":"color-cold-gray-900","color-popup-element-background-hover":"color-cold-gray-100","color-popup-element-secondary-text":"color-cold-gray-500","color-popup-element-hint-text":"color-cold-gray-400","color-popup-element-text-active":"color-white","color-popup-element-background-active":"color-tv-blue-500","color-popup-element-toolbox-text":"color-cold-gray-500","color-popup-element-toolbox-text-hover":"color-cold-gray-900","color-popup-element-toolbox-text-active-hover":"color-tv-blue-200","color-popup-element-toolbox-background-hover":"color-cold-gray-150","color-popup-element-toolbox-background-active-hover":"color-tv-blue-700","color-tooltip-bg":"color-cold-gray-800","color-tv-dialog-caption":"color-cold-gray-650","color-tv-dropdown-item-hover-bg":"color-cold-gray-100","color-underlined-text":"color-cold-gray-550","color-widget-pages-bg":"color-white","color-warning":"color-tan-orange-500","color-growing":"color-minty-green-500","color-falling":"color-ripe-red-500","color-forex-icon":"color-cold-gray-750","color-list-item-active-bg":"color-tv-blue-400","color-list-item-hover-bg":"color-tv-blue-50","color-list-item-text":"color-cold-gray-800","color-price-axis-label-back":"color-cold-gray-150","color-price-axis-label-text":"color-cold-gray-650","color-price-axis-gear":"color-cold-gray-900","color-price-axis-gear-hover":"color-black","color-price-axis-highlight":"color-cold-gray-150","color-bid":"color-tv-blue-500","color-border":"color-cold-gray-150","color-border-chat-fields":"color-cold-gray-250","color-border-hover":"color-cold-gray-250","color-button-hover-bg":"color-cold-gray-150","color-depthrenderer-fill-style":"color-cold-gray-650","color-disabled-border-and-color":"color-cold-gray-150","color-disabled-input":"color-cold-gray-150","color-empty-container-message":"color-cold-gray-550","color-icons":"color-cold-gray-550","color-input-textarea-readonly":"color-cold-gray-650","color-input-placeholder-text":"color-cold-gray-350","color-item-active-blue":"color-tv-blue-50","color-item-hover-active-bg":"color-tv-blue-100","color-item-hover-bg":"color-tv-blue-100","color-item-hover-blue":"color-tv-blue-100","color-item-selected-blue":"color-tv-blue-50","color-item-active-text":"color-white","color-item-active-bg":"color-tv-blue-500","color-list-item":"color-cold-gray-550","color-news-highlight":"color-tv-blue-100","color-placeholder":"color-cold-gray-350","color-row-hover-active-bg":"color-cold-gray-100","color-sb-scrollbar-body-bg":"color-cold-gray-200","color-section-separator-border":"color-cold-gray-300","color-separator-table-chat":"color-cold-gray-150","color-tag-active-bg":"color-cold-gray-200","color-tag-hover-bg":"color-cold-gray-150","color-text-regular":"color-cold-gray-700","color-tv-button-checked":"color-cold-gray-550","color-scroll-bg":"color-cold-gray-400","color-scroll-border":"color-cold-gray-100","color-widget-border":"color-cold-gray-100","color-scroll-buttons-arrow":"color-white","color-control-intent-default":"color-cold-gray-200","color-control-intent-success":"color-minty-green-500","color-control-intent-primary":"color-tv-blue-500","color-control-intent-warning":"color-tan-orange-500","color-control-intent-danger":"color-ripe-red-500","color-goto-label-background":"color-cold-gray-800","color-pre-market":"color-tan-orange-600","color-pre-market-bg":"color-tan-orange-400","color-post-market":"color-tv-blue-500","color-post-market-bg":"color-tv-blue-400","color-market-open":"color-minty-green-500","color-market-open-bg":"color-minty-green-400","color-market-closed":"color-cold-gray-400","color-market-holiday":"color-cold-gray-400","color-market-expired":"color-ripe-red-500","color-invalid-symbol":"color-ripe-red-400","color-invalid-symbol-hover":"color-ripe-red-700","color-replay-mode":"color-tv-blue-500","color-replay-mode-point-select":"color-cold-gray-350","color-replay-mode-icon":"color-white","color-replay-mode-hover":"color-tv-blue-600","color-notaccurate-mode":"color-berry-pink-600","color-delay-mode":"color-tan-orange-700","color-delay-mode-bg":"color-tan-orange-400","color-eod-mode":"color-grapes-purple-700","color-eod-mode-bg":"color-grapes-purple-400","color-data-problem":"color-ripe-red-600","color-data-problem-bg":"color-ripe-red-400","color-data-problem-hover":"color-ripe-red-700","color-list-item-bg-highlighted":"color-tv-blue-50","color-list-item-bg-selected":"color-tv-blue-100","color-list-item-bg-highlighted-hover":"color-tv-blue-100","color-list-item-bg-selected-hover":"color-tv-blue-200","color-screener-header-bg":"color-white","color-screener-header-bg-hover":"color-cold-gray-100","color-marker-flagged":"color-ripe-red-400","color-marker-flagged-hovered":"color-ripe-red-600","color-ask":"color-ripe-red-400","color-sell":"color-ripe-red-400","color-buy":"color-tv-blue-500","color-neutral":"color-cold-gray-550","color-pro":"color-minty-green-400","color-pro-hover":"color-minty-green-600","color-pro-plus":"color-tv-blue-500","color-pro-plus-hover":"color-tv-blue-600","color-pro-premium":"color-tan-orange-500","color-pro-premium-hover":"color-tan-orange-700","color-trial":"color-cold-gray-550","color-trial-hover":"color-cold-gray-550","color-mod":"color-ripe-red-400","color-mod-hover":"color-ripe-red-600","color-ad":"color-tan-orange-500","color-broker-featured":"color-minty-green-400","color-broker-featured-hover":"color-minty-green-600","color-alert-status-active":"color-minty-green-400","color-alert-status-stopped":"color-ripe-red-500","color-alert-status-triggered":"color-tan-orange-500","color-overlay":"color-cold-gray-400","color-search-button-hover":"color-cold-gray-150","color-boost-button-content-selected":"color-tv-blue-600","color-boost-button-content-hover":"color-cold-gray-900","color-boost-button-bg-hover":"color-cold-gray-150","color-boost-button-border-hover":"color-cold-gray-150","color-boost-button-border-default":"color-cold-gray-150","color-common-tooltip-text":"color-cold-gray-100","color-replay-data-mode":"color-radical-red","color-legacy-success":"color-keppel-1","color-collapse-tabs-border":"color-athens-gray-3","color-site-widget-hover":"color-athens-gray-1","color-attention":"color-sunglow","color-card-border":"color-cold-gray-150","color-card-border-hover":"color-cold-gray-300","color-background-special-primary":"color-white","color-stroke-special-primary":"color-cold-gray-150","color-selection-bg":"color-tv-blue-100","color-default-gray":"color-cold-gray-550","color-featured-broker-badge-bg":"color-cold-gray-900","color-featured-broker-badge-bg-hover":"color-cold-gray-800","color-featured-broker-badge-text":"color-white"}')
;var c=r(650151);const n={...t,...l},a={},i=Object.keys(n).length,s=/^#[0-9A-F]{6}$/i;function d(o,e=[]){const r=n[o];if(!r)return null;if(s.test(r))return r;const t=r;return e.push(o),-1!==e.indexOf(t)?(console.warn("Colors definitions cycled"),r):e.length>i?(console.warn("Too many variables-link in HEX-color search: "+e[0]),null):d(t,e)}Object.keys(n).forEach((o=>{const e=d(o);a[o]=(0,c.ensureNotNull)(e)}));const g=a},499994:(o,e,r)=>{"use strict";r.d(e,{getTooltipData:()=>l,setTooltipData:()=>c});const t=new WeakMap;function l(o,e){const r=t.get(o);return r instanceof Function?r(e):r&&r[e]}function c(o,e,r){if(r instanceof Function)return void t.set(o,r);const l=t.get(o),c=void 0===l||l instanceof Function?{}:l;c[e]=r,t.set(o,c)}},779527:(o,e,r)=>{"use strict";r.d(e,{getDataFromTarget:()=>p,getTooltip:()=>u,hideTooltip:()=>y,setStyle:()=>m,showTooltip:()=>b});var t=r(529111),l=r(499994),c=r(604286),n=r(571690),a=r(31341),i=(r(586463),r(777466)),s=r(678515),d=r(638456),g=r(668477);function p(o){const e=function(o){const e=o.hasAttribute("data-tooltip")?o.getAttribute("data-tooltip"):o.getAttribute("title");return e&&((0,l.setTooltipData)(o,"text",e),o.removeAttribute("title")),(0,l.getTooltipData)(o,"text")||""}(o),r=o.getBoundingClientRect(),t={h:r.height,w:r.width,x:r.left,y:r.top},c=o.getAttribute("data-color-theme")||"",n=o.classList.contains("common-tooltip-html"),a=parseInt(o.getAttribute("data-tooltip-delay")||""),i=parseInt(o.getAttribute("data-tooltip-debounce")||"");let s={type:"none"};return e&&(s={type:n?"html":"text",data:e}),{above:o.classList.contains("common-tooltip-above"),below:o.classList.contains("common-tooltip-below"),otl:o.classList.contains("common-tooltip-otl"),otr:o.classList.contains("common-tooltip-otr"),vertical:o.classList.contains("common-tooltip-vertical"),hotkey:o.getAttribute("data-tooltip-hotkey"),narrow:o.classList.contains("common-tooltip-narrow"),wide:o.classList.contains("common-tooltip-wide"),colorTheme:c,tooltipDelay:a,tooltipDebounce:i,rect:t,content:s,target:o}}function u(o){const e=w.cloneNode(!0),r=F(e),{content:t}=o;switch(t.type){case"element":r.innerHTML="",r.appendChild(t.data);break;case"html":r.innerHTML=t.data;break;case"text":if(o.hotkey){const o=E.cloneNode(!0);o.innerText=t.data,r.appendChild(o)}else r.innerText=t.data}if(o.hotkey){const e="none"!==t.type,l=k.cloneNode(!0),n=(0,c.hotKeyDeserialize)(o.hotkey),a=n.keys.map((o=>`<span class="${g["common-tooltip__hotkey-button"]}">${o}</span>`));l.innerHTML=function(o,e){const r=/{\d}|{hotkey_\d}/gi;return o.replace(r,(o=>{const r=Number(o.match(/\d/));return e[r]}))}(n.text,a).replace(/\s\+\s/g,`<span class="${g["common-tooltip__plus-sign"]}">+</span>`),r.classList.add(g["common-tooltip__body--with-hotkey"]),e&&l.classList.add(g["common-tooltip__hotkey-block--divider"]),r.appendChild(l)}return e.addEventListener("contextmenu",i.preventDefault),e}function m(o,e){const r=e.rect;if(!r)return;(0,t.setTooltipColorTheme)(o,e.colorTheme||"default"),e.addClass&&o.classList.add(e.addClass)
;const l=F(o),c=o.querySelector(`.${g["common-tooltip__button-container"]}`);l.classList.toggle(g["common-tooltip__body--width_wide"],Boolean(e.wide)),l.classList.toggle(g["common-tooltip__body--no-padding"],Boolean(e.noPadding)),l.classList.toggle(g["common-tooltip__body--width_narrow"],Boolean(e.narrow)),l.classList.toggle(g["common-tooltip__body--no-buttons"],!0),l.style.left=h(0),l.style.width=h(l.clientWidth+(Boolean(e.noPadding)?0:2));const n=document.body.clientWidth,i=d.CheckMobile.iOS()||(0,d.supportTouch)()&&(0,d.isMac)()?window.innerHeight:document.body.clientHeight,p=e.vertical,u=e.extendMargin||p&&r.w<20||!p&&r.h<20;o.classList.toggle(g["common-tooltip--farther"],u),o.classList.toggle(g["common-tooltip--vertical"],p),o.classList.toggle(g["common-tooltip--horizontal"],!p);const m=function(o){return o.querySelector(`.${g["common-tooltip__ear-holder"]}`)}(o),b=o.offsetHeight;if(p){const t=10,d=i-10,p=12,u=t+p,y=d-p,v=(0,s.clamp)(r.y+r.h/2,u,y)-b/2,f=v+b;o.style.left=h(r.x+r.w),o.style.top=h(v),v<t?l.style.top=c.style.top=h(t-v):f>d&&(l.style.top=c.style.top=h(d-f));const{right:_}=(o.querySelector(":last-child")||l).getBoundingClientRect(),w=_+10>n;o.classList.toggle(g["common-tooltip--direction_reversed"],w),o.classList.toggle(g["common-tooltip--direction_normal"],!w);let k=w?"after":"before";(0,a.isRtl)()?(k=e.otr?"after":k,k=e.otl?"before":k):(k=e.otr?"before":k,k=e.otl?"after":k),m.classList.toggle(g["common-tooltip__ear-holder--before"],"before"===k),m.classList.toggle(g["common-tooltip__ear-holder--after"],"after"===k),"after"===k&&(o.style.left="auto",o.style.right=h(n-r.x))}else{const t=r.x-(l.offsetWidth-r.w)/2,a=n-10-o.offsetWidth,s=Math.max(10,Math.min(t,a));o.style.left=h(s);const d=a<t;o.classList.toggle(g["common-tooltip--direction_reversed"],d),o.classList.toggle(g["common-tooltip--direction_normal"],!d);const p=function(o,e,r,t){if(o.above)return D(e,t)?"above":"below";if(o.below)return function(o,e,r){return r.y+r.h+e+10<o}(e,r,t)?"below":"above";return D(r,t)?"above":"below"}(e,i,b,r);"above"===p?o.style.bottom=h(i-r.y):o.style.top=h(r.y+r.h),m.classList.add("above"===p?g["common-tooltip__ear-holder--above"]:g["common-tooltip__ear-holder--below"]);const{left:u}=l.getBoundingClientRect();let y=Math.trunc(r.x+r.w/2-(u+l.clientWidth/2));o.style.left=h(s+y),o.style.width=h(l.clientWidth+c.clientWidth),y=d?Math.max(0,y):Math.min(0,y),c.style.left=h(-y),l.style.left=h(-y)}}function b(o){o.classList.toggle(g["common-tooltip--hidden"],!1)}function y(o){o.classList.toggle(g["common-tooltip--hidden"],!0)}function h(o){return`${Math.floor(o)}px`}const v=`\n\t<div id="common-tooltip-wrapper" class="${g["common-tooltip"]}">\n\t\t<div class="${g["common-tooltip__ear-holder"]}" >\n\t\t\t<div class="${g["common-tooltip__body"]} js-tooltip-body"></div>\n\t\t</div>\n\t\t<div class="${g["common-tooltip__button-container"]}"></div>\n\t</div>\n`,f=`\n\t<div class="${g["common-tooltip__hotkey-block"]}"></div>\n`,_=`\n\t<div class="${g["common-tooltip__hotkey-text"]}"></div>\n`,w=(0,n.parseHtmlElement)(v),k=(0,
n.parseHtmlElement)(f),E=(0,n.parseHtmlElement)(_);function F(o){return o.querySelector(`.${g["common-tooltip__body"]}`)}function D(o,e){return 10+o<e.y}},630112:(o,e,r)=>{"use strict";r.d(e,{empty:()=>n,setTooltip:()=>a});const t="tooltip-root-element";let l;function c(){const o=document.getElementById(t);o?l=o:(l=document.createElement("div"),l.id=t,document.body.appendChild(l))}function n(){l&&(l.innerHTML="")}function a(o){n(),l&&l.appendChild(o)}"interactive"===document.readyState?c():document.addEventListener("DOMContentLoaded",c)},112539:(o,e,r)=>{"use strict";r.d(e,{clearSchedule:()=>n,scheduleHide:()=>i,scheduleRemove:()=>a,scheduleRender:()=>s});let t=0,l=0,c=0;function n(){clearTimeout(t),clearTimeout(l),clearTimeout(c)}function a(o,e){c=setTimeout(o,e)}function i(o,e){l=setTimeout(o,e)}function s(o,e){t=setTimeout(o,e)}},529111:(o,e,r)=>{"use strict";r.d(e,{setTooltipColorTheme:()=>c});const t={default:"",white:"theme-white",chart:"theme-chart","round-shadow":"theme-round-shadow"},l=Object.keys(t);function c(o,e){const r=l.includes(e)?t[e]:"";o.classList.remove(...l.map((o=>t[o])).filter((o=>!!o))),r&&!o.classList.contains(r)&&o.classList.add(r)}},799786:(o,e,r)=>{"use strict";r.d(e,{createGroup:()=>t.createGroup});var t=r(129592),l=r(764250),c=r(591800),n=r(345848);(0,t.registerWindow)(window),l.ActionGroup.setMatchedHotkeyHandler((o=>{(0,n.trackEvent)("Keyboard Shortcuts",(0,c.humanReadableHash)(o))}))},345848:(o,e,r)=>{"use strict";r.d(e,{trackEvent:()=>i});var t=r(251954),l=r(244842);const c=(0,r(201089).getLogger)("Common.TrackEvent"),n=[/Study_(Drawing)_(.*)/,/(Study)_(.*)@tv-basicstudies/,/(Study)_(.*)/,/(Chart Style) (.*)/];let a=!1;const i=(o,e,r)=>{if(a)return;if(l.enabled("charting_library_base"))return void((o,e,r)=>{e=e||o||r||"";let l="";for(let o=0;o<n.length;o++){const r=e.match(n[o]);if(r&&3===r.length){e=r[1],l=r[2];break}}(0,t.emit)(e.toLowerCase().replace(" ","_"),{category:o,label:r,value:l})})(o,e,r);let i=(o?o+":":"")+e;r&&(i+=" "+r),c.logNormal(i),l.enabled("widget")||!window._UNIT_TESTS&&window.gtag&&window.gtag("event",e,{event_category:o,event_label:r})};"undefined"!=typeof window&&(window.TradingView=window.TradingView||{},window.TradingView.trackEvent=i)},182436:(o,e,r)=>{"use strict";r.d(e,{NumericFormatter:()=>c});var t=r(960521),l=r(702053);class c{constructor(o){this._precision=o}format(o){return(void 0!==this._precision?o.toFixed(this._precision):c.formatNoE(o)).replace(".",l.formatterOptions.decimalSign)}parse(o){const e=o.replace(l.formatterOptions.decimalSign,".");let r=parseFloat(e);return this._precision&&(r=+r.toFixed(this._precision)),r}static formatNoE(o){if(!Number.isFinite(o))return String(o);const e=new t.Big(o);return e.lt(1)?e.toFixed():e.toString()}}},461794:(o,e,r)=>{o=r.nmd(o),TradingView.cleanButAmpersand=function(o,e){var r=e?["&amp;"]:["&"];return TradingView.clean(o,e,r)},TradingView.strip_tags=function(o){return o&&o.replace?o.replace(/(<([^>]+)>)/gi,""):o},TradingView.encodeSpread=function(o){return encodeURIComponent(o)},
TradingView.clean=function(o,e,r){var t=[["&","&amp;"],["<","&lt;"],[">","&gt;"],['"',"&quot;"],["'","&#039;"],["'","&#39;"]],l=o;if(!o||!o.replace)return l;for(var c=0;c<t.length;c++){var n=t[c][0],a=t[c][1];r&&r.indexOf&&-1!==r.indexOf(e?a:n)||(l=e?l.replace(new RegExp(a,"g"),n):l.replace(new RegExp(n,"g"),a))}return l},o&&o.exports&&(o.exports={clean:TradingView.clean,cleanButAmpersand:TradingView.cleanButAmpersand,stripTags:TradingView.strip_tags})},503344:(o,e,r)=>{"use strict";r.d(e,{makeSymbolPageUrl:()=>p,makeTemplateSymbolUrl:()=>d});var t=r(42398),l=r(258621),c=r(691239),n=(r(889267),r(519073));function a(o){const e={shortName:o.shortName,exchange:o.exchange,proName:o.proName,type:o.type,typespecs:o.typespecs,root:o.root};return o.proName&&o.proName.includes(":")&&([e.exchange,e.shortName]=o.proName.split(":")),e}function i(o,e){const r=encodeURIComponent(e.shortName||""),t=encodeURIComponent(e.exchange||""),l=encodeURIComponent(e.proName||""),c=encodeURIComponent(e.root||"");return o.replace("{tvexchange}",t).replace("{tvsymbol}",r).replace("{tvprosymbol}",l).replace("{tvroot}",c)}function s(o,e=""){const r=a(o),{type:t,typespecs:l,shortName:c,proName:i,exchange:s,root:d}=r;return void 0===c&&void 0===i?(console.warn("Params missed"),"/"):t||l?"commodity"===t&&l&&l.includes("cfd")?"/symbols/{tvsymbol}/?exchange={tvexchange}":!d||!l||"futures"!==t||l.includes("continuous")&&(null==c?void 0:c.endsWith("1!"))||l.includes("exchange-continuous")?s&&("forex"===t||l&&(0,n.hasCryptoTypespec)(l))?"/symbols/{tvsymbol}/?exchange={tvexchange}":s?`/symbols/{tvexchange}-{tvsymbol}/${e}`:`/symbols/{tvsymbol}/${e}`:`/symbols/{tvexchange}-{tvroot}1!/${e}?contract={tvsymbol}`:s?`/symbols/{tvexchange}-{tvsymbol}/${e}`:`/symbols/{tvsymbol}/${e}`}function d(o,e){let r=o;if(!/{tvsymbol}|{tvexchange}|{tvprosymbol}/.test(o)){let t="tvprosymbol";void 0===e.proName&&(t="tvsymbol"),r=`${o}?tvwidgetsymbol={${t}}`}const t=i(r,a(e));if(!(0,c.isSafeUrl)(t))throw new Error(`The symbol URL ${t} is not allowed.`);return t}function g(o,e,r,c){const n=(window.locale_domains?(0,l.determineBaseUrl)(window.locale_domains,c):window.location.origin)+i(o,a(e));return r?(0,t.addUtmToUrl)(n,r):n}function p(o,e,r,t){return g(s(o,t),o,e,r)}},665570:(o,e,r)=>{"use strict";r.d(e,{getTranslatedSymbolDescription:()=>c});var t=r(444372);function l(o){const e=`#${o}-symbol-description`,l=t.t(e,void 0,r(118562));return l===e?null:l}function c(o){if(void 0!==o.pro_name){const e=l(o.pro_name);if(null!==e)return e;if(void 0!==o.short_name){const e=l(o.short_name);if(null!==e)return e}}return"en"!==o.language&&void 0!==o.local_description&&o.language===window.language||"en"===o.language&&void 0!==o.local_description&&o.language===window.language?o.local_description:o.description||""}},571690:(o,e,r)=>{"use strict";r.d(e,{parseHtmlElement:()=>l});const t=new WeakMap;function l(o,e){const r=function(o,e){let r,l;return r=null==e?document.documentElement:9===e.nodeType?e.documentElement:e,t&&(l=t.get(r)),l||(l=r.ownerDocument.createRange(),l.selectNodeContents(r),
t&&t.set(r,l)),l.createContextualFragment(o)}(o,e),l=r.firstElementChild;return null!==l&&r.removeChild(l),l}}}]);
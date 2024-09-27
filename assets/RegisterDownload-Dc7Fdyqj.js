import{e as Ha,g as Ga,r as Be,s as qr,X as Ka,Y as Wa,i as Et,m as Qa,z as Xa,k as Oe,Z as Ya,u as Ja,j as Pn,f as us,h as Za,o as tl}from"./index-Bepu9UV2.js";function el(n){return Ga("MuiButton",n)}const se=Ha("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),nl=Be.createContext({}),rl=Be.createContext(void 0),il=n=>{const{color:t,disableElevation:e,fullWidth:i,size:s,variant:o,classes:u}=n,c={root:["root",o,`${o}${Et(t)}`,`size${Et(s)}`,`${o}Size${Et(s)}`,`color${Et(t)}`,e&&"disableElevation",i&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${Et(s)}`],endIcon:["icon","endIcon",`iconSize${Et(s)}`]},d=Za(c,el,u);return{...u,...d}},Ws=[{props:{size:"small"},style:{"& > *:nth-of-type(1)":{fontSize:18}}},{props:{size:"medium"},style:{"& > *:nth-of-type(1)":{fontSize:20}}},{props:{size:"large"},style:{"& > *:nth-of-type(1)":{fontSize:22}}}],sl=qr(Ka,{shouldForwardProp:n=>Wa(n)||n==="classes",name:"MuiButton",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[t.root,t[e.variant],t[`${e.variant}${Et(e.color)}`],t[`size${Et(e.size)}`],t[`${e.variant}Size${Et(e.size)}`],e.color==="inherit"&&t.colorInherit,e.disableElevation&&t.disableElevation,e.fullWidth&&t.fullWidth]}})(Qa(({theme:n})=>{var i,s;const t=n.palette.mode==="light"?n.palette.grey[300]:n.palette.grey[800],e=n.palette.mode==="light"?n.palette.grey.A100:n.palette.grey[700];return{...n.typography.button,minWidth:64,padding:"6px 16px",border:0,borderRadius:(n.vars||n).shape.borderRadius,transition:n.transitions.create(["background-color","box-shadow","border-color","color"],{duration:n.transitions.duration.short}),"&:hover":{textDecoration:"none"},[`&.${se.disabled}`]:{color:(n.vars||n).palette.action.disabled},variants:[{props:{variant:"contained"},style:{color:"var(--variant-containedColor)",backgroundColor:"var(--variant-containedBg)",boxShadow:(n.vars||n).shadows[2],"&:hover":{boxShadow:(n.vars||n).shadows[4],"@media (hover: none)":{boxShadow:(n.vars||n).shadows[2]}},"&:active":{boxShadow:(n.vars||n).shadows[8]},[`&.${se.focusVisible}`]:{boxShadow:(n.vars||n).shadows[6]},[`&.${se.disabled}`]:{color:(n.vars||n).palette.action.disabled,boxShadow:(n.vars||n).shadows[0],backgroundColor:(n.vars||n).palette.action.disabledBackground}}},{props:{variant:"outlined"},style:{padding:"5px 15px",border:"1px solid currentColor",borderColor:"var(--variant-outlinedBorder, currentColor)",backgroundColor:"var(--variant-outlinedBg)",color:"var(--variant-outlinedColor)",[`&.${se.disabled}`]:{border:`1px solid ${(n.vars||n).palette.action.disabledBackground}`}}},{props:{variant:"text"},style:{padding:"6px 8px",color:"var(--variant-textColor)",backgroundColor:"var(--variant-textBg)"}},...Object.entries(n.palette).filter(Xa(["dark","contrastText"])).map(([o])=>({props:{color:o},style:{"--variant-textColor":(n.vars||n).palette[o].main,"--variant-outlinedColor":(n.vars||n).palette[o].main,"--variant-outlinedBorder":n.vars?`rgba(${n.vars.palette[o].mainChannel} / 0.5)`:Oe(n.palette[o].main,.5),"--variant-containedColor":(n.vars||n).palette[o].contrastText,"--variant-containedBg":(n.vars||n).palette[o].main,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":(n.vars||n).palette[o].dark,"--variant-textBg":n.vars?`rgba(${n.vars.palette[o].mainChannel} / ${n.vars.palette.action.hoverOpacity})`:Oe(n.palette[o].main,n.palette.action.hoverOpacity),"--variant-outlinedBorder":(n.vars||n).palette[o].main,"--variant-outlinedBg":n.vars?`rgba(${n.vars.palette[o].mainChannel} / ${n.vars.palette.action.hoverOpacity})`:Oe(n.palette[o].main,n.palette.action.hoverOpacity)}}}})),{props:{color:"inherit"},style:{"--variant-containedColor":n.vars?n.vars.palette.text.primary:(s=(i=n.palette).getContrastText)==null?void 0:s.call(i,t),"--variant-containedBg":n.vars?n.vars.palette.Button.inheritContainedBg:t,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":n.vars?n.vars.palette.Button.inheritContainedHoverBg:e,"--variant-textBg":n.vars?`rgba(${n.vars.palette.text.primaryChannel} / ${n.vars.palette.action.hoverOpacity})`:Oe(n.palette.text.primary,n.palette.action.hoverOpacity),"--variant-outlinedBg":n.vars?`rgba(${n.vars.palette.text.primaryChannel} / ${n.vars.palette.action.hoverOpacity})`:Oe(n.palette.text.primary,n.palette.action.hoverOpacity)}}}},{props:{size:"small",variant:"text"},style:{padding:"4px 5px",fontSize:n.typography.pxToRem(13)}},{props:{size:"large",variant:"text"},style:{padding:"8px 11px",fontSize:n.typography.pxToRem(15)}},{props:{size:"small",variant:"outlined"},style:{padding:"3px 9px",fontSize:n.typography.pxToRem(13)}},{props:{size:"large",variant:"outlined"},style:{padding:"7px 21px",fontSize:n.typography.pxToRem(15)}},{props:{size:"small",variant:"contained"},style:{padding:"4px 10px",fontSize:n.typography.pxToRem(13)}},{props:{size:"large",variant:"contained"},style:{padding:"8px 22px",fontSize:n.typography.pxToRem(15)}},{props:{disableElevation:!0},style:{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${se.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${se.disabled}`]:{boxShadow:"none"}}},{props:{fullWidth:!0},style:{width:"100%"}}]}})),ol=qr("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[t.startIcon,t[`iconSize${Et(e.size)}`]]}})({display:"inherit",marginRight:8,marginLeft:-4,variants:[{props:{size:"small"},style:{marginLeft:-2}},...Ws]}),al=qr("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[t.endIcon,t[`iconSize${Et(e.size)}`]]}})({display:"inherit",marginRight:-4,marginLeft:8,variants:[{props:{size:"small"},style:{marginRight:-2}},...Ws]}),Ed=Be.forwardRef(function(t,e){const i=Be.useContext(nl),s=Be.useContext(rl),o=Ya(i,t),u=Ja({props:o,name:"MuiButton"}),{children:c,color:d="primary",component:m="button",className:I,disabled:w=!1,disableElevation:P=!1,disableFocusRipple:b=!1,endIcon:V,focusVisibleClassName:k,fullWidth:N=!1,size:H="medium",startIcon:$,type:G,variant:Z="text",...St}=u,Y={...u,color:d,component:m,disabled:w,disableElevation:P,disableFocusRipple:b,fullWidth:N,size:H,type:G,variant:Z},y=il(Y),f=$&&Pn.jsx(ol,{className:y.startIcon,ownerState:Y,children:$}),g=V&&Pn.jsx(al,{className:y.endIcon,ownerState:Y,children:V}),_=s||"";return Pn.jsxs(sl,{ownerState:Y,className:us(i.className,y.root,I,_),component:m,disabled:w,focusRipple:!b,focusVisibleClassName:us(y.focusVisible,k),ref:e,type:G,...St,classes:y,children:[f,c,g]})}),Td=tl(Pn.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M17 13l-5 5-5-5h3V9h4v4z"}),"CloudDownload");var cs={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},ll=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const s=n[e++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],u=n[e++],c=n[e++],d=((s&7)<<18|(o&63)<<12|(u&63)<<6|c&63)-65536;t[i++]=String.fromCharCode(55296+(d>>10)),t[i++]=String.fromCharCode(56320+(d&1023))}else{const o=n[e++],u=n[e++];t[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|u&63)}}return t.join("")},Xs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const o=n[s],u=s+1<n.length,c=u?n[s+1]:0,d=s+2<n.length,m=d?n[s+2]:0,I=o>>2,w=(o&3)<<4|c>>4;let P=(c&15)<<2|m>>6,b=m&63;d||(b=64,u||(P=64)),i.push(e[I],e[w],e[P],e[b])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Qs(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):ll(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const m=s<n.length?e[n.charAt(s)]:64;++s;const w=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||m==null||w==null)throw new ul;const P=o<<2|c>>4;if(i.push(P),m!==64){const b=c<<4&240|m>>2;if(i.push(b),w!==64){const V=m<<6&192|w;i.push(V)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ul extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cl=function(n){const t=Qs(n);return Xs.encodeByteArray(t,!0)},Dn=function(n){return cl(n).replace(/\./g,"")},hl=function(n){try{return Xs.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=()=>dl().__FIREBASE_DEFAULTS__,pl=()=>{if(typeof process>"u"||typeof cs>"u")return;const n=cs.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},gl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&hl(n[1]);return t&&JSON.parse(t)},Hr=()=>{try{return fl()||pl()||gl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ml=n=>{var t,e;return(e=(t=Hr())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},_l=n=>{const t=ml(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},Ys=()=>{var n;return(n=Hr())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Dn(JSON.stringify(e)),Dn(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tl(){var n;const t=(n=Hr())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Il(){return!Tl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Al(){try{return typeof indexedDB=="object"}catch{return!1}}function wl(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl="FirebaseError";class pe extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=Rl,Object.setPrototypeOf(this,pe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Js.prototype.create)}}class Js{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],u=o?Sl(o,i):"Error",c=`${this.serviceName}: ${u} (${s}).`;return new pe(s,c,i)}}function Sl(n,t){return n.replace(Pl,(e,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const Pl=/\{\$([^}]+)}/g;function Vr(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const s of e){if(!i.includes(s))return!1;const o=n[s],u=t[s];if(hs(o)&&hs(u)){if(!Vr(o,u))return!1}else if(o!==u)return!1}for(const s of i)if(!e.includes(s))return!1;return!0}function hs(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(n){return n&&n._delegate?n._delegate:n}class He{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new yl;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Vl(t))try{this.getOrInitializeService({instanceIdentifier:Kt})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(t=Kt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Kt){return this.instances.has(t)}getOptions(t=Kt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[o,u]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);i===c&&u.resolve(s)}return s}onInit(t,e){var i;const s=this.normalizeInstanceIdentifier(e),o=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;o.add(t),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&t(u,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const s of i)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:bl(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Kt){return this.component?this.component.multipleInstances?t:Kt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bl(n){return n===Kt?void 0:n}function Vl(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Cl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(F||(F={}));const Nl={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},xl=F.INFO,kl={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},Ol=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),s=kl[t];if(s)console[s](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Zs{constructor(t){this.name=t,this._logLevel=xl,this._logHandler=Ol,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in F))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Nl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...t),this._logHandler(this,F.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...t),this._logHandler(this,F.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,F.INFO,...t),this._logHandler(this,F.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,F.WARN,...t),this._logHandler(this,F.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...t),this._logHandler(this,F.ERROR,...t)}}const Ml=(n,t)=>t.some(e=>n instanceof e);let ds,fs;function Ll(){return ds||(ds=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fl(){return fs||(fs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const to=new WeakMap,Dr=new WeakMap,eo=new WeakMap,Ar=new WeakMap,Gr=new WeakMap;function Bl(n){const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{e(Lt(n.result)),s()},u=()=>{i(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&to.set(e,n)}).catch(()=>{}),Gr.set(t,n),t}function Ul(n){if(Dr.has(n))return;const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{e(),s()},u=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});Dr.set(n,t)}let Nr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Dr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||eo.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Lt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function jl(n){Nr=n(Nr)}function $l(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(wr(this),t,...e);return eo.set(i,t.sort?t.sort():[t]),Lt(i)}:Fl().includes(n)?function(...t){return n.apply(wr(this),t),Lt(to.get(this))}:function(...t){return Lt(n.apply(wr(this),t))}}function zl(n){return typeof n=="function"?$l(n):(n instanceof IDBTransaction&&Ul(n),Ml(n,Ll())?new Proxy(n,Nr):n)}function Lt(n){if(n instanceof IDBRequest)return Bl(n);if(Ar.has(n))return Ar.get(n);const t=zl(n);return t!==n&&(Ar.set(n,t),Gr.set(t,n)),t}const wr=n=>Gr.get(n);function ql(n,t,{blocked:e,upgrade:i,blocking:s,terminated:o}={}){const u=indexedDB.open(n,t),c=Lt(u);return i&&u.addEventListener("upgradeneeded",d=>{i(Lt(u.result),d.oldVersion,d.newVersion,Lt(u.transaction),d)}),e&&u.addEventListener("blocked",d=>e(d.oldVersion,d.newVersion,d)),c.then(d=>{o&&d.addEventListener("close",()=>o()),s&&d.addEventListener("versionchange",m=>s(m.oldVersion,m.newVersion,m))}).catch(()=>{}),c}const Hl=["get","getKey","getAll","getAllKeys","count"],Gl=["put","add","delete","clear"],Rr=new Map;function ps(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Rr.get(t))return Rr.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,s=Gl.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Hl.includes(e)))return;const o=async function(u,...c){const d=this.transaction(u,s?"readwrite":"readonly");let m=d.store;return i&&(m=m.index(c.shift())),(await Promise.all([m[e](...c),s&&d.done]))[0]};return Rr.set(t,o),o}jl(n=>({...n,get:(t,e,i)=>ps(t,e)||n.get(t,e,i),has:(t,e)=>!!ps(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Wl(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function Wl(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const xr="@firebase/app",gs="0.10.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=new Zs("@firebase/app"),Ql="@firebase/app-compat",Xl="@firebase/analytics-compat",Yl="@firebase/analytics",Jl="@firebase/app-check-compat",Zl="@firebase/app-check",tu="@firebase/auth",eu="@firebase/auth-compat",nu="@firebase/database",ru="@firebase/database-compat",iu="@firebase/functions",su="@firebase/functions-compat",ou="@firebase/installations",au="@firebase/installations-compat",lu="@firebase/messaging",uu="@firebase/messaging-compat",cu="@firebase/performance",hu="@firebase/performance-compat",du="@firebase/remote-config",fu="@firebase/remote-config-compat",pu="@firebase/storage",gu="@firebase/storage-compat",mu="@firebase/firestore",_u="@firebase/vertexai-preview",yu="@firebase/firestore-compat",vu="firebase",Eu="10.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr="[DEFAULT]",Tu={[xr]:"fire-core",[Ql]:"fire-core-compat",[Yl]:"fire-analytics",[Xl]:"fire-analytics-compat",[Zl]:"fire-app-check",[Jl]:"fire-app-check-compat",[tu]:"fire-auth",[eu]:"fire-auth-compat",[nu]:"fire-rtdb",[ru]:"fire-rtdb-compat",[iu]:"fire-fn",[su]:"fire-fn-compat",[ou]:"fire-iid",[au]:"fire-iid-compat",[lu]:"fire-fcm",[uu]:"fire-fcm-compat",[cu]:"fire-perf",[hu]:"fire-perf-compat",[du]:"fire-rc",[fu]:"fire-rc-compat",[pu]:"fire-gcs",[gu]:"fire-gcs-compat",[mu]:"fire-fst",[yu]:"fire-fst-compat",[_u]:"fire-vertex","fire-js":"fire-js",[vu]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new Map,Iu=new Map,Or=new Map;function ms(n,t){try{n.container.addComponent(t)}catch(e){Nt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function xn(n){const t=n.name;if(Or.has(t))return Nt.debug(`There were multiple attempts to register component ${t}.`),!1;Or.set(t,n);for(const e of Nn.values())ms(e,n);for(const e of Iu.values())ms(e,n);return!0}function Au(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ft=new Js("app","Firebase",wu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new He("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su=Eu;function no(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:kr,automaticDataCollectionEnabled:!1},t),s=i.name;if(typeof s!="string"||!s)throw Ft.create("bad-app-name",{appName:String(s)});if(e||(e=Ys()),!e)throw Ft.create("no-options");const o=Nn.get(s);if(o){if(Vr(e,o.options)&&Vr(i,o.config))return o;throw Ft.create("duplicate-app",{appName:s})}const u=new Dl(s);for(const d of Or.values())u.addComponent(d);const c=new Ru(e,i,u);return Nn.set(s,c),c}function Pu(n=kr){const t=Nn.get(n);if(!t&&n===kr&&Ys())return no();if(!t)throw Ft.create("no-app",{appName:n});return t}function ae(n,t,e){var i;let s=(i=Tu[n])!==null&&i!==void 0?i:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&c.push("and"),u&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Nt.warn(c.join(" "));return}xn(new He(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu="firebase-heartbeat-database",bu=1,Ge="firebase-heartbeat-store";let Sr=null;function ro(){return Sr||(Sr=ql(Cu,bu,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Ge)}catch(e){console.warn(e)}}}}).catch(n=>{throw Ft.create("idb-open",{originalErrorMessage:n.message})})),Sr}async function Vu(n){try{const e=(await ro()).transaction(Ge),i=await e.objectStore(Ge).get(io(n));return await e.done,i}catch(t){if(t instanceof pe)Nt.warn(t.message);else{const e=Ft.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Nt.warn(e.message)}}}async function _s(n,t){try{const i=(await ro()).transaction(Ge,"readwrite");await i.objectStore(Ge).put(t,io(n)),await i.done}catch(e){if(e instanceof pe)Nt.warn(e.message);else{const i=Ft.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Nt.warn(i.message)}}}function io(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du=1024,Nu=30*24*60*60*1e3;class xu{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ou(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ys();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const c=new Date(u.date).valueOf();return Date.now()-c<=Nu}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Nt.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ys(),{heartbeatsToSend:i,unsentEntries:s}=ku(this._heartbeatsCache.heartbeats),o=Dn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Nt.warn(e),""}}}function ys(){return new Date().toISOString().substring(0,10)}function ku(n,t=Du){const e=[];let i=n.slice();for(const s of n){const o=e.find(u=>u.agent===s.agent);if(o){if(o.dates.push(s.date),vs(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),vs(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class Ou{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Al()?wl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Vu(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return _s(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return _s(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function vs(n){return Dn(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(n){xn(new He("platform-logger",t=>new Kl(t),"PRIVATE")),xn(new He("heartbeat",t=>new xu(t),"PRIVATE")),ae(xr,gs,n),ae(xr,gs,"esm2017"),ae("fire-js","")}Mu("");var Lu="firebase",Fu="10.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ae(Lu,Fu,"app");var Es=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var so;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(y,f){function g(){}g.prototype=f.prototype,y.D=f.prototype,y.prototype=new g,y.prototype.constructor=y,y.C=function(_,v,T){for(var p=Array(arguments.length-2),Pt=2;Pt<arguments.length;Pt++)p[Pt-2]=arguments[Pt];return f.prototype[v].apply(_,p)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(y,f,g){g||(g=0);var _=Array(16);if(typeof f=="string")for(var v=0;16>v;++v)_[v]=f.charCodeAt(g++)|f.charCodeAt(g++)<<8|f.charCodeAt(g++)<<16|f.charCodeAt(g++)<<24;else for(v=0;16>v;++v)_[v]=f[g++]|f[g++]<<8|f[g++]<<16|f[g++]<<24;f=y.g[0],g=y.g[1],v=y.g[2];var T=y.g[3],p=f+(T^g&(v^T))+_[0]+3614090360&4294967295;f=g+(p<<7&4294967295|p>>>25),p=T+(v^f&(g^v))+_[1]+3905402710&4294967295,T=f+(p<<12&4294967295|p>>>20),p=v+(g^T&(f^g))+_[2]+606105819&4294967295,v=T+(p<<17&4294967295|p>>>15),p=g+(f^v&(T^f))+_[3]+3250441966&4294967295,g=v+(p<<22&4294967295|p>>>10),p=f+(T^g&(v^T))+_[4]+4118548399&4294967295,f=g+(p<<7&4294967295|p>>>25),p=T+(v^f&(g^v))+_[5]+1200080426&4294967295,T=f+(p<<12&4294967295|p>>>20),p=v+(g^T&(f^g))+_[6]+2821735955&4294967295,v=T+(p<<17&4294967295|p>>>15),p=g+(f^v&(T^f))+_[7]+4249261313&4294967295,g=v+(p<<22&4294967295|p>>>10),p=f+(T^g&(v^T))+_[8]+1770035416&4294967295,f=g+(p<<7&4294967295|p>>>25),p=T+(v^f&(g^v))+_[9]+2336552879&4294967295,T=f+(p<<12&4294967295|p>>>20),p=v+(g^T&(f^g))+_[10]+4294925233&4294967295,v=T+(p<<17&4294967295|p>>>15),p=g+(f^v&(T^f))+_[11]+2304563134&4294967295,g=v+(p<<22&4294967295|p>>>10),p=f+(T^g&(v^T))+_[12]+1804603682&4294967295,f=g+(p<<7&4294967295|p>>>25),p=T+(v^f&(g^v))+_[13]+4254626195&4294967295,T=f+(p<<12&4294967295|p>>>20),p=v+(g^T&(f^g))+_[14]+2792965006&4294967295,v=T+(p<<17&4294967295|p>>>15),p=g+(f^v&(T^f))+_[15]+1236535329&4294967295,g=v+(p<<22&4294967295|p>>>10),p=f+(v^T&(g^v))+_[1]+4129170786&4294967295,f=g+(p<<5&4294967295|p>>>27),p=T+(g^v&(f^g))+_[6]+3225465664&4294967295,T=f+(p<<9&4294967295|p>>>23),p=v+(f^g&(T^f))+_[11]+643717713&4294967295,v=T+(p<<14&4294967295|p>>>18),p=g+(T^f&(v^T))+_[0]+3921069994&4294967295,g=v+(p<<20&4294967295|p>>>12),p=f+(v^T&(g^v))+_[5]+3593408605&4294967295,f=g+(p<<5&4294967295|p>>>27),p=T+(g^v&(f^g))+_[10]+38016083&4294967295,T=f+(p<<9&4294967295|p>>>23),p=v+(f^g&(T^f))+_[15]+3634488961&4294967295,v=T+(p<<14&4294967295|p>>>18),p=g+(T^f&(v^T))+_[4]+3889429448&4294967295,g=v+(p<<20&4294967295|p>>>12),p=f+(v^T&(g^v))+_[9]+568446438&4294967295,f=g+(p<<5&4294967295|p>>>27),p=T+(g^v&(f^g))+_[14]+3275163606&4294967295,T=f+(p<<9&4294967295|p>>>23),p=v+(f^g&(T^f))+_[3]+4107603335&4294967295,v=T+(p<<14&4294967295|p>>>18),p=g+(T^f&(v^T))+_[8]+1163531501&4294967295,g=v+(p<<20&4294967295|p>>>12),p=f+(v^T&(g^v))+_[13]+2850285829&4294967295,f=g+(p<<5&4294967295|p>>>27),p=T+(g^v&(f^g))+_[2]+4243563512&4294967295,T=f+(p<<9&4294967295|p>>>23),p=v+(f^g&(T^f))+_[7]+1735328473&4294967295,v=T+(p<<14&4294967295|p>>>18),p=g+(T^f&(v^T))+_[12]+2368359562&4294967295,g=v+(p<<20&4294967295|p>>>12),p=f+(g^v^T)+_[5]+4294588738&4294967295,f=g+(p<<4&4294967295|p>>>28),p=T+(f^g^v)+_[8]+2272392833&4294967295,T=f+(p<<11&4294967295|p>>>21),p=v+(T^f^g)+_[11]+1839030562&4294967295,v=T+(p<<16&4294967295|p>>>16),p=g+(v^T^f)+_[14]+4259657740&4294967295,g=v+(p<<23&4294967295|p>>>9),p=f+(g^v^T)+_[1]+2763975236&4294967295,f=g+(p<<4&4294967295|p>>>28),p=T+(f^g^v)+_[4]+1272893353&4294967295,T=f+(p<<11&4294967295|p>>>21),p=v+(T^f^g)+_[7]+4139469664&4294967295,v=T+(p<<16&4294967295|p>>>16),p=g+(v^T^f)+_[10]+3200236656&4294967295,g=v+(p<<23&4294967295|p>>>9),p=f+(g^v^T)+_[13]+681279174&4294967295,f=g+(p<<4&4294967295|p>>>28),p=T+(f^g^v)+_[0]+3936430074&4294967295,T=f+(p<<11&4294967295|p>>>21),p=v+(T^f^g)+_[3]+3572445317&4294967295,v=T+(p<<16&4294967295|p>>>16),p=g+(v^T^f)+_[6]+76029189&4294967295,g=v+(p<<23&4294967295|p>>>9),p=f+(g^v^T)+_[9]+3654602809&4294967295,f=g+(p<<4&4294967295|p>>>28),p=T+(f^g^v)+_[12]+3873151461&4294967295,T=f+(p<<11&4294967295|p>>>21),p=v+(T^f^g)+_[15]+530742520&4294967295,v=T+(p<<16&4294967295|p>>>16),p=g+(v^T^f)+_[2]+3299628645&4294967295,g=v+(p<<23&4294967295|p>>>9),p=f+(v^(g|~T))+_[0]+4096336452&4294967295,f=g+(p<<6&4294967295|p>>>26),p=T+(g^(f|~v))+_[7]+1126891415&4294967295,T=f+(p<<10&4294967295|p>>>22),p=v+(f^(T|~g))+_[14]+2878612391&4294967295,v=T+(p<<15&4294967295|p>>>17),p=g+(T^(v|~f))+_[5]+4237533241&4294967295,g=v+(p<<21&4294967295|p>>>11),p=f+(v^(g|~T))+_[12]+1700485571&4294967295,f=g+(p<<6&4294967295|p>>>26),p=T+(g^(f|~v))+_[3]+2399980690&4294967295,T=f+(p<<10&4294967295|p>>>22),p=v+(f^(T|~g))+_[10]+4293915773&4294967295,v=T+(p<<15&4294967295|p>>>17),p=g+(T^(v|~f))+_[1]+2240044497&4294967295,g=v+(p<<21&4294967295|p>>>11),p=f+(v^(g|~T))+_[8]+1873313359&4294967295,f=g+(p<<6&4294967295|p>>>26),p=T+(g^(f|~v))+_[15]+4264355552&4294967295,T=f+(p<<10&4294967295|p>>>22),p=v+(f^(T|~g))+_[6]+2734768916&4294967295,v=T+(p<<15&4294967295|p>>>17),p=g+(T^(v|~f))+_[13]+1309151649&4294967295,g=v+(p<<21&4294967295|p>>>11),p=f+(v^(g|~T))+_[4]+4149444226&4294967295,f=g+(p<<6&4294967295|p>>>26),p=T+(g^(f|~v))+_[11]+3174756917&4294967295,T=f+(p<<10&4294967295|p>>>22),p=v+(f^(T|~g))+_[2]+718787259&4294967295,v=T+(p<<15&4294967295|p>>>17),p=g+(T^(v|~f))+_[9]+3951481745&4294967295,y.g[0]=y.g[0]+f&4294967295,y.g[1]=y.g[1]+(v+(p<<21&4294967295|p>>>11))&4294967295,y.g[2]=y.g[2]+v&4294967295,y.g[3]=y.g[3]+T&4294967295}i.prototype.u=function(y,f){f===void 0&&(f=y.length);for(var g=f-this.blockSize,_=this.B,v=this.h,T=0;T<f;){if(v==0)for(;T<=g;)s(this,y,T),T+=this.blockSize;if(typeof y=="string"){for(;T<f;)if(_[v++]=y.charCodeAt(T++),v==this.blockSize){s(this,_),v=0;break}}else for(;T<f;)if(_[v++]=y[T++],v==this.blockSize){s(this,_),v=0;break}}this.h=v,this.o+=f},i.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var f=1;f<y.length-8;++f)y[f]=0;var g=8*this.o;for(f=y.length-8;f<y.length;++f)y[f]=g&255,g/=256;for(this.u(y),y=Array(16),f=g=0;4>f;++f)for(var _=0;32>_;_+=8)y[g++]=this.g[f]>>>_&255;return y};function o(y,f){var g=c;return Object.prototype.hasOwnProperty.call(g,y)?g[y]:g[y]=f(y)}function u(y,f){this.h=f;for(var g=[],_=!0,v=y.length-1;0<=v;v--){var T=y[v]|0;_&&T==f||(g[v]=T,_=!1)}this.g=g}var c={};function d(y){return-128<=y&&128>y?o(y,function(f){return new u([f|0],0>f?-1:0)}):new u([y|0],0>y?-1:0)}function m(y){if(isNaN(y)||!isFinite(y))return w;if(0>y)return N(m(-y));for(var f=[],g=1,_=0;y>=g;_++)f[_]=y/g|0,g*=4294967296;return new u(f,0)}function I(y,f){if(y.length==0)throw Error("number format error: empty string");if(f=f||10,2>f||36<f)throw Error("radix out of range: "+f);if(y.charAt(0)=="-")return N(I(y.substring(1),f));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=m(Math.pow(f,8)),_=w,v=0;v<y.length;v+=8){var T=Math.min(8,y.length-v),p=parseInt(y.substring(v,v+T),f);8>T?(T=m(Math.pow(f,T)),_=_.j(T).add(m(p))):(_=_.j(g),_=_.add(m(p)))}return _}var w=d(0),P=d(1),b=d(16777216);n=u.prototype,n.m=function(){if(k(this))return-N(this).m();for(var y=0,f=1,g=0;g<this.g.length;g++){var _=this.i(g);y+=(0<=_?_:4294967296+_)*f,f*=4294967296}return y},n.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(V(this))return"0";if(k(this))return"-"+N(this).toString(y);for(var f=m(Math.pow(y,6)),g=this,_="";;){var v=Z(g,f).g;g=H(g,v.j(f));var T=((0<g.g.length?g.g[0]:g.h)>>>0).toString(y);if(g=v,V(g))return T+_;for(;6>T.length;)T="0"+T;_=T+_}},n.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function V(y){if(y.h!=0)return!1;for(var f=0;f<y.g.length;f++)if(y.g[f]!=0)return!1;return!0}function k(y){return y.h==-1}n.l=function(y){return y=H(this,y),k(y)?-1:V(y)?0:1};function N(y){for(var f=y.g.length,g=[],_=0;_<f;_++)g[_]=~y.g[_];return new u(g,~y.h).add(P)}n.abs=function(){return k(this)?N(this):this},n.add=function(y){for(var f=Math.max(this.g.length,y.g.length),g=[],_=0,v=0;v<=f;v++){var T=_+(this.i(v)&65535)+(y.i(v)&65535),p=(T>>>16)+(this.i(v)>>>16)+(y.i(v)>>>16);_=p>>>16,T&=65535,p&=65535,g[v]=p<<16|T}return new u(g,g[g.length-1]&-2147483648?-1:0)};function H(y,f){return y.add(N(f))}n.j=function(y){if(V(this)||V(y))return w;if(k(this))return k(y)?N(this).j(N(y)):N(N(this).j(y));if(k(y))return N(this.j(N(y)));if(0>this.l(b)&&0>y.l(b))return m(this.m()*y.m());for(var f=this.g.length+y.g.length,g=[],_=0;_<2*f;_++)g[_]=0;for(_=0;_<this.g.length;_++)for(var v=0;v<y.g.length;v++){var T=this.i(_)>>>16,p=this.i(_)&65535,Pt=y.i(v)>>>16,_e=y.i(v)&65535;g[2*_+2*v]+=p*_e,$(g,2*_+2*v),g[2*_+2*v+1]+=T*_e,$(g,2*_+2*v+1),g[2*_+2*v+1]+=p*Pt,$(g,2*_+2*v+1),g[2*_+2*v+2]+=T*Pt,$(g,2*_+2*v+2)}for(_=0;_<f;_++)g[_]=g[2*_+1]<<16|g[2*_];for(_=f;_<2*f;_++)g[_]=0;return new u(g,0)};function $(y,f){for(;(y[f]&65535)!=y[f];)y[f+1]+=y[f]>>>16,y[f]&=65535,f++}function G(y,f){this.g=y,this.h=f}function Z(y,f){if(V(f))throw Error("division by zero");if(V(y))return new G(w,w);if(k(y))return f=Z(N(y),f),new G(N(f.g),N(f.h));if(k(f))return f=Z(y,N(f)),new G(N(f.g),f.h);if(30<y.g.length){if(k(y)||k(f))throw Error("slowDivide_ only works with positive integers.");for(var g=P,_=f;0>=_.l(y);)g=St(g),_=St(_);var v=Y(g,1),T=Y(_,1);for(_=Y(_,2),g=Y(g,2);!V(_);){var p=T.add(_);0>=p.l(y)&&(v=v.add(g),T=p),_=Y(_,1),g=Y(g,1)}return f=H(y,v.j(f)),new G(v,f)}for(v=w;0<=y.l(f);){for(g=Math.max(1,Math.floor(y.m()/f.m())),_=Math.ceil(Math.log(g)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),T=m(g),p=T.j(f);k(p)||0<p.l(y);)g-=_,T=m(g),p=T.j(f);V(T)&&(T=P),v=v.add(T),y=H(y,p)}return new G(v,y)}n.A=function(y){return Z(this,y).h},n.and=function(y){for(var f=Math.max(this.g.length,y.g.length),g=[],_=0;_<f;_++)g[_]=this.i(_)&y.i(_);return new u(g,this.h&y.h)},n.or=function(y){for(var f=Math.max(this.g.length,y.g.length),g=[],_=0;_<f;_++)g[_]=this.i(_)|y.i(_);return new u(g,this.h|y.h)},n.xor=function(y){for(var f=Math.max(this.g.length,y.g.length),g=[],_=0;_<f;_++)g[_]=this.i(_)^y.i(_);return new u(g,this.h^y.h)};function St(y){for(var f=y.g.length+1,g=[],_=0;_<f;_++)g[_]=y.i(_)<<1|y.i(_-1)>>>31;return new u(g,y.h)}function Y(y,f){var g=f>>5;f%=32;for(var _=y.g.length-g,v=[],T=0;T<_;T++)v[T]=0<f?y.i(T+g)>>>f|y.i(T+g+1)<<32-f:y.i(T+g);return new u(v,y.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=I,so=u}).apply(typeof Es<"u"?Es:typeof self<"u"?self:typeof window<"u"?window:{});var In=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var oo,ao,Fe,lo,Cn,Mr,uo,co,ho;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,a,l){return r==Array.prototype||r==Object.prototype||(r[a]=l.value),r};function e(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof In=="object"&&In];for(var a=0;a<r.length;++a){var l=r[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var i=e(this);function s(r,a){if(a)t:{var l=i;r=r.split(".");for(var h=0;h<r.length-1;h++){var E=r[h];if(!(E in l))break t;l=l[E]}r=r[r.length-1],h=l[r],a=a(h),a!=h&&a!=null&&t(l,r,{configurable:!0,writable:!0,value:a})}}function o(r,a){r instanceof String&&(r+="");var l=0,h=!1,E={next:function(){if(!h&&l<r.length){var A=l++;return{value:a(A,r[A]),done:!1}}return h=!0,{done:!0,value:void 0}}};return E[Symbol.iterator]=function(){return E},E}s("Array.prototype.values",function(r){return r||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function d(r){var a=typeof r;return a=a!="object"?a:r?Array.isArray(r)?"array":a:"null",a=="array"||a=="object"&&typeof r.length=="number"}function m(r){var a=typeof r;return a=="object"&&r!=null||a=="function"}function I(r,a,l){return r.call.apply(r.bind,arguments)}function w(r,a,l){if(!r)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var E=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(E,h),r.apply(a,E)}}return function(){return r.apply(a,arguments)}}function P(r,a,l){return P=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:w,P.apply(null,arguments)}function b(r,a){var l=Array.prototype.slice.call(arguments,1);return function(){var h=l.slice();return h.push.apply(h,arguments),r.apply(this,h)}}function V(r,a){function l(){}l.prototype=a.prototype,r.aa=a.prototype,r.prototype=new l,r.prototype.constructor=r,r.Qb=function(h,E,A){for(var C=Array(arguments.length-2),U=2;U<arguments.length;U++)C[U-2]=arguments[U];return a.prototype[E].apply(h,C)}}function k(r){const a=r.length;if(0<a){const l=Array(a);for(let h=0;h<a;h++)l[h]=r[h];return l}return[]}function N(r,a){for(let l=1;l<arguments.length;l++){const h=arguments[l];if(d(h)){const E=r.length||0,A=h.length||0;r.length=E+A;for(let C=0;C<A;C++)r[E+C]=h[C]}else r.push(h)}}class H{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function $(r){return/^[\s\xa0]*$/.test(r)}function G(){var r=c.navigator;return r&&(r=r.userAgent)?r:""}function Z(r){return Z[" "](r),r}Z[" "]=function(){};var St=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function Y(r,a,l){for(const h in r)a.call(l,r[h],h,r)}function y(r,a){for(const l in r)a.call(void 0,r[l],l,r)}function f(r){const a={};for(const l in r)a[l]=r[l];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(r,a){let l,h;for(let E=1;E<arguments.length;E++){h=arguments[E];for(l in h)r[l]=h[l];for(let A=0;A<g.length;A++)l=g[A],Object.prototype.hasOwnProperty.call(h,l)&&(r[l]=h[l])}}function v(r){var a=1;r=r.split(":");const l=[];for(;0<a&&r.length;)l.push(r.shift()),a--;return r.length&&l.push(r.join(":")),l}function T(r){c.setTimeout(()=>{throw r},0)}function p(){var r=Zn;let a=null;return r.g&&(a=r.g,r.g=r.g.next,r.g||(r.h=null),a.next=null),a}class Pt{constructor(){this.h=this.g=null}add(a,l){const h=_e.get();h.set(a,l),this.h?this.h.next=h:this.g=h,this.h=h}}var _e=new H(()=>new ca,r=>r.reset());class ca{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let ye,ve=!1,Zn=new Pt,ui=()=>{const r=c.Promise.resolve(void 0);ye=()=>{r.then(ha)}};var ha=()=>{for(var r;r=p();){try{r.h.call(r.g)}catch(l){T(l)}var a=_e;a.j(r),100>a.h&&(a.h++,r.next=a.g,a.g=r)}ve=!1};function xt(){this.s=this.s,this.C=this.C}xt.prototype.s=!1,xt.prototype.ma=function(){this.s||(this.s=!0,this.N())},xt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function at(r,a){this.type=r,this.g=this.target=a,this.defaultPrevented=!1}at.prototype.h=function(){this.defaultPrevented=!0};var da=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var r=!1,a=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return r}();function Ee(r,a){if(at.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var l=this.type=r.type,h=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=a,a=r.relatedTarget){if(St){t:{try{Z(a.nodeName);var E=!0;break t}catch{}E=!1}E||(a=null)}}else l=="mouseover"?a=r.fromElement:l=="mouseout"&&(a=r.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:fa[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&Ee.aa.h.call(this)}}V(Ee,at);var fa={2:"touch",3:"pen",4:"mouse"};Ee.prototype.h=function(){Ee.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var rn="closure_listenable_"+(1e6*Math.random()|0),pa=0;function ga(r,a,l,h,E){this.listener=r,this.proxy=null,this.src=a,this.type=l,this.capture=!!h,this.ha=E,this.key=++pa,this.da=this.fa=!1}function sn(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function on(r){this.src=r,this.g={},this.h=0}on.prototype.add=function(r,a,l,h,E){var A=r.toString();r=this.g[A],r||(r=this.g[A]=[],this.h++);var C=er(r,a,h,E);return-1<C?(a=r[C],l||(a.fa=!1)):(a=new ga(a,this.src,A,!!h,E),a.fa=l,r.push(a)),a};function tr(r,a){var l=a.type;if(l in r.g){var h=r.g[l],E=Array.prototype.indexOf.call(h,a,void 0),A;(A=0<=E)&&Array.prototype.splice.call(h,E,1),A&&(sn(a),r.g[l].length==0&&(delete r.g[l],r.h--))}}function er(r,a,l,h){for(var E=0;E<r.length;++E){var A=r[E];if(!A.da&&A.listener==a&&A.capture==!!l&&A.ha==h)return E}return-1}var nr="closure_lm_"+(1e6*Math.random()|0),rr={};function ci(r,a,l,h,E){if(Array.isArray(a)){for(var A=0;A<a.length;A++)ci(r,a[A],l,h,E);return null}return l=fi(l),r&&r[rn]?r.K(a,l,m(h)?!!h.capture:!!h,E):ma(r,a,l,!1,h,E)}function ma(r,a,l,h,E,A){if(!a)throw Error("Invalid event type");var C=m(E)?!!E.capture:!!E,U=sr(r);if(U||(r[nr]=U=new on(r)),l=U.add(a,l,h,C,A),l.proxy)return l;if(h=_a(),l.proxy=h,h.src=r,h.listener=l,r.addEventListener)da||(E=C),E===void 0&&(E=!1),r.addEventListener(a.toString(),h,E);else if(r.attachEvent)r.attachEvent(di(a.toString()),h);else if(r.addListener&&r.removeListener)r.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return l}function _a(){function r(l){return a.call(r.src,r.listener,l)}const a=ya;return r}function hi(r,a,l,h,E){if(Array.isArray(a))for(var A=0;A<a.length;A++)hi(r,a[A],l,h,E);else h=m(h)?!!h.capture:!!h,l=fi(l),r&&r[rn]?(r=r.i,a=String(a).toString(),a in r.g&&(A=r.g[a],l=er(A,l,h,E),-1<l&&(sn(A[l]),Array.prototype.splice.call(A,l,1),A.length==0&&(delete r.g[a],r.h--)))):r&&(r=sr(r))&&(a=r.g[a.toString()],r=-1,a&&(r=er(a,l,h,E)),(l=-1<r?a[r]:null)&&ir(l))}function ir(r){if(typeof r!="number"&&r&&!r.da){var a=r.src;if(a&&a[rn])tr(a.i,r);else{var l=r.type,h=r.proxy;a.removeEventListener?a.removeEventListener(l,h,r.capture):a.detachEvent?a.detachEvent(di(l),h):a.addListener&&a.removeListener&&a.removeListener(h),(l=sr(a))?(tr(l,r),l.h==0&&(l.src=null,a[nr]=null)):sn(r)}}}function di(r){return r in rr?rr[r]:rr[r]="on"+r}function ya(r,a){if(r.da)r=!0;else{a=new Ee(a,this);var l=r.listener,h=r.ha||r.src;r.fa&&ir(r),r=l.call(h,a)}return r}function sr(r){return r=r[nr],r instanceof on?r:null}var or="__closure_events_fn_"+(1e9*Math.random()>>>0);function fi(r){return typeof r=="function"?r:(r[or]||(r[or]=function(a){return r.handleEvent(a)}),r[or])}function lt(){xt.call(this),this.i=new on(this),this.M=this,this.F=null}V(lt,xt),lt.prototype[rn]=!0,lt.prototype.removeEventListener=function(r,a,l,h){hi(this,r,a,l,h)};function gt(r,a){var l,h=r.F;if(h)for(l=[];h;h=h.F)l.push(h);if(r=r.M,h=a.type||a,typeof a=="string")a=new at(a,r);else if(a instanceof at)a.target=a.target||r;else{var E=a;a=new at(h,r),_(a,E)}if(E=!0,l)for(var A=l.length-1;0<=A;A--){var C=a.g=l[A];E=an(C,h,!0,a)&&E}if(C=a.g=r,E=an(C,h,!0,a)&&E,E=an(C,h,!1,a)&&E,l)for(A=0;A<l.length;A++)C=a.g=l[A],E=an(C,h,!1,a)&&E}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var r=this.i,a;for(a in r.g){for(var l=r.g[a],h=0;h<l.length;h++)sn(l[h]);delete r.g[a],r.h--}}this.F=null},lt.prototype.K=function(r,a,l,h){return this.i.add(String(r),a,!1,l,h)},lt.prototype.L=function(r,a,l,h){return this.i.add(String(r),a,!0,l,h)};function an(r,a,l,h){if(a=r.i.g[String(a)],!a)return!0;a=a.concat();for(var E=!0,A=0;A<a.length;++A){var C=a[A];if(C&&!C.da&&C.capture==l){var U=C.listener,rt=C.ha||C.src;C.fa&&tr(r.i,C),E=U.call(rt,h)!==!1&&E}}return E&&!h.defaultPrevented}function pi(r,a,l){if(typeof r=="function")l&&(r=P(r,l));else if(r&&typeof r.handleEvent=="function")r=P(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(r,a||0)}function gi(r){r.g=pi(()=>{r.g=null,r.i&&(r.i=!1,gi(r))},r.l);const a=r.h;r.h=null,r.m.apply(null,a)}class va extends xt{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:gi(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Te(r){xt.call(this),this.h=r,this.g={}}V(Te,xt);var mi=[];function _i(r){Y(r.g,function(a,l){this.g.hasOwnProperty(l)&&ir(a)},r),r.g={}}Te.prototype.N=function(){Te.aa.N.call(this),_i(this)},Te.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ar=c.JSON.stringify,Ea=c.JSON.parse,Ta=class{stringify(r){return c.JSON.stringify(r,void 0)}parse(r){return c.JSON.parse(r,void 0)}};function lr(){}lr.prototype.h=null;function yi(r){return r.h||(r.h=r.i())}function vi(){}var Ie={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ur(){at.call(this,"d")}V(ur,at);function cr(){at.call(this,"c")}V(cr,at);var zt={},Ei=null;function ln(){return Ei=Ei||new lt}zt.La="serverreachability";function Ti(r){at.call(this,zt.La,r)}V(Ti,at);function Ae(r){const a=ln();gt(a,new Ti(a))}zt.STAT_EVENT="statevent";function Ii(r,a){at.call(this,zt.STAT_EVENT,r),this.stat=a}V(Ii,at);function mt(r){const a=ln();gt(a,new Ii(a,r))}zt.Ma="timingevent";function Ai(r,a){at.call(this,zt.Ma,r),this.size=a}V(Ai,at);function we(r,a){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){r()},a)}function Re(){this.g=!0}Re.prototype.xa=function(){this.g=!1};function Ia(r,a,l,h,E,A){r.info(function(){if(r.g)if(A)for(var C="",U=A.split("&"),rt=0;rt<U.length;rt++){var B=U[rt].split("=");if(1<B.length){var ut=B[0];B=B[1];var ct=ut.split("_");C=2<=ct.length&&ct[1]=="type"?C+(ut+"="+B+"&"):C+(ut+"=redacted&")}}else C=null;else C=A;return"XMLHTTP REQ ("+h+") [attempt "+E+"]: "+a+`
`+l+`
`+C})}function Aa(r,a,l,h,E,A,C){r.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+E+"]: "+a+`
`+l+`
`+A+" "+C})}function ee(r,a,l,h){r.info(function(){return"XMLHTTP TEXT ("+a+"): "+Ra(r,l)+(h?" "+h:"")})}function wa(r,a){r.info(function(){return"TIMEOUT: "+a})}Re.prototype.info=function(){};function Ra(r,a){if(!r.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(r=0;r<l.length;r++)if(Array.isArray(l[r])){var h=l[r];if(!(2>h.length)){var E=h[1];if(Array.isArray(E)&&!(1>E.length)){var A=E[0];if(A!="noop"&&A!="stop"&&A!="close")for(var C=1;C<E.length;C++)E[C]=""}}}}return ar(l)}catch{return a}}var un={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},hr;function cn(){}V(cn,lr),cn.prototype.g=function(){return new XMLHttpRequest},cn.prototype.i=function(){return{}},hr=new cn;function kt(r,a,l,h){this.j=r,this.i=a,this.l=l,this.R=h||1,this.U=new Te(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ri}function Ri(){this.i=null,this.g="",this.h=!1}var Si={},dr={};function fr(r,a,l){r.L=1,r.v=pn(Ct(a)),r.m=l,r.P=!0,Pi(r,null)}function Pi(r,a){r.F=Date.now(),hn(r),r.A=Ct(r.v);var l=r.A,h=r.R;Array.isArray(h)||(h=[String(h)]),ji(l.i,"t",h),r.C=0,l=r.j.J,r.h=new Ri,r.g=ss(r.j,l?a:null,!r.m),0<r.O&&(r.M=new va(P(r.Y,r,r.g),r.O)),a=r.U,l=r.g,h=r.ca;var E="readystatechange";Array.isArray(E)||(E&&(mi[0]=E.toString()),E=mi);for(var A=0;A<E.length;A++){var C=ci(l,E[A],h||a.handleEvent,!1,a.h||a);if(!C)break;a.g[C.key]=C}a=r.H?f(r.H):{},r.m?(r.u||(r.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,a)):(r.u="GET",r.g.ea(r.A,r.u,null,a)),Ae(),Ia(r.i,r.u,r.A,r.l,r.R,r.m)}kt.prototype.ca=function(r){r=r.target;const a=this.M;a&&bt(r)==3?a.j():this.Y(r)},kt.prototype.Y=function(r){try{if(r==this.g)t:{const ct=bt(this.g);var a=this.g.Ba();const ie=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||Wi(this.g)))){this.J||ct!=4||a==7||(a==8||0>=ie?Ae(3):Ae(2)),pr(this);var l=this.g.Z();this.X=l;e:if(Ci(this)){var h=Wi(this.g);r="";var E=h.length,A=bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qt(this),Se(this);var C="";break e}this.h.i=new c.TextDecoder}for(a=0;a<E;a++)this.h.h=!0,r+=this.h.i.decode(h[a],{stream:!(A&&a==E-1)});h.length=0,this.h.g+=r,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=l==200,Aa(this.i,this.u,this.A,this.l,this.R,ct,l),this.o){if(this.T&&!this.K){e:{if(this.g){var U,rt=this.g;if((U=rt.g?rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(U)){var B=U;break e}}B=null}if(l=B)ee(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gr(this,l);else{this.o=!1,this.s=3,mt(12),qt(this),Se(this);break t}}if(this.P){l=!0;let vt;for(;!this.J&&this.C<C.length;)if(vt=Sa(this,C),vt==dr){ct==4&&(this.s=4,mt(14),l=!1),ee(this.i,this.l,null,"[Incomplete Response]");break}else if(vt==Si){this.s=4,mt(15),ee(this.i,this.l,C,"[Invalid Chunk]"),l=!1;break}else ee(this.i,this.l,vt,null),gr(this,vt);if(Ci(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||C.length!=0||this.h.h||(this.s=1,mt(16),l=!1),this.o=this.o&&l,!l)ee(this.i,this.l,C,"[Invalid Chunked Response]"),qt(this),Se(this);else if(0<C.length&&!this.W){this.W=!0;var ut=this.j;ut.g==this&&ut.ba&&!ut.M&&(ut.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),Tr(ut),ut.M=!0,mt(11))}}else ee(this.i,this.l,C,null),gr(this,C);ct==4&&qt(this),this.o&&!this.J&&(ct==4?es(this.j,this):(this.o=!1,hn(this)))}else za(this.g),l==400&&0<C.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),qt(this),Se(this)}}}catch{}finally{}};function Ci(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function Sa(r,a){var l=r.C,h=a.indexOf(`
`,l);return h==-1?dr:(l=Number(a.substring(l,h)),isNaN(l)?Si:(h+=1,h+l>a.length?dr:(a=a.slice(h,h+l),r.C=h+l,a)))}kt.prototype.cancel=function(){this.J=!0,qt(this)};function hn(r){r.S=Date.now()+r.I,bi(r,r.I)}function bi(r,a){if(r.B!=null)throw Error("WatchDog timer not null");r.B=we(P(r.ba,r),a)}function pr(r){r.B&&(c.clearTimeout(r.B),r.B=null)}kt.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(wa(this.i,this.A),this.L!=2&&(Ae(),mt(17)),qt(this),this.s=2,Se(this)):bi(this,this.S-r)};function Se(r){r.j.G==0||r.J||es(r.j,r)}function qt(r){pr(r);var a=r.M;a&&typeof a.ma=="function"&&a.ma(),r.M=null,_i(r.U),r.g&&(a=r.g,r.g=null,a.abort(),a.ma())}function gr(r,a){try{var l=r.j;if(l.G!=0&&(l.g==r||mr(l.h,r))){if(!r.K&&mr(l.h,r)&&l.G==3){try{var h=l.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var E=h;if(E[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<r.F)vn(l),_n(l);else break t;Er(l),mt(18)}}else l.za=E[1],0<l.za-l.T&&37500>E[2]&&l.F&&l.v==0&&!l.C&&(l.C=we(P(l.Za,l),6e3));if(1>=Ni(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Gt(l,11)}else if((r.K||l.g==r)&&vn(l),!$(a))for(E=l.Da.g.parse(a),a=0;a<E.length;a++){let B=E[a];if(l.T=B[0],B=B[1],l.G==2)if(B[0]=="c"){l.K=B[1],l.ia=B[2];const ut=B[3];ut!=null&&(l.la=ut,l.j.info("VER="+l.la));const ct=B[4];ct!=null&&(l.Aa=ct,l.j.info("SVER="+l.Aa));const ie=B[5];ie!=null&&typeof ie=="number"&&0<ie&&(h=1.5*ie,l.L=h,l.j.info("backChannelRequestTimeoutMs_="+h)),h=l;const vt=r.g;if(vt){const Tn=vt.g?vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Tn){var A=h.h;A.g||Tn.indexOf("spdy")==-1&&Tn.indexOf("quic")==-1&&Tn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(_r(A,A.h),A.h=null))}if(h.D){const Ir=vt.g?vt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ir&&(h.ya=Ir,q(h.I,h.D,Ir))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-r.F,l.j.info("Handshake RTT: "+l.R+"ms")),h=l;var C=r;if(h.qa=is(h,h.J?h.ia:null,h.W),C.K){xi(h.h,C);var U=C,rt=h.L;rt&&(U.I=rt),U.B&&(pr(U),hn(U)),h.g=C}else Zi(h);0<l.i.length&&yn(l)}else B[0]!="stop"&&B[0]!="close"||Gt(l,7);else l.G==3&&(B[0]=="stop"||B[0]=="close"?B[0]=="stop"?Gt(l,7):vr(l):B[0]!="noop"&&l.l&&l.l.ta(B),l.v=0)}}Ae(4)}catch{}}var Pa=class{constructor(r,a){this.g=r,this.map=a}};function Vi(r){this.l=r||10,c.PerformanceNavigationTiming?(r=c.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Di(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function Ni(r){return r.h?1:r.g?r.g.size:0}function mr(r,a){return r.h?r.h==a:r.g?r.g.has(a):!1}function _r(r,a){r.g?r.g.add(a):r.h=a}function xi(r,a){r.h&&r.h==a?r.h=null:r.g&&r.g.has(a)&&r.g.delete(a)}Vi.prototype.cancel=function(){if(this.i=ki(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function ki(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let a=r.i;for(const l of r.g.values())a=a.concat(l.D);return a}return k(r.i)}function Ca(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(d(r)){for(var a=[],l=r.length,h=0;h<l;h++)a.push(r[h]);return a}a=[],l=0;for(h in r)a[l++]=r[h];return a}function ba(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(d(r)||typeof r=="string"){var a=[];r=r.length;for(var l=0;l<r;l++)a.push(l);return a}a=[],l=0;for(const h in r)a[l++]=h;return a}}}function Oi(r,a){if(r.forEach&&typeof r.forEach=="function")r.forEach(a,void 0);else if(d(r)||typeof r=="string")Array.prototype.forEach.call(r,a,void 0);else for(var l=ba(r),h=Ca(r),E=h.length,A=0;A<E;A++)a.call(void 0,h[A],l&&l[A],r)}var Mi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Va(r,a){if(r){r=r.split("&");for(var l=0;l<r.length;l++){var h=r[l].indexOf("="),E=null;if(0<=h){var A=r[l].substring(0,h);E=r[l].substring(h+1)}else A=r[l];a(A,E?decodeURIComponent(E.replace(/\+/g," ")):"")}}}function Ht(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Ht){this.h=r.h,dn(this,r.j),this.o=r.o,this.g=r.g,fn(this,r.s),this.l=r.l;var a=r.i,l=new be;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),Li(this,l),this.m=r.m}else r&&(a=String(r).match(Mi))?(this.h=!1,dn(this,a[1]||"",!0),this.o=Pe(a[2]||""),this.g=Pe(a[3]||"",!0),fn(this,a[4]),this.l=Pe(a[5]||"",!0),Li(this,a[6]||"",!0),this.m=Pe(a[7]||"")):(this.h=!1,this.i=new be(null,this.h))}Ht.prototype.toString=function(){var r=[],a=this.j;a&&r.push(Ce(a,Fi,!0),":");var l=this.g;return(l||a=="file")&&(r.push("//"),(a=this.o)&&r.push(Ce(a,Fi,!0),"@"),r.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&r.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&r.push("/"),r.push(Ce(l,l.charAt(0)=="/"?xa:Na,!0))),(l=this.i.toString())&&r.push("?",l),(l=this.m)&&r.push("#",Ce(l,Oa)),r.join("")};function Ct(r){return new Ht(r)}function dn(r,a,l){r.j=l?Pe(a,!0):a,r.j&&(r.j=r.j.replace(/:$/,""))}function fn(r,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);r.s=a}else r.s=null}function Li(r,a,l){a instanceof be?(r.i=a,Ma(r.i,r.h)):(l||(a=Ce(a,ka)),r.i=new be(a,r.h))}function q(r,a,l){r.i.set(a,l)}function pn(r){return q(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function Pe(r,a){return r?a?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function Ce(r,a,l){return typeof r=="string"?(r=encodeURI(r).replace(a,Da),l&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function Da(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var Fi=/[#\/\?@]/g,Na=/[#\?:]/g,xa=/[#\?]/g,ka=/[#\?@]/g,Oa=/#/g;function be(r,a){this.h=this.g=null,this.i=r||null,this.j=!!a}function Ot(r){r.g||(r.g=new Map,r.h=0,r.i&&Va(r.i,function(a,l){r.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}n=be.prototype,n.add=function(r,a){Ot(this),this.i=null,r=ne(this,r);var l=this.g.get(r);return l||this.g.set(r,l=[]),l.push(a),this.h+=1,this};function Bi(r,a){Ot(r),a=ne(r,a),r.g.has(a)&&(r.i=null,r.h-=r.g.get(a).length,r.g.delete(a))}function Ui(r,a){return Ot(r),a=ne(r,a),r.g.has(a)}n.forEach=function(r,a){Ot(this),this.g.forEach(function(l,h){l.forEach(function(E){r.call(a,E,h,this)},this)},this)},n.na=function(){Ot(this);const r=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let h=0;h<a.length;h++){const E=r[h];for(let A=0;A<E.length;A++)l.push(a[h])}return l},n.V=function(r){Ot(this);let a=[];if(typeof r=="string")Ui(this,r)&&(a=a.concat(this.g.get(ne(this,r))));else{r=Array.from(this.g.values());for(let l=0;l<r.length;l++)a=a.concat(r[l])}return a},n.set=function(r,a){return Ot(this),this.i=null,r=ne(this,r),Ui(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[a]),this.h+=1,this},n.get=function(r,a){return r?(r=this.V(r),0<r.length?String(r[0]):a):a};function ji(r,a,l){Bi(r,a),0<l.length&&(r.i=null,r.g.set(ne(r,a),k(l)),r.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var h=a[l];const A=encodeURIComponent(String(h)),C=this.V(h);for(h=0;h<C.length;h++){var E=A;C[h]!==""&&(E+="="+encodeURIComponent(String(C[h]))),r.push(E)}}return this.i=r.join("&")};function ne(r,a){return a=String(a),r.j&&(a=a.toLowerCase()),a}function Ma(r,a){a&&!r.j&&(Ot(r),r.i=null,r.g.forEach(function(l,h){var E=h.toLowerCase();h!=E&&(Bi(this,h),ji(this,E,l))},r)),r.j=a}function La(r,a){const l=new Re;if(c.Image){const h=new Image;h.onload=b(Mt,l,"TestLoadImage: loaded",!0,a,h),h.onerror=b(Mt,l,"TestLoadImage: error",!1,a,h),h.onabort=b(Mt,l,"TestLoadImage: abort",!1,a,h),h.ontimeout=b(Mt,l,"TestLoadImage: timeout",!1,a,h),c.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=r}else a(!1)}function Fa(r,a){const l=new Re,h=new AbortController,E=setTimeout(()=>{h.abort(),Mt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(r,{signal:h.signal}).then(A=>{clearTimeout(E),A.ok?Mt(l,"TestPingServer: ok",!0,a):Mt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(E),Mt(l,"TestPingServer: error",!1,a)})}function Mt(r,a,l,h,E){try{E&&(E.onload=null,E.onerror=null,E.onabort=null,E.ontimeout=null),h(l)}catch{}}function Ba(){this.g=new Ta}function Ua(r,a,l){const h=l||"";try{Oi(r,function(E,A){let C=E;m(E)&&(C=ar(E)),a.push(h+A+"="+encodeURIComponent(C))})}catch(E){throw a.push(h+"type="+encodeURIComponent("_badmap")),E}}function Ve(r){this.l=r.Ub||null,this.j=r.eb||!1}V(Ve,lr),Ve.prototype.g=function(){return new gn(this.l,this.j)},Ve.prototype.i=function(r){return function(){return r}}({});function gn(r,a){lt.call(this),this.D=r,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(gn,lt),n=gn.prototype,n.open=function(r,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=a,this.readyState=1,Ne(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(a.body=r),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,De(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,Ne(this)),this.g&&(this.readyState=3,Ne(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;$i(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function $i(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var a=r.value?r.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!r.done}))&&(this.response=this.responseText+=a)}r.done?De(this):Ne(this),this.readyState==3&&$i(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,De(this))},n.Qa=function(r){this.g&&(this.response=r,De(this))},n.ga=function(){this.g&&De(this)};function De(r){r.readyState=4,r.l=null,r.j=null,r.v=null,Ne(r)}n.setRequestHeader=function(r,a){this.u.append(r,a)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,r.push(l[0]+": "+l[1]),l=a.next();return r.join(`\r
`)};function Ne(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(gn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function zi(r){let a="";return Y(r,function(l,h){a+=h,a+=":",a+=l,a+=`\r
`}),a}function yr(r,a,l){t:{for(h in l){var h=!1;break t}h=!0}h||(l=zi(l),typeof r=="string"?l!=null&&encodeURIComponent(String(l)):q(r,a,l))}function W(r){lt.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(W,lt);var ja=/^https?$/i,$a=["POST","PUT"];n=W.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,a,l,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);a=a?a.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():hr.g(),this.v=this.o?yi(this.o):yi(hr),this.g.onreadystatechange=P(this.Ea,this);try{this.B=!0,this.g.open(a,String(r),!0),this.B=!1}catch(A){qi(this,A);return}if(r=l||"",l=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var E in h)l.set(E,h[E]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const A of h.keys())l.set(A,h.get(A));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(l.keys()).find(A=>A.toLowerCase()=="content-type"),E=c.FormData&&r instanceof c.FormData,!(0<=Array.prototype.indexOf.call($a,a,void 0))||h||E||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,C]of l)this.g.setRequestHeader(A,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ki(this),this.u=!0,this.g.send(r),this.u=!1}catch(A){qi(this,A)}};function qi(r,a){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=a,r.m=5,Hi(r),mn(r)}function Hi(r){r.A||(r.A=!0,gt(r,"complete"),gt(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,gt(this,"complete"),gt(this,"abort"),mn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mn(this,!0)),W.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Gi(this):this.bb())},n.bb=function(){Gi(this)};function Gi(r){if(r.h&&typeof u<"u"&&(!r.v[1]||bt(r)!=4||r.Z()!=2)){if(r.u&&bt(r)==4)pi(r.Ea,0,r);else if(gt(r,"readystatechange"),bt(r)==4){r.h=!1;try{const C=r.Z();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var h;if(h=C===0){var E=String(r.D).match(Mi)[1]||null;!E&&c.self&&c.self.location&&(E=c.self.location.protocol.slice(0,-1)),h=!ja.test(E?E.toLowerCase():"")}l=h}if(l)gt(r,"complete"),gt(r,"success");else{r.m=6;try{var A=2<bt(r)?r.g.statusText:""}catch{A=""}r.l=A+" ["+r.Z()+"]",Hi(r)}}finally{mn(r)}}}}function mn(r,a){if(r.g){Ki(r);const l=r.g,h=r.v[0]?()=>{}:null;r.g=null,r.v=null,a||gt(r,"ready");try{l.onreadystatechange=h}catch{}}}function Ki(r){r.I&&(c.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function bt(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<bt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var a=this.g.responseText;return r&&a.indexOf(r)==0&&(a=a.substring(r.length)),Ea(a)}};function Wi(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function za(r){const a={};r=(r.g&&2<=bt(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<r.length;h++){if($(r[h]))continue;var l=v(r[h]);const E=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const A=a[E]||[];a[E]=A,A.push(l)}y(a,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function xe(r,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[r]||a}function Qi(r){this.Aa=0,this.i=[],this.j=new Re,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=xe("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=xe("baseRetryDelayMs",5e3,r),this.cb=xe("retryDelaySeedMs",1e4,r),this.Wa=xe("forwardChannelMaxRetries",2,r),this.wa=xe("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new Vi(r&&r.concurrentRequestLimit),this.Da=new Ba,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Qi.prototype,n.la=8,n.G=1,n.connect=function(r,a,l,h){mt(0),this.W=r,this.H=a||{},l&&h!==void 0&&(this.H.OSID=l,this.H.OAID=h),this.F=this.X,this.I=is(this,null,this.W),yn(this)};function vr(r){if(Xi(r),r.G==3){var a=r.U++,l=Ct(r.I);if(q(l,"SID",r.K),q(l,"RID",a),q(l,"TYPE","terminate"),ke(r,l),a=new kt(r,r.j,a),a.L=2,a.v=pn(Ct(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=ss(a.j,null),a.g.ea(a.v)),a.F=Date.now(),hn(a)}rs(r)}function _n(r){r.g&&(Tr(r),r.g.cancel(),r.g=null)}function Xi(r){_n(r),r.u&&(c.clearTimeout(r.u),r.u=null),vn(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&c.clearTimeout(r.s),r.s=null)}function yn(r){if(!Di(r.h)&&!r.s){r.s=!0;var a=r.Ga;ye||ui(),ve||(ye(),ve=!0),Zn.add(a,r),r.B=0}}function qa(r,a){return Ni(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=a.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=we(P(r.Ga,r,a),ns(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const E=new kt(this,this.j,r);let A=this.o;if(this.S&&(A?(A=f(A),_(A,this.S)):A=this.S),this.m!==null||this.O||(E.H=A,A=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var h=this.i[l];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=Ji(this,E,a),l=Ct(this.I),q(l,"RID",r),q(l,"CVER",22),this.D&&q(l,"X-HTTP-Session-Id",this.D),ke(this,l),A&&(this.O?a="headers="+encodeURIComponent(String(zi(A)))+"&"+a:this.m&&yr(l,this.m,A)),_r(this.h,E),this.Ua&&q(l,"TYPE","init"),this.P?(q(l,"$req",a),q(l,"SID","null"),E.T=!0,fr(E,l,null)):fr(E,l,a),this.G=2}}else this.G==3&&(r?Yi(this,r):this.i.length==0||Di(this.h)||Yi(this))};function Yi(r,a){var l;a?l=a.l:l=r.U++;const h=Ct(r.I);q(h,"SID",r.K),q(h,"RID",l),q(h,"AID",r.T),ke(r,h),r.m&&r.o&&yr(h,r.m,r.o),l=new kt(r,r.j,l,r.B+1),r.m===null&&(l.H=r.o),a&&(r.i=a.D.concat(r.i)),a=Ji(r,l,1e3),l.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),_r(r.h,l),fr(l,h,a)}function ke(r,a){r.H&&Y(r.H,function(l,h){q(a,h,l)}),r.l&&Oi({},function(l,h){q(a,h,l)})}function Ji(r,a,l){l=Math.min(r.i.length,l);var h=r.l?P(r.l.Na,r.l,r):null;t:{var E=r.i;let A=-1;for(;;){const C=["count="+l];A==-1?0<l?(A=E[0].g,C.push("ofs="+A)):A=0:C.push("ofs="+A);let U=!0;for(let rt=0;rt<l;rt++){let B=E[rt].g;const ut=E[rt].map;if(B-=A,0>B)A=Math.max(0,E[rt].g-100),U=!1;else try{Ua(ut,C,"req"+B+"_")}catch{h&&h(ut)}}if(U){h=C.join("&");break t}}}return r=r.i.splice(0,l),a.D=r,h}function Zi(r){if(!r.g&&!r.u){r.Y=1;var a=r.Fa;ye||ui(),ve||(ye(),ve=!0),Zn.add(a,r),r.v=0}}function Er(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=we(P(r.Fa,r),ns(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,ts(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=we(P(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),_n(this),ts(this))};function Tr(r){r.A!=null&&(c.clearTimeout(r.A),r.A=null)}function ts(r){r.g=new kt(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var a=Ct(r.qa);q(a,"RID","rpc"),q(a,"SID",r.K),q(a,"AID",r.T),q(a,"CI",r.F?"0":"1"),!r.F&&r.ja&&q(a,"TO",r.ja),q(a,"TYPE","xmlhttp"),ke(r,a),r.m&&r.o&&yr(a,r.m,r.o),r.L&&(r.g.I=r.L);var l=r.g;r=r.ia,l.L=1,l.v=pn(Ct(a)),l.m=null,l.P=!0,Pi(l,r)}n.Za=function(){this.C!=null&&(this.C=null,_n(this),Er(this),mt(19))};function vn(r){r.C!=null&&(c.clearTimeout(r.C),r.C=null)}function es(r,a){var l=null;if(r.g==a){vn(r),Tr(r),r.g=null;var h=2}else if(mr(r.h,a))l=a.D,xi(r.h,a),h=1;else return;if(r.G!=0){if(a.o)if(h==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var E=r.B;h=ln(),gt(h,new Ai(h,l)),yn(r)}else Zi(r);else if(E=a.s,E==3||E==0&&0<a.X||!(h==1&&qa(r,a)||h==2&&Er(r)))switch(l&&0<l.length&&(a=r.h,a.i=a.i.concat(l)),E){case 1:Gt(r,5);break;case 4:Gt(r,10);break;case 3:Gt(r,6);break;default:Gt(r,2)}}}function ns(r,a){let l=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(l*=2),l*a}function Gt(r,a){if(r.j.info("Error code "+a),a==2){var l=P(r.fb,r),h=r.Xa;const E=!h;h=new Ht(h||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||dn(h,"https"),pn(h),E?La(h.toString(),l):Fa(h.toString(),l)}else mt(2);r.G=0,r.l&&r.l.sa(a),rs(r),Xi(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function rs(r){if(r.G=0,r.ka=[],r.l){const a=ki(r.h);(a.length!=0||r.i.length!=0)&&(N(r.ka,a),N(r.ka,r.i),r.h.i.length=0,k(r.i),r.i.length=0),r.l.ra()}}function is(r,a,l){var h=l instanceof Ht?Ct(l):new Ht(l);if(h.g!="")a&&(h.g=a+"."+h.g),fn(h,h.s);else{var E=c.location;h=E.protocol,a=a?a+"."+E.hostname:E.hostname,E=+E.port;var A=new Ht(null);h&&dn(A,h),a&&(A.g=a),E&&fn(A,E),l&&(A.l=l),h=A}return l=r.D,a=r.ya,l&&a&&q(h,l,a),q(h,"VER",r.la),ke(r,h),h}function ss(r,a,l){if(a&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=r.Ca&&!r.pa?new W(new Ve({eb:l})):new W(r.pa),a.Ha(r.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function os(){}n=os.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function En(){}En.prototype.g=function(r,a){return new yt(r,a)};function yt(r,a){lt.call(this),this.g=new Qi(a),this.l=r,this.h=a&&a.messageUrlParams||null,r=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(r?r["X-WebChannel-Content-Type"]=a.messageContentType:r={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(r?r["X-WebChannel-Client-Profile"]=a.va:r={"X-WebChannel-Client-Profile":a.va}),this.g.S=r,(r=a&&a.Sb)&&!$(r)&&(this.g.m=r),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!$(a)&&(this.g.D=a,r=this.h,r!==null&&a in r&&(r=this.h,a in r&&delete r[a])),this.j=new re(this)}V(yt,lt),yt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},yt.prototype.close=function(){vr(this.g)},yt.prototype.o=function(r){var a=this.g;if(typeof r=="string"){var l={};l.__data__=r,r=l}else this.u&&(l={},l.__data__=ar(r),r=l);a.i.push(new Pa(a.Ya++,r)),a.G==3&&yn(a)},yt.prototype.N=function(){this.g.l=null,delete this.j,vr(this.g),delete this.g,yt.aa.N.call(this)};function as(r){ur.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var a=r.__sm__;if(a){t:{for(const l in a){r=l;break t}r=void 0}(this.i=r)&&(r=this.i,a=a!==null&&r in a?a[r]:void 0),this.data=a}else this.data=r}V(as,ur);function ls(){cr.call(this),this.status=1}V(ls,cr);function re(r){this.g=r}V(re,os),re.prototype.ua=function(){gt(this.g,"a")},re.prototype.ta=function(r){gt(this.g,new as(r))},re.prototype.sa=function(r){gt(this.g,new ls)},re.prototype.ra=function(){gt(this.g,"b")},En.prototype.createWebChannel=En.prototype.g,yt.prototype.send=yt.prototype.o,yt.prototype.open=yt.prototype.m,yt.prototype.close=yt.prototype.close,ho=function(){return new En},co=function(){return ln()},uo=zt,Mr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},un.NO_ERROR=0,un.TIMEOUT=8,un.HTTP_ERROR=6,Cn=un,wi.COMPLETE="complete",lo=wi,vi.EventType=Ie,Ie.OPEN="a",Ie.CLOSE="b",Ie.ERROR="c",Ie.MESSAGE="d",lt.prototype.listen=lt.prototype.K,Fe=vi,ao=Ve,W.prototype.listenOnce=W.prototype.L,W.prototype.getLastError=W.prototype.Ka,W.prototype.getLastErrorCode=W.prototype.Ba,W.prototype.getStatus=W.prototype.Z,W.prototype.getResponseJson=W.prototype.Oa,W.prototype.getResponseText=W.prototype.oa,W.prototype.send=W.prototype.ea,W.prototype.setWithCredentials=W.prototype.Ha,oo=W}).apply(typeof In<"u"?In:typeof self<"u"?self:typeof window<"u"?window:{});const Ts="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ge="10.13.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt=new Zs("@firebase/firestore");function Me(){return Yt.logLevel}function D(n,...t){if(Yt.logLevel<=F.DEBUG){const e=t.map(Kr);Yt.debug(`Firestore (${ge}): ${n}`,...e)}}function Jt(n,...t){if(Yt.logLevel<=F.ERROR){const e=t.map(Kr);Yt.error(`Firestore (${ge}): ${n}`,...e)}}function kn(n,...t){if(Yt.logLevel<=F.WARN){const e=t.map(Kr);Yt.warn(`Firestore (${ge}): ${n}`,...e)}}function Kr(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n="Unexpected state"){const t=`FIRESTORE (${ge}) INTERNAL ASSERTION FAILED: `+n;throw Jt(t),new Error(t)}function J(n,t){n||M()}function z(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends pe{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Bu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(dt.UNAUTHENTICATED))}shutdown(){}}class Uu{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class ju{constructor(t){this.t=t,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let i=this.i;const s=d=>this.i!==i?(i=this.i,e(d)):Promise.resolve();let o=new Qt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Qt,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const d=o;t.enqueueRetryable(async()=>{await d.promise,await s(this.currentUser)})},c=d=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.auth.addAuthTokenListener(this.o),u()};this.t.onInit(d=>c(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?c(d):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Qt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(J(typeof i.accessToken=="string"),new fo(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return J(t===null||typeof t=="string"),new dt(t)}}class $u{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class zu{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new $u(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Hu{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const i=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,D("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>i(o))};const s=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(J(typeof e.token=="string"),this.R=e.token,new qu(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=Gu(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<e&&(i+=t.charAt(s[o]%t.length))}return i}}function j(n,t){return n<t?-1:n>t?1:0}function ue(n,t,e){return n.length===t.length&&n.every((i,s)=>e(i,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new x(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*e));return new nt(e,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t){this.timestamp=t}static fromTimestamp(t){return new K(t)}static min(){return new K(new nt(0,0))}static max(){return new K(new nt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(t,e,i){e===void 0?e=0:e>t.length&&M(),i===void 0?i=t.length-e:i>t.length-e&&M(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return Ke.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ke?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let s=0;s<i;s++){const o=t.get(s),u=e.get(s);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Q extends Ke{construct(t,e,i){return new Q(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new x(S.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(s=>s.length>0))}return new Q(e)}static emptyPath(){return new Q([])}}const Ku=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends Ke{construct(t,e,i){return new ot(t,e,i)}static isValidIdentifier(t){return Ku.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(t){const e=[];let i="",s=0;const o=()=>{if(i.length===0)throw new x(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let u=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new x(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[s+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new x(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=d,s+=2}else c==="`"?(u=!u,s++):c!=="."||u?(i+=c,s++):(o(),s++)}if(o(),u)throw new x(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ot(e)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(Q.fromString(t))}static fromName(t){return new O(Q.fromString(t).popFirst(5))}static empty(){return new O(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Q.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Q.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new Q(t.slice()))}}function Wu(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=K.fromTimestamp(i===1e9?new nt(e+1,0):new nt(e,i));return new Ut(s,O.empty(),t)}function Qu(n){return new Ut(n.readTime,n.key,-1)}class Ut{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new Ut(K.min(),O.empty(),-1)}static max(){return new Ut(K.max(),O.empty(),-1)}}function Xu(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:j(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ju{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function go(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==Yu)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((i,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(i,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(i,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,i)=>{e(t)})}static reject(t){return new R((e,i)=>{i(t)})}static waitFor(t){return new R((e,i)=>{let s=0,o=0,u=!1;t.forEach(c=>{++s,c.next(()=>{++o,u&&o===s&&e()},d=>i(d))}),u=!0,o===s&&e()})}static or(t){let e=R.resolve(!1);for(const i of t)e=e.next(s=>s?R.resolve(s):i());return e}static forEach(t,e){const i=[];return t.forEach((s,o)=>{i.push(e.call(this,s,o))}),this.waitFor(i)}static mapArray(t,e){return new R((i,s)=>{const o=t.length,u=new Array(o);let c=0;for(let d=0;d<o;d++){const m=d;e(t[m]).next(I=>{u[m]=I,++c,c===o&&i(u)},I=>s(I))}})}static doWhile(t,e){return new R((i,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):i()};o()})}}function Zu(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function qn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.ie(i),this.se=i=>e.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}mo.oe=-1;function Wr(n){return n==null}function On(n){return n===0&&1/n==-1/0}function tc(n){return typeof n=="number"&&Number.isInteger(n)&&!On(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ze(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function _o(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t,e){this.comparator=t,this.root=e||it.EMPTY}insert(t,e){return new _t(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,it.BLACK,null,null))}remove(t){return new _t(this.comparator,this.root.remove(t,this.comparator).copy(null,null,it.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new An(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new An(this.root,t,this.comparator,!1)}getReverseIterator(){return new An(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new An(this.root,t,this.comparator,!0)}}class An{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?i(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class it{constructor(t,e,i,s,o){this.key=t,this.value=e,this.color=i??it.RED,this.left=s??it.EMPTY,this.right=o??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,o){return new it(t??this.key,e??this.value,i??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const o=i(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,i),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return it.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const t=this.left.check();if(t!==this.right.check())throw M();return t+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,i,s,o){return this}insert(t,e,i){return new it(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.comparator=t,this.data=new _t(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new As(this.data.getIterator())}getIteratorFrom(t){return new As(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof pt)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=i.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new pt(this.comparator);return e.data=t,e}}class As{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.fields=t,t.sort(ot.comparator)}static empty(){return new At([])}unionWith(t){let e=new pt(ot.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new At(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ue(this.fields,t.fields,(e,i)=>e.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ec("Invalid base64 string: "+o):o}}(t);return new wt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let u=0;u<s.length;++u)o+=String.fromCharCode(s[u]);return o}(t);return new wt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const nc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zt(n){if(J(!!n),typeof n=="string"){let t=0;const e=nc.exec(n);if(J(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:st(n.seconds),nanos:st(n.nanos)}}function st(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function We(n){return typeof n=="string"?wt.fromBase64String(n):wt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function yo(n){const t=n.mapValue.fields.__previous_value__;return Qr(t)?yo(t):t}function Mn(n){const t=Zt(n.mapValue.fields.__local_write_time__.timestampValue);return new nt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(t,e,i,s,o,u,c,d,m){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=d,this.useFetchStreams=m}}class Ln{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Ln("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ln&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ce(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Qr(n)?4:sc(n)?9007199254740991:ic(n)?10:11:M()}function Rt(n,t){if(n===t)return!0;const e=ce(n);if(e!==ce(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Mn(n).isEqual(Mn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const u=Zt(s.timestampValue),c=Zt(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return We(s.bytesValue).isEqual(We(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return st(s.geoPointValue.latitude)===st(o.geoPointValue.latitude)&&st(s.geoPointValue.longitude)===st(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return st(s.integerValue)===st(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const u=st(s.doubleValue),c=st(o.doubleValue);return u===c?On(u)===On(c):isNaN(u)&&isNaN(c)}return!1}(n,t);case 9:return ue(n.arrayValue.values||[],t.arrayValue.values||[],Rt);case 10:case 11:return function(s,o){const u=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Is(u)!==Is(c))return!1;for(const d in u)if(u.hasOwnProperty(d)&&(c[d]===void 0||!Rt(u[d],c[d])))return!1;return!0}(n,t);default:return M()}}function Qe(n,t){return(n.values||[]).find(e=>Rt(e,t))!==void 0}function he(n,t){if(n===t)return 0;const e=ce(n),i=ce(t);if(e!==i)return j(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,t.booleanValue);case 2:return function(o,u){const c=st(o.integerValue||o.doubleValue),d=st(u.integerValue||u.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1}(n,t);case 3:return ws(n.timestampValue,t.timestampValue);case 4:return ws(Mn(n),Mn(t));case 5:return j(n.stringValue,t.stringValue);case 6:return function(o,u){const c=We(o),d=We(u);return c.compareTo(d)}(n.bytesValue,t.bytesValue);case 7:return function(o,u){const c=o.split("/"),d=u.split("/");for(let m=0;m<c.length&&m<d.length;m++){const I=j(c[m],d[m]);if(I!==0)return I}return j(c.length,d.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,u){const c=j(st(o.latitude),st(u.latitude));return c!==0?c:j(st(o.longitude),st(u.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Rs(n.arrayValue,t.arrayValue);case 10:return function(o,u){var c,d,m,I;const w=o.fields||{},P=u.fields||{},b=(c=w.value)===null||c===void 0?void 0:c.arrayValue,V=(d=P.value)===null||d===void 0?void 0:d.arrayValue,k=j(((m=b==null?void 0:b.values)===null||m===void 0?void 0:m.length)||0,((I=V==null?void 0:V.values)===null||I===void 0?void 0:I.length)||0);return k!==0?k:Rs(b,V)}(n.mapValue,t.mapValue);case 11:return function(o,u){if(o===wn.mapValue&&u===wn.mapValue)return 0;if(o===wn.mapValue)return 1;if(u===wn.mapValue)return-1;const c=o.fields||{},d=Object.keys(c),m=u.fields||{},I=Object.keys(m);d.sort(),I.sort();for(let w=0;w<d.length&&w<I.length;++w){const P=j(d[w],I[w]);if(P!==0)return P;const b=he(c[d[w]],m[I[w]]);if(b!==0)return b}return j(d.length,I.length)}(n.mapValue,t.mapValue);default:throw M()}}function ws(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return j(n,t);const e=Zt(n),i=Zt(t),s=j(e.seconds,i.seconds);return s!==0?s:j(e.nanos,i.nanos)}function Rs(n,t){const e=n.values||[],i=t.values||[];for(let s=0;s<e.length&&s<i.length;++s){const o=he(e[s],i[s]);if(o)return o}return j(e.length,i.length)}function de(n){return Lr(n)}function Lr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const i=Zt(e);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return We(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return O.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let i="[",s=!0;for(const o of e.values||[])s?s=!1:i+=",",i+=Lr(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(e){const i=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const u of i)o?o=!1:s+=",",s+=`${u}:${Lr(e.fields[u])}`;return s+"}"}(n.mapValue):M()}function Fr(n){return!!n&&"integerValue"in n}function Xr(n){return!!n&&"arrayValue"in n}function bn(n){return!!n&&"mapValue"in n}function ic(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Ue(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Ze(n.mapValue.fields,(e,i)=>t.mapValue.fields[e]=Ue(i)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ue(n.arrayValue.values[e]);return t}return Object.assign({},n)}function sc(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.value=t}static empty(){return new It({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!bn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ue(e)}setAll(t){let e=ot.emptyPath(),i={},s=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const d=this.getFieldsMap(e);this.applyChanges(d,i,s),i={},s=[],e=c.popLast()}u?i[c.lastSegment()]=Ue(u):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,i,s)}delete(t){const e=this.field(t.popLast());bn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Rt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=e.mapValue.fields[t.get(i)];bn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,i){Ze(e,(s,o)=>t[s]=o);for(const s of i)delete t[s]}clone(){return new It(Ue(this.value))}}function vo(n){const t=[];return Ze(n.fields,(e,i)=>{const s=new ot([e]);if(bn(i)){const o=vo(i.mapValue).fields;if(o.length===0)t.push(s);else for(const u of o)t.push(s.child(u))}else t.push(s)}),new At(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t,e,i,s,o,u,c){this.key=t,this.documentType=e,this.version=i,this.readTime=s,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new Tt(t,0,K.min(),K.min(),K.min(),It.empty(),0)}static newFoundDocument(t,e,i,s){return new Tt(t,1,e,K.min(),i,s,0)}static newNoDocument(t,e){return new Tt(t,2,e,K.min(),K.min(),It.empty(),0)}static newUnknownDocument(t,e){return new Tt(t,3,e,K.min(),K.min(),It.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Tt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(t,e){this.position=t,this.inclusive=e}}function Ss(n,t,e){let i=0;for(let s=0;s<n.position.length;s++){const o=t[s],u=n.position[s];if(o.field.isKeyField()?i=O.comparator(O.fromName(u.referenceValue),e.key):i=he(u,e.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function Ps(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Rt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(t,e="asc"){this.field=t,this.dir=e}}function oc(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{}class et extends Eo{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new lc(t,e,i):e==="array-contains"?new hc(t,i):e==="in"?new dc(t,i):e==="not-in"?new fc(t,i):e==="array-contains-any"?new pc(t,i):new et(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new uc(t,i):new cc(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(he(e,this.value)):e!==null&&ce(this.value)===ce(e)&&this.matchesComparison(he(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jt extends Eo{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new jt(t,e)}matches(t){return To(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function To(n){return n.op==="and"}function Io(n){return ac(n)&&To(n)}function ac(n){for(const t of n.filters)if(t instanceof jt)return!1;return!0}function Br(n){if(n instanceof et)return n.field.canonicalString()+n.op.toString()+de(n.value);if(Io(n))return n.filters.map(t=>Br(t)).join(",");{const t=n.filters.map(e=>Br(e)).join(",");return`${n.op}(${t})`}}function Ao(n,t){return n instanceof et?function(i,s){return s instanceof et&&i.op===s.op&&i.field.isEqual(s.field)&&Rt(i.value,s.value)}(n,t):n instanceof jt?function(i,s){return s instanceof jt&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((o,u,c)=>o&&Ao(u,s.filters[c]),!0):!1}(n,t):void M()}function wo(n){return n instanceof et?function(e){return`${e.field.canonicalString()} ${e.op} ${de(e.value)}`}(n):n instanceof jt?function(e){return e.op.toString()+" {"+e.getFilters().map(wo).join(" ,")+"}"}(n):"Filter"}class lc extends et{constructor(t,e,i){super(t,e,i),this.key=O.fromName(i.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class uc extends et{constructor(t,e){super(t,"in",e),this.keys=Ro("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class cc extends et{constructor(t,e){super(t,"not-in",e),this.keys=Ro("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ro(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>O.fromName(i.referenceValue))}class hc extends et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Xr(e)&&Qe(e.arrayValue,this.value)}}class dc extends et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Qe(this.value.arrayValue,e)}}class fc extends et{constructor(t,e){super(t,"not-in",e)}matches(t){if(Qe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Qe(this.value.arrayValue,e)}}class pc extends et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Xr(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>Qe(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(t,e=null,i=[],s=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=s,this.limit=o,this.startAt=u,this.endAt=c,this.ue=null}}function Cs(n,t=null,e=[],i=[],s=null,o=null,u=null){return new gc(n,t,e,i,s,o,u)}function Yr(n){const t=z(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>Br(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(o){return o.field.canonicalString()+o.dir}(i)).join(","),Wr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>de(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>de(i)).join(",")),t.ue=e}return t.ue}function Jr(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!oc(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Ao(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ps(n.startAt,t.startAt)&&Ps(n.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t,e=null,i=[],s=[],o=null,u="F",c=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=d,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function mc(n,t,e,i,s,o,u,c){return new Hn(n,t,e,i,s,o,u,c)}function _c(n){return new Hn(n)}function bs(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function yc(n){return n.collectionGroup!==null}function je(n){const t=z(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new pt(ot.comparator);return u.filters.forEach(d=>{d.getFlattenedFilters().forEach(m=>{m.isInequality()&&(c=c.add(m.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Bn(o,i))}),e.has(ot.keyField().canonicalString())||t.ce.push(new Bn(ot.keyField(),i))}return t.ce}function Xt(n){const t=z(n);return t.le||(t.le=vc(t,je(n))),t.le}function vc(n,t){if(n.limitType==="F")return Cs(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Bn(s.field,o)});const e=n.endAt?new Fn(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Fn(n.startAt.position,n.startAt.inclusive):null;return Cs(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function Ur(n,t,e){return new Hn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function So(n,t){return Jr(Xt(n),Xt(t))&&n.limitType===t.limitType}function Po(n){return`${Yr(Xt(n))}|lt:${n.limitType}`}function Le(n){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(s=>wo(s)).join(", ")}]`),Wr(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(s=>de(s)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(s=>de(s)).join(",")),`Target(${i})`}(Xt(n))}; limitType=${n.limitType})`}function Zr(n,t){return t.isFoundDocument()&&function(i,s){const o=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):O.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o)}(n,t)&&function(i,s){for(const o of je(i))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(i,s){for(const o of i.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(i,s){return!(i.startAt&&!function(u,c,d){const m=Ss(u,c,d);return u.inclusive?m<=0:m<0}(i.startAt,je(i),s)||i.endAt&&!function(u,c,d){const m=Ss(u,c,d);return u.inclusive?m>=0:m>0}(i.endAt,je(i),s))}(n,t)}function Ec(n){return(t,e)=>{let i=!1;for(const s of je(n)){const o=Tc(s,t,e);if(o!==0)return o;i=i||s.field.isKeyField()}return 0}}function Tc(n,t,e){const i=n.field.isKeyField()?O.comparator(t.key,e.key):function(o,u,c){const d=u.data.field(o),m=c.data.field(o);return d!==null&&m!==null?he(d,m):M()}(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return M()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[s,o]of i)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[e]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ze(this.inner,(e,i)=>{for(const[s,o]of i)t(s,o)})}isEmpty(){return _o(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=new _t(O.comparator);function Un(){return Ic}const Co=new _t(O.comparator);function Rn(...n){let t=Co;for(const e of n)t=t.insert(e.key,e);return t}function bo(n){let t=Co;return n.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function Wt(){return $e()}function Vo(){return $e()}function $e(){return new me(n=>n.toString(),(n,t)=>n.isEqual(t))}const Ac=new _t(O.comparator),wc=new pt(O.comparator);function ft(...n){let t=wc;for(const e of n)t=t.add(e);return t}const Rc=new pt(j);function Sc(){return Rc}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:On(t)?"-0":t}}function Do(n){return{integerValue:""+n}}function Pc(n,t){return tc(t)?Do(t):ti(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(){this._=void 0}}function Cc(n,t,e){return n instanceof jn?function(s,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Qr(o)&&(o=yo(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(e,t):n instanceof Xe?xo(n,t):n instanceof Ye?ko(n,t):function(s,o){const u=No(s,o),c=Vs(u)+Vs(s.Pe);return Fr(u)&&Fr(s.Pe)?Do(c):ti(s.serializer,c)}(n,t)}function bc(n,t,e){return n instanceof Xe?xo(n,t):n instanceof Ye?ko(n,t):e}function No(n,t){return n instanceof $n?function(i){return Fr(i)||function(o){return!!o&&"doubleValue"in o}(i)}(t)?t:{integerValue:0}:null}class jn extends Gn{}class Xe extends Gn{constructor(t){super(),this.elements=t}}function xo(n,t){const e=Oo(t);for(const i of n.elements)e.some(s=>Rt(s,i))||e.push(i);return{arrayValue:{values:e}}}class Ye extends Gn{constructor(t){super(),this.elements=t}}function ko(n,t){let e=Oo(t);for(const i of n.elements)e=e.filter(s=>!Rt(s,i));return{arrayValue:{values:e}}}class $n extends Gn{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Vs(n){return st(n.integerValue||n.doubleValue)}function Oo(n){return Xr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Vc(n,t){return n.field.isEqual(t.field)&&function(i,s){return i instanceof Xe&&s instanceof Xe||i instanceof Ye&&s instanceof Ye?ue(i.elements,s.elements,Rt):i instanceof $n&&s instanceof $n?Rt(i.Pe,s.Pe):i instanceof jn&&s instanceof jn}(n.transform,t.transform)}class Dc{constructor(t,e){this.version=t,this.transformResults=e}}class Vt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Vt}static exists(t){return new Vt(void 0,t)}static updateTime(t){return new Vt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Vn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Kn{}function Mo(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Fo(n.key,Vt.none()):new tn(n.key,n.data,Vt.none());{const e=n.data,i=It.empty();let s=new pt(ot.comparator);for(let o of t.fields)if(!s.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?i.delete(o):i.set(o,u),s=s.add(o)}return new te(n.key,i,new At(s.toArray()),Vt.none())}}function Nc(n,t,e){n instanceof tn?function(s,o,u){const c=s.value.clone(),d=Ns(s.fieldTransforms,o,u.transformResults);c.setAll(d),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(n,t,e):n instanceof te?function(s,o,u){if(!Vn(s.precondition,o))return void o.convertToUnknownDocument(u.version);const c=Ns(s.fieldTransforms,o,u.transformResults),d=o.data;d.setAll(Lo(s)),d.setAll(c),o.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(n,t,e):function(s,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function ze(n,t,e,i){return n instanceof tn?function(o,u,c,d){if(!Vn(o.precondition,u))return c;const m=o.value.clone(),I=xs(o.fieldTransforms,d,u);return m.setAll(I),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null}(n,t,e,i):n instanceof te?function(o,u,c,d){if(!Vn(o.precondition,u))return c;const m=xs(o.fieldTransforms,d,u),I=u.data;return I.setAll(Lo(o)),I.setAll(m),u.convertToFoundDocument(u.version,I).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,t,e,i):function(o,u,c){return Vn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(n,t,e)}function xc(n,t){let e=null;for(const i of n.fieldTransforms){const s=t.data.field(i.field),o=No(i.transform,s||null);o!=null&&(e===null&&(e=It.empty()),e.set(i.field,o))}return e||null}function Ds(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&ue(i,s,(o,u)=>Vc(o,u))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class tn extends Kn{constructor(t,e,i,s=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class te extends Kn{constructor(t,e,i,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Lo(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}}),t}function Ns(n,t,e){const i=new Map;J(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],u=o.transform,c=t.data.field(o.field);i.set(o.field,bc(u,c,e[s]))}return i}function xs(n,t,e){const i=new Map;for(const s of n){const o=s.transform,u=e.data.field(s.field);i.set(s.field,Cc(o,u,t))}return i}class Fo extends Kn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kc extends Kn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(t,e,i,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Nc(o,t,i[s])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=ze(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=ze(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=Vo();return this.mutations.forEach(s=>{const o=t.get(s.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(s.key)?null:c;const d=Mo(u,c);d!==null&&i.set(s.key,d),u.isValidDocument()||u.convertToNoDocument(K.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),ft())}isEqual(t){return this.batchId===t.batchId&&ue(this.mutations,t.mutations,(e,i)=>Ds(e,i))&&ue(this.baseMutations,t.baseMutations,(e,i)=>Ds(e,i))}}class ei{constructor(t,e,i,s){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=s}static from(t,e,i){J(t.mutations.length===i.length);let s=function(){return Ac}();const o=t.mutations;for(let u=0;u<o.length;u++)s=s.insert(o[u].key,i[u].version);return new ei(t,e,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X,L;function Lc(n){switch(n){default:return M();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Fc(n){if(n===void 0)return Jt("GRPC error has no .code"),S.UNKNOWN;switch(n){case X.OK:return S.OK;case X.CANCELLED:return S.CANCELLED;case X.UNKNOWN:return S.UNKNOWN;case X.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case X.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case X.INTERNAL:return S.INTERNAL;case X.UNAVAILABLE:return S.UNAVAILABLE;case X.UNAUTHENTICATED:return S.UNAUTHENTICATED;case X.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case X.NOT_FOUND:return S.NOT_FOUND;case X.ALREADY_EXISTS:return S.ALREADY_EXISTS;case X.PERMISSION_DENIED:return S.PERMISSION_DENIED;case X.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case X.ABORTED:return S.ABORTED;case X.OUT_OF_RANGE:return S.OUT_OF_RANGE;case X.UNIMPLEMENTED:return S.UNIMPLEMENTED;case X.DATA_LOSS:return S.DATA_LOSS;default:return M()}}(L=X||(X={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new so([4294967295,4294967295],0);class Bc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function jr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Uc(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function jc(n,t){return jr(n,t.toTimestamp())}function le(n){return J(!!n),K.fromTimestamp(function(e){const i=Zt(e);return new nt(i.seconds,i.nanos)}(n))}function Bo(n,t){return $r(n,t).canonicalString()}function $r(n,t){const e=function(s){return new Q(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function $c(n){const t=Q.fromString(n);return J(Xc(t)),t}function zr(n,t){return Bo(n.databaseId,t.path)}function zc(n){const t=$c(n);return t.length===4?Q.emptyPath():Hc(t)}function qc(n){return new Q(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Hc(n){return J(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ks(n,t,e){return{name:zr(n,t),fields:e.value.mapValue.fields}}function Gc(n,t){let e;if(t instanceof tn)e={update:ks(n,t.key,t.value)};else if(t instanceof Fo)e={delete:zr(n,t.key)};else if(t instanceof te)e={update:ks(n,t.key,t.data),updateMask:Qc(t.fieldMask)};else{if(!(t instanceof kc))return M();e={verify:zr(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(o,u){const c=u.transform;if(c instanceof jn)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Xe)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ye)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof $n)return{fieldPath:u.field.canonicalString(),increment:c.Pe};throw M()}(0,i))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:jc(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M()}(n,t.precondition)),e}function Kc(n,t){return n&&n.length>0?(J(t!==void 0),n.map(e=>function(s,o){let u=s.updateTime?le(s.updateTime):le(o);return u.isEqual(K.min())&&(u=le(o)),new Dc(u,s.transformResults||[])}(e,t))):[]}function Wc(n){let t=zc(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){J(i===1);const I=e.from[0];I.allDescendants?s=I.collectionId:t=t.child(I.collectionId)}let o=[];e.where&&(o=function(w){const P=Uo(w);return P instanceof jt&&Io(P)?P.getFilters():[P]}(e.where));let u=[];e.orderBy&&(u=function(w){return w.map(P=>function(V){return new Bn(oe(V.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(P))}(e.orderBy));let c=null;e.limit&&(c=function(w){let P;return P=typeof w=="object"?w.value:w,Wr(P)?null:P}(e.limit));let d=null;e.startAt&&(d=function(w){const P=!!w.before,b=w.values||[];return new Fn(b,P)}(e.startAt));let m=null;return e.endAt&&(m=function(w){const P=!w.before,b=w.values||[];return new Fn(b,P)}(e.endAt)),mc(t,s,u,o,c,"F",d,m)}function Uo(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=oe(e.unaryFilter.field);return et.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=oe(e.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=oe(e.unaryFilter.field);return et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=oe(e.unaryFilter.field);return et.create(u,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(n):n.fieldFilter!==void 0?function(e){return et.create(oe(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return jt.create(e.compositeFilter.filters.map(i=>Uo(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(n):M()}function oe(n){return ot.fromServerFormat(n.fieldPath)}function Qc(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Xc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(t){this.ct=t}}function Jc(n){const t=Wc({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ur(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(){this.un=new th}addToCollectionParentIndex(t,e){return this.un.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(Ut.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(Ut.min())}updateCollectionGroup(t,e,i){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class th{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e]||new pt(Q.comparator),o=!s.has(i);return this.index[e]=s.add(i),o}has(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e];return s&&s.has(i)}getEntries(t){return(this.index[t]||new pt(Q.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new fe(0)}static kn(){return new fe(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(){this.changes=new me(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Tt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?R.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(t,e,i,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(i!==null&&ze(i.mutation,s,At.empty(),nt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,ft()).next(()=>i))}getLocalViewOfDocuments(t,e,i=ft()){const s=Wt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,i).next(o=>{let u=Rn();return o.forEach((c,d)=>{u=u.insert(c,d.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const i=Wt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,ft()))}populateOverlays(t,e,i){const s=[];return i.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,i,s){let o=Un();const u=$e(),c=function(){return $e()}();return e.forEach((d,m)=>{const I=i.get(m.key);s.has(m.key)&&(I===void 0||I.mutation instanceof te)?o=o.insert(m.key,m):I!==void 0?(u.set(m.key,I.mutation.getFieldMask()),ze(I.mutation,m,I.mutation.getFieldMask(),nt.now())):u.set(m.key,At.empty())}),this.recalculateAndSaveOverlays(t,o).next(d=>(d.forEach((m,I)=>u.set(m,I)),e.forEach((m,I)=>{var w;return c.set(m,new nh(I,(w=u.get(m))!==null&&w!==void 0?w:null))}),c))}recalculateAndSaveOverlays(t,e){const i=$e();let s=new _t((u,c)=>u-c),o=ft();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(d=>{const m=e.get(d);if(m===null)return;let I=i.get(d)||At.empty();I=c.applyToLocalView(m,I),i.set(d,I);const w=(s.get(c.batchId)||ft()).add(d);s=s.insert(c.batchId,w)})}).next(()=>{const u=[],c=s.getReverseIterator();for(;c.hasNext();){const d=c.getNext(),m=d.key,I=d.value,w=Vo();I.forEach(P=>{if(!o.has(P)){const b=Mo(e.get(P),i.get(P));b!==null&&w.set(P,b),o=o.add(P)}}),u.push(this.documentOverlayCache.saveOverlays(t,m,w))}return R.waitFor(u)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,s){return function(u){return O.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):yc(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,s):this.getDocumentsMatchingCollectionQuery(t,e,i,s)}getNextDocuments(t,e,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,s).next(o=>{const u=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,s-o.size):R.resolve(Wt());let c=-1,d=o;return u.next(m=>R.forEach(m,(I,w)=>(c<w.largestBatchId&&(c=w.largestBatchId),o.get(I)?R.resolve():this.remoteDocumentCache.getEntry(t,I).next(P=>{d=d.insert(I,P)}))).next(()=>this.populateOverlays(t,m,o)).next(()=>this.computeViews(t,d,m,ft())).next(I=>({batchId:c,changes:bo(I)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(i=>{let s=Rn();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,i,s){const o=e.collectionGroup;let u=Rn();return this.indexManager.getCollectionParents(t,o).next(c=>R.forEach(c,d=>{const m=function(w,P){return new Hn(P,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,m,i,s).next(I=>{I.forEach((w,P)=>{u=u.insert(w,P)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,i,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,o,s))).next(u=>{o.forEach((d,m)=>{const I=m.getKey();u.get(I)===null&&(u=u.insert(I,Tt.newInvalidDocument(I)))});let c=Rn();return u.forEach((d,m)=>{const I=o.get(d);I!==void 0&&ze(I.mutation,m,At.empty(),nt.now()),Zr(e,m)&&(c=c.insert(d,m))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return R.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:le(s.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:Jc(s.bundledQuery),readTime:le(s.readTime)}}(e)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(){this.overlays=new _t(O.comparator),this.Ir=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const i=Wt();return R.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&i.set(s,o)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((s,o)=>{this.ht(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,i){const s=this.Ir.get(i);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(i)),R.resolve()}getOverlaysForCollection(t,e,i){const s=Wt(),o=e.length+1,u=new O(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const d=c.getNext().value,m=d.getKey();if(!e.isPrefixOf(m.path))break;m.path.length===o&&d.largestBatchId>i&&s.set(d.getKey(),d)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,i,s){let o=new _t((m,I)=>m-I);const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===e&&m.largestBatchId>i){let I=o.get(m.largestBatchId);I===null&&(I=Wt(),o=o.insert(m.largestBatchId,I)),I.set(m.getKey(),m)}}const c=Wt(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((m,I)=>c.set(m,I)),!(c.size()>=s)););return R.resolve(c)}ht(t,e,i){const s=this.overlays.get(i.key);if(s!==null){const u=this.Ir.get(s.largestBatchId).delete(i.key);this.Ir.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(i.key,new Mc(e,i));let o=this.Ir.get(e);o===void 0&&(o=ft(),this.Ir.set(e,o)),this.Ir.set(e,o.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(){this.sessionToken=wt.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.Tr=new pt(tt.Er),this.dr=new pt(tt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const i=new tt(t,e);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.Vr(new tt(t,e))}mr(t,e){t.forEach(i=>this.removeReference(i,e))}gr(t){const e=new O(new Q([])),i=new tt(e,t),s=new tt(e,t+1),o=[];return this.dr.forEachInRange([i,s],u=>{this.Vr(u),o.push(u.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new O(new Q([])),i=new tt(e,t),s=new tt(e,t+1);let o=ft();return this.dr.forEachInRange([i,s],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new tt(t,0),i=this.Tr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class tt{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return O.comparator(t.key,e.key)||j(t.wr,e.wr)}static Ar(t,e){return j(t.wr,e.wr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new pt(tt.Er)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Oc(o,e,i,s);this.mutationQueue.push(u);for(const c of s)this.br=this.br.add(new tt(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return R.resolve(u)}lookupMutationBatch(t,e){return R.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,s=this.vr(i),o=s<0?0:s;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new tt(e,0),s=new tt(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([i,s],u=>{const c=this.Dr(u.wr);o.push(c)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new pt(j);return e.forEach(s=>{const o=new tt(s,0),u=new tt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,u],c=>{i=i.add(c.wr)})}),R.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,s=i.length+1;let o=i;O.isDocumentKey(o)||(o=o.child(""));const u=new tt(new O(o),0);let c=new pt(j);return this.br.forEachWhile(d=>{const m=d.key.path;return!!i.isPrefixOf(m)&&(m.length===s&&(c=c.add(d.wr)),!0)},u),R.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach(i=>{const s=this.Dr(i);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){J(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return R.forEach(e.mutations,s=>{const o=new tt(s.key,e.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=i})}On(t){}containsKey(t,e){const i=new tt(e,0),s=this.br.firstAfterOrEqual(i);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(t){this.Mr=t,this.docs=function(){return new _t(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,s=this.docs.get(i),o=s?s.size:0,u=this.Mr(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return R.resolve(i?i.document.mutableCopy():Tt.newInvalidDocument(e))}getEntries(t,e){let i=Un();return e.forEach(s=>{const o=this.docs.get(s);i=i.insert(s,o?o.document.mutableCopy():Tt.newInvalidDocument(s))}),R.resolve(i)}getDocumentsMatchingQuery(t,e,i,s){let o=Un();const u=e.path,c=new O(u.child("")),d=this.docs.getIteratorFrom(c);for(;d.hasNext();){const{key:m,value:{document:I}}=d.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||Xu(Qu(I),i)<=0||(s.has(I.key)||Zr(e,I))&&(o=o.insert(I.key,I.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,i,s){M()}Or(t,e){return R.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new uh(this)}getSize(t){return R.resolve(this.size)}}class uh extends eh{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(i)}),R.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(t){this.persistence=t,this.Nr=new me(e=>Yr(e),Jr),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ni,this.targetCount=0,this.kr=fe.Bn()}forEachTarget(t,e){return this.Nr.forEach((i,s)=>e(s)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.Lr&&(this.Lr=e),R.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new fe(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.Kn(e),R.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,i){let s=0;const o=[];return this.Nr.forEach((u,c)=>{c.sequenceNumber<=e&&i.get(c.targetId)===null&&(this.Nr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),R.waitFor(o).next(()=>s)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const i=this.Nr.get(e)||null;return R.resolve(i)}addMatchingKeys(t,e,i){return this.Br.Rr(e,i),R.resolve()}removeMatchingKeys(t,e,i){this.Br.mr(e,i);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(u=>{o.push(s.markPotentiallyOrphaned(t,u))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const i=this.Br.yr(e);return R.resolve(i)}containsKey(t,e){return R.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t,e){this.qr={},this.overlays={},this.Qr=new mo(0),this.Kr=!1,this.Kr=!0,this.$r=new oh,this.referenceDelegate=t(this),this.Ur=new ch(this),this.indexManager=new Zc,this.remoteDocumentCache=function(s){return new lh(s)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new Yc(e),this.Gr=new ih(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new sh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.qr[t.toKey()];return i||(i=new ah(e,this.referenceDelegate),this.qr[t.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,i){D("MemoryPersistence","Starting transaction:",t);const s=new dh(this.Qr.next());return this.referenceDelegate.zr(),i(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return R.or(Object.values(this.qr).map(i=>()=>i.containsKey(t,e)))}}class dh extends Ju{constructor(t){super(),this.currentSequenceNumber=t}}class ri{constructor(t){this.persistence=t,this.Jr=new ni,this.Yr=null}static Zr(t){return new ri(t)}get Xr(){if(this.Yr)return this.Yr;throw M()}addReference(t,e,i){return this.Jr.addReference(i,e),this.Xr.delete(i.toString()),R.resolve()}removeReference(t,e,i){return this.Jr.removeReference(i,e),this.Xr.add(i.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),R.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>i.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Xr,i=>{const s=O.fromPath(i);return this.ei(t,s).next(o=>{o||e.removeEntry(s,K.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(i=>{i?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return R.or([()=>R.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(t,e,i,s){this.targetId=t,this.fromCache=e,this.$i=i,this.Ui=s}static Wi(t,e){let i=ft(),s=ft();for(const o of e.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new ii(t,e.fromCache,i,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Il()?8:Zu(El())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,i,s){const o={result:null};return this.Yi(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.Zi(t,e,s,i).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new fh;return this.Xi(t,e,u).next(c=>{if(o.result=c,this.zi)return this.es(t,e,u,c.size)})}).next(()=>o.result)}es(t,e,i,s){return i.documentReadCount<this.ji?(Me()<=F.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Le(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),R.resolve()):(Me()<=F.DEBUG&&D("QueryEngine","Query:",Le(e),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Hi*s?(Me()<=F.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Le(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Xt(e))):R.resolve())}Yi(t,e){if(bs(e))return R.resolve(null);let i=Xt(e);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Ur(e,null,"F"),i=Xt(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(o=>{const u=ft(...o);return this.Ji.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,i).next(d=>{const m=this.ts(e,c);return this.ns(e,m,u,d.readTime)?this.Yi(t,Ur(e,null,"F")):this.rs(t,m,e,d)}))})))}Zi(t,e,i,s){return bs(e)||s.isEqual(K.min())?R.resolve(null):this.Ji.getDocuments(t,i).next(o=>{const u=this.ts(e,o);return this.ns(e,u,i,s)?R.resolve(null):(Me()<=F.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Le(e)),this.rs(t,u,e,Wu(s,-1)).next(c=>c))})}ts(t,e){let i=new pt(Ec(t));return e.forEach((s,o)=>{Zr(t,o)&&(i=i.add(o))}),i}ns(t,e,i,s){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,i){return Me()<=F.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Le(e)),this.Ji.getDocumentsMatchingQuery(t,e,Ut.min(),i)}rs(t,e,i,s){return this.Ji.getDocumentsMatchingQuery(t,i,s).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(t,e,i,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new _t(j),this._s=new me(o=>Yr(o),Jr),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(i)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new rh(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function mh(n,t,e,i){return new gh(n,t,e,i)}async function jo(n,t){const e=z(n);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(i))).next(o=>{const u=[],c=[];let d=ft();for(const m of s){u.push(m.batchId);for(const I of m.mutations)d=d.add(I.key)}for(const m of o){c.push(m.batchId);for(const I of m.mutations)d=d.add(I.key)}return e.localDocuments.getDocuments(i,d).next(m=>({hs:m,removedBatchIds:u,addedBatchIds:c}))})})}function _h(n,t){const e=z(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(c,d,m,I){const w=m.batch,P=w.keys();let b=R.resolve();return P.forEach(V=>{b=b.next(()=>I.getEntry(d,V)).next(k=>{const N=m.docVersions.get(V);J(N!==null),k.version.compareTo(N)<0&&(w.applyToRemoteDocument(k,m),k.isValidDocument()&&(k.setReadTime(m.commitVersion),I.addEntry(k)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(d,w))}(e,i,t,o).next(()=>o.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(c){let d=ft();for(let m=0;m<c.mutationResults.length;++m)c.mutationResults[m].transformResults.length>0&&(d=d.add(c.batch.mutations[m].key));return d}(t))).next(()=>e.localDocuments.getDocuments(i,s))})}function yh(n){const t=z(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function vh(n,t){const e=z(n);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}class Os{constructor(){this.activeTargetIds=Sc()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Eh{constructor(){this.so=new Os,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,i){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Os,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sn=null;function Pr(){return Sn===null?Sn=function(){return 268435456+Math.round(2147483648*Math.random())}():Sn++,"0x"+Sn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="WebChannelConnection";class wh extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,i,s,o,u){const c=Pr(),d=this.xo(e,i.toUriEncodedString());D("RestConnection",`Sending RPC '${e}' ${c}:`,d,s);const m={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(m,o,u),this.No(e,d,m,s).then(I=>(D("RestConnection",`Received RPC '${e}' ${c}: `,I),I),I=>{throw kn("RestConnection",`RPC '${e}' ${c} failed with error: `,I,"url: ",d,"request:",s),I})}Lo(e,i,s,o,u,c){return this.Mo(e,i,s,o,u)}Oo(e,i,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ge}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}xo(e,i){const s=Ih[e];return`${this.Do}/v1/${i}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,i,s){const o=Pr();return new Promise((u,c)=>{const d=new oo;d.setWithCredentials(!0),d.listenOnce(lo.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Cn.NO_ERROR:const I=d.getResponseJson();D(ht,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(I)),u(I);break;case Cn.TIMEOUT:D(ht,`RPC '${t}' ${o} timed out`),c(new x(S.DEADLINE_EXCEEDED,"Request time out"));break;case Cn.HTTP_ERROR:const w=d.getStatus();if(D(ht,`RPC '${t}' ${o} failed with status:`,w,"response text:",d.getResponseText()),w>0){let P=d.getResponseJson();Array.isArray(P)&&(P=P[0]);const b=P==null?void 0:P.error;if(b&&b.status&&b.message){const V=function(N){const H=N.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(H)>=0?H:S.UNKNOWN}(b.status);c(new x(V,b.message))}else c(new x(S.UNKNOWN,"Server responded with status "+d.getStatus()))}else c(new x(S.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{D(ht,`RPC '${t}' ${o} completed.`)}});const m=JSON.stringify(s);D(ht,`RPC '${t}' ${o} sending request:`,s),d.send(e,"POST",m,i,15)})}Bo(t,e,i){const s=Pr(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=ho(),c=co(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(d.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(d.xmlHttpFactory=new ao({})),this.Oo(d.initMessageHeaders,e,i),d.encodeInitMessageHeaders=!0;const I=o.join("");D(ht,`Creating RPC '${t}' stream ${s}: ${I}`,d);const w=u.createWebChannel(I,d);let P=!1,b=!1;const V=new Ah({Io:N=>{b?D(ht,`Not sending because RPC '${t}' stream ${s} is closed:`,N):(P||(D(ht,`Opening RPC '${t}' stream ${s} transport.`),w.open(),P=!0),D(ht,`RPC '${t}' stream ${s} sending:`,N),w.send(N))},To:()=>w.close()}),k=(N,H,$)=>{N.listen(H,G=>{try{$(G)}catch(Z){setTimeout(()=>{throw Z},0)}})};return k(w,Fe.EventType.OPEN,()=>{b||(D(ht,`RPC '${t}' stream ${s} transport opened.`),V.yo())}),k(w,Fe.EventType.CLOSE,()=>{b||(b=!0,D(ht,`RPC '${t}' stream ${s} transport closed`),V.So())}),k(w,Fe.EventType.ERROR,N=>{b||(b=!0,kn(ht,`RPC '${t}' stream ${s} transport errored:`,N),V.So(new x(S.UNAVAILABLE,"The operation could not be completed")))}),k(w,Fe.EventType.MESSAGE,N=>{var H;if(!b){const $=N.data[0];J(!!$);const G=$,Z=G.error||((H=G[0])===null||H===void 0?void 0:H.error);if(Z){D(ht,`RPC '${t}' stream ${s} received error:`,Z);const St=Z.status;let Y=function(g){const _=X[g];if(_!==void 0)return Fc(_)}(St),y=Z.message;Y===void 0&&(Y=S.INTERNAL,y="Unknown error status: "+St+" with message "+Z.message),b=!0,V.So(new x(Y,y)),w.close()}else D(ht,`RPC '${t}' stream ${s} received:`,$),V.bo($)}}),k(c,uo.STAT_EVENT,N=>{N.stat===Mr.PROXY?D(ht,`RPC '${t}' stream ${s} detected buffering proxy`):N.stat===Mr.NOPROXY&&D(ht,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.wo()},0),V}}function Cr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(n){return new Bc(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(t,e,i=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=i,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-i);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(t,e,i,s,o,u,c,d){this.ui=t,this.Ho=i,this.Jo=s,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=d,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new $o(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(Jt(e.toString()),Jt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Yo===e&&this.P_(i,s)},i=>{t(()=>{const s=new x(S.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(s)})})}P_(t,e){const i=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{i(()=>this.I_(s))}),this.stream.onMessage(s=>{i(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return D("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Sh extends Rh{constructor(t,e,i,s,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,s,u),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return J(!!t.streamToken),this.lastStreamToken=t.streamToken,J(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){J(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Kc(t.writeResults,t.commitTime),i=le(t.commitTime);return this.listener.g_(i,e)}p_(){const t={};t.database=qc(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>Gc(this.serializer,i))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph extends class{}{constructor(t,e,i,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new x(S.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Mo(t,$r(e,i),s,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(S.UNKNOWN,o.toString())})}Lo(t,e,i,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.Lo(t,$r(e,i),s,u,c,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new x(S.UNKNOWN,u.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Ch{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Jt(e),this.D_=!1):D("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(t,e,i,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(u=>{i.enqueueAndForget(async()=>{nn(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(d){const m=z(d);m.L_.add(4),await en(m),m.q_.set("Unknown"),m.L_.delete(4),await Qn(m)}(this))})}),this.q_=new Ch(i,s)}}async function Qn(n){if(nn(n))for(const t of n.B_)await t(!0)}async function en(n){for(const t of n.B_)await t(!1)}function nn(n){return z(n).L_.size===0}async function zo(n,t,e){if(!qn(t))throw t;n.L_.add(1),await en(n),n.q_.set("Offline"),e||(e=()=>yh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await Qn(n)})}function qo(n,t){return t().catch(e=>zo(n,e,t))}async function Xn(n){const t=z(n),e=$t(t);let i=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;Vh(t);)try{const s=await vh(t.localStore,i);if(s===null){t.O_.length===0&&e.o_();break}i=s.batchId,Dh(t,s)}catch(s){await zo(t,s)}Ho(t)&&Go(t)}function Vh(n){return nn(n)&&n.O_.length<10}function Dh(n,t){n.O_.push(t);const e=$t(n);e.r_()&&e.V_&&e.m_(t.mutations)}function Ho(n){return nn(n)&&!$t(n).n_()&&n.O_.length>0}function Go(n){$t(n).start()}async function Nh(n){$t(n).p_()}async function xh(n){const t=$t(n);for(const e of n.O_)t.m_(e.mutations)}async function kh(n,t,e){const i=n.O_.shift(),s=ei.from(i,t,e);await qo(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Xn(n)}async function Oh(n,t){t&&$t(n).V_&&await async function(i,s){if(function(u){return Lc(u)&&u!==S.ABORTED}(s.code)){const o=i.O_.shift();$t(i).s_(),await qo(i,()=>i.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Xn(i)}}(n,t),Ho(n)&&Go(n)}async function Ls(n,t){const e=z(n);e.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const i=nn(e);e.L_.add(3),await en(e),i&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Qn(e)}async function Mh(n,t){const e=z(n);t?(e.L_.delete(2),await Qn(e)):t||(e.L_.add(2),await en(e),e.q_.set("Unknown"))}function $t(n){return n.U_||(n.U_=function(e,i,s){const o=z(e);return o.w_(),new Sh(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Nh.bind(null,n),mo:Oh.bind(null,n),f_:xh.bind(null,n),g_:kh.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Xn(n)):(await n.U_.stop(),n.O_.length>0&&(D("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t,e,i,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new Qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,s,o){const u=Date.now()+i,c=new si(t,e,u,s,o);return c.start(i),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ko(n,t){if(Jt("AsyncQueue",`${t}: ${n}`),qn(n))return new x(S.UNAVAILABLE,`${t}: ${n}`);throw n}class Lh{constructor(){this.queries=Fs(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,i){const s=z(e),o=s.queries;s.queries=Fs(),o.forEach((u,c)=>{for(const d of c.j_)d.onError(i)})})(this,new x(S.ABORTED,"Firestore shutting down"))}}function Fs(){return new me(n=>Po(n),So)}function Fh(n){n.Y_.forEach(t=>{t.next()})}var Bs,Us;(Us=Bs||(Bs={})).ea="default",Us.Cache="cache";class Bh{constructor(t,e,i,s,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Ca={},this.Fa=new me(c=>Po(c),So),this.Ma=new Map,this.xa=new Set,this.Oa=new _t(O.comparator),this.Na=new Map,this.La=new ni,this.Ba={},this.ka=new Map,this.qa=fe.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Uh(n,t,e){const i=qh(n);try{const s=await function(u,c){const d=z(u),m=nt.now(),I=c.reduce((b,V)=>b.add(V.key),ft());let w,P;return d.persistence.runTransaction("Locally write mutations","readwrite",b=>{let V=Un(),k=ft();return d.cs.getEntries(b,I).next(N=>{V=N,V.forEach((H,$)=>{$.isValidDocument()||(k=k.add(H))})}).next(()=>d.localDocuments.getOverlayedDocuments(b,V)).next(N=>{w=N;const H=[];for(const $ of c){const G=xc($,w.get($.key).overlayedDocument);G!=null&&H.push(new te($.key,G,vo(G.value.mapValue),Vt.exists(!0)))}return d.mutationQueue.addMutationBatch(b,m,H,c)}).next(N=>{P=N;const H=N.applyToLocalDocumentSet(w,k);return d.documentOverlayCache.saveOverlays(b,N.batchId,H)})}).then(()=>({batchId:P.batchId,changes:bo(w)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(u,c,d){let m=u.Ba[u.currentUser.toKey()];m||(m=new _t(j)),m=m.insert(c,d),u.Ba[u.currentUser.toKey()]=m}(i,s.batchId,e),await Yn(i,s.changes),await Xn(i.remoteStore)}catch(s){const o=Ko(s,"Failed to persist write");e.reject(o)}}function js(n,t,e){const i=z(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const s=[];i.Fa.forEach((o,u)=>{const c=u.view.Z_(t);c.snapshot&&s.push(c.snapshot)}),function(u,c){const d=z(u);d.onlineState=c;let m=!1;d.queries.forEach((I,w)=>{for(const P of w.j_)P.Z_(c)&&(m=!0)}),m&&Fh(d)}(i.eventManager,t),s.length&&i.Ca.d_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function jh(n,t){const e=z(n),i=t.batch.batchId;try{const s=await _h(e.localStore,t);Qo(e,i,null),Wo(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await Yn(e,s)}catch(s){await go(s)}}async function $h(n,t,e){const i=z(n);try{const s=await function(u,c){const d=z(u);return d.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let I;return d.mutationQueue.lookupMutationBatch(m,c).next(w=>(J(w!==null),I=w.keys(),d.mutationQueue.removeMutationBatch(m,w))).next(()=>d.mutationQueue.performConsistencyCheck(m)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(m,I,c)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,I)).next(()=>d.localDocuments.getDocuments(m,I))})}(i.localStore,t);Qo(i,t,e),Wo(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await Yn(i,s)}catch(s){await go(s)}}function Wo(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function Qo(n,t,e){const i=z(n);let s=i.Ba[i.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),i.Ba[i.currentUser.toKey()]=s}}async function Yn(n,t,e){const i=z(n),s=[],o=[],u=[];i.Fa.isEmpty()||(i.Fa.forEach((c,d)=>{u.push(i.Ka(d,t,e).then(m=>{var I;if((m||e)&&i.isPrimaryClient){const w=m?!m.fromCache:(I=void 0)===null||I===void 0?void 0:I.current;i.sharedClientState.updateQueryState(d.targetId,w?"current":"not-current")}if(m){s.push(m);const w=ii.Wi(d.targetId,m);o.push(w)}}))}),await Promise.all(u),i.Ca.d_(s),await async function(d,m){const I=z(d);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>R.forEach(m,P=>R.forEach(P.$i,b=>I.persistence.referenceDelegate.addReference(w,P.targetId,b)).next(()=>R.forEach(P.Ui,b=>I.persistence.referenceDelegate.removeReference(w,P.targetId,b)))))}catch(w){if(!qn(w))throw w;D("LocalStore","Failed to update sequence numbers: "+w)}for(const w of m){const P=w.targetId;if(!w.fromCache){const b=I.os.get(P),V=b.snapshotVersion,k=b.withLastLimboFreeSnapshotVersion(V);I.os=I.os.insert(P,k)}}}(i.localStore,o))}async function zh(n,t){const e=z(n);if(!e.currentUser.isEqual(t)){D("SyncEngine","User change. New user:",t.toKey());const i=await jo(e.localStore,t);e.currentUser=t,function(o,u){o.ka.forEach(c=>{c.forEach(d=>{d.reject(new x(S.CANCELLED,u))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await Yn(e,i.hs)}}function qh(n){const t=z(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=jh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=$h.bind(null,t),t}class $s{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Wn(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return mh(this.persistence,new ph,t.initialUser,this.serializer)}createPersistence(t){return new hh(ri.Zr,this.serializer)}createSharedClientState(t){return new Eh}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Hh{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>js(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=zh.bind(null,this.syncEngine),await Mh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Lh}()}createDatastore(t){const e=Wn(t.databaseInfo.databaseId),i=function(o){return new wh(o)}(t.databaseInfo);return function(o,u,c,d){return new Ph(o,u,c,d)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,s,o,u,c){return new bh(i,s,o,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>js(this.syncEngine,e,0),function(){return Ms.D()?new Ms:new Th}())}createSyncEngine(t,e){return function(s,o,u,c,d,m,I){const w=new Bh(s,o,u,c,d,m);return I&&(w.Qa=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=z(s);D("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await en(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(t,e,i,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=dt.UNAUTHENTICATED,this.clientId=po.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async o=>{D("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(i,o=>(D("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Ko(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function br(n,t){n.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await jo(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function zs(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Wh(n);D("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(i=>Ls(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Ls(t.remoteStore,s)),n._onlineComponents=t}function Kh(n){return n.name==="FirebaseError"?n.code===S.FAILED_PRECONDITION||n.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Wh(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await br(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Kh(e))throw e;kn("Error using user provided cache. Falling back to memory cache: "+e),await br(n,new $s)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await br(n,new $s);return n._offlineComponents}async function Qh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await zs(n,n._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await zs(n,new Hh))),n._onlineComponents}function Xh(n){return Qh(n).then(t=>t.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(n,t,e){if(!e)throw new x(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Yh(n,t,e,i){if(t===!0&&i===!0)throw new x(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Hs(n){if(!O.isDocumentKey(n))throw new x(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Gs(n){if(O.isDocumentKey(n))throw new x(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function oi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M()}function Jo(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new x(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=oi(n);throw new x(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new x(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new x(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Yh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xo((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new x(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new x(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new x(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Jn{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ks({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new x(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ks(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Bu;switch(i.type){case"firstParty":return new zu(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new x(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=qs.get(e);i&&(D("ComponentProvider","Removing Datastore"),qs.delete(e),i.terminate())}(this),Promise.resolve()}}function Jh(n,t,e,i={}){var s;const o=(n=Jo(n,Jn))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&kn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),i.mockUserToken){let c,d;if(typeof i.mockUserToken=="string")c=i.mockUserToken,d=dt.MOCK_USER;else{c=vl(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const m=i.mockUserToken.sub||i.mockUserToken.user_id;if(!m)throw new x(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new dt(m)}n._authCredentials=new Uu(new fo(c,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new ai(this.firestore,t,this._query)}}class Dt{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Dt(this.firestore,t,this._key)}}class Bt extends ai{constructor(t,e,i){super(t,e,_c(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Dt(this.firestore,null,new O(t))}withConverter(t){return new Bt(this.firestore,t,this._path)}}function Zh(n,t,...e){if(n=qe(n),Yo("collection","path",t),n instanceof Jn){const i=Q.fromString(t,...e);return Gs(i),new Bt(n,null,i)}{if(!(n instanceof Dt||n instanceof Bt))throw new x(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Q.fromString(t,...e));return Gs(i),new Bt(n.firestore,null,i)}}function td(n,t,...e){if(n=qe(n),arguments.length===1&&(t=po.newId()),Yo("doc","path",t),n instanceof Jn){const i=Q.fromString(t,...e);return Hs(i),new Dt(n,null,new O(i))}{if(!(n instanceof Dt||n instanceof Bt))throw new x(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Q.fromString(t,...e));return Hs(i),new Dt(n.firestore,n instanceof Bt?n.converter:null,new O(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new $o(this,"async_queue_retry"),this.Eu=()=>{const e=Cr();e&&D("AsyncQueue","Visibility state changed to "+e.visibilityState),this.t_.jo()};const t=Cr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.du(),this.Au(t)}enterRestrictedMode(t){if(!this.cu){this.cu=!0,this.Iu=t||!1;const e=Cr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Eu)}}enqueue(t){if(this.du(),this.cu)return new Promise(()=>{});const e=new Qt;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.uu.push(t),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(t){if(!qn(t))throw t;D("AsyncQueue","Operation failed with retryable error: "+t)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(t){const e=this.au.then(()=>(this.Pu=!0,t().catch(i=>{this.hu=i,this.Pu=!1;const s=function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c}(i);throw Jt("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Pu=!1,i))));return this.au=e,e}enqueueAfterDelay(t,e,i){this.du(),this.Tu.indexOf(t)>-1&&(e=0);const s=si.createAndSchedule(this,t,e,i,o=>this.Vu(o));return this.lu.push(s),s}du(){this.hu&&M()}verifyOperationInProgress(){}async mu(){let t;do t=this.au,await t;while(t!==this.au)}fu(t){for(const e of this.lu)if(e.timerId===t)return!0;return!1}gu(t){return this.mu().then(()=>{this.lu.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this.lu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.mu()})}pu(t){this.Tu.push(t)}Vu(t){const e=this.lu.indexOf(t);this.lu.splice(e,1)}}class Zo extends Jn{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=function(){return new ed}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ta(this),this._firestoreClient.terminate()}}function nd(n,t){const e=typeof n=="object"?n:Pu(),i=typeof n=="string"?n:"(default)",s=Au(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=_l("firestore");o&&Jh(s,...o)}return s}function rd(n){return n._firestoreClient||ta(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function ta(n){var t,e,i;const s=n._freezeSettings(),o=function(c,d,m,I){return new rc(c,d,m,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,Xo(I.experimentalLongPollingOptions),I.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new Gh(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Je(wt.fromBase64String(t))}catch(e){throw new x(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Je(wt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,s){if(i.length!==s.length)return!1;for(let o=0;o<i.length;++o)if(i[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id=/^__.*__$/;class sd{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new te(t,this.data,this.fieldMask,e,this.fieldTransforms):new tn(t,this.data,e,this.fieldTransforms)}}function sa(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class li{constructor(t,e,i,s,o,u){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=s,o===void 0&&this.yu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(t){return new li(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Su({path:i,Du:!1});return s.vu(t),s}Cu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Su({path:i,Du:!1});return s.yu(),s}Fu(t){return this.Su({path:void 0,Du:!0})}Mu(t){return zn(t,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}yu(){if(this.path)for(let t=0;t<this.path.length;t++)this.vu(this.path.get(t))}vu(t){if(t.length===0)throw this.Mu("Document fields must not be empty");if(sa(this.wu)&&id.test(t))throw this.Mu('Document fields cannot begin and end with "__"')}}class od{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||Wn(t)}Nu(t,e,i,s=!1){return new li({wu:t,methodName:e,Ou:i,path:ot.emptyPath(),Du:!1,xu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ad(n){const t=n._freezeSettings(),e=Wn(n._databaseId);return new od(n._databaseId,!!t.ignoreUndefinedProperties,e)}function ld(n,t,e,i,s,o={}){const u=n.Nu(o.merge||o.mergeFields?2:0,t,e,s);ua("Data must be an object, but it was:",u,i);const c=aa(i,u);let d,m;if(o.merge)d=new At(u.fieldMask),m=u.fieldTransforms;else if(o.mergeFields){const I=[];for(const w of o.mergeFields){const P=ud(t,w,e);if(!u.contains(P))throw new x(S.INVALID_ARGUMENT,`Field '${P}' is specified in your field mask but missing from your input data.`);dd(I,P)||I.push(P)}d=new At(I),m=u.fieldTransforms.filter(w=>d.covers(w.field))}else d=null,m=u.fieldTransforms;return new sd(new It(c),d,m)}function oa(n,t){if(la(n=qe(n)))return ua("Unsupported field value:",t,n),aa(n,t);if(n instanceof na)return function(i,s){if(!sa(s.wu))throw s.Mu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Mu(`${i._methodName}() is not currently supported inside arrays`);const o=i._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Du&&t.wu!==4)throw t.Mu("Nested arrays are not supported");return function(i,s){const o=[];let u=0;for(const c of i){let d=oa(c,s.Fu(u));d==null&&(d={nullValue:"NULL_VALUE"}),o.push(d),u++}return{arrayValue:{values:o}}}(n,t)}return function(i,s){if((i=qe(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Pc(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const o=nt.fromDate(i);return{timestampValue:jr(s.serializer,o)}}if(i instanceof nt){const o=new nt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:jr(s.serializer,o)}}if(i instanceof ra)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Je)return{bytesValue:Uc(s.serializer,i._byteString)};if(i instanceof Dt){const o=s.databaseId,u=i.firestore._databaseId;if(!u.isEqual(o))throw s.Mu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Bo(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof ia)return function(u,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:u.toArray().map(d=>{if(typeof d!="number")throw c.Mu("VectorValues must only contain numeric values.");return ti(c.serializer,d)})}}}}}}(i,s);throw s.Mu(`Unsupported field value: ${oi(i)}`)}(n,t)}function aa(n,t){const e={};return _o(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ze(n,(i,s)=>{const o=oa(s,t.bu(i));o!=null&&(e[i]=o)}),{mapValue:{fields:e}}}function la(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof nt||n instanceof ra||n instanceof Je||n instanceof Dt||n instanceof na||n instanceof ia)}function ua(n,t,e){if(!la(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const i=oi(e);throw i==="an object"?t.Mu(n+" a custom object"):t.Mu(n+" "+i)}}function ud(n,t,e){if((t=qe(t))instanceof ea)return t._internalPath;if(typeof t=="string")return hd(n,t);throw zn("Field path arguments must be of type string or ",n,!1,void 0,e)}const cd=new RegExp("[~\\*/\\[\\]]");function hd(n,t,e){if(t.search(cd)>=0)throw zn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ea(...t.split("."))._internalPath}catch{throw zn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function zn(n,t,e,i,s){const o=i&&!i.isEmpty(),u=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let d="";return(o||u)&&(d+=" (found",o&&(d+=` in field ${i}`),u&&(d+=` in document ${s}`),d+=")"),new x(S.INVALID_ARGUMENT,c+n+d)}function dd(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(n,t,e){let i;return i=n?n.toFirestore(t):t,i}function pd(n,t){const e=Jo(n.firestore,Zo),i=td(n),s=fd(n.converter,t);return gd(e,[ld(ad(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,Vt.exists(!1))]).then(()=>i)}function gd(n,t){return function(i,s){const o=new Qt;return i.asyncQueue.enqueueAndForget(async()=>Uh(await Xh(i),s,o)),o.promise}(rd(n),t)}(function(t,e=!0){(function(s){ge=s})(Su),xn(new He("firestore",(i,{instanceIdentifier:s,options:o})=>{const u=i.getProvider("app").getImmediate(),c=new Zo(new ju(i.getProvider("auth-internal")),new Hu(i.getProvider("app-check-internal")),function(m,I){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new x(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ln(m.options.projectId,I)}(u,s),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),ae(Ts,"4.7.2",t),ae(Ts,"4.7.2","esm2017")})();const md="AIzaSyBXxHPvT6zKTtRCoX9Ut43KUeVIt7vRGzY",_d="1:482898010102:web:2ca83778d58ff4c5ae71d7",yd={apiKey:md,authDomain:"swooddocs.firebaseapp.com",projectId:"swooddocs",storageBucket:"swooddocs.appspot.com",messagingSenderId:"482898010102",appId:_d},Rd=async(n,t)=>{const e=no(yd),i=nd(e),s=Zh(i,n),o={userAgent:navigator.userAgent,platform:navigator.platform,appVersion:navigator.appVersion},u={timestamp:new Date,ipAddress:"",version:t,deviceInfo:o};try{const d=await(await fetch("https://api.ipify.org?format=json")).json();u.ipAddress=d.ip}catch(c){console.error("Error getting ip: ",c),u.ipAddress="unable to obtain ipAddress"}try{await pd(s,u)}catch(c){console.error("Error adding registration: ",c)}};export{Ed as B,Td as C,Rd as R};

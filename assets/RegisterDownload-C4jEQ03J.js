import{p as Kl,q as Wl,x as Ke,t as oi,a7 as Ql,a8 as Xl,u as Tt,v as Yl,w as Jl,s as ze,a9 as Zl,y as tc,j as xn,A as Ds,C as ec,H as nc}from"./index-CgBu5WPP.js";function rc(n){return Wl("MuiButton",n)}const ge=Kl("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),ic=Ke.createContext({}),sc=Ke.createContext(void 0),oc=n=>{const{color:t,disableElevation:e,fullWidth:i,size:s,variant:o,classes:l}=n,u={root:["root",o,`${o}${Tt(t)}`,`size${Tt(s)}`,`${o}Size${Tt(s)}`,`color${Tt(t)}`,e&&"disableElevation",i&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${Tt(s)}`],endIcon:["icon","endIcon",`iconSize${Tt(s)}`]},d=ec(u,rc,l);return{...l,...d}},So=[{props:{size:"small"},style:{"& > *:nth-of-type(1)":{fontSize:18}}},{props:{size:"medium"},style:{"& > *:nth-of-type(1)":{fontSize:20}}},{props:{size:"large"},style:{"& > *:nth-of-type(1)":{fontSize:22}}}],ac=oi(Ql,{shouldForwardProp:n=>Xl(n)||n==="classes",name:"MuiButton",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[t.root,t[e.variant],t[`${e.variant}${Tt(e.color)}`],t[`size${Tt(e.size)}`],t[`${e.variant}Size${Tt(e.size)}`],e.color==="inherit"&&t.colorInherit,e.disableElevation&&t.disableElevation,e.fullWidth&&t.fullWidth]}})(Yl(({theme:n})=>{var i,s;const t=n.palette.mode==="light"?n.palette.grey[300]:n.palette.grey[800],e=n.palette.mode==="light"?n.palette.grey.A100:n.palette.grey[700];return{...n.typography.button,minWidth:64,padding:"6px 16px",border:0,borderRadius:(n.vars||n).shape.borderRadius,transition:n.transitions.create(["background-color","box-shadow","border-color","color"],{duration:n.transitions.duration.short}),"&:hover":{textDecoration:"none"},[`&.${ge.disabled}`]:{color:(n.vars||n).palette.action.disabled},variants:[{props:{variant:"contained"},style:{color:"var(--variant-containedColor)",backgroundColor:"var(--variant-containedBg)",boxShadow:(n.vars||n).shadows[2],"&:hover":{boxShadow:(n.vars||n).shadows[4],"@media (hover: none)":{boxShadow:(n.vars||n).shadows[2]}},"&:active":{boxShadow:(n.vars||n).shadows[8]},[`&.${ge.focusVisible}`]:{boxShadow:(n.vars||n).shadows[6]},[`&.${ge.disabled}`]:{color:(n.vars||n).palette.action.disabled,boxShadow:(n.vars||n).shadows[0],backgroundColor:(n.vars||n).palette.action.disabledBackground}}},{props:{variant:"outlined"},style:{padding:"5px 15px",border:"1px solid currentColor",borderColor:"var(--variant-outlinedBorder, currentColor)",backgroundColor:"var(--variant-outlinedBg)",color:"var(--variant-outlinedColor)",[`&.${ge.disabled}`]:{border:`1px solid ${(n.vars||n).palette.action.disabledBackground}`}}},{props:{variant:"text"},style:{padding:"6px 8px",color:"var(--variant-textColor)",backgroundColor:"var(--variant-textBg)"}},...Object.entries(n.palette).filter(Jl(["dark","contrastText"])).map(([o])=>({props:{color:o},style:{"--variant-textColor":(n.vars||n).palette[o].main,"--variant-outlinedColor":(n.vars||n).palette[o].main,"--variant-outlinedBorder":n.vars?`rgba(${n.vars.palette[o].mainChannel} / 0.5)`:ze(n.palette[o].main,.5),"--variant-containedColor":(n.vars||n).palette[o].contrastText,"--variant-containedBg":(n.vars||n).palette[o].main,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":(n.vars||n).palette[o].dark,"--variant-textBg":n.vars?`rgba(${n.vars.palette[o].mainChannel} / ${n.vars.palette.action.hoverOpacity})`:ze(n.palette[o].main,n.palette.action.hoverOpacity),"--variant-outlinedBorder":(n.vars||n).palette[o].main,"--variant-outlinedBg":n.vars?`rgba(${n.vars.palette[o].mainChannel} / ${n.vars.palette.action.hoverOpacity})`:ze(n.palette[o].main,n.palette.action.hoverOpacity)}}}})),{props:{color:"inherit"},style:{"--variant-containedColor":n.vars?n.vars.palette.text.primary:(s=(i=n.palette).getContrastText)==null?void 0:s.call(i,t),"--variant-containedBg":n.vars?n.vars.palette.Button.inheritContainedBg:t,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":n.vars?n.vars.palette.Button.inheritContainedHoverBg:e,"--variant-textBg":n.vars?`rgba(${n.vars.palette.text.primaryChannel} / ${n.vars.palette.action.hoverOpacity})`:ze(n.palette.text.primary,n.palette.action.hoverOpacity),"--variant-outlinedBg":n.vars?`rgba(${n.vars.palette.text.primaryChannel} / ${n.vars.palette.action.hoverOpacity})`:ze(n.palette.text.primary,n.palette.action.hoverOpacity)}}}},{props:{size:"small",variant:"text"},style:{padding:"4px 5px",fontSize:n.typography.pxToRem(13)}},{props:{size:"large",variant:"text"},style:{padding:"8px 11px",fontSize:n.typography.pxToRem(15)}},{props:{size:"small",variant:"outlined"},style:{padding:"3px 9px",fontSize:n.typography.pxToRem(13)}},{props:{size:"large",variant:"outlined"},style:{padding:"7px 21px",fontSize:n.typography.pxToRem(15)}},{props:{size:"small",variant:"contained"},style:{padding:"4px 10px",fontSize:n.typography.pxToRem(13)}},{props:{size:"large",variant:"contained"},style:{padding:"8px 22px",fontSize:n.typography.pxToRem(15)}},{props:{disableElevation:!0},style:{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${ge.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${ge.disabled}`]:{boxShadow:"none"}}},{props:{fullWidth:!0},style:{width:"100%"}}]}})),lc=oi("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[t.startIcon,t[`iconSize${Tt(e.size)}`]]}})({display:"inherit",marginRight:8,marginLeft:-4,variants:[{props:{size:"small"},style:{marginLeft:-2}},...So]}),cc=oi("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[t.endIcon,t[`iconSize${Tt(e.size)}`]]}})({display:"inherit",marginRight:-4,marginLeft:8,variants:[{props:{size:"small"},style:{marginRight:-2}},...So]}),zp=Ke.forwardRef(function(t,e){const i=Ke.useContext(ic),s=Ke.useContext(sc),o=Zl(i,t),l=tc({props:o,name:"MuiButton"}),{children:u,color:d="primary",component:f="button",className:I,disabled:A=!1,disableElevation:b=!1,disableFocusRipple:C=!1,endIcon:V,focusVisibleClassName:O,fullWidth:k=!1,size:H="medium",startIcon:j,type:G,variant:Z="text",...Ct}=l,Y={...l,color:d,component:f,disabled:A,disableElevation:b,disableFocusRipple:C,fullWidth:k,size:H,type:G,variant:Z},y=oc(Y),p=j&&xn.jsx(lc,{className:y.startIcon,ownerState:Y,children:j}),m=V&&xn.jsx(cc,{className:y.endIcon,ownerState:Y,children:V}),_=s||"";return xn.jsxs(ac,{ownerState:Y,className:Ds(i.className,y.root,I,_),component:f,disabled:A,focusRipple:!C,focusVisibleClassName:Ds(y.focusVisible,O),ref:e,type:G,...Ct,classes:y,children:[p,u,m]})}),qp=nc(xn.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M17 13l-5 5-5-5h3V9h4v4z"}),"CloudDownload");var ks={};/**
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
 */const bo=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},uc=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const s=n[e++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],l=n[e++],u=n[e++],d=((s&7)<<18|(o&63)<<12|(l&63)<<6|u&63)-65536;t[i++]=String.fromCharCode(55296+(d>>10)),t[i++]=String.fromCharCode(56320+(d&1023))}else{const o=n[e++],l=n[e++];t[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|l&63)}}return t.join("")},Po={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const o=n[s],l=s+1<n.length,u=l?n[s+1]:0,d=s+2<n.length,f=d?n[s+2]:0,I=o>>2,A=(o&3)<<4|u>>4;let b=(u&15)<<2|f>>6,C=f&63;d||(C=64,l||(b=64)),i.push(e[I],e[A],e[b],e[C])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(bo(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):uc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],u=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const A=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||u==null||f==null||A==null)throw new hc;const b=o<<2|u>>4;if(i.push(b),f!==64){const C=u<<4&240|f>>2;if(i.push(C),A!==64){const V=f<<6&192|A;i.push(V)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class hc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dc=function(n){const t=bo(n);return Po.encodeByteArray(t,!0)},Bn=function(n){return dc(n).replace(/\./g,"")},fc=function(n){try{return Po.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function pc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gc=()=>pc().__FIREBASE_DEFAULTS__,mc=()=>{if(typeof process>"u"||typeof ks>"u")return;const n=ks.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},_c=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&fc(n[1]);return t&&JSON.parse(t)},ai=()=>{try{return gc()||mc()||_c()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},yc=n=>{var t,e;return(e=(t=ai())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},vc=n=>{const t=yc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},Co=()=>{var n;return(n=ai())===null||n===void 0?void 0:n.config};/**
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
 */class Ec{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
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
 */function Ic(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Bn(JSON.stringify(e)),Bn(JSON.stringify(l)),""].join(".")}/**
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
 */function Tc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wc(){var n;const t=(n=ai())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ac(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Rc(){return!wc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Vo(){try{return typeof indexedDB=="object"}catch{return!1}}function Do(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}function Sc(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const bc="FirebaseError";class Wt extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=bc,Object.setPrototypeOf(this,Wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tr.prototype.create)}}class tr{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],l=o?Pc(o,i):"Error",u=`${this.serviceName}: ${l} (${s}).`;return new Wt(s,u,i)}}function Pc(n,t){return n.replace(Cc,(e,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const Cc=/\{\$([^}]+)}/g;function Un(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const s of e){if(!i.includes(s))return!1;const o=n[s],l=t[s];if(Ns(o)&&Ns(l)){if(!Un(o,l))return!1}else if(o!==l)return!1}for(const s of i)if(!e.includes(s))return!1;return!0}function Ns(n){return n!==null&&typeof n=="object"}/**
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
 */const Vc=1e3,Dc=2,kc=4*60*60*1e3,Nc=.5;function Os(n,t=Vc,e=Dc){const i=t*Math.pow(e,n),s=Math.round(Nc*i*(Math.random()-.5)*2);return Math.min(kc,i+s)}/**
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
 */function ie(n){return n&&n._delegate?n._delegate:n}class xt{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Zt="[DEFAULT]";/**
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
 */class Oc{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new Ec;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Mc(t))try{this.getOrInitializeService({instanceIdentifier:Zt})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(t=Zt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Zt){return this.instances.has(t)}getOptions(t=Zt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[o,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);i===u&&l.resolve(s)}return s}onInit(t,e){var i;const s=this.normalizeInstanceIdentifier(e),o=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;o.add(t),this.onInitCallbacks.set(s,o);const l=this.instances.get(s);return l&&t(l,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const s of i)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:xc(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Zt){return this.component?this.component.multipleInstances?t:Zt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xc(n){return n===Zt?void 0:n}function Mc(n){return n.instantiationMode==="EAGER"}/**
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
 */class Lc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Oc(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var F;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(F||(F={}));const Fc={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},Bc=F.INFO,Uc={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},$c=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),s=Uc[t];if(s)console[s](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class li{constructor(t){this.name=t,this._logLevel=Bc,this._logHandler=$c,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in F))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Fc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...t),this._logHandler(this,F.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...t),this._logHandler(this,F.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,F.INFO,...t),this._logHandler(this,F.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,F.WARN,...t),this._logHandler(this,F.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...t),this._logHandler(this,F.ERROR,...t)}}const jc=(n,t)=>t.some(e=>n instanceof e);let xs,Ms;function zc(){return xs||(xs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qc(){return Ms||(Ms=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ko=new WeakMap,Gr=new WeakMap,No=new WeakMap,Mr=new WeakMap,ci=new WeakMap;function Hc(n){const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",l)},o=()=>{e($t(n.result)),s()},l=()=>{i(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",l)});return t.then(e=>{e instanceof IDBCursor&&ko.set(e,n)}).catch(()=>{}),ci.set(t,n),t}function Gc(n){if(Gr.has(n))return;const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",l),n.removeEventListener("abort",l)},o=()=>{e(),s()},l=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",l),n.addEventListener("abort",l)});Gr.set(n,t)}let Kr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Gr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||No.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return $t(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Kc(n){Kr=n(Kr)}function Wc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(Lr(this),t,...e);return No.set(i,t.sort?t.sort():[t]),$t(i)}:qc().includes(n)?function(...t){return n.apply(Lr(this),t),$t(ko.get(this))}:function(...t){return $t(n.apply(Lr(this),t))}}function Qc(n){return typeof n=="function"?Wc(n):(n instanceof IDBTransaction&&Gc(n),jc(n,zc())?new Proxy(n,Kr):n)}function $t(n){if(n instanceof IDBRequest)return Hc(n);if(Mr.has(n))return Mr.get(n);const t=Qc(n);return t!==n&&(Mr.set(n,t),ci.set(t,n)),t}const Lr=n=>ci.get(n);function Oo(n,t,{blocked:e,upgrade:i,blocking:s,terminated:o}={}){const l=indexedDB.open(n,t),u=$t(l);return i&&l.addEventListener("upgradeneeded",d=>{i($t(l.result),d.oldVersion,d.newVersion,$t(l.transaction),d)}),e&&l.addEventListener("blocked",d=>e(d.oldVersion,d.newVersion,d)),u.then(d=>{o&&d.addEventListener("close",()=>o()),s&&d.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),u}const Xc=["get","getKey","getAll","getAllKeys","count"],Yc=["put","add","delete","clear"],Fr=new Map;function Ls(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Fr.get(t))return Fr.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,s=Yc.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Xc.includes(e)))return;const o=async function(l,...u){const d=this.transaction(l,s?"readwrite":"readonly");let f=d.store;return i&&(f=f.index(u.shift())),(await Promise.all([f[e](...u),s&&d.done]))[0]};return Fr.set(t,o),o}Kc(n=>({...n,get:(t,e,i)=>Ls(t,e)||n.get(t,e,i),has:(t,e)=>!!Ls(t,e)||n.has(t,e)}));/**
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
 */class Jc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Zc(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function Zc(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Wr="@firebase/app",Fs="0.10.11";/**
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
 */const Mt=new li("@firebase/app"),tu="@firebase/app-compat",eu="@firebase/analytics-compat",nu="@firebase/analytics",ru="@firebase/app-check-compat",iu="@firebase/app-check",su="@firebase/auth",ou="@firebase/auth-compat",au="@firebase/database",lu="@firebase/database-compat",cu="@firebase/functions",uu="@firebase/functions-compat",hu="@firebase/installations",du="@firebase/installations-compat",fu="@firebase/messaging",pu="@firebase/messaging-compat",gu="@firebase/performance",mu="@firebase/performance-compat",_u="@firebase/remote-config",yu="@firebase/remote-config-compat",vu="@firebase/storage",Eu="@firebase/storage-compat",Iu="@firebase/firestore",Tu="@firebase/vertexai-preview",wu="@firebase/firestore-compat",Au="firebase",Ru="10.13.2";/**
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
 */const Qr="[DEFAULT]",Su={[Wr]:"fire-core",[tu]:"fire-core-compat",[nu]:"fire-analytics",[eu]:"fire-analytics-compat",[iu]:"fire-app-check",[ru]:"fire-app-check-compat",[su]:"fire-auth",[ou]:"fire-auth-compat",[au]:"fire-rtdb",[lu]:"fire-rtdb-compat",[cu]:"fire-fn",[uu]:"fire-fn-compat",[hu]:"fire-iid",[du]:"fire-iid-compat",[fu]:"fire-fcm",[pu]:"fire-fcm-compat",[gu]:"fire-perf",[mu]:"fire-perf-compat",[_u]:"fire-rc",[yu]:"fire-rc-compat",[vu]:"fire-gcs",[Eu]:"fire-gcs-compat",[Iu]:"fire-fst",[wu]:"fire-fst-compat",[Tu]:"fire-vertex","fire-js":"fire-js",[Au]:"fire-js-all"};/**
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
 */const $n=new Map,bu=new Map,Xr=new Map;function Bs(n,t){try{n.container.addComponent(t)}catch(e){Mt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function qt(n){const t=n.name;if(Xr.has(t))return Mt.debug(`There were multiple attempts to register component ${t}.`),!1;Xr.set(t,n);for(const e of $n.values())Bs(e,n);for(const e of bu.values())Bs(e,n);return!0}function an(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const Pu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jt=new tr("app","Firebase",Pu);/**
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
 */class Cu{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw jt.create("app-deleted",{appName:this._name})}}/**
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
 */const Vu=Ru;function xo(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:Qr,automaticDataCollectionEnabled:!1},t),s=i.name;if(typeof s!="string"||!s)throw jt.create("bad-app-name",{appName:String(s)});if(e||(e=Co()),!e)throw jt.create("no-options");const o=$n.get(s);if(o){if(Un(e,o.options)&&Un(i,o.config))return o;throw jt.create("duplicate-app",{appName:s})}const l=new Lc(s);for(const d of Xr.values())l.addComponent(d);const u=new Cu(e,i,l);return $n.set(s,u),u}function Mo(n=Qr){const t=$n.get(n);if(!t&&n===Qr&&Co())return xo();if(!t)throw jt.create("no-app",{appName:n});return t}function St(n,t,e){var i;let s=(i=Su[n])!==null&&i!==void 0?i:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),l=t.match(/\s|\//);if(o||l){const u=[`Unable to register library "${s}" with version "${t}":`];o&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&u.push("and"),l&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Mt.warn(u.join(" "));return}qt(new xt(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Du="firebase-heartbeat-database",ku=1,Ze="firebase-heartbeat-store";let Br=null;function Lo(){return Br||(Br=Oo(Du,ku,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Ze)}catch(e){console.warn(e)}}}}).catch(n=>{throw jt.create("idb-open",{originalErrorMessage:n.message})})),Br}async function Nu(n){try{const e=(await Lo()).transaction(Ze),i=await e.objectStore(Ze).get(Fo(n));return await e.done,i}catch(t){if(t instanceof Wt)Mt.warn(t.message);else{const e=jt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Mt.warn(e.message)}}}async function Us(n,t){try{const i=(await Lo()).transaction(Ze,"readwrite");await i.objectStore(Ze).put(t,Fo(n)),await i.done}catch(e){if(e instanceof Wt)Mt.warn(e.message);else{const i=jt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Mt.warn(i.message)}}}function Fo(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ou=1024,xu=30*24*60*60*1e3;class Mu{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Fu(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=$s();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const u=new Date(l.date).valueOf();return Date.now()-u<=xu}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Mt.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=$s(),{heartbeatsToSend:i,unsentEntries:s}=Lu(this._heartbeatsCache.heartbeats),o=Bn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Mt.warn(e),""}}}function $s(){return new Date().toISOString().substring(0,10)}function Lu(n,t=Ou){const e=[];let i=n.slice();for(const s of n){const o=e.find(l=>l.agent===s.agent);if(o){if(o.dates.push(s.date),js(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),js(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class Fu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vo()?Do().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Nu(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Us(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Us(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function js(n){return Bn(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Bu(n){qt(new xt("platform-logger",t=>new Jc(t),"PRIVATE")),qt(new xt("heartbeat",t=>new Mu(t),"PRIVATE")),St(Wr,Fs,n),St(Wr,Fs,"esm2017"),St("fire-js","")}Bu("");var Uu="firebase",$u="10.13.2";/**
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
 */St(Uu,$u,"app");var zs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bo;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(y,p){function m(){}m.prototype=p.prototype,y.D=p.prototype,y.prototype=new m,y.prototype.constructor=y,y.C=function(_,v,T){for(var g=Array(arguments.length-2),Vt=2;Vt<arguments.length;Vt++)g[Vt-2]=arguments[Vt];return p.prototype[v].apply(_,g)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(y,p,m){m||(m=0);var _=Array(16);if(typeof p=="string")for(var v=0;16>v;++v)_[v]=p.charCodeAt(m++)|p.charCodeAt(m++)<<8|p.charCodeAt(m++)<<16|p.charCodeAt(m++)<<24;else for(v=0;16>v;++v)_[v]=p[m++]|p[m++]<<8|p[m++]<<16|p[m++]<<24;p=y.g[0],m=y.g[1],v=y.g[2];var T=y.g[3],g=p+(T^m&(v^T))+_[0]+3614090360&4294967295;p=m+(g<<7&4294967295|g>>>25),g=T+(v^p&(m^v))+_[1]+3905402710&4294967295,T=p+(g<<12&4294967295|g>>>20),g=v+(m^T&(p^m))+_[2]+606105819&4294967295,v=T+(g<<17&4294967295|g>>>15),g=m+(p^v&(T^p))+_[3]+3250441966&4294967295,m=v+(g<<22&4294967295|g>>>10),g=p+(T^m&(v^T))+_[4]+4118548399&4294967295,p=m+(g<<7&4294967295|g>>>25),g=T+(v^p&(m^v))+_[5]+1200080426&4294967295,T=p+(g<<12&4294967295|g>>>20),g=v+(m^T&(p^m))+_[6]+2821735955&4294967295,v=T+(g<<17&4294967295|g>>>15),g=m+(p^v&(T^p))+_[7]+4249261313&4294967295,m=v+(g<<22&4294967295|g>>>10),g=p+(T^m&(v^T))+_[8]+1770035416&4294967295,p=m+(g<<7&4294967295|g>>>25),g=T+(v^p&(m^v))+_[9]+2336552879&4294967295,T=p+(g<<12&4294967295|g>>>20),g=v+(m^T&(p^m))+_[10]+4294925233&4294967295,v=T+(g<<17&4294967295|g>>>15),g=m+(p^v&(T^p))+_[11]+2304563134&4294967295,m=v+(g<<22&4294967295|g>>>10),g=p+(T^m&(v^T))+_[12]+1804603682&4294967295,p=m+(g<<7&4294967295|g>>>25),g=T+(v^p&(m^v))+_[13]+4254626195&4294967295,T=p+(g<<12&4294967295|g>>>20),g=v+(m^T&(p^m))+_[14]+2792965006&4294967295,v=T+(g<<17&4294967295|g>>>15),g=m+(p^v&(T^p))+_[15]+1236535329&4294967295,m=v+(g<<22&4294967295|g>>>10),g=p+(v^T&(m^v))+_[1]+4129170786&4294967295,p=m+(g<<5&4294967295|g>>>27),g=T+(m^v&(p^m))+_[6]+3225465664&4294967295,T=p+(g<<9&4294967295|g>>>23),g=v+(p^m&(T^p))+_[11]+643717713&4294967295,v=T+(g<<14&4294967295|g>>>18),g=m+(T^p&(v^T))+_[0]+3921069994&4294967295,m=v+(g<<20&4294967295|g>>>12),g=p+(v^T&(m^v))+_[5]+3593408605&4294967295,p=m+(g<<5&4294967295|g>>>27),g=T+(m^v&(p^m))+_[10]+38016083&4294967295,T=p+(g<<9&4294967295|g>>>23),g=v+(p^m&(T^p))+_[15]+3634488961&4294967295,v=T+(g<<14&4294967295|g>>>18),g=m+(T^p&(v^T))+_[4]+3889429448&4294967295,m=v+(g<<20&4294967295|g>>>12),g=p+(v^T&(m^v))+_[9]+568446438&4294967295,p=m+(g<<5&4294967295|g>>>27),g=T+(m^v&(p^m))+_[14]+3275163606&4294967295,T=p+(g<<9&4294967295|g>>>23),g=v+(p^m&(T^p))+_[3]+4107603335&4294967295,v=T+(g<<14&4294967295|g>>>18),g=m+(T^p&(v^T))+_[8]+1163531501&4294967295,m=v+(g<<20&4294967295|g>>>12),g=p+(v^T&(m^v))+_[13]+2850285829&4294967295,p=m+(g<<5&4294967295|g>>>27),g=T+(m^v&(p^m))+_[2]+4243563512&4294967295,T=p+(g<<9&4294967295|g>>>23),g=v+(p^m&(T^p))+_[7]+1735328473&4294967295,v=T+(g<<14&4294967295|g>>>18),g=m+(T^p&(v^T))+_[12]+2368359562&4294967295,m=v+(g<<20&4294967295|g>>>12),g=p+(m^v^T)+_[5]+4294588738&4294967295,p=m+(g<<4&4294967295|g>>>28),g=T+(p^m^v)+_[8]+2272392833&4294967295,T=p+(g<<11&4294967295|g>>>21),g=v+(T^p^m)+_[11]+1839030562&4294967295,v=T+(g<<16&4294967295|g>>>16),g=m+(v^T^p)+_[14]+4259657740&4294967295,m=v+(g<<23&4294967295|g>>>9),g=p+(m^v^T)+_[1]+2763975236&4294967295,p=m+(g<<4&4294967295|g>>>28),g=T+(p^m^v)+_[4]+1272893353&4294967295,T=p+(g<<11&4294967295|g>>>21),g=v+(T^p^m)+_[7]+4139469664&4294967295,v=T+(g<<16&4294967295|g>>>16),g=m+(v^T^p)+_[10]+3200236656&4294967295,m=v+(g<<23&4294967295|g>>>9),g=p+(m^v^T)+_[13]+681279174&4294967295,p=m+(g<<4&4294967295|g>>>28),g=T+(p^m^v)+_[0]+3936430074&4294967295,T=p+(g<<11&4294967295|g>>>21),g=v+(T^p^m)+_[3]+3572445317&4294967295,v=T+(g<<16&4294967295|g>>>16),g=m+(v^T^p)+_[6]+76029189&4294967295,m=v+(g<<23&4294967295|g>>>9),g=p+(m^v^T)+_[9]+3654602809&4294967295,p=m+(g<<4&4294967295|g>>>28),g=T+(p^m^v)+_[12]+3873151461&4294967295,T=p+(g<<11&4294967295|g>>>21),g=v+(T^p^m)+_[15]+530742520&4294967295,v=T+(g<<16&4294967295|g>>>16),g=m+(v^T^p)+_[2]+3299628645&4294967295,m=v+(g<<23&4294967295|g>>>9),g=p+(v^(m|~T))+_[0]+4096336452&4294967295,p=m+(g<<6&4294967295|g>>>26),g=T+(m^(p|~v))+_[7]+1126891415&4294967295,T=p+(g<<10&4294967295|g>>>22),g=v+(p^(T|~m))+_[14]+2878612391&4294967295,v=T+(g<<15&4294967295|g>>>17),g=m+(T^(v|~p))+_[5]+4237533241&4294967295,m=v+(g<<21&4294967295|g>>>11),g=p+(v^(m|~T))+_[12]+1700485571&4294967295,p=m+(g<<6&4294967295|g>>>26),g=T+(m^(p|~v))+_[3]+2399980690&4294967295,T=p+(g<<10&4294967295|g>>>22),g=v+(p^(T|~m))+_[10]+4293915773&4294967295,v=T+(g<<15&4294967295|g>>>17),g=m+(T^(v|~p))+_[1]+2240044497&4294967295,m=v+(g<<21&4294967295|g>>>11),g=p+(v^(m|~T))+_[8]+1873313359&4294967295,p=m+(g<<6&4294967295|g>>>26),g=T+(m^(p|~v))+_[15]+4264355552&4294967295,T=p+(g<<10&4294967295|g>>>22),g=v+(p^(T|~m))+_[6]+2734768916&4294967295,v=T+(g<<15&4294967295|g>>>17),g=m+(T^(v|~p))+_[13]+1309151649&4294967295,m=v+(g<<21&4294967295|g>>>11),g=p+(v^(m|~T))+_[4]+4149444226&4294967295,p=m+(g<<6&4294967295|g>>>26),g=T+(m^(p|~v))+_[11]+3174756917&4294967295,T=p+(g<<10&4294967295|g>>>22),g=v+(p^(T|~m))+_[2]+718787259&4294967295,v=T+(g<<15&4294967295|g>>>17),g=m+(T^(v|~p))+_[9]+3951481745&4294967295,y.g[0]=y.g[0]+p&4294967295,y.g[1]=y.g[1]+(v+(g<<21&4294967295|g>>>11))&4294967295,y.g[2]=y.g[2]+v&4294967295,y.g[3]=y.g[3]+T&4294967295}i.prototype.u=function(y,p){p===void 0&&(p=y.length);for(var m=p-this.blockSize,_=this.B,v=this.h,T=0;T<p;){if(v==0)for(;T<=m;)s(this,y,T),T+=this.blockSize;if(typeof y=="string"){for(;T<p;)if(_[v++]=y.charCodeAt(T++),v==this.blockSize){s(this,_),v=0;break}}else for(;T<p;)if(_[v++]=y[T++],v==this.blockSize){s(this,_),v=0;break}}this.h=v,this.o+=p},i.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var p=1;p<y.length-8;++p)y[p]=0;var m=8*this.o;for(p=y.length-8;p<y.length;++p)y[p]=m&255,m/=256;for(this.u(y),y=Array(16),p=m=0;4>p;++p)for(var _=0;32>_;_+=8)y[m++]=this.g[p]>>>_&255;return y};function o(y,p){var m=u;return Object.prototype.hasOwnProperty.call(m,y)?m[y]:m[y]=p(y)}function l(y,p){this.h=p;for(var m=[],_=!0,v=y.length-1;0<=v;v--){var T=y[v]|0;_&&T==p||(m[v]=T,_=!1)}this.g=m}var u={};function d(y){return-128<=y&&128>y?o(y,function(p){return new l([p|0],0>p?-1:0)}):new l([y|0],0>y?-1:0)}function f(y){if(isNaN(y)||!isFinite(y))return A;if(0>y)return k(f(-y));for(var p=[],m=1,_=0;y>=m;_++)p[_]=y/m|0,m*=4294967296;return new l(p,0)}function I(y,p){if(y.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(y.charAt(0)=="-")return k(I(y.substring(1),p));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=f(Math.pow(p,8)),_=A,v=0;v<y.length;v+=8){var T=Math.min(8,y.length-v),g=parseInt(y.substring(v,v+T),p);8>T?(T=f(Math.pow(p,T)),_=_.j(T).add(f(g))):(_=_.j(m),_=_.add(f(g)))}return _}var A=d(0),b=d(1),C=d(16777216);n=l.prototype,n.m=function(){if(O(this))return-k(this).m();for(var y=0,p=1,m=0;m<this.g.length;m++){var _=this.i(m);y+=(0<=_?_:4294967296+_)*p,p*=4294967296}return y},n.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(V(this))return"0";if(O(this))return"-"+k(this).toString(y);for(var p=f(Math.pow(y,6)),m=this,_="";;){var v=Z(m,p).g;m=H(m,v.j(p));var T=((0<m.g.length?m.g[0]:m.h)>>>0).toString(y);if(m=v,V(m))return T+_;for(;6>T.length;)T="0"+T;_=T+_}},n.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function V(y){if(y.h!=0)return!1;for(var p=0;p<y.g.length;p++)if(y.g[p]!=0)return!1;return!0}function O(y){return y.h==-1}n.l=function(y){return y=H(this,y),O(y)?-1:V(y)?0:1};function k(y){for(var p=y.g.length,m=[],_=0;_<p;_++)m[_]=~y.g[_];return new l(m,~y.h).add(b)}n.abs=function(){return O(this)?k(this):this},n.add=function(y){for(var p=Math.max(this.g.length,y.g.length),m=[],_=0,v=0;v<=p;v++){var T=_+(this.i(v)&65535)+(y.i(v)&65535),g=(T>>>16)+(this.i(v)>>>16)+(y.i(v)>>>16);_=g>>>16,T&=65535,g&=65535,m[v]=g<<16|T}return new l(m,m[m.length-1]&-2147483648?-1:0)};function H(y,p){return y.add(k(p))}n.j=function(y){if(V(this)||V(y))return A;if(O(this))return O(y)?k(this).j(k(y)):k(k(this).j(y));if(O(y))return k(this.j(k(y)));if(0>this.l(C)&&0>y.l(C))return f(this.m()*y.m());for(var p=this.g.length+y.g.length,m=[],_=0;_<2*p;_++)m[_]=0;for(_=0;_<this.g.length;_++)for(var v=0;v<y.g.length;v++){var T=this.i(_)>>>16,g=this.i(_)&65535,Vt=y.i(v)>>>16,Re=y.i(v)&65535;m[2*_+2*v]+=g*Re,j(m,2*_+2*v),m[2*_+2*v+1]+=T*Re,j(m,2*_+2*v+1),m[2*_+2*v+1]+=g*Vt,j(m,2*_+2*v+1),m[2*_+2*v+2]+=T*Vt,j(m,2*_+2*v+2)}for(_=0;_<p;_++)m[_]=m[2*_+1]<<16|m[2*_];for(_=p;_<2*p;_++)m[_]=0;return new l(m,0)};function j(y,p){for(;(y[p]&65535)!=y[p];)y[p+1]+=y[p]>>>16,y[p]&=65535,p++}function G(y,p){this.g=y,this.h=p}function Z(y,p){if(V(p))throw Error("division by zero");if(V(y))return new G(A,A);if(O(y))return p=Z(k(y),p),new G(k(p.g),k(p.h));if(O(p))return p=Z(y,k(p)),new G(k(p.g),p.h);if(30<y.g.length){if(O(y)||O(p))throw Error("slowDivide_ only works with positive integers.");for(var m=b,_=p;0>=_.l(y);)m=Ct(m),_=Ct(_);var v=Y(m,1),T=Y(_,1);for(_=Y(_,2),m=Y(m,2);!V(_);){var g=T.add(_);0>=g.l(y)&&(v=v.add(m),T=g),_=Y(_,1),m=Y(m,1)}return p=H(y,v.j(p)),new G(v,p)}for(v=A;0<=y.l(p);){for(m=Math.max(1,Math.floor(y.m()/p.m())),_=Math.ceil(Math.log(m)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),T=f(m),g=T.j(p);O(g)||0<g.l(y);)m-=_,T=f(m),g=T.j(p);V(T)&&(T=b),v=v.add(T),y=H(y,g)}return new G(v,y)}n.A=function(y){return Z(this,y).h},n.and=function(y){for(var p=Math.max(this.g.length,y.g.length),m=[],_=0;_<p;_++)m[_]=this.i(_)&y.i(_);return new l(m,this.h&y.h)},n.or=function(y){for(var p=Math.max(this.g.length,y.g.length),m=[],_=0;_<p;_++)m[_]=this.i(_)|y.i(_);return new l(m,this.h|y.h)},n.xor=function(y){for(var p=Math.max(this.g.length,y.g.length),m=[],_=0;_<p;_++)m[_]=this.i(_)^y.i(_);return new l(m,this.h^y.h)};function Ct(y){for(var p=y.g.length+1,m=[],_=0;_<p;_++)m[_]=y.i(_)<<1|y.i(_-1)>>>31;return new l(m,y.h)}function Y(y,p){var m=p>>5;p%=32;for(var _=y.g.length-m,v=[],T=0;T<_;T++)v[T]=0<p?y.i(T+m)>>>p|y.i(T+m+1)<<32-p:y.i(T+m);return new l(v,y.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=f,l.fromString=I,Bo=l}).apply(typeof zs<"u"?zs:typeof self<"u"?self:typeof window<"u"?window:{});var Vn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Uo,$o,Ge,jo,Mn,Yr,zo,qo,Ho;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,a,c){return r==Array.prototype||r==Object.prototype||(r[a]=c.value),r};function e(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vn=="object"&&Vn];for(var a=0;a<r.length;++a){var c=r[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var i=e(this);function s(r,a){if(a)t:{var c=i;r=r.split(".");for(var h=0;h<r.length-1;h++){var E=r[h];if(!(E in c))break t;c=c[E]}r=r[r.length-1],h=c[r],a=a(h),a!=h&&a!=null&&t(c,r,{configurable:!0,writable:!0,value:a})}}function o(r,a){r instanceof String&&(r+="");var c=0,h=!1,E={next:function(){if(!h&&c<r.length){var w=c++;return{value:a(w,r[w]),done:!1}}return h=!0,{done:!0,value:void 0}}};return E[Symbol.iterator]=function(){return E},E}s("Array.prototype.values",function(r){return r||function(){return o(this,function(a,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function d(r){var a=typeof r;return a=a!="object"?a:r?Array.isArray(r)?"array":a:"null",a=="array"||a=="object"&&typeof r.length=="number"}function f(r){var a=typeof r;return a=="object"&&r!=null||a=="function"}function I(r,a,c){return r.call.apply(r.bind,arguments)}function A(r,a,c){if(!r)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var E=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(E,h),r.apply(a,E)}}return function(){return r.apply(a,arguments)}}function b(r,a,c){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:A,b.apply(null,arguments)}function C(r,a){var c=Array.prototype.slice.call(arguments,1);return function(){var h=c.slice();return h.push.apply(h,arguments),r.apply(this,h)}}function V(r,a){function c(){}c.prototype=a.prototype,r.aa=a.prototype,r.prototype=new c,r.prototype.constructor=r,r.Qb=function(h,E,w){for(var P=Array(arguments.length-2),U=2;U<arguments.length;U++)P[U-2]=arguments[U];return a.prototype[E].apply(h,P)}}function O(r){const a=r.length;if(0<a){const c=Array(a);for(let h=0;h<a;h++)c[h]=r[h];return c}return[]}function k(r,a){for(let c=1;c<arguments.length;c++){const h=arguments[c];if(d(h)){const E=r.length||0,w=h.length||0;r.length=E+w;for(let P=0;P<w;P++)r[E+P]=h[P]}else r.push(h)}}class H{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function j(r){return/^[\s\xa0]*$/.test(r)}function G(){var r=u.navigator;return r&&(r=r.userAgent)?r:""}function Z(r){return Z[" "](r),r}Z[" "]=function(){};var Ct=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function Y(r,a,c){for(const h in r)a.call(c,r[h],h,r)}function y(r,a){for(const c in r)a.call(void 0,r[c],c,r)}function p(r){const a={};for(const c in r)a[c]=r[c];return a}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(r,a){let c,h;for(let E=1;E<arguments.length;E++){h=arguments[E];for(c in h)r[c]=h[c];for(let w=0;w<m.length;w++)c=m[w],Object.prototype.hasOwnProperty.call(h,c)&&(r[c]=h[c])}}function v(r){var a=1;r=r.split(":");const c=[];for(;0<a&&r.length;)c.push(r.shift()),a--;return r.length&&c.push(r.join(":")),c}function T(r){u.setTimeout(()=>{throw r},0)}function g(){var r=dr;let a=null;return r.g&&(a=r.g,r.g=r.g.next,r.g||(r.h=null),a.next=null),a}class Vt{constructor(){this.h=this.g=null}add(a,c){const h=Re.get();h.set(a,c),this.h?this.h.next=h:this.g=h,this.h=h}}var Re=new H(()=>new dl,r=>r.reset());class dl{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Se,be=!1,dr=new Vt,Di=()=>{const r=u.Promise.resolve(void 0);Se=()=>{r.then(fl)}};var fl=()=>{for(var r;r=g();){try{r.h.call(r.g)}catch(c){T(c)}var a=Re;a.j(r),100>a.h&&(a.h++,r.next=a.g,a.g=r)}be=!1};function Lt(){this.s=this.s,this.C=this.C}Lt.prototype.s=!1,Lt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Lt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function at(r,a){this.type=r,this.g=this.target=a,this.defaultPrevented=!1}at.prototype.h=function(){this.defaultPrevented=!0};var pl=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var r=!1,a=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const c=()=>{};u.addEventListener("test",c,a),u.removeEventListener("test",c,a)}catch{}return r}();function Pe(r,a){if(at.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var c=this.type=r.type,h=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=a,a=r.relatedTarget){if(Ct){t:{try{Z(a.nodeName);var E=!0;break t}catch{}E=!1}E||(a=null)}}else c=="mouseover"?a=r.fromElement:c=="mouseout"&&(a=r.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:gl[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&Pe.aa.h.call(this)}}V(Pe,at);var gl={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var dn="closure_listenable_"+(1e6*Math.random()|0),ml=0;function _l(r,a,c,h,E){this.listener=r,this.proxy=null,this.src=a,this.type=c,this.capture=!!h,this.ha=E,this.key=++ml,this.da=this.fa=!1}function fn(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function pn(r){this.src=r,this.g={},this.h=0}pn.prototype.add=function(r,a,c,h,E){var w=r.toString();r=this.g[w],r||(r=this.g[w]=[],this.h++);var P=pr(r,a,h,E);return-1<P?(a=r[P],c||(a.fa=!1)):(a=new _l(a,this.src,w,!!h,E),a.fa=c,r.push(a)),a};function fr(r,a){var c=a.type;if(c in r.g){var h=r.g[c],E=Array.prototype.indexOf.call(h,a,void 0),w;(w=0<=E)&&Array.prototype.splice.call(h,E,1),w&&(fn(a),r.g[c].length==0&&(delete r.g[c],r.h--))}}function pr(r,a,c,h){for(var E=0;E<r.length;++E){var w=r[E];if(!w.da&&w.listener==a&&w.capture==!!c&&w.ha==h)return E}return-1}var gr="closure_lm_"+(1e6*Math.random()|0),mr={};function ki(r,a,c,h,E){if(Array.isArray(a)){for(var w=0;w<a.length;w++)ki(r,a[w],c,h,E);return null}return c=xi(c),r&&r[dn]?r.K(a,c,f(h)?!!h.capture:!!h,E):yl(r,a,c,!1,h,E)}function yl(r,a,c,h,E,w){if(!a)throw Error("Invalid event type");var P=f(E)?!!E.capture:!!E,U=yr(r);if(U||(r[gr]=U=new pn(r)),c=U.add(a,c,h,P,w),c.proxy)return c;if(h=vl(),c.proxy=h,h.src=r,h.listener=c,r.addEventListener)pl||(E=P),E===void 0&&(E=!1),r.addEventListener(a.toString(),h,E);else if(r.attachEvent)r.attachEvent(Oi(a.toString()),h);else if(r.addListener&&r.removeListener)r.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return c}function vl(){function r(c){return a.call(r.src,r.listener,c)}const a=El;return r}function Ni(r,a,c,h,E){if(Array.isArray(a))for(var w=0;w<a.length;w++)Ni(r,a[w],c,h,E);else h=f(h)?!!h.capture:!!h,c=xi(c),r&&r[dn]?(r=r.i,a=String(a).toString(),a in r.g&&(w=r.g[a],c=pr(w,c,h,E),-1<c&&(fn(w[c]),Array.prototype.splice.call(w,c,1),w.length==0&&(delete r.g[a],r.h--)))):r&&(r=yr(r))&&(a=r.g[a.toString()],r=-1,a&&(r=pr(a,c,h,E)),(c=-1<r?a[r]:null)&&_r(c))}function _r(r){if(typeof r!="number"&&r&&!r.da){var a=r.src;if(a&&a[dn])fr(a.i,r);else{var c=r.type,h=r.proxy;a.removeEventListener?a.removeEventListener(c,h,r.capture):a.detachEvent?a.detachEvent(Oi(c),h):a.addListener&&a.removeListener&&a.removeListener(h),(c=yr(a))?(fr(c,r),c.h==0&&(c.src=null,a[gr]=null)):fn(r)}}}function Oi(r){return r in mr?mr[r]:mr[r]="on"+r}function El(r,a){if(r.da)r=!0;else{a=new Pe(a,this);var c=r.listener,h=r.ha||r.src;r.fa&&_r(r),r=c.call(h,a)}return r}function yr(r){return r=r[gr],r instanceof pn?r:null}var vr="__closure_events_fn_"+(1e9*Math.random()>>>0);function xi(r){return typeof r=="function"?r:(r[vr]||(r[vr]=function(a){return r.handleEvent(a)}),r[vr])}function lt(){Lt.call(this),this.i=new pn(this),this.M=this,this.F=null}V(lt,Lt),lt.prototype[dn]=!0,lt.prototype.removeEventListener=function(r,a,c,h){Ni(this,r,a,c,h)};function gt(r,a){var c,h=r.F;if(h)for(c=[];h;h=h.F)c.push(h);if(r=r.M,h=a.type||a,typeof a=="string")a=new at(a,r);else if(a instanceof at)a.target=a.target||r;else{var E=a;a=new at(h,r),_(a,E)}if(E=!0,c)for(var w=c.length-1;0<=w;w--){var P=a.g=c[w];E=gn(P,h,!0,a)&&E}if(P=a.g=r,E=gn(P,h,!0,a)&&E,E=gn(P,h,!1,a)&&E,c)for(w=0;w<c.length;w++)P=a.g=c[w],E=gn(P,h,!1,a)&&E}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var r=this.i,a;for(a in r.g){for(var c=r.g[a],h=0;h<c.length;h++)fn(c[h]);delete r.g[a],r.h--}}this.F=null},lt.prototype.K=function(r,a,c,h){return this.i.add(String(r),a,!1,c,h)},lt.prototype.L=function(r,a,c,h){return this.i.add(String(r),a,!0,c,h)};function gn(r,a,c,h){if(a=r.i.g[String(a)],!a)return!0;a=a.concat();for(var E=!0,w=0;w<a.length;++w){var P=a[w];if(P&&!P.da&&P.capture==c){var U=P.listener,rt=P.ha||P.src;P.fa&&fr(r.i,P),E=U.call(rt,h)!==!1&&E}}return E&&!h.defaultPrevented}function Mi(r,a,c){if(typeof r=="function")c&&(r=b(r,c));else if(r&&typeof r.handleEvent=="function")r=b(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:u.setTimeout(r,a||0)}function Li(r){r.g=Mi(()=>{r.g=null,r.i&&(r.i=!1,Li(r))},r.l);const a=r.h;r.h=null,r.m.apply(null,a)}class Il extends Lt{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Li(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ce(r){Lt.call(this),this.h=r,this.g={}}V(Ce,Lt);var Fi=[];function Bi(r){Y(r.g,function(a,c){this.g.hasOwnProperty(c)&&_r(a)},r),r.g={}}Ce.prototype.N=function(){Ce.aa.N.call(this),Bi(this)},Ce.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Er=u.JSON.stringify,Tl=u.JSON.parse,wl=class{stringify(r){return u.JSON.stringify(r,void 0)}parse(r){return u.JSON.parse(r,void 0)}};function Ir(){}Ir.prototype.h=null;function Ui(r){return r.h||(r.h=r.i())}function $i(){}var Ve={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Tr(){at.call(this,"d")}V(Tr,at);function wr(){at.call(this,"c")}V(wr,at);var Qt={},ji=null;function mn(){return ji=ji||new lt}Qt.La="serverreachability";function zi(r){at.call(this,Qt.La,r)}V(zi,at);function De(r){const a=mn();gt(a,new zi(a))}Qt.STAT_EVENT="statevent";function qi(r,a){at.call(this,Qt.STAT_EVENT,r),this.stat=a}V(qi,at);function mt(r){const a=mn();gt(a,new qi(a,r))}Qt.Ma="timingevent";function Hi(r,a){at.call(this,Qt.Ma,r),this.size=a}V(Hi,at);function ke(r,a){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){r()},a)}function Ne(){this.g=!0}Ne.prototype.xa=function(){this.g=!1};function Al(r,a,c,h,E,w){r.info(function(){if(r.g)if(w)for(var P="",U=w.split("&"),rt=0;rt<U.length;rt++){var B=U[rt].split("=");if(1<B.length){var ct=B[0];B=B[1];var ut=ct.split("_");P=2<=ut.length&&ut[1]=="type"?P+(ct+"="+B+"&"):P+(ct+"=redacted&")}}else P=null;else P=w;return"XMLHTTP REQ ("+h+") [attempt "+E+"]: "+a+`
`+c+`
`+P})}function Rl(r,a,c,h,E,w,P){r.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+E+"]: "+a+`
`+c+`
`+w+" "+P})}function he(r,a,c,h){r.info(function(){return"XMLHTTP TEXT ("+a+"): "+bl(r,c)+(h?" "+h:"")})}function Sl(r,a){r.info(function(){return"TIMEOUT: "+a})}Ne.prototype.info=function(){};function bl(r,a){if(!r.g)return a;if(!a)return null;try{var c=JSON.parse(a);if(c){for(r=0;r<c.length;r++)if(Array.isArray(c[r])){var h=c[r];if(!(2>h.length)){var E=h[1];if(Array.isArray(E)&&!(1>E.length)){var w=E[0];if(w!="noop"&&w!="stop"&&w!="close")for(var P=1;P<E.length;P++)E[P]=""}}}}return Er(c)}catch{return a}}var _n={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Gi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ar;function yn(){}V(yn,Ir),yn.prototype.g=function(){return new XMLHttpRequest},yn.prototype.i=function(){return{}},Ar=new yn;function Ft(r,a,c,h){this.j=r,this.i=a,this.l=c,this.R=h||1,this.U=new Ce(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ki}function Ki(){this.i=null,this.g="",this.h=!1}var Wi={},Rr={};function Sr(r,a,c){r.L=1,r.v=Tn(Dt(a)),r.m=c,r.P=!0,Qi(r,null)}function Qi(r,a){r.F=Date.now(),vn(r),r.A=Dt(r.v);var c=r.A,h=r.R;Array.isArray(h)||(h=[String(h)]),cs(c.i,"t",h),r.C=0,c=r.j.J,r.h=new Ki,r.g=bs(r.j,c?a:null,!r.m),0<r.O&&(r.M=new Il(b(r.Y,r,r.g),r.O)),a=r.U,c=r.g,h=r.ca;var E="readystatechange";Array.isArray(E)||(E&&(Fi[0]=E.toString()),E=Fi);for(var w=0;w<E.length;w++){var P=ki(c,E[w],h||a.handleEvent,!1,a.h||a);if(!P)break;a.g[P.key]=P}a=r.H?p(r.H):{},r.m?(r.u||(r.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,a)):(r.u="GET",r.g.ea(r.A,r.u,null,a)),De(),Al(r.i,r.u,r.A,r.l,r.R,r.m)}Ft.prototype.ca=function(r){r=r.target;const a=this.M;a&&kt(r)==3?a.j():this.Y(r)},Ft.prototype.Y=function(r){try{if(r==this.g)t:{const ut=kt(this.g);var a=this.g.Ba();const pe=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||ms(this.g)))){this.J||ut!=4||a==7||(a==8||0>=pe?De(3):De(2)),br(this);var c=this.g.Z();this.X=c;e:if(Xi(this)){var h=ms(this.g);r="";var E=h.length,w=kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xt(this),Oe(this);var P="";break e}this.h.i=new u.TextDecoder}for(a=0;a<E;a++)this.h.h=!0,r+=this.h.i.decode(h[a],{stream:!(w&&a==E-1)});h.length=0,this.h.g+=r,this.C=0,P=this.h.g}else P=this.g.oa();if(this.o=c==200,Rl(this.i,this.u,this.A,this.l,this.R,ut,c),this.o){if(this.T&&!this.K){e:{if(this.g){var U,rt=this.g;if((U=rt.g?rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(U)){var B=U;break e}}B=null}if(c=B)he(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pr(this,c);else{this.o=!1,this.s=3,mt(12),Xt(this),Oe(this);break t}}if(this.P){c=!0;let It;for(;!this.J&&this.C<P.length;)if(It=Pl(this,P),It==Rr){ut==4&&(this.s=4,mt(14),c=!1),he(this.i,this.l,null,"[Incomplete Response]");break}else if(It==Wi){this.s=4,mt(15),he(this.i,this.l,P,"[Invalid Chunk]"),c=!1;break}else he(this.i,this.l,It,null),Pr(this,It);if(Xi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||P.length!=0||this.h.h||(this.s=1,mt(16),c=!1),this.o=this.o&&c,!c)he(this.i,this.l,P,"[Invalid Chunked Response]"),Xt(this),Oe(this);else if(0<P.length&&!this.W){this.W=!0;var ct=this.j;ct.g==this&&ct.ba&&!ct.M&&(ct.j.info("Great, no buffering proxy detected. Bytes received: "+P.length),Or(ct),ct.M=!0,mt(11))}}else he(this.i,this.l,P,null),Pr(this,P);ut==4&&Xt(this),this.o&&!this.J&&(ut==4?ws(this.j,this):(this.o=!1,vn(this)))}else Hl(this.g),c==400&&0<P.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),Xt(this),Oe(this)}}}catch{}finally{}};function Xi(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function Pl(r,a){var c=r.C,h=a.indexOf(`
`,c);return h==-1?Rr:(c=Number(a.substring(c,h)),isNaN(c)?Wi:(h+=1,h+c>a.length?Rr:(a=a.slice(h,h+c),r.C=h+c,a)))}Ft.prototype.cancel=function(){this.J=!0,Xt(this)};function vn(r){r.S=Date.now()+r.I,Yi(r,r.I)}function Yi(r,a){if(r.B!=null)throw Error("WatchDog timer not null");r.B=ke(b(r.ba,r),a)}function br(r){r.B&&(u.clearTimeout(r.B),r.B=null)}Ft.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(Sl(this.i,this.A),this.L!=2&&(De(),mt(17)),Xt(this),this.s=2,Oe(this)):Yi(this,this.S-r)};function Oe(r){r.j.G==0||r.J||ws(r.j,r)}function Xt(r){br(r);var a=r.M;a&&typeof a.ma=="function"&&a.ma(),r.M=null,Bi(r.U),r.g&&(a=r.g,r.g=null,a.abort(),a.ma())}function Pr(r,a){try{var c=r.j;if(c.G!=0&&(c.g==r||Cr(c.h,r))){if(!r.K&&Cr(c.h,r)&&c.G==3){try{var h=c.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var E=h;if(E[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<r.F)bn(c),Rn(c);else break t;Nr(c),mt(18)}}else c.za=E[1],0<c.za-c.T&&37500>E[2]&&c.F&&c.v==0&&!c.C&&(c.C=ke(b(c.Za,c),6e3));if(1>=ts(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else Jt(c,11)}else if((r.K||c.g==r)&&bn(c),!j(a))for(E=c.Da.g.parse(a),a=0;a<E.length;a++){let B=E[a];if(c.T=B[0],B=B[1],c.G==2)if(B[0]=="c"){c.K=B[1],c.ia=B[2];const ct=B[3];ct!=null&&(c.la=ct,c.j.info("VER="+c.la));const ut=B[4];ut!=null&&(c.Aa=ut,c.j.info("SVER="+c.Aa));const pe=B[5];pe!=null&&typeof pe=="number"&&0<pe&&(h=1.5*pe,c.L=h,c.j.info("backChannelRequestTimeoutMs_="+h)),h=c;const It=r.g;if(It){const Cn=It.g?It.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Cn){var w=h.h;w.g||Cn.indexOf("spdy")==-1&&Cn.indexOf("quic")==-1&&Cn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Vr(w,w.h),w.h=null))}if(h.D){const xr=It.g?It.g.getResponseHeader("X-HTTP-Session-Id"):null;xr&&(h.ya=xr,q(h.I,h.D,xr))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-r.F,c.j.info("Handshake RTT: "+c.R+"ms")),h=c;var P=r;if(h.qa=Ss(h,h.J?h.ia:null,h.W),P.K){es(h.h,P);var U=P,rt=h.L;rt&&(U.I=rt),U.B&&(br(U),vn(U)),h.g=P}else Is(h);0<c.i.length&&Sn(c)}else B[0]!="stop"&&B[0]!="close"||Jt(c,7);else c.G==3&&(B[0]=="stop"||B[0]=="close"?B[0]=="stop"?Jt(c,7):kr(c):B[0]!="noop"&&c.l&&c.l.ta(B),c.v=0)}}De(4)}catch{}}var Cl=class{constructor(r,a){this.g=r,this.map=a}};function Ji(r){this.l=r||10,u.PerformanceNavigationTiming?(r=u.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zi(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function ts(r){return r.h?1:r.g?r.g.size:0}function Cr(r,a){return r.h?r.h==a:r.g?r.g.has(a):!1}function Vr(r,a){r.g?r.g.add(a):r.h=a}function es(r,a){r.h&&r.h==a?r.h=null:r.g&&r.g.has(a)&&r.g.delete(a)}Ji.prototype.cancel=function(){if(this.i=ns(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function ns(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let a=r.i;for(const c of r.g.values())a=a.concat(c.D);return a}return O(r.i)}function Vl(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(d(r)){for(var a=[],c=r.length,h=0;h<c;h++)a.push(r[h]);return a}a=[],c=0;for(h in r)a[c++]=r[h];return a}function Dl(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(d(r)||typeof r=="string"){var a=[];r=r.length;for(var c=0;c<r;c++)a.push(c);return a}a=[],c=0;for(const h in r)a[c++]=h;return a}}}function rs(r,a){if(r.forEach&&typeof r.forEach=="function")r.forEach(a,void 0);else if(d(r)||typeof r=="string")Array.prototype.forEach.call(r,a,void 0);else for(var c=Dl(r),h=Vl(r),E=h.length,w=0;w<E;w++)a.call(void 0,h[w],c&&c[w],r)}var is=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kl(r,a){if(r){r=r.split("&");for(var c=0;c<r.length;c++){var h=r[c].indexOf("="),E=null;if(0<=h){var w=r[c].substring(0,h);E=r[c].substring(h+1)}else w=r[c];a(w,E?decodeURIComponent(E.replace(/\+/g," ")):"")}}}function Yt(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Yt){this.h=r.h,En(this,r.j),this.o=r.o,this.g=r.g,In(this,r.s),this.l=r.l;var a=r.i,c=new Le;c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),ss(this,c),this.m=r.m}else r&&(a=String(r).match(is))?(this.h=!1,En(this,a[1]||"",!0),this.o=xe(a[2]||""),this.g=xe(a[3]||"",!0),In(this,a[4]),this.l=xe(a[5]||"",!0),ss(this,a[6]||"",!0),this.m=xe(a[7]||"")):(this.h=!1,this.i=new Le(null,this.h))}Yt.prototype.toString=function(){var r=[],a=this.j;a&&r.push(Me(a,os,!0),":");var c=this.g;return(c||a=="file")&&(r.push("//"),(a=this.o)&&r.push(Me(a,os,!0),"@"),r.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&r.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&r.push("/"),r.push(Me(c,c.charAt(0)=="/"?xl:Ol,!0))),(c=this.i.toString())&&r.push("?",c),(c=this.m)&&r.push("#",Me(c,Ll)),r.join("")};function Dt(r){return new Yt(r)}function En(r,a,c){r.j=c?xe(a,!0):a,r.j&&(r.j=r.j.replace(/:$/,""))}function In(r,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);r.s=a}else r.s=null}function ss(r,a,c){a instanceof Le?(r.i=a,Fl(r.i,r.h)):(c||(a=Me(a,Ml)),r.i=new Le(a,r.h))}function q(r,a,c){r.i.set(a,c)}function Tn(r){return q(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function xe(r,a){return r?a?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function Me(r,a,c){return typeof r=="string"?(r=encodeURI(r).replace(a,Nl),c&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function Nl(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var os=/[#\/\?@]/g,Ol=/[#\?:]/g,xl=/[#\?]/g,Ml=/[#\?@]/g,Ll=/#/g;function Le(r,a){this.h=this.g=null,this.i=r||null,this.j=!!a}function Bt(r){r.g||(r.g=new Map,r.h=0,r.i&&kl(r.i,function(a,c){r.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}n=Le.prototype,n.add=function(r,a){Bt(this),this.i=null,r=de(this,r);var c=this.g.get(r);return c||this.g.set(r,c=[]),c.push(a),this.h+=1,this};function as(r,a){Bt(r),a=de(r,a),r.g.has(a)&&(r.i=null,r.h-=r.g.get(a).length,r.g.delete(a))}function ls(r,a){return Bt(r),a=de(r,a),r.g.has(a)}n.forEach=function(r,a){Bt(this),this.g.forEach(function(c,h){c.forEach(function(E){r.call(a,E,h,this)},this)},this)},n.na=function(){Bt(this);const r=Array.from(this.g.values()),a=Array.from(this.g.keys()),c=[];for(let h=0;h<a.length;h++){const E=r[h];for(let w=0;w<E.length;w++)c.push(a[h])}return c},n.V=function(r){Bt(this);let a=[];if(typeof r=="string")ls(this,r)&&(a=a.concat(this.g.get(de(this,r))));else{r=Array.from(this.g.values());for(let c=0;c<r.length;c++)a=a.concat(r[c])}return a},n.set=function(r,a){return Bt(this),this.i=null,r=de(this,r),ls(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[a]),this.h+=1,this},n.get=function(r,a){return r?(r=this.V(r),0<r.length?String(r[0]):a):a};function cs(r,a,c){as(r,a),0<c.length&&(r.i=null,r.g.set(de(r,a),O(c)),r.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],a=Array.from(this.g.keys());for(var c=0;c<a.length;c++){var h=a[c];const w=encodeURIComponent(String(h)),P=this.V(h);for(h=0;h<P.length;h++){var E=w;P[h]!==""&&(E+="="+encodeURIComponent(String(P[h]))),r.push(E)}}return this.i=r.join("&")};function de(r,a){return a=String(a),r.j&&(a=a.toLowerCase()),a}function Fl(r,a){a&&!r.j&&(Bt(r),r.i=null,r.g.forEach(function(c,h){var E=h.toLowerCase();h!=E&&(as(this,h),cs(this,E,c))},r)),r.j=a}function Bl(r,a){const c=new Ne;if(u.Image){const h=new Image;h.onload=C(Ut,c,"TestLoadImage: loaded",!0,a,h),h.onerror=C(Ut,c,"TestLoadImage: error",!1,a,h),h.onabort=C(Ut,c,"TestLoadImage: abort",!1,a,h),h.ontimeout=C(Ut,c,"TestLoadImage: timeout",!1,a,h),u.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=r}else a(!1)}function Ul(r,a){const c=new Ne,h=new AbortController,E=setTimeout(()=>{h.abort(),Ut(c,"TestPingServer: timeout",!1,a)},1e4);fetch(r,{signal:h.signal}).then(w=>{clearTimeout(E),w.ok?Ut(c,"TestPingServer: ok",!0,a):Ut(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(E),Ut(c,"TestPingServer: error",!1,a)})}function Ut(r,a,c,h,E){try{E&&(E.onload=null,E.onerror=null,E.onabort=null,E.ontimeout=null),h(c)}catch{}}function $l(){this.g=new wl}function jl(r,a,c){const h=c||"";try{rs(r,function(E,w){let P=E;f(E)&&(P=Er(E)),a.push(h+w+"="+encodeURIComponent(P))})}catch(E){throw a.push(h+"type="+encodeURIComponent("_badmap")),E}}function Fe(r){this.l=r.Ub||null,this.j=r.eb||!1}V(Fe,Ir),Fe.prototype.g=function(){return new wn(this.l,this.j)},Fe.prototype.i=function(r){return function(){return r}}({});function wn(r,a){lt.call(this),this.D=r,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(wn,lt),n=wn.prototype,n.open=function(r,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=a,this.readyState=1,Ue(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(a.body=r),(this.D||u).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Be(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,Ue(this)),this.g&&(this.readyState=3,Ue(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;us(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function us(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var a=r.value?r.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!r.done}))&&(this.response=this.responseText+=a)}r.done?Be(this):Ue(this),this.readyState==3&&us(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,Be(this))},n.Qa=function(r){this.g&&(this.response=r,Be(this))},n.ga=function(){this.g&&Be(this)};function Be(r){r.readyState=4,r.l=null,r.j=null,r.v=null,Ue(r)}n.setRequestHeader=function(r,a){this.u.append(r,a)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,r.push(c[0]+": "+c[1]),c=a.next();return r.join(`\r
`)};function Ue(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(wn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function hs(r){let a="";return Y(r,function(c,h){a+=h,a+=":",a+=c,a+=`\r
`}),a}function Dr(r,a,c){t:{for(h in c){var h=!1;break t}h=!0}h||(c=hs(c),typeof r=="string"?c!=null&&encodeURIComponent(String(c)):q(r,a,c))}function W(r){lt.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(W,lt);var zl=/^https?$/i,ql=["POST","PUT"];n=W.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,a,c,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);a=a?a.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ar.g(),this.v=this.o?Ui(this.o):Ui(Ar),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(a,String(r),!0),this.B=!1}catch(w){ds(this,w);return}if(r=c||"",c=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var E in h)c.set(E,h[E]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const w of h.keys())c.set(w,h.get(w));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(c.keys()).find(w=>w.toLowerCase()=="content-type"),E=u.FormData&&r instanceof u.FormData,!(0<=Array.prototype.indexOf.call(ql,a,void 0))||h||E||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,P]of c)this.g.setRequestHeader(w,P);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{gs(this),this.u=!0,this.g.send(r),this.u=!1}catch(w){ds(this,w)}};function ds(r,a){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=a,r.m=5,fs(r),An(r)}function fs(r){r.A||(r.A=!0,gt(r,"complete"),gt(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,gt(this,"complete"),gt(this,"abort"),An(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),An(this,!0)),W.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ps(this):this.bb())},n.bb=function(){ps(this)};function ps(r){if(r.h&&typeof l<"u"&&(!r.v[1]||kt(r)!=4||r.Z()!=2)){if(r.u&&kt(r)==4)Mi(r.Ea,0,r);else if(gt(r,"readystatechange"),kt(r)==4){r.h=!1;try{const P=r.Z();t:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var c;if(!(c=a)){var h;if(h=P===0){var E=String(r.D).match(is)[1]||null;!E&&u.self&&u.self.location&&(E=u.self.location.protocol.slice(0,-1)),h=!zl.test(E?E.toLowerCase():"")}c=h}if(c)gt(r,"complete"),gt(r,"success");else{r.m=6;try{var w=2<kt(r)?r.g.statusText:""}catch{w=""}r.l=w+" ["+r.Z()+"]",fs(r)}}finally{An(r)}}}}function An(r,a){if(r.g){gs(r);const c=r.g,h=r.v[0]?()=>{}:null;r.g=null,r.v=null,a||gt(r,"ready");try{c.onreadystatechange=h}catch{}}}function gs(r){r.I&&(u.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function kt(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<kt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var a=this.g.responseText;return r&&a.indexOf(r)==0&&(a=a.substring(r.length)),Tl(a)}};function ms(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function Hl(r){const a={};r=(r.g&&2<=kt(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<r.length;h++){if(j(r[h]))continue;var c=v(r[h]);const E=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const w=a[E]||[];a[E]=w,w.push(c)}y(a,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function $e(r,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[r]||a}function _s(r){this.Aa=0,this.i=[],this.j=new Ne,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$e("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$e("baseRetryDelayMs",5e3,r),this.cb=$e("retryDelaySeedMs",1e4,r),this.Wa=$e("forwardChannelMaxRetries",2,r),this.wa=$e("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new Ji(r&&r.concurrentRequestLimit),this.Da=new $l,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=_s.prototype,n.la=8,n.G=1,n.connect=function(r,a,c,h){mt(0),this.W=r,this.H=a||{},c&&h!==void 0&&(this.H.OSID=c,this.H.OAID=h),this.F=this.X,this.I=Ss(this,null,this.W),Sn(this)};function kr(r){if(ys(r),r.G==3){var a=r.U++,c=Dt(r.I);if(q(c,"SID",r.K),q(c,"RID",a),q(c,"TYPE","terminate"),je(r,c),a=new Ft(r,r.j,a),a.L=2,a.v=Tn(Dt(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(a.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=a.v,c=!0),c||(a.g=bs(a.j,null),a.g.ea(a.v)),a.F=Date.now(),vn(a)}Rs(r)}function Rn(r){r.g&&(Or(r),r.g.cancel(),r.g=null)}function ys(r){Rn(r),r.u&&(u.clearTimeout(r.u),r.u=null),bn(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&u.clearTimeout(r.s),r.s=null)}function Sn(r){if(!Zi(r.h)&&!r.s){r.s=!0;var a=r.Ga;Se||Di(),be||(Se(),be=!0),dr.add(a,r),r.B=0}}function Gl(r,a){return ts(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=a.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=ke(b(r.Ga,r,a),As(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const E=new Ft(this,this.j,r);let w=this.o;if(this.S&&(w?(w=p(w),_(w,this.S)):w=this.S),this.m!==null||this.O||(E.H=w,w=null),this.P)t:{for(var a=0,c=0;c<this.i.length;c++){e:{var h=this.i[c];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=c;break t}if(a===4096||c===this.i.length-1){a=c+1;break t}}a=1e3}else a=1e3;a=Es(this,E,a),c=Dt(this.I),q(c,"RID",r),q(c,"CVER",22),this.D&&q(c,"X-HTTP-Session-Id",this.D),je(this,c),w&&(this.O?a="headers="+encodeURIComponent(String(hs(w)))+"&"+a:this.m&&Dr(c,this.m,w)),Vr(this.h,E),this.Ua&&q(c,"TYPE","init"),this.P?(q(c,"$req",a),q(c,"SID","null"),E.T=!0,Sr(E,c,null)):Sr(E,c,a),this.G=2}}else this.G==3&&(r?vs(this,r):this.i.length==0||Zi(this.h)||vs(this))};function vs(r,a){var c;a?c=a.l:c=r.U++;const h=Dt(r.I);q(h,"SID",r.K),q(h,"RID",c),q(h,"AID",r.T),je(r,h),r.m&&r.o&&Dr(h,r.m,r.o),c=new Ft(r,r.j,c,r.B+1),r.m===null&&(c.H=r.o),a&&(r.i=a.D.concat(r.i)),a=Es(r,c,1e3),c.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),Vr(r.h,c),Sr(c,h,a)}function je(r,a){r.H&&Y(r.H,function(c,h){q(a,h,c)}),r.l&&rs({},function(c,h){q(a,h,c)})}function Es(r,a,c){c=Math.min(r.i.length,c);var h=r.l?b(r.l.Na,r.l,r):null;t:{var E=r.i;let w=-1;for(;;){const P=["count="+c];w==-1?0<c?(w=E[0].g,P.push("ofs="+w)):w=0:P.push("ofs="+w);let U=!0;for(let rt=0;rt<c;rt++){let B=E[rt].g;const ct=E[rt].map;if(B-=w,0>B)w=Math.max(0,E[rt].g-100),U=!1;else try{jl(ct,P,"req"+B+"_")}catch{h&&h(ct)}}if(U){h=P.join("&");break t}}}return r=r.i.splice(0,c),a.D=r,h}function Is(r){if(!r.g&&!r.u){r.Y=1;var a=r.Fa;Se||Di(),be||(Se(),be=!0),dr.add(a,r),r.v=0}}function Nr(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=ke(b(r.Fa,r),As(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,Ts(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=ke(b(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),Rn(this),Ts(this))};function Or(r){r.A!=null&&(u.clearTimeout(r.A),r.A=null)}function Ts(r){r.g=new Ft(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var a=Dt(r.qa);q(a,"RID","rpc"),q(a,"SID",r.K),q(a,"AID",r.T),q(a,"CI",r.F?"0":"1"),!r.F&&r.ja&&q(a,"TO",r.ja),q(a,"TYPE","xmlhttp"),je(r,a),r.m&&r.o&&Dr(a,r.m,r.o),r.L&&(r.g.I=r.L);var c=r.g;r=r.ia,c.L=1,c.v=Tn(Dt(a)),c.m=null,c.P=!0,Qi(c,r)}n.Za=function(){this.C!=null&&(this.C=null,Rn(this),Nr(this),mt(19))};function bn(r){r.C!=null&&(u.clearTimeout(r.C),r.C=null)}function ws(r,a){var c=null;if(r.g==a){bn(r),Or(r),r.g=null;var h=2}else if(Cr(r.h,a))c=a.D,es(r.h,a),h=1;else return;if(r.G!=0){if(a.o)if(h==1){c=a.m?a.m.length:0,a=Date.now()-a.F;var E=r.B;h=mn(),gt(h,new Hi(h,c)),Sn(r)}else Is(r);else if(E=a.s,E==3||E==0&&0<a.X||!(h==1&&Gl(r,a)||h==2&&Nr(r)))switch(c&&0<c.length&&(a=r.h,a.i=a.i.concat(c)),E){case 1:Jt(r,5);break;case 4:Jt(r,10);break;case 3:Jt(r,6);break;default:Jt(r,2)}}}function As(r,a){let c=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(c*=2),c*a}function Jt(r,a){if(r.j.info("Error code "+a),a==2){var c=b(r.fb,r),h=r.Xa;const E=!h;h=new Yt(h||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||En(h,"https"),Tn(h),E?Bl(h.toString(),c):Ul(h.toString(),c)}else mt(2);r.G=0,r.l&&r.l.sa(a),Rs(r),ys(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function Rs(r){if(r.G=0,r.ka=[],r.l){const a=ns(r.h);(a.length!=0||r.i.length!=0)&&(k(r.ka,a),k(r.ka,r.i),r.h.i.length=0,O(r.i),r.i.length=0),r.l.ra()}}function Ss(r,a,c){var h=c instanceof Yt?Dt(c):new Yt(c);if(h.g!="")a&&(h.g=a+"."+h.g),In(h,h.s);else{var E=u.location;h=E.protocol,a=a?a+"."+E.hostname:E.hostname,E=+E.port;var w=new Yt(null);h&&En(w,h),a&&(w.g=a),E&&In(w,E),c&&(w.l=c),h=w}return c=r.D,a=r.ya,c&&a&&q(h,c,a),q(h,"VER",r.la),je(r,h),h}function bs(r,a,c){if(a&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=r.Ca&&!r.pa?new W(new Fe({eb:c})):new W(r.pa),a.Ha(r.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ps(){}n=Ps.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Pn(){}Pn.prototype.g=function(r,a){return new vt(r,a)};function vt(r,a){lt.call(this),this.g=new _s(a),this.l=r,this.h=a&&a.messageUrlParams||null,r=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(r?r["X-WebChannel-Content-Type"]=a.messageContentType:r={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(r?r["X-WebChannel-Client-Profile"]=a.va:r={"X-WebChannel-Client-Profile":a.va}),this.g.S=r,(r=a&&a.Sb)&&!j(r)&&(this.g.m=r),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!j(a)&&(this.g.D=a,r=this.h,r!==null&&a in r&&(r=this.h,a in r&&delete r[a])),this.j=new fe(this)}V(vt,lt),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){kr(this.g)},vt.prototype.o=function(r){var a=this.g;if(typeof r=="string"){var c={};c.__data__=r,r=c}else this.u&&(c={},c.__data__=Er(r),r=c);a.i.push(new Cl(a.Ya++,r)),a.G==3&&Sn(a)},vt.prototype.N=function(){this.g.l=null,delete this.j,kr(this.g),delete this.g,vt.aa.N.call(this)};function Cs(r){Tr.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var a=r.__sm__;if(a){t:{for(const c in a){r=c;break t}r=void 0}(this.i=r)&&(r=this.i,a=a!==null&&r in a?a[r]:void 0),this.data=a}else this.data=r}V(Cs,Tr);function Vs(){wr.call(this),this.status=1}V(Vs,wr);function fe(r){this.g=r}V(fe,Ps),fe.prototype.ua=function(){gt(this.g,"a")},fe.prototype.ta=function(r){gt(this.g,new Cs(r))},fe.prototype.sa=function(r){gt(this.g,new Vs)},fe.prototype.ra=function(){gt(this.g,"b")},Pn.prototype.createWebChannel=Pn.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,Ho=function(){return new Pn},qo=function(){return mn()},zo=Qt,Yr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},_n.NO_ERROR=0,_n.TIMEOUT=8,_n.HTTP_ERROR=6,Mn=_n,Gi.COMPLETE="complete",jo=Gi,$i.EventType=Ve,Ve.OPEN="a",Ve.CLOSE="b",Ve.ERROR="c",Ve.MESSAGE="d",lt.prototype.listen=lt.prototype.K,Ge=$i,$o=Fe,W.prototype.listenOnce=W.prototype.L,W.prototype.getLastError=W.prototype.Ka,W.prototype.getLastErrorCode=W.prototype.Ba,W.prototype.getStatus=W.prototype.Z,W.prototype.getResponseJson=W.prototype.Oa,W.prototype.getResponseText=W.prototype.oa,W.prototype.send=W.prototype.ea,W.prototype.setWithCredentials=W.prototype.Ha,Uo=W}).apply(typeof Vn<"u"?Vn:typeof self<"u"?self:typeof window<"u"?window:{});const qs="@firebase/firestore";/**
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
 */let we="10.13.2";/**
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
 */const se=new li("@firebase/firestore");function qe(){return se.logLevel}function D(n,...t){if(se.logLevel<=F.DEBUG){const e=t.map(ui);se.debug(`Firestore (${we}): ${n}`,...e)}}function oe(n,...t){if(se.logLevel<=F.ERROR){const e=t.map(ui);se.error(`Firestore (${we}): ${n}`,...e)}}function jn(n,...t){if(se.logLevel<=F.WARN){const e=t.map(ui);se.warn(`Firestore (${we}): ${n}`,...e)}}function ui(n){if(typeof n=="string")return n;try{/**
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
 */function M(n="Unexpected state"){const t=`FIRESTORE (${we}) INTERNAL ASSERTION FAILED: `+n;throw oe(t),new Error(t)}function J(n,t){n||M()}function z(n,t){return n}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Wt{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ne{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Go{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ju{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(dt.UNAUTHENTICATED))}shutdown(){}}class zu{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class qu{constructor(t){this.t=t,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let i=this.i;const s=d=>this.i!==i?(i=this.i,e(d)):Promise.resolve();let o=new ne;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ne,t.enqueueRetryable(()=>s(this.currentUser))};const l=()=>{const d=o;t.enqueueRetryable(async()=>{await d.promise,await s(this.currentUser)})},u=d=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.auth.addAuthTokenListener(this.o),l()};this.t.onInit(d=>u(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?u(d):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ne)}},0),l()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(J(typeof i.accessToken=="string"),new Go(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return J(t===null||typeof t=="string"),new dt(t)}}class Hu{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Gu{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new Hu(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ku{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Wu{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const i=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,D("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>i(o))};const s=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(J(typeof e.token=="string"),this.R=e.token,new Ku(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Qu(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
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
 */class Ko{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=Qu(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<e&&(i+=t.charAt(s[o]%t.length))}return i}}function $(n,t){return n<t?-1:n>t?1:0}function ye(n,t,e){return n.length===t.length&&n.every((i,s)=>e(i,t[s]))}/**
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
 */class nt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new N(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*e));return new nt(e,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?$(this.nanoseconds,t.nanoseconds):$(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class tn{constructor(t,e,i){e===void 0?e=0:e>t.length&&M(),i===void 0?i=t.length-e:i>t.length-e&&M(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return tn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof tn?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let s=0;s<i;s++){const o=t.get(s),l=e.get(s);if(o<l)return-1;if(o>l)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Q extends tn{construct(t,e,i){return new Q(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new N(S.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(s=>s.length>0))}return new Q(e)}static emptyPath(){return new Q([])}}const Xu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends tn{construct(t,e,i){return new ot(t,e,i)}static isValidIdentifier(t){return Xu.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(t){const e=[];let i="",s=0;const o=()=>{if(i.length===0)throw new N(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let l=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new N(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[s+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new N(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=d,s+=2}else u==="`"?(l=!l,s++):u!=="."||l?(i+=u,s++):(o(),s++)}if(o(),l)throw new N(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ot(e)}static emptyPath(){return new ot([])}}/**
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
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(Q.fromString(t))}static fromName(t){return new x(Q.fromString(t).popFirst(5))}static empty(){return new x(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Q.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Q.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new Q(t.slice()))}}function Yu(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=K.fromTimestamp(i===1e9?new nt(e+1,0):new nt(e,i));return new Ht(s,x.empty(),t)}function Ju(n){return new Ht(n.readTime,n.key,-1)}class Ht{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new Ht(K.min(),x.empty(),-1)}static max(){return new Ht(K.max(),x.empty(),-1)}}function Zu(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(n.documentKey,t.documentKey),e!==0?e:$(n.largestBatchId,t.largestBatchId))}/**
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
 */const th="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class eh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Wo(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==th)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((i,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(i,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(i,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,i)=>{e(t)})}static reject(t){return new R((e,i)=>{i(t)})}static waitFor(t){return new R((e,i)=>{let s=0,o=0,l=!1;t.forEach(u=>{++s,u.next(()=>{++o,l&&o===s&&e()},d=>i(d))}),l=!0,o===s&&e()})}static or(t){let e=R.resolve(!1);for(const i of t)e=e.next(s=>s?R.resolve(s):i());return e}static forEach(t,e){const i=[];return t.forEach((s,o)=>{i.push(e.call(this,s,o))}),this.waitFor(i)}static mapArray(t,e){return new R((i,s)=>{const o=t.length,l=new Array(o);let u=0;for(let d=0;d<o;d++){const f=d;e(t[f]).next(I=>{l[f]=I,++u,u===o&&i(l)},I=>s(I))}})}static doWhile(t,e){return new R((i,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):i()};o()})}}function nh(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function er(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Qo{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.ie(i),this.se=i=>e.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Qo.oe=-1;function hi(n){return n==null}function zn(n){return n===0&&1/n==-1/0}function rh(n){return typeof n=="number"&&Number.isInteger(n)&&!zn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Hs(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ln(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Xo(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class yt{constructor(t,e){this.comparator=t,this.root=e||it.EMPTY}insert(t,e){return new yt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,it.BLACK,null,null))}remove(t){return new yt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,it.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Dn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Dn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Dn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Dn(this.root,t,this.comparator,!0)}}class Dn{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?i(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class it{constructor(t,e,i,s,o){this.key=t,this.value=e,this.color=i??it.RED,this.left=s??it.EMPTY,this.right=o??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,o){return new it(t??this.key,e??this.value,i??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const o=i(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,i),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return it.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const t=this.left.check();if(t!==this.right.check())throw M();return t+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,i,s,o){return this}insert(t,e,i){return new it(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class pt{constructor(t){this.comparator=t,this.data=new yt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Gs(this.data.getIterator())}getIteratorFrom(t){return new Gs(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof pt)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=i.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new pt(this.comparator);return e.data=t,e}}class Gs{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Rt{constructor(t){this.fields=t,t.sort(ot.comparator)}static empty(){return new Rt([])}unionWith(t){let e=new pt(ot.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new Rt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ye(this.fields,t.fields,(e,i)=>e.isEqual(i))}}/**
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
 */class ih extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class bt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ih("Invalid base64 string: "+o):o}}(t);return new bt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let l=0;l<s.length;++l)o+=String.fromCharCode(s[l]);return o}(t);return new bt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return $(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const sh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ae(n){if(J(!!n),typeof n=="string"){let t=0;const e=sh.exec(n);if(J(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:st(n.seconds),nanos:st(n.nanos)}}function st(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function en(n){return typeof n=="string"?bt.fromBase64String(n):bt.fromUint8Array(n)}/**
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
 */function di(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Yo(n){const t=n.mapValue.fields.__previous_value__;return di(t)?Yo(t):t}function qn(n){const t=ae(n.mapValue.fields.__local_write_time__.timestampValue);return new nt(t.seconds,t.nanos)}/**
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
 */class oh{constructor(t,e,i,s,o,l,u,d,f){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=u,this.longPollingOptions=d,this.useFetchStreams=f}}class Hn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Hn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Hn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const kn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ve(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?di(n)?4:lh(n)?9007199254740991:ah(n)?10:11:M()}function Pt(n,t){if(n===t)return!0;const e=ve(n);if(e!==ve(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return qn(n).isEqual(qn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const l=ae(s.timestampValue),u=ae(o.timestampValue);return l.seconds===u.seconds&&l.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return en(s.bytesValue).isEqual(en(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return st(s.geoPointValue.latitude)===st(o.geoPointValue.latitude)&&st(s.geoPointValue.longitude)===st(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return st(s.integerValue)===st(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const l=st(s.doubleValue),u=st(o.doubleValue);return l===u?zn(l)===zn(u):isNaN(l)&&isNaN(u)}return!1}(n,t);case 9:return ye(n.arrayValue.values||[],t.arrayValue.values||[],Pt);case 10:case 11:return function(s,o){const l=s.mapValue.fields||{},u=o.mapValue.fields||{};if(Hs(l)!==Hs(u))return!1;for(const d in l)if(l.hasOwnProperty(d)&&(u[d]===void 0||!Pt(l[d],u[d])))return!1;return!0}(n,t);default:return M()}}function nn(n,t){return(n.values||[]).find(e=>Pt(e,t))!==void 0}function Ee(n,t){if(n===t)return 0;const e=ve(n),i=ve(t);if(e!==i)return $(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return $(n.booleanValue,t.booleanValue);case 2:return function(o,l){const u=st(o.integerValue||o.doubleValue),d=st(l.integerValue||l.doubleValue);return u<d?-1:u>d?1:u===d?0:isNaN(u)?isNaN(d)?0:-1:1}(n,t);case 3:return Ks(n.timestampValue,t.timestampValue);case 4:return Ks(qn(n),qn(t));case 5:return $(n.stringValue,t.stringValue);case 6:return function(o,l){const u=en(o),d=en(l);return u.compareTo(d)}(n.bytesValue,t.bytesValue);case 7:return function(o,l){const u=o.split("/"),d=l.split("/");for(let f=0;f<u.length&&f<d.length;f++){const I=$(u[f],d[f]);if(I!==0)return I}return $(u.length,d.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,l){const u=$(st(o.latitude),st(l.latitude));return u!==0?u:$(st(o.longitude),st(l.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Ws(n.arrayValue,t.arrayValue);case 10:return function(o,l){var u,d,f,I;const A=o.fields||{},b=l.fields||{},C=(u=A.value)===null||u===void 0?void 0:u.arrayValue,V=(d=b.value)===null||d===void 0?void 0:d.arrayValue,O=$(((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0,((I=V==null?void 0:V.values)===null||I===void 0?void 0:I.length)||0);return O!==0?O:Ws(C,V)}(n.mapValue,t.mapValue);case 11:return function(o,l){if(o===kn.mapValue&&l===kn.mapValue)return 0;if(o===kn.mapValue)return 1;if(l===kn.mapValue)return-1;const u=o.fields||{},d=Object.keys(u),f=l.fields||{},I=Object.keys(f);d.sort(),I.sort();for(let A=0;A<d.length&&A<I.length;++A){const b=$(d[A],I[A]);if(b!==0)return b;const C=Ee(u[d[A]],f[I[A]]);if(C!==0)return C}return $(d.length,I.length)}(n.mapValue,t.mapValue);default:throw M()}}function Ks(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return $(n,t);const e=ae(n),i=ae(t),s=$(e.seconds,i.seconds);return s!==0?s:$(e.nanos,i.nanos)}function Ws(n,t){const e=n.values||[],i=t.values||[];for(let s=0;s<e.length&&s<i.length;++s){const o=Ee(e[s],i[s]);if(o)return o}return $(e.length,i.length)}function Ie(n){return Jr(n)}function Jr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const i=ae(e);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return en(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return x.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let i="[",s=!0;for(const o of e.values||[])s?s=!1:i+=",",i+=Jr(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(e){const i=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const l of i)o?o=!1:s+=",",s+=`${l}:${Jr(e.fields[l])}`;return s+"}"}(n.mapValue):M()}function Zr(n){return!!n&&"integerValue"in n}function fi(n){return!!n&&"arrayValue"in n}function Ln(n){return!!n&&"mapValue"in n}function ah(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function We(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return ln(n.mapValue.fields,(e,i)=>t.mapValue.fields[e]=We(i)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=We(n.arrayValue.values[e]);return t}return Object.assign({},n)}function lh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class At{constructor(t){this.value=t}static empty(){return new At({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!Ln(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=We(e)}setAll(t){let e=ot.emptyPath(),i={},s=[];t.forEach((l,u)=>{if(!e.isImmediateParentOf(u)){const d=this.getFieldsMap(e);this.applyChanges(d,i,s),i={},s=[],e=u.popLast()}l?i[u.lastSegment()]=We(l):s.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,i,s)}delete(t){const e=this.field(t.popLast());Ln(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Pt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=e.mapValue.fields[t.get(i)];Ln(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,i){ln(e,(s,o)=>t[s]=o);for(const s of i)delete t[s]}clone(){return new At(We(this.value))}}function Jo(n){const t=[];return ln(n.fields,(e,i)=>{const s=new ot([e]);if(Ln(i)){const o=Jo(i.mapValue).fields;if(o.length===0)t.push(s);else for(const l of o)t.push(s.child(l))}else t.push(s)}),new Rt(t)}/**
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
 */class wt{constructor(t,e,i,s,o,l,u){this.key=t,this.documentType=e,this.version=i,this.readTime=s,this.createTime=o,this.data=l,this.documentState=u}static newInvalidDocument(t){return new wt(t,0,K.min(),K.min(),K.min(),At.empty(),0)}static newFoundDocument(t,e,i,s){return new wt(t,1,e,K.min(),i,s,0)}static newNoDocument(t,e){return new wt(t,2,e,K.min(),K.min(),At.empty(),0)}static newUnknownDocument(t,e){return new wt(t,3,e,K.min(),K.min(),At.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof wt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Gn{constructor(t,e){this.position=t,this.inclusive=e}}function Qs(n,t,e){let i=0;for(let s=0;s<n.position.length;s++){const o=t[s],l=n.position[s];if(o.field.isKeyField()?i=x.comparator(x.fromName(l.referenceValue),e.key):i=Ee(l,e.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function Xs(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Pt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Kn{constructor(t,e="asc"){this.field=t,this.dir=e}}function ch(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Zo{}class et extends Zo{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new hh(t,e,i):e==="array-contains"?new ph(t,i):e==="in"?new gh(t,i):e==="not-in"?new mh(t,i):e==="array-contains-any"?new _h(t,i):new et(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new dh(t,i):new fh(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ee(e,this.value)):e!==null&&ve(this.value)===ve(e)&&this.matchesComparison(Ee(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gt extends Zo{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Gt(t,e)}matches(t){return ta(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ta(n){return n.op==="and"}function ea(n){return uh(n)&&ta(n)}function uh(n){for(const t of n.filters)if(t instanceof Gt)return!1;return!0}function ti(n){if(n instanceof et)return n.field.canonicalString()+n.op.toString()+Ie(n.value);if(ea(n))return n.filters.map(t=>ti(t)).join(",");{const t=n.filters.map(e=>ti(e)).join(",");return`${n.op}(${t})`}}function na(n,t){return n instanceof et?function(i,s){return s instanceof et&&i.op===s.op&&i.field.isEqual(s.field)&&Pt(i.value,s.value)}(n,t):n instanceof Gt?function(i,s){return s instanceof Gt&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((o,l,u)=>o&&na(l,s.filters[u]),!0):!1}(n,t):void M()}function ra(n){return n instanceof et?function(e){return`${e.field.canonicalString()} ${e.op} ${Ie(e.value)}`}(n):n instanceof Gt?function(e){return e.op.toString()+" {"+e.getFilters().map(ra).join(" ,")+"}"}(n):"Filter"}class hh extends et{constructor(t,e,i){super(t,e,i),this.key=x.fromName(i.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class dh extends et{constructor(t,e){super(t,"in",e),this.keys=ia("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class fh extends et{constructor(t,e){super(t,"not-in",e),this.keys=ia("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ia(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>x.fromName(i.referenceValue))}class ph extends et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return fi(e)&&nn(e.arrayValue,this.value)}}class gh extends et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&nn(this.value.arrayValue,e)}}class mh extends et{constructor(t,e){super(t,"not-in",e)}matches(t){if(nn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!nn(this.value.arrayValue,e)}}class _h extends et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!fi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>nn(this.value.arrayValue,i))}}/**
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
 */class yh{constructor(t,e=null,i=[],s=[],o=null,l=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=s,this.limit=o,this.startAt=l,this.endAt=u,this.ue=null}}function Ys(n,t=null,e=[],i=[],s=null,o=null,l=null){return new yh(n,t,e,i,s,o,l)}function pi(n){const t=z(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>ti(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(o){return o.field.canonicalString()+o.dir}(i)).join(","),hi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>Ie(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>Ie(i)).join(",")),t.ue=e}return t.ue}function gi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!ch(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!na(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Xs(n.startAt,t.startAt)&&Xs(n.endAt,t.endAt)}/**
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
 */class nr{constructor(t,e=null,i=[],s=[],o=null,l="F",u=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=l,this.startAt=u,this.endAt=d,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function vh(n,t,e,i,s,o,l,u){return new nr(n,t,e,i,s,o,l,u)}function Eh(n){return new nr(n)}function Js(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ih(n){return n.collectionGroup!==null}function Qe(n){const t=z(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(l){let u=new pt(ot.comparator);return l.filters.forEach(d=>{d.getFlattenedFilters().forEach(f=>{f.isInequality()&&(u=u.add(f.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Kn(o,i))}),e.has(ot.keyField().canonicalString())||t.ce.push(new Kn(ot.keyField(),i))}return t.ce}function re(n){const t=z(n);return t.le||(t.le=Th(t,Qe(n))),t.le}function Th(n,t){if(n.limitType==="F")return Ys(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Kn(s.field,o)});const e=n.endAt?new Gn(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Gn(n.startAt.position,n.startAt.inclusive):null;return Ys(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function ei(n,t,e){return new nr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function sa(n,t){return gi(re(n),re(t))&&n.limitType===t.limitType}function oa(n){return`${pi(re(n))}|lt:${n.limitType}`}function He(n){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(s=>ra(s)).join(", ")}]`),hi(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(s=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(s)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(s=>Ie(s)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(s=>Ie(s)).join(",")),`Target(${i})`}(re(n))}; limitType=${n.limitType})`}function mi(n,t){return t.isFoundDocument()&&function(i,s){const o=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):x.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o)}(n,t)&&function(i,s){for(const o of Qe(i))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(i,s){for(const o of i.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(i,s){return!(i.startAt&&!function(l,u,d){const f=Qs(l,u,d);return l.inclusive?f<=0:f<0}(i.startAt,Qe(i),s)||i.endAt&&!function(l,u,d){const f=Qs(l,u,d);return l.inclusive?f>=0:f>0}(i.endAt,Qe(i),s))}(n,t)}function wh(n){return(t,e)=>{let i=!1;for(const s of Qe(n)){const o=Ah(s,t,e);if(o!==0)return o;i=i||s.field.isKeyField()}return 0}}function Ah(n,t,e){const i=n.field.isKeyField()?x.comparator(t.key,e.key):function(o,l,u){const d=l.data.field(o),f=u.data.field(o);return d!==null&&f!==null?Ee(d,f):M()}(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return M()}}/**
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
 */class Ae{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[s,o]of i)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[e]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ln(this.inner,(e,i)=>{for(const[s,o]of i)t(s,o)})}isEmpty(){return Xo(this.inner)}size(){return this.innerSize}}/**
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
 */const Rh=new yt(x.comparator);function Wn(){return Rh}const aa=new yt(x.comparator);function Nn(...n){let t=aa;for(const e of n)t=t.insert(e.key,e);return t}function la(n){let t=aa;return n.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function te(){return Xe()}function ca(){return Xe()}function Xe(){return new Ae(n=>n.toString(),(n,t)=>n.isEqual(t))}const Sh=new yt(x.comparator),bh=new pt(x.comparator);function ft(...n){let t=bh;for(const e of n)t=t.add(e);return t}const Ph=new pt($);function Ch(){return Ph}/**
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
 */function _i(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zn(t)?"-0":t}}function ua(n){return{integerValue:""+n}}function Vh(n,t){return rh(t)?ua(t):_i(n,t)}/**
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
 */class rr{constructor(){this._=void 0}}function Dh(n,t,e){return n instanceof Qn?function(s,o){const l={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&di(o)&&(o=Yo(o)),o&&(l.fields.__previous_value__=o),{mapValue:l}}(e,t):n instanceof rn?da(n,t):n instanceof sn?fa(n,t):function(s,o){const l=ha(s,o),u=Zs(l)+Zs(s.Pe);return Zr(l)&&Zr(s.Pe)?ua(u):_i(s.serializer,u)}(n,t)}function kh(n,t,e){return n instanceof rn?da(n,t):n instanceof sn?fa(n,t):e}function ha(n,t){return n instanceof Xn?function(i){return Zr(i)||function(o){return!!o&&"doubleValue"in o}(i)}(t)?t:{integerValue:0}:null}class Qn extends rr{}class rn extends rr{constructor(t){super(),this.elements=t}}function da(n,t){const e=pa(t);for(const i of n.elements)e.some(s=>Pt(s,i))||e.push(i);return{arrayValue:{values:e}}}class sn extends rr{constructor(t){super(),this.elements=t}}function fa(n,t){let e=pa(t);for(const i of n.elements)e=e.filter(s=>!Pt(s,i));return{arrayValue:{values:e}}}class Xn extends rr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Zs(n){return st(n.integerValue||n.doubleValue)}function pa(n){return fi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Nh(n,t){return n.field.isEqual(t.field)&&function(i,s){return i instanceof rn&&s instanceof rn||i instanceof sn&&s instanceof sn?ye(i.elements,s.elements,Pt):i instanceof Xn&&s instanceof Xn?Pt(i.Pe,s.Pe):i instanceof Qn&&s instanceof Qn}(n.transform,t.transform)}class Oh{constructor(t,e){this.version=t,this.transformResults=e}}class Nt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Nt}static exists(t){return new Nt(void 0,t)}static updateTime(t){return new Nt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Fn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class ir{}function ga(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new _a(n.key,Nt.none()):new cn(n.key,n.data,Nt.none());{const e=n.data,i=At.empty();let s=new pt(ot.comparator);for(let o of t.fields)if(!s.has(o)){let l=e.field(o);l===null&&o.length>1&&(o=o.popLast(),l=e.field(o)),l===null?i.delete(o):i.set(o,l),s=s.add(o)}return new ue(n.key,i,new Rt(s.toArray()),Nt.none())}}function xh(n,t,e){n instanceof cn?function(s,o,l){const u=s.value.clone(),d=eo(s.fieldTransforms,o,l.transformResults);u.setAll(d),o.convertToFoundDocument(l.version,u).setHasCommittedMutations()}(n,t,e):n instanceof ue?function(s,o,l){if(!Fn(s.precondition,o))return void o.convertToUnknownDocument(l.version);const u=eo(s.fieldTransforms,o,l.transformResults),d=o.data;d.setAll(ma(s)),d.setAll(u),o.convertToFoundDocument(l.version,d).setHasCommittedMutations()}(n,t,e):function(s,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()}(0,t,e)}function Ye(n,t,e,i){return n instanceof cn?function(o,l,u,d){if(!Fn(o.precondition,l))return u;const f=o.value.clone(),I=no(o.fieldTransforms,d,l);return f.setAll(I),l.convertToFoundDocument(l.version,f).setHasLocalMutations(),null}(n,t,e,i):n instanceof ue?function(o,l,u,d){if(!Fn(o.precondition,l))return u;const f=no(o.fieldTransforms,d,l),I=l.data;return I.setAll(ma(o)),I.setAll(f),l.convertToFoundDocument(l.version,I).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(n,t,e,i):function(o,l,u){return Fn(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):u}(n,t,e)}function Mh(n,t){let e=null;for(const i of n.fieldTransforms){const s=t.data.field(i.field),o=ha(i.transform,s||null);o!=null&&(e===null&&(e=At.empty()),e.set(i.field,o))}return e||null}function to(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&ye(i,s,(o,l)=>Nh(o,l))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class cn extends ir{constructor(t,e,i,s=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ue extends ir{constructor(t,e,i,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function ma(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}}),t}function eo(n,t,e){const i=new Map;J(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],l=o.transform,u=t.data.field(o.field);i.set(o.field,kh(l,u,e[s]))}return i}function no(n,t,e){const i=new Map;for(const s of n){const o=s.transform,l=e.data.field(s.field);i.set(s.field,Dh(o,l,t))}return i}class _a extends ir{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Lh extends ir{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Fh{constructor(t,e,i,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&xh(o,t,i[s])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=Ye(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=Ye(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=ca();return this.mutations.forEach(s=>{const o=t.get(s.key),l=o.overlayedDocument;let u=this.applyToLocalView(l,o.mutatedFields);u=e.has(s.key)?null:u;const d=ga(l,u);d!==null&&i.set(s.key,d),l.isValidDocument()||l.convertToNoDocument(K.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),ft())}isEqual(t){return this.batchId===t.batchId&&ye(this.mutations,t.mutations,(e,i)=>to(e,i))&&ye(this.baseMutations,t.baseMutations,(e,i)=>to(e,i))}}class yi{constructor(t,e,i,s){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=s}static from(t,e,i){J(t.mutations.length===i.length);let s=function(){return Sh}();const o=t.mutations;for(let l=0;l<o.length;l++)s=s.insert(o[l].key,i[l].version);return new yi(t,e,i,s)}}/**
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
 */class Bh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */var X,L;function Uh(n){switch(n){default:return M();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function $h(n){if(n===void 0)return oe("GRPC error has no .code"),S.UNKNOWN;switch(n){case X.OK:return S.OK;case X.CANCELLED:return S.CANCELLED;case X.UNKNOWN:return S.UNKNOWN;case X.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case X.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case X.INTERNAL:return S.INTERNAL;case X.UNAVAILABLE:return S.UNAVAILABLE;case X.UNAUTHENTICATED:return S.UNAUTHENTICATED;case X.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case X.NOT_FOUND:return S.NOT_FOUND;case X.ALREADY_EXISTS:return S.ALREADY_EXISTS;case X.PERMISSION_DENIED:return S.PERMISSION_DENIED;case X.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case X.ABORTED:return S.ABORTED;case X.OUT_OF_RANGE:return S.OUT_OF_RANGE;case X.UNIMPLEMENTED:return S.UNIMPLEMENTED;case X.DATA_LOSS:return S.DATA_LOSS;default:return M()}}(L=X||(X={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Bo([4294967295,4294967295],0);class jh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ni(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function zh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function qh(n,t){return ni(n,t.toTimestamp())}function _e(n){return J(!!n),K.fromTimestamp(function(e){const i=ae(e);return new nt(i.seconds,i.nanos)}(n))}function ya(n,t){return ri(n,t).canonicalString()}function ri(n,t){const e=function(s){return new Q(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Hh(n){const t=Q.fromString(n);return J(Zh(t)),t}function ii(n,t){return ya(n.databaseId,t.path)}function Gh(n){const t=Hh(n);return t.length===4?Q.emptyPath():Wh(t)}function Kh(n){return new Q(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Wh(n){return J(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ro(n,t,e){return{name:ii(n,t),fields:e.value.mapValue.fields}}function Qh(n,t){let e;if(t instanceof cn)e={update:ro(n,t.key,t.value)};else if(t instanceof _a)e={delete:ii(n,t.key)};else if(t instanceof ue)e={update:ro(n,t.key,t.data),updateMask:Jh(t.fieldMask)};else{if(!(t instanceof Lh))return M();e={verify:ii(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(o,l){const u=l.transform;if(u instanceof Qn)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof rn)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof sn)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Xn)return{fieldPath:l.field.canonicalString(),increment:u.Pe};throw M()}(0,i))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:qh(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M()}(n,t.precondition)),e}function Xh(n,t){return n&&n.length>0?(J(t!==void 0),n.map(e=>function(s,o){let l=s.updateTime?_e(s.updateTime):_e(o);return l.isEqual(K.min())&&(l=_e(o)),new Oh(l,s.transformResults||[])}(e,t))):[]}function Yh(n){let t=Gh(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){J(i===1);const I=e.from[0];I.allDescendants?s=I.collectionId:t=t.child(I.collectionId)}let o=[];e.where&&(o=function(A){const b=va(A);return b instanceof Gt&&ea(b)?b.getFilters():[b]}(e.where));let l=[];e.orderBy&&(l=function(A){return A.map(b=>function(V){return new Kn(me(V.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(b))}(e.orderBy));let u=null;e.limit&&(u=function(A){let b;return b=typeof A=="object"?A.value:A,hi(b)?null:b}(e.limit));let d=null;e.startAt&&(d=function(A){const b=!!A.before,C=A.values||[];return new Gn(C,b)}(e.startAt));let f=null;return e.endAt&&(f=function(A){const b=!A.before,C=A.values||[];return new Gn(C,b)}(e.endAt)),vh(t,s,l,o,u,"F",d,f)}function va(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=me(e.unaryFilter.field);return et.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=me(e.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=me(e.unaryFilter.field);return et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=me(e.unaryFilter.field);return et.create(l,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(n):n.fieldFilter!==void 0?function(e){return et.create(me(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Gt.create(e.compositeFilter.filters.map(i=>va(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(n):M()}function me(n){return ot.fromServerFormat(n.fieldPath)}function Jh(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Zh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class td{constructor(t){this.ct=t}}function ed(n){const t=Yh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ei(t,t.limit,"L"):t}/**
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
 */class nd{constructor(){this.un=new rd}addToCollectionParentIndex(t,e){return this.un.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(Ht.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(Ht.min())}updateCollectionGroup(t,e,i){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class rd{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e]||new pt(Q.comparator),o=!s.has(i);return this.index[e]=s.add(i),o}has(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e];return s&&s.has(i)}getEntries(t){return(this.index[t]||new pt(Q.comparator)).toArray()}}/**
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
 */class Te{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Te(0)}static kn(){return new Te(-1)}}/**
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
 */class id{constructor(){this.changes=new Ae(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,wt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?R.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class sd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class od{constructor(t,e,i,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(i!==null&&Ye(i.mutation,s,Rt.empty(),nt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,ft()).next(()=>i))}getLocalViewOfDocuments(t,e,i=ft()){const s=te();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,i).next(o=>{let l=Nn();return o.forEach((u,d)=>{l=l.insert(u,d.overlayedDocument)}),l}))}getOverlayedDocuments(t,e){const i=te();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,ft()))}populateOverlays(t,e,i){const s=[];return i.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((l,u)=>{e.set(l,u)})})}computeViews(t,e,i,s){let o=Wn();const l=Xe(),u=function(){return Xe()}();return e.forEach((d,f)=>{const I=i.get(f.key);s.has(f.key)&&(I===void 0||I.mutation instanceof ue)?o=o.insert(f.key,f):I!==void 0?(l.set(f.key,I.mutation.getFieldMask()),Ye(I.mutation,f,I.mutation.getFieldMask(),nt.now())):l.set(f.key,Rt.empty())}),this.recalculateAndSaveOverlays(t,o).next(d=>(d.forEach((f,I)=>l.set(f,I)),e.forEach((f,I)=>{var A;return u.set(f,new sd(I,(A=l.get(f))!==null&&A!==void 0?A:null))}),u))}recalculateAndSaveOverlays(t,e){const i=Xe();let s=new yt((l,u)=>l-u),o=ft();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(l=>{for(const u of l)u.keys().forEach(d=>{const f=e.get(d);if(f===null)return;let I=i.get(d)||Rt.empty();I=u.applyToLocalView(f,I),i.set(d,I);const A=(s.get(u.batchId)||ft()).add(d);s=s.insert(u.batchId,A)})}).next(()=>{const l=[],u=s.getReverseIterator();for(;u.hasNext();){const d=u.getNext(),f=d.key,I=d.value,A=ca();I.forEach(b=>{if(!o.has(b)){const C=ga(e.get(b),i.get(b));C!==null&&A.set(b,C),o=o.add(b)}}),l.push(this.documentOverlayCache.saveOverlays(t,f,A))}return R.waitFor(l)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,s){return function(l){return x.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ih(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,s):this.getDocumentsMatchingCollectionQuery(t,e,i,s)}getNextDocuments(t,e,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,s).next(o=>{const l=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,s-o.size):R.resolve(te());let u=-1,d=o;return l.next(f=>R.forEach(f,(I,A)=>(u<A.largestBatchId&&(u=A.largestBatchId),o.get(I)?R.resolve():this.remoteDocumentCache.getEntry(t,I).next(b=>{d=d.insert(I,b)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,d,f,ft())).next(I=>({batchId:u,changes:la(I)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next(i=>{let s=Nn();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,i,s){const o=e.collectionGroup;let l=Nn();return this.indexManager.getCollectionParents(t,o).next(u=>R.forEach(u,d=>{const f=function(A,b){return new nr(b,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,i,s).next(I=>{I.forEach((A,b)=>{l=l.insert(A,b)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(t,e,i,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,o,s))).next(l=>{o.forEach((d,f)=>{const I=f.getKey();l.get(I)===null&&(l=l.insert(I,wt.newInvalidDocument(I)))});let u=Nn();return l.forEach((d,f)=>{const I=o.get(d);I!==void 0&&Ye(I.mutation,f,Rt.empty(),nt.now()),mi(e,f)&&(u=u.insert(d,f))}),u})}}/**
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
 */class ad{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return R.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:_e(s.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:ed(s.bundledQuery),readTime:_e(s.readTime)}}(e)),R.resolve()}}/**
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
 */class ld{constructor(){this.overlays=new yt(x.comparator),this.Ir=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const i=te();return R.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&i.set(s,o)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((s,o)=>{this.ht(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,i){const s=this.Ir.get(i);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(i)),R.resolve()}getOverlaysForCollection(t,e,i){const s=te(),o=e.length+1,l=new x(e.child("")),u=this.overlays.getIteratorFrom(l);for(;u.hasNext();){const d=u.getNext().value,f=d.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&d.largestBatchId>i&&s.set(d.getKey(),d)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,i,s){let o=new yt((f,I)=>f-I);const l=this.overlays.getIterator();for(;l.hasNext();){const f=l.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>i){let I=o.get(f.largestBatchId);I===null&&(I=te(),o=o.insert(f.largestBatchId,I)),I.set(f.getKey(),f)}}const u=te(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((f,I)=>u.set(f,I)),!(u.size()>=s)););return R.resolve(u)}ht(t,e,i){const s=this.overlays.get(i.key);if(s!==null){const l=this.Ir.get(s.largestBatchId).delete(i.key);this.Ir.set(s.largestBatchId,l)}this.overlays=this.overlays.insert(i.key,new Bh(e,i));let o=this.Ir.get(e);o===void 0&&(o=ft(),this.Ir.set(e,o)),this.Ir.set(e,o.add(i.key))}}/**
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
 */class cd{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
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
 */class vi{constructor(){this.Tr=new pt(tt.Er),this.dr=new pt(tt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const i=new tt(t,e);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.Vr(new tt(t,e))}mr(t,e){t.forEach(i=>this.removeReference(i,e))}gr(t){const e=new x(new Q([])),i=new tt(e,t),s=new tt(e,t+1),o=[];return this.dr.forEachInRange([i,s],l=>{this.Vr(l),o.push(l.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new x(new Q([])),i=new tt(e,t),s=new tt(e,t+1);let o=ft();return this.dr.forEachInRange([i,s],l=>{o=o.add(l.key)}),o}containsKey(t){const e=new tt(t,0),i=this.Tr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class tt{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return x.comparator(t.key,e.key)||$(t.wr,e.wr)}static Ar(t,e){return $(t.wr,e.wr)||x.comparator(t.key,e.key)}}/**
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
 */class ud{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new pt(tt.Er)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new Fh(o,e,i,s);this.mutationQueue.push(l);for(const u of s)this.br=this.br.add(new tt(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return R.resolve(l)}lookupMutationBatch(t,e){return R.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,s=this.vr(i),o=s<0?0:s;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new tt(e,0),s=new tt(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([i,s],l=>{const u=this.Dr(l.wr);o.push(u)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new pt($);return e.forEach(s=>{const o=new tt(s,0),l=new tt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,l],u=>{i=i.add(u.wr)})}),R.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,s=i.length+1;let o=i;x.isDocumentKey(o)||(o=o.child(""));const l=new tt(new x(o),0);let u=new pt($);return this.br.forEachWhile(d=>{const f=d.key.path;return!!i.isPrefixOf(f)&&(f.length===s&&(u=u.add(d.wr)),!0)},l),R.resolve(this.Cr(u))}Cr(t){const e=[];return t.forEach(i=>{const s=this.Dr(i);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){J(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return R.forEach(e.mutations,s=>{const o=new tt(s.key,e.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=i})}On(t){}containsKey(t,e){const i=new tt(e,0),s=this.br.firstAfterOrEqual(i);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class hd{constructor(t){this.Mr=t,this.docs=function(){return new yt(x.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,s=this.docs.get(i),o=s?s.size:0,l=this.Mr(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return R.resolve(i?i.document.mutableCopy():wt.newInvalidDocument(e))}getEntries(t,e){let i=Wn();return e.forEach(s=>{const o=this.docs.get(s);i=i.insert(s,o?o.document.mutableCopy():wt.newInvalidDocument(s))}),R.resolve(i)}getDocumentsMatchingQuery(t,e,i,s){let o=Wn();const l=e.path,u=new x(l.child("")),d=this.docs.getIteratorFrom(u);for(;d.hasNext();){const{key:f,value:{document:I}}=d.getNext();if(!l.isPrefixOf(f.path))break;f.path.length>l.length+1||Zu(Ju(I),i)<=0||(s.has(I.key)||mi(e,I))&&(o=o.insert(I.key,I.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,i,s){M()}Or(t,e){return R.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new dd(this)}getSize(t){return R.resolve(this.size)}}class dd extends id{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(i)}),R.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class fd{constructor(t){this.persistence=t,this.Nr=new Ae(e=>pi(e),gi),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.Lr=0,this.Br=new vi,this.targetCount=0,this.kr=Te.Bn()}forEachTarget(t,e){return this.Nr.forEach((i,s)=>e(s)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.Lr&&(this.Lr=e),R.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Te(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.Kn(e),R.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,i){let s=0;const o=[];return this.Nr.forEach((l,u)=>{u.sequenceNumber<=e&&i.get(u.targetId)===null&&(this.Nr.delete(l),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),R.waitFor(o).next(()=>s)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const i=this.Nr.get(e)||null;return R.resolve(i)}addMatchingKeys(t,e,i){return this.Br.Rr(e,i),R.resolve()}removeMatchingKeys(t,e,i){this.Br.mr(e,i);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(l=>{o.push(s.markPotentiallyOrphaned(t,l))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const i=this.Br.yr(e);return R.resolve(i)}containsKey(t,e){return R.resolve(this.Br.containsKey(e))}}/**
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
 */class pd{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Qo(0),this.Kr=!1,this.Kr=!0,this.$r=new cd,this.referenceDelegate=t(this),this.Ur=new fd(this),this.indexManager=new nd,this.remoteDocumentCache=function(s){return new hd(s)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new td(e),this.Gr=new ad(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ld,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.qr[t.toKey()];return i||(i=new ud(e,this.referenceDelegate),this.qr[t.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,i){D("MemoryPersistence","Starting transaction:",t);const s=new gd(this.Qr.next());return this.referenceDelegate.zr(),i(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return R.or(Object.values(this.qr).map(i=>()=>i.containsKey(t,e)))}}class gd extends eh{constructor(t){super(),this.currentSequenceNumber=t}}class Ei{constructor(t){this.persistence=t,this.Jr=new vi,this.Yr=null}static Zr(t){return new Ei(t)}get Xr(){if(this.Yr)return this.Yr;throw M()}addReference(t,e,i){return this.Jr.addReference(i,e),this.Xr.delete(i.toString()),R.resolve()}removeReference(t,e,i){return this.Jr.removeReference(i,e),this.Xr.add(i.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),R.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>i.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Xr,i=>{const s=x.fromPath(i);return this.ei(t,s).next(o=>{o||e.removeEntry(s,K.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(i=>{i?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return R.or([()=>R.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
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
 */class Ii{constructor(t,e,i,s){this.targetId=t,this.fromCache=e,this.$i=i,this.Ui=s}static Wi(t,e){let i=ft(),s=ft();for(const o of e.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Ii(t,e.fromCache,i,s)}}/**
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
 */class md{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class _d{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Rc()?8:nh(Tc())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,i,s){const o={result:null};return this.Yi(t,e).next(l=>{o.result=l}).next(()=>{if(!o.result)return this.Zi(t,e,s,i).next(l=>{o.result=l})}).next(()=>{if(o.result)return;const l=new md;return this.Xi(t,e,l).next(u=>{if(o.result=u,this.zi)return this.es(t,e,l,u.size)})}).next(()=>o.result)}es(t,e,i,s){return i.documentReadCount<this.ji?(qe()<=F.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",He(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),R.resolve()):(qe()<=F.DEBUG&&D("QueryEngine","Query:",He(e),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Hi*s?(qe()<=F.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",He(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,re(e))):R.resolve())}Yi(t,e){if(Js(e))return R.resolve(null);let i=re(e);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=ei(e,null,"F"),i=re(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(o=>{const l=ft(...o);return this.Ji.getDocuments(t,l).next(u=>this.indexManager.getMinOffset(t,i).next(d=>{const f=this.ts(e,u);return this.ns(e,f,l,d.readTime)?this.Yi(t,ei(e,null,"F")):this.rs(t,f,e,d)}))})))}Zi(t,e,i,s){return Js(e)||s.isEqual(K.min())?R.resolve(null):this.Ji.getDocuments(t,i).next(o=>{const l=this.ts(e,o);return this.ns(e,l,i,s)?R.resolve(null):(qe()<=F.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),He(e)),this.rs(t,l,e,Yu(s,-1)).next(u=>u))})}ts(t,e){let i=new pt(wh(t));return e.forEach((s,o)=>{mi(t,o)&&(i=i.add(o))}),i}ns(t,e,i,s){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,i){return qe()<=F.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",He(e)),this.Ji.getDocumentsMatchingQuery(t,e,Ht.min(),i)}rs(t,e,i,s){return this.Ji.getDocumentsMatchingQuery(t,i,s).next(o=>(e.forEach(l=>{o=o.insert(l.key,l)}),o))}}/**
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
 */class yd{constructor(t,e,i,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new yt($),this._s=new Ae(o=>pi(o),gi),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(i)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new od(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function vd(n,t,e,i){return new yd(n,t,e,i)}async function Ea(n,t){const e=z(n);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(i))).next(o=>{const l=[],u=[];let d=ft();for(const f of s){l.push(f.batchId);for(const I of f.mutations)d=d.add(I.key)}for(const f of o){u.push(f.batchId);for(const I of f.mutations)d=d.add(I.key)}return e.localDocuments.getDocuments(i,d).next(f=>({hs:f,removedBatchIds:l,addedBatchIds:u}))})})}function Ed(n,t){const e=z(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(u,d,f,I){const A=f.batch,b=A.keys();let C=R.resolve();return b.forEach(V=>{C=C.next(()=>I.getEntry(d,V)).next(O=>{const k=f.docVersions.get(V);J(k!==null),O.version.compareTo(k)<0&&(A.applyToRemoteDocument(O,f),O.isValidDocument()&&(O.setReadTime(f.commitVersion),I.addEntry(O)))})}),C.next(()=>u.mutationQueue.removeMutationBatch(d,A))}(e,i,t,o).next(()=>o.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(u){let d=ft();for(let f=0;f<u.mutationResults.length;++f)u.mutationResults[f].transformResults.length>0&&(d=d.add(u.batch.mutations[f].key));return d}(t))).next(()=>e.localDocuments.getDocuments(i,s))})}function Id(n){const t=z(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Td(n,t){const e=z(n);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}class io{constructor(){this.activeTargetIds=Ch()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class wd{constructor(){this.so=new io,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,i){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new io,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Ad{_o(t){}shutdown(){}}/**
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
 */class so{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let On=null;function Ur(){return On===null?On=function(){return 268435456+Math.round(2147483648*Math.random())}():On++,"0x"+On.toString(16)}/**
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
 */const Rd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Sd{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
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
 */const ht="WebChannelConnection";class bd extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,i,s,o,l){const u=Ur(),d=this.xo(e,i.toUriEncodedString());D("RestConnection",`Sending RPC '${e}' ${u}:`,d,s);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,o,l),this.No(e,d,f,s).then(I=>(D("RestConnection",`Received RPC '${e}' ${u}: `,I),I),I=>{throw jn("RestConnection",`RPC '${e}' ${u} failed with error: `,I,"url: ",d,"request:",s),I})}Lo(e,i,s,o,l,u){return this.Mo(e,i,s,o,l)}Oo(e,i,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+we}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((o,l)=>e[l]=o),s&&s.headers.forEach((o,l)=>e[l]=o)}xo(e,i){const s=Rd[e];return`${this.Do}/v1/${i}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,i,s){const o=Ur();return new Promise((l,u)=>{const d=new Uo;d.setWithCredentials(!0),d.listenOnce(jo.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Mn.NO_ERROR:const I=d.getResponseJson();D(ht,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(I)),l(I);break;case Mn.TIMEOUT:D(ht,`RPC '${t}' ${o} timed out`),u(new N(S.DEADLINE_EXCEEDED,"Request time out"));break;case Mn.HTTP_ERROR:const A=d.getStatus();if(D(ht,`RPC '${t}' ${o} failed with status:`,A,"response text:",d.getResponseText()),A>0){let b=d.getResponseJson();Array.isArray(b)&&(b=b[0]);const C=b==null?void 0:b.error;if(C&&C.status&&C.message){const V=function(k){const H=k.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(H)>=0?H:S.UNKNOWN}(C.status);u(new N(V,C.message))}else u(new N(S.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new N(S.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{D(ht,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);D(ht,`RPC '${t}' ${o} sending request:`,s),d.send(e,"POST",f,i,15)})}Bo(t,e,i){const s=Ur(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],l=Ho(),u=qo(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(d.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(d.xmlHttpFactory=new $o({})),this.Oo(d.initMessageHeaders,e,i),d.encodeInitMessageHeaders=!0;const I=o.join("");D(ht,`Creating RPC '${t}' stream ${s}: ${I}`,d);const A=l.createWebChannel(I,d);let b=!1,C=!1;const V=new Sd({Io:k=>{C?D(ht,`Not sending because RPC '${t}' stream ${s} is closed:`,k):(b||(D(ht,`Opening RPC '${t}' stream ${s} transport.`),A.open(),b=!0),D(ht,`RPC '${t}' stream ${s} sending:`,k),A.send(k))},To:()=>A.close()}),O=(k,H,j)=>{k.listen(H,G=>{try{j(G)}catch(Z){setTimeout(()=>{throw Z},0)}})};return O(A,Ge.EventType.OPEN,()=>{C||(D(ht,`RPC '${t}' stream ${s} transport opened.`),V.yo())}),O(A,Ge.EventType.CLOSE,()=>{C||(C=!0,D(ht,`RPC '${t}' stream ${s} transport closed`),V.So())}),O(A,Ge.EventType.ERROR,k=>{C||(C=!0,jn(ht,`RPC '${t}' stream ${s} transport errored:`,k),V.So(new N(S.UNAVAILABLE,"The operation could not be completed")))}),O(A,Ge.EventType.MESSAGE,k=>{var H;if(!C){const j=k.data[0];J(!!j);const G=j,Z=G.error||((H=G[0])===null||H===void 0?void 0:H.error);if(Z){D(ht,`RPC '${t}' stream ${s} received error:`,Z);const Ct=Z.status;let Y=function(m){const _=X[m];if(_!==void 0)return $h(_)}(Ct),y=Z.message;Y===void 0&&(Y=S.INTERNAL,y="Unknown error status: "+Ct+" with message "+Z.message),C=!0,V.So(new N(Y,y)),A.close()}else D(ht,`RPC '${t}' stream ${s} received:`,j),V.bo(j)}}),O(u,zo.STAT_EVENT,k=>{k.stat===Yr.PROXY?D(ht,`RPC '${t}' stream ${s} detected buffering proxy`):k.stat===Yr.NOPROXY&&D(ht,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.wo()},0),V}}function $r(){return typeof document<"u"?document:null}/**
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
 */function sr(n){return new jh(n,!0)}/**
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
 */class Ia{constructor(t,e,i=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=i,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-i);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Pd{constructor(t,e,i,s,o,l,u,d){this.ui=t,this.Ho=i,this.Jo=s,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=u,this.listener=d,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ia(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(oe(e.toString()),oe("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Yo===e&&this.P_(i,s)},i=>{t(()=>{const s=new N(S.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(s)})})}P_(t,e){const i=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{i(()=>this.I_(s))}),this.stream.onMessage(s=>{i(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return D("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Cd extends Pd{constructor(t,e,i,s,o,l){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,s,l),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return J(!!t.streamToken),this.lastStreamToken=t.streamToken,J(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){J(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Xh(t.writeResults,t.commitTime),i=_e(t.commitTime);return this.listener.g_(i,e)}p_(){const t={};t.database=Kh(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>Qh(this.serializer,i))};this.a_(e)}}/**
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
 */class Vd extends class{}{constructor(t,e,i,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new N(S.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Mo(t,ri(e,i),s,o,l)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(S.UNKNOWN,o.toString())})}Lo(t,e,i,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,u])=>this.connection.Lo(t,ri(e,i),s,l,u,o)).catch(l=>{throw l.name==="FirebaseError"?(l.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new N(S.UNKNOWN,l.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Dd{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(oe(e),this.D_=!1):D("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class kd{constructor(t,e,i,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(l=>{i.enqueueAndForget(async()=>{hn(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(d){const f=z(d);f.L_.add(4),await un(f),f.q_.set("Unknown"),f.L_.delete(4),await or(f)}(this))})}),this.q_=new Dd(i,s)}}async function or(n){if(hn(n))for(const t of n.B_)await t(!0)}async function un(n){for(const t of n.B_)await t(!1)}function hn(n){return z(n).L_.size===0}async function Ta(n,t,e){if(!er(t))throw t;n.L_.add(1),await un(n),n.q_.set("Offline"),e||(e=()=>Id(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await or(n)})}function wa(n,t){return t().catch(e=>Ta(n,e,t))}async function ar(n){const t=z(n),e=Kt(t);let i=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;Nd(t);)try{const s=await Td(t.localStore,i);if(s===null){t.O_.length===0&&e.o_();break}i=s.batchId,Od(t,s)}catch(s){await Ta(t,s)}Aa(t)&&Ra(t)}function Nd(n){return hn(n)&&n.O_.length<10}function Od(n,t){n.O_.push(t);const e=Kt(n);e.r_()&&e.V_&&e.m_(t.mutations)}function Aa(n){return hn(n)&&!Kt(n).n_()&&n.O_.length>0}function Ra(n){Kt(n).start()}async function xd(n){Kt(n).p_()}async function Md(n){const t=Kt(n);for(const e of n.O_)t.m_(e.mutations)}async function Ld(n,t,e){const i=n.O_.shift(),s=yi.from(i,t,e);await wa(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ar(n)}async function Fd(n,t){t&&Kt(n).V_&&await async function(i,s){if(function(l){return Uh(l)&&l!==S.ABORTED}(s.code)){const o=i.O_.shift();Kt(i).s_(),await wa(i,()=>i.remoteSyncer.rejectFailedWrite(o.batchId,s)),await ar(i)}}(n,t),Aa(n)&&Ra(n)}async function oo(n,t){const e=z(n);e.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const i=hn(e);e.L_.add(3),await un(e),i&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await or(e)}async function Bd(n,t){const e=z(n);t?(e.L_.delete(2),await or(e)):t||(e.L_.add(2),await un(e),e.q_.set("Unknown"))}function Kt(n){return n.U_||(n.U_=function(e,i,s){const o=z(e);return o.w_(),new Cd(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:xd.bind(null,n),mo:Fd.bind(null,n),f_:Md.bind(null,n),g_:Ld.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await ar(n)):(await n.U_.stop(),n.O_.length>0&&(D("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Ti{constructor(t,e,i,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new ne,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,s,o){const l=Date.now()+i,u=new Ti(t,e,l,s,o);return u.start(i),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sa(n,t){if(oe("AsyncQueue",`${t}: ${n}`),er(n))return new N(S.UNAVAILABLE,`${t}: ${n}`);throw n}class Ud{constructor(){this.queries=ao(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,i){const s=z(e),o=s.queries;s.queries=ao(),o.forEach((l,u)=>{for(const d of u.j_)d.onError(i)})})(this,new N(S.ABORTED,"Firestore shutting down"))}}function ao(){return new Ae(n=>oa(n),sa)}function $d(n){n.Y_.forEach(t=>{t.next()})}var lo,co;(co=lo||(lo={})).ea="default",co.Cache="cache";class jd{constructor(t,e,i,s,o,l){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.Ca={},this.Fa=new Ae(u=>oa(u),sa),this.Ma=new Map,this.xa=new Set,this.Oa=new yt(x.comparator),this.Na=new Map,this.La=new vi,this.Ba={},this.ka=new Map,this.qa=Te.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function zd(n,t,e){const i=Kd(n);try{const s=await function(l,u){const d=z(l),f=nt.now(),I=u.reduce((C,V)=>C.add(V.key),ft());let A,b;return d.persistence.runTransaction("Locally write mutations","readwrite",C=>{let V=Wn(),O=ft();return d.cs.getEntries(C,I).next(k=>{V=k,V.forEach((H,j)=>{j.isValidDocument()||(O=O.add(H))})}).next(()=>d.localDocuments.getOverlayedDocuments(C,V)).next(k=>{A=k;const H=[];for(const j of u){const G=Mh(j,A.get(j.key).overlayedDocument);G!=null&&H.push(new ue(j.key,G,Jo(G.value.mapValue),Nt.exists(!0)))}return d.mutationQueue.addMutationBatch(C,f,H,u)}).next(k=>{b=k;const H=k.applyToLocalDocumentSet(A,O);return d.documentOverlayCache.saveOverlays(C,k.batchId,H)})}).then(()=>({batchId:b.batchId,changes:la(A)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(l,u,d){let f=l.Ba[l.currentUser.toKey()];f||(f=new yt($)),f=f.insert(u,d),l.Ba[l.currentUser.toKey()]=f}(i,s.batchId,e),await lr(i,s.changes),await ar(i.remoteStore)}catch(s){const o=Sa(s,"Failed to persist write");e.reject(o)}}function uo(n,t,e){const i=z(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const s=[];i.Fa.forEach((o,l)=>{const u=l.view.Z_(t);u.snapshot&&s.push(u.snapshot)}),function(l,u){const d=z(l);d.onlineState=u;let f=!1;d.queries.forEach((I,A)=>{for(const b of A.j_)b.Z_(u)&&(f=!0)}),f&&$d(d)}(i.eventManager,t),s.length&&i.Ca.d_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function qd(n,t){const e=z(n),i=t.batch.batchId;try{const s=await Ed(e.localStore,t);Pa(e,i,null),ba(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await lr(e,s)}catch(s){await Wo(s)}}async function Hd(n,t,e){const i=z(n);try{const s=await function(l,u){const d=z(l);return d.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let I;return d.mutationQueue.lookupMutationBatch(f,u).next(A=>(J(A!==null),I=A.keys(),d.mutationQueue.removeMutationBatch(f,A))).next(()=>d.mutationQueue.performConsistencyCheck(f)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(f,I,u)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,I)).next(()=>d.localDocuments.getDocuments(f,I))})}(i.localStore,t);Pa(i,t,e),ba(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await lr(i,s)}catch(s){await Wo(s)}}function ba(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function Pa(n,t,e){const i=z(n);let s=i.Ba[i.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),i.Ba[i.currentUser.toKey()]=s}}async function lr(n,t,e){const i=z(n),s=[],o=[],l=[];i.Fa.isEmpty()||(i.Fa.forEach((u,d)=>{l.push(i.Ka(d,t,e).then(f=>{var I;if((f||e)&&i.isPrimaryClient){const A=f?!f.fromCache:(I=void 0)===null||I===void 0?void 0:I.current;i.sharedClientState.updateQueryState(d.targetId,A?"current":"not-current")}if(f){s.push(f);const A=Ii.Wi(d.targetId,f);o.push(A)}}))}),await Promise.all(l),i.Ca.d_(s),await async function(d,f){const I=z(d);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>R.forEach(f,b=>R.forEach(b.$i,C=>I.persistence.referenceDelegate.addReference(A,b.targetId,C)).next(()=>R.forEach(b.Ui,C=>I.persistence.referenceDelegate.removeReference(A,b.targetId,C)))))}catch(A){if(!er(A))throw A;D("LocalStore","Failed to update sequence numbers: "+A)}for(const A of f){const b=A.targetId;if(!A.fromCache){const C=I.os.get(b),V=C.snapshotVersion,O=C.withLastLimboFreeSnapshotVersion(V);I.os=I.os.insert(b,O)}}}(i.localStore,o))}async function Gd(n,t){const e=z(n);if(!e.currentUser.isEqual(t)){D("SyncEngine","User change. New user:",t.toKey());const i=await Ea(e.localStore,t);e.currentUser=t,function(o,l){o.ka.forEach(u=>{u.forEach(d=>{d.reject(new N(S.CANCELLED,l))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await lr(e,i.hs)}}function Kd(n){const t=z(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=qd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Hd.bind(null,t),t}class ho{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=sr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return vd(this.persistence,new _d,t.initialUser,this.serializer)}createPersistence(t){return new pd(Ei.Zr,this.serializer)}createSharedClientState(t){return new wd}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Wd{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>uo(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gd.bind(null,this.syncEngine),await Bd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Ud}()}createDatastore(t){const e=sr(t.databaseInfo.databaseId),i=function(o){return new bd(o)}(t.databaseInfo);return function(o,l,u,d){return new Vd(o,l,u,d)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,s,o,l,u){return new kd(i,s,o,l,u)}(this.localStore,this.datastore,t.asyncQueue,e=>uo(this.syncEngine,e,0),function(){return so.D()?new so:new Ad}())}createSyncEngine(t,e){return function(s,o,l,u,d,f,I){const A=new jd(s,o,l,u,d,f);return I&&(A.Qa=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=z(s);D("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await un(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}/**
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
 */class Qd{constructor(t,e,i,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=dt.UNAUTHENTICATED,this.clientId=Ko.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async o=>{D("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(i,o=>(D("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ne;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Sa(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function jr(n,t){n.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await Ea(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function fo(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Yd(n);D("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(i=>oo(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>oo(t.remoteStore,s)),n._onlineComponents=t}function Xd(n){return n.name==="FirebaseError"?n.code===S.FAILED_PRECONDITION||n.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Yd(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await jr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Xd(e))throw e;jn("Error using user provided cache. Falling back to memory cache: "+e),await jr(n,new ho)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await jr(n,new ho);return n._offlineComponents}async function Jd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await fo(n,n._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await fo(n,new Wd))),n._onlineComponents}function Zd(n){return Jd(n).then(t=>t.syncEngine)}/**
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
 */function Ca(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const po=new Map;/**
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
 */function Va(n,t,e){if(!e)throw new N(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function tf(n,t,e,i){if(t===!0&&i===!0)throw new N(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function go(n){if(!x.isDocumentKey(n))throw new N(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function mo(n){if(x.isDocumentKey(n))throw new N(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function wi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M()}function Da(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=wi(n);throw new N(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class _o{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new N(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}tf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ca((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class cr{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _o({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new N(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _o(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new ju;switch(i.type){case"firstParty":return new Gu(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new N(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=po.get(e);i&&(D("ComponentProvider","Removing Datastore"),po.delete(e),i.terminate())}(this),Promise.resolve()}}function ef(n,t,e,i={}){var s;const o=(n=Da(n,cr))._getSettings(),l=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==l&&jn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:l,ssl:!1})),i.mockUserToken){let u,d;if(typeof i.mockUserToken=="string")u=i.mockUserToken,d=dt.MOCK_USER;else{u=Ic(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=i.mockUserToken.sub||i.mockUserToken.user_id;if(!f)throw new N(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new dt(f)}n._authCredentials=new zu(new Go(u,d))}}/**
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
 */class Ai{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new Ai(this.firestore,t,this._query)}}class Ot{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ot(this.firestore,t,this._key)}}class zt extends Ai{constructor(t,e,i){super(t,e,Eh(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ot(this.firestore,null,new x(t))}withConverter(t){return new zt(this.firestore,t,this._path)}}function nf(n,t,...e){if(n=ie(n),Va("collection","path",t),n instanceof cr){const i=Q.fromString(t,...e);return mo(i),new zt(n,null,i)}{if(!(n instanceof Ot||n instanceof zt))throw new N(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Q.fromString(t,...e));return mo(i),new zt(n.firestore,null,i)}}function rf(n,t,...e){if(n=ie(n),arguments.length===1&&(t=Ko.newId()),Va("doc","path",t),n instanceof cr){const i=Q.fromString(t,...e);return go(i),new Ot(n,null,new x(i))}{if(!(n instanceof Ot||n instanceof zt))throw new N(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Q.fromString(t,...e));return go(i),new Ot(n.firestore,n instanceof zt?n.converter:null,new x(i))}}/**
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
 */class sf{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new Ia(this,"async_queue_retry"),this.Eu=()=>{const e=$r();e&&D("AsyncQueue","Visibility state changed to "+e.visibilityState),this.t_.jo()};const t=$r();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.du(),this.Au(t)}enterRestrictedMode(t){if(!this.cu){this.cu=!0,this.Iu=t||!1;const e=$r();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Eu)}}enqueue(t){if(this.du(),this.cu)return new Promise(()=>{});const e=new ne;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.uu.push(t),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(t){if(!er(t))throw t;D("AsyncQueue","Operation failed with retryable error: "+t)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(t){const e=this.au.then(()=>(this.Pu=!0,t().catch(i=>{this.hu=i,this.Pu=!1;const s=function(l){let u=l.message||"";return l.stack&&(u=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),u}(i);throw oe("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Pu=!1,i))));return this.au=e,e}enqueueAfterDelay(t,e,i){this.du(),this.Tu.indexOf(t)>-1&&(e=0);const s=Ti.createAndSchedule(this,t,e,i,o=>this.Vu(o));return this.lu.push(s),s}du(){this.hu&&M()}verifyOperationInProgress(){}async mu(){let t;do t=this.au,await t;while(t!==this.au)}fu(t){for(const e of this.lu)if(e.timerId===t)return!0;return!1}gu(t){return this.mu().then(()=>{this.lu.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this.lu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.mu()})}pu(t){this.Tu.push(t)}Vu(t){const e=this.lu.indexOf(t);this.lu.splice(e,1)}}class ka extends cr{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=function(){return new sf}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Na(this),this._firestoreClient.terminate()}}function of(n,t){const e=typeof n=="object"?n:Mo(),i=typeof n=="string"?n:"(default)",s=an(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=vc("firestore");o&&ef(s,...o)}return s}function af(n){return n._firestoreClient||Na(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Na(n){var t,e,i;const s=n._freezeSettings(),o=function(u,d,f,I){return new oh(u,d,f,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,Ca(I.experimentalLongPollingOptions),I.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new Qd(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class on{constructor(t){this._byteString=t}static fromBase64String(t){try{return new on(bt.fromBase64String(t))}catch(e){throw new N(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new on(bt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Oa{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class xa{constructor(t){this._methodName=t}}/**
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
 */class Ma{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return $(this._lat,t._lat)||$(this._long,t._long)}}/**
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
 */class La{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,s){if(i.length!==s.length)return!1;for(let o=0;o<i.length;++o)if(i[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const lf=/^__.*__$/;class cf{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new ue(t,this.data,this.fieldMask,e,this.fieldTransforms):new cn(t,this.data,e,this.fieldTransforms)}}function Fa(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class Ri{constructor(t,e,i,s,o,l){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=s,o===void 0&&this.yu(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(t){return new Ri(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Su({path:i,Du:!1});return s.vu(t),s}Cu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Su({path:i,Du:!1});return s.yu(),s}Fu(t){return this.Su({path:void 0,Du:!0})}Mu(t){return Yn(t,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}yu(){if(this.path)for(let t=0;t<this.path.length;t++)this.vu(this.path.get(t))}vu(t){if(t.length===0)throw this.Mu("Document fields must not be empty");if(Fa(this.wu)&&lf.test(t))throw this.Mu('Document fields cannot begin and end with "__"')}}class uf{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||sr(t)}Nu(t,e,i,s=!1){return new Ri({wu:t,methodName:e,Ou:i,path:ot.emptyPath(),Du:!1,xu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hf(n){const t=n._freezeSettings(),e=sr(n._databaseId);return new uf(n._databaseId,!!t.ignoreUndefinedProperties,e)}function df(n,t,e,i,s,o={}){const l=n.Nu(o.merge||o.mergeFields?2:0,t,e,s);ja("Data must be an object, but it was:",l,i);const u=Ua(i,l);let d,f;if(o.merge)d=new Rt(l.fieldMask),f=l.fieldTransforms;else if(o.mergeFields){const I=[];for(const A of o.mergeFields){const b=ff(t,A,e);if(!l.contains(b))throw new N(S.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);mf(I,b)||I.push(b)}d=new Rt(I),f=l.fieldTransforms.filter(A=>d.covers(A.field))}else d=null,f=l.fieldTransforms;return new cf(new At(u),d,f)}function Ba(n,t){if($a(n=ie(n)))return ja("Unsupported field value:",t,n),Ua(n,t);if(n instanceof xa)return function(i,s){if(!Fa(s.wu))throw s.Mu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Mu(`${i._methodName}() is not currently supported inside arrays`);const o=i._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Du&&t.wu!==4)throw t.Mu("Nested arrays are not supported");return function(i,s){const o=[];let l=0;for(const u of i){let d=Ba(u,s.Fu(l));d==null&&(d={nullValue:"NULL_VALUE"}),o.push(d),l++}return{arrayValue:{values:o}}}(n,t)}return function(i,s){if((i=ie(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Vh(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const o=nt.fromDate(i);return{timestampValue:ni(s.serializer,o)}}if(i instanceof nt){const o=new nt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:ni(s.serializer,o)}}if(i instanceof Ma)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof on)return{bytesValue:zh(s.serializer,i._byteString)};if(i instanceof Ot){const o=s.databaseId,l=i.firestore._databaseId;if(!l.isEqual(o))throw s.Mu(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ya(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof La)return function(l,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:l.toArray().map(d=>{if(typeof d!="number")throw u.Mu("VectorValues must only contain numeric values.");return _i(u.serializer,d)})}}}}}}(i,s);throw s.Mu(`Unsupported field value: ${wi(i)}`)}(n,t)}function Ua(n,t){const e={};return Xo(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ln(n,(i,s)=>{const o=Ba(s,t.bu(i));o!=null&&(e[i]=o)}),{mapValue:{fields:e}}}function $a(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof nt||n instanceof Ma||n instanceof on||n instanceof Ot||n instanceof xa||n instanceof La)}function ja(n,t,e){if(!$a(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const i=wi(e);throw i==="an object"?t.Mu(n+" a custom object"):t.Mu(n+" "+i)}}function ff(n,t,e){if((t=ie(t))instanceof Oa)return t._internalPath;if(typeof t=="string")return gf(n,t);throw Yn("Field path arguments must be of type string or ",n,!1,void 0,e)}const pf=new RegExp("[~\\*/\\[\\]]");function gf(n,t,e){if(t.search(pf)>=0)throw Yn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Oa(...t.split("."))._internalPath}catch{throw Yn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Yn(n,t,e,i,s){const o=i&&!i.isEmpty(),l=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let d="";return(o||l)&&(d+=" (found",o&&(d+=` in field ${i}`),l&&(d+=` in document ${s}`),d+=")"),new N(S.INVALID_ARGUMENT,u+n+d)}function mf(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */function _f(n,t,e){let i;return i=n?n.toFirestore(t):t,i}function yf(n,t){const e=Da(n.firestore,ka),i=rf(n),s=_f(n.converter,t);return vf(e,[df(hf(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,Nt.exists(!1))]).then(()=>i)}function vf(n,t){return function(i,s){const o=new ne;return i.asyncQueue.enqueueAndForget(async()=>zd(await Zd(i),s,o)),o.promise}(af(n),t)}(function(t,e=!0){(function(s){we=s})(Vu),qt(new xt("firestore",(i,{instanceIdentifier:s,options:o})=>{const l=i.getProvider("app").getImmediate(),u=new ka(new qu(i.getProvider("auth-internal")),new Wu(i.getProvider("app-check-internal")),function(f,I){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new N(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hn(f.options.projectId,I)}(l,s),l);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),St(qs,"4.7.2",t),St(qs,"4.7.2","esm2017")})();const za="@firebase/installations",Si="0.6.9";/**
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
 */const qa=1e4,Ha=`w:${Si}`,Ga="FIS_v2",Ef="https://firebaseinstallations.googleapis.com/v1",If=60*60*1e3,Tf="installations",wf="Installations";/**
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
 */const Af={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},le=new tr(Tf,wf,Af);function Ka(n){return n instanceof Wt&&n.code.includes("request-failed")}/**
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
 */function Wa({projectId:n}){return`${Ef}/projects/${n}/installations`}function Qa(n){return{token:n.token,requestStatus:2,expiresIn:Sf(n.expiresIn),creationTime:Date.now()}}async function Xa(n,t){const i=(await t.json()).error;return le.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Ya({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Rf(n,{refreshToken:t}){const e=Ya(n);return e.append("Authorization",bf(t)),e}async function Ja(n){const t=await n();return t.status>=500&&t.status<600?n():t}function Sf(n){return Number(n.replace("s","000"))}function bf(n){return`${Ga} ${n}`}/**
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
 */async function Pf({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const i=Wa(n),s=Ya(n),o=t.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const l={fid:e,authVersion:Ga,appId:n.appId,sdkVersion:Ha},u={method:"POST",headers:s,body:JSON.stringify(l)},d=await Ja(()=>fetch(i,u));if(d.ok){const f=await d.json();return{fid:f.fid||e,registrationStatus:2,refreshToken:f.refreshToken,authToken:Qa(f.authToken)}}else throw await Xa("Create Installation",d)}/**
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
 */function Za(n){return new Promise(t=>{setTimeout(t,n)})}/**
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
 */function Cf(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Vf=/^[cdef][\w-]{21}$/,si="";function Df(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=kf(n);return Vf.test(e)?e:si}catch{return si}}function kf(n){return Cf(n).substr(0,22)}/**
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
 */function ur(n){return`${n.appName}!${n.appId}`}/**
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
 */const tl=new Map;function el(n,t){const e=ur(n);nl(e,t),Nf(e,t)}function nl(n,t){const e=tl.get(n);if(e)for(const i of e)i(t)}function Nf(n,t){const e=Of();e&&e.postMessage({key:n,fid:t}),xf()}let ee=null;function Of(){return!ee&&"BroadcastChannel"in self&&(ee=new BroadcastChannel("[Firebase] FID Change"),ee.onmessage=n=>{nl(n.data.key,n.data.fid)}),ee}function xf(){tl.size===0&&ee&&(ee.close(),ee=null)}/**
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
 */const Mf="firebase-installations-database",Lf=1,ce="firebase-installations-store";let zr=null;function bi(){return zr||(zr=Oo(Mf,Lf,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(ce)}}})),zr}async function Jn(n,t){const e=ur(n),s=(await bi()).transaction(ce,"readwrite"),o=s.objectStore(ce),l=await o.get(e);return await o.put(t,e),await s.done,(!l||l.fid!==t.fid)&&el(n,t.fid),t}async function rl(n){const t=ur(n),i=(await bi()).transaction(ce,"readwrite");await i.objectStore(ce).delete(t),await i.done}async function hr(n,t){const e=ur(n),s=(await bi()).transaction(ce,"readwrite"),o=s.objectStore(ce),l=await o.get(e),u=t(l);return u===void 0?await o.delete(e):await o.put(u,e),await s.done,u&&(!l||l.fid!==u.fid)&&el(n,u.fid),u}/**
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
 */async function Pi(n){let t;const e=await hr(n.appConfig,i=>{const s=Ff(i),o=Bf(n,s);return t=o.registrationPromise,o.installationEntry});return e.fid===si?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function Ff(n){const t=n||{fid:Df(),registrationStatus:0};return il(t)}function Bf(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(le.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=Uf(n,e);return{installationEntry:e,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:$f(n)}:{installationEntry:t}}async function Uf(n,t){try{const e=await Pf(n,t);return Jn(n.appConfig,e)}catch(e){throw Ka(e)&&e.customData.serverCode===409?await rl(n.appConfig):await Jn(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function $f(n){let t=await yo(n.appConfig);for(;t.registrationStatus===1;)await Za(100),t=await yo(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:i}=await Pi(n);return i||e}return t}function yo(n){return hr(n,t=>{if(!t)throw le.create("installation-not-found");return il(t)})}function il(n){return jf(n)?{fid:n.fid,registrationStatus:0}:n}function jf(n){return n.registrationStatus===1&&n.registrationTime+qa<Date.now()}/**
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
 */async function zf({appConfig:n,heartbeatServiceProvider:t},e){const i=qf(n,e),s=Rf(n,e),o=t.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const l={installation:{sdkVersion:Ha,appId:n.appId}},u={method:"POST",headers:s,body:JSON.stringify(l)},d=await Ja(()=>fetch(i,u));if(d.ok){const f=await d.json();return Qa(f)}else throw await Xa("Generate Auth Token",d)}function qf(n,{fid:t}){return`${Wa(n)}/${t}/authTokens:generate`}/**
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
 */async function Ci(n,t=!1){let e;const i=await hr(n.appConfig,o=>{if(!sl(o))throw le.create("not-registered");const l=o.authToken;if(!t&&Kf(l))return o;if(l.requestStatus===1)return e=Hf(n,t),o;{if(!navigator.onLine)throw le.create("app-offline");const u=Qf(o);return e=Gf(n,u),u}});return e?await e:i.authToken}async function Hf(n,t){let e=await vo(n.appConfig);for(;e.authToken.requestStatus===1;)await Za(100),e=await vo(n.appConfig);const i=e.authToken;return i.requestStatus===0?Ci(n,t):i}function vo(n){return hr(n,t=>{if(!sl(t))throw le.create("not-registered");const e=t.authToken;return Xf(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Gf(n,t){try{const e=await zf(n,t),i=Object.assign(Object.assign({},t),{authToken:e});return await Jn(n.appConfig,i),e}catch(e){if(Ka(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await rl(n.appConfig);else{const i=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Jn(n.appConfig,i)}throw e}}function sl(n){return n!==void 0&&n.registrationStatus===2}function Kf(n){return n.requestStatus===2&&!Wf(n)}function Wf(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+If}function Qf(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function Xf(n){return n.requestStatus===1&&n.requestTime+qa<Date.now()}/**
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
 */async function Yf(n){const t=n,{installationEntry:e,registrationPromise:i}=await Pi(t);return i?i.catch(console.error):Ci(t).catch(console.error),e.fid}/**
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
 */async function Jf(n,t=!1){const e=n;return await Zf(e),(await Ci(e,t)).token}async function Zf(n){const{registrationPromise:t}=await Pi(n);t&&await t}/**
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
 */function tp(n){if(!n||!n.options)throw qr("App Configuration");if(!n.name)throw qr("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw qr(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function qr(n){return le.create("missing-app-config-values",{valueName:n})}/**
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
 */const ol="installations",ep="installations-internal",np=n=>{const t=n.getProvider("app").getImmediate(),e=tp(t),i=an(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},rp=n=>{const t=n.getProvider("app").getImmediate(),e=an(t,ol).getImmediate();return{getId:()=>Yf(e),getToken:s=>Jf(e,s)}};function ip(){qt(new xt(ol,np,"PUBLIC")),qt(new xt(ep,rp,"PRIVATE"))}ip();St(za,Si);St(za,Si,"esm2017");/**
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
 */const Zn="analytics",sp="firebase_id",op="origin",ap=60*1e3,lp="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Vi="https://www.googletagmanager.com/gtag/js";/**
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
 */const _t=new li("@firebase/analytics");/**
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
 */const cp={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Et=new tr("analytics","Analytics",cp);/**
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
 */function up(n){if(!n.startsWith(Vi)){const t=Et.create("invalid-gtag-resource",{gtagURL:n});return _t.warn(t.message),""}return n}function al(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function hp(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function dp(n,t){const e=hp("firebase-js-sdk-policy",{createScriptURL:up}),i=document.createElement("script"),s=`${Vi}?l=${n}&id=${t}`;i.src=e?e==null?void 0:e.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function fp(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function pp(n,t,e,i,s,o){const l=i[s];try{if(l)await t[l];else{const d=(await al(e)).find(f=>f.measurementId===s);d&&await t[d.appId]}}catch(u){_t.error(u)}n("config",s,o)}async function gp(n,t,e,i,s){try{let o=[];if(s&&s.send_to){let l=s.send_to;Array.isArray(l)||(l=[l]);const u=await al(e);for(const d of l){const f=u.find(A=>A.measurementId===d),I=f&&t[f.appId];if(I)o.push(I);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),n("event",i,s||{})}catch(o){_t.error(o)}}function mp(n,t,e,i){async function s(o,...l){try{if(o==="event"){const[u,d]=l;await gp(n,t,e,u,d)}else if(o==="config"){const[u,d]=l;await pp(n,t,e,i,u,d)}else if(o==="consent"){const[u,d]=l;n("consent",u,d)}else if(o==="get"){const[u,d,f]=l;n("get",u,d,f)}else if(o==="set"){const[u]=l;n("set",u)}else n(o,...l)}catch(u){_t.error(u)}}return s}function _p(n,t,e,i,s){let o=function(...l){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=mp(o,n,t,e),{gtagCore:o,wrappedGtag:window[s]}}function yp(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Vi)&&e.src.includes(n))return e;return null}/**
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
 */const vp=30,Ep=1e3;class Ip{constructor(t={},e=Ep){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const ll=new Ip;function Tp(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function wp(n){var t;const{appId:e,apiKey:i}=n,s={method:"GET",headers:Tp(i)},o=lp.replace("{app-id}",e),l=await fetch(o,s);if(l.status!==200&&l.status!==304){let u="";try{const d=await l.json();!((t=d.error)===null||t===void 0)&&t.message&&(u=d.error.message)}catch{}throw Et.create("config-fetch-failed",{httpStatus:l.status,responseMessage:u})}return l.json()}async function Ap(n,t=ll,e){const{appId:i,apiKey:s,measurementId:o}=n.options;if(!i)throw Et.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:i};throw Et.create("no-api-key")}const l=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new bp;return setTimeout(async()=>{u.abort()},ap),cl({appId:i,apiKey:s,measurementId:o},l,u,t)}async function cl(n,{throttleEndTimeMillis:t,backoffCount:e},i,s=ll){var o;const{appId:l,measurementId:u}=n;try{await Rp(i,t)}catch(d){if(u)return _t.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:l,measurementId:u};throw d}try{const d=await wp(n);return s.deleteThrottleMetadata(l),d}catch(d){const f=d;if(!Sp(f)){if(s.deleteThrottleMetadata(l),u)return _t.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:l,measurementId:u};throw d}const I=Number((o=f==null?void 0:f.customData)===null||o===void 0?void 0:o.httpStatus)===503?Os(e,s.intervalMillis,vp):Os(e,s.intervalMillis),A={throttleEndTimeMillis:Date.now()+I,backoffCount:e+1};return s.setThrottleMetadata(l,A),_t.debug(`Calling attemptFetch again in ${I} millis`),cl(n,A,i,s)}}function Rp(n,t){return new Promise((e,i)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(e,s);n.addEventListener(()=>{clearTimeout(o),i(Et.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Sp(n){if(!(n instanceof Wt)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class bp{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Pp(n,t,e,i,s){if(s&&s.global){n("event",e,i);return}else{const o=await t,l=Object.assign(Object.assign({},i),{send_to:o});n("event",e,l)}}/**
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
 */async function Cp(){if(Vo())try{await Do()}catch(n){return _t.warn(Et.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return _t.warn(Et.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Vp(n,t,e,i,s,o,l){var u;const d=Ap(n);d.then(C=>{e[C.measurementId]=C.appId,n.options.measurementId&&C.measurementId!==n.options.measurementId&&_t.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${C.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(C=>_t.error(C)),t.push(d);const f=Cp().then(C=>{if(C)return i.getId()}),[I,A]=await Promise.all([d,f]);yp(o)||dp(o,I.measurementId),s("js",new Date);const b=(u=l==null?void 0:l.config)!==null&&u!==void 0?u:{};return b[op]="firebase",b.update=!0,A!=null&&(b[sp]=A),s("config",I.measurementId,b),I.measurementId}/**
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
 */class Dp{constructor(t){this.app=t}_delete(){return delete Je[this.app.options.appId],Promise.resolve()}}let Je={},Eo=[];const Io={};let Hr="dataLayer",kp="gtag",To,ul,wo=!1;function Np(){const n=[];if(Ac()&&n.push("This is a browser extension environment."),Sc()||n.push("Cookies are not available."),n.length>0){const t=n.map((i,s)=>`(${s+1}) ${i}`).join(" "),e=Et.create("invalid-analytics-context",{errorInfo:t});_t.warn(e.message)}}function Op(n,t,e){Np();const i=n.options.appId;if(!i)throw Et.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)_t.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Et.create("no-api-key");if(Je[i]!=null)throw Et.create("already-exists",{id:i});if(!wo){fp(Hr);const{wrappedGtag:o,gtagCore:l}=_p(Je,Eo,Io,Hr,kp);ul=o,To=l,wo=!0}return Je[i]=Vp(n,Eo,Io,t,To,Hr,e),new Dp(n)}function xp(n=Mo()){n=ie(n);const t=an(n,Zn);return t.isInitialized()?t.getImmediate():Mp(n)}function Mp(n,t={}){const e=an(n,Zn);if(e.isInitialized()){const s=e.getImmediate();if(Un(t,e.getOptions()))return s;throw Et.create("already-initialized")}return e.initialize({options:t})}function hl(n,t,e,i){n=ie(n),Pp(ul,Je[n.app.options.appId],t,e,i).catch(s=>_t.error(s))}const Ao="@firebase/analytics",Ro="0.10.8";function Lp(){qt(new xt(Zn,(t,{options:e})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return Op(i,s,e)},"PUBLIC")),qt(new xt("analytics-internal",n,"PRIVATE")),St(Ao,Ro),St(Ao,Ro,"esm2017");function n(t){try{const e=t.getProvider(Zn).getImmediate();return{logEvent:(i,s,o)=>hl(e,i,s,o)}}catch(e){throw Et.create("interop-component-reg-failed",{reason:e})}}}Lp();const Fp="AIzaSyBXxHPvT6zKTtRCoX9Ut43KUeVIt7vRGzY",Bp="1:482898010102:web:2ca83778d58ff4c5ae71d7",Up="G-JQPK804NM2",$p={apiKey:Fp,authDomain:"swooddocs.firebaseapp.com",projectId:"swooddocs",storageBucket:"swooddocs.appspot.com",messagingSenderId:"482898010102",appId:Bp,measurementId:Up},Wp=async(n,t,e)=>{const i=xo($p),s=of(i),o=xp(i),l=nf(s,n),u={userAgent:navigator.userAgent,platform:navigator.platform,appVersion:navigator.appVersion},d={timestamp:new Date,ipAddress:"",version:t,deviceInfo:u};try{const I=await(await fetch("https://api.ipify.org?format=json")).json();d.ipAddress=I.ip}catch(f){console.error("Error getting ip: ",f),d.ipAddress="unable to obtain ipAddress"}try{await yf(l,d),hl(o,e,d)}catch(f){console.error("Error adding registration: ",f)}};export{zp as B,qp as C,Wp as R};

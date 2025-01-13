import{l as Ul,j as Bl}from"./index-D3bWQ0Ms.js";const Ep=Ul(Bl.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M17 13l-5 5-5-5h3V9h4v4z"}),"CloudDownload");var Rs={};/**
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
 */const vo=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},jl=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const s=n[e++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],l=n[e++],c=n[e++],f=((s&7)<<18|(o&63)<<12|(l&63)<<6|c&63)-65536;t[i++]=String.fromCharCode(55296+(f>>10)),t[i++]=String.fromCharCode(56320+(f&1023))}else{const o=n[e++],l=n[e++];t[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|l&63)}}return t.join("")},Eo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const o=n[s],l=s+1<n.length,c=l?n[s+1]:0,f=s+2<n.length,d=f?n[s+2]:0,I=o>>2,A=(o&3)<<4|c>>4;let S=(c&15)<<2|d>>6,C=d&63;f||(C=64,l||(S=64)),i.push(e[I],e[A],e[S],e[C])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(vo(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):jl(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const A=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||d==null||A==null)throw new $l;const S=o<<2|c>>4;if(i.push(S),d!==64){const C=c<<4&240|d>>2;if(i.push(C),A!==64){const V=d<<6&192|A;i.push(V)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class $l extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ql=function(n){const t=vo(n);return Eo.encodeByteArray(t,!0)},On=function(n){return ql(n).replace(/\./g,"")},zl=function(n){try{return Eo.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Hl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Gl=()=>Hl().__FIREBASE_DEFAULTS__,Kl=()=>{if(typeof process>"u"||typeof Rs>"u")return;const n=Rs.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ql=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&zl(n[1]);return t&&JSON.parse(t)},ei=()=>{try{return Gl()||Kl()||Ql()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Wl=n=>{var t,e;return(e=(t=ei())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Xl=n=>{const t=Wl(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},To=()=>{var n;return(n=ei())===null||n===void 0?void 0:n.config};/**
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
 */class Yl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
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
 */function Jl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[On(JSON.stringify(e)),On(JSON.stringify(l)),""].join(".")}/**
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
 */function Zl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tu(){var n;const t=(n=ei())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function eu(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function nu(){return!tu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Io(){try{return typeof indexedDB=="object"}catch{return!1}}function wo(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}function ru(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const iu="FirebaseError";class Gt extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=iu,Object.setPrototypeOf(this,Gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wn.prototype.create)}}class Wn{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],l=o?su(o,i):"Error",c=`${this.serviceName}: ${l} (${s}).`;return new Gt(s,c,i)}}function su(n,t){return n.replace(ou,(e,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const ou=/\{\$([^}]+)}/g;function Mn(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const s of e){if(!i.includes(s))return!1;const o=n[s],l=t[s];if(Ps(o)&&Ps(l)){if(!Mn(o,l))return!1}else if(o!==l)return!1}for(const s of i)if(!e.includes(s))return!1;return!0}function Ps(n){return n!==null&&typeof n=="object"}/**
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
 */const au=1e3,lu=2,uu=4*60*60*1e3,cu=.5;function Ss(n,t=au,e=lu){const i=t*Math.pow(e,n),s=Math.round(cu*i*(Math.random()-.5)*2);return Math.min(uu,i+s)}/**
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
 */function re(n){return n&&n._delegate?n._delegate:n}class Nt{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Jt="[DEFAULT]";/**
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
 */class hu{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new Yl;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(du(t))try{this.getOrInitializeService({instanceIdentifier:Jt})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(t=Jt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Jt){return this.instances.has(t)}getOptions(t=Jt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[o,l]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);i===c&&l.resolve(s)}return s}onInit(t,e){var i;const s=this.normalizeInstanceIdentifier(e),o=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;o.add(t),this.onInitCallbacks.set(s,o);const l=this.instances.get(s);return l&&t(l,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const s of i)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:fu(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Jt){return this.component?this.component.multipleInstances?t:Jt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fu(n){return n===Jt?void 0:n}function du(n){return n.instantiationMode==="EAGER"}/**
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
 */class pu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new hu(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var L;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(L||(L={}));const gu={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},mu=L.INFO,_u={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},yu=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),s=_u[t];if(s)console[s](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ni{constructor(t){this.name=t,this._logLevel=mu,this._logHandler=yu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in L))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?gu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...t),this._logHandler(this,L.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...t),this._logHandler(this,L.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,L.INFO,...t),this._logHandler(this,L.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,L.WARN,...t),this._logHandler(this,L.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...t),this._logHandler(this,L.ERROR,...t)}}const vu=(n,t)=>t.some(e=>n instanceof e);let bs,Cs;function Eu(){return bs||(bs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tu(){return Cs||(Cs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ao=new WeakMap,jr=new WeakMap,Ro=new WeakMap,Dr=new WeakMap,ri=new WeakMap;function Iu(n){const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",l)},o=()=>{e(Ut(n.result)),s()},l=()=>{i(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",l)});return t.then(e=>{e instanceof IDBCursor&&Ao.set(e,n)}).catch(()=>{}),ri.set(t,n),t}function wu(n){if(jr.has(n))return;const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",l),n.removeEventListener("abort",l)},o=()=>{e(),s()},l=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",l),n.addEventListener("abort",l)});jr.set(n,t)}let $r={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return jr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ro.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ut(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Au(n){$r=n($r)}function Ru(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(kr(this),t,...e);return Ro.set(i,t.sort?t.sort():[t]),Ut(i)}:Tu().includes(n)?function(...t){return n.apply(kr(this),t),Ut(Ao.get(this))}:function(...t){return Ut(n.apply(kr(this),t))}}function Pu(n){return typeof n=="function"?Ru(n):(n instanceof IDBTransaction&&wu(n),vu(n,Eu())?new Proxy(n,$r):n)}function Ut(n){if(n instanceof IDBRequest)return Iu(n);if(Dr.has(n))return Dr.get(n);const t=Pu(n);return t!==n&&(Dr.set(n,t),ri.set(t,n)),t}const kr=n=>ri.get(n);function Po(n,t,{blocked:e,upgrade:i,blocking:s,terminated:o}={}){const l=indexedDB.open(n,t),c=Ut(l);return i&&l.addEventListener("upgradeneeded",f=>{i(Ut(l.result),f.oldVersion,f.newVersion,Ut(l.transaction),f)}),e&&l.addEventListener("blocked",f=>e(f.oldVersion,f.newVersion,f)),c.then(f=>{o&&f.addEventListener("close",()=>o()),s&&f.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Su=["get","getKey","getAll","getAllKeys","count"],bu=["put","add","delete","clear"],Nr=new Map;function Vs(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Nr.get(t))return Nr.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,s=bu.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Su.includes(e)))return;const o=async function(l,...c){const f=this.transaction(l,s?"readwrite":"readonly");let d=f.store;return i&&(d=d.index(c.shift())),(await Promise.all([d[e](...c),s&&f.done]))[0]};return Nr.set(t,o),o}Au(n=>({...n,get:(t,e,i)=>Vs(t,e)||n.get(t,e,i),has:(t,e)=>!!Vs(t,e)||n.has(t,e)}));/**
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
 */class Cu{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Vu(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function Vu(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const qr="@firebase/app",Ds="0.10.11";/**
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
 */const Ot=new ni("@firebase/app"),Du="@firebase/app-compat",ku="@firebase/analytics-compat",Nu="@firebase/analytics",Ou="@firebase/app-check-compat",Mu="@firebase/app-check",xu="@firebase/auth",Fu="@firebase/auth-compat",Lu="@firebase/database",Uu="@firebase/database-compat",Bu="@firebase/functions",ju="@firebase/functions-compat",$u="@firebase/installations",qu="@firebase/installations-compat",zu="@firebase/messaging",Hu="@firebase/messaging-compat",Gu="@firebase/performance",Ku="@firebase/performance-compat",Qu="@firebase/remote-config",Wu="@firebase/remote-config-compat",Xu="@firebase/storage",Yu="@firebase/storage-compat",Ju="@firebase/firestore",Zu="@firebase/vertexai-preview",tc="@firebase/firestore-compat",ec="firebase",nc="10.13.2";/**
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
 */const zr="[DEFAULT]",rc={[qr]:"fire-core",[Du]:"fire-core-compat",[Nu]:"fire-analytics",[ku]:"fire-analytics-compat",[Mu]:"fire-app-check",[Ou]:"fire-app-check-compat",[xu]:"fire-auth",[Fu]:"fire-auth-compat",[Lu]:"fire-rtdb",[Uu]:"fire-rtdb-compat",[Bu]:"fire-fn",[ju]:"fire-fn-compat",[$u]:"fire-iid",[qu]:"fire-iid-compat",[zu]:"fire-fcm",[Hu]:"fire-fcm-compat",[Gu]:"fire-perf",[Ku]:"fire-perf-compat",[Qu]:"fire-rc",[Wu]:"fire-rc-compat",[Xu]:"fire-gcs",[Yu]:"fire-gcs-compat",[Ju]:"fire-fst",[tc]:"fire-fst-compat",[Zu]:"fire-vertex","fire-js":"fire-js",[ec]:"fire-js-all"};/**
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
 */const xn=new Map,ic=new Map,Hr=new Map;function ks(n,t){try{n.container.addComponent(t)}catch(e){Ot.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function $t(n){const t=n.name;if(Hr.has(t))return Ot.debug(`There were multiple attempts to register component ${t}.`),!1;Hr.set(t,n);for(const e of xn.values())ks(e,n);for(const e of ic.values())ks(e,n);return!0}function nn(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const sc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bt=new Wn("app","Firebase",sc);/**
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
 */class oc{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Bt.create("app-deleted",{appName:this._name})}}/**
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
 */const ac=nc;function So(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:zr,automaticDataCollectionEnabled:!1},t),s=i.name;if(typeof s!="string"||!s)throw Bt.create("bad-app-name",{appName:String(s)});if(e||(e=To()),!e)throw Bt.create("no-options");const o=xn.get(s);if(o){if(Mn(e,o.options)&&Mn(i,o.config))return o;throw Bt.create("duplicate-app",{appName:s})}const l=new pu(s);for(const f of Hr.values())l.addComponent(f);const c=new oc(e,i,l);return xn.set(s,c),c}function bo(n=zr){const t=xn.get(n);if(!t&&n===zr&&To())return So();if(!t)throw Bt.create("no-app",{appName:n});return t}function Rt(n,t,e){var i;let s=(i=rc[n])!==null&&i!==void 0?i:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),l=t.match(/\s|\//);if(o||l){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&c.push("and"),l&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ot.warn(c.join(" "));return}$t(new Nt(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const lc="firebase-heartbeat-database",uc=1,We="firebase-heartbeat-store";let Or=null;function Co(){return Or||(Or=Po(lc,uc,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(We)}catch(e){console.warn(e)}}}}).catch(n=>{throw Bt.create("idb-open",{originalErrorMessage:n.message})})),Or}async function cc(n){try{const e=(await Co()).transaction(We),i=await e.objectStore(We).get(Vo(n));return await e.done,i}catch(t){if(t instanceof Gt)Ot.warn(t.message);else{const e=Bt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ot.warn(e.message)}}}async function Ns(n,t){try{const i=(await Co()).transaction(We,"readwrite");await i.objectStore(We).put(t,Vo(n)),await i.done}catch(e){if(e instanceof Gt)Ot.warn(e.message);else{const i=Bt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ot.warn(i.message)}}}function Vo(n){return`${n.name}!${n.options.appId}`}/**
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
 */const hc=1024,fc=30*24*60*60*1e3;class dc{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new gc(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Os();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const c=new Date(l.date).valueOf();return Date.now()-c<=fc}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Ot.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Os(),{heartbeatsToSend:i,unsentEntries:s}=pc(this._heartbeatsCache.heartbeats),o=On(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Ot.warn(e),""}}}function Os(){return new Date().toISOString().substring(0,10)}function pc(n,t=hc){const e=[];let i=n.slice();for(const s of n){const o=e.find(l=>l.agent===s.agent);if(o){if(o.dates.push(s.date),Ms(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Ms(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class gc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Io()?wo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await cc(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ns(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ns(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ms(n){return On(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function mc(n){$t(new Nt("platform-logger",t=>new Cu(t),"PRIVATE")),$t(new Nt("heartbeat",t=>new dc(t),"PRIVATE")),Rt(qr,Ds,n),Rt(qr,Ds,"esm2017"),Rt("fire-js","")}mc("");var _c="firebase",yc="10.13.2";/**
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
 */Rt(_c,yc,"app");var xs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Do;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function m(){}m.prototype=p.prototype,v.D=p.prototype,v.prototype=new m,v.prototype.constructor=v,v.C=function(_,y,T){for(var g=Array(arguments.length-2),bt=2;bt<arguments.length;bt++)g[bt-2]=arguments[bt];return p.prototype[y].apply(_,g)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,p,m){m||(m=0);var _=Array(16);if(typeof p=="string")for(var y=0;16>y;++y)_[y]=p.charCodeAt(m++)|p.charCodeAt(m++)<<8|p.charCodeAt(m++)<<16|p.charCodeAt(m++)<<24;else for(y=0;16>y;++y)_[y]=p[m++]|p[m++]<<8|p[m++]<<16|p[m++]<<24;p=v.g[0],m=v.g[1],y=v.g[2];var T=v.g[3],g=p+(T^m&(y^T))+_[0]+3614090360&4294967295;p=m+(g<<7&4294967295|g>>>25),g=T+(y^p&(m^y))+_[1]+3905402710&4294967295,T=p+(g<<12&4294967295|g>>>20),g=y+(m^T&(p^m))+_[2]+606105819&4294967295,y=T+(g<<17&4294967295|g>>>15),g=m+(p^y&(T^p))+_[3]+3250441966&4294967295,m=y+(g<<22&4294967295|g>>>10),g=p+(T^m&(y^T))+_[4]+4118548399&4294967295,p=m+(g<<7&4294967295|g>>>25),g=T+(y^p&(m^y))+_[5]+1200080426&4294967295,T=p+(g<<12&4294967295|g>>>20),g=y+(m^T&(p^m))+_[6]+2821735955&4294967295,y=T+(g<<17&4294967295|g>>>15),g=m+(p^y&(T^p))+_[7]+4249261313&4294967295,m=y+(g<<22&4294967295|g>>>10),g=p+(T^m&(y^T))+_[8]+1770035416&4294967295,p=m+(g<<7&4294967295|g>>>25),g=T+(y^p&(m^y))+_[9]+2336552879&4294967295,T=p+(g<<12&4294967295|g>>>20),g=y+(m^T&(p^m))+_[10]+4294925233&4294967295,y=T+(g<<17&4294967295|g>>>15),g=m+(p^y&(T^p))+_[11]+2304563134&4294967295,m=y+(g<<22&4294967295|g>>>10),g=p+(T^m&(y^T))+_[12]+1804603682&4294967295,p=m+(g<<7&4294967295|g>>>25),g=T+(y^p&(m^y))+_[13]+4254626195&4294967295,T=p+(g<<12&4294967295|g>>>20),g=y+(m^T&(p^m))+_[14]+2792965006&4294967295,y=T+(g<<17&4294967295|g>>>15),g=m+(p^y&(T^p))+_[15]+1236535329&4294967295,m=y+(g<<22&4294967295|g>>>10),g=p+(y^T&(m^y))+_[1]+4129170786&4294967295,p=m+(g<<5&4294967295|g>>>27),g=T+(m^y&(p^m))+_[6]+3225465664&4294967295,T=p+(g<<9&4294967295|g>>>23),g=y+(p^m&(T^p))+_[11]+643717713&4294967295,y=T+(g<<14&4294967295|g>>>18),g=m+(T^p&(y^T))+_[0]+3921069994&4294967295,m=y+(g<<20&4294967295|g>>>12),g=p+(y^T&(m^y))+_[5]+3593408605&4294967295,p=m+(g<<5&4294967295|g>>>27),g=T+(m^y&(p^m))+_[10]+38016083&4294967295,T=p+(g<<9&4294967295|g>>>23),g=y+(p^m&(T^p))+_[15]+3634488961&4294967295,y=T+(g<<14&4294967295|g>>>18),g=m+(T^p&(y^T))+_[4]+3889429448&4294967295,m=y+(g<<20&4294967295|g>>>12),g=p+(y^T&(m^y))+_[9]+568446438&4294967295,p=m+(g<<5&4294967295|g>>>27),g=T+(m^y&(p^m))+_[14]+3275163606&4294967295,T=p+(g<<9&4294967295|g>>>23),g=y+(p^m&(T^p))+_[3]+4107603335&4294967295,y=T+(g<<14&4294967295|g>>>18),g=m+(T^p&(y^T))+_[8]+1163531501&4294967295,m=y+(g<<20&4294967295|g>>>12),g=p+(y^T&(m^y))+_[13]+2850285829&4294967295,p=m+(g<<5&4294967295|g>>>27),g=T+(m^y&(p^m))+_[2]+4243563512&4294967295,T=p+(g<<9&4294967295|g>>>23),g=y+(p^m&(T^p))+_[7]+1735328473&4294967295,y=T+(g<<14&4294967295|g>>>18),g=m+(T^p&(y^T))+_[12]+2368359562&4294967295,m=y+(g<<20&4294967295|g>>>12),g=p+(m^y^T)+_[5]+4294588738&4294967295,p=m+(g<<4&4294967295|g>>>28),g=T+(p^m^y)+_[8]+2272392833&4294967295,T=p+(g<<11&4294967295|g>>>21),g=y+(T^p^m)+_[11]+1839030562&4294967295,y=T+(g<<16&4294967295|g>>>16),g=m+(y^T^p)+_[14]+4259657740&4294967295,m=y+(g<<23&4294967295|g>>>9),g=p+(m^y^T)+_[1]+2763975236&4294967295,p=m+(g<<4&4294967295|g>>>28),g=T+(p^m^y)+_[4]+1272893353&4294967295,T=p+(g<<11&4294967295|g>>>21),g=y+(T^p^m)+_[7]+4139469664&4294967295,y=T+(g<<16&4294967295|g>>>16),g=m+(y^T^p)+_[10]+3200236656&4294967295,m=y+(g<<23&4294967295|g>>>9),g=p+(m^y^T)+_[13]+681279174&4294967295,p=m+(g<<4&4294967295|g>>>28),g=T+(p^m^y)+_[0]+3936430074&4294967295,T=p+(g<<11&4294967295|g>>>21),g=y+(T^p^m)+_[3]+3572445317&4294967295,y=T+(g<<16&4294967295|g>>>16),g=m+(y^T^p)+_[6]+76029189&4294967295,m=y+(g<<23&4294967295|g>>>9),g=p+(m^y^T)+_[9]+3654602809&4294967295,p=m+(g<<4&4294967295|g>>>28),g=T+(p^m^y)+_[12]+3873151461&4294967295,T=p+(g<<11&4294967295|g>>>21),g=y+(T^p^m)+_[15]+530742520&4294967295,y=T+(g<<16&4294967295|g>>>16),g=m+(y^T^p)+_[2]+3299628645&4294967295,m=y+(g<<23&4294967295|g>>>9),g=p+(y^(m|~T))+_[0]+4096336452&4294967295,p=m+(g<<6&4294967295|g>>>26),g=T+(m^(p|~y))+_[7]+1126891415&4294967295,T=p+(g<<10&4294967295|g>>>22),g=y+(p^(T|~m))+_[14]+2878612391&4294967295,y=T+(g<<15&4294967295|g>>>17),g=m+(T^(y|~p))+_[5]+4237533241&4294967295,m=y+(g<<21&4294967295|g>>>11),g=p+(y^(m|~T))+_[12]+1700485571&4294967295,p=m+(g<<6&4294967295|g>>>26),g=T+(m^(p|~y))+_[3]+2399980690&4294967295,T=p+(g<<10&4294967295|g>>>22),g=y+(p^(T|~m))+_[10]+4293915773&4294967295,y=T+(g<<15&4294967295|g>>>17),g=m+(T^(y|~p))+_[1]+2240044497&4294967295,m=y+(g<<21&4294967295|g>>>11),g=p+(y^(m|~T))+_[8]+1873313359&4294967295,p=m+(g<<6&4294967295|g>>>26),g=T+(m^(p|~y))+_[15]+4264355552&4294967295,T=p+(g<<10&4294967295|g>>>22),g=y+(p^(T|~m))+_[6]+2734768916&4294967295,y=T+(g<<15&4294967295|g>>>17),g=m+(T^(y|~p))+_[13]+1309151649&4294967295,m=y+(g<<21&4294967295|g>>>11),g=p+(y^(m|~T))+_[4]+4149444226&4294967295,p=m+(g<<6&4294967295|g>>>26),g=T+(m^(p|~y))+_[11]+3174756917&4294967295,T=p+(g<<10&4294967295|g>>>22),g=y+(p^(T|~m))+_[2]+718787259&4294967295,y=T+(g<<15&4294967295|g>>>17),g=m+(T^(y|~p))+_[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(y+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+y&4294967295,v.g[3]=v.g[3]+T&4294967295}i.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var m=p-this.blockSize,_=this.B,y=this.h,T=0;T<p;){if(y==0)for(;T<=m;)s(this,v,T),T+=this.blockSize;if(typeof v=="string"){for(;T<p;)if(_[y++]=v.charCodeAt(T++),y==this.blockSize){s(this,_),y=0;break}}else for(;T<p;)if(_[y++]=v[T++],y==this.blockSize){s(this,_),y=0;break}}this.h=y,this.o+=p},i.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var m=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=m&255,m/=256;for(this.u(v),v=Array(16),p=m=0;4>p;++p)for(var _=0;32>_;_+=8)v[m++]=this.g[p]>>>_&255;return v};function o(v,p){var m=c;return Object.prototype.hasOwnProperty.call(m,v)?m[v]:m[v]=p(v)}function l(v,p){this.h=p;for(var m=[],_=!0,y=v.length-1;0<=y;y--){var T=v[y]|0;_&&T==p||(m[y]=T,_=!1)}this.g=m}var c={};function f(v){return-128<=v&&128>v?o(v,function(p){return new l([p|0],0>p?-1:0)}):new l([v|0],0>v?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return A;if(0>v)return k(d(-v));for(var p=[],m=1,_=0;v>=m;_++)p[_]=v/m|0,m*=4294967296;return new l(p,0)}function I(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return k(I(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=d(Math.pow(p,8)),_=A,y=0;y<v.length;y+=8){var T=Math.min(8,v.length-y),g=parseInt(v.substring(y,y+T),p);8>T?(T=d(Math.pow(p,T)),_=_.j(T).add(d(g))):(_=_.j(m),_=_.add(d(g)))}return _}var A=f(0),S=f(1),C=f(16777216);n=l.prototype,n.m=function(){if(M(this))return-k(this).m();for(var v=0,p=1,m=0;m<this.g.length;m++){var _=this.i(m);v+=(0<=_?_:4294967296+_)*p,p*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(V(this))return"0";if(M(this))return"-"+k(this).toString(v);for(var p=d(Math.pow(v,6)),m=this,_="";;){var y=st(m,p).g;m=G(m,y.j(p));var T=((0<m.g.length?m.g[0]:m.h)>>>0).toString(v);if(m=y,V(m))return T+_;for(;6>T.length;)T="0"+T;_=T+_}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function V(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function M(v){return v.h==-1}n.l=function(v){return v=G(this,v),M(v)?-1:V(v)?0:1};function k(v){for(var p=v.g.length,m=[],_=0;_<p;_++)m[_]=~v.g[_];return new l(m,~v.h).add(S)}n.abs=function(){return M(this)?k(this):this},n.add=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],_=0,y=0;y<=p;y++){var T=_+(this.i(y)&65535)+(v.i(y)&65535),g=(T>>>16)+(this.i(y)>>>16)+(v.i(y)>>>16);_=g>>>16,T&=65535,g&=65535,m[y]=g<<16|T}return new l(m,m[m.length-1]&-2147483648?-1:0)};function G(v,p){return v.add(k(p))}n.j=function(v){if(V(this)||V(v))return A;if(M(this))return M(v)?k(this).j(k(v)):k(k(this).j(v));if(M(v))return k(this.j(k(v)));if(0>this.l(C)&&0>v.l(C))return d(this.m()*v.m());for(var p=this.g.length+v.g.length,m=[],_=0;_<2*p;_++)m[_]=0;for(_=0;_<this.g.length;_++)for(var y=0;y<v.g.length;y++){var T=this.i(_)>>>16,g=this.i(_)&65535,bt=v.i(y)>>>16,we=v.i(y)&65535;m[2*_+2*y]+=g*we,z(m,2*_+2*y),m[2*_+2*y+1]+=T*we,z(m,2*_+2*y+1),m[2*_+2*y+1]+=g*bt,z(m,2*_+2*y+1),m[2*_+2*y+2]+=T*bt,z(m,2*_+2*y+2)}for(_=0;_<p;_++)m[_]=m[2*_+1]<<16|m[2*_];for(_=p;_<2*p;_++)m[_]=0;return new l(m,0)};function z(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function W(v,p){this.g=v,this.h=p}function st(v,p){if(V(p))throw Error("division by zero");if(V(v))return new W(A,A);if(M(v))return p=st(k(v),p),new W(k(p.g),k(p.h));if(M(p))return p=st(v,k(p)),new W(k(p.g),p.h);if(30<v.g.length){if(M(v)||M(p))throw Error("slowDivide_ only works with positive integers.");for(var m=S,_=p;0>=_.l(v);)m=Kt(m),_=Kt(_);var y=mt(m,1),T=mt(_,1);for(_=mt(_,2),m=mt(m,2);!V(_);){var g=T.add(_);0>=g.l(v)&&(y=y.add(m),T=g),_=mt(_,1),m=mt(m,1)}return p=G(v,y.j(p)),new W(y,p)}for(y=A;0<=v.l(p);){for(m=Math.max(1,Math.floor(v.m()/p.m())),_=Math.ceil(Math.log(m)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),T=d(m),g=T.j(p);M(g)||0<g.l(v);)m-=_,T=d(m),g=T.j(p);V(T)&&(T=S),y=y.add(T),v=G(v,g)}return new W(y,v)}n.A=function(v){return st(this,v).h},n.and=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],_=0;_<p;_++)m[_]=this.i(_)&v.i(_);return new l(m,this.h&v.h)},n.or=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],_=0;_<p;_++)m[_]=this.i(_)|v.i(_);return new l(m,this.h|v.h)},n.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],_=0;_<p;_++)m[_]=this.i(_)^v.i(_);return new l(m,this.h^v.h)};function Kt(v){for(var p=v.g.length+1,m=[],_=0;_<p;_++)m[_]=v.i(_)<<1|v.i(_-1)>>>31;return new l(m,v.h)}function mt(v,p){var m=p>>5;p%=32;for(var _=v.g.length-m,y=[],T=0;T<_;T++)y[T]=0<p?v.i(T+m)>>>p|v.i(T+m+1)<<32-p:v.i(T+m);return new l(y,v.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=d,l.fromString=I,Do=l}).apply(typeof xs<"u"?xs:typeof self<"u"?self:typeof window<"u"?window:{});var Pn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ko,No,qe,Oo,Dn,Gr,Mo,xo,Fo;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,a,u){return r==Array.prototype||r==Object.prototype||(r[a]=u.value),r};function e(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof Pn=="object"&&Pn];for(var a=0;a<r.length;++a){var u=r[a];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var i=e(this);function s(r,a){if(a)t:{var u=i;r=r.split(".");for(var h=0;h<r.length-1;h++){var E=r[h];if(!(E in u))break t;u=u[E]}r=r[r.length-1],h=u[r],a=a(h),a!=h&&a!=null&&t(u,r,{configurable:!0,writable:!0,value:a})}}function o(r,a){r instanceof String&&(r+="");var u=0,h=!1,E={next:function(){if(!h&&u<r.length){var w=u++;return{value:a(w,r[w]),done:!1}}return h=!0,{done:!0,value:void 0}}};return E[Symbol.iterator]=function(){return E},E}s("Array.prototype.values",function(r){return r||function(){return o(this,function(a,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function f(r){var a=typeof r;return a=a!="object"?a:r?Array.isArray(r)?"array":a:"null",a=="array"||a=="object"&&typeof r.length=="number"}function d(r){var a=typeof r;return a=="object"&&r!=null||a=="function"}function I(r,a,u){return r.call.apply(r.bind,arguments)}function A(r,a,u){if(!r)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var E=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(E,h),r.apply(a,E)}}return function(){return r.apply(a,arguments)}}function S(r,a,u){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:A,S.apply(null,arguments)}function C(r,a){var u=Array.prototype.slice.call(arguments,1);return function(){var h=u.slice();return h.push.apply(h,arguments),r.apply(this,h)}}function V(r,a){function u(){}u.prototype=a.prototype,r.aa=a.prototype,r.prototype=new u,r.prototype.constructor=r,r.Qb=function(h,E,w){for(var b=Array(arguments.length-2),B=2;B<arguments.length;B++)b[B-2]=arguments[B];return a.prototype[E].apply(h,b)}}function M(r){const a=r.length;if(0<a){const u=Array(a);for(let h=0;h<a;h++)u[h]=r[h];return u}return[]}function k(r,a){for(let u=1;u<arguments.length;u++){const h=arguments[u];if(f(h)){const E=r.length||0,w=h.length||0;r.length=E+w;for(let b=0;b<w;b++)r[E+b]=h[b]}else r.push(h)}}class G{constructor(a,u){this.i=a,this.j=u,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function z(r){return/^[\s\xa0]*$/.test(r)}function W(){var r=c.navigator;return r&&(r=r.userAgent)?r:""}function st(r){return st[" "](r),r}st[" "]=function(){};var Kt=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function mt(r,a,u){for(const h in r)a.call(u,r[h],h,r)}function v(r,a){for(const u in r)a.call(void 0,r[u],u,r)}function p(r){const a={};for(const u in r)a[u]=r[u];return a}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(r,a){let u,h;for(let E=1;E<arguments.length;E++){h=arguments[E];for(u in h)r[u]=h[u];for(let w=0;w<m.length;w++)u=m[w],Object.prototype.hasOwnProperty.call(h,u)&&(r[u]=h[u])}}function y(r){var a=1;r=r.split(":");const u=[];for(;0<a&&r.length;)u.push(r.shift()),a--;return r.length&&u.push(r.join(":")),u}function T(r){c.setTimeout(()=>{throw r},0)}function g(){var r=ar;let a=null;return r.g&&(a=r.g,r.g=r.g.next,r.g||(r.h=null),a.next=null),a}class bt{constructor(){this.h=this.g=null}add(a,u){const h=we.get();h.set(a,u),this.h?this.h.next=h:this.g=h,this.h=h}}var we=new G(()=>new il,r=>r.reset());class il{constructor(){this.next=this.g=this.h=null}set(a,u){this.h=a,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let Ae,Re=!1,ar=new bt,Ri=()=>{const r=c.Promise.resolve(void 0);Ae=()=>{r.then(sl)}};var sl=()=>{for(var r;r=g();){try{r.h.call(r.g)}catch(u){T(u)}var a=we;a.j(r),100>a.h&&(a.h++,r.next=a.g,a.g=r)}Re=!1};function Mt(){this.s=this.s,this.C=this.C}Mt.prototype.s=!1,Mt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Mt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ot(r,a){this.type=r,this.g=this.target=a,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var ol=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var r=!1,a=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const u=()=>{};c.addEventListener("test",u,a),c.removeEventListener("test",u,a)}catch{}return r}();function Pe(r,a){if(ot.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var u=this.type=r.type,h=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=a,a=r.relatedTarget){if(Kt){t:{try{st(a.nodeName);var E=!0;break t}catch{}E=!1}E||(a=null)}}else u=="mouseover"?a=r.fromElement:u=="mouseout"&&(a=r.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:al[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&Pe.aa.h.call(this)}}V(Pe,ot);var al={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var ln="closure_listenable_"+(1e6*Math.random()|0),ll=0;function ul(r,a,u,h,E){this.listener=r,this.proxy=null,this.src=a,this.type=u,this.capture=!!h,this.ha=E,this.key=++ll,this.da=this.fa=!1}function un(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function cn(r){this.src=r,this.g={},this.h=0}cn.prototype.add=function(r,a,u,h,E){var w=r.toString();r=this.g[w],r||(r=this.g[w]=[],this.h++);var b=ur(r,a,h,E);return-1<b?(a=r[b],u||(a.fa=!1)):(a=new ul(a,this.src,w,!!h,E),a.fa=u,r.push(a)),a};function lr(r,a){var u=a.type;if(u in r.g){var h=r.g[u],E=Array.prototype.indexOf.call(h,a,void 0),w;(w=0<=E)&&Array.prototype.splice.call(h,E,1),w&&(un(a),r.g[u].length==0&&(delete r.g[u],r.h--))}}function ur(r,a,u,h){for(var E=0;E<r.length;++E){var w=r[E];if(!w.da&&w.listener==a&&w.capture==!!u&&w.ha==h)return E}return-1}var cr="closure_lm_"+(1e6*Math.random()|0),hr={};function Pi(r,a,u,h,E){if(Array.isArray(a)){for(var w=0;w<a.length;w++)Pi(r,a[w],u,h,E);return null}return u=Ci(u),r&&r[ln]?r.K(a,u,d(h)?!!h.capture:!!h,E):cl(r,a,u,!1,h,E)}function cl(r,a,u,h,E,w){if(!a)throw Error("Invalid event type");var b=d(E)?!!E.capture:!!E,B=dr(r);if(B||(r[cr]=B=new cn(r)),u=B.add(a,u,h,b,w),u.proxy)return u;if(h=hl(),u.proxy=h,h.src=r,h.listener=u,r.addEventListener)ol||(E=b),E===void 0&&(E=!1),r.addEventListener(a.toString(),h,E);else if(r.attachEvent)r.attachEvent(bi(a.toString()),h);else if(r.addListener&&r.removeListener)r.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return u}function hl(){function r(u){return a.call(r.src,r.listener,u)}const a=fl;return r}function Si(r,a,u,h,E){if(Array.isArray(a))for(var w=0;w<a.length;w++)Si(r,a[w],u,h,E);else h=d(h)?!!h.capture:!!h,u=Ci(u),r&&r[ln]?(r=r.i,a=String(a).toString(),a in r.g&&(w=r.g[a],u=ur(w,u,h,E),-1<u&&(un(w[u]),Array.prototype.splice.call(w,u,1),w.length==0&&(delete r.g[a],r.h--)))):r&&(r=dr(r))&&(a=r.g[a.toString()],r=-1,a&&(r=ur(a,u,h,E)),(u=-1<r?a[r]:null)&&fr(u))}function fr(r){if(typeof r!="number"&&r&&!r.da){var a=r.src;if(a&&a[ln])lr(a.i,r);else{var u=r.type,h=r.proxy;a.removeEventListener?a.removeEventListener(u,h,r.capture):a.detachEvent?a.detachEvent(bi(u),h):a.addListener&&a.removeListener&&a.removeListener(h),(u=dr(a))?(lr(u,r),u.h==0&&(u.src=null,a[cr]=null)):un(r)}}}function bi(r){return r in hr?hr[r]:hr[r]="on"+r}function fl(r,a){if(r.da)r=!0;else{a=new Pe(a,this);var u=r.listener,h=r.ha||r.src;r.fa&&fr(r),r=u.call(h,a)}return r}function dr(r){return r=r[cr],r instanceof cn?r:null}var pr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ci(r){return typeof r=="function"?r:(r[pr]||(r[pr]=function(a){return r.handleEvent(a)}),r[pr])}function at(){Mt.call(this),this.i=new cn(this),this.M=this,this.F=null}V(at,Mt),at.prototype[ln]=!0,at.prototype.removeEventListener=function(r,a,u,h){Si(this,r,a,u,h)};function pt(r,a){var u,h=r.F;if(h)for(u=[];h;h=h.F)u.push(h);if(r=r.M,h=a.type||a,typeof a=="string")a=new ot(a,r);else if(a instanceof ot)a.target=a.target||r;else{var E=a;a=new ot(h,r),_(a,E)}if(E=!0,u)for(var w=u.length-1;0<=w;w--){var b=a.g=u[w];E=hn(b,h,!0,a)&&E}if(b=a.g=r,E=hn(b,h,!0,a)&&E,E=hn(b,h,!1,a)&&E,u)for(w=0;w<u.length;w++)b=a.g=u[w],E=hn(b,h,!1,a)&&E}at.prototype.N=function(){if(at.aa.N.call(this),this.i){var r=this.i,a;for(a in r.g){for(var u=r.g[a],h=0;h<u.length;h++)un(u[h]);delete r.g[a],r.h--}}this.F=null},at.prototype.K=function(r,a,u,h){return this.i.add(String(r),a,!1,u,h)},at.prototype.L=function(r,a,u,h){return this.i.add(String(r),a,!0,u,h)};function hn(r,a,u,h){if(a=r.i.g[String(a)],!a)return!0;a=a.concat();for(var E=!0,w=0;w<a.length;++w){var b=a[w];if(b&&!b.da&&b.capture==u){var B=b.listener,et=b.ha||b.src;b.fa&&lr(r.i,b),E=B.call(et,h)!==!1&&E}}return E&&!h.defaultPrevented}function Vi(r,a,u){if(typeof r=="function")u&&(r=S(r,u));else if(r&&typeof r.handleEvent=="function")r=S(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(r,a||0)}function Di(r){r.g=Vi(()=>{r.g=null,r.i&&(r.i=!1,Di(r))},r.l);const a=r.h;r.h=null,r.m.apply(null,a)}class dl extends Mt{constructor(a,u){super(),this.m=a,this.l=u,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Di(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Se(r){Mt.call(this),this.h=r,this.g={}}V(Se,Mt);var ki=[];function Ni(r){mt(r.g,function(a,u){this.g.hasOwnProperty(u)&&fr(a)},r),r.g={}}Se.prototype.N=function(){Se.aa.N.call(this),Ni(this)},Se.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gr=c.JSON.stringify,pl=c.JSON.parse,gl=class{stringify(r){return c.JSON.stringify(r,void 0)}parse(r){return c.JSON.parse(r,void 0)}};function mr(){}mr.prototype.h=null;function Oi(r){return r.h||(r.h=r.i())}function Mi(){}var be={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function _r(){ot.call(this,"d")}V(_r,ot);function yr(){ot.call(this,"c")}V(yr,ot);var Qt={},xi=null;function fn(){return xi=xi||new at}Qt.La="serverreachability";function Fi(r){ot.call(this,Qt.La,r)}V(Fi,ot);function Ce(r){const a=fn();pt(a,new Fi(a))}Qt.STAT_EVENT="statevent";function Li(r,a){ot.call(this,Qt.STAT_EVENT,r),this.stat=a}V(Li,ot);function gt(r){const a=fn();pt(a,new Li(a,r))}Qt.Ma="timingevent";function Ui(r,a){ot.call(this,Qt.Ma,r),this.size=a}V(Ui,ot);function Ve(r,a){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){r()},a)}function De(){this.g=!0}De.prototype.xa=function(){this.g=!1};function ml(r,a,u,h,E,w){r.info(function(){if(r.g)if(w)for(var b="",B=w.split("&"),et=0;et<B.length;et++){var U=B[et].split("=");if(1<U.length){var lt=U[0];U=U[1];var ut=lt.split("_");b=2<=ut.length&&ut[1]=="type"?b+(lt+"="+U+"&"):b+(lt+"=redacted&")}}else b=null;else b=w;return"XMLHTTP REQ ("+h+") [attempt "+E+"]: "+a+`
`+u+`
`+b})}function _l(r,a,u,h,E,w,b){r.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+E+"]: "+a+`
`+u+`
`+w+" "+b})}function ce(r,a,u,h){r.info(function(){return"XMLHTTP TEXT ("+a+"): "+vl(r,u)+(h?" "+h:"")})}function yl(r,a){r.info(function(){return"TIMEOUT: "+a})}De.prototype.info=function(){};function vl(r,a){if(!r.g)return a;if(!a)return null;try{var u=JSON.parse(a);if(u){for(r=0;r<u.length;r++)if(Array.isArray(u[r])){var h=u[r];if(!(2>h.length)){var E=h[1];if(Array.isArray(E)&&!(1>E.length)){var w=E[0];if(w!="noop"&&w!="stop"&&w!="close")for(var b=1;b<E.length;b++)E[b]=""}}}}return gr(u)}catch{return a}}var dn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Bi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},vr;function pn(){}V(pn,mr),pn.prototype.g=function(){return new XMLHttpRequest},pn.prototype.i=function(){return{}},vr=new pn;function xt(r,a,u,h){this.j=r,this.i=a,this.l=u,this.R=h||1,this.U=new Se(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ji}function ji(){this.i=null,this.g="",this.h=!1}var $i={},Er={};function Tr(r,a,u){r.L=1,r.v=yn(Ct(a)),r.m=u,r.P=!0,qi(r,null)}function qi(r,a){r.F=Date.now(),gn(r),r.A=Ct(r.v);var u=r.A,h=r.R;Array.isArray(h)||(h=[String(h)]),rs(u.i,"t",h),r.C=0,u=r.j.J,r.h=new ji,r.g=Ts(r.j,u?a:null,!r.m),0<r.O&&(r.M=new dl(S(r.Y,r,r.g),r.O)),a=r.U,u=r.g,h=r.ca;var E="readystatechange";Array.isArray(E)||(E&&(ki[0]=E.toString()),E=ki);for(var w=0;w<E.length;w++){var b=Pi(u,E[w],h||a.handleEvent,!1,a.h||a);if(!b)break;a.g[b.key]=b}a=r.H?p(r.H):{},r.m?(r.u||(r.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,a)):(r.u="GET",r.g.ea(r.A,r.u,null,a)),Ce(),ml(r.i,r.u,r.A,r.l,r.R,r.m)}xt.prototype.ca=function(r){r=r.target;const a=this.M;a&&Vt(r)==3?a.j():this.Y(r)},xt.prototype.Y=function(r){try{if(r==this.g)t:{const ut=Vt(this.g);var a=this.g.Ba();const de=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||cs(this.g)))){this.J||ut!=4||a==7||(a==8||0>=de?Ce(3):Ce(2)),Ir(this);var u=this.g.Z();this.X=u;e:if(zi(this)){var h=cs(this.g);r="";var E=h.length,w=Vt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wt(this),ke(this);var b="";break e}this.h.i=new c.TextDecoder}for(a=0;a<E;a++)this.h.h=!0,r+=this.h.i.decode(h[a],{stream:!(w&&a==E-1)});h.length=0,this.h.g+=r,this.C=0,b=this.h.g}else b=this.g.oa();if(this.o=u==200,_l(this.i,this.u,this.A,this.l,this.R,ut,u),this.o){if(this.T&&!this.K){e:{if(this.g){var B,et=this.g;if((B=et.g?et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(B)){var U=B;break e}}U=null}if(u=U)ce(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wr(this,u);else{this.o=!1,this.s=3,gt(12),Wt(this),ke(this);break t}}if(this.P){u=!0;let Tt;for(;!this.J&&this.C<b.length;)if(Tt=El(this,b),Tt==Er){ut==4&&(this.s=4,gt(14),u=!1),ce(this.i,this.l,null,"[Incomplete Response]");break}else if(Tt==$i){this.s=4,gt(15),ce(this.i,this.l,b,"[Invalid Chunk]"),u=!1;break}else ce(this.i,this.l,Tt,null),wr(this,Tt);if(zi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||b.length!=0||this.h.h||(this.s=1,gt(16),u=!1),this.o=this.o&&u,!u)ce(this.i,this.l,b,"[Invalid Chunked Response]"),Wt(this),ke(this);else if(0<b.length&&!this.W){this.W=!0;var lt=this.j;lt.g==this&&lt.ba&&!lt.M&&(lt.j.info("Great, no buffering proxy detected. Bytes received: "+b.length),Cr(lt),lt.M=!0,gt(11))}}else ce(this.i,this.l,b,null),wr(this,b);ut==4&&Wt(this),this.o&&!this.J&&(ut==4?_s(this.j,this):(this.o=!1,gn(this)))}else Fl(this.g),u==400&&0<b.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),Wt(this),ke(this)}}}catch{}finally{}};function zi(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function El(r,a){var u=r.C,h=a.indexOf(`
`,u);return h==-1?Er:(u=Number(a.substring(u,h)),isNaN(u)?$i:(h+=1,h+u>a.length?Er:(a=a.slice(h,h+u),r.C=h+u,a)))}xt.prototype.cancel=function(){this.J=!0,Wt(this)};function gn(r){r.S=Date.now()+r.I,Hi(r,r.I)}function Hi(r,a){if(r.B!=null)throw Error("WatchDog timer not null");r.B=Ve(S(r.ba,r),a)}function Ir(r){r.B&&(c.clearTimeout(r.B),r.B=null)}xt.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(yl(this.i,this.A),this.L!=2&&(Ce(),gt(17)),Wt(this),this.s=2,ke(this)):Hi(this,this.S-r)};function ke(r){r.j.G==0||r.J||_s(r.j,r)}function Wt(r){Ir(r);var a=r.M;a&&typeof a.ma=="function"&&a.ma(),r.M=null,Ni(r.U),r.g&&(a=r.g,r.g=null,a.abort(),a.ma())}function wr(r,a){try{var u=r.j;if(u.G!=0&&(u.g==r||Ar(u.h,r))){if(!r.K&&Ar(u.h,r)&&u.G==3){try{var h=u.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var E=h;if(E[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<r.F)wn(u),Tn(u);else break t;br(u),gt(18)}}else u.za=E[1],0<u.za-u.T&&37500>E[2]&&u.F&&u.v==0&&!u.C&&(u.C=Ve(S(u.Za,u),6e3));if(1>=Qi(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else Yt(u,11)}else if((r.K||u.g==r)&&wn(u),!z(a))for(E=u.Da.g.parse(a),a=0;a<E.length;a++){let U=E[a];if(u.T=U[0],U=U[1],u.G==2)if(U[0]=="c"){u.K=U[1],u.ia=U[2];const lt=U[3];lt!=null&&(u.la=lt,u.j.info("VER="+u.la));const ut=U[4];ut!=null&&(u.Aa=ut,u.j.info("SVER="+u.Aa));const de=U[5];de!=null&&typeof de=="number"&&0<de&&(h=1.5*de,u.L=h,u.j.info("backChannelRequestTimeoutMs_="+h)),h=u;const Tt=r.g;if(Tt){const Rn=Tt.g?Tt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Rn){var w=h.h;w.g||Rn.indexOf("spdy")==-1&&Rn.indexOf("quic")==-1&&Rn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Rr(w,w.h),w.h=null))}if(h.D){const Vr=Tt.g?Tt.g.getResponseHeader("X-HTTP-Session-Id"):null;Vr&&(h.ya=Vr,q(h.I,h.D,Vr))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-r.F,u.j.info("Handshake RTT: "+u.R+"ms")),h=u;var b=r;if(h.qa=Es(h,h.J?h.ia:null,h.W),b.K){Wi(h.h,b);var B=b,et=h.L;et&&(B.I=et),B.B&&(Ir(B),gn(B)),h.g=b}else gs(h);0<u.i.length&&In(u)}else U[0]!="stop"&&U[0]!="close"||Yt(u,7);else u.G==3&&(U[0]=="stop"||U[0]=="close"?U[0]=="stop"?Yt(u,7):Sr(u):U[0]!="noop"&&u.l&&u.l.ta(U),u.v=0)}}Ce(4)}catch{}}var Tl=class{constructor(r,a){this.g=r,this.map=a}};function Gi(r){this.l=r||10,c.PerformanceNavigationTiming?(r=c.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ki(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function Qi(r){return r.h?1:r.g?r.g.size:0}function Ar(r,a){return r.h?r.h==a:r.g?r.g.has(a):!1}function Rr(r,a){r.g?r.g.add(a):r.h=a}function Wi(r,a){r.h&&r.h==a?r.h=null:r.g&&r.g.has(a)&&r.g.delete(a)}Gi.prototype.cancel=function(){if(this.i=Xi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function Xi(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let a=r.i;for(const u of r.g.values())a=a.concat(u.D);return a}return M(r.i)}function Il(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(f(r)){for(var a=[],u=r.length,h=0;h<u;h++)a.push(r[h]);return a}a=[],u=0;for(h in r)a[u++]=r[h];return a}function wl(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(f(r)||typeof r=="string"){var a=[];r=r.length;for(var u=0;u<r;u++)a.push(u);return a}a=[],u=0;for(const h in r)a[u++]=h;return a}}}function Yi(r,a){if(r.forEach&&typeof r.forEach=="function")r.forEach(a,void 0);else if(f(r)||typeof r=="string")Array.prototype.forEach.call(r,a,void 0);else for(var u=wl(r),h=Il(r),E=h.length,w=0;w<E;w++)a.call(void 0,h[w],u&&u[w],r)}var Ji=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Al(r,a){if(r){r=r.split("&");for(var u=0;u<r.length;u++){var h=r[u].indexOf("="),E=null;if(0<=h){var w=r[u].substring(0,h);E=r[u].substring(h+1)}else w=r[u];a(w,E?decodeURIComponent(E.replace(/\+/g," ")):"")}}}function Xt(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Xt){this.h=r.h,mn(this,r.j),this.o=r.o,this.g=r.g,_n(this,r.s),this.l=r.l;var a=r.i,u=new Me;u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),Zi(this,u),this.m=r.m}else r&&(a=String(r).match(Ji))?(this.h=!1,mn(this,a[1]||"",!0),this.o=Ne(a[2]||""),this.g=Ne(a[3]||"",!0),_n(this,a[4]),this.l=Ne(a[5]||"",!0),Zi(this,a[6]||"",!0),this.m=Ne(a[7]||"")):(this.h=!1,this.i=new Me(null,this.h))}Xt.prototype.toString=function(){var r=[],a=this.j;a&&r.push(Oe(a,ts,!0),":");var u=this.g;return(u||a=="file")&&(r.push("//"),(a=this.o)&&r.push(Oe(a,ts,!0),"@"),r.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&r.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&r.push("/"),r.push(Oe(u,u.charAt(0)=="/"?Sl:Pl,!0))),(u=this.i.toString())&&r.push("?",u),(u=this.m)&&r.push("#",Oe(u,Cl)),r.join("")};function Ct(r){return new Xt(r)}function mn(r,a,u){r.j=u?Ne(a,!0):a,r.j&&(r.j=r.j.replace(/:$/,""))}function _n(r,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);r.s=a}else r.s=null}function Zi(r,a,u){a instanceof Me?(r.i=a,Vl(r.i,r.h)):(u||(a=Oe(a,bl)),r.i=new Me(a,r.h))}function q(r,a,u){r.i.set(a,u)}function yn(r){return q(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function Ne(r,a){return r?a?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function Oe(r,a,u){return typeof r=="string"?(r=encodeURI(r).replace(a,Rl),u&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function Rl(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var ts=/[#\/\?@]/g,Pl=/[#\?:]/g,Sl=/[#\?]/g,bl=/[#\?@]/g,Cl=/#/g;function Me(r,a){this.h=this.g=null,this.i=r||null,this.j=!!a}function Ft(r){r.g||(r.g=new Map,r.h=0,r.i&&Al(r.i,function(a,u){r.add(decodeURIComponent(a.replace(/\+/g," ")),u)}))}n=Me.prototype,n.add=function(r,a){Ft(this),this.i=null,r=he(this,r);var u=this.g.get(r);return u||this.g.set(r,u=[]),u.push(a),this.h+=1,this};function es(r,a){Ft(r),a=he(r,a),r.g.has(a)&&(r.i=null,r.h-=r.g.get(a).length,r.g.delete(a))}function ns(r,a){return Ft(r),a=he(r,a),r.g.has(a)}n.forEach=function(r,a){Ft(this),this.g.forEach(function(u,h){u.forEach(function(E){r.call(a,E,h,this)},this)},this)},n.na=function(){Ft(this);const r=Array.from(this.g.values()),a=Array.from(this.g.keys()),u=[];for(let h=0;h<a.length;h++){const E=r[h];for(let w=0;w<E.length;w++)u.push(a[h])}return u},n.V=function(r){Ft(this);let a=[];if(typeof r=="string")ns(this,r)&&(a=a.concat(this.g.get(he(this,r))));else{r=Array.from(this.g.values());for(let u=0;u<r.length;u++)a=a.concat(r[u])}return a},n.set=function(r,a){return Ft(this),this.i=null,r=he(this,r),ns(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[a]),this.h+=1,this},n.get=function(r,a){return r?(r=this.V(r),0<r.length?String(r[0]):a):a};function rs(r,a,u){es(r,a),0<u.length&&(r.i=null,r.g.set(he(r,a),M(u)),r.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],a=Array.from(this.g.keys());for(var u=0;u<a.length;u++){var h=a[u];const w=encodeURIComponent(String(h)),b=this.V(h);for(h=0;h<b.length;h++){var E=w;b[h]!==""&&(E+="="+encodeURIComponent(String(b[h]))),r.push(E)}}return this.i=r.join("&")};function he(r,a){return a=String(a),r.j&&(a=a.toLowerCase()),a}function Vl(r,a){a&&!r.j&&(Ft(r),r.i=null,r.g.forEach(function(u,h){var E=h.toLowerCase();h!=E&&(es(this,h),rs(this,E,u))},r)),r.j=a}function Dl(r,a){const u=new De;if(c.Image){const h=new Image;h.onload=C(Lt,u,"TestLoadImage: loaded",!0,a,h),h.onerror=C(Lt,u,"TestLoadImage: error",!1,a,h),h.onabort=C(Lt,u,"TestLoadImage: abort",!1,a,h),h.ontimeout=C(Lt,u,"TestLoadImage: timeout",!1,a,h),c.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=r}else a(!1)}function kl(r,a){const u=new De,h=new AbortController,E=setTimeout(()=>{h.abort(),Lt(u,"TestPingServer: timeout",!1,a)},1e4);fetch(r,{signal:h.signal}).then(w=>{clearTimeout(E),w.ok?Lt(u,"TestPingServer: ok",!0,a):Lt(u,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(E),Lt(u,"TestPingServer: error",!1,a)})}function Lt(r,a,u,h,E){try{E&&(E.onload=null,E.onerror=null,E.onabort=null,E.ontimeout=null),h(u)}catch{}}function Nl(){this.g=new gl}function Ol(r,a,u){const h=u||"";try{Yi(r,function(E,w){let b=E;d(E)&&(b=gr(E)),a.push(h+w+"="+encodeURIComponent(b))})}catch(E){throw a.push(h+"type="+encodeURIComponent("_badmap")),E}}function xe(r){this.l=r.Ub||null,this.j=r.eb||!1}V(xe,mr),xe.prototype.g=function(){return new vn(this.l,this.j)},xe.prototype.i=function(r){return function(){return r}}({});function vn(r,a){at.call(this),this.D=r,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(vn,at),n=vn.prototype,n.open=function(r,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=a,this.readyState=1,Le(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(a.body=r),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fe(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,Le(this)),this.g&&(this.readyState=3,Le(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;is(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function is(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var a=r.value?r.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!r.done}))&&(this.response=this.responseText+=a)}r.done?Fe(this):Le(this),this.readyState==3&&is(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,Fe(this))},n.Qa=function(r){this.g&&(this.response=r,Fe(this))},n.ga=function(){this.g&&Fe(this)};function Fe(r){r.readyState=4,r.l=null,r.j=null,r.v=null,Le(r)}n.setRequestHeader=function(r,a){this.u.append(r,a)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],a=this.h.entries();for(var u=a.next();!u.done;)u=u.value,r.push(u[0]+": "+u[1]),u=a.next();return r.join(`\r
`)};function Le(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(vn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function ss(r){let a="";return mt(r,function(u,h){a+=h,a+=":",a+=u,a+=`\r
`}),a}function Pr(r,a,u){t:{for(h in u){var h=!1;break t}h=!0}h||(u=ss(u),typeof r=="string"?u!=null&&encodeURIComponent(String(u)):q(r,a,u))}function K(r){at.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(K,at);var Ml=/^https?$/i,xl=["POST","PUT"];n=K.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,a,u,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);a=a?a.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vr.g(),this.v=this.o?Oi(this.o):Oi(vr),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(a,String(r),!0),this.B=!1}catch(w){os(this,w);return}if(r=u||"",u=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var E in h)u.set(E,h[E]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const w of h.keys())u.set(w,h.get(w));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(u.keys()).find(w=>w.toLowerCase()=="content-type"),E=c.FormData&&r instanceof c.FormData,!(0<=Array.prototype.indexOf.call(xl,a,void 0))||h||E||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,b]of u)this.g.setRequestHeader(w,b);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{us(this),this.u=!0,this.g.send(r),this.u=!1}catch(w){os(this,w)}};function os(r,a){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=a,r.m=5,as(r),En(r)}function as(r){r.A||(r.A=!0,pt(r,"complete"),pt(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,pt(this,"complete"),pt(this,"abort"),En(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),En(this,!0)),K.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ls(this):this.bb())},n.bb=function(){ls(this)};function ls(r){if(r.h&&typeof l<"u"&&(!r.v[1]||Vt(r)!=4||r.Z()!=2)){if(r.u&&Vt(r)==4)Vi(r.Ea,0,r);else if(pt(r,"readystatechange"),Vt(r)==4){r.h=!1;try{const b=r.Z();t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var u;if(!(u=a)){var h;if(h=b===0){var E=String(r.D).match(Ji)[1]||null;!E&&c.self&&c.self.location&&(E=c.self.location.protocol.slice(0,-1)),h=!Ml.test(E?E.toLowerCase():"")}u=h}if(u)pt(r,"complete"),pt(r,"success");else{r.m=6;try{var w=2<Vt(r)?r.g.statusText:""}catch{w=""}r.l=w+" ["+r.Z()+"]",as(r)}}finally{En(r)}}}}function En(r,a){if(r.g){us(r);const u=r.g,h=r.v[0]?()=>{}:null;r.g=null,r.v=null,a||pt(r,"ready");try{u.onreadystatechange=h}catch{}}}function us(r){r.I&&(c.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function Vt(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<Vt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var a=this.g.responseText;return r&&a.indexOf(r)==0&&(a=a.substring(r.length)),pl(a)}};function cs(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function Fl(r){const a={};r=(r.g&&2<=Vt(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<r.length;h++){if(z(r[h]))continue;var u=y(r[h]);const E=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const w=a[E]||[];a[E]=w,w.push(u)}v(a,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ue(r,a,u){return u&&u.internalChannelParams&&u.internalChannelParams[r]||a}function hs(r){this.Aa=0,this.i=[],this.j=new De,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ue("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ue("baseRetryDelayMs",5e3,r),this.cb=Ue("retryDelaySeedMs",1e4,r),this.Wa=Ue("forwardChannelMaxRetries",2,r),this.wa=Ue("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new Gi(r&&r.concurrentRequestLimit),this.Da=new Nl,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=hs.prototype,n.la=8,n.G=1,n.connect=function(r,a,u,h){gt(0),this.W=r,this.H=a||{},u&&h!==void 0&&(this.H.OSID=u,this.H.OAID=h),this.F=this.X,this.I=Es(this,null,this.W),In(this)};function Sr(r){if(fs(r),r.G==3){var a=r.U++,u=Ct(r.I);if(q(u,"SID",r.K),q(u,"RID",a),q(u,"TYPE","terminate"),Be(r,u),a=new xt(r,r.j,a),a.L=2,a.v=yn(Ct(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=a.v,u=!0),u||(a.g=Ts(a.j,null),a.g.ea(a.v)),a.F=Date.now(),gn(a)}vs(r)}function Tn(r){r.g&&(Cr(r),r.g.cancel(),r.g=null)}function fs(r){Tn(r),r.u&&(c.clearTimeout(r.u),r.u=null),wn(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&c.clearTimeout(r.s),r.s=null)}function In(r){if(!Ki(r.h)&&!r.s){r.s=!0;var a=r.Ga;Ae||Ri(),Re||(Ae(),Re=!0),ar.add(a,r),r.B=0}}function Ll(r,a){return Qi(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=a.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=Ve(S(r.Ga,r,a),ys(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const E=new xt(this,this.j,r);let w=this.o;if(this.S&&(w?(w=p(w),_(w,this.S)):w=this.S),this.m!==null||this.O||(E.H=w,w=null),this.P)t:{for(var a=0,u=0;u<this.i.length;u++){e:{var h=this.i[u];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=u;break t}if(a===4096||u===this.i.length-1){a=u+1;break t}}a=1e3}else a=1e3;a=ps(this,E,a),u=Ct(this.I),q(u,"RID",r),q(u,"CVER",22),this.D&&q(u,"X-HTTP-Session-Id",this.D),Be(this,u),w&&(this.O?a="headers="+encodeURIComponent(String(ss(w)))+"&"+a:this.m&&Pr(u,this.m,w)),Rr(this.h,E),this.Ua&&q(u,"TYPE","init"),this.P?(q(u,"$req",a),q(u,"SID","null"),E.T=!0,Tr(E,u,null)):Tr(E,u,a),this.G=2}}else this.G==3&&(r?ds(this,r):this.i.length==0||Ki(this.h)||ds(this))};function ds(r,a){var u;a?u=a.l:u=r.U++;const h=Ct(r.I);q(h,"SID",r.K),q(h,"RID",u),q(h,"AID",r.T),Be(r,h),r.m&&r.o&&Pr(h,r.m,r.o),u=new xt(r,r.j,u,r.B+1),r.m===null&&(u.H=r.o),a&&(r.i=a.D.concat(r.i)),a=ps(r,u,1e3),u.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),Rr(r.h,u),Tr(u,h,a)}function Be(r,a){r.H&&mt(r.H,function(u,h){q(a,h,u)}),r.l&&Yi({},function(u,h){q(a,h,u)})}function ps(r,a,u){u=Math.min(r.i.length,u);var h=r.l?S(r.l.Na,r.l,r):null;t:{var E=r.i;let w=-1;for(;;){const b=["count="+u];w==-1?0<u?(w=E[0].g,b.push("ofs="+w)):w=0:b.push("ofs="+w);let B=!0;for(let et=0;et<u;et++){let U=E[et].g;const lt=E[et].map;if(U-=w,0>U)w=Math.max(0,E[et].g-100),B=!1;else try{Ol(lt,b,"req"+U+"_")}catch{h&&h(lt)}}if(B){h=b.join("&");break t}}}return r=r.i.splice(0,u),a.D=r,h}function gs(r){if(!r.g&&!r.u){r.Y=1;var a=r.Fa;Ae||Ri(),Re||(Ae(),Re=!0),ar.add(a,r),r.v=0}}function br(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=Ve(S(r.Fa,r),ys(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,ms(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=Ve(S(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,gt(10),Tn(this),ms(this))};function Cr(r){r.A!=null&&(c.clearTimeout(r.A),r.A=null)}function ms(r){r.g=new xt(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var a=Ct(r.qa);q(a,"RID","rpc"),q(a,"SID",r.K),q(a,"AID",r.T),q(a,"CI",r.F?"0":"1"),!r.F&&r.ja&&q(a,"TO",r.ja),q(a,"TYPE","xmlhttp"),Be(r,a),r.m&&r.o&&Pr(a,r.m,r.o),r.L&&(r.g.I=r.L);var u=r.g;r=r.ia,u.L=1,u.v=yn(Ct(a)),u.m=null,u.P=!0,qi(u,r)}n.Za=function(){this.C!=null&&(this.C=null,Tn(this),br(this),gt(19))};function wn(r){r.C!=null&&(c.clearTimeout(r.C),r.C=null)}function _s(r,a){var u=null;if(r.g==a){wn(r),Cr(r),r.g=null;var h=2}else if(Ar(r.h,a))u=a.D,Wi(r.h,a),h=1;else return;if(r.G!=0){if(a.o)if(h==1){u=a.m?a.m.length:0,a=Date.now()-a.F;var E=r.B;h=fn(),pt(h,new Ui(h,u)),In(r)}else gs(r);else if(E=a.s,E==3||E==0&&0<a.X||!(h==1&&Ll(r,a)||h==2&&br(r)))switch(u&&0<u.length&&(a=r.h,a.i=a.i.concat(u)),E){case 1:Yt(r,5);break;case 4:Yt(r,10);break;case 3:Yt(r,6);break;default:Yt(r,2)}}}function ys(r,a){let u=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(u*=2),u*a}function Yt(r,a){if(r.j.info("Error code "+a),a==2){var u=S(r.fb,r),h=r.Xa;const E=!h;h=new Xt(h||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||mn(h,"https"),yn(h),E?Dl(h.toString(),u):kl(h.toString(),u)}else gt(2);r.G=0,r.l&&r.l.sa(a),vs(r),fs(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function vs(r){if(r.G=0,r.ka=[],r.l){const a=Xi(r.h);(a.length!=0||r.i.length!=0)&&(k(r.ka,a),k(r.ka,r.i),r.h.i.length=0,M(r.i),r.i.length=0),r.l.ra()}}function Es(r,a,u){var h=u instanceof Xt?Ct(u):new Xt(u);if(h.g!="")a&&(h.g=a+"."+h.g),_n(h,h.s);else{var E=c.location;h=E.protocol,a=a?a+"."+E.hostname:E.hostname,E=+E.port;var w=new Xt(null);h&&mn(w,h),a&&(w.g=a),E&&_n(w,E),u&&(w.l=u),h=w}return u=r.D,a=r.ya,u&&a&&q(h,u,a),q(h,"VER",r.la),Be(r,h),h}function Ts(r,a,u){if(a&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=r.Ca&&!r.pa?new K(new xe({eb:u})):new K(r.pa),a.Ha(r.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Is(){}n=Is.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function An(){}An.prototype.g=function(r,a){return new vt(r,a)};function vt(r,a){at.call(this),this.g=new hs(a),this.l=r,this.h=a&&a.messageUrlParams||null,r=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(r?r["X-WebChannel-Content-Type"]=a.messageContentType:r={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(r?r["X-WebChannel-Client-Profile"]=a.va:r={"X-WebChannel-Client-Profile":a.va}),this.g.S=r,(r=a&&a.Sb)&&!z(r)&&(this.g.m=r),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!z(a)&&(this.g.D=a,r=this.h,r!==null&&a in r&&(r=this.h,a in r&&delete r[a])),this.j=new fe(this)}V(vt,at),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){Sr(this.g)},vt.prototype.o=function(r){var a=this.g;if(typeof r=="string"){var u={};u.__data__=r,r=u}else this.u&&(u={},u.__data__=gr(r),r=u);a.i.push(new Tl(a.Ya++,r)),a.G==3&&In(a)},vt.prototype.N=function(){this.g.l=null,delete this.j,Sr(this.g),delete this.g,vt.aa.N.call(this)};function ws(r){_r.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var a=r.__sm__;if(a){t:{for(const u in a){r=u;break t}r=void 0}(this.i=r)&&(r=this.i,a=a!==null&&r in a?a[r]:void 0),this.data=a}else this.data=r}V(ws,_r);function As(){yr.call(this),this.status=1}V(As,yr);function fe(r){this.g=r}V(fe,Is),fe.prototype.ua=function(){pt(this.g,"a")},fe.prototype.ta=function(r){pt(this.g,new ws(r))},fe.prototype.sa=function(r){pt(this.g,new As)},fe.prototype.ra=function(){pt(this.g,"b")},An.prototype.createWebChannel=An.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,Fo=function(){return new An},xo=function(){return fn()},Mo=Qt,Gr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},dn.NO_ERROR=0,dn.TIMEOUT=8,dn.HTTP_ERROR=6,Dn=dn,Bi.COMPLETE="complete",Oo=Bi,Mi.EventType=be,be.OPEN="a",be.CLOSE="b",be.ERROR="c",be.MESSAGE="d",at.prototype.listen=at.prototype.K,qe=Mi,No=xe,K.prototype.listenOnce=K.prototype.L,K.prototype.getLastError=K.prototype.Ka,K.prototype.getLastErrorCode=K.prototype.Ba,K.prototype.getStatus=K.prototype.Z,K.prototype.getResponseJson=K.prototype.Oa,K.prototype.getResponseText=K.prototype.oa,K.prototype.send=K.prototype.ea,K.prototype.setWithCredentials=K.prototype.Ha,ko=K}).apply(typeof Pn<"u"?Pn:typeof self<"u"?self:typeof window<"u"?window:{});const Fs="@firebase/firestore";/**
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
 */class ht{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
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
 */let Te="10.13.2";/**
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
 */const ie=new ni("@firebase/firestore");function je(){return ie.logLevel}function D(n,...t){if(ie.logLevel<=L.DEBUG){const e=t.map(ii);ie.debug(`Firestore (${Te}): ${n}`,...e)}}function se(n,...t){if(ie.logLevel<=L.ERROR){const e=t.map(ii);ie.error(`Firestore (${Te}): ${n}`,...e)}}function Fn(n,...t){if(ie.logLevel<=L.WARN){const e=t.map(ii);ie.warn(`Firestore (${Te}): ${n}`,...e)}}function ii(n){if(typeof n=="string")return n;try{/**
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
 */function x(n="Unexpected state"){const t=`FIRESTORE (${Te}) INTERNAL ASSERTION FAILED: `+n;throw se(t),new Error(t)}function Y(n,t){n||x()}function $(n,t){return n}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Gt{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ee{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Lo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class vc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ht.UNAUTHENTICATED))}shutdown(){}}class Ec{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Tc{constructor(t){this.t=t,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let i=this.i;const s=f=>this.i!==i?(i=this.i,e(f)):Promise.resolve();let o=new ee;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ee,t.enqueueRetryable(()=>s(this.currentUser))};const l=()=>{const f=o;t.enqueueRetryable(async()=>{await f.promise,await s(this.currentUser)})},c=f=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.auth.addAuthTokenListener(this.o),l()};this.t.onInit(f=>c(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?c(f):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ee)}},0),l()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Y(typeof i.accessToken=="string"),new Lo(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Y(t===null||typeof t=="string"),new ht(t)}}class Ic{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class wc{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new Ic(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ac{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Rc{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const i=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,D("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>i(o))};const s=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Y(typeof e.token=="string"),this.R=e.token,new Ac(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Pc(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
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
 */class Uo{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=Pc(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<e&&(i+=t.charAt(s[o]%t.length))}return i}}function j(n,t){return n<t?-1:n>t?1:0}function me(n,t,e){return n.length===t.length&&n.every((i,s)=>e(i,t[s]))}/**
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
 */class tt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return tt.fromMillis(Date.now())}static fromDate(t){return tt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*e));return new tt(e,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class H{constructor(t){this.timestamp=t}static fromTimestamp(t){return new H(t)}static min(){return new H(new tt(0,0))}static max(){return new H(new tt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Xe{constructor(t,e,i){e===void 0?e=0:e>t.length&&x(),i===void 0?i=t.length-e:i>t.length-e&&x(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return Xe.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Xe?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let s=0;s<i;s++){const o=t.get(s),l=e.get(s);if(o<l)return-1;if(o>l)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Q extends Xe{construct(t,e,i){return new Q(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new N(P.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(s=>s.length>0))}return new Q(e)}static emptyPath(){return new Q([])}}const Sc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends Xe{construct(t,e,i){return new it(t,e,i)}static isValidIdentifier(t){return Sc.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(t){const e=[];let i="",s=0;const o=()=>{if(i.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let l=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new N(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new N(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=f,s+=2}else c==="`"?(l=!l,s++):c!=="."||l?(i+=c,s++):(o(),s++)}if(o(),l)throw new N(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new it(e)}static emptyPath(){return new it([])}}/**
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
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(Q.fromString(t))}static fromName(t){return new O(Q.fromString(t).popFirst(5))}static empty(){return new O(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Q.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Q.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new Q(t.slice()))}}function bc(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=H.fromTimestamp(i===1e9?new tt(e+1,0):new tt(e,i));return new qt(s,O.empty(),t)}function Cc(n){return new qt(n.readTime,n.key,-1)}class qt{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new qt(H.min(),O.empty(),-1)}static max(){return new qt(H.max(),O.empty(),-1)}}function Vc(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:j(n.largestBatchId,t.largestBatchId))}/**
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
 */const Dc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Bo(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==Dc)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((i,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(i,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(i,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,i)=>{e(t)})}static reject(t){return new R((e,i)=>{i(t)})}static waitFor(t){return new R((e,i)=>{let s=0,o=0,l=!1;t.forEach(c=>{++s,c.next(()=>{++o,l&&o===s&&e()},f=>i(f))}),l=!0,o===s&&e()})}static or(t){let e=R.resolve(!1);for(const i of t)e=e.next(s=>s?R.resolve(s):i());return e}static forEach(t,e){const i=[];return t.forEach((s,o)=>{i.push(e.call(this,s,o))}),this.waitFor(i)}static mapArray(t,e){return new R((i,s)=>{const o=t.length,l=new Array(o);let c=0;for(let f=0;f<o;f++){const d=f;e(t[d]).next(I=>{l[d]=I,++c,c===o&&i(l)},I=>s(I))}})}static doWhile(t,e){return new R((i,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):i()};o()})}}function Nc(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Xn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class jo{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.ie(i),this.se=i=>e.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}jo.oe=-1;function si(n){return n==null}function Ln(n){return n===0&&1/n==-1/0}function Oc(n){return typeof n=="number"&&Number.isInteger(n)&&!Ln(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ls(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function rn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function $o(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class yt{constructor(t,e){this.comparator=t,this.root=e||nt.EMPTY}insert(t,e){return new yt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(t){return new yt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,nt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Sn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Sn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Sn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Sn(this.root,t,this.comparator,!0)}}class Sn{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?i(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class nt{constructor(t,e,i,s,o){this.key=t,this.value=e,this.color=i??nt.RED,this.left=s??nt.EMPTY,this.right=o??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,o){return new nt(t??this.key,e??this.value,i??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const o=i(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,i),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return nt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw x();const t=this.left.check();if(t!==this.right.check())throw x();return t+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(t,e,i,s,o){return this}insert(t,e,i){return new nt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class dt{constructor(t){this.comparator=t,this.data=new yt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Us(this.data.getIterator())}getIteratorFrom(t){return new Us(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof dt)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=i.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new dt(this.comparator);return e.data=t,e}}class Us{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class At{constructor(t){this.fields=t,t.sort(it.comparator)}static empty(){return new At([])}unionWith(t){let e=new dt(it.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new At(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return me(this.fields,t.fields,(e,i)=>e.isEqual(i))}}/**
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
 */class Mc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Pt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Mc("Invalid base64 string: "+o):o}}(t);return new Pt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let l=0;l<s.length;++l)o+=String.fromCharCode(s[l]);return o}(t);return new Pt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const xc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function oe(n){if(Y(!!n),typeof n=="string"){let t=0;const e=xc.exec(n);if(Y(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:rt(n.seconds),nanos:rt(n.nanos)}}function rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ye(n){return typeof n=="string"?Pt.fromBase64String(n):Pt.fromUint8Array(n)}/**
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
 */function oi(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function qo(n){const t=n.mapValue.fields.__previous_value__;return oi(t)?qo(t):t}function Un(n){const t=oe(n.mapValue.fields.__local_write_time__.timestampValue);return new tt(t.seconds,t.nanos)}/**
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
 */class Fc{constructor(t,e,i,s,o,l,c,f,d){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=c,this.longPollingOptions=f,this.useFetchStreams=d}}class Bn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Bn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Bn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const bn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function _e(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?oi(n)?4:Uc(n)?9007199254740991:Lc(n)?10:11:x()}function St(n,t){if(n===t)return!0;const e=_e(n);if(e!==_e(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Un(n).isEqual(Un(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const l=oe(s.timestampValue),c=oe(o.timestampValue);return l.seconds===c.seconds&&l.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return Ye(s.bytesValue).isEqual(Ye(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return rt(s.geoPointValue.latitude)===rt(o.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return rt(s.integerValue)===rt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const l=rt(s.doubleValue),c=rt(o.doubleValue);return l===c?Ln(l)===Ln(c):isNaN(l)&&isNaN(c)}return!1}(n,t);case 9:return me(n.arrayValue.values||[],t.arrayValue.values||[],St);case 10:case 11:return function(s,o){const l=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Ls(l)!==Ls(c))return!1;for(const f in l)if(l.hasOwnProperty(f)&&(c[f]===void 0||!St(l[f],c[f])))return!1;return!0}(n,t);default:return x()}}function Je(n,t){return(n.values||[]).find(e=>St(e,t))!==void 0}function ye(n,t){if(n===t)return 0;const e=_e(n),i=_e(t);if(e!==i)return j(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,t.booleanValue);case 2:return function(o,l){const c=rt(o.integerValue||o.doubleValue),f=rt(l.integerValue||l.doubleValue);return c<f?-1:c>f?1:c===f?0:isNaN(c)?isNaN(f)?0:-1:1}(n,t);case 3:return Bs(n.timestampValue,t.timestampValue);case 4:return Bs(Un(n),Un(t));case 5:return j(n.stringValue,t.stringValue);case 6:return function(o,l){const c=Ye(o),f=Ye(l);return c.compareTo(f)}(n.bytesValue,t.bytesValue);case 7:return function(o,l){const c=o.split("/"),f=l.split("/");for(let d=0;d<c.length&&d<f.length;d++){const I=j(c[d],f[d]);if(I!==0)return I}return j(c.length,f.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,l){const c=j(rt(o.latitude),rt(l.latitude));return c!==0?c:j(rt(o.longitude),rt(l.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return js(n.arrayValue,t.arrayValue);case 10:return function(o,l){var c,f,d,I;const A=o.fields||{},S=l.fields||{},C=(c=A.value)===null||c===void 0?void 0:c.arrayValue,V=(f=S.value)===null||f===void 0?void 0:f.arrayValue,M=j(((d=C==null?void 0:C.values)===null||d===void 0?void 0:d.length)||0,((I=V==null?void 0:V.values)===null||I===void 0?void 0:I.length)||0);return M!==0?M:js(C,V)}(n.mapValue,t.mapValue);case 11:return function(o,l){if(o===bn.mapValue&&l===bn.mapValue)return 0;if(o===bn.mapValue)return 1;if(l===bn.mapValue)return-1;const c=o.fields||{},f=Object.keys(c),d=l.fields||{},I=Object.keys(d);f.sort(),I.sort();for(let A=0;A<f.length&&A<I.length;++A){const S=j(f[A],I[A]);if(S!==0)return S;const C=ye(c[f[A]],d[I[A]]);if(C!==0)return C}return j(f.length,I.length)}(n.mapValue,t.mapValue);default:throw x()}}function Bs(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return j(n,t);const e=oe(n),i=oe(t),s=j(e.seconds,i.seconds);return s!==0?s:j(e.nanos,i.nanos)}function js(n,t){const e=n.values||[],i=t.values||[];for(let s=0;s<e.length&&s<i.length;++s){const o=ye(e[s],i[s]);if(o)return o}return j(e.length,i.length)}function ve(n){return Kr(n)}function Kr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const i=oe(e);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Ye(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return O.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let i="[",s=!0;for(const o of e.values||[])s?s=!1:i+=",",i+=Kr(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(e){const i=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const l of i)o?o=!1:s+=",",s+=`${l}:${Kr(e.fields[l])}`;return s+"}"}(n.mapValue):x()}function Qr(n){return!!n&&"integerValue"in n}function ai(n){return!!n&&"arrayValue"in n}function kn(n){return!!n&&"mapValue"in n}function Lc(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function ze(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return rn(n.mapValue.fields,(e,i)=>t.mapValue.fields[e]=ze(i)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=ze(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Uc(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!kn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ze(e)}setAll(t){let e=it.emptyPath(),i={},s=[];t.forEach((l,c)=>{if(!e.isImmediateParentOf(c)){const f=this.getFieldsMap(e);this.applyChanges(f,i,s),i={},s=[],e=c.popLast()}l?i[c.lastSegment()]=ze(l):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,i,s)}delete(t){const e=this.field(t.popLast());kn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return St(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=e.mapValue.fields[t.get(i)];kn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,i){rn(e,(s,o)=>t[s]=o);for(const s of i)delete t[s]}clone(){return new wt(ze(this.value))}}function zo(n){const t=[];return rn(n.fields,(e,i)=>{const s=new it([e]);if(kn(i)){const o=zo(i.mapValue).fields;if(o.length===0)t.push(s);else for(const l of o)t.push(s.child(l))}else t.push(s)}),new At(t)}/**
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
 */class It{constructor(t,e,i,s,o,l,c){this.key=t,this.documentType=e,this.version=i,this.readTime=s,this.createTime=o,this.data=l,this.documentState=c}static newInvalidDocument(t){return new It(t,0,H.min(),H.min(),H.min(),wt.empty(),0)}static newFoundDocument(t,e,i,s){return new It(t,1,e,H.min(),i,s,0)}static newNoDocument(t,e){return new It(t,2,e,H.min(),H.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new It(t,3,e,H.min(),H.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof It&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new It(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class jn{constructor(t,e){this.position=t,this.inclusive=e}}function $s(n,t,e){let i=0;for(let s=0;s<n.position.length;s++){const o=t[s],l=n.position[s];if(o.field.isKeyField()?i=O.comparator(O.fromName(l.referenceValue),e.key):i=ye(l,e.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function qs(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!St(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class $n{constructor(t,e="asc"){this.field=t,this.dir=e}}function Bc(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Ho{}class Z extends Ho{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new $c(t,e,i):e==="array-contains"?new Hc(t,i):e==="in"?new Gc(t,i):e==="not-in"?new Kc(t,i):e==="array-contains-any"?new Qc(t,i):new Z(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new qc(t,i):new zc(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ye(e,this.value)):e!==null&&_e(this.value)===_e(e)&&this.matchesComparison(ye(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zt extends Ho{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new zt(t,e)}matches(t){return Go(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Go(n){return n.op==="and"}function Ko(n){return jc(n)&&Go(n)}function jc(n){for(const t of n.filters)if(t instanceof zt)return!1;return!0}function Wr(n){if(n instanceof Z)return n.field.canonicalString()+n.op.toString()+ve(n.value);if(Ko(n))return n.filters.map(t=>Wr(t)).join(",");{const t=n.filters.map(e=>Wr(e)).join(",");return`${n.op}(${t})`}}function Qo(n,t){return n instanceof Z?function(i,s){return s instanceof Z&&i.op===s.op&&i.field.isEqual(s.field)&&St(i.value,s.value)}(n,t):n instanceof zt?function(i,s){return s instanceof zt&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((o,l,c)=>o&&Qo(l,s.filters[c]),!0):!1}(n,t):void x()}function Wo(n){return n instanceof Z?function(e){return`${e.field.canonicalString()} ${e.op} ${ve(e.value)}`}(n):n instanceof zt?function(e){return e.op.toString()+" {"+e.getFilters().map(Wo).join(" ,")+"}"}(n):"Filter"}class $c extends Z{constructor(t,e,i){super(t,e,i),this.key=O.fromName(i.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class qc extends Z{constructor(t,e){super(t,"in",e),this.keys=Xo("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class zc extends Z{constructor(t,e){super(t,"not-in",e),this.keys=Xo("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Xo(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>O.fromName(i.referenceValue))}class Hc extends Z{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ai(e)&&Je(e.arrayValue,this.value)}}class Gc extends Z{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Je(this.value.arrayValue,e)}}class Kc extends Z{constructor(t,e){super(t,"not-in",e)}matches(t){if(Je(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Je(this.value.arrayValue,e)}}class Qc extends Z{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ai(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>Je(this.value.arrayValue,i))}}/**
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
 */class Wc{constructor(t,e=null,i=[],s=[],o=null,l=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=s,this.limit=o,this.startAt=l,this.endAt=c,this.ue=null}}function zs(n,t=null,e=[],i=[],s=null,o=null,l=null){return new Wc(n,t,e,i,s,o,l)}function li(n){const t=$(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>Wr(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(o){return o.field.canonicalString()+o.dir}(i)).join(","),si(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>ve(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>ve(i)).join(",")),t.ue=e}return t.ue}function ui(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Bc(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Qo(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!qs(n.startAt,t.startAt)&&qs(n.endAt,t.endAt)}/**
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
 */class Yn{constructor(t,e=null,i=[],s=[],o=null,l="F",c=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=l,this.startAt=c,this.endAt=f,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Xc(n,t,e,i,s,o,l,c){return new Yn(n,t,e,i,s,o,l,c)}function Yc(n){return new Yn(n)}function Hs(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Jc(n){return n.collectionGroup!==null}function He(n){const t=$(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(l){let c=new dt(it.comparator);return l.filters.forEach(f=>{f.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new $n(o,i))}),e.has(it.keyField().canonicalString())||t.ce.push(new $n(it.keyField(),i))}return t.ce}function ne(n){const t=$(n);return t.le||(t.le=Zc(t,He(n))),t.le}function Zc(n,t){if(n.limitType==="F")return zs(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new $n(s.field,o)});const e=n.endAt?new jn(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new jn(n.startAt.position,n.startAt.inclusive):null;return zs(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function Xr(n,t,e){return new Yn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Yo(n,t){return ui(ne(n),ne(t))&&n.limitType===t.limitType}function Jo(n){return`${li(ne(n))}|lt:${n.limitType}`}function $e(n){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(s=>Wo(s)).join(", ")}]`),si(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(s=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(s)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(s=>ve(s)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(s=>ve(s)).join(",")),`Target(${i})`}(ne(n))}; limitType=${n.limitType})`}function ci(n,t){return t.isFoundDocument()&&function(i,s){const o=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):O.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o)}(n,t)&&function(i,s){for(const o of He(i))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(i,s){for(const o of i.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(i,s){return!(i.startAt&&!function(l,c,f){const d=$s(l,c,f);return l.inclusive?d<=0:d<0}(i.startAt,He(i),s)||i.endAt&&!function(l,c,f){const d=$s(l,c,f);return l.inclusive?d>=0:d>0}(i.endAt,He(i),s))}(n,t)}function th(n){return(t,e)=>{let i=!1;for(const s of He(n)){const o=eh(s,t,e);if(o!==0)return o;i=i||s.field.isKeyField()}return 0}}function eh(n,t,e){const i=n.field.isKeyField()?O.comparator(t.key,e.key):function(o,l,c){const f=l.data.field(o),d=c.data.field(o);return f!==null&&d!==null?ye(f,d):x()}(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return x()}}/**
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
 */class Ie{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[s,o]of i)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[e]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){rn(this.inner,(e,i)=>{for(const[s,o]of i)t(s,o)})}isEmpty(){return $o(this.inner)}size(){return this.innerSize}}/**
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
 */const nh=new yt(O.comparator);function qn(){return nh}const Zo=new yt(O.comparator);function Cn(...n){let t=Zo;for(const e of n)t=t.insert(e.key,e);return t}function ta(n){let t=Zo;return n.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function Zt(){return Ge()}function ea(){return Ge()}function Ge(){return new Ie(n=>n.toString(),(n,t)=>n.isEqual(t))}const rh=new yt(O.comparator),ih=new dt(O.comparator);function ft(...n){let t=ih;for(const e of n)t=t.add(e);return t}const sh=new dt(j);function oh(){return sh}/**
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
 */function hi(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ln(t)?"-0":t}}function na(n){return{integerValue:""+n}}function ah(n,t){return Oc(t)?na(t):hi(n,t)}/**
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
 */class Jn{constructor(){this._=void 0}}function lh(n,t,e){return n instanceof zn?function(s,o){const l={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&oi(o)&&(o=qo(o)),o&&(l.fields.__previous_value__=o),{mapValue:l}}(e,t):n instanceof Ze?ia(n,t):n instanceof tn?sa(n,t):function(s,o){const l=ra(s,o),c=Gs(l)+Gs(s.Pe);return Qr(l)&&Qr(s.Pe)?na(c):hi(s.serializer,c)}(n,t)}function uh(n,t,e){return n instanceof Ze?ia(n,t):n instanceof tn?sa(n,t):e}function ra(n,t){return n instanceof Hn?function(i){return Qr(i)||function(o){return!!o&&"doubleValue"in o}(i)}(t)?t:{integerValue:0}:null}class zn extends Jn{}class Ze extends Jn{constructor(t){super(),this.elements=t}}function ia(n,t){const e=oa(t);for(const i of n.elements)e.some(s=>St(s,i))||e.push(i);return{arrayValue:{values:e}}}class tn extends Jn{constructor(t){super(),this.elements=t}}function sa(n,t){let e=oa(t);for(const i of n.elements)e=e.filter(s=>!St(s,i));return{arrayValue:{values:e}}}class Hn extends Jn{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Gs(n){return rt(n.integerValue||n.doubleValue)}function oa(n){return ai(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function ch(n,t){return n.field.isEqual(t.field)&&function(i,s){return i instanceof Ze&&s instanceof Ze||i instanceof tn&&s instanceof tn?me(i.elements,s.elements,St):i instanceof Hn&&s instanceof Hn?St(i.Pe,s.Pe):i instanceof zn&&s instanceof zn}(n.transform,t.transform)}class hh{constructor(t,e){this.version=t,this.transformResults=e}}class Dt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Dt}static exists(t){return new Dt(void 0,t)}static updateTime(t){return new Dt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Nn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Zn{}function aa(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new ua(n.key,Dt.none()):new sn(n.key,n.data,Dt.none());{const e=n.data,i=wt.empty();let s=new dt(it.comparator);for(let o of t.fields)if(!s.has(o)){let l=e.field(o);l===null&&o.length>1&&(o=o.popLast(),l=e.field(o)),l===null?i.delete(o):i.set(o,l),s=s.add(o)}return new ue(n.key,i,new At(s.toArray()),Dt.none())}}function fh(n,t,e){n instanceof sn?function(s,o,l){const c=s.value.clone(),f=Qs(s.fieldTransforms,o,l.transformResults);c.setAll(f),o.convertToFoundDocument(l.version,c).setHasCommittedMutations()}(n,t,e):n instanceof ue?function(s,o,l){if(!Nn(s.precondition,o))return void o.convertToUnknownDocument(l.version);const c=Qs(s.fieldTransforms,o,l.transformResults),f=o.data;f.setAll(la(s)),f.setAll(c),o.convertToFoundDocument(l.version,f).setHasCommittedMutations()}(n,t,e):function(s,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()}(0,t,e)}function Ke(n,t,e,i){return n instanceof sn?function(o,l,c,f){if(!Nn(o.precondition,l))return c;const d=o.value.clone(),I=Ws(o.fieldTransforms,f,l);return d.setAll(I),l.convertToFoundDocument(l.version,d).setHasLocalMutations(),null}(n,t,e,i):n instanceof ue?function(o,l,c,f){if(!Nn(o.precondition,l))return c;const d=Ws(o.fieldTransforms,f,l),I=l.data;return I.setAll(la(o)),I.setAll(d),l.convertToFoundDocument(l.version,I).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(n,t,e,i):function(o,l,c){return Nn(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):c}(n,t,e)}function dh(n,t){let e=null;for(const i of n.fieldTransforms){const s=t.data.field(i.field),o=ra(i.transform,s||null);o!=null&&(e===null&&(e=wt.empty()),e.set(i.field,o))}return e||null}function Ks(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&me(i,s,(o,l)=>ch(o,l))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class sn extends Zn{constructor(t,e,i,s=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ue extends Zn{constructor(t,e,i,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function la(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}}),t}function Qs(n,t,e){const i=new Map;Y(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],l=o.transform,c=t.data.field(o.field);i.set(o.field,uh(l,c,e[s]))}return i}function Ws(n,t,e){const i=new Map;for(const s of n){const o=s.transform,l=e.data.field(s.field);i.set(s.field,lh(o,l,t))}return i}class ua extends Zn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ph extends Zn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class gh{constructor(t,e,i,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&fh(o,t,i[s])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=Ke(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=Ke(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=ea();return this.mutations.forEach(s=>{const o=t.get(s.key),l=o.overlayedDocument;let c=this.applyToLocalView(l,o.mutatedFields);c=e.has(s.key)?null:c;const f=aa(l,c);f!==null&&i.set(s.key,f),l.isValidDocument()||l.convertToNoDocument(H.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),ft())}isEqual(t){return this.batchId===t.batchId&&me(this.mutations,t.mutations,(e,i)=>Ks(e,i))&&me(this.baseMutations,t.baseMutations,(e,i)=>Ks(e,i))}}class fi{constructor(t,e,i,s){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=s}static from(t,e,i){Y(t.mutations.length===i.length);let s=function(){return rh}();const o=t.mutations;for(let l=0;l<o.length;l++)s=s.insert(o[l].key,i[l].version);return new fi(t,e,i,s)}}/**
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
 */class mh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */var X,F;function _h(n){switch(n){default:return x();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function yh(n){if(n===void 0)return se("GRPC error has no .code"),P.UNKNOWN;switch(n){case X.OK:return P.OK;case X.CANCELLED:return P.CANCELLED;case X.UNKNOWN:return P.UNKNOWN;case X.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case X.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case X.INTERNAL:return P.INTERNAL;case X.UNAVAILABLE:return P.UNAVAILABLE;case X.UNAUTHENTICATED:return P.UNAUTHENTICATED;case X.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case X.NOT_FOUND:return P.NOT_FOUND;case X.ALREADY_EXISTS:return P.ALREADY_EXISTS;case X.PERMISSION_DENIED:return P.PERMISSION_DENIED;case X.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case X.ABORTED:return P.ABORTED;case X.OUT_OF_RANGE:return P.OUT_OF_RANGE;case X.UNIMPLEMENTED:return P.UNIMPLEMENTED;case X.DATA_LOSS:return P.DATA_LOSS;default:return x()}}(F=X||(X={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Do([4294967295,4294967295],0);class vh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Yr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Eh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Th(n,t){return Yr(n,t.toTimestamp())}function ge(n){return Y(!!n),H.fromTimestamp(function(e){const i=oe(e);return new tt(i.seconds,i.nanos)}(n))}function ca(n,t){return Jr(n,t).canonicalString()}function Jr(n,t){const e=function(s){return new Q(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Ih(n){const t=Q.fromString(n);return Y(Vh(t)),t}function Zr(n,t){return ca(n.databaseId,t.path)}function wh(n){const t=Ih(n);return t.length===4?Q.emptyPath():Rh(t)}function Ah(n){return new Q(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Rh(n){return Y(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Xs(n,t,e){return{name:Zr(n,t),fields:e.value.mapValue.fields}}function Ph(n,t){let e;if(t instanceof sn)e={update:Xs(n,t.key,t.value)};else if(t instanceof ua)e={delete:Zr(n,t.key)};else if(t instanceof ue)e={update:Xs(n,t.key,t.data),updateMask:Ch(t.fieldMask)};else{if(!(t instanceof ph))return x();e={verify:Zr(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(o,l){const c=l.transform;if(c instanceof zn)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ze)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof tn)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Hn)return{fieldPath:l.field.canonicalString(),increment:c.Pe};throw x()}(0,i))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Th(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:x()}(n,t.precondition)),e}function Sh(n,t){return n&&n.length>0?(Y(t!==void 0),n.map(e=>function(s,o){let l=s.updateTime?ge(s.updateTime):ge(o);return l.isEqual(H.min())&&(l=ge(o)),new hh(l,s.transformResults||[])}(e,t))):[]}function bh(n){let t=wh(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){Y(i===1);const I=e.from[0];I.allDescendants?s=I.collectionId:t=t.child(I.collectionId)}let o=[];e.where&&(o=function(A){const S=ha(A);return S instanceof zt&&Ko(S)?S.getFilters():[S]}(e.where));let l=[];e.orderBy&&(l=function(A){return A.map(S=>function(V){return new $n(pe(V.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(S))}(e.orderBy));let c=null;e.limit&&(c=function(A){let S;return S=typeof A=="object"?A.value:A,si(S)?null:S}(e.limit));let f=null;e.startAt&&(f=function(A){const S=!!A.before,C=A.values||[];return new jn(C,S)}(e.startAt));let d=null;return e.endAt&&(d=function(A){const S=!A.before,C=A.values||[];return new jn(C,S)}(e.endAt)),Xc(t,s,l,o,c,"F",f,d)}function ha(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=pe(e.unaryFilter.field);return Z.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=pe(e.unaryFilter.field);return Z.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=pe(e.unaryFilter.field);return Z.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=pe(e.unaryFilter.field);return Z.create(l,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(n):n.fieldFilter!==void 0?function(e){return Z.create(pe(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return zt.create(e.compositeFilter.filters.map(i=>ha(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return x()}}(e.compositeFilter.op))}(n):x()}function pe(n){return it.fromServerFormat(n.fieldPath)}function Ch(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Vh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Dh{constructor(t){this.ct=t}}function kh(n){const t=bh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Xr(t,t.limit,"L"):t}/**
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
 */class Nh{constructor(){this.un=new Oh}addToCollectionParentIndex(t,e){return this.un.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(qt.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(qt.min())}updateCollectionGroup(t,e,i){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class Oh{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e]||new dt(Q.comparator),o=!s.has(i);return this.index[e]=s.add(i),o}has(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e];return s&&s.has(i)}getEntries(t){return(this.index[t]||new dt(Q.comparator)).toArray()}}/**
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
 */class Ee{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ee(0)}static kn(){return new Ee(-1)}}/**
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
 */class Mh{constructor(){this.changes=new Ie(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,It.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?R.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class xh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Fh{constructor(t,e,i,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(i!==null&&Ke(i.mutation,s,At.empty(),tt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,ft()).next(()=>i))}getLocalViewOfDocuments(t,e,i=ft()){const s=Zt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,i).next(o=>{let l=Cn();return o.forEach((c,f)=>{l=l.insert(c,f.overlayedDocument)}),l}))}getOverlayedDocuments(t,e){const i=Zt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,ft()))}populateOverlays(t,e,i){const s=[];return i.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((l,c)=>{e.set(l,c)})})}computeViews(t,e,i,s){let o=qn();const l=Ge(),c=function(){return Ge()}();return e.forEach((f,d)=>{const I=i.get(d.key);s.has(d.key)&&(I===void 0||I.mutation instanceof ue)?o=o.insert(d.key,d):I!==void 0?(l.set(d.key,I.mutation.getFieldMask()),Ke(I.mutation,d,I.mutation.getFieldMask(),tt.now())):l.set(d.key,At.empty())}),this.recalculateAndSaveOverlays(t,o).next(f=>(f.forEach((d,I)=>l.set(d,I)),e.forEach((d,I)=>{var A;return c.set(d,new xh(I,(A=l.get(d))!==null&&A!==void 0?A:null))}),c))}recalculateAndSaveOverlays(t,e){const i=Ge();let s=new yt((l,c)=>l-c),o=ft();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(l=>{for(const c of l)c.keys().forEach(f=>{const d=e.get(f);if(d===null)return;let I=i.get(f)||At.empty();I=c.applyToLocalView(d,I),i.set(f,I);const A=(s.get(c.batchId)||ft()).add(f);s=s.insert(c.batchId,A)})}).next(()=>{const l=[],c=s.getReverseIterator();for(;c.hasNext();){const f=c.getNext(),d=f.key,I=f.value,A=ea();I.forEach(S=>{if(!o.has(S)){const C=aa(e.get(S),i.get(S));C!==null&&A.set(S,C),o=o.add(S)}}),l.push(this.documentOverlayCache.saveOverlays(t,d,A))}return R.waitFor(l)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,s){return function(l){return O.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Jc(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,s):this.getDocumentsMatchingCollectionQuery(t,e,i,s)}getNextDocuments(t,e,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,s).next(o=>{const l=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,s-o.size):R.resolve(Zt());let c=-1,f=o;return l.next(d=>R.forEach(d,(I,A)=>(c<A.largestBatchId&&(c=A.largestBatchId),o.get(I)?R.resolve():this.remoteDocumentCache.getEntry(t,I).next(S=>{f=f.insert(I,S)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,f,d,ft())).next(I=>({batchId:c,changes:ta(I)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(i=>{let s=Cn();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,i,s){const o=e.collectionGroup;let l=Cn();return this.indexManager.getCollectionParents(t,o).next(c=>R.forEach(c,f=>{const d=function(A,S){return new Yn(S,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,f.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,i,s).next(I=>{I.forEach((A,S)=>{l=l.insert(A,S)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(t,e,i,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,o,s))).next(l=>{o.forEach((f,d)=>{const I=d.getKey();l.get(I)===null&&(l=l.insert(I,It.newInvalidDocument(I)))});let c=Cn();return l.forEach((f,d)=>{const I=o.get(f);I!==void 0&&Ke(I.mutation,d,At.empty(),tt.now()),ci(e,d)&&(c=c.insert(f,d))}),c})}}/**
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
 */class Lh{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return R.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:ge(s.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:kh(s.bundledQuery),readTime:ge(s.readTime)}}(e)),R.resolve()}}/**
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
 */class Uh{constructor(){this.overlays=new yt(O.comparator),this.Ir=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const i=Zt();return R.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&i.set(s,o)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((s,o)=>{this.ht(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,i){const s=this.Ir.get(i);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(i)),R.resolve()}getOverlaysForCollection(t,e,i){const s=Zt(),o=e.length+1,l=new O(e.child("")),c=this.overlays.getIteratorFrom(l);for(;c.hasNext();){const f=c.getNext().value,d=f.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&f.largestBatchId>i&&s.set(f.getKey(),f)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,i,s){let o=new yt((d,I)=>d-I);const l=this.overlays.getIterator();for(;l.hasNext();){const d=l.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>i){let I=o.get(d.largestBatchId);I===null&&(I=Zt(),o=o.insert(d.largestBatchId,I)),I.set(d.getKey(),d)}}const c=Zt(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((d,I)=>c.set(d,I)),!(c.size()>=s)););return R.resolve(c)}ht(t,e,i){const s=this.overlays.get(i.key);if(s!==null){const l=this.Ir.get(s.largestBatchId).delete(i.key);this.Ir.set(s.largestBatchId,l)}this.overlays=this.overlays.insert(i.key,new mh(e,i));let o=this.Ir.get(e);o===void 0&&(o=ft(),this.Ir.set(e,o)),this.Ir.set(e,o.add(i.key))}}/**
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
 */class Bh{constructor(){this.sessionToken=Pt.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
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
 */class di{constructor(){this.Tr=new dt(J.Er),this.dr=new dt(J.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const i=new J(t,e);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.Vr(new J(t,e))}mr(t,e){t.forEach(i=>this.removeReference(i,e))}gr(t){const e=new O(new Q([])),i=new J(e,t),s=new J(e,t+1),o=[];return this.dr.forEachInRange([i,s],l=>{this.Vr(l),o.push(l.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new O(new Q([])),i=new J(e,t),s=new J(e,t+1);let o=ft();return this.dr.forEachInRange([i,s],l=>{o=o.add(l.key)}),o}containsKey(t){const e=new J(t,0),i=this.Tr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class J{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return O.comparator(t.key,e.key)||j(t.wr,e.wr)}static Ar(t,e){return j(t.wr,e.wr)||O.comparator(t.key,e.key)}}/**
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
 */class jh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new dt(J.Er)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new gh(o,e,i,s);this.mutationQueue.push(l);for(const c of s)this.br=this.br.add(new J(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return R.resolve(l)}lookupMutationBatch(t,e){return R.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,s=this.vr(i),o=s<0?0:s;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new J(e,0),s=new J(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([i,s],l=>{const c=this.Dr(l.wr);o.push(c)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new dt(j);return e.forEach(s=>{const o=new J(s,0),l=new J(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,l],c=>{i=i.add(c.wr)})}),R.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,s=i.length+1;let o=i;O.isDocumentKey(o)||(o=o.child(""));const l=new J(new O(o),0);let c=new dt(j);return this.br.forEachWhile(f=>{const d=f.key.path;return!!i.isPrefixOf(d)&&(d.length===s&&(c=c.add(f.wr)),!0)},l),R.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach(i=>{const s=this.Dr(i);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){Y(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return R.forEach(e.mutations,s=>{const o=new J(s.key,e.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=i})}On(t){}containsKey(t,e){const i=new J(e,0),s=this.br.firstAfterOrEqual(i);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class $h{constructor(t){this.Mr=t,this.docs=function(){return new yt(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,s=this.docs.get(i),o=s?s.size:0,l=this.Mr(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return R.resolve(i?i.document.mutableCopy():It.newInvalidDocument(e))}getEntries(t,e){let i=qn();return e.forEach(s=>{const o=this.docs.get(s);i=i.insert(s,o?o.document.mutableCopy():It.newInvalidDocument(s))}),R.resolve(i)}getDocumentsMatchingQuery(t,e,i,s){let o=qn();const l=e.path,c=new O(l.child("")),f=this.docs.getIteratorFrom(c);for(;f.hasNext();){const{key:d,value:{document:I}}=f.getNext();if(!l.isPrefixOf(d.path))break;d.path.length>l.length+1||Vc(Cc(I),i)<=0||(s.has(I.key)||ci(e,I))&&(o=o.insert(I.key,I.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,i,s){x()}Or(t,e){return R.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new qh(this)}getSize(t){return R.resolve(this.size)}}class qh extends Mh{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(i)}),R.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class zh{constructor(t){this.persistence=t,this.Nr=new Ie(e=>li(e),ui),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Lr=0,this.Br=new di,this.targetCount=0,this.kr=Ee.Bn()}forEachTarget(t,e){return this.Nr.forEach((i,s)=>e(s)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.Lr&&(this.Lr=e),R.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Ee(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.Kn(e),R.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,i){let s=0;const o=[];return this.Nr.forEach((l,c)=>{c.sequenceNumber<=e&&i.get(c.targetId)===null&&(this.Nr.delete(l),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),R.waitFor(o).next(()=>s)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const i=this.Nr.get(e)||null;return R.resolve(i)}addMatchingKeys(t,e,i){return this.Br.Rr(e,i),R.resolve()}removeMatchingKeys(t,e,i){this.Br.mr(e,i);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(l=>{o.push(s.markPotentiallyOrphaned(t,l))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const i=this.Br.yr(e);return R.resolve(i)}containsKey(t,e){return R.resolve(this.Br.containsKey(e))}}/**
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
 */class Hh{constructor(t,e){this.qr={},this.overlays={},this.Qr=new jo(0),this.Kr=!1,this.Kr=!0,this.$r=new Bh,this.referenceDelegate=t(this),this.Ur=new zh(this),this.indexManager=new Nh,this.remoteDocumentCache=function(s){return new $h(s)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new Dh(e),this.Gr=new Lh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Uh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.qr[t.toKey()];return i||(i=new jh(e,this.referenceDelegate),this.qr[t.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,i){D("MemoryPersistence","Starting transaction:",t);const s=new Gh(this.Qr.next());return this.referenceDelegate.zr(),i(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return R.or(Object.values(this.qr).map(i=>()=>i.containsKey(t,e)))}}class Gh extends kc{constructor(t){super(),this.currentSequenceNumber=t}}class pi{constructor(t){this.persistence=t,this.Jr=new di,this.Yr=null}static Zr(t){return new pi(t)}get Xr(){if(this.Yr)return this.Yr;throw x()}addReference(t,e,i){return this.Jr.addReference(i,e),this.Xr.delete(i.toString()),R.resolve()}removeReference(t,e,i){return this.Jr.removeReference(i,e),this.Xr.add(i.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),R.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>i.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Xr,i=>{const s=O.fromPath(i);return this.ei(t,s).next(o=>{o||e.removeEntry(s,H.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(i=>{i?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return R.or([()=>R.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
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
 */class gi{constructor(t,e,i,s){this.targetId=t,this.fromCache=e,this.$i=i,this.Ui=s}static Wi(t,e){let i=ft(),s=ft();for(const o of e.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new gi(t,e.fromCache,i,s)}}/**
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
 */class Kh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Qh{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return nu()?8:Nc(Zl())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,i,s){const o={result:null};return this.Yi(t,e).next(l=>{o.result=l}).next(()=>{if(!o.result)return this.Zi(t,e,s,i).next(l=>{o.result=l})}).next(()=>{if(o.result)return;const l=new Kh;return this.Xi(t,e,l).next(c=>{if(o.result=c,this.zi)return this.es(t,e,l,c.size)})}).next(()=>o.result)}es(t,e,i,s){return i.documentReadCount<this.ji?(je()<=L.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",$e(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),R.resolve()):(je()<=L.DEBUG&&D("QueryEngine","Query:",$e(e),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Hi*s?(je()<=L.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",$e(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ne(e))):R.resolve())}Yi(t,e){if(Hs(e))return R.resolve(null);let i=ne(e);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Xr(e,null,"F"),i=ne(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(o=>{const l=ft(...o);return this.Ji.getDocuments(t,l).next(c=>this.indexManager.getMinOffset(t,i).next(f=>{const d=this.ts(e,c);return this.ns(e,d,l,f.readTime)?this.Yi(t,Xr(e,null,"F")):this.rs(t,d,e,f)}))})))}Zi(t,e,i,s){return Hs(e)||s.isEqual(H.min())?R.resolve(null):this.Ji.getDocuments(t,i).next(o=>{const l=this.ts(e,o);return this.ns(e,l,i,s)?R.resolve(null):(je()<=L.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),$e(e)),this.rs(t,l,e,bc(s,-1)).next(c=>c))})}ts(t,e){let i=new dt(th(t));return e.forEach((s,o)=>{ci(t,o)&&(i=i.add(o))}),i}ns(t,e,i,s){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,i){return je()<=L.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",$e(e)),this.Ji.getDocumentsMatchingQuery(t,e,qt.min(),i)}rs(t,e,i,s){return this.Ji.getDocumentsMatchingQuery(t,i,s).next(o=>(e.forEach(l=>{o=o.insert(l.key,l)}),o))}}/**
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
 */class Wh{constructor(t,e,i,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new yt(j),this._s=new Ie(o=>li(o),ui),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(i)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Fh(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function Xh(n,t,e,i){return new Wh(n,t,e,i)}async function fa(n,t){const e=$(n);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(i))).next(o=>{const l=[],c=[];let f=ft();for(const d of s){l.push(d.batchId);for(const I of d.mutations)f=f.add(I.key)}for(const d of o){c.push(d.batchId);for(const I of d.mutations)f=f.add(I.key)}return e.localDocuments.getDocuments(i,f).next(d=>({hs:d,removedBatchIds:l,addedBatchIds:c}))})})}function Yh(n,t){const e=$(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(c,f,d,I){const A=d.batch,S=A.keys();let C=R.resolve();return S.forEach(V=>{C=C.next(()=>I.getEntry(f,V)).next(M=>{const k=d.docVersions.get(V);Y(k!==null),M.version.compareTo(k)<0&&(A.applyToRemoteDocument(M,d),M.isValidDocument()&&(M.setReadTime(d.commitVersion),I.addEntry(M)))})}),C.next(()=>c.mutationQueue.removeMutationBatch(f,A))}(e,i,t,o).next(()=>o.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(c){let f=ft();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(f=f.add(c.batch.mutations[d].key));return f}(t))).next(()=>e.localDocuments.getDocuments(i,s))})}function Jh(n){const t=$(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Zh(n,t){const e=$(n);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}class Ys{constructor(){this.activeTargetIds=oh()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class tf{constructor(){this.so=new Ys,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,i){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Ys,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class ef{_o(t){}shutdown(){}}/**
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
 */class Js{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Vn=null;function Mr(){return Vn===null?Vn=function(){return 268435456+Math.round(2147483648*Math.random())}():Vn++,"0x"+Vn.toString(16)}/**
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
 */const nf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class rf{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
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
 */const ct="WebChannelConnection";class sf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,i,s,o,l){const c=Mr(),f=this.xo(e,i.toUriEncodedString());D("RestConnection",`Sending RPC '${e}' ${c}:`,f,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,l),this.No(e,f,d,s).then(I=>(D("RestConnection",`Received RPC '${e}' ${c}: `,I),I),I=>{throw Fn("RestConnection",`RPC '${e}' ${c} failed with error: `,I,"url: ",f,"request:",s),I})}Lo(e,i,s,o,l,c){return this.Mo(e,i,s,o,l)}Oo(e,i,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Te}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((o,l)=>e[l]=o),s&&s.headers.forEach((o,l)=>e[l]=o)}xo(e,i){const s=nf[e];return`${this.Do}/v1/${i}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,i,s){const o=Mr();return new Promise((l,c)=>{const f=new ko;f.setWithCredentials(!0),f.listenOnce(Oo.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Dn.NO_ERROR:const I=f.getResponseJson();D(ct,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(I)),l(I);break;case Dn.TIMEOUT:D(ct,`RPC '${t}' ${o} timed out`),c(new N(P.DEADLINE_EXCEEDED,"Request time out"));break;case Dn.HTTP_ERROR:const A=f.getStatus();if(D(ct,`RPC '${t}' ${o} failed with status:`,A,"response text:",f.getResponseText()),A>0){let S=f.getResponseJson();Array.isArray(S)&&(S=S[0]);const C=S==null?void 0:S.error;if(C&&C.status&&C.message){const V=function(k){const G=k.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(G)>=0?G:P.UNKNOWN}(C.status);c(new N(V,C.message))}else c(new N(P.UNKNOWN,"Server responded with status "+f.getStatus()))}else c(new N(P.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{D(ct,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(s);D(ct,`RPC '${t}' ${o} sending request:`,s),f.send(e,"POST",d,i,15)})}Bo(t,e,i){const s=Mr(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],l=Fo(),c=xo(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(f.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(f.xmlHttpFactory=new No({})),this.Oo(f.initMessageHeaders,e,i),f.encodeInitMessageHeaders=!0;const I=o.join("");D(ct,`Creating RPC '${t}' stream ${s}: ${I}`,f);const A=l.createWebChannel(I,f);let S=!1,C=!1;const V=new rf({Io:k=>{C?D(ct,`Not sending because RPC '${t}' stream ${s} is closed:`,k):(S||(D(ct,`Opening RPC '${t}' stream ${s} transport.`),A.open(),S=!0),D(ct,`RPC '${t}' stream ${s} sending:`,k),A.send(k))},To:()=>A.close()}),M=(k,G,z)=>{k.listen(G,W=>{try{z(W)}catch(st){setTimeout(()=>{throw st},0)}})};return M(A,qe.EventType.OPEN,()=>{C||(D(ct,`RPC '${t}' stream ${s} transport opened.`),V.yo())}),M(A,qe.EventType.CLOSE,()=>{C||(C=!0,D(ct,`RPC '${t}' stream ${s} transport closed`),V.So())}),M(A,qe.EventType.ERROR,k=>{C||(C=!0,Fn(ct,`RPC '${t}' stream ${s} transport errored:`,k),V.So(new N(P.UNAVAILABLE,"The operation could not be completed")))}),M(A,qe.EventType.MESSAGE,k=>{var G;if(!C){const z=k.data[0];Y(!!z);const W=z,st=W.error||((G=W[0])===null||G===void 0?void 0:G.error);if(st){D(ct,`RPC '${t}' stream ${s} received error:`,st);const Kt=st.status;let mt=function(m){const _=X[m];if(_!==void 0)return yh(_)}(Kt),v=st.message;mt===void 0&&(mt=P.INTERNAL,v="Unknown error status: "+Kt+" with message "+st.message),C=!0,V.So(new N(mt,v)),A.close()}else D(ct,`RPC '${t}' stream ${s} received:`,z),V.bo(z)}}),M(c,Mo.STAT_EVENT,k=>{k.stat===Gr.PROXY?D(ct,`RPC '${t}' stream ${s} detected buffering proxy`):k.stat===Gr.NOPROXY&&D(ct,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.wo()},0),V}}function xr(){return typeof document<"u"?document:null}/**
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
 */function tr(n){return new vh(n,!0)}/**
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
 */class da{constructor(t,e,i=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=i,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-i);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class of{constructor(t,e,i,s,o,l,c,f){this.ui=t,this.Ho=i,this.Jo=s,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=c,this.listener=f,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new da(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(se(e.toString()),se("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Yo===e&&this.P_(i,s)},i=>{t(()=>{const s=new N(P.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(s)})})}P_(t,e){const i=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{i(()=>this.I_(s))}),this.stream.onMessage(s=>{i(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return D("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class af extends of{constructor(t,e,i,s,o,l){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,s,l),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return Y(!!t.streamToken),this.lastStreamToken=t.streamToken,Y(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){Y(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Sh(t.writeResults,t.commitTime),i=ge(t.commitTime);return this.listener.g_(i,e)}p_(){const t={};t.database=Ah(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>Ph(this.serializer,i))};this.a_(e)}}/**
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
 */class lf extends class{}{constructor(t,e,i,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Mo(t,Jr(e,i),s,o,l)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(P.UNKNOWN,o.toString())})}Lo(t,e,i,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Lo(t,Jr(e,i),s,l,c,o)).catch(l=>{throw l.name==="FirebaseError"?(l.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new N(P.UNKNOWN,l.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class uf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(se(e),this.D_=!1):D("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class cf{constructor(t,e,i,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(l=>{i.enqueueAndForget(async()=>{an(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(f){const d=$(f);d.L_.add(4),await on(d),d.q_.set("Unknown"),d.L_.delete(4),await er(d)}(this))})}),this.q_=new uf(i,s)}}async function er(n){if(an(n))for(const t of n.B_)await t(!0)}async function on(n){for(const t of n.B_)await t(!1)}function an(n){return $(n).L_.size===0}async function pa(n,t,e){if(!Xn(t))throw t;n.L_.add(1),await on(n),n.q_.set("Offline"),e||(e=()=>Jh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await er(n)})}function ga(n,t){return t().catch(e=>pa(n,e,t))}async function nr(n){const t=$(n),e=Ht(t);let i=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;hf(t);)try{const s=await Zh(t.localStore,i);if(s===null){t.O_.length===0&&e.o_();break}i=s.batchId,ff(t,s)}catch(s){await pa(t,s)}ma(t)&&_a(t)}function hf(n){return an(n)&&n.O_.length<10}function ff(n,t){n.O_.push(t);const e=Ht(n);e.r_()&&e.V_&&e.m_(t.mutations)}function ma(n){return an(n)&&!Ht(n).n_()&&n.O_.length>0}function _a(n){Ht(n).start()}async function df(n){Ht(n).p_()}async function pf(n){const t=Ht(n);for(const e of n.O_)t.m_(e.mutations)}async function gf(n,t,e){const i=n.O_.shift(),s=fi.from(i,t,e);await ga(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await nr(n)}async function mf(n,t){t&&Ht(n).V_&&await async function(i,s){if(function(l){return _h(l)&&l!==P.ABORTED}(s.code)){const o=i.O_.shift();Ht(i).s_(),await ga(i,()=>i.remoteSyncer.rejectFailedWrite(o.batchId,s)),await nr(i)}}(n,t),ma(n)&&_a(n)}async function Zs(n,t){const e=$(n);e.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const i=an(e);e.L_.add(3),await on(e),i&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await er(e)}async function _f(n,t){const e=$(n);t?(e.L_.delete(2),await er(e)):t||(e.L_.add(2),await on(e),e.q_.set("Unknown"))}function Ht(n){return n.U_||(n.U_=function(e,i,s){const o=$(e);return o.w_(),new af(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:df.bind(null,n),mo:mf.bind(null,n),f_:pf.bind(null,n),g_:gf.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await nr(n)):(await n.U_.stop(),n.O_.length>0&&(D("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class mi{constructor(t,e,i,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new ee,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,s,o){const l=Date.now()+i,c=new mi(t,e,l,s,o);return c.start(i),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ya(n,t){if(se("AsyncQueue",`${t}: ${n}`),Xn(n))return new N(P.UNAVAILABLE,`${t}: ${n}`);throw n}class yf{constructor(){this.queries=to(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,i){const s=$(e),o=s.queries;s.queries=to(),o.forEach((l,c)=>{for(const f of c.j_)f.onError(i)})})(this,new N(P.ABORTED,"Firestore shutting down"))}}function to(){return new Ie(n=>Jo(n),Yo)}function vf(n){n.Y_.forEach(t=>{t.next()})}var eo,no;(no=eo||(eo={})).ea="default",no.Cache="cache";class Ef{constructor(t,e,i,s,o,l){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.Ca={},this.Fa=new Ie(c=>Jo(c),Yo),this.Ma=new Map,this.xa=new Set,this.Oa=new yt(O.comparator),this.Na=new Map,this.La=new di,this.Ba={},this.ka=new Map,this.qa=Ee.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Tf(n,t,e){const i=Rf(n);try{const s=await function(l,c){const f=$(l),d=tt.now(),I=c.reduce((C,V)=>C.add(V.key),ft());let A,S;return f.persistence.runTransaction("Locally write mutations","readwrite",C=>{let V=qn(),M=ft();return f.cs.getEntries(C,I).next(k=>{V=k,V.forEach((G,z)=>{z.isValidDocument()||(M=M.add(G))})}).next(()=>f.localDocuments.getOverlayedDocuments(C,V)).next(k=>{A=k;const G=[];for(const z of c){const W=dh(z,A.get(z.key).overlayedDocument);W!=null&&G.push(new ue(z.key,W,zo(W.value.mapValue),Dt.exists(!0)))}return f.mutationQueue.addMutationBatch(C,d,G,c)}).next(k=>{S=k;const G=k.applyToLocalDocumentSet(A,M);return f.documentOverlayCache.saveOverlays(C,k.batchId,G)})}).then(()=>({batchId:S.batchId,changes:ta(A)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(l,c,f){let d=l.Ba[l.currentUser.toKey()];d||(d=new yt(j)),d=d.insert(c,f),l.Ba[l.currentUser.toKey()]=d}(i,s.batchId,e),await rr(i,s.changes),await nr(i.remoteStore)}catch(s){const o=ya(s,"Failed to persist write");e.reject(o)}}function ro(n,t,e){const i=$(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const s=[];i.Fa.forEach((o,l)=>{const c=l.view.Z_(t);c.snapshot&&s.push(c.snapshot)}),function(l,c){const f=$(l);f.onlineState=c;let d=!1;f.queries.forEach((I,A)=>{for(const S of A.j_)S.Z_(c)&&(d=!0)}),d&&vf(f)}(i.eventManager,t),s.length&&i.Ca.d_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function If(n,t){const e=$(n),i=t.batch.batchId;try{const s=await Yh(e.localStore,t);Ea(e,i,null),va(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await rr(e,s)}catch(s){await Bo(s)}}async function wf(n,t,e){const i=$(n);try{const s=await function(l,c){const f=$(l);return f.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let I;return f.mutationQueue.lookupMutationBatch(d,c).next(A=>(Y(A!==null),I=A.keys(),f.mutationQueue.removeMutationBatch(d,A))).next(()=>f.mutationQueue.performConsistencyCheck(d)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(d,I,c)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,I)).next(()=>f.localDocuments.getDocuments(d,I))})}(i.localStore,t);Ea(i,t,e),va(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await rr(i,s)}catch(s){await Bo(s)}}function va(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function Ea(n,t,e){const i=$(n);let s=i.Ba[i.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),i.Ba[i.currentUser.toKey()]=s}}async function rr(n,t,e){const i=$(n),s=[],o=[],l=[];i.Fa.isEmpty()||(i.Fa.forEach((c,f)=>{l.push(i.Ka(f,t,e).then(d=>{var I;if((d||e)&&i.isPrimaryClient){const A=d?!d.fromCache:(I=void 0)===null||I===void 0?void 0:I.current;i.sharedClientState.updateQueryState(f.targetId,A?"current":"not-current")}if(d){s.push(d);const A=gi.Wi(f.targetId,d);o.push(A)}}))}),await Promise.all(l),i.Ca.d_(s),await async function(f,d){const I=$(f);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>R.forEach(d,S=>R.forEach(S.$i,C=>I.persistence.referenceDelegate.addReference(A,S.targetId,C)).next(()=>R.forEach(S.Ui,C=>I.persistence.referenceDelegate.removeReference(A,S.targetId,C)))))}catch(A){if(!Xn(A))throw A;D("LocalStore","Failed to update sequence numbers: "+A)}for(const A of d){const S=A.targetId;if(!A.fromCache){const C=I.os.get(S),V=C.snapshotVersion,M=C.withLastLimboFreeSnapshotVersion(V);I.os=I.os.insert(S,M)}}}(i.localStore,o))}async function Af(n,t){const e=$(n);if(!e.currentUser.isEqual(t)){D("SyncEngine","User change. New user:",t.toKey());const i=await fa(e.localStore,t);e.currentUser=t,function(o,l){o.ka.forEach(c=>{c.forEach(f=>{f.reject(new N(P.CANCELLED,l))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await rr(e,i.hs)}}function Rf(n){const t=$(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=If.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=wf.bind(null,t),t}class io{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=tr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Xh(this.persistence,new Qh,t.initialUser,this.serializer)}createPersistence(t){return new Hh(pi.Zr,this.serializer)}createSharedClientState(t){return new tf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Pf{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>ro(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Af.bind(null,this.syncEngine),await _f(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new yf}()}createDatastore(t){const e=tr(t.databaseInfo.databaseId),i=function(o){return new sf(o)}(t.databaseInfo);return function(o,l,c,f){return new lf(o,l,c,f)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,s,o,l,c){return new cf(i,s,o,l,c)}(this.localStore,this.datastore,t.asyncQueue,e=>ro(this.syncEngine,e,0),function(){return Js.D()?new Js:new ef}())}createSyncEngine(t,e){return function(s,o,l,c,f,d,I){const A=new Ef(s,o,l,c,f,d);return I&&(A.Qa=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=$(s);D("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await on(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}/**
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
 */class Sf{constructor(t,e,i,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=ht.UNAUTHENTICATED,this.clientId=Uo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async o=>{D("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(i,o=>(D("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ee;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=ya(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Fr(n,t){n.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await fa(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function so(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Cf(n);D("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(i=>Zs(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Zs(t.remoteStore,s)),n._onlineComponents=t}function bf(n){return n.name==="FirebaseError"?n.code===P.FAILED_PRECONDITION||n.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Cf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await Fr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!bf(e))throw e;Fn("Error using user provided cache. Falling back to memory cache: "+e),await Fr(n,new io)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await Fr(n,new io);return n._offlineComponents}async function Vf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await so(n,n._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await so(n,new Pf))),n._onlineComponents}function Df(n){return Vf(n).then(t=>t.syncEngine)}/**
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
 */function Ta(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const oo=new Map;/**
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
 */function Ia(n,t,e){if(!e)throw new N(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function kf(n,t,e,i){if(t===!0&&i===!0)throw new N(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function ao(n){if(!O.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function lo(n){if(O.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function _i(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":x()}function wa(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=_i(n);throw new N(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class uo{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new N(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}kf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ta((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ir{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new N(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uo(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new vc;switch(i.type){case"firstParty":return new wc(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new N(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=oo.get(e);i&&(D("ComponentProvider","Removing Datastore"),oo.delete(e),i.terminate())}(this),Promise.resolve()}}function Nf(n,t,e,i={}){var s;const o=(n=wa(n,ir))._getSettings(),l=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==l&&Fn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:l,ssl:!1})),i.mockUserToken){let c,f;if(typeof i.mockUserToken=="string")c=i.mockUserToken,f=ht.MOCK_USER;else{c=Jl(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=i.mockUserToken.sub||i.mockUserToken.user_id;if(!d)throw new N(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new ht(d)}n._authCredentials=new Ec(new Lo(c,f))}}/**
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
 */class yi{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new yi(this.firestore,t,this._query)}}class kt{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new kt(this.firestore,t,this._key)}}class jt extends yi{constructor(t,e,i){super(t,e,Yc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new kt(this.firestore,null,new O(t))}withConverter(t){return new jt(this.firestore,t,this._path)}}function Of(n,t,...e){if(n=re(n),Ia("collection","path",t),n instanceof ir){const i=Q.fromString(t,...e);return lo(i),new jt(n,null,i)}{if(!(n instanceof kt||n instanceof jt))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Q.fromString(t,...e));return lo(i),new jt(n.firestore,null,i)}}function Mf(n,t,...e){if(n=re(n),arguments.length===1&&(t=Uo.newId()),Ia("doc","path",t),n instanceof ir){const i=Q.fromString(t,...e);return ao(i),new kt(n,null,new O(i))}{if(!(n instanceof kt||n instanceof jt))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Q.fromString(t,...e));return ao(i),new kt(n.firestore,n instanceof jt?n.converter:null,new O(i))}}/**
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
 */class xf{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new da(this,"async_queue_retry"),this.Eu=()=>{const e=xr();e&&D("AsyncQueue","Visibility state changed to "+e.visibilityState),this.t_.jo()};const t=xr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.du(),this.Au(t)}enterRestrictedMode(t){if(!this.cu){this.cu=!0,this.Iu=t||!1;const e=xr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Eu)}}enqueue(t){if(this.du(),this.cu)return new Promise(()=>{});const e=new ee;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.uu.push(t),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(t){if(!Xn(t))throw t;D("AsyncQueue","Operation failed with retryable error: "+t)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(t){const e=this.au.then(()=>(this.Pu=!0,t().catch(i=>{this.hu=i,this.Pu=!1;const s=function(l){let c=l.message||"";return l.stack&&(c=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),c}(i);throw se("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Pu=!1,i))));return this.au=e,e}enqueueAfterDelay(t,e,i){this.du(),this.Tu.indexOf(t)>-1&&(e=0);const s=mi.createAndSchedule(this,t,e,i,o=>this.Vu(o));return this.lu.push(s),s}du(){this.hu&&x()}verifyOperationInProgress(){}async mu(){let t;do t=this.au,await t;while(t!==this.au)}fu(t){for(const e of this.lu)if(e.timerId===t)return!0;return!1}gu(t){return this.mu().then(()=>{this.lu.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this.lu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.mu()})}pu(t){this.Tu.push(t)}Vu(t){const e=this.lu.indexOf(t);this.lu.splice(e,1)}}class Aa extends ir{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=function(){return new xf}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ra(this),this._firestoreClient.terminate()}}function Ff(n,t){const e=typeof n=="object"?n:bo(),i=typeof n=="string"?n:"(default)",s=nn(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=Xl("firestore");o&&Nf(s,...o)}return s}function Lf(n){return n._firestoreClient||Ra(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Ra(n){var t,e,i;const s=n._freezeSettings(),o=function(c,f,d,I){return new Fc(c,f,d,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,Ta(I.experimentalLongPollingOptions),I.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new Sf(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class en{constructor(t){this._byteString=t}static fromBase64String(t){try{return new en(Pt.fromBase64String(t))}catch(e){throw new N(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new en(Pt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Pa{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Sa{constructor(t){this._methodName=t}}/**
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
 */class ba{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}}/**
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
 */class Ca{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,s){if(i.length!==s.length)return!1;for(let o=0;o<i.length;++o)if(i[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const Uf=/^__.*__$/;class Bf{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new ue(t,this.data,this.fieldMask,e,this.fieldTransforms):new sn(t,this.data,e,this.fieldTransforms)}}function Va(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class vi{constructor(t,e,i,s,o,l){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=s,o===void 0&&this.yu(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(t){return new vi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Su({path:i,Du:!1});return s.vu(t),s}Cu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Su({path:i,Du:!1});return s.yu(),s}Fu(t){return this.Su({path:void 0,Du:!0})}Mu(t){return Gn(t,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}yu(){if(this.path)for(let t=0;t<this.path.length;t++)this.vu(this.path.get(t))}vu(t){if(t.length===0)throw this.Mu("Document fields must not be empty");if(Va(this.wu)&&Uf.test(t))throw this.Mu('Document fields cannot begin and end with "__"')}}class jf{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||tr(t)}Nu(t,e,i,s=!1){return new vi({wu:t,methodName:e,Ou:i,path:it.emptyPath(),Du:!1,xu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $f(n){const t=n._freezeSettings(),e=tr(n._databaseId);return new jf(n._databaseId,!!t.ignoreUndefinedProperties,e)}function qf(n,t,e,i,s,o={}){const l=n.Nu(o.merge||o.mergeFields?2:0,t,e,s);Oa("Data must be an object, but it was:",l,i);const c=ka(i,l);let f,d;if(o.merge)f=new At(l.fieldMask),d=l.fieldTransforms;else if(o.mergeFields){const I=[];for(const A of o.mergeFields){const S=zf(t,A,e);if(!l.contains(S))throw new N(P.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);Kf(I,S)||I.push(S)}f=new At(I),d=l.fieldTransforms.filter(A=>f.covers(A.field))}else f=null,d=l.fieldTransforms;return new Bf(new wt(c),f,d)}function Da(n,t){if(Na(n=re(n)))return Oa("Unsupported field value:",t,n),ka(n,t);if(n instanceof Sa)return function(i,s){if(!Va(s.wu))throw s.Mu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Mu(`${i._methodName}() is not currently supported inside arrays`);const o=i._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Du&&t.wu!==4)throw t.Mu("Nested arrays are not supported");return function(i,s){const o=[];let l=0;for(const c of i){let f=Da(c,s.Fu(l));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),l++}return{arrayValue:{values:o}}}(n,t)}return function(i,s){if((i=re(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return ah(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const o=tt.fromDate(i);return{timestampValue:Yr(s.serializer,o)}}if(i instanceof tt){const o=new tt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Yr(s.serializer,o)}}if(i instanceof ba)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof en)return{bytesValue:Eh(s.serializer,i._byteString)};if(i instanceof kt){const o=s.databaseId,l=i.firestore._databaseId;if(!l.isEqual(o))throw s.Mu(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ca(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof Ca)return function(l,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:l.toArray().map(f=>{if(typeof f!="number")throw c.Mu("VectorValues must only contain numeric values.");return hi(c.serializer,f)})}}}}}}(i,s);throw s.Mu(`Unsupported field value: ${_i(i)}`)}(n,t)}function ka(n,t){const e={};return $o(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):rn(n,(i,s)=>{const o=Da(s,t.bu(i));o!=null&&(e[i]=o)}),{mapValue:{fields:e}}}function Na(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof tt||n instanceof ba||n instanceof en||n instanceof kt||n instanceof Sa||n instanceof Ca)}function Oa(n,t,e){if(!Na(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const i=_i(e);throw i==="an object"?t.Mu(n+" a custom object"):t.Mu(n+" "+i)}}function zf(n,t,e){if((t=re(t))instanceof Pa)return t._internalPath;if(typeof t=="string")return Gf(n,t);throw Gn("Field path arguments must be of type string or ",n,!1,void 0,e)}const Hf=new RegExp("[~\\*/\\[\\]]");function Gf(n,t,e){if(t.search(Hf)>=0)throw Gn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Pa(...t.split("."))._internalPath}catch{throw Gn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Gn(n,t,e,i,s){const o=i&&!i.isEmpty(),l=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let f="";return(o||l)&&(f+=" (found",o&&(f+=` in field ${i}`),l&&(f+=` in document ${s}`),f+=")"),new N(P.INVALID_ARGUMENT,c+n+f)}function Kf(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */function Qf(n,t,e){let i;return i=n?n.toFirestore(t):t,i}function Wf(n,t){const e=wa(n.firestore,Aa),i=Mf(n),s=Qf(n.converter,t);return Xf(e,[qf($f(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,Dt.exists(!1))]).then(()=>i)}function Xf(n,t){return function(i,s){const o=new ee;return i.asyncQueue.enqueueAndForget(async()=>Tf(await Df(i),s,o)),o.promise}(Lf(n),t)}(function(t,e=!0){(function(s){Te=s})(ac),$t(new Nt("firestore",(i,{instanceIdentifier:s,options:o})=>{const l=i.getProvider("app").getImmediate(),c=new Aa(new Tc(i.getProvider("auth-internal")),new Rc(i.getProvider("app-check-internal")),function(d,I){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new N(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bn(d.options.projectId,I)}(l,s),l);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Rt(Fs,"4.7.2",t),Rt(Fs,"4.7.2","esm2017")})();const Ma="@firebase/installations",Ei="0.6.9";/**
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
 */const xa=1e4,Fa=`w:${Ei}`,La="FIS_v2",Yf="https://firebaseinstallations.googleapis.com/v1",Jf=60*60*1e3,Zf="installations",td="Installations";/**
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
 */const ed={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ae=new Wn(Zf,td,ed);function Ua(n){return n instanceof Gt&&n.code.includes("request-failed")}/**
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
 */function Ba({projectId:n}){return`${Yf}/projects/${n}/installations`}function ja(n){return{token:n.token,requestStatus:2,expiresIn:rd(n.expiresIn),creationTime:Date.now()}}async function $a(n,t){const i=(await t.json()).error;return ae.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function qa({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function nd(n,{refreshToken:t}){const e=qa(n);return e.append("Authorization",id(t)),e}async function za(n){const t=await n();return t.status>=500&&t.status<600?n():t}function rd(n){return Number(n.replace("s","000"))}function id(n){return`${La} ${n}`}/**
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
 */async function sd({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const i=Ba(n),s=qa(n),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const l={fid:e,authVersion:La,appId:n.appId,sdkVersion:Fa},c={method:"POST",headers:s,body:JSON.stringify(l)},f=await za(()=>fetch(i,c));if(f.ok){const d=await f.json();return{fid:d.fid||e,registrationStatus:2,refreshToken:d.refreshToken,authToken:ja(d.authToken)}}else throw await $a("Create Installation",f)}/**
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
 */function Ha(n){return new Promise(t=>{setTimeout(t,n)})}/**
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
 */function od(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const ad=/^[cdef][\w-]{21}$/,ti="";function ld(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=ud(n);return ad.test(e)?e:ti}catch{return ti}}function ud(n){return od(n).substr(0,22)}/**
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
 */function sr(n){return`${n.appName}!${n.appId}`}/**
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
 */const Ga=new Map;function Ka(n,t){const e=sr(n);Qa(e,t),cd(e,t)}function Qa(n,t){const e=Ga.get(n);if(e)for(const i of e)i(t)}function cd(n,t){const e=hd();e&&e.postMessage({key:n,fid:t}),fd()}let te=null;function hd(){return!te&&"BroadcastChannel"in self&&(te=new BroadcastChannel("[Firebase] FID Change"),te.onmessage=n=>{Qa(n.data.key,n.data.fid)}),te}function fd(){Ga.size===0&&te&&(te.close(),te=null)}/**
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
 */const dd="firebase-installations-database",pd=1,le="firebase-installations-store";let Lr=null;function Ti(){return Lr||(Lr=Po(dd,pd,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(le)}}})),Lr}async function Kn(n,t){const e=sr(n),s=(await Ti()).transaction(le,"readwrite"),o=s.objectStore(le),l=await o.get(e);return await o.put(t,e),await s.done,(!l||l.fid!==t.fid)&&Ka(n,t.fid),t}async function Wa(n){const t=sr(n),i=(await Ti()).transaction(le,"readwrite");await i.objectStore(le).delete(t),await i.done}async function or(n,t){const e=sr(n),s=(await Ti()).transaction(le,"readwrite"),o=s.objectStore(le),l=await o.get(e),c=t(l);return c===void 0?await o.delete(e):await o.put(c,e),await s.done,c&&(!l||l.fid!==c.fid)&&Ka(n,c.fid),c}/**
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
 */async function Ii(n){let t;const e=await or(n.appConfig,i=>{const s=gd(i),o=md(n,s);return t=o.registrationPromise,o.installationEntry});return e.fid===ti?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function gd(n){const t=n||{fid:ld(),registrationStatus:0};return Xa(t)}function md(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ae.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=_d(n,e);return{installationEntry:e,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:yd(n)}:{installationEntry:t}}async function _d(n,t){try{const e=await sd(n,t);return Kn(n.appConfig,e)}catch(e){throw Ua(e)&&e.customData.serverCode===409?await Wa(n.appConfig):await Kn(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function yd(n){let t=await co(n.appConfig);for(;t.registrationStatus===1;)await Ha(100),t=await co(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:i}=await Ii(n);return i||e}return t}function co(n){return or(n,t=>{if(!t)throw ae.create("installation-not-found");return Xa(t)})}function Xa(n){return vd(n)?{fid:n.fid,registrationStatus:0}:n}function vd(n){return n.registrationStatus===1&&n.registrationTime+xa<Date.now()}/**
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
 */async function Ed({appConfig:n,heartbeatServiceProvider:t},e){const i=Td(n,e),s=nd(n,e),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const l={installation:{sdkVersion:Fa,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(l)},f=await za(()=>fetch(i,c));if(f.ok){const d=await f.json();return ja(d)}else throw await $a("Generate Auth Token",f)}function Td(n,{fid:t}){return`${Ba(n)}/${t}/authTokens:generate`}/**
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
 */async function wi(n,t=!1){let e;const i=await or(n.appConfig,o=>{if(!Ya(o))throw ae.create("not-registered");const l=o.authToken;if(!t&&Ad(l))return o;if(l.requestStatus===1)return e=Id(n,t),o;{if(!navigator.onLine)throw ae.create("app-offline");const c=Pd(o);return e=wd(n,c),c}});return e?await e:i.authToken}async function Id(n,t){let e=await ho(n.appConfig);for(;e.authToken.requestStatus===1;)await Ha(100),e=await ho(n.appConfig);const i=e.authToken;return i.requestStatus===0?wi(n,t):i}function ho(n){return or(n,t=>{if(!Ya(t))throw ae.create("not-registered");const e=t.authToken;return Sd(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function wd(n,t){try{const e=await Ed(n,t),i=Object.assign(Object.assign({},t),{authToken:e});return await Kn(n.appConfig,i),e}catch(e){if(Ua(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await Wa(n.appConfig);else{const i=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Kn(n.appConfig,i)}throw e}}function Ya(n){return n!==void 0&&n.registrationStatus===2}function Ad(n){return n.requestStatus===2&&!Rd(n)}function Rd(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+Jf}function Pd(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function Sd(n){return n.requestStatus===1&&n.requestTime+xa<Date.now()}/**
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
 */async function bd(n){const t=n,{installationEntry:e,registrationPromise:i}=await Ii(t);return i?i.catch(console.error):wi(t).catch(console.error),e.fid}/**
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
 */async function Cd(n,t=!1){const e=n;return await Vd(e),(await wi(e,t)).token}async function Vd(n){const{registrationPromise:t}=await Ii(n);t&&await t}/**
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
 */function Dd(n){if(!n||!n.options)throw Ur("App Configuration");if(!n.name)throw Ur("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw Ur(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Ur(n){return ae.create("missing-app-config-values",{valueName:n})}/**
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
 */const Ja="installations",kd="installations-internal",Nd=n=>{const t=n.getProvider("app").getImmediate(),e=Dd(t),i=nn(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Od=n=>{const t=n.getProvider("app").getImmediate(),e=nn(t,Ja).getImmediate();return{getId:()=>bd(e),getToken:s=>Cd(e,s)}};function Md(){$t(new Nt(Ja,Nd,"PUBLIC")),$t(new Nt(kd,Od,"PRIVATE"))}Md();Rt(Ma,Ei);Rt(Ma,Ei,"esm2017");/**
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
 */const Qn="analytics",xd="firebase_id",Fd="origin",Ld=60*1e3,Ud="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ai="https://www.googletagmanager.com/gtag/js";/**
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
 */const _t=new ni("@firebase/analytics");/**
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
 */const Bd={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Et=new Wn("analytics","Analytics",Bd);/**
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
 */function jd(n){if(!n.startsWith(Ai)){const t=Et.create("invalid-gtag-resource",{gtagURL:n});return _t.warn(t.message),""}return n}function Za(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function $d(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function qd(n,t){const e=$d("firebase-js-sdk-policy",{createScriptURL:jd}),i=document.createElement("script"),s=`${Ai}?l=${n}&id=${t}`;i.src=e?e==null?void 0:e.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function zd(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function Hd(n,t,e,i,s,o){const l=i[s];try{if(l)await t[l];else{const f=(await Za(e)).find(d=>d.measurementId===s);f&&await t[f.appId]}}catch(c){_t.error(c)}n("config",s,o)}async function Gd(n,t,e,i,s){try{let o=[];if(s&&s.send_to){let l=s.send_to;Array.isArray(l)||(l=[l]);const c=await Za(e);for(const f of l){const d=c.find(A=>A.measurementId===f),I=d&&t[d.appId];if(I)o.push(I);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),n("event",i,s||{})}catch(o){_t.error(o)}}function Kd(n,t,e,i){async function s(o,...l){try{if(o==="event"){const[c,f]=l;await Gd(n,t,e,c,f)}else if(o==="config"){const[c,f]=l;await Hd(n,t,e,i,c,f)}else if(o==="consent"){const[c,f]=l;n("consent",c,f)}else if(o==="get"){const[c,f,d]=l;n("get",c,f,d)}else if(o==="set"){const[c]=l;n("set",c)}else n(o,...l)}catch(c){_t.error(c)}}return s}function Qd(n,t,e,i,s){let o=function(...l){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=Kd(o,n,t,e),{gtagCore:o,wrappedGtag:window[s]}}function Wd(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Ai)&&e.src.includes(n))return e;return null}/**
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
 */const Xd=30,Yd=1e3;class Jd{constructor(t={},e=Yd){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const tl=new Jd;function Zd(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function tp(n){var t;const{appId:e,apiKey:i}=n,s={method:"GET",headers:Zd(i)},o=Ud.replace("{app-id}",e),l=await fetch(o,s);if(l.status!==200&&l.status!==304){let c="";try{const f=await l.json();!((t=f.error)===null||t===void 0)&&t.message&&(c=f.error.message)}catch{}throw Et.create("config-fetch-failed",{httpStatus:l.status,responseMessage:c})}return l.json()}async function ep(n,t=tl,e){const{appId:i,apiKey:s,measurementId:o}=n.options;if(!i)throw Et.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:i};throw Et.create("no-api-key")}const l=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new ip;return setTimeout(async()=>{c.abort()},Ld),el({appId:i,apiKey:s,measurementId:o},l,c,t)}async function el(n,{throttleEndTimeMillis:t,backoffCount:e},i,s=tl){var o;const{appId:l,measurementId:c}=n;try{await np(i,t)}catch(f){if(c)return _t.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:l,measurementId:c};throw f}try{const f=await tp(n);return s.deleteThrottleMetadata(l),f}catch(f){const d=f;if(!rp(d)){if(s.deleteThrottleMetadata(l),c)return _t.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:l,measurementId:c};throw f}const I=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?Ss(e,s.intervalMillis,Xd):Ss(e,s.intervalMillis),A={throttleEndTimeMillis:Date.now()+I,backoffCount:e+1};return s.setThrottleMetadata(l,A),_t.debug(`Calling attemptFetch again in ${I} millis`),el(n,A,i,s)}}function np(n,t){return new Promise((e,i)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(e,s);n.addEventListener(()=>{clearTimeout(o),i(Et.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function rp(n){if(!(n instanceof Gt)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class ip{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function sp(n,t,e,i,s){if(s&&s.global){n("event",e,i);return}else{const o=await t,l=Object.assign(Object.assign({},i),{send_to:o});n("event",e,l)}}/**
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
 */async function op(){if(Io())try{await wo()}catch(n){return _t.warn(Et.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return _t.warn(Et.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ap(n,t,e,i,s,o,l){var c;const f=ep(n);f.then(C=>{e[C.measurementId]=C.appId,n.options.measurementId&&C.measurementId!==n.options.measurementId&&_t.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${C.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(C=>_t.error(C)),t.push(f);const d=op().then(C=>{if(C)return i.getId()}),[I,A]=await Promise.all([f,d]);Wd(o)||qd(o,I.measurementId),s("js",new Date);const S=(c=l==null?void 0:l.config)!==null&&c!==void 0?c:{};return S[Fd]="firebase",S.update=!0,A!=null&&(S[xd]=A),s("config",I.measurementId,S),I.measurementId}/**
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
 */class lp{constructor(t){this.app=t}_delete(){return delete Qe[this.app.options.appId],Promise.resolve()}}let Qe={},fo=[];const po={};let Br="dataLayer",up="gtag",go,nl,mo=!1;function cp(){const n=[];if(eu()&&n.push("This is a browser extension environment."),ru()||n.push("Cookies are not available."),n.length>0){const t=n.map((i,s)=>`(${s+1}) ${i}`).join(" "),e=Et.create("invalid-analytics-context",{errorInfo:t});_t.warn(e.message)}}function hp(n,t,e){cp();const i=n.options.appId;if(!i)throw Et.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)_t.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Et.create("no-api-key");if(Qe[i]!=null)throw Et.create("already-exists",{id:i});if(!mo){zd(Br);const{wrappedGtag:o,gtagCore:l}=Qd(Qe,fo,po,Br,up);nl=o,go=l,mo=!0}return Qe[i]=ap(n,fo,po,t,go,Br,e),new lp(n)}function fp(n=bo()){n=re(n);const t=nn(n,Qn);return t.isInitialized()?t.getImmediate():dp(n)}function dp(n,t={}){const e=nn(n,Qn);if(e.isInitialized()){const s=e.getImmediate();if(Mn(t,e.getOptions()))return s;throw Et.create("already-initialized")}return e.initialize({options:t})}function rl(n,t,e,i){n=re(n),sp(nl,Qe[n.app.options.appId],t,e,i).catch(s=>_t.error(s))}const _o="@firebase/analytics",yo="0.10.8";function pp(){$t(new Nt(Qn,(t,{options:e})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return hp(i,s,e)},"PUBLIC")),$t(new Nt("analytics-internal",n,"PRIVATE")),Rt(_o,yo),Rt(_o,yo,"esm2017");function n(t){try{const e=t.getProvider(Qn).getImmediate();return{logEvent:(i,s,o)=>rl(e,i,s,o)}}catch(e){throw Et.create("interop-component-reg-failed",{reason:e})}}}pp();const gp="AIzaSyBXxHPvT6zKTtRCoX9Ut43KUeVIt7vRGzY",mp="1:482898010102:web:2ca83778d58ff4c5ae71d7",_p="G-JQPK804NM2",yp={apiKey:gp,authDomain:"swooddocs.firebaseapp.com",projectId:"swooddocs",storageBucket:"swooddocs.appspot.com",messagingSenderId:"482898010102",appId:mp,measurementId:_p},Ap=async(n,t,e)=>{const i=So(yp),s=Ff(i),o=fp(i),l=Of(s,n),c={userAgent:navigator.userAgent,platform:navigator.platform,appVersion:navigator.appVersion},f={timestamp:new Date,ipAddress:"",version:t,deviceInfo:c};try{const I=await(await fetch("https://api.ipify.org?format=json")).json();f.ipAddress=I.ip}catch(d){console.error("Error getting ip: ",d),f.ipAddress="unable to obtain ipAddress"}try{await Wf(l,f),rl(o,e,f)}catch(d){console.error("Error adding registration: ",d)}};export{Ep as C,Ap as R};

import{n as ne,o as oe,k as B,j as e,s as M,a1 as ve,w as H,m as ie,a2 as ce,a3 as de,x as K,r as g,u as ae,a4 as pe,a5 as Re,p as we,q as le,F as be,a6 as Ce,a7 as te,a8 as X,a9 as Ee,y as Se,aa as Pe,ab as Me,ac as ue,ad as he,l as Oe,K as G,ae as De,T as N,P as Ne,S as L,f as J,af as Y,W as d,ag as Ie,N as ge,Y as Le,e as He,b as Fe}from"./index-DuQRaGW8.js";import{I as D}from"./ImageComponent-CtT7ppHa.js";import{u as ze}from"./useSlotProps-CaWmJsD_.js";import{D as We,a as Be,b as $e,B as Te,c as Ue}from"./BetaDisclaimer-C34I1RfJ.js";import{B as Z,C as Ye,R as Ge}from"./RegisterDownload-Dv5nKbm9.js";import{L as p}from"./ListItemText-G2OG7uPA.js";function _e(t){return oe("MuiAlert",t)}const me=ne("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),Ve=B(e.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),Qe=B(e.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),qe=B(e.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),Ke=B(e.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),Xe=B(e.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),Je=t=>{const{variant:r,color:n,severity:s,classes:l}=t,i={root:["root",`color${H(n||s)}`,`${r}${H(n||s)}`,`${r}`],icon:["icon"],message:["message"],action:["action"]};return le(i,_e,l)},Ze=M(ve,{name:"MuiAlert",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,r[n.variant],r[`${n.variant}${H(n.color||n.severity)}`]]}})(ie(({theme:t})=>{const r=t.palette.mode==="light"?ce:de,n=t.palette.mode==="light"?de:ce;return{...t.typography.body2,backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(t.palette).filter(K(["light"])).map(([s])=>({props:{colorSeverity:s,variant:"standard"},style:{color:t.vars?t.vars.palette.Alert[`${s}Color`]:r(t.palette[s].light,.6),backgroundColor:t.vars?t.vars.palette.Alert[`${s}StandardBg`]:n(t.palette[s].light,.9),[`& .${me.icon}`]:t.vars?{color:t.vars.palette.Alert[`${s}IconColor`]}:{color:t.palette[s].main}}})),...Object.entries(t.palette).filter(K(["light"])).map(([s])=>({props:{colorSeverity:s,variant:"outlined"},style:{color:t.vars?t.vars.palette.Alert[`${s}Color`]:r(t.palette[s].light,.6),border:`1px solid ${(t.vars||t).palette[s].light}`,[`& .${me.icon}`]:t.vars?{color:t.vars.palette.Alert[`${s}IconColor`]}:{color:t.palette[s].main}}})),...Object.entries(t.palette).filter(K(["dark"])).map(([s])=>({props:{colorSeverity:s,variant:"filled"},style:{fontWeight:t.typography.fontWeightMedium,...t.vars?{color:t.vars.palette.Alert[`${s}FilledColor`],backgroundColor:t.vars.palette.Alert[`${s}FilledBg`]}:{backgroundColor:t.palette.mode==="dark"?t.palette[s].dark:t.palette[s].main,color:t.palette.getContrastText(t.palette[s].main)}}}))]}})),et=M("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(t,r)=>r.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),tt=M("div",{name:"MuiAlert",slot:"Message",overridesResolver:(t,r)=>r.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),xe=M("div",{name:"MuiAlert",slot:"Action",overridesResolver:(t,r)=>r.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),fe={success:e.jsx(Ve,{fontSize:"inherit"}),warning:e.jsx(Qe,{fontSize:"inherit"}),error:e.jsx(qe,{fontSize:"inherit"}),info:e.jsx(Ke,{fontSize:"inherit"})},rt=g.forwardRef(function(r,n){const s=ae({props:r,name:"MuiAlert"}),{action:l,children:i,className:f,closeText:u="Close",color:y,components:v={},componentsProps:R={},icon:j,iconMapping:A=fe,onClose:E,role:c="alert",severity:a="success",slotProps:b={},slots:o={},variant:h="standard",...m}=s,w={...s,color:y,severity:a,variant:h,colorSeverity:y||a},C=Je(w),$={slots:{closeButton:v.CloseButton,closeIcon:v.CloseIcon,...o},slotProps:{...R,...b}},[S,F]=pe("closeButton",{elementType:Re,externalForwardedProps:$,ownerState:w}),[z,W]=pe("closeIcon",{elementType:Xe,externalForwardedProps:$,ownerState:w});return e.jsxs(Ze,{role:c,elevation:0,ownerState:w,className:we(C.root,f),ref:n,...m,children:[j!==!1?e.jsx(et,{ownerState:w,className:C.icon,children:j||A[a]||fe[a]}):null,e.jsx(tt,{ownerState:w,className:C.message,children:i}),l!=null?e.jsx(xe,{ownerState:w,className:C.action,children:l}):null,l==null&&E?e.jsx(xe,{ownerState:w,className:C.action,children:e.jsx(S,{size:"small","aria-label":u,title:u,color:"inherit",onClick:E,...F,children:e.jsx(z,{fontSize:"small",...W})})}):null]})});function je(t){return t.substring(2).toLowerCase()}function st(t,r){return r.documentElement.clientWidth<t.clientX||r.documentElement.clientHeight<t.clientY}function nt(t){const{children:r,disableReactTree:n=!1,mouseEvent:s="onClick",onClickAway:l,touchEvent:i="onTouchEnd"}=t,f=g.useRef(!1),u=g.useRef(null),y=g.useRef(!1),v=g.useRef(!1);g.useEffect(()=>(setTimeout(()=>{y.current=!0},0),()=>{y.current=!1}),[]);const R=be(Ce(r),u),j=te(c=>{const a=v.current;v.current=!1;const b=X(u.current);if(!y.current||!u.current||"clientX"in c&&st(c,b))return;if(f.current){f.current=!1;return}let o;c.composedPath?o=c.composedPath().indexOf(u.current)>-1:o=!b.documentElement.contains(c.target)||u.current.contains(c.target),!o&&(n||!a)&&l(c)}),A=c=>a=>{v.current=!0;const b=r.props[c];b&&b(a)},E={ref:R};return i!==!1&&(E[i]=A(i)),g.useEffect(()=>{if(i!==!1){const c=je(i),a=X(u.current),b=()=>{f.current=!0};return a.addEventListener(c,j),a.addEventListener("touchmove",b),()=>{a.removeEventListener(c,j),a.removeEventListener("touchmove",b)}}},[j,i]),s!==!1&&(E[s]=A(s)),g.useEffect(()=>{if(s!==!1){const c=je(s),a=X(u.current);return a.addEventListener(c,j),()=>{a.removeEventListener(c,j)}}},[j,s]),e.jsx(g.Fragment,{children:g.cloneElement(r,E)})}function re(t){return`scale(${t}, ${t**2})`}const ot={entering:{opacity:1,transform:re(1)},entered:{opacity:1,transform:"none"}},ee=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),se=g.forwardRef(function(r,n){const{addEndListener:s,appear:l=!0,children:i,easing:f,in:u,onEnter:y,onEntered:v,onEntering:R,onExit:j,onExited:A,onExiting:E,style:c,timeout:a="auto",TransitionComponent:b=Pe,...o}=r,h=Ee(),m=g.useRef(),w=Se(),C=g.useRef(null),$=be(C,Ce(i),n),S=x=>k=>{if(x){const P=C.current;k===void 0?x(P):x(P,k)}},F=S(R),z=S((x,k)=>{Me(x);const{duration:P,delay:I,easing:T}=ue({style:c,timeout:a,easing:f},{mode:"enter"});let O;a==="auto"?(O=w.transitions.getAutoHeightDuration(x.clientHeight),m.current=O):O=P,x.style.transition=[w.transitions.create("opacity",{duration:O,delay:I}),w.transitions.create("transform",{duration:ee?O:O*.666,delay:I,easing:T})].join(","),y&&y(x,k)}),W=S(v),_=S(E),V=S(x=>{const{duration:k,delay:P,easing:I}=ue({style:c,timeout:a,easing:f},{mode:"exit"});let T;a==="auto"?(T=w.transitions.getAutoHeightDuration(x.clientHeight),m.current=T):T=k,x.style.transition=[w.transitions.create("opacity",{duration:T,delay:P}),w.transitions.create("transform",{duration:ee?T:T*.666,delay:ee?P:P||T*.333,easing:I})].join(","),x.style.opacity=0,x.style.transform=re(.75),j&&j(x)}),U=S(A),Q=x=>{a==="auto"&&h.start(m.current||0,x),s&&s(C.current,x)};return e.jsx(b,{appear:l,in:u,nodeRef:C,onEnter:z,onEntered:W,onEntering:F,onExit:V,onExited:U,onExiting:_,addEndListener:Q,timeout:a==="auto"?null:a,...o,children:(x,k)=>g.cloneElement(i,{style:{opacity:0,transform:re(.75),visibility:x==="exited"&&!u?"hidden":void 0,...ot[x],...c,...i.props.style},ref:$,...k})})});se&&(se.muiSupportAuto=!0);function it(t={}){const{autoHideDuration:r=null,disableWindowBlurListener:n=!1,onClose:s,open:l,resumeHideDuration:i}=t,f=Ee();g.useEffect(()=>{if(!l)return;function o(h){h.defaultPrevented||h.key==="Escape"&&(s==null||s(h,"escapeKeyDown"))}return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[l,s]);const u=te((o,h)=>{s==null||s(o,h)}),y=te(o=>{!s||o==null||f.start(o,()=>{u(null,"timeout")})});g.useEffect(()=>(l&&y(r),f.clear),[l,r,y,f]);const v=o=>{s==null||s(o,"clickaway")},R=f.clear,j=g.useCallback(()=>{r!=null&&y(i??r*.5)},[r,i,y]),A=o=>h=>{const m=o.onBlur;m==null||m(h),j()},E=o=>h=>{const m=o.onFocus;m==null||m(h),R()},c=o=>h=>{const m=o.onMouseEnter;m==null||m(h),R()},a=o=>h=>{const m=o.onMouseLeave;m==null||m(h),j()};return g.useEffect(()=>{if(!n&&l)return window.addEventListener("focus",j),window.addEventListener("blur",R),()=>{window.removeEventListener("focus",j),window.removeEventListener("blur",R)}},[n,l,j,R]),{getRootProps:(o={})=>{const h={...he(t),...he(o)};return{role:"presentation",...o,...h,onBlur:A(h),onFocus:E(h),onMouseEnter:c(h),onMouseLeave:a(h)}},onClickAway:v}}function at(t){return oe("MuiSnackbarContent",t)}ne("MuiSnackbarContent",["root","message","action"]);const lt=t=>{const{classes:r}=t;return le({root:["root"],action:["action"],message:["message"]},at,r)},ct=M(ve,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(t,r)=>r.root})(ie(({theme:t})=>{const r=t.palette.mode==="light"?.8:.98,n=Oe(t.palette.background.default,r);return{...t.typography.body2,color:t.vars?t.vars.palette.SnackbarContent.color:t.palette.getContrastText(n),backgroundColor:t.vars?t.vars.palette.SnackbarContent.bg:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(t.vars||t).shape.borderRadius,flexGrow:1,[t.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}}})),dt=M("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(t,r)=>r.message})({padding:"8px 0"}),pt=M("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(t,r)=>r.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),ut=g.forwardRef(function(r,n){const s=ae({props:r,name:"MuiSnackbarContent"}),{action:l,className:i,message:f,role:u="alert",...y}=s,v=s,R=lt(v);return e.jsxs(ct,{role:u,square:!0,elevation:6,className:we(R.root,i),ownerState:v,ref:n,...y,children:[e.jsx(dt,{className:R.message,ownerState:v,children:f}),l?e.jsx(pt,{className:R.action,ownerState:v,children:l}):null]})});function ht(t){return oe("MuiSnackbar",t)}ne("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const gt=t=>{const{classes:r,anchorOrigin:n}=t,s={root:["root",`anchorOrigin${H(n.vertical)}${H(n.horizontal)}`]};return le(s,ht,r)},ye=M("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,r[`anchorOrigin${H(n.anchorOrigin.vertical)}${H(n.anchorOrigin.horizontal)}`]]}})(ie(({theme:t})=>({zIndex:(t.vars||t).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center",variants:[{props:({ownerState:r})=>r.anchorOrigin.vertical==="top",style:{top:8,[t.breakpoints.up("sm")]:{top:24}}},{props:({ownerState:r})=>r.anchorOrigin.vertical!=="top",style:{bottom:8,[t.breakpoints.up("sm")]:{bottom:24}}},{props:({ownerState:r})=>r.anchorOrigin.horizontal==="left",style:{justifyContent:"flex-start",[t.breakpoints.up("sm")]:{left:24,right:"auto"}}},{props:({ownerState:r})=>r.anchorOrigin.horizontal==="right",style:{justifyContent:"flex-end",[t.breakpoints.up("sm")]:{right:24,left:"auto"}}},{props:({ownerState:r})=>r.anchorOrigin.horizontal==="center",style:{[t.breakpoints.up("sm")]:{left:"50%",right:"auto",transform:"translateX(-50%)"}}}]}))),mt=g.forwardRef(function(r,n){const s=ae({props:r,name:"MuiSnackbar"}),l=Se(),i={enter:l.transitions.duration.enteringScreen,exit:l.transitions.duration.leavingScreen},{action:f,anchorOrigin:{vertical:u,horizontal:y}={vertical:"bottom",horizontal:"left"},autoHideDuration:v=null,children:R,className:j,ClickAwayListenerProps:A,ContentProps:E,disableWindowBlurListener:c=!1,message:a,onBlur:b,onClose:o,onFocus:h,onMouseEnter:m,onMouseLeave:w,open:C,resumeHideDuration:$,TransitionComponent:S=se,transitionDuration:F=i,TransitionProps:{onEnter:z,onExited:W,..._}={},...V}=s,U={...s,anchorOrigin:{vertical:u,horizontal:y},autoHideDuration:v,disableWindowBlurListener:c,TransitionComponent:S,transitionDuration:F},Q=gt(U),{getRootProps:x,onClickAway:k}=it({...U}),[P,I]=g.useState(!0),T=ze({elementType:ye,getSlotProps:x,externalForwardedProps:V,ownerState:U,additionalProps:{ref:n},className:[Q.root,j]}),O=q=>{I(!0),W&&W(q)},Ae=(q,ke)=>{I(!1),z&&z(q,ke)};return!C&&P?null:e.jsx(nt,{onClickAway:k,...A,children:e.jsx(ye,{...T,children:e.jsx(S,{appear:!0,in:C,timeout:F,direction:u==="top"?"down":"up",onEnter:Ae,onExited:O,..._,children:R||e.jsx(ut,{message:a,action:f,...E})})})})}),xt=B(e.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"}),"ContentCopy"),ft=M(G)(({theme:t})=>({fontFamily:"monospace",backgroundColor:t.palette.background.paper,border:`1px solid ${t.palette.divider}`,padding:t.spacing(2),borderRadius:t.shape.borderRadius,position:"relative",overflow:"auto",maxHeight:"500px","&::-webkit-scrollbar":{width:"5px"},"&::-webkit-scrollbar-thumb":{backgroundColor:"rgb(104,104,104)",borderRadius:"5px"},"&::-webkit-scrollbar-track":{backgroundColor:"rgb(66,66,66)"}})),jt=M(Re)(({theme:t})=>({position:"absolute",top:t.spacing(1),right:t.spacing(1)})),yt=De.forwardRef(function(r,n){return e.jsx(rt,{elevation:6,ref:n,variant:"filled",...r})}),vt=({text:t})=>{const[r]=g.useState(t),[n,s]=g.useState(!1),l=()=>{navigator.clipboard.writeText(r),s(!0)},i=(f,u)=>{u!=="clickaway"&&s(!1)};return e.jsxs(G,{sx:{padding:2,position:"relative"},children:[e.jsxs(ft,{children:[e.jsx(N,{component:"pre",variant:"body2",children:r}),e.jsx(jt,{onClick:l,"aria-label":"copy code",children:e.jsx(xt,{})})]}),e.jsx(mt,{anchorOrigin:{vertical:"top",horizontal:"right"},open:n,autoHideDuration:3e3,onClose:i,children:e.jsx(yt,{onClose:i,severity:"info",sx:{width:"100%"},children:"Code copied to clipboard"})})]})},Rt=()=>{const t="https://github.com/SolidSolutionsLtd/SwoodDocs/raw/master/public/assets/MergeReportPost.exe",r="0.0.0",[n,s]=g.useState(!1),l=()=>s(!0),i=()=>s(!1),f=async()=>{s(!1);try{await Ge("MergeReportsDownloads",r,"download_MergeReports"),window.location.href=t}catch(u){console.error("Error during registration: ",u)}};return e.jsxs(e.Fragment,{children:[e.jsx(G,{display:"flex",justifyContent:"center",className:"imageBox",children:e.jsxs(Z,{variant:"outlined",size:"large",color:"info",onClick:l,endIcon:e.jsx(Ye,{}),children:["Download MergeReportPost v",r]})}),e.jsxs(We,{open:n,onClose:i,children:[e.jsx(Be,{children:"MergeReports Disclaimer"}),e.jsx($e,{children:e.jsx(Te,{})}),e.jsxs(Ue,{children:[e.jsx(Z,{onClick:f,color:"primary",autoFocus:!0,children:"Agree"}),e.jsx(Z,{onClick:i,color:"primary",children:"Disagree"})]})]})]})},At=()=>e.jsxs(e.Fragment,{children:[e.jsx(Ne,{title:"How to merge nest and design reports",pro:!0,beta:!0}),e.jsx("nav",{children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("a",{href:"#Overview",children:"Overview"})}),e.jsx("li",{children:e.jsx("a",{href:"#Terminology",children:"Terminology"})}),e.jsx("li",{children:e.jsx("a",{href:"#Workflow",children:"Workflow"})}),e.jsx("li",{children:e.jsx("a",{href:"#FAQs",children:"FAQs"})}),e.jsx("li",{children:e.jsx("a",{href:"#Requirements",children:"Requirements"})}),e.jsx("li",{children:e.jsx("a",{href:"#Disclaimer",children:"MergeReports disclaimer"})}),e.jsx("li",{children:e.jsx("a",{href:"#Setup",children:"How to set up the MergeReports application"})})]})}),e.jsxs(L,{id:"Overview",title:"Overview",children:[e.jsxs(N,{children:["When using ",e.jsx(J,{})," and ",e.jsx(Y,{}),", users must manage multiple assemblies: one or more design assemblies and the nesting assembly. This separation often leads to issues with reports due to the division of data. For example, nesting projects may not include all project components (such as hardware) or information about the frames used. Conversely, design projects lack details about the nested sheets."]}),e.jsxs(N,{children:["To address this, a new ",e.jsx("span",{className:"highlight",children:"MergeReports"})," application has been developed to consolidate the data from Design and Nesting projects into a single report. Please read further to understand its workflow, FAQs, and setup."]}),e.jsx(N,{children:"It is important to note that this application is currently in the beta stage. As such, it may contain errors and bugs. We appreciate your understanding and encourage you to report any issues you encounter to help us improve the application."})]}),e.jsxs(L,{id:"Terminology",title:"Terminology",children:[e.jsx(N,{children:"Below is a list of the terminology used throughout this article:"}),e.jsx(d,{children:e.jsx(p,{primary:"Design Project",secondary:e.jsxs(e.Fragment,{children:["A project or file created using ",e.jsx(J,{}),", such as a panel, frame, or layout assembly."]})})}),e.jsx(d,{children:e.jsx(p,{primary:"Design Report",secondary:e.jsxs(e.Fragment,{children:["A report generated from a ",e.jsx(J,{})," project."]})})}),e.jsx(d,{children:e.jsx(p,{primary:"Nesting Project",secondary:e.jsxs(e.Fragment,{children:["A project or file created using ",e.jsx(Y,{}),"."]})})}),e.jsx(d,{children:e.jsx(p,{primary:"Nesting Report",secondary:e.jsxs(e.Fragment,{children:["A report generated from a ",e.jsx(Y,{})," project."]})})}),e.jsx(d,{children:e.jsx(p,{primary:"Merged Report",secondary:e.jsxs(e.Fragment,{children:["A report generated by the ",e.jsx("span",{className:"highlight",children:"MergeReports"})," application"]})})}),e.jsx(d,{children:e.jsx(p,{primary:"Nesting Source Files",secondary:e.jsxs(e.Fragment,{children:["Projects or files added as Source Files to the ",e.jsx(Y,{})," project."]})})}),e.jsx(D,{source:"./images/MergeReportsSourceFilesNest.png",size:"600px"})]}),e.jsxs(L,{id:"Workflow",title:"Workflow",children:[e.jsx(N,{children:"To merge a nest report with the reports of its source files, follow the steps outlined below:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Create Design Projects."}),e.jsx("li",{children:"Generate Design Reports."}),e.jsx("li",{children:"Create a Nesting Project using the Design Projects as Nesting Source Files."}),e.jsx("li",{children:"Generate the Nesting Report."}),e.jsxs("li",{children:["The ",e.jsx("span",{className:"highlight",children:"MergeReports"})," application will automatically generate a merged report."]})]}),e.jsx(Ie,{})]}),e.jsxs(L,{id:"FAQs",title:"FAQs",children:[e.jsx(d,{children:e.jsx(p,{primary:"Can I use a single source file for the Nesting project?",secondary:"Yes, you can use any number of source files in the nesting project."})}),e.jsx(d,{children:e.jsx(p,{primary:"How can I access the merged report?",secondary:e.jsxs(e.Fragment,{children:["After the nest report is completed, you can access the merged report in the Encoding Report Screen by clicking ",e.jsx("span",{className:"param",children:"Documents > Home Merged Report"}),". Note that you can also access the merged report through Windows Explorer."]})})}),e.jsx(D,{source:"./images/MergeReportsOpen.png",size:"300px"}),e.jsx(d,{children:e.jsx(p,{primary:"Where is the merged report saved?",secondary:"The merged report is saved in the same directory as the nested report. This cannot be changed."})}),e.jsx(d,{children:e.jsx(p,{primary:"What will be the name of the merged report?",secondary:e.jsxs(e.Fragment,{children:["The merged report will be automatically named ",e.jsx("span",{className:"highlight",children:"Merged - <Nest Report Name>"}),". This cannot be changed."]})})}),e.jsx(d,{children:e.jsx(p,{primary:"What should I do if any of the models change?",secondary:"If a model changes, generate all associated Design reports followed by the Nesting report. This will automatically regenerate the merged report with the updated data."})}),e.jsx(d,{children:e.jsx(p,{primary:"Can I merge with older report versions?",secondary:"No, all reports must be version 2.10.3 or newer."})}),e.jsx(d,{children:e.jsx(p,{primary:"Can I merge multiple Design projects without a Nest project?",secondary:"This is not supported at the moment."})}),e.jsx(d,{children:e.jsx(p,{primary:"Can I merge multiple Nest projects?",secondary:"This is not supported at the moment."})}),e.jsx(d,{children:e.jsx(p,{primary:"Are cutting patterns re-optimised in the merged report?",secondary:"The merged report does not re-optimise cutting patterns from the Design projects. The original cutting patterns are retained, which may not be the most efficient solution."})}),e.jsx(d,{children:e.jsx(p,{primary:"Can I use the Project Quantity Custom Property?",secondary:e.jsxs(e.Fragment,{children:["This is not supported at the moment. However, you can learn how it’s beneficial when projects are not merged ",e.jsx(ge,{to:"/ProjectQuantity",children:"here"}),"."]})})}),e.jsx(d,{children:e.jsx(p,{primary:"Can I use the Quantity option in the nest project settings?",secondary:"Yes. Keep in mind that in the merged report, the panel quantities from the nest project will take precedence."})}),e.jsx(D,{source:"./images/MergeReportsNestQuantity.png",size:"600px"}),e.jsx(d,{children:e.jsx(p,{primary:"What happens if not all of the source files have a design report?",secondary:e.jsxs(e.Fragment,{children:["The ",e.jsx("span",{className:"highlight",children:"MergeReport"})," application will only merge the available data from existing reports. As a result, some information such as hardware, frames, and unnested panels may be missing in the merged report."]})})}),e.jsx(d,{children:e.jsx(p,{primary:"What happens if none of the source files have a design report?",secondary:e.jsxs(e.Fragment,{children:["The ",e.jsx("span",{className:"highlight",children:"MergeReport"})," application will not generate any files. You will also notice the message below when clicking on ",e.jsx("span",{className:"param",children:"Documents > Home Merged Report"}),"."]})})}),e.jsx(D,{source:"./images/MergeReportsError.png",size:"600px"}),e.jsx(d,{children:e.jsx(p,{primary:"Will the merged report folder be deleted when the nest report is run again?",secondary:"Yes, all files in the existing merged report folder will be deleted before the merge process begins. This behavior is consistent whether you run a design or nest report. However, you will not be prompted to choose a different folder."})}),e.jsx(d,{children:e.jsx(p,{primary:"How can I identify what reports have been merged?",secondary:"At present, there is no interface to display this information. However, you can use the Raw Data Viewer to view the merged data."})}),e.jsx(D,{source:"./images/MergeReportsData.gif",size:"800px"}),e.jsx(d,{children:e.jsx(p,{primary:"What image will the merged report display on the home page?",secondary:"The report will display the image from one of the nest source files. It is not possible to specify which source file's image will be used."})}),e.jsx(d,{children:e.jsx(p,{primary:"Should I disable the 'Insert Not Nested Parts' option in the nest settings?",secondary:"Yes. Enabling this option will insert a single instance of un-nested parts, which can result in incorrect quantity values."})}),e.jsx(D,{source:"./images/MergeReportsNotNestedOption.png",size:"600px"}),e.jsx(d,{children:e.jsx(p,{primary:"Why are there original copies of the nest and design reports in the merged report folder?",secondary:"These files are remnants of the merge process and are no longer needed once the merge is complete. Future developments may enable referencing these reports."})}),e.jsx(d,{children:e.jsx(p,{primary:"How can I provide feedback, suggestions, or report bugs?",secondary:e.jsxs(e.Fragment,{children:["We value your input and encourage you to share any feedback, suggestions, or bugs you encounter. Please contact us at ",e.jsx("a",{href:"mailto:SwoodApps@solidsolutions.co.uk",children:"SwoodApps@solidsolutions.co.uk"}),". Your contributions help us improve and enhance our software."]})})})]}),e.jsx(L,{id:"Requirements",title:"Requirements",children:e.jsxs("ol",{children:[e.jsxs("li",{children:["SwoodReport Pro",e.jsx(Le,{})," version 2.10.3 or newer"]}),e.jsx("li",{children:"Swood 2024 SP0.0 or newer"})]})}),e.jsx(G,{className:"red",children:e.jsx(L,{id:"Disclaimer",title:"MergeReports disclaimer",children:e.jsx(Te,{})})}),e.jsx(L,{id:"Setup",title:"How to set up the MergeReports application",children:e.jsxs("ol",{children:[e.jsxs("li",{children:["Download ",e.jsx("span",{className:"highlight",children:"MergeReportPost.exe"}),"."]}),e.jsx(N,{className:"red",children:"Please note that your eligibility for this version depends on your Subscription Renewal Date."}),e.jsx(Rt,{}),e.jsxs("li",{children:["Ensure that ",e.jsx("span",{className:"highlight",children:"MergeReportPost.exe"})," has not been blocked by your machine. Right-click on the ",e.jsx("span",{className:"highlight",children:"MergeReportPost.exe"})," application, then go to ",e.jsx("span",{className:"param",children:"Properties > Unblock > OK"}),". If the ",e.jsx("span",{className:"param",children:"Unblock"})," option is not present, it means the file has not been blocked, and you can skip this step."]}),e.jsx(D,{source:"./images/MergeReportsUnblock.png",size:"300px"}),e.jsxs("li",{children:["Place ",e.jsx("span",{className:"highlight",children:"MergeReportPost.exe"})," in the ",e.jsx("span",{className:"param",children:"<SWOOD DATA DIRECTORY>\\DAT\\Documents\\Report Posts"})," folder. Click ",e.jsx(ge,{to:"/SwoodDataDirectory",children:"here"})," to learn how to find the ",e.jsx(He,{}),"."]}),e.jsxs("li",{children:["Open the following file with any text editor (e.g., Notepad): ",e.jsx("span",{className:"param",children:"<SWOOD DATA DIRECTORY>\\DAT\\Report.cfg"}),"."]}),e.jsxs("li",{children:["Scroll down to the ",e.jsx("span",{className:"param",children:"(DOCUMENTS) > ADDITIONAL DOCUMENTS"})," section and copy and paste the code below:"]}),e.jsx(vt,{text:`
    [MERGE_REPORT]
		PROCESSON = REPORT
		TYPEDOCUMENT = TEMPLATE
		PATH = <REPORTPATH>\\Documents\\Sheets_<AssemblyName>.txt
		CONDITION = REPORT_ISNESTINGPROJECT
		AUTOPROCESS = 1
		HIDDEN = 1
		POSTPROCESS_WAITFOREXIT = 1
		PRIORITY = 1
		POSTPROCESS = DAT\\Documents\\Report Posts\\MergeReportPost.exe
		POSTPROCESSARGS = --DatabasePath "<REPORTPATH>\\Documents\\Database_<AssemblyName>.js"
		FORCED_STORAGE_TYPE = 1
		[[TEMPLATE
			MODE = REPLACE
			VARSEPARATORIN = "«"
			VARSEPARATOROUT = "»"
			TEMPLATESRC = <APP.USERPATH>\\DAT\\Documents\\WEB\\Sheets.html
		]]

	[Home Merged Report]
		PROCESSON = REPORT
		PATH = <REPORTPATH>\\..\\Merged - <AssemblyName>\\Home_Merged - <AssemblyName>.html
		CONDITION = REPORT_ISNESTINGPROJECT
		AUTOPROCESS = 1
		HIDDEN = 0
`}),e.jsx(N,{children:"The end result should look something like this:"}),e.jsx(D,{source:"./images/MergeReportsCFG.png",size:"600px"}),e.jsxs("li",{children:["Save the ",e.jsx("span",{className:"highlight",children:"Report.cfg"})," file and restart ",e.jsx(Fe,{}),"."]}),e.jsxs("li",{children:["Follow the steps outlined in ",e.jsx("a",{href:"#Workflow",children:"Workflow"})," to create your first merged report."]})]})})]});export{At as default};
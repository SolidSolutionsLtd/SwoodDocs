import{j as e,P as n,T as t}from"./index-BPcXprnx.js";import{I as i}from"./ImageComponent-C5kH8ksF.js";import{S as s}from"./Section-WF-XNneG.js";import"./SectionTitle-B4M-jo7F.js";const o=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Nested or Beam Sawed"}),e.jsx("nav",{children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("a",{href:"#Overview",children:"Overview"})}),e.jsx("li",{children:e.jsx("a",{href:"#CustomProperty",children:"Defining the Activating Custom Property"})}),e.jsx("li",{children:e.jsx("a",{href:"#PlaceholderProperty",children:"Creating the Activating Property"})}),e.jsx("li",{children:e.jsx("a",{href:"#DisableCuttingPattern",children:"Excluding Panels from Cutting Pattern"})}),e.jsx("li",{children:e.jsx("a",{href:"#EnableNesting",children:"Enabling Panels in Nesting"})})]})}),e.jsxs(s,{id:"Overview",title:"Overview",children:[e.jsx(t,{children:"In some workflows, users may want to categorize panels into two main groups: Nested or Beam Sawed. Nested panels are processed using Swood Nesting, while Beam Sawed panels are optimized in the Cutting Pattern process."}),e.jsx(t,{children:"This behavior can be controlled by assigning a custom property to the model, which defines how the panels will be processed."})]}),e.jsxs(s,{id:"CustomProperty",title:"Defining the Activating Custom Property",children:[e.jsxs(t,{children:["Define the custom property that will control whether a panel is nested. For example, a property called ",e.jsx("span",{className:"highlight",children:"Nested"}),' could be used. If the property is set to "Yes" the panel will be nested; if set to "No" it will be sent to the Cutting Pattern.']}),e.jsx(t,{children:"By default, if this property is not defined, the panel will be processed using the Cutting Pattern. This default behavior cannot be changed."})]}),e.jsxs(s,{id:"PlaceholderProperty",title:"Creating the Activating Property",children:[e.jsx(t,{children:"To define the property that enables nesting, follow these steps:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Open ",e.jsx("span",{className:"highlight",children:"SwoodEditor"})," and navigate to ",e.jsx("span",{className:"param",children:"Report > Custom Properties"}),"."]}),e.jsx("li",{children:"Create a new Panel Custom Property."}),e.jsxs("li",{children:["Ensure the property type is set to ",e.jsx("span",{className:"highlight",children:"Boolean"}),"."]}),e.jsxs("li",{children:["Enter a name for the property, such as ",e.jsx("span",{className:"highlight",children:"Nested"}),"."]}),e.jsxs("li",{children:["Take note of the placeholder name, for example, ",e.jsx("span",{className:"highlight",children:"Part_BOO_1"}),"."]})]}),e.jsx(i,{source:"./images/NestedOrBeamSawDefinePlaceholder.png",size:"600px"})]}),e.jsxs(s,{id:"DisableCuttingPattern",title:"Excluding Panels from Cutting Pattern",children:[e.jsx(t,{children:'By default, all panels are sent to the Cutting Pattern unless the custom property is set to "Yes" for nesting. Follow these steps to exclude panels from the Cutting Pattern:'}),e.jsxs("ol",{children:[e.jsxs("li",{children:["In ",e.jsx("span",{className:"highlight",children:"SwoodEditor"}),", navigate to Cutting Pattern."]}),e.jsxs("li",{children:["Add the placeholder name to the ",e.jsx("span",{className:"highlight",children:"Ignore Part Condition"})," field."]}),e.jsx("li",{children:"Save your settings."})]}),e.jsx(i,{source:"./images/NestedOrBeamSawDisableCuttingPattern.png",size:"500px"})]}),e.jsxs(s,{id:"EnableNesting",title:"Enabling Panels in Nesting",children:[e.jsx(t,{children:'Panels with the custom property set to "Yes" will be processed using nesting. To enable this, follow these steps:'}),e.jsxs("ol",{children:[e.jsx("li",{children:"Open the SWOODCAM.cfg file in a text editor, located in the DAT folder."}),e.jsxs("li",{children:["Find the ",e.jsx("span",{className:"highlight",children:"CUSTOM PROPERTY ACTIVATION"})," field."]}),e.jsxs("li",{children:["Enter the custom property name, such as ",e.jsx("span",{className:"highlight",children:"Nested"}),"."]}),e.jsxs("li",{children:["Ensure there is no semicolon (;) before the ",e.jsx("span",{className:"highlight",children:"CUSTOM PROPERTY ACTIVATION"})," entry. If present, remove it."]})]}),e.jsx(i,{source:"./images/NestedOrBeamSawNestingActivate.png",size:"200px"})]})]});export{o as default};
import{j as e,P as a,S as s,T as i,a as n,e as t}from"./index-DXOQOw9L.js";import{I as o}from"./ImageComponent-Aaa7EDvW.js";const h=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Issues with long file names"}),e.jsx("nav",{children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("a",{href:"#Overview",children:"Overview"})}),e.jsx("li",{children:e.jsx("a",{href:"#RemovePath",children:"Rename or move the Swood data directory folder"})}),e.jsx("li",{children:e.jsx("a",{href:"#SimpleName",children:"Define a simplified naming convention"})}),e.jsx("li",{children:e.jsx("a",{href:"#AutoNumber",children:"Swood automatic numbering system"})})]})}),e.jsxs(s,{id:"Overview",title:"Overview",children:[e.jsx(i,{children:"Microsoft Windows has a maximum path limit of 260 characters. If the length of the path and filename combined reach this limit, Windows will not be able to save the file to the directory."}),e.jsxs(i,{children:["The way ",e.jsx(n,{})," creates filenames is by concatenating the names of parts and assemblies. While this generates a unique filename, it also tends to create a long filename."]}),e.jsx(i,{children:"There are a few ways to approach this:"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("a",{href:"#RemovePath",children:"Rename or move the Swood data directory folder"})}),e.jsx("li",{children:e.jsx("a",{href:"#SimpleName",children:"Define a simplified naming convention"})}),e.jsx("li",{children:e.jsxs("a",{href:"#AutoNumber",children:["Use the automatic numbering system from ",e.jsx(n,{})]})})]}),e.jsx(s,{id:"RemovePath",title:"Rename or move the Swood data directory folder",children:e.jsxs(i,{children:["Rename or move the ",e.jsx(t,{})," folder closer to the root folder of your PC to avoid unnecessary nested directories."]})}),e.jsxs(s,{id:"SimpleName",title:"Define a simplified naming convention",children:[e.jsx(i,{children:"Create a simplified naming convention for Parts and Assemblies, something comprised of a couple of letters and numbers."}),e.jsx(i,{children:"As a simple example, “HC1_DR1_T” instead of “High Cabinet Type 1_Drawer Runner Type 1_Top”."}),e.jsxs(i,{children:["A simplified naming convention will not allow for a descriptive name. However, you can add a Description custom property to the file and show it in the ",e.jsx(n,{})," Task Pane. You will need to enable this setting in ",e.jsx("span",{className:"param",children:"Tools > SWOOD Design > Settings > Design > Frames > Show Descriptions"}),"."]})]}),e.jsxs(s,{id:"AutoNumber",title:"Swood automatic numbering system",children:[e.jsx("h3",{children:"Limitations"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["The ",e.jsx(t,{})," cannot be shared in Dropbox or any similar file-sharing service due to latency."]}),e.jsx("li",{children:"Used counters cannot be retrieved or reused. Once they are used, it cannot be undone."}),e.jsx("li",{children:"The counters carry on from the previous project; they cannot be reset to 1 for a new project."})]}),e.jsx("h3",{children:"Overview"}),e.jsxs(i,{children:["The ",e.jsx(n,{})," Automatic Numbering System automatically assigns names/numbers to components. The tool lets you define prefixes for three categories: Assemblies, Sub-Assemblies, and Parts. In the example below, we have “Frame”, “SubFrame”, and “Panel” respectively. Each category has its own counter that increments each time a component is created."]}),e.jsx(i,{children:'You can assign counters to all components when using the "Insert Copy" option for Frames and SwoodBoxes.'}),e.jsx(o,{source:"./images/Numbering1.png",size:"500px"}),e.jsxs(i,{children:["Selecting the ",e.jsx("span",{className:"highlight",children:"Use Serial Number"})," option will rename each component using the predefined prefix and the next serial number in the sequence. Notice that this method ensures that each component has a unique name, so there is no longer the need to append the assembly name."]}),e.jsx(o,{source:"./images/Numbering2.png",size:"500px"}),e.jsxs(i,{children:["To assign a counter to a panel when using the ",e.jsx("span",{className:"highlight",children:"Create a New Panel"})," option, use the ",e.jsx("span",{className:"highlight",children:"Use EPDM SerialNumber"})," tick option."]}),e.jsx(o,{source:"./images/Numbering4.png",size:"400px"}),e.jsxs(i,{children:["If you believe this is the correct solution for you, please contact ",e.jsx("a",{href:"mailto:SwoodApps@solidsolutions.co.uk",children:"SwoodApps@solidsolutions.co.uk"}),"."]})]})]});export{h as default};
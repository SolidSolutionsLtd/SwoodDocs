import{j as e,P as r,T as s,b as a,N as n,B as t}from"./index-BPcXprnx.js";import{I as i}from"./ImageComponent-C5kH8ksF.js";import{S as l}from"./Section-WF-XNneG.js";import{L as o}from"./Link-CJBCQN3P.js";import"./SectionTitle-B4M-jo7F.js";const m=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"SwoodUtils",pro:!0,beta:!0}),e.jsx("nav",{children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("a",{href:"#Overview",children:"Overview"})}),e.jsx("li",{children:e.jsx("a",{href:"#Features",children:"Features"})}),e.jsx("li",{children:e.jsx("a",{href:"#Installation",children:"Installation"})}),e.jsx("li",{children:e.jsx("a",{href:"#Licensing",children:"Licensing"})}),e.jsx("li",{children:e.jsx("a",{href:"#Workflow",children:"Workflow"})}),e.jsx("li",{children:e.jsx("a",{href:"#Controls",children:"Main Controls"})}),e.jsx("li",{children:e.jsx("a",{href:"#Types",children:"Types of IDs"})}),e.jsx("li",{children:e.jsx("a",{href:"#IDElements",children:"Elements of an ID"})}),e.jsx("li",{children:e.jsx("a",{href:"#IDFormat",children:"Flat ID Format"})}),e.jsx("li",{children:e.jsx("a",{href:"#IDFormatNested",children:"Nested ID Format"})}),e.jsx("li",{children:e.jsx("a",{href:"#Property",children:"ID Custom Property"})}),e.jsx("li",{children:e.jsx("a",{href:"#Colours",children:"Table Row Colours"})}),e.jsx("li",{children:e.jsx("a",{href:"#WarningIcons",children:"Warning Icons"})}),e.jsx("li",{children:e.jsx("a",{href:"#CustomProperties",children:"How to Modify Custom Properties"})}),e.jsx("li",{children:e.jsx("a",{href:"#AppSettings",children:"App Settings"})}),e.jsx("li",{children:e.jsx("a",{href:"#IDSettings",children:"ID Settings"})}),e.jsx("li",{children:e.jsx("a",{href:"#CopySettings",children:"Copy Settings between Users"})}),e.jsx("li",{children:e.jsx("a",{href:"#KnownBugs",children:"Known Bugs"})}),e.jsx("li",{children:e.jsx("a",{href:"#FutureDevelopment",children:"Future Development"})})]})}),e.jsxs(l,{id:"Overview",title:"Overview",children:[e.jsxs(s,{variant:"body1",children:["SwoodUtils streamlines the ID assignment process for panels and frames, providing a user-friendly interface. It also identifies identical panels, removing the need for the ",e.jsx("span",{className:"highlight",children:"Combine Panels"})," macro."]}),e.jsx(s,{variant:"body1",children:"Please note that SwoodUtils is currently in its Beta stage."})]}),e.jsx(l,{id:"Features",title:"Features",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(a,{primary:"Easily assign or remove IDs for components like frames and panels through an intuitive interface."})}),e.jsx("li",{children:e.jsx(a,{primary:"Detect identical panels and automatically assign a shared ID."})}),e.jsx("li",{children:e.jsx(a,{primary:"Customizable ID Settings: Adjust various options within SwoodUtils to suit your workflow preferences."})}),e.jsx("li",{children:e.jsx(a,{primary:"Manage Custom Properties: Modify settings like Frame, SubFrame, Hardware, and Exclude to control panel numbering behavior."})})]})}),e.jsx(l,{id:"Installation",title:"Installation",children:e.jsxs("ol",{children:[e.jsxs("li",{children:["Begin by downloading the installer from this"," ",e.jsx(o,{href:"https://development.solidsolutions.co.uk/swoodutils/downloads/SwoodUtils-0.1.3.0.exe",target:"_blank",children:"link"}),". If the download doesn’t start automatically, copy and paste the following URL into a new browser tab: ",e.jsx("span",{style:{textDecoration:"underline"},children:"https://development.solidsolutions.co.uk/swoodutils/downloads/SwoodUtils-0.1.1.0.exe"}),"."]}),e.jsx("li",{children:"Close SolidWorks before proceeding."}),e.jsx("li",{children:"Run the installer and follow the on-screen instructions to complete the installation."}),e.jsx("li",{children:"Once the installation is complete, open SolidWorks."}),e.jsx("li",{children:"Activate the SwoodUtils Add-in from the Add-ins menu."}),e.jsxs("li",{children:["Navigate to the ",e.jsx("span",{className:"highlight",children:"SwoodUtils"})," tab in the SolidWorks Command Manager and click on ",e.jsx("span",{className:"highlight",children:"Open SwoodUtils"})," to start using the tool."]}),e.jsx(i,{source:"./images/SwoodUtils/CommandManagerTabs.png",size:"250px"}),e.jsxs("li",{children:["When you run ",e.jsx("span",{className:"highlight",children:"SwoodUtils"})," for the first time, you’ll need to activate your license. Simply copy and paste the provided license key into the field shown below."]}),e.jsx(i,{source:"./images/SwoodUtils/ActivateLicense.png",size:"255px"})]})}),e.jsx(l,{id:"Licensing",title:"Licensing",children:e.jsxs(s,{variant:"body1",children:["SwoodUtils uses the same licensing scheme as the ",e.jsx("span",{className:"highlight",children:"SwoodEditor"}),", for more information click ",e.jsx(n,{to:"/SwoodLicensing",children:"here"})]})}),e.jsx(l,{id:"Workflow",title:"Workflow",children:e.jsxs("ol",{children:[e.jsx("li",{children:"Open the assembly containing the panels you want to assign IDs to."}),e.jsxs("li",{children:["Enable the SwoodUtils Add-in. Go to the Swood Utils Tab and click on ",e.jsx("span",{className:"highlight",children:"Open SwoodUtils"})]}),e.jsxs("li",{children:["Click the ",e.jsx("span",{className:"highlight",children:"Refresh Data"})," button to load models into SwoodUtils."]}),e.jsx("li",{children:"Once the data is loaded, SwoodUtils will automatically assign TempIDs to each panel based on your settings. These TempIDs act as a preview and are not yet saved to the model."}),e.jsxs("li",{children:["Review the assigned TempIDs, then click ",e.jsx("span",{className:"highlight",children:"Save TempIDs"})," to store them as custom properties."]}),e.jsx("li",{children:"Finally, save the assembly in SolidWorks."})]})}),e.jsxs(l,{id:"Controls",title:"Main Controls",children:[e.jsx(i,{source:"./images/SwoodUtils/Controls.png",size:"75px"}),e.jsxs(t,{children:[e.jsx(s,{variant:"h6",id:"RefreshData",children:"1. Refresh Data"}),e.jsx(s,{children:"Updates data from SolidWorks, typically used after adding new components to an assembly or switching the active model."}),e.jsx(s,{variant:"h6",id:"TempIDs",children:"2. Generate TempIDs"}),e.jsxs(s,{children:["Generates Temporary IDs for models, particularly useful after modifying custom properties. This process runs automatically after using ",e.jsx("span",{className:"highlight",children:"Refresh Data"}),"."]}),e.jsx(s,{variant:"h6",id:"SaveTempIDs",children:"3. Save TempIDs to Models"}),e.jsx(s,{children:"Stores the TempIDs as custom properties within the models."}),e.jsx(s,{variant:"h6",id:"RemoveIDs",children:"4. Remove IDs from Models"}),e.jsx(s,{children:"Deletes the ID custom properties from all models."}),e.jsx(s,{variant:"h6",id:"UpdateViewOrientation",children:"5. Update View Orientation"}),e.jsx(s,{children:'Reorients the view of models where the Front view is not normal to the Z-axis. This option is only applicable when using "CombineIdentical" and when the following warning appears on one or more panels.'}),e.jsx(i,{source:"./images/SwoodUtils/ViewOrientation.png",size:"200px"})]})]}),e.jsxs(l,{id:"Types",title:"Types of IDs",children:[e.jsx(s,{children:"SwoodUtils supports two ID schemas: Flat and Nested."}),e.jsxs(t,{className:"SubSection",children:[e.jsx(s,{variant:"h6",id:"Flat",children:"Flat IDs"}),e.jsx(s,{children:"Flat IDs assign sequential IDs to panels."}),e.jsx(i,{source:"./images/SwoodUtils/Flat.png",size:"500px"}),e.jsxs(s,{children:["Flat IDs also assign sequential IDs to Frames. To view the table below you must click on the ",e.jsx("span",{className:"highlight",children:"Assemblies"})," tab."]}),e.jsx(i,{source:"./images/SwoodUtils/FlatAssemblies.png",size:"350px"}),e.jsx(s,{variant:"h6",id:"Nested",children:"Nested IDs"}),e.jsx(i,{source:"./images/SwoodUtils/Nested.png",size:"500px"}),e.jsx(s,{children:"Nested IDs also assign sequential IDs, but includes a reference to the parent frame."})]})]}),e.jsxs(l,{id:"IDElements",title:"Elements of an ID",children:[e.jsx(s,{children:"IDs are constructed by combining various elements, the available elements are listed below."}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("span",{className:"Separator tooltip",children:"ID Separator"})}),e.jsx(s,{children:"A character or set of characters that separates the elements of an ID, typically a dot or dash."}),e.jsx("li",{children:e.jsx("span",{className:"TopCustomProperty tooltip",children:"Top-Level Custom Property"})}),e.jsx(s,{children:"Represents the custom property value of the top-level assembly. This element is optional."}),e.jsx("li",{children:e.jsx("span",{className:"CustomProperty tooltip",children:"Frame Custom Property"})}),e.jsx(s,{children:"Represents the custom property value of the frame. This element is optional."}),e.jsx("li",{children:e.jsx("span",{className:"FramePrefix tooltip",children:"Frame Prefix"})}),e.jsx(s,{children:"A fixed text value. This element is optional."}),e.jsx("li",{children:e.jsx("span",{className:"FrameID tooltip",children:"Frame ID"})}),e.jsx(s,{children:"Number or letter generated by SwoodUtils for each Frame."}),e.jsx("li",{children:e.jsx("span",{className:"Prefix tooltip",children:"Panel Prefix"})}),e.jsx(s,{children:"A fixed text value. This element is optional."}),e.jsx("li",{children:e.jsx("span",{className:"ModelID tooltip",children:"Panel ID"})}),e.jsx(s,{children:"Number generated by SwoodUtils for each Panel."})]})]}),e.jsxs(l,{id:"IDFormat",title:"Flat ID Format",children:[e.jsxs(t,{className:"SubSection",children:[e.jsx(s,{variant:"h5",children:"Panels"}),e.jsxs(t,{className:"SubSection",children:[e.jsx(s,{variant:"h6",gutterBottom:!0,children:"Elements Order"}),e.jsxs(s,{children:[e.jsx("span",{className:"TopCustomProperty tooltip",children:"«TopLevel Custom Property»"}),e.jsx("span",{className:"Separator tooltip",children:"«ID Separator»"}),e.jsx("span",{className:"Prefix tooltip",children:"«Panel Prefix»"}),e.jsx("span",{className:"ModelID tooltip",children:"«PanelID»"})]}),e.jsx(s,{variant:"h6",gutterBottom:!0,children:"Example"}),e.jsxs(s,{children:[e.jsx("span",{className:"TopCustomProperty tooltip",children:"Top Level"}),e.jsx("span",{className:"Separator tooltip",children:"."}),e.jsx("span",{className:"Prefix tooltip",children:"Panel-"}),e.jsx("span",{className:"ModelID tooltip",children:"1"})]}),e.jsxs(s,{children:[e.jsx("span",{className:"TopCustomProperty tooltip",children:"Top Level"}),e.jsx("span",{className:"Separator tooltip",children:"."}),e.jsx("span",{className:"Prefix tooltip",children:"Panel-"}),e.jsx("span",{className:"ModelID tooltip",children:"2"})]}),e.jsxs(s,{children:[e.jsx("span",{className:"TopCustomProperty tooltip",children:"Top Level"}),e.jsx("span",{className:"Separator tooltip",children:"."}),e.jsx("span",{className:"Prefix tooltip",children:"Panel-"}),e.jsx("span",{className:"ModelID tooltip",children:"3"})]}),e.jsx(s,{variant:"h6",gutterBottom:!0,children:"Example Settings"}),e.jsx(s,{children:"The following settings have been used in the previous example:"}),e.jsx(t,{className:"SubSection",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("span",{className:"TopCustomProperty tooltip",children:"TopLevel Custom Property"})," = Description"]}),e.jsxs("li",{children:[e.jsx("span",{className:"Separator tooltip",children:"ID Separator"})," = Dot character (.)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"Prefix tooltip",children:"Panel Prefix"})," = Panel-"]})]})}),e.jsx(i,{source:"./images/SwoodUtils/IDFormatFlatPart.png",size:"400px"})]})]}),e.jsxs(t,{className:"SubSection",children:[e.jsx(s,{variant:"h5",children:"Frames"}),e.jsxs(t,{className:"SubSection",children:[e.jsx(s,{variant:"h6",gutterBottom:!0,children:"Elements Order"}),e.jsxs(s,{children:[e.jsx("span",{className:"TopCustomProperty tooltip",children:"«TopLevel Custom Property»"}),e.jsx("span",{className:"Separator tooltip",children:"«ID Separator»"}),e.jsx("span",{className:"FramePrefix tooltip",children:"«Frame Prefix»"}),e.jsx("span",{className:"ModelID tooltip",children:"«Frame ID»"})]}),e.jsx(s,{variant:"h6",gutterBottom:!0,children:"Example"}),e.jsxs(s,{children:[e.jsx("span",{className:"TopCustomProperty tooltip",children:"Top Level"}),e.jsx("span",{className:"Separator tooltip",children:"."}),e.jsx("span",{className:"FramePrefix tooltip",children:"Frame-"}),e.jsx("span",{className:"ModelID tooltip",children:"A"})]}),e.jsxs(s,{children:[e.jsx("span",{className:"TopCustomProperty tooltip",children:"Top Level"}),e.jsx("span",{className:"Separator tooltip",children:"."}),e.jsx("span",{className:"FramePrefix tooltip",children:"Frame-"}),e.jsx("span",{className:"ModelID tooltip",children:"B"})]}),e.jsxs(s,{children:[e.jsx("span",{className:"TopCustomProperty tooltip",children:"Top Level"}),e.jsx("span",{className:"Separator tooltip",children:"."}),e.jsx("span",{className:"FramePrefix tooltip",children:"Frame-"}),e.jsx("span",{className:"ModelID tooltip",children:"C"})]}),e.jsx(s,{variant:"h6",gutterBottom:!0,children:"Example Settings"}),e.jsx(s,{children:"The following settings have been used in the previous example:"}),e.jsx(t,{className:"SubSection",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("span",{className:"TopCustomProperty tooltip",children:"TopLevel Custom Property"})," = Description"]}),e.jsxs("li",{children:[e.jsx("span",{className:"Separator tooltip",children:"ID Separator"})," = Dot character (.)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"FramePrefix tooltip",children:"Frame Prefix"})," = Frame-"]})]})}),e.jsx(i,{source:"./images/SwoodUtils/IDFormatFlatAssembly.png",size:"400px"})]})]})]}),e.jsx(l,{id:"IDFormatNested",title:"Nested ID Format",children:e.jsxs(t,{className:"SubSection",children:[e.jsx(s,{variant:"h6",gutterBottom:!0,children:"Elements Order"}),e.jsxs(s,{children:[e.jsx("span",{className:"TopCustomProperty tooltip",children:"«TopLevel Custom Property»"}),e.jsx("span",{className:"Separator tooltip",children:"«ID Separator»"}),e.jsx("span",{className:"CustomProperty tooltip",children:"«Frame Custom Property»"}),e.jsx("span",{className:"Separator tooltip",children:"«ID Separator»"}),e.jsx("span",{className:"FramePrefix tooltip",children:"«Frame Prefix»"}),e.jsx("span",{className:"FrameID tooltip",children:"«Frame ID»"}),e.jsx("span",{className:"Separator tooltip",children:"«ID Separator»"}),e.jsx("span",{className:"Prefix tooltip",children:"«Panel Prefix»"}),e.jsx("span",{className:"ModelID tooltip",children:"«PanelID»"})]}),e.jsx(s,{variant:"h6",gutterBottom:!0,children:"Example"}),e.jsxs(s,{children:[e.jsx("span",{className:"TopCustomProperty tooltip",children:"Top Level"}),e.jsx("span",{className:"Separator tooltip",children:"."}),e.jsx("span",{className:"CustomProperty tooltip",children:"Drawer Cabinet"}),e.jsx("span",{className:"Separator tooltip",children:"."}),e.jsx("span",{className:"FramePrefix tooltip",children:"Frame-"}),e.jsx("span",{className:"FrameID tooltip",children:"A"}),e.jsx("span",{className:"Separator tooltip",children:"."}),e.jsx("span",{className:"Prefix tooltip",children:"Panel-"}),e.jsx("span",{className:"ModelID tooltip",children:"1"})]}),e.jsxs(s,{children:[e.jsx("span",{className:"TopCustomProperty tooltip",children:"Top Level"}),e.jsx("span",{className:"Separator tooltip",children:"."}),e.jsx("span",{className:"CustomProperty tooltip",children:"Drawer Cabinet"}),e.jsx("span",{className:"Separator tooltip",children:"."}),e.jsx("span",{className:"FramePrefix tooltip",children:"Frame-"}),e.jsx("span",{className:"FrameID tooltip",children:"A"}),e.jsx("span",{className:"Separator tooltip",children:"."}),e.jsx("span",{className:"Prefix tooltip",children:"Panel-"}),e.jsx("span",{className:"ModelID tooltip",children:"2"})]}),e.jsxs(s,{children:[e.jsx("span",{className:"TopCustomProperty tooltip",children:"Top Level"}),e.jsx("span",{className:"Separator tooltip",children:"."}),e.jsx("span",{className:"CustomProperty tooltip",children:"Drawer Cabinet"}),e.jsx("span",{className:"Separator tooltip",children:"."}),e.jsx("span",{className:"FramePrefix tooltip",children:"Frame-"}),e.jsx("span",{className:"FrameID tooltip",children:"A"}),e.jsx("span",{className:"Separator tooltip",children:"."}),e.jsx("span",{className:"Prefix tooltip",children:"Panel-"}),e.jsx("span",{className:"ModelID tooltip",children:"3"})]}),e.jsx(s,{variant:"h6",gutterBottom:!0,children:"Example Settings"}),e.jsx(s,{children:"The following settings have been used in the previous example:"}),e.jsx(t,{className:"SubSection",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("span",{className:"TopCustomProperty tooltip",children:"TopLevel Custom Property"})," = Description"]}),e.jsxs("li",{children:[e.jsx("span",{className:"Separator tooltip",children:"ID Separator"})," = Dot character (.)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"CustomProperty tooltip",children:"Frame Custom Property"})," = Description"]}),e.jsxs("li",{children:[e.jsx("span",{className:"FramePrefix tooltip",children:"Frame Prefix"})," = Frame-"]}),e.jsxs("li",{children:[e.jsx("span",{className:"Prefix tooltip",children:"Panel Prefix"})," = Panel-"]})]})}),e.jsx(i,{source:"./images/SwoodUtils/IDFormat.png",size:"400px"})]})}),e.jsxs(l,{id:"Property",title:"ID Custom Property",children:[e.jsxs(s,{children:["Clicking ",e.jsx("span",{className:"highlight",children:"Save TempIDs to Models"})," will save all ",e.jsx("span",{className:"highlight",children:"TempIDs"})," to the models under the custom property ",e.jsx("span",{className:"highlight",children:"ID"}),"."]}),e.jsxs(s,{children:["When using Nested IDs, the Frame TempID will also be saved to all panels under the custom property ",e.jsx("span",{className:"highlight",children:"ParentID"}),"."]}),e.jsxs(s,{children:["For legacy reasons, ",e.jsx("span",{className:"highlight",children:"TempIDs"})," will additionally be saved to the custom property ",e.jsx("span",{className:"highlight",children:"PanelID"})," for panels, and ",e.jsx("span",{className:"highlight",children:"FrameID"})," for frames. ",e.jsx("span",{className:"Red",children:"This workflow is now deprecated and should be avoided."})]})]}),e.jsxs(l,{id:"Colours",title:"Table Row Colours",children:[e.jsx(s,{children:"Rows are colour coded to easily identify the different types of components. See example below for legend."}),e.jsx(i,{source:"./images/SwoodUtils/Colours.png",size:"350px"}),e.jsx(t,{className:"SubSection",children:e.jsxs("ol",{children:[e.jsx("li",{children:"Frame Component"}),e.jsx("li",{children:"Uncategorised Model"}),e.jsx("li",{children:"Panel Component"}),e.jsx("li",{children:"SubFrame Component"}),e.jsx("li",{children:'Model Excluded by Custom Property: Exclude = "Yes". This also applies to the Swood Material Extended Property Exclude'}),e.jsx("li",{children:'Model Excluded by Custom Property: ExcludeID = "Yes". This also applies to the Swood Material Extended Property ExcludeID'}),e.jsx("li",{children:"Suppressed Component"}),e.jsx("li",{children:"Hardware Component"})]})})]}),e.jsx(l,{id:"WarningIcons",title:"Warning Icons",children:e.jsxs(t,{className:"SubSection",children:[e.jsxs(t,{style:{display:"flex",alignItems:"center"},children:[e.jsx(s,{variant:"h6",children:"ID Mismatch"}),e.jsx("img",{src:"./images/SwoodUtils/IDMismatch.png",style:{display:"inline",marginLeft:"15px",borderRadius:"50%",height:"50px"}})]}),e.jsx(s,{children:"This warning indicates that there is at least one mismatch between the TempID and the assigned ID for the component. See the example below."}),e.jsx(i,{source:"./images/SwoodUtils/IDMismatchTable.png",size:"300px"}),e.jsxs(t,{style:{display:"flex",alignItems:"center"},children:[e.jsx(s,{variant:"h6",children:"Duplicate IDs"}),e.jsx("img",{src:"./images/SwoodUtils/IDDuplicate.png",style:{display:"inline",marginLeft:"15px",borderRadius:"50%",height:"50px"}})]}),e.jsx(s,{children:"This warning indicates that there is at least one duplicate ID in the components. See the example below."}),e.jsx(i,{source:"./images/SwoodUtils/IDDuplicateTable.png",size:"300px"})]})}),e.jsxs(l,{id:"CustomProperties",title:"How to Modify Custom Properties",children:[e.jsxs(s,{children:["Custom Properties of models can be modified by double clicking on the value of the table, making the change, and then clicking on the ",e.jsx("span",{className:"highlight",children:"Update"})," button. Multiple values can be edited before clicking the ",e.jsx("span",{className:"highlight",children:"Update"})," button."]}),e.jsx(i,{source:"./images/SwoodUtils/ChangeCustomProperty.gif",size:"400px"}),e.jsx(s,{children:"Only the following Custom Properties can be modified:"}),e.jsx(t,{className:"SubSection",children:e.jsxs("ul",{children:[e.jsx("li",{children:"ID"}),e.jsx("li",{children:"Description"}),e.jsx("li",{children:"Frame"}),e.jsx("li",{children:"SubFrame"}),e.jsx("li",{children:"Hardware"}),e.jsx("li",{children:"Excluded"}),e.jsx("li",{children:"ExcludedID"})]})})]}),e.jsx(l,{id:"AppSettings",title:"App Settings",children:e.jsxs(t,{className:"SubSection",children:[e.jsx(s,{variant:"h6",children:"Automatic Refresh"}),e.jsx(s,{children:"Automatically update the data when changes are made to the active SolidWorks model."}),e.jsx(s,{variant:"h6",children:"Confirmation prompt when Adding IDs"}),e.jsx(s,{children:"Display a confirmation prompt when adding IDs."}),e.jsx(s,{variant:"h6",children:"Confirmation prompt when Deleting IDs"}),e.jsx(s,{children:"Display a confirmation prompt when deleting existing IDs."}),e.jsx(s,{variant:"h6",children:"Dark Mode"}),e.jsx(s,{children:"Switch between light and dark theme."})]})}),e.jsx(l,{id:"IDSettings",title:"ID Settings",children:e.jsxs(t,{className:"SubSection",children:[e.jsx(s,{variant:"h6",children:"Nested IDs"}),e.jsx(s,{children:"Select between Nested or Flat IDs."}),e.jsx(s,{variant:"h6",children:"Persistent IDs"}),e.jsx(s,{children:"Retains the current panel ID instead of replacing it. This option is available for Flat IDs only."}),e.jsxs(s,{children:[e.jsx("span",{className:"highlight",style:{fontWeight:"bold"},children:"Persistent ID Disabled:"})," ","TempIDs are generated without considering the existing IDs."]}),e.jsx(i,{source:"./images/SwoodUtils/PersistentOff.png",size:"350px"}),e.jsxs(s,{children:[e.jsx("span",{className:"highlight",style:{fontWeight:"bold"},children:"Persistent ID Enabled:"})," ","Panels with existing IDs retain their original values (1, 3, 5). Panels without IDs are assigned the next available IDs (6, 7)."]}),e.jsx(i,{source:"./images/SwoodUtils/PersistentOn.png",size:"350px"}),e.jsx(s,{variant:"h6",children:"Reuse IDs"}),e.jsx(s,{children:"Reassigns IDs that have not been used. This option is available for Flat IDs only."}),e.jsxs(s,{children:[e.jsx("span",{className:"highlight",style:{fontWeight:"bold"},children:"Reuse IDs Disabled:"})," ","Panels with existing IDs retain their original values (1, 3, 5). Panels without IDs are assigned the next available IDs (6, 7)."]}),e.jsx(i,{source:"./images/SwoodUtils/PersistentOn.png",size:"350px"}),e.jsxs(s,{children:[e.jsx("span",{className:"highlight",style:{fontWeight:"bold"},children:"Reuse IDs Enabled:"})," ","Panels with existing IDs retain their original values (1, 3, 5). Panels without IDs are assigned the unused IDs (2, 4)."]}),e.jsx(i,{source:"./images/SwoodUtils/PersistentOnReuse.png",size:"350px"}),e.jsx(s,{variant:"h6",children:"Combine Identical"}),e.jsx(s,{children:"This feature consolidates identical panels by evaluating their geometry, material, edgebands, laminates, and grain direction, assigning a shared ID to all matching panels."}),e.jsx(s,{children:"Additionally, combined panels are marked with a distinct icon for easy identification in the list."}),e.jsx(i,{source:"./images/SwoodUtils/CombinedPanels.png",size:"350px"}),e.jsx(s,{variant:"h6",children:"Order Type"}),e.jsx(s,{children:"Specifies how IDs are ordered:"}),e.jsxs("ul",{className:"SubSection",children:[e.jsx("li",{children:"None: Random order (fastest method)"}),e.jsx("li",{children:"SortSettings: Order IDs based on model custom properties, such as Thickness or Length or Material"}),e.jsx("li",{children:"FeatureTreeOrder: Follows the feature tree order (slower method)"})]}),e.jsx(s,{children:"The order can also be manually changed by dragging and dropping the rows. See example below."}),e.jsx(i,{source:"./images/SwoodUtils/Reorder.gif",size:"350px"}),e.jsx(s,{variant:"h6",children:"ID Separator"}),e.jsx(s,{children:"A character or set of characters that separates the elements of an ID, typically a dot or dash."}),e.jsx(s,{variant:"h6",children:"Frame Alpha ID"}),e.jsx(s,{children:"Uses letters for Frame IDs instead of numbers."}),e.jsx(s,{variant:"h6",children:"Frame Starting ID"}),e.jsx(s,{children:"Specifies the starting value for Frame IDs."}),e.jsx(s,{variant:"h6",children:"Frame Increment Value"}),e.jsx(s,{children:"Value used to increment Frame IDs."}),e.jsx(s,{variant:"h6",children:"Frame ID Format"}),e.jsx(s,{children:"Defines the format for numeric Frame IDs."}),e.jsx(s,{variant:"h6",children:"Frame Fixed Prefix"}),e.jsx(s,{children:"Fixed prefix added to all Frame IDs."}),e.jsx(s,{variant:"h6",children:"Frame Sort Order"}),e.jsx(s,{children:"Specifies the order used to sort the feature tree. Only visible when Order Type = SortSettings"}),e.jsx(s,{variant:"h6",children:"Panel Starting ID"}),e.jsx(s,{children:"Specifies the starting value for Panel IDs."}),e.jsx(s,{variant:"h6",children:"Panel Increment Value"}),e.jsx(s,{children:"Value used to increment Panel IDs."}),e.jsx(s,{variant:"h6",children:"Panel ID Format"}),e.jsx(s,{children:"Defines the format for numeric Panel IDs."}),e.jsx(s,{variant:"h6",children:"Panel Fixed Prefix"}),e.jsx(s,{children:"Fixed prefix added to all Panel IDs."}),e.jsx(s,{variant:"h6",children:"Panel Sort Order"}),e.jsx(s,{children:"Specifies the order used to sort the panel list. Only visible when Order Type = SortSettings"}),e.jsx(s,{variant:"h6",children:"Top-Level Property Prefix"}),e.jsx(s,{children:"Custom property name from TopLevel to be used as a prefix."}),e.jsx(s,{variant:"h6",children:"Frame Level Property Prefix"}),e.jsx(s,{children:"Custom property name from Frame to be used as a prefix."})]})}),e.jsxs(l,{id:"CopySettings",title:"Copy Settings between Users",children:[e.jsx(s,{children:"Settings are stored locally on each machine, they cannot be placed on a server."}),e.jsxs(s,{children:["To share settings between users, simply copy the files in ",e.jsx("span",{className:"highlight",children:"C:\\ProgramData\\Solid Solutions\\SwoodUtils"})," and paste them into the same directory on the second user's system."]})]}),e.jsx(l,{id:"KnownBugs",title:"Known Bugs",children:e.jsx(t,{className:"SubSection",children:e.jsx("ul",{children:e.jsx("li",{children:"Unable to manually change the feature tree order by dragging and dropping the rows."})})})}),e.jsxs(l,{id:"FutureDevelopment",title:"Future Development",children:[e.jsx(s,{children:"Here is a list of ideas/feature that have been considered for future development:"}),e.jsx(t,{className:"SubSection",children:e.jsxs("ul",{children:[e.jsx("li",{children:'Integrate SwoodUtils into the SolidWorks Task Pane with a simplified interface, with the option to "Pop Out" into a separate window for full functionality.'}),e.jsx("li",{children:"Enable persistent IDs for nested components."}),e.jsx("li",{children:"Ability to copy settings between users through the UI."}),e.jsx("li",{children:"Ability to save settings to a server."}),e.jsx("li",{children:"Provide the capability to generate consecutive IDs globally using a database."}),e.jsx("li",{children:"Add a button to run the Swood Report."})]})})]})]});export{m as default};
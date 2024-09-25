import { Typography, ListItemText, List, ListItem, Box } from '@mui/material'
import { ImageComponent } from '../../components/ImageComponent'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'
import { SectionCard } from '../../components/SectionCard'

const SwoodServer = () => {
	return (
		<>
			<PageTitle title="SwoodServer" premium={true} beta={true} />

			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#ProblemsAddressed">Problems Addressed</a>
					</li>
					<li>
						<a href="#Features">Features</a>
					</li>
					<li>
						<a href="#PotentialCapabilities">Potential Capabilities</a>
					</li>
					<li>
						<a href="#Requirements">Requirements</a>
					</li>
					<li>
						<a href="#SetupRequirements">Setup Requirements</a>
					</li>
					<li>
						<a href="#Architecture">SwoodServer Architecture</a>
					</li>
					<li>
						<a href="#WebApps">Popular Web Apps made with MERN</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>SwoodServer is a powerful tool designed to streamline production workflows, enhance collaboration, and provide real-time insights for manufacturing operations. Acting as a centralized hub, SwoodServer integrates multiple departments and systems, offering an efficient and scalable solution for managing complex production environments.</Typography>
			</Section>

			<Section id="ProblemsAddressed" title="Problems Addressed">
				<Typography>SwoodServer tackles a variety of challenges faced by woodworking manufacturers, particularly in digitizing production data and reducing reliance on outdated, paper-based processes. By offering real-time transparency into job statuses, it promotes a more organized and efficient workflow.</Typography>
				<List>
					<ListItem>
						<ListItemText primary="Non-Modifiable Reports" secondary="Currently, once the Swood Report is generated, it cannot be altered. Manufacturers often need to add notes or make adjustments after the fact, but this is not possible. Some clients resort to using Excel-based reports, which are easier to modify but pose limitations in team collaboration." />
					</ListItem>
					<ListItem>
						<ListItemText primary="Replacing Paper-Based Processes" secondary="Many manufacturers still rely on printed reports to track production, manually marking off panels that have been manufactured. This method lacks traceability and does not provide a clear, real-time overview of the production progress." />
					</ListItem>
					<ListItem>
						<ListItemText primary="Limited Collaboration Across Departments" secondary="Without a centralized digital system, departments like production planning, manufacturing, and quality control may struggle to collaborate effectively, leading to miscommunication and delayed responses." />
					</ListItem>
					<ListItem>
						<ListItemText primary="Difficulty in Managing Material Inventory" secondary="Paper-based systems make it challenging to accurately track material usage and manage inventory, leading to overstocking, understocking, or material shortages that can disrupt production." />
					</ListItem>
					<ListItem>
						<ListItemText primary="Lack of Data-Driven Decision Making" secondary="In the absence of real-time insights and centralized data, manufacturers may struggle to make data-driven decisions to optimize production efficiency, address issues, or improve planning." />
					</ListItem>
				</List>
			</Section>

			<Section id="Features" title="Features">
				<List>
					<ListItem>
						<ListItemText primary="Mark Items as Completed" secondary="Quick access SwoodReports to mark specific items, such as panels, programs, or sheets, as completed." />
					</ListItem>
					<ImageComponent source="./images/SwoodServer/MarkAsComplete.gif" size="400px" />

					<ListItem>
						<ListItemText primary="Add Comments to Items" secondary="Add comments visible to all team members on individual items like panels, programs, sheets, or even entire projects." />
					</ListItem>
					<ImageComponent source="./images/SwoodServer/AddComment.gif" size="400px" />

					<ListItem>
						<ListItemText primary="Role-Based Access and Permissions" secondary="SwoodServer requires all users to log in into the Portal. this enables administrators to assign role-specific access levels and permissions, ensuring that users can only access the tools and information relevant to their role." />
					</ListItem>

					<ImageComponent source="./images/SwoodServer/login.png" size="500px" />

					<ListItem>
						<ListItemText primary="Project Classification" secondary="Projects are categorized into three main sections: Under Review, Active Projects, and Archived Projects." />
					</ListItem>

					<Box
						sx={{
							display: 'grid',
							gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
							gap: 2,
							justifyContent: 'center',
						}}
					>
						<SectionCard title="Under Review" content="New projects are placed in this section for evaluation before they are released to manufacturing. Visibility can be restricted from the shop floor to prevent unapproved projects from being produced." />

						<SectionCard title="Active Projects" content="This section displays approved projects ready for manufacturing. The shop floor can easily see what needs to be processed and addressed." />

						<SectionCard title="Archived Projects" content="Completed projects are stored here for record-keeping, ensuring a comprehensive history of past work." />
					</Box>
					<ListItem>
						<ListItemText secondary="The example below demonstrates how projects are transitioned between these sections. It also shows how three different users interact with the SwoodServer Portal in real-time." />
					</ListItem>

					<ImageComponent source="./images/SwoodServer/SwoodServerProjects.gif" size="500px" />

					<ListItem>
						<ListItemText
							primary="Real-Time Tracking"
							secondary="SwoodServer provides real-time status updates on production orders, enabling managers and operators to monitor progress, quickly identify bottlenecks, and make informed decisions. This leads to greater production efficiency and improved overall responsiveness. The example below illustrates how changes made on one client machine are instantly reflected on other connected machines, ensuring that all users see the most up-to-date information. Additionally, any changes are also reflected on the Project Stats page for a comprehensive view of project's progress."
						/>
					</ListItem>
					<ImageComponent source="./images/SwoodServer/SwoodServer.gif" size="600px" />

					<ListItem>
						<ListItemText primary="Enhanced Collaboration" secondary="The platform fosters better collaboration between departments such as production planning, manufacturing, and maintenance. By centralizing job-related data, SwoodServer ensures that teams are aligned on priorities and timelines, reducing miscommunication and delays." />
					</ListItem>

					<ListItem>
						<ListItemText primary="Project Statistics" secondary="Visualize the progress of the project and the different items, panels, programs, frames, etc." />
					</ListItem>
					<ImageComponent source="./images/SwoodServer/statistics.png" size="600px" />

					<ListItem>
						<ListItemText primary="Track User Activity" secondary="Gain full visibility into user actions, including who performed the action, what changes were made, and when they occurred. This feature enables better accountability, improves traceability, and helps identify inefficiencies or errors in the workflow. Additionally, it can be useful for audits and ensuring compliance with production protocols." />
					</ListItem>
				</List>
			</Section>

			<Section id="PotentialCapabilities" title="Potential Capabilities">
				<Typography>The following is a list of potential features that could be implemented with further development.</Typography>
				<List>
					<ListItem>
						<ListItemText primary="ERP System Integration" secondary="SwoodServer may connect to external ERP systems, enabling seamless data flow between production management and enterprise resource planning." />
					</ListItem>
					<ListItem>
						<ListItemText primary="Swood Center Services Integration" secondary="With the aim of fully integrating with the SWOOD ecosystem, SwoodServer may be capable of connecting with a Swood Center Services to automatically generate new models and reports of common library elements." />
					</ListItem>
					<ListItem>
						<ListItemText primary="Material Management" secondary="SwoodServer may include a robust material management feature, allowing teams to track material usage and manage inventory, reducing excess stock and optimizing resources." />
					</ListItem>
					<ListItem>
						<ListItemText primary="Swood Material Database Integration" secondary="The platform may integrate with the Swood Materials Database, ensuring up-to-date information on material specifications and availability." />
					</ListItem>
					<ListItem>
						<ListItemText primary="Mark Parts for Rework" secondary="Possible ability to easily flag parts for rework and generate a new nesting project based on these items. This feature streamlines the rework process, allowing for seamless reintegration into the production workflow, ensuring controlled and efficient handling of reworked components." />
					</ListItem>
					<ListItem>
						<ListItemText primary="Panel Progress Tracking" secondary="SwoodServer may use of barcode labels and scanners to track panel progress throughout the production process, improving visibility and accountability." />
					</ListItem>
					<ListItem>
						<ListItemText primary="Use Barcodes to mark Processed Panels" secondary="SwoodServer may leverage barcode labels and scanners to monitor panels throughout the production process." />
					</ListItem>

					<ListItem>
						<ListItemText primary="Combine Reports" secondary="Merge multiple reports into a single comprehensive document to obtain a consolidated view of total quantities. This feature simplifies the reporting process, providing a clear summary across multiple projects or production runs." />
					</ListItem>
				</List>
			</Section>

			<Section id="SetupRequirements" title="Setup Requirements">
				<Typography>SwoodServer operates similarly to an intranet, meaning it requires installation on a Windows Server machine that client machines can access via a network. A SwoodServer installer will be provided, which must be executed on the server. This installer will set up the backend applications and the database necessary for the system.</Typography>
				<Typography>Client machines must have network or VPN access to the server and use Google Chrome to interact with SwoodServer. Additionally, the SwoodServer Portal is accessible from mobile devices, including iPads.</Typography>
			</Section>

			<Section id="Architecture" title="SwoodServer Architecture">
				<Typography>SwoodServer uses the MERN Stack architecture, which is a JavaScript Stack that is used for easier and faster deployment of full-stack web applications. MERN Stack comprises four technologies namely MongoDB, Express, React, and Node.js. It is designed to make the development process smoother and easier. The MERN architecture allows us to easily construct a 3-tier architecture (frontend, backend, database) entirely using JavaScript and JSON.</Typography>

				<ImageComponent source="./images/SwoodServer/mern.png" size="250px" />

				<List>
					<ListItem>
						<ListItemText primary="MongoDB" secondary="MongoDB is a NoSQL database in which data is stored in documents that consist of key-value pairs. The data is not stored in the form of tables and that’s how it differs from other database programs." />
					</ListItem>
					<ListItem>
						<ListItemText primary="Express" secondary="Express is a flexible and clean Node.js web application framework. Express helps build the backend very easily while staying in the JavaScript ecosystem. In the MERN stack, Express will be used as the backend API server which interacts with the MongoDB database to serve data to client (React) applications." />
					</ListItem>
					<ListItem>
						<ListItemText primary="React" secondary="React is an open-source JavaScript library that is used for building user interfaces specifically for SPA (Single Page Applications). SPA means rendering the entire website on one page rather than different pages of the websites. React lets you build complex interfaces through simple Components, connect them to data on your backend server, and render them as HTML" />
					</ListItem>
					<ListItem>
						<ListItemText primary="NodeJS" secondary="NodeJS is a cross-platform JavaScript runtime environment, it’s built on Chrome’s V8 engine to run JavaScript code outside the browser, to easily building fast and scalable applications. The main purpose of NodeJS is simple, it allows us to write our backend in JavaScript, saving us the trouble of learning a new programming language capable of running the backend." />
					</ListItem>
				</List>
			</Section>

			<Section id="WebApps" title="Popular Web Apps made with MERN">
				<Typography>
					<ul>
						<li>Facebook</li>
						<li>Instagram</li>
						<li>Twitter</li>
						<li>Airbnb</li>
						<li>Netflix</li>
						<li>Amazon</li>
						<li>WhatsApp</li>
						<li>eBay</li>
						<li>Trello</li>
						<li>Udemy</li>
						<li>WordPress</li>
					</ul>
				</Typography>
			</Section>
		</>
	)
}

export default SwoodServer

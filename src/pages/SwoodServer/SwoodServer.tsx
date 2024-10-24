import { Typography, ListItemText, List, ListItem, Box } from '@mui/material'
import { ImageComponent } from '../../components/ImageComponent'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'
import { SectionCard } from '../../components/SectionCard'
import { SwoodReportTag, SwoodTag } from '../../components/NameTags'

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
						<a href="#KeyFeatures">Key features</a>
					</li>
					<li>
						<a href="#ChallengesAddressed">Challenges addressed</a>
					</li>
					<li>
						<a href="#PotentialCapabilities">Potential capabilities</a>
					</li>
					<li>
						<a href="#Requirements">Requirements</a>
					</li>
					<li>
						<a href="#Architecture">SwoodServer architecture</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>
					<span className="highlight">SwoodServer</span> is a comprehensive production management solution designed specifically for woodworking manufacturers. It serves as a centralized hub that enhances the efficiency and transparency of production workflows by seamlessly integrating multiple departments and systems.
				</Typography>
				<Typography>
					At its core, <span className="highlight">SwoodServer</span> addresses the pressing need for digitization in the manufacturing process. By transitioning from traditional paper-based workflows to a robust digital platform, <span className="highlight">SwoodServer</span> empowers manufacturers to streamline operations, reduce errors, and improve collaboration across teams.
				</Typography>
				<Typography>
					With real-time data visibility, <span className="highlight">SwoodServer</span> enables manufacturers to monitor job statuses, track inventory levels, and manage production schedules more effectively. The platform's intuitive interface ensures that team members can quickly access the information they need, promoting accountability and enhancing productivity throughout the organization.
				</Typography>
				<Typography>
					In addition to improving operational efficiency, <span className="highlight">SwoodServer</span> facilitates better decision-making by providing actionable insights derived from real-time analytics. This data-driven approach allows manufacturers to identify trends, optimize resource allocation, and proactively address potential issues before they escalate.
				</Typography>
				<Typography>
					Overall, <span className="highlight">SwoodServer</span> is not just a tool; it's a transformative solution that helps woodworking manufacturers thrive in an increasingly competitive landscape. By embracing <span className="highlight">SwoodServer</span>, businesses can position themselves for growth, innovation, and enhanced customer satisfaction.
				</Typography>
			</Section>

			<Section id="KeyFeatures" title="Key features">
				<List>
					<ListItem>
						<ListItemText
							primary="Main Portal"
							secondary={
								<>
									The <span className="highlight">SwoodServer</span> provides a <span className="highlight">Main Portal</span> which serves as the central access point for all projects, offering a comprehensive overview and quick navigation to their corresponding <SwoodReportTag />. This streamlined interface enhances user experience by allowing team members to efficiently manage and monitor project statuses at a glance.
								</>
							}
						/>
					</ListItem>
					<ImageComponent source="./images/SwoodServer/SwoodServerHome.png" size="1200px" />

					<ListItem>
						<ListItemText primary="Project Classification" secondary={<>Projects are categorized into three main sections: Under Review, Active Projects, and Archived Projects. This classification streamlines project management and enhances visibility across the production pipeline.</>} />
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
						<ListItemText
							secondary={
								<>
									The following example illustrates the transition of projects between different categories. It also highlights how three distinct users interact with the <span className="highlight">SwoodServer Portal</span> in real-time.
								</>
							}
						/>
					</ListItem>

					<Box
						display="flex"
						justifyContent="center"
						className="imageBox"
						sx={{
							display: 'grid',
							gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
							gap: 2,
							justifyContent: 'center',
						}}
					>
						<img
							src="./images/SwoodServer/SwoodServerProjects.gif"
							style={{
								height: '500px',
								width: '340px',
								objectFit: 'cover', // 'cover' will crop the image, 'contain' will fit the image within the box
								objectPosition: 'left', // Center the image within the box
							}}
						/>
						<img
							src="./images/SwoodServer/SwoodServerProjects.gif"
							style={{
								height: '500px',
								width: '340px',
								objectFit: 'cover', // 'cover' will crop the image, 'contain' will fit the image within the box
								objectPosition: 'center', // Center the image within the box
							}}
						/>
						<img
							src="./images/SwoodServer/SwoodServerProjects.gif"
							style={{
								height: '500px',
								width: '340px',
								objectFit: 'cover', // 'cover' will crop the image, 'contain' will fit the image within the box
								objectPosition: 'right', // Center the image within the box
							}}
						/>
					</Box>

					<ListItem>
						<ListItemText primary="Project Statistics" secondary={<>Gain insights into the project's progress through detailed visualizations of various components, including panels, programs, and frames. This feature enables users to track performance metrics, identify trends, and make informed decisions to optimize production workflows.</>} />
					</ListItem>
					<ImageComponent source="./images/SwoodServer/statistics.png" size="600px" />

					<ListItem>
						<ListItemText
							primary="Role-Based Access and Permissions"
							secondary={
								<>
									<span className="highlight">SwoodServer</span> requires all users to log into the Portal, enabling administrators to assign role-specific access levels and permissions. This ensures that users can only access the tools and information relevant to their role, enhancing security and focus.
								</>
							}
						/>
					</ListItem>
					<ImageComponent source="./images/SwoodServer/login.png" size="400px" />

					<ListItem>
						<ListItemText primary="Mark Items as Completed" secondary={<>Quickly access SwoodReports to mark specific items, such as panels, programs, or sheets, as completed. This feature ensures accurate tracking of manufacturing progress and enhances accountability among team members. Items can be marked manually or using a barcode scanner.</>} />
					</ListItem>

					<ImageComponent source="./images/SwoodServer/MarkAsComplete.gif" size="1000px" />

					<ListItem>
						<ListItemText primary="Add Comments to Items" secondary={<>Add comments visible to all team members on individual items like panels, programs, sheets, or entire projects. This fosters real-time communication, improving collaboration and project transparency.</>} />
					</ListItem>
					<ImageComponent source="./images/SwoodServer/AddComment.gif" size="1000px" />

					<ListItem>
						<ListItemText
							primary="Real-Time Tracking"
							secondary={
								<>
									<span className="highlight">SwoodServer</span> provides real-time status updates on projects, enabling managers and operators to monitor progress, quickly identify bottlenecks, and make informed decisions. This leads to greater production efficiency and improved overall responsiveness.
								</>
							}
						/>
					</ListItem>
					<ListItem>
						<ListItemText secondary={<>The example below illustrates how changes made on one client machine are instantly reflected on other connected machines, ensuring that all users see the most up-to-date information. Additionally, any changes are also reflected on the Project Stats page for a comprehensive view of project's progress.</>} />
					</ListItem>
					<ImageComponent source="./images/SwoodServer/SwoodServer.gif" size="1200px" />

					<ListItem>
						<ListItemText
							primary="Mobile Access to Project Data and Reports"
							secondary={
								<>Empower your team with the ability to access comprehensive production data and reports directly from mobile devices, such as tablets. This feature enhances mobility, enabling users to navigate the shop floor while maintaining full visibility into project statuses, production metrics, and essential reports. With real-time data at their fingertips, users can make informed decisions, respond quickly to changes, and collaborate effectively, all while on the move.</>
							}
						/>
					</ListItem>

					<ListItem>
						<ListItemText primary="Track User Activity" secondary={<>Gain full visibility into user actions, including who performed the action, what changes were made, and when they occurred. This feature enables better accountability, improves traceability, and helps identify inefficiencies or errors in the workflow. Additionally, it can be useful for audits and ensuring compliance with production protocols.</>} />
					</ListItem>
				</List>
			</Section>

			<Section id="ChallengesAddressed" title="Challenges addressed">
				<Typography>
					<span className="highlight">SwoodServer</span> tackles a variety of challenges faced by woodworking manufacturers, particularly in digitizing production data and reducing reliance on outdated, paper-based processes. By offering real-time transparency into job statuses, it promotes a more organized and efficient workflow.
				</Typography>
				<List>
					<ListItem>
						<ListItemText
							primary="Non-Modifiable Reports"
							secondary={
								<>
									Currently, once the <SwoodReportTag /> is generated, it cannot be altered. Manufacturers often need to add notes or make adjustments after the fact, but this is not possible. Some clients resort to using spreadsheet-based reports, which are easier to modify but pose limitations in team collaboration.
								</>
							}
						/>
					</ListItem>
					<ListItem>
						<ListItemText primary="Replacing Paper-Based Processes" secondary={<>Many manufacturers still rely on printed reports to track production, manually marking off panels that have been manufactured. This method lacks traceability and does not provide a clear, real-time overview of the production progress.</>} />
					</ListItem>
					<ListItem>
						<ListItemText primary="Limited Collaboration Across Departments" secondary={<>Without a centralized digital system, departments like production planning, manufacturing, picking, and quality control may struggle to collaborate effectively, leading to miscommunication and delayed responses.</>} />
					</ListItem>
					<ListItem>
						<ListItemText primary="Difficulty in Managing Material Inventory" secondary={<>Paper-based systems make it challenging to accurately track material usage and manage inventory, leading to overstocking, understocking, or material shortages that can disrupt production.</>} />
					</ListItem>
					<ListItem>
						<ListItemText primary="Lack of Data-Driven Decision Making" secondary={<>In the absence of real-time insights and centralized data, manufacturers may struggle to make data-driven decisions to optimize production efficiency, address issues, or improve planning.</>} />
					</ListItem>
				</List>
			</Section>

			<Section id="PotentialCapabilities" title="Potential capabilities">
				<Typography>The following is a list of potential features that could be implemented with further development. Future enhancements may include:</Typography>
				<List>
					<ListItem>
						<ListItemText
							primary="ERP System Integration"
							secondary={
								<>
									<span className="highlight">SwoodServer</span> could connect to external ERP systems, enabling seamless data flow between production management and enterprise resource planning.
								</>
							}
						/>
					</ListItem>
					<ListItem>
						<ListItemText
							primary="Swood Center Services Integration"
							secondary={
								<>
									With the aim of fully integrating with the <SwoodTag /> ecosystem, <span className="highlight">SwoodServer</span> may be capable of connecting with Swood Center Services to automatically generate new models and reports of common library elements.
								</>
							}
						/>
					</ListItem>
					<ListItem>
						<ListItemText primary="Material Management" secondary={<>Implement advanced features for tracking and managing material inventories to minimize shortages and optimize stock levels.</>} />
					</ListItem>
					<ListItem>
						<ListItemText primary="Swood Material Database Integration" secondary={<>The platform may integrate with the Swood Materials Database, ensuring up-to-date information on material specifications and availability.</>} />
					</ListItem>
					<ListItem>
						<ListItemText primary="Mark Parts for Rework" secondary={<>Possible ability to easily flag parts for rework and generate a new nesting project based on these items. This feature streamlines the rework process, allowing for seamless reintegration into the production workflow, ensuring controlled and efficient handling of reworked components.</>} />
					</ListItem>
					<ListItem>
						<ListItemText primary="Combine Reports" secondary={<>Merge multiple reports into a single comprehensive document to obtain a consolidated view of total quantities. This feature simplifies the reporting process, providing a clear summary across multiple projects or production runs.</>} />
					</ListItem>
					<ListItem>
						<ListItemText primary="Alerts and Notifications System" secondary={<>Implementing an alert system would greatly enhance user experience by notifying users of various project statuses. This system could send notifications for new projects, stagnant projects that require attention, and critical projects that need immediate action. Such a feature ensures timely updates, improves workflow efficiency, and helps maintain project momentum.</>} />
					</ListItem>
					<ListItem>
						<ListItemText
							primary="Deploy SwoodServer on AWS"
							secondary={
								<>
									<span className="highlight">SwoodServer</span> can be deployed on Amazon Web Services, providing a cloud-based solution for clients without a physical server. Note that this will involve additional costs.
								</>
							}
						/>
					</ListItem>
					<ListItem>
						<ListItemText primary="Enhanced Reporting Tools" secondary={<>Develop custom reporting tools that allow users to create tailored reports and dashboards for specific manufacturing needs.</>} />
					</ListItem>
					<ListItem>
						<ListItemText primary="Customizable Dashboards" secondary={<>Create personalized dashboards that cater to the unique workflows and KPIs of different departments within the organization.</>} />
					</ListItem>
				</List>
			</Section>

			<Section id="Requirements" title="Requirements">
				<Typography>
					<span className="highlight">SwoodServer</span> functions like an intranet, requiring installation on a Windows Server machine accessible to client devices over a network. A <span className="highlight">SwoodServer Installer</span> will be provided to set up the necessary backend applications and database on the server.
				</Typography>
				<Typography>
					Client devices must have network or VPN access to the server and use Google Chrome to interact with <span className="highlight">SwoodServer</span>. The <span className="highlight">SwoodServer Portal</span> is also accessible via mobile devices and tablets.
				</Typography>
			</Section>

			<Section id="Architecture" title="SwoodServer architecture">
				<Typography>
					<span className="highlight">SwoodServer</span> is built on the MERN Stack architecture, a powerful JavaScript framework for rapid deployment of full-stack web applications. Comprising MongoDB, Express, React, and Node.js, this stack simplifies development by enabling a seamless three-tier architecture (frontend, backend, and database) using JavaScript.
				</Typography>

				<ImageComponent source="./images/SwoodServer/mern.png" size="600px" />

				<List>
					<ListItem>
						<ListItemText primary="MongoDB" secondary={<>MongoDB is a NoSQL database in which data is stored in documents that consist of key-value pairs. The data is not stored in the form of tables and that’s how it differs from other database programs.</>} />
					</ListItem>
					<ListItem>
						<ListItemText primary="Express" secondary={<>Express is a flexible and clean Node.js web application framework. Express helps build the backend very easily while staying in the JavaScript ecosystem. In the MERN stack, Express will be used as the backend API server which interacts with the MongoDB database to serve data to client (React) applications.</>} />
					</ListItem>
					<ListItem>
						<ListItemText primary="React" secondary={<>React is an open-source JavaScript library that is used for building user interfaces specifically for SPA (Single Page Applications). SPA means rendering the entire website on one page rather than different pages of the websites. React lets you build complex interfaces through simple Components, connect them to data on your backend server, and render them as HTML</>} />
					</ListItem>
					<ListItem>
						<ListItemText primary="NodeJS" secondary={<>NodeJS is a cross-platform JavaScript runtime environment, it’s built on Chrome’s V8 engine to run JavaScript code outside the browser, to easily building fast and scalable applications. The main purpose of NodeJS is simple, it allows us to write our backend in JavaScript, saving us the trouble of learning a new programming language capable of running the backend.</>} />
					</ListItem>
				</List>

				<Typography>Popular Web Apps built with the full or partial MERN stack</Typography>

				<ul>
					<li>Facebook</li>
					<li>Instagram</li>
					<li>Microsoft Teams</li>
					<li>Twitter</li>
					<li>Airbnb</li>
					<li>Netflix</li>
					<li>Amazon</li>
					<li>WhatsApp</li>
					<li>eBay</li>
					<li>Trello</li>
					<li>Visual Studio Code</li>
				</ul>
			</Section>
		</>
	)
}

export default SwoodServer

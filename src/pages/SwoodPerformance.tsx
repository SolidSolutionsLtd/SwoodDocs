import { Typography } from '@mui/material'
import { PageTitle } from '../components/PageTitle'
import { ImageComponent } from '../components/ImageComponent'
import { Section } from '../components/Section'

const SwoodPerformance = () => {
	return (
		<>
			<PageTitle title="How to Enhance SWOOD Performance" />

			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#SWOODPerformanceChecklist">SWOOD Performance Checklist:</a>
					</li>
					<li>
						<a href="#CheckingForWindowsUpdates">Checking for Windows Updates</a>
					</li>
					<li>
						<a href="#SOLIDWORKSRX">SOLIDWORKS RX</a>
					</li>
					<li>
						<a href="#SOLIDWORKSSettings">SOLIDWORKS Settings</a>
					</li>
					<li>
						<a href="#SWOODSettings">SWOOD Settings</a>
					</li>
					<li>
						<a href="#SOLIDWORKSPerformanceEvaluation">SOLIDWORKS Performance Evaluation</a>
					</li>
					<li>
						<a href="#SWOODPerformanceAnalyzer">SWOOD Performance Analyzer</a>
					</li>
					<li>
						<a href="#RebuildModes">Rebuild Modes</a>
					</li>
					<li>
						<a href="#WorkingOverANetwork">Working Over a Network</a>
					</li>
					<li>
						<a href="#HardwareRecommendations">Hardware Recommendations</a>
					</li>
					<li>
						<a href="#NextSteps">Next Steps</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>SWOOD performance can be affected by several factors. To ensure optimal performance, especially when working with large assemblies, we've created the following checklist. Detailed explanations of each point can be found in the subsequent sections.</Typography>
			</Section>

			<Section id="SWOODPerformanceChecklist" title="SWOOD Performance Checklist:">
				<ul>
					<li>Windows Updates: Ensure all Windows updates are installed.</li>
					<li>
						SOLIDWORKS RX:
						<ul>
							<li>Confirm graphics card driver is up to date.</li>
							<li>Use Safe Mode OpenGL for troubleshooting.</li>
						</ul>
					</li>
					<li>
						SOLIDWORKS Settings:
						<ul>
							<li>Automatically load components as lightweight.</li>
							<li>Adjust large assembly settings.</li>
							<li>Manage referenced documents.</li>
						</ul>
					</li>
					<li>
						SWOOD Settings:
						<ul>
							<li>Manage referenced documents.</li>
							<li>Remove unnecessary file locations.</li>
							<li>Use the "UseFastRebuild" setting.</li>
						</ul>
					</li>
					<li>
						SOLIDWORKS Performance Evaluation:
						<ul>
							<li>Analyze part opening times.</li>
							<li>Update old version files.</li>
							<li>Resolve circular references.</li>
							<li>Optimize assembly structure.</li>
							<li>Address in-context relations.</li>
							<li>Assess component quantity.</li>
						</ul>
					</li>
					<li>SWOOD Performance Analyzer: Use this tool to monitor rebuild times.</li>
					<li>Rebuild Modes: Optimize rebuilds for better performance.</li>
					<li>Network Usage: Avoid working over a network if possible.</li>
					<li>Hardware Recommendations: Ensure your system meets recommended specifications.</li>
					<li>Next Steps: Contact support if issues persist.</li>
				</ul>
			</Section>
			<Section id="CheckingForWindowsUpdates" title="Checking for Windows Updates">
				<Typography>To ensure that your system is not hindered by pending updates, it’s important to regularly check for and install all available Windows updates. If you’re unsure, consult your IT department for further guidance.</Typography>
			</Section>
			<Section id="SOLIDWORKSRX" title="SOLIDWORKS RX">
				<Typography variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
					Ensure Your Graphics Card Driver is Up to Date
				</Typography>
				<Typography>SOLIDWORKS requires a professional-grade 3D graphics card for optimal performance and stability. Only NVIDIA Quadro, AMD FirePro, and Radeon Pro series cards are supported. Using unsupported graphics cards may cause performance issues.</Typography>
				<Typography>
					You can verify if your system's graphics card and driver are certified via the SOLIDWORKS Hardware Certification website. It’s recommended to invest in the latest supported cards to ensure long-term compatibility.{' '}
					<a href="https://www.solidworks.com/support/hardware-certification/" target="_blank">
						Check Certified Graphics Cards
					</a>
					.
				</Typography>

				<Typography variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
					To verify your graphics card in SOLIDWORKS RX:
				</Typography>
				<ol>
					<li>
						Open <strong>SOLIDWORKS RX</strong> from the Start Menu.
					</li>
					<li>
						Navigate to the <strong>Diagnostics</strong> tab.
					</li>
					<li>Review the graphics card status to see if a newer driver is available.</li>
					<li>If your driver is outdated, follow the update instructions provided.</li>
				</ol>

				<Typography variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
					Using Safe Mode OpenGL
				</Typography>
				<Typography>
					If graphical issues persist, you can rule out graphics card or driver issues by reopening SOLIDWORKS in <strong>OpenGL Safe Mode</strong> through SWOOD RX located in the <strong>Home</strong> tab.
				</Typography>
			</Section>
			<Section id="SOLIDWORKSSettings" title="SOLIDWORKS Settings">
				<Typography variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
					Automatically Load Components as Lightweight
				</Typography>
				<Typography>
					When using SWOOD, it's best to avoid lightweight mode, as it limits the ability to update SWOOD features, which can negatively impact performance. Instead, utilize the <strong>Rebuild Mode Toolbar</strong> in SWOOD to control rebuilds of unnecessary components.
				</Typography>
				<ImageComponent source="./images/PerformanceLightweight.png" size="300px" />

				<Typography variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
					Large Assembly Settings
				</Typography>
				<Typography>Adjust these settings to handle larger assemblies more efficiently.</Typography>

				<ImageComponent source="./images/PerformanceLargeDesign.png" size="300px" />

				<Typography variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
					Managing Referenced Documents
				</Typography>
				<Typography>Ensure that referenced documents are correctly managed and unnecessary file locations are removed from your SolidWorks settings.</Typography>
				<ImageComponent source="./images/PerformanceReferences.png" size="300px" />
			</Section>
			<Section id="SWOODSettings" title="SWOOD Settings">
				<Typography variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
					Referenced Documents
				</Typography>
				<Typography>Remove unnecessary referenced document locations to improve performance.</Typography>
				<ImageComponent source="./images/PerformanceReferencedDocuments.png" size="300px" />
				<ImageComponent source="./images/PerformanceReferencedDocuments2.png" size="300px" />

				<Typography variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
					"UseFastRebuild" Setting
				</Typography>
				<Typography>From SWOOD 2018, a new rebuild algorithm was introduced for connectors and SWOODBoxes, typically enabled by default. To verify or enable this setting:</Typography>
				<ol>
					<li>
						Open <strong>Windows Explorer</strong> and locate the <strong>DAT folder</strong> in the SWOOD Data Directory.
					</li>
					<li>
						Open the <strong>SWOODDesign.cfg</strong> file with a text editor.
					</li>
					<li>
						Ensure the following <span className="param">UseFastRebuild</span> settings are set to 1.
					</li>
					<li>
						Remove any semicolon (<code>;</code>) preceding the line, as it comments out the setting.
					</li>
					<li>Save the file and restart SOLIDWORKS for the changes to take effect.</li>

					<ImageComponent source="./images/PerformanceSwoodboxRebuild.png" size="200px" />
					<ImageComponent source="./images/PerformanceConnectorRebuild.png" size="200px" />
				</ol>
			</Section>
			<Section id="SOLIDWORKSPerformanceEvaluation" title="SOLIDWORKS Performance Evaluation">
				<Typography>The SOLIDWORKS Performance Evaluation tool provides insights and suggestions to enhance performance. For SWOOD, some suggestions may need to be disregarded (e.g., using Lightweight Mode), but others can be critical.</Typography>

				<Typography>
					To open <strong>Performance Evaluation</strong> go to <strong>Tools &gt; Evaluate &gt; Tools &gt; Performance Evaluation</strong>.
				</Typography>
				<Typography variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
					Key Areas to Investigate:
				</Typography>
				<ul>
					<li>
						<strong>Part Opening Time</strong>: Identify and address components with slow load times.
					</li>
					<li>
						<strong>Old Version Files</strong>: Update older components to the current version.
					</li>
					<li>
						<strong>Circular References</strong>: These can create performance bottlenecks by causing infinite rebuild loops. For more details , visit the following
						<a href="https://blogs.solidworks.com/tech/2021/01/solidworks-2021-circular-reference-detection.html" target="_blank">
							{' '}
							blog
						</a>
						.
					</li>
					<li>
						<strong>Assembly Structure</strong>: Minimize mates at the top level of the assembly by breaking them into sub-assemblies.
					</li>
					<li>
						<strong>In-Context Relations</strong>: Resolve conflicts within in-context relations.
					</li>
					<li>
						<strong>Component Quantity</strong>: Be mindful of the number of components in your assembly, and split large projects into smaller sub-assemblies where possible.
					</li>
				</ul>
			</Section>
			<Section id="SWOODPerformanceAnalyzer" title="SWOOD Performance Analyzer">
				<Typography>The SWOOD Performance Analyzer can assess model performance during rebuilds, helping you identify the elements contributing to long rebuild times.</Typography>

				<Typography variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
					To use the Performance Analyzer:
				</Typography>
				<ol>
					<li>
						Open <strong>Tools &gt; SWOOD Design &gt; Tools &gt; Performance Analyzer</strong>.
					</li>
					<li>
						In your assembly model, press <strong>Ctrl + Q</strong> to force a rebuild.
					</li>
					<li>The tool will record performance in real time and display detailed rebuild times.</li>
				</ol>

				<Typography variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
					Pay special attention to any equations
				</Typography>
				<Typography>Errors in your project can cause multiple recalculations, slowing down rebuild times.</Typography>

				<ImageComponent source="./images/PerformanceSwoodPerformanceAnalyser.png" size="300px" />
			</Section>
			<Section id="RebuildModes" title="Rebuild Modes">
				<Typography>SWOOD Design offers several rebuild modes to manage performance by temporarily disabling the rebuild of specific elements. For instance, you can disable rebuilds of connectors or layouts, allowing for smoother design changes when working with large assemblies.</Typography>

				<Typography variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
					To access rebuild modes:
				</Typography>
				<ol>
					<li>
						Right-click an empty area on the <strong>Command Manager</strong>.
					</li>
					<li>
						Select <strong>Toolbars &gt; Rebuild Modes</strong>.
					</li>
				</ol>

				<Typography>Use the appropriate mode to control rebuilds, such as locking all SWOOD boxes or connectors.</Typography>
			</Section>
			<Section id="WorkingOverANetwork" title="Working Over a Network">
				<Typography>Working locally is always faster than working over a network, as network operations introduce additional steps. If your team relies on networked files, consider benchmarking your network’s performance against local setups. If local performance is significantly better, consult your IT department for possible improvements.</Typography>

				<Typography>
					Implementing a data management system like <strong>SOLIDWORKS PDM</strong> can help by copying files locally for edits and seamlessly syncing changes back to the network.
				</Typography>

				<Typography>Working locally is significantly faster than working over even the most optimized networks. The difference comes down to the number of steps involved—local operations are more efficient because there are simply fewer stages to complete.</Typography>
				<Typography>While it’s common to save files to a shared network when collaborating within a team, network-based file operations inevitably introduce performance limitations. Tasks like opening, copying, renaming, and saving files over a network often result in longer wait times, even on high-speed networks.</Typography>
				<Typography>To understand the impact, it's recommended to benchmark your network performance and compare it to working locally. When running a local performance test, ensure that the entire SWOOD Data Directory is copied to your machine, and confirm that the project isn’t referencing any network files.</Typography>
				<Typography>
					If you notice a significant improvement in performance when working locally, consult your IT department to explore ways to enhance network efficiency. The ideal solution is to implement a data management system like <strong>SOLIDWORKS PDM</strong>. This system allows files to be copied locally for editing while seamlessly syncing changes back to the network, ensuring optimal performance without disrupting workflows or losing file references.
				</Typography>
			</Section>
			<Section id="HardwareRecommendations" title="Hardware Recommendations">
				<Typography>Hardware plays a critical role in performance. Compare your system against the following high-performance setup:</Typography>

				<ul>
					<li>
						<strong>Processor</strong>: Intel Core i7-11700K (8 cores, 3.6GHz, up to 5.0GHz Turbo Boost)
					</li>
					<li>
						<strong>Operating System</strong>: Windows 10 Professional 64-bit
					</li>
					<li>
						<strong>Memory</strong>: 32GB (2x16GB) DDR4 RAM
					</li>
					<li>
						<strong>Graphics</strong>: 16GB NVIDIA RTX A4000 Graphics Card
					</li>
					<li>
						<strong>Storage</strong>: 1TB PCIe NVMe SSD
					</li>
				</ul>

				<Typography>
					For further hardware guidance, refer to the{' '}
					<a href="https://www.solidsolutions.co.uk/solidworks-support/hardware-advice.aspx" target="_blank">
						Solid Solutions Hardware Guide
					</a>
					.
				</Typography>
			</Section>
			<Section id="NextSteps" title="Next Steps">
				<Typography>If you’ve followed these steps and are still experiencing performance issues, please reach out to Solid Solutions support. When contacting us, include the following:</Typography>

				<ol>
					<li>Your name and company.</li>
					<li>A description of the issue (e.g., large assembly performance, slow opening times).</li>
					<li>Confirm whether the issue is file-specific, machine-specific, or general.</li>
					<li>
						Provide a <strong>SWOOD RX</strong> of the assembly in question.
					</li>
					<li>
						Include any relevant data:
						<ul>
							<li>Multiple SWOOD RX reports.</li>
							<li>Screen recordings of the issue.</li>
						</ul>
					</li>
					<li>Attach your system information (System Information &gt; Save As).</li>
				</ol>

				<Typography>
					Email your support request to <strong>Support@SolidSolutions.co.uk</strong>, and we will investigate further.
				</Typography>
			</Section>
		</>
	)
}

export default SwoodPerformance

import { Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { ImageComponent } from '../../components/ImageComponent'
import { Section } from '../../components/Section'
import { NavLink } from 'react-router-dom'
import { SwoodTag, SolidWorksTag, SwoodRXTag, SwoodDataDirectoryTag, SolidWorksRXTag, SwoodDesignTag } from '../../components/NameTags'

const SwoodPerformance = () => {
	return (
		<>
			<PageTitle title="How to enhance Swood performance" />

			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#SWOODPerformanceChecklist">Swood performance checklist:</a>
					</li>
					<li>
						<a href="#CheckingForWindowsUpdates">Checking for Windows updates</a>
					</li>
					<li>
						<a href="#SolidWorksRX">SolidWorks RX</a>
					</li>
					<li>
						<a href="#SolidWorksSettings">SolidWorks settings</a>
					</li>
					<li>
						<a href="#SWOODSettings">Swood settings</a>
					</li>
					<li>
						<a href="#SolidWorksPerformanceEvaluation">SolidWorks performance evaluation</a>
					</li>
					<li>
						<a href="#SwoodPerformanceAnalyzer">Swood performance analyzer</a>
					</li>
					<li>
						<a href="#RebuildModes">Rebuild modes</a>
					</li>
					<li>
						<a href="#WorkingOverANetwork">Working over a network</a>
					</li>
					<li>
						<a href="#HardwareRecommendations">Hardware recommendations</a>
					</li>
					<li>
						<a href="#NextSteps">Next steps</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>
					<SwoodTag /> performance can be affected by several factors. To ensure optimal performance, especially when working with large assemblies, we've created the following checklist. Detailed explanations of each point can be found in the subsequent sections.
				</Typography>
			</Section>

			<Section id="SWOODPerformanceChecklist" title="Swood performance checklist:">
				<ul>
					<li>Windows Updates: Ensure all Windows updates are installed.</li>
					<li>
						SolidWorks RX:
						<ul>
							<li>Confirm graphics card driver is up to date.</li>
							<li>Use Safe Mode OpenGL for troubleshooting.</li>
						</ul>
					</li>
					<li>
						SolidWorks settings:
						<ul>
							<li>Automatically load components as lightweight.</li>
							<li>Adjust large assembly settings.</li>
							<li>Manage referenced documents.</li>
						</ul>
					</li>
					<li>
						Swood settings:
						<ul>
							<li>Manage referenced documents.</li>
							<li>Remove unnecessary file locations.</li>
							<li>Use the "UseFastRebuild" setting.</li>
						</ul>
					</li>
					<li>
						SolidWorks performance evaluation:
						<ul>
							<li>Analyze part opening times.</li>
							<li>Update old version files.</li>
							<li>Resolve circular references.</li>
							<li>Optimize assembly structure.</li>
							<li>Address in-context relations.</li>
							<li>Assess component quantity.</li>
						</ul>
					</li>
					<li>Swood performance analyzer: Use this tool to monitor rebuild times.</li>
					<li>Rebuild modes: Optimize rebuilds for better performance.</li>
					<li>Network Usage: Avoid working over a network if possible.</li>
					<li>Hardware recommendations: Ensure your system meets recommended specifications.</li>
					<li>Next steps: Contact support if issues persist.</li>
				</ul>
			</Section>
			<Section id="CheckingForWindowsUpdates" title="Checking for Windows updates">
				<Typography>To ensure that your system is not hindered by pending updates, it’s important to regularly check for and install all available Windows updates. If you’re unsure, consult your IT department for further guidance.</Typography>
			</Section>
			<Section id="SolidWorksRX" title="SolidWorks RX">
				<Typography variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
					Ensure Your Graphics Card Driver is Up to Date
				</Typography>
				<Typography>
					<SolidWorksTag /> requires a professional-grade 3D graphics card for optimal performance and stability. Only NVIDIA Quadro, AMD FirePro, and Radeon Pro series cards are supported. Using unsupported graphics cards may cause performance issues.
				</Typography>
				<Typography>
					You can verify if your system's graphics card and driver are certified via the SolidWorks Hardware Certification website. It’s recommended to invest in the latest supported cards to ensure long-term compatibility.{' '}
					<a href="https://www.solidworks.com/support/hardware-certification/" target="_blank">
						Check Certified Graphics Cards
					</a>
					.
				</Typography>

				<Typography variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
					To verify your graphics card in SolidWorks RX:
				</Typography>
				<ol>
					<li>
						Open <SolidWorksRXTag /> from the Start Menu.
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
					If graphical issues persist, you can rule out graphics card or driver issues by reopening SolidWorks in <strong>OpenGL Safe Mode</strong> through <SwoodRXTag /> located in the <strong>Home</strong> tab.
				</Typography>
			</Section>
			<Section id="SolidWorksSettings" title="SolidWorks settings">
				<Typography variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
					Automatically Load Components as Lightweight
				</Typography>
				<Typography>
					When using <SwoodTag />, it's best to avoid lightweight mode, as it limits the ability to update <SwoodTag /> features, which can negatively impact performance. Instead, utilize the <strong>Rebuild Mode Toolbar</strong> in <SwoodTag /> to control rebuilds of unnecessary components.
				</Typography>
				<ImageComponent source="./images/PerformanceLightweight.png" size="500px" />

				<Typography variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
					Large Assembly Settings
				</Typography>
				<Typography>Adjust these settings to handle larger assemblies more efficiently.</Typography>

				<ImageComponent source="./images/PerformanceLargeDesign.png" size="500px" />

				<Typography variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
					Managing Referenced Documents
				</Typography>
				<Typography>
					Ensure that referenced documents are correctly managed and unnecessary file locations are removed from your <SolidWorksTag /> settings.
				</Typography>
				<ImageComponent source="./images/PerformanceReferences.png" size="500px" />
			</Section>
			<Section id="SWOODSettings" title="Swood settings">
				<Typography variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
					Referenced Documents
				</Typography>
				<Typography>Remove unnecessary referenced document locations to improve performance.</Typography>
				<ImageComponent source="./images/PerformanceReferencedDocuments.png" size="500px" />
				<ImageComponent source="./images/PerformanceReferencedDocuments2.png" size="500px" />

				<Typography variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
					"UseFastRebuild" Setting
				</Typography>
				<Typography>
					From <SwoodTag /> 2018, a new rebuild algorithm was introduced for connectors and SWOODBoxes, typically enabled by default. To verify or enable this setting:
				</Typography>
				<ol>
					<li>
						Open <strong>Windows Explorer</strong> and locate the <strong>DAT folder</strong> in the <SwoodDataDirectoryTag />.
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
					<li>
						Save the file and restart <SolidWorksTag /> for the changes to take effect.
					</li>

					<ImageComponent source="./images/PerformanceSwoodboxRebuild.png" size="400px" />
					<ImageComponent source="./images/PerformanceConnectorRebuild.png" size="400px" />
				</ol>
			</Section>
			<Section id="SolidWorksPerformanceEvaluation" title="SolidWorks performance evaluation">
				<Typography>
					The <SolidWorksTag /> Performance Evaluation tool provides insights and suggestions to enhance performance. For <SwoodTag />, some suggestions may need to be disregarded (e.g., using Lightweight Mode), but others can be critical.
				</Typography>

				<Typography>
					To open <strong>Performance Evaluation</strong> go to <span className="param">Tools &gt; Evaluate &gt; Tools &gt; Performance Evaluation</span>.
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
			<Section id="SwoodPerformanceAnalyzer" title="Swood performance analyzer">
				<Typography>
					The <SwoodTag /> performance analyzer can assess model performance during rebuilds, helping you identify the elements contributing to long rebuild times.
				</Typography>

				<Typography variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
					To use the performance analyzer:
				</Typography>
				<ol>
					<li>
						Open <span className="param">Tools &gt; SWOOD Design &gt; Tools &gt; Performance Analyzer</span>.
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

				<ImageComponent source="./images/PerformanceSwoodPerformanceAnalyser.png" size="400px" />
			</Section>
			<Section id="RebuildModes" title="Rebuild modes">
				<Typography>
					<SwoodDesignTag /> offers several rebuild modes to manage performance by temporarily disabling the rebuild of specific elements. For instance, you can disable rebuilds of connectors or layouts, allowing for smoother design changes when working with large assemblies.
				</Typography>

				<Typography variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
					To access rebuild modes:
				</Typography>
				<ol>
					<li>
						Right-click an empty area on the <strong>Command Manager</strong>.
					</li>
					<li>
						Select <span className="param">Toolbars &gt; Rebuild Modes</span>.
					</li>
				</ol>

				<Typography>Use the appropriate mode to control rebuilds, such as locking all Swood boxes or connectors.</Typography>
			</Section>
			<Section id="WorkingOverANetwork" title="Working over a network">
				<Typography>Working locally is always faster than working over a network, as network operations introduce additional steps. If your team relies on networked files, consider benchmarking your network’s performance against local setups. If local performance is significantly better, consult your IT department for possible improvements.</Typography>

				<Typography>
					Implementing a data management system like <strong>SolidWorks PDM</strong> can help by copying files locally for edits and seamlessly syncing changes back to the network.
				</Typography>

				<Typography>Working locally is significantly faster than working over even the most optimized networks. The difference comes down to the number of steps involved—local operations are more efficient because there are simply fewer stages to complete.</Typography>
				<Typography>While it’s common to save files to a shared network when collaborating within a team, network-based file operations inevitably introduce performance limitations. Tasks like opening, copying, renaming, and saving files over a network often result in longer wait times, even on high-speed networks.</Typography>
				<Typography>
					To understand the impact, it's recommended to benchmark your network performance and compare it to working locally. When running a local performance test, ensure that the entire <SwoodDataDirectoryTag /> is copied to your machine, and confirm that the project isn’t referencing any network files.
				</Typography>
				<Typography>
					If you notice a significant improvement in performance when working locally, consult your IT department to explore ways to enhance network efficiency. The ideal solution is to implement a data management system like <strong>SolidWorks PDM</strong>. This system allows files to be copied locally for editing while seamlessly syncing changes back to the network, ensuring optimal performance without disrupting workflows or losing file references.
				</Typography>
			</Section>
			<Section id="HardwareRecommendations" title="Hardware recommendations">
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
			<Section id="NextSteps" title="Next steps">
				<Typography>If you’ve followed these steps and are still experiencing performance issues, please reach out to Solid Solutions support. When contacting us, include the following:</Typography>

				<ol>
					<li>Your name and company.</li>
					<li>A description of the issue (e.g., large assembly performance, slow opening times).</li>
					<li>Confirm whether the issue is file-specific, machine-specific, or general.</li>
					<li>
						Provide a <SwoodRXTag /> of the assembly in question.
					</li>
					<li>
						Include any relevant data:
						<ul>
							<li>
								Multiple <SwoodRXTag /> files. For more information on how to generate them, please click <NavLink to="/SwoodRx">here</NavLink>.
							</li>
							<li>Screen recordings of the issue.</li>
						</ul>
					</li>
					<li>
						Attach your system information <span className="param">System Information &gt; Save As</span>.
					</li>
				</ol>

				<Typography>
					Email your support request to <a href="mailto:Support@SolidSolutions.co.uk">Support@SolidSolutions.co.uk</a>, and we will investigate further.
				</Typography>
			</Section>
		</>
	)
}

export default SwoodPerformance

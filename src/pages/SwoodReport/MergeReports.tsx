import { Box, ListItem, ListItemText, Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { ImageComponent } from '../../components/ImageComponent'
import { Section } from '../../components/Section'
import CodeEditorField from '../../components/CodeEditorField'
import { NavLink } from 'react-router-dom'
import { ProChip } from '../../components/ProChip'

const MergeReports = () => {
	return (
		<>
			<PageTitle title="How to Merge Nest and Design Reports" pro={true} beta={true} />
			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#Workflow">Workflow</a>
					</li>
					<li>
						<a href="#FAQs">FAQs</a>
					</li>
					<li>
						<a href="#Disclaimer">Merged Reports Disclaimer</a>
					</li>
					<li>
						<a href="#Requirements">Requirements</a>
					</li>
					<li>
						<a href="#Setup">How to Setup Merged Reports</a>
					</li>
				</ul>
			</nav>
			<Section id="Overview" title="Overview">
				<Typography>When using Swood Design and Swood Nesting, users must manage multiple assemblies: one or more design assemblies and the nesting assembly. This separation often leads to issues with reports due to the division of data. For example, nesting projects may not include all project components (such as hardware) or information about the frames used. Conversely, design projects lack details about the nested sheets.</Typography>
				<Typography>
					To address this, a new <span className="highlight">MergeReports</span> application has been developed to consolidate the data from Design and Nesting projects into a single report. Please read further to understand its workflow, FAQs, and setup.
				</Typography>
				<Typography>It is important to note that this application is currently in the beta stage.</Typography>
			</Section>

			<Section id="Workflow" title="Workflow">
				<Typography>To merge a nest report with the reports of its source files, follow the steps outlined below:</Typography>

				<ol>
					<li>Create Swood Design Projects.</li>
					<li>Generate Swood Design Project Reports.</li>
					<li>Create a Swood Nesting Project using the Swood Design Projects as source files.</li>
					<li>Generate the Swood Nesting Report.</li>
					<li>
						The <span className="highlight">MergeReports</span> application will automatically generate a merged report after the previous step.
					</li>
				</ol>
				<ImageComponent source="./images/MergeReportWorkflow.png" size="600px" />
			</Section>
			<Section id="FAQs" title="FAQs">
				<ListItem>
					<ListItemText primary="Can I use a single source file for the Nesting project?" secondary="Yes, you can use any number of source files in the nesting project." />
				</ListItem>

				<ListItem>
					<ListItemText
						primary="How can I access the merged report?"
						secondary={
							<>
								After the nest report is completed, you can access the merged report in the Encoding Report Screen by clicking <span className="param">Documents &gt; Home Merged Report</span>. Note that you can also access the merged report through Windows Explorer.
							</>
						}
					/>
				</ListItem>
				<ImageComponent source="./images/MergedReportOpen.png" size="200px" />
				<ListItem>
					<ListItemText primary="Where is the merged report saved?" secondary="The merged report is saved in the same directory as the nested report." />
				</ListItem>
				<ListItem>
					<ListItemText
						primary="What will be the name of the merged report?"
						secondary={
							<>
								The merged report will be automatically named <span className="highlight">Merged - &lt;Nest Report Name&gt;</span>. This cannot be changed.
							</>
						}
					/>
				</ListItem>
				<ListItem>
					<ListItemText primary="What should I do if any of the models change?" secondary="If a model changes, run the associated Design report and then the Nesting report to regenerate the merged report." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Can I merge with older report versions?" secondary="No, all reports must be version 2.10.3 or newer." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Can I merge multiple Design projects without a Nest project?" secondary="This is not supported at the moment." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Can I merge multiple Design projects without a Nest project?" secondary="This is not supported at the moment." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Can I merge multiple Nest projects?" secondary="This is not supported at the moment." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Are cutting patterns re-optimised in the merged report?" secondary="The merged report does not re-optimise cutting patterns from the Design projects. The original cutting patterns are retained, which may not be the most efficient solution." />
				</ListItem>
				<ListItem>
					<ListItemText
						primary="What will happen if the source files do not have a design report?"
						secondary={
							<>
								The MergeReport application will not generate any files and you will notice the message below when clicking on <span className=" param">Documents &gt; Home Merged Report</span>
							</>
						}
					/>
				</ListItem>
				<ImageComponent source="./images/MergedReportError.png" size="300px" />
				<ListItem>
					<ListItemText primary="How can I identify the merged reports?" secondary="At present, there is no interface to display this information. However, you can use the Raw Data Viewer to view the merged data." />
				</ListItem>
				<ImageComponent source="./images/MergedReportData.gif" size="600px" />

				<ListItem>
					<ListItemText primary="Why can I see source reports in the merged report folder?" secondary="These files are remnants of the merge process and are not required after the merge is completed." />
				</ListItem>
				<ListItem>
					<ListItemText
						primary="How can I provide feedback, suggestions, or report bugs?"
						secondary={
							<>
								We value your input and encourage you to share any feedback, suggestions, or bugs you encounter. Please contact us at <a href="mailto:SwoodApps@solidsolutions.co.uk">SwoodApps@solidsolutions.co.uk</a>. Your contributions help us improve and enhance our software.
							</>
						}
					/>
				</ListItem>
			</Section>

			<Box className="red" sx={{ color: 'r' }}>
				<Section id="Disclaimer" title="Merged Reports Disclaimer">
					<ul>
						<li>
							<strong>Pre-Release Software</strong>: This beta version is pre-release software and is provided "as is" without any warranties, express or implied. It may contain bugs, errors, and other issues that could cause system failures or data loss.
						</li>
						<li>
							<strong>Feedback</strong>: Your participation in the Beta Program is voluntary, and we appreciate your feedback. By providing feedback, you grant us the right to use, modify, and incorporate your feedback into our products without any obligation to you.
						</li>

						<li>
							<strong>No Liability</strong>: We are not liable for any damages, including but not limited to, direct, indirect, incidental, or consequential damages, arising out of the use or inability to use the beta software.
						</li>
						<li>
							<strong>Termination</strong>: We reserve the right to stop all development or to terminate your access to the beta software at any time, with or without cause or notice.
						</li>
					</ul>
					<p>By using the beta software, you agree to these terms and conditions.</p>
				</Section>
			</Box>

			<Section id="Requirements" title="Requirements">
				<ol>
					<li>
						Swood Report Pro
						<ProChip /> version 2.10.3 or newer
					</li>
					<li>Swood 2024 SP0.0 or newer</li>
				</ol>
			</Section>

			<Section id="Setup" title="How to Set Up Merged Reports">
				<ol>
					<li>
						Download <span className="highlight">MergeReportPost.exe</span> by clicking
						<a href="https://github.com/SolidSolutionsLtd/SwoodDocs/raw/master/public/assets/MergeReportPost.exe" download>
							{' '}
							here
						</a>
						.
					</li>
					<li>
						Ensure that <span className="highlight">MergeReportPost.exe</span> has not been blocked by your machine. Right-click on the <span className="highlight">MergeReportPost.exe</span> application, then go to <span className="param">Properties &gt; Unblock &gt; OK</span>. If the Unblock option is not present, it means the file has not been blocked, and you can skip this step.
					</li>
					<ImageComponent source="./images/MergedReportUnblock.gif" size="450px" />
					<li>
						Place <span className="highlight">MergeReportPost.exe</span> in the <span className="param">&lt;SWOOD DATA DIRECTORY&gt;\DAT\Documents\Report Posts</span> folder. Click <NavLink to="/SwoodDataDirectory">here</NavLink> to learn how to find the SWOOD Data Directory.
					</li>
					<li>
						Open the following file with any text editor (e.g., Notepad): <span className="param">&lt;SWOOD DATA DIRECTORY&gt;\DAT\Report.cfg</span>.
					</li>
					<li>
						Scroll down to the <span className="param">(DOCUMENTS) &gt; ADDITIONAL DOCUMENTS</span> section and copy and paste the code below:
					</li>
					<CodeEditorField
						text={`
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
		FORCED_STORAGE_TYPE = 1
		CONDITION = REPORT_ISNESTINGPROJECT
		TYPEDOCUMENT = URI
		AUTOPROCESS = 1
		HIDDEN = 0
		[[URI
			ADDRESSTEMPLATE = "<REPORTPATH>\\..\\Merged - <AssemblyName>\\Home_Merged - <AssemblyName>.html"
		]]`}
					/>
					<Typography>The end result should look something like this:</Typography>
					<ImageComponent source="./images/MergedReportCFG.png" size="600px" />
					<li>
						Save the <span className="highlight">Report.cfg</span> file and restart SolidWorks.
					</li>
					<li>
						Follow the steps outlined in <a href="#Workflow">Workflow</a> to create your first merged report.
					</li>
				</ol>
			</Section>
		</>
	)
}

export default MergeReports

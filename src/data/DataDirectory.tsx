import { Folder as FolderIcon } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { SwoodDesignTag, SwoodTag, SolidWorksTag, SwoodReportTag, SwoodCAMTag, SwoodCenterServicesTag } from '../components/NameTags'
import SettingsIcon from '@mui/icons-material/Settings'
import JavascriptIcon from '@mui/icons-material/Javascript'
import LocalPoliceIcon from '@mui/icons-material/LocalPolice'

export const directoryStructure: IDirectoryItem[] = [
	{
		label: 'Aggregates',
		icon: <FolderIcon style={{ color: 'rgb(255, 212, 90)' }} />,
		info: (
			<Typography>
				This folder exists to store machine aggregates that have been defined in <SwoodCAMTag />. Each aggregate represents a specific configuration or tool setup that can be used during machining operations.
			</Typography>
		),
	},
	{
		label: 'DAT',
		icon: <FolderIcon style={{ color: 'rgb(255, 212, 90)' }} />,
		info: (
			<Typography>
				The DAT folder is designated for holding critical configuration files and data used by <SwoodReportTag />. These files establish parameters necessary for report generation and overall system integration.
			</Typography>
		),
		children: [
			{
				label: 'Client Documents',
				icon: <FolderIcon style={{ color: 'rgb(255, 212, 90)' }} />,
				info: <Typography>This folder stores customer specific files used to generate the report.</Typography>,
			},
			{
				label: 'Documents',
				icon: <FolderIcon style={{ color: 'rgb(255, 212, 90)' }} />,
				children: [
					{
						label: 'Report Posts',
						icon: <FolderIcon style={{ color: 'rgb(255, 212, 90)' }} />,
						info: (
							<Typography>
								This folder is used to store scripts and applications required to process and finalize <SwoodReportTag /> outputs.
							</Typography>
						),
					},
					{
						label: 'Resources',
						icon: <FolderIcon style={{ color: 'rgb(255, 212, 90)' }} />,
						info: (
							<Typography>
								This folder contains various resources required for the operation of <SwoodReportTag />, including scripts, images, and configuration files.
							</Typography>
						),
						children: [
							{
								label: 'JS Clients',
								icon: <FolderIcon style={{ color: 'rgb(255, 212, 90)' }} />,
								info: (
									<Typography>
										This folder holds user-specific files, allowing <SwoodReportTag /> to operate with customized settings.
									</Typography>
								),
								children: [
									{
										label: 'Database.js',
										icon: <JavascriptIcon fontSize="large" color="disabled" />,
										info: (
											<Typography>
												This is a template file for setting up the database structured used by <SwoodReportTag />.
											</Typography>
										),
									},
									{
										label: 'Patch.js',
										icon: <JavascriptIcon fontSize="large" color="disabled" />,
										info: (
											<Typography>
												This file allows core functions of <SwoodReportTag /> to be modified without altering the main codebase.
											</Typography>
										),
									},
									{
										label: 'ReportSettings.js',
										icon: <JavascriptIcon fontSize="large" color="disabled" />,
										info: (
											<Typography>
												This file defines various settings for <SwoodReportTag />, enabling detailed control over report configurations.
											</Typography>
										),
									},
								],
							},
							{
								label: 'JS',
								icon: <FolderIcon style={{ color: 'rgb(255, 212, 90)' }} />,
								info: (
									<Typography>
										Contains core scripts necessary for the operation of <SwoodReportTag />.
									</Typography>
								),
							},
							{
								label: 'Images',
								icon: <FolderIcon style={{ color: 'rgb(255, 212, 90)' }} />,
								info: (
									<Typography>
										Holds image files required by <SwoodReportTag />, such as icons and visual assets used in reports.
									</Typography>
								),
							},
							{
								label: 'CSS',
								icon: <FolderIcon style={{ color: 'rgb(255, 212, 90)' }} />,
								info: (
									<Typography>
										Stores stylesheets that define the visual presentation of <SwoodReportTag />.
									</Typography>
								),
							},
						],
					},
					{
						label: 'WEB',
						icon: <FolderIcon style={{ color: 'rgb(255, 212, 90)' }} />,
						info: (
							<Typography>
								This folder contains HTML template files used by <SwoodReportTag /> for generating web-based outputs.
							</Typography>
						),
					},
				],
			},
			{
				label: 'AutoInsert.efidb',
				icon: <FolderIcon style={{ color: 'rgb(255, 212, 90)' }} />,
				info: <Typography>Database for nesting auto insert operations.</Typography>,
			},
			{
				label: 'AutoPositioningRules.efidb',
				icon: <FolderIcon style={{ color: 'rgb(255, 212, 90)' }} />,
				info: <Typography>Database for nesting auto positioning rules.</Typography>,
			},
			{
				label: 'Report.cfg',
				icon: <SettingsIcon color="disabled" />,
				info: (
					<Typography>
						This file exists to define configuration settings specific to <SwoodReportTag />, including parameters that determine where CNC programs are outputted.
					</Typography>
				),
			},
			{
				label: 'report.json',
				icon: <SettingsIcon color="disabled" />,
				info: <Typography>Configuration file to enable System Report and program offcuts.</Typography>,
			},
			{
				label: 'SWOODCAM.cfg',
				icon: <SettingsIcon color="disabled" />,
				info: (
					<Typography>
						This file is used to store default settings for <SwoodCAMTag />, particularly configurations related to nesting.
					</Typography>
				),
			},
			{
				label: 'SWOODCenter.cfg',
				icon: <SettingsIcon color="disabled" />,
				info: (
					<Typography>
						This configuration file is essential for <SwoodCenterServicesTag /> functionality.
					</Typography>
				),
			},
			{
				label: 'SWOODDesign.cfg',
				icon: <SettingsIcon color="disabled" />,
				info: (
					<Typography>
						This file stores configurations related to <SwoodDesignTag />, which dictate how certain design elements are managed.
					</Typography>
				),
			},
			{
				label: 'SwoodReportLicensing.exe',
				icon: <LocalPoliceIcon color="disabled" />,
				info: (
					<Typography>
						<SwoodReportTag /> licensing application.
					</Typography>
				),
			},
		],
	},
	{
		label: 'Machinings',
		icon: <FolderIcon style={{ color: 'rgb(255, 212, 90)' }} />,
		info: (
			<Typography>
				Contains all predefined machining operations from the <SwoodCAMTag /> library.
			</Typography>
		),
	},
	{
		label: 'NestingSessionTemplate',
		icon: <FolderIcon style={{ color: 'rgb(255, 212, 90)' }} />,
		info: <Typography>This folder holds templates for nesting sessions, providing standard configurations for nesting projects.</Typography>,
	},
	{
		label: 'Plans',
		icon: <FolderIcon style={{ color: 'rgb(255, 212, 90)' }} />,
		info: <Typography>Stores machine configurations, including CNC head specifications, pod, and rail geometry, necessary for setting up accurate machine simulations.</Typography>,
	},
	{
		label: 'PostProcessors',
		icon: <FolderIcon style={{ color: 'rgb(255, 212, 90)' }} />,
		info: <Typography>Contains scripts and files that convert design outputs into CNC machine-readable instructions.</Typography>,
	},
	{
		label: 'Simulation Tools',
		icon: <FolderIcon style={{ color: 'rgb(255, 212, 90)' }} />,
		info: <Typography>Holds models of tools required for simulating various machining operations.</Typography>,
	},
	{
		label: 'SWOODDesign',
		icon: <FolderIcon style={{ color: 'rgb(255, 212, 90)' }} />,
		info: (
			<Typography>
				This folder contains configurations, models, and assets specific to <SwoodDesignTag />, organizing essential components for design workflows.
			</Typography>
		),
		children: [
			{
				label: 'Connectors',
				icon: <FolderIcon style={{ color: 'rgb(255, 212, 90)' }} />,
				info: (
					<Typography>
						This folder includes a database of connectors that <SwoodDesignTag /> uses to define how components are linked and interact with each other in designs.
					</Typography>
				),
			},
			{
				label: 'EdgeBands',
				icon: <FolderIcon style={{ color: 'rgb(255, 212, 90)' }} />,
				info: (
					<Typography>
						Contains the edgebands database, which is essential for specifying and managing edgeband configurations within <SwoodDesignTag />.
					</Typography>
				),
			},
			{
				label: 'Favorites',
				icon: <FolderIcon style={{ color: 'rgb(255, 212, 90)' }} />,
				info: (
					<Typography>
						Houses the database for storing user-defined favorites, allowing <SwoodDesignTag /> to quickly access preferred items.
					</Typography>
				),
			},
			{
				label: 'Frames',
				icon: <FolderIcon style={{ color: 'rgb(255, 212, 90)' }} />,
				info: (
					<Typography>
						This folder stores all frames created by users within <SwoodDesignTag />. Note that these designs are easily accessible and displayed on the <SwoodTag /> Task Pane.
					</Typography>
				),
			},
			{
				label: 'Hardwares',
				icon: <FolderIcon style={{ color: 'rgb(255, 212, 90)' }} />,
				info: (
					<Typography>
						Comprises all hardware components used in Frames and SWOODBoxes, serving as a centralized repository for parts and assemblies essential to <SwoodDesignTag />.
					</Typography>
				),
			},
			{
				label: 'Materials',
				icon: <FolderIcon style={{ color: 'rgb(255, 212, 90)' }} />,
				info: (
					<Typography>
						Stores the complete database of materials used by <SwoodDesignTag />, including texture images, to support material specification and visual representation in designs.
					</Typography>
				),
			},
			{
				label: 'PanelProcess',
				icon: <FolderIcon style={{ color: 'rgb(255, 212, 90)' }} />,
				info: (
					<Typography>
						Contains the database for managing panel processes within <SwoodDesignTag />.
					</Typography>
				),
			},
			{
				label: 'Panels',
				icon: <FolderIcon style={{ color: 'rgb(255, 212, 90)' }} />,
				info: (
					<Typography>
						Includes <SolidWorksTag /> template models for panels, providing standardized formats that are necessary for efficient panel creation.
					</Typography>
				),
			},
			{
				label: 'Profiles',
				icon: <FolderIcon style={{ color: 'rgb(255, 212, 90)' }} />,
				info: (
					<Typography>
						This folder stores the profiles database used by <SwoodDesignTag />, ensuring consistent profile configurations across designs.
					</Typography>
				),
			},
			{
				label: 'SWOODBox',
				icon: <FolderIcon style={{ color: 'rgb(255, 212, 90)' }} />,
				info: (
					<Typography>
						Contains the models for SWOODBoxes, providing predefined box configurations that <SwoodDesignTag /> utilizes to facilitate rapid design and production setup.
					</Typography>
				),
			},
			{
				label: 'Templates',
				icon: <FolderIcon style={{ color: 'rgb(255, 212, 90)' }} />,
				info: (
					<Typography>
						Houses <SolidWorksTag /> model templates for various components, including panels, frames, and SWOODBoxes, serving as essential starting points for new designs.
					</Typography>
				),
			},
		],
	},
	{
		label: 'Tools',
		icon: <FolderIcon style={{ color: 'rgb(255, 212, 90)' }} />,
		info: (
			<Typography>
				This folder contains the database of tools used within <SwoodCAMTag /> for machining operations.
			</Typography>
		),
	},
]

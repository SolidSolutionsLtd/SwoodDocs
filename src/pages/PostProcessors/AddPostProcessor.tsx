import { Typography } from '@mui/material'
import { BasicTable } from '../../components/BasicTable'
import { tableSampleData } from '../../data/sampleData'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'
import { ImageComponent } from '../../components/ImageComponent'
import { SwoodReportTag } from '../../components/NameTags'

const columns = [
	{ header: 'Swood Version', property: 'SwoodVersion', width: '20%' },
	{ header: 'SolidWorks Version', property: 'SolidWorksVersion', width: '60%' },
	{ header: 'Release Date', property: 'ReleaseDate', width: '20%' },
]

const AddPostProcessor = () => {
	return (
		<>
			<PageTitle title="How to add a Post-Processor?"  />

			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#Define">How to define a frame</a>
					</li>
					<li>
						<a href="#table">Sample Table</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>
					This video will show how to add a <span className="highlight">post processor</span> file to your post library in SwoodCAM. The process shown here will be the same if you have one CNC machine or many.
				</Typography>
			</Section>

			<Section id="Define" title="How to define a frame">
				<Typography>
					To define a <span className="highlight">Frame</span>, add the custom property <span className="red">Frame</span> and set the value to <span className="red">Yes</span>.
				</Typography>
			</Section>

			<Section id="table" title="Sample Table">
				<BasicTable columns={columns} data={tableSampleData} width={700} />
			</Section>

			<ImageComponent source="./images/404dino.png" size="1000px" />
		</>
	)
}

export default AddPostProcessor

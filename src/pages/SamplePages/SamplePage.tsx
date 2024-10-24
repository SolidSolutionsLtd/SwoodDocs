import { Typography } from '@mui/material'
import { BasicTable } from '../../components/BasicTable'
import { tableSampleData } from '../../data/sampleData'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'
import { ImageComponent } from '../../components/ImageComponent'
import YouTubeEmbed from '../../components/YouTubeEmbed'
import { EficadTag, SolidWorksTag, SwoodCAMTag, SwoodTag } from '../../components/NameTags'

const columns = [
	{ header: 'Swood Version', property: 'SwoodVersion', width: '20%' },
	{ header: 'SolidWorks Version', property: 'ReportVersion', width: '20%' },
	{ header: 'Release Date', property: 'ReleaseDate', width: '20%' },
]

const SamplePage = () => {
	return (
		<>
			<PageTitle title="Sample Page" pro beta />

			<nav>
				<ul>
					<li>
						<a href="#overview">Overview</a>
					</li>

					<li>
						<a href="#table">Sample Table</a>
					</li>
				</ul>
			</nav>

			<Section id="overview" title="Overview">
				<Typography>Typography can be used to create a paragraph.</Typography>
				<Typography>This is another paragraph</Typography>
				<Typography>
					the span element can be used to highlight words. <span className="highlight">Frame</span> <span className="red">Red Text</span>
				</Typography>
				<Typography>For commonly used words, use tags instead...</Typography>
				<Typography>
					These are tags that have been predefined... <EficadTag />, <SolidWorksTag /> ,<SwoodTag />, <SwoodCAMTag />
				</Typography>
			</Section>

			<Section id="table" title="Sample Table">
				<BasicTable columns={columns} data={tableSampleData} width={900} />
			</Section>

			<Typography variant="h4">Image Element</Typography>

			<ImageComponent source="./images/404dino.png" size="200px" />

			<Typography variant="h4">Embedded YouTube Videos</Typography>

			<YouTubeEmbed url={`https://www.youtube.com/watch?v=W6bm0QKyq5k&list=PLBmglfhN1t8VC6XoAmclrib2nLVvWcboR&index=2`} />
		</>
	)
}

export default SamplePage

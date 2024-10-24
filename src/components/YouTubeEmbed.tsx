import CardMedia from '@mui/material/CardMedia'

const YouTubeEmbed = ({ url }: { url: string }) => {
	const getYouTubeEmbedId = (url: string) => {
		const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
		const match = url.match(regex)
		return match ? match[1] : null
	}

	const embedId = getYouTubeEmbedId(url)

	return embedId ? (
		<div style={{ display: 'flex', justifyContent: 'center', paddingTop: '50px', paddingBottom: '50px' }}>
			<CardMedia component="iframe" style={{ width: '75%', aspectRatio: '16/9' }} image={`https://www.youtube.com/embed/${embedId}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Embedded YouTube Video" />
		</div>
	) : (
		<p>Invalid YouTube URL</p>
	)
}

export default YouTubeEmbed

import { Skeleton } from '@mui/material'

const Loading = () => {
	return (
		<>
			<Skeleton variant="text" sx={{ fontSize: '5rem' }} />
			<Skeleton variant="rounded" sx={{ fontSize: '1rem' }} style={{ marginTop: '10px', marginLeft: '30px' }} />
			<Skeleton variant="rounded" sx={{ fontSize: '1rem' }} style={{ marginTop: '10px', marginLeft: '30px' }} />
			<Skeleton variant="rounded" sx={{ fontSize: '1rem' }} style={{ marginTop: '10px', marginLeft: '30px' }} />
			<Skeleton variant="rounded" sx={{ fontSize: '1rem' }} style={{ marginTop: '10px', marginLeft: '30px' }} />
			<br />
			<br />
			<Skeleton variant="rounded" width="100%" height={300} />
		</>
	)
}

export default Loading

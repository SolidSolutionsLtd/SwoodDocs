import { Divider } from '@mui/material'

export const SectionDivider = ({ margin = 50 }: { margin?: number }) => {
	return <Divider variant="middle" sx={{ borderColor: 'primary.main', marginTop: `${margin}px`, marginBottom: `${margin}px` }} />
}

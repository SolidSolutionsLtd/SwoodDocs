import { Chip } from '@mui/material'

export const PremiumChip = ({ big }: { big?: boolean }) => {
	return (
		<Chip
			label="PREMIUM"
			variant="outlined"
			color="error"
			size="small"
			sx={{
				marginLeft: '5px',
				fontSize: big ? '1rem' : '0.5rem', // Makes text smaller
				height: big ? '24px' : '12px', // Adjust the height of the chip
				padding: '0px', // Adjusts horizontal padding
				position: 'relative',
				top: big ? '-10px' : '-5px', // Raises the chip slightly
				fontWeight: 'bold',
				color: '#ff7777', // Text color
				borderColor: '#ff7777', // Border color
			}}
		/>
	)
}

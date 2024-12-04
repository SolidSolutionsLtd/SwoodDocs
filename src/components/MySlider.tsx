import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'

const MAX = 5
const MIN = 0
const marks = [
	{
		value: MIN,
		label: '',
	},
	{
		value: MAX,
		label: '',
	},
]

interface IProps {
	value: number
	setValue: React.Dispatch<React.SetStateAction<number>>
	title: string
}

export const MySlider: React.FC<IProps> = ({ title, value, setValue }) => {
	const handleChange = (_: Event, newValue: number | number[]) => {
		setValue(newValue as number)
	}

	return (
		<Box sx={{ width: 250 }}>
			<Typography>{title}</Typography>
			<Slider marks={marks} step={0.5} value={value} valueLabelDisplay="auto" min={MIN} max={MAX} onChange={handleChange} />
			<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Typography variant="body2" onClick={() => setValue(MIN)} sx={{ cursor: 'pointer' }}>
					{MIN} min
				</Typography>
				<Typography variant="body2" onClick={() => setValue(MAX)} sx={{ cursor: 'pointer' }}>
					{MAX} max
				</Typography>
			</Box>
		</Box>
	)
}

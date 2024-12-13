import { Input } from '@mui/material'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'

interface IProps {
	value: number
	setValue: React.Dispatch<React.SetStateAction<number>>
	title: string
	min: number
	max: number
	step: number
}

export const MySlider: React.FC<IProps> = ({ title, value, setValue, min, max, step }) => {
	// Handle slider value changes
	const handleSliderChange = (_: Event, newValue: number | number[]) => {
		if (typeof newValue === 'number') {
			setValue(newValue)
		}
	}

	// Handle input value changes
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = parseFloat(e.target.value)
		if (!isNaN(newValue)) {
			setValue(Math.min(Math.max(newValue, min), max)) // Ensure value is within the range
		}
	}

	// Ensure value is within the range when input field loses focus
	const handleBlur = () => {
		if (value < min) {
			setValue(min)
		} else if (value > max) {
			setValue(max)
		}
	}

	const marks = [
		{
			value: min,
			label: `${min}`,
		},
		{
			value: max,
			label: `${max}`,
		},
	]

	return (
		<Box sx={{ width: 250 }}>
			<Typography>{title}</Typography>
			<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '50px' }}>
				<Slider marks={marks} step={step} value={value} valueLabelDisplay="auto" min={min} max={max} onChange={handleSliderChange} />

				<Input
					value={value}
					size="small"
					onChange={handleInputChange}
					onBlur={handleBlur}
					inputProps={{
						step,
						min,
						max,
						type: 'number',
						'aria-labelledby': 'input-slider',
					}}
				/>
			</Box>
		</Box>
	)
}

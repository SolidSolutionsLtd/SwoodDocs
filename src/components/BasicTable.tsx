import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { v4 as uuidv4 } from 'uuid'
import CheckIcon from '@mui/icons-material/Check'

type IColumn = {
	header: string
	property: string
	width?: string
}

const processProperty = (value: string | boolean, propertyName: string) => {
	if (value === true) return <CheckIcon sx={{ color: 'green' }} />

	if (typeof value === 'string') {
		if (value.includes('<span')) {
			return <div dangerouslySetInnerHTML={{ __html: value }} />
		}
		if (propertyName === 'Type') {
			return <span className={value}>{value}</span>
		}
	}

	return <>{value}</>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BasicTable = ({ columns, data, width }: { columns: IColumn[]; data: any[]; width?: number }) => {
	return (
		<TableContainer
			component={Paper}
			sx={{
				width,
				maxHeight: 800,
				'&::-webkit-scrollbar': {
					width: '8px', // Scrollbar width
				},
				'&::-webkit-scrollbar-thumb': {
					backgroundColor: '#888', // Scrollbar color
					borderRadius: '4px', // Rounded corners
				},
				'&::-webkit-scrollbar-thumb:hover': {
					backgroundColor: '#555', // Color when hovering
				},
			}}
		>
			<Table stickyHeader sx={{ width }} aria-label="simple table">
				<TableHead>
					<TableRow>
						{columns.map(column => (
							<TableCell key={uuidv4()}>{column.header}</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map(item => (
						<TableRow key={uuidv4()} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							{columns.map(column => (
								<TableCell sx={{ whiteSpace: 'pre-line', wordBreak: 'break-word', width: column.width }} key={uuidv4()}>
									{processProperty(item[column.property], column.property)}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { v4 as uuidv4 } from 'uuid'
import CheckIcon from '@mui/icons-material/Check'
import { Avatar, AvatarGroup, Tooltip } from '@mui/material'
import { LinkElement } from './LinkElement'

type IColumn = {
	header: string
	property: string
	width?: string
}

const processProperty = (value: string | boolean | object, propertyName: string, item: object) => {
	if (value === true) return <CheckIcon sx={{ color: 'green' }} />

	if (typeof value === 'string') {
		if (value.includes('<span')) {
			return <div dangerouslySetInnerHTML={{ __html: value }} />
		}
		if (propertyName === 'Type') {
			return <span className={value}>{value}</span>
		}

		/* @ts-expect-error error */
		if (item.Link && propertyName === 'Name') {
			return (
				<>
					{/* @ts-expect-error error */}
					{value} <LinkElement to={item.Link}>learn more</LinkElement>
				</>
			)
		}
	} else if (typeof value === 'object') {
		if (propertyName === 'requirements') {
			return (
				<AvatarGroup spacing="medium">
					{/* @ts-expect-error error */}
					{value.design && (
						<Tooltip title="Design" placement="right" style={{ cursor: 'pointer' }}>
							<Avatar sx={{ bgcolor: '#edbc1a', width: 24, height: 24 }}>D</Avatar>
						</Tooltip>
					)}
					{/* @ts-expect-error error */}
					{value.cam && (
						<Tooltip title="Cam" placement="right" style={{ cursor: 'pointer' }}>
							<Avatar sx={{ bgcolor: 'rgba(133, 151, 234)', width: 24, height: 24 }}>C</Avatar>
						</Tooltip>
					)}

					{/* @ts-expect-error error */}
					{value.nesting && (
						<Tooltip title="Nesting" placement="right" style={{ cursor: 'pointer' }}>
							<Avatar sx={{ bgcolor: 'rgba(240, 131, 131)', width: 24, height: 24 }}>N</Avatar>
						</Tooltip>
					)}
				</AvatarGroup>
			)
		}
		return <></>
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
									{processProperty(item[column.property], column.property, item)}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

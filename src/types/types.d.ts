interface IMenuItem {
	to?: string
	title: string
	postDate?: string
	updateDate?: string
	pro?: boolean
	beta?: boolean
	children?: IMenuItem[]
}

interface IDirectoryItem {
	label: string
	children?: IDirectoryItem[]
	info?: React.ReactNode
	icon?: React.ReactNode
}

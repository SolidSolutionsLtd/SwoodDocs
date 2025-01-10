import { NavLink } from 'react-router-dom'

interface LinkElementProps {
	to: string
	children: React.ReactNode
}

export const LinkElement: React.FC<LinkElementProps> = ({ to, children }) => {
	return (
		<NavLink style={{ textDecoration: 'underline' }} to={to}>
			{children}
		</NavLink>
	)
}

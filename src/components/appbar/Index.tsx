import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'

import AppBarMobile from './AppBarMobile'
import AppBarDesktop from './AppBarDesktop'

function AppBar() {
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.down('md'))

	return (
		<>
			{matches ? (
				<AppBarMobile matches={matches} />
			) : (
				<AppBarDesktop matches={matches} />
			)}
		</>
	)
}

export default AppBar

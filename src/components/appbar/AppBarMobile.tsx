import AppbarProps from '../../types/AppbarProps'

import { AppbarContainer, AppbarHeader } from '../../styles/appbar'
import { IconButton } from '@mui/material'
import { Menu, Search } from '@mui/icons-material'
import Actions from './Actions'
import { useUIContext } from '../../context/ui'

function AppBarMobile({ matches }: AppbarProps) {
	const { drawerOpen, setDrawerOpen, showSearchBox, setShowSearchBox } = useUIContext()

	return (
		<AppbarContainer>
			<IconButton>
				<Menu onClick={() => setDrawerOpen(!drawerOpen)} />
			</IconButton>
			<AppbarHeader textAlign="center" variant="h4">
				My Bags
			</AppbarHeader>
			<IconButton>
				<Search onClick={() => setShowSearchBox(!showSearchBox)} />
			</IconButton>
			<Actions matches={matches} />
		</AppbarContainer>
	)
}

export default AppBarMobile

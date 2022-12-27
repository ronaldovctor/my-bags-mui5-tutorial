import { AppbarContainer, AppbarHeader, MyList } from '../../styles/appbar'
import { ListItemText, ListItemIcon, IconButton } from '@mui/material'

import SearchIcon from '@mui/icons-material/search'
import Actions from './Actions'
import AppbarProps from '../../types/AppbarProps'
import { useUIContext } from '../../context/ui'

function AppBarDesktop({ matches }: AppbarProps) {
	const { showSearchBox, setShowSearchBox } = useUIContext()

	return (
		<AppbarContainer>
			<AppbarHeader>My Bags</AppbarHeader>
			<MyList type="row">
				<ListItemText primary="Categories" />
				<ListItemText primary="Products" />
				<ListItemText primary="Contact Us" />
				<ListItemIcon>
					<IconButton>
						<SearchIcon onClick={() => setShowSearchBox(!showSearchBox)} />
					</IconButton>
				</ListItemIcon>
			</MyList>
			<Actions matches={matches} />
		</AppbarContainer>
	)
}

export default AppBarDesktop

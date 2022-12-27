import {
	ActionIconsContainerDesktop,
	ActionIconsContainerMobile,
	MyList,
} from '../../styles/appbar'
import { ListItemButton, ListItemIcon, Divider } from '@mui/material'
import { ShoppingCart, Favorite, Person } from '@mui/icons-material'

import AppbarProps from '../../types/AppbarProps'
import { Colors } from '../../styles/theme'

function Actions({ matches }: AppbarProps) {
	const Component = matches ? ActionIconsContainerMobile : ActionIconsContainerDesktop

	return (
		<Component>
			<MyList type="row">
				<ListItemButton
					sx={{
						justifyContent: 'center',
					}}
				>
					<ListItemIcon
						sx={{
							display: 'flex',
							justifyContent: 'center',
							color: matches ? Colors.secondary : 'current',
						}}
					>
						<ShoppingCart />
					</ListItemIcon>
				</ListItemButton>
				<Divider orientation="vertical" flexItem />
				<ListItemButton
					sx={{
						justifyContent: 'center',
					}}
				>
					<ListItemIcon
						sx={{
							display: 'flex',
							justifyContent: 'center',
							color: matches ? Colors.secondary : 'current',
						}}
					>
						<Favorite />
					</ListItemIcon>
				</ListItemButton>
				<Divider orientation="vertical" flexItem />

				<ListItemButton
					sx={{
						justifyContent: 'center',
					}}
				>
					<ListItemIcon
						sx={{
							display: 'flex',
							justifyContent: 'center',
							color: matches ? Colors.secondary : 'current',
						}}
					>
						<Person />
					</ListItemIcon>
				</ListItemButton>
			</MyList>
		</Component>
	)
}

export default Actions

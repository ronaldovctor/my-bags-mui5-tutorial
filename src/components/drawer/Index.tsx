import { Divider, Drawer, List, ListItemButton, ListItemText } from '@mui/material'
import { lighten, styled } from '@mui/system'
import { useUIContext } from '../../context/ui'
import { DrawerCloseButton } from '../../styles/appbar'
import { Close } from '@mui/icons-material'
import { Colors } from '../../styles/theme'

const MiddleDivider = styled((props) => <Divider variant="middle" {...props} />)``

function AppDrawer() {
	const { drawerOpen, setDrawerOpen } = useUIContext()

	return (
		<>
			{drawerOpen && (
				<DrawerCloseButton onClick={() => setDrawerOpen(false)}>
					<Close
						sx={{
							fontSize: '2.5rem',
							color: lighten(Colors.secondary, 0.9),
						}}
					/>
				</DrawerCloseButton>
			)}
			<Drawer open={drawerOpen}>
				<List>
					<ListItemButton>
						<ListItemText>Home</ListItemText>
					</ListItemButton>
					<MiddleDivider />
					<ListItemButton>
						<ListItemText>Categories</ListItemText>
					</ListItemButton>
					<MiddleDivider />
					<ListItemButton>
						<ListItemText>Products</ListItemText>
					</ListItemButton>
					<MiddleDivider />
					<ListItemButton>
						<ListItemText>About Us</ListItemText>
					</ListItemButton>
					<MiddleDivider />
					<ListItemButton>
						<ListItemText>Contact Us</ListItemText>
					</ListItemButton>
				</List>
			</Drawer>
		</>
	)
}

export default AppDrawer

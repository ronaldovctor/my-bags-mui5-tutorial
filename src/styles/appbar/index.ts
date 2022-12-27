import { styled } from '@mui/material/styles'

import { Box, Typography, List, IconButton } from '@mui/material'
import { Colors } from '../theme'

import '@fontsource/berkshire-swash'

// Container
export const AppbarContainer = styled(Box)(() => ({
	display: 'flex',
	marginTop: 4,
	justifyContent: 'center',
	alignItems: 'center',
	padding: '2px 8px',
}))

// Header
export const AppbarHeader = styled(Typography)(() => ({
	padding: '4px',
	flex: 1,
	fontSize: '3em',
	fontFamily: "'Berkshire Swash', 'cursive'",
	whiteSpace: 'nowrap',
	color: Colors.secondary,
}))

// List
interface MyListProps {
	type: String
}

export const MyList = styled(List)(({ type }: MyListProps) => ({
	display: type === 'row' ? 'flex' : 'block',
	flexGrow: 1,
	justifyContent: 'center',
	alignItems: 'center',
	marginInline: '10px',
}))

export const ActionIconsContainerDesktop = styled(Box)(() => ({
	flexGrow: 0,
}))

export const ActionIconsContainerMobile = styled(Box)(() => ({
	display: 'flex',
	background: Colors.shaft,
	position: 'fixed',
	bottom: 0,
	left: 0,
	width: '100%',
	alignItems: 'center',
	zIndex: 99,
	borderTop: `1px solid ${Colors.border}`,
}))

export const DrawerCloseButton = styled(IconButton)(() => ({
	position: 'absolute',
	top: 10,
	left: '250px',
	zIndex: 10000,
}))

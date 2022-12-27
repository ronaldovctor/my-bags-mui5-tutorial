import { styled } from '@mui/material/styles'

import { Box, Typography, List } from '@mui/material'
import { Colors } from '../theme'

export const PromotionsContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '20px 0px',
	overflow: 'hidden',
	background: Colors.secondary,
	[theme.breakpoints.down('md')]: {
		padding: '20px 0px',
	},
}))

export const MessageText = styled(Typography)(({ theme }) => ({
	fontFamily: "'Berkshire Swash', 'cursive'",
	[theme.breakpoints.down('md')]: {
		fontSize: '2rem',
	},
	color: Colors.white,
	fontSize: '1.5rem',
}))

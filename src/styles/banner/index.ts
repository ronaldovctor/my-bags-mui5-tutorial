import { styled } from '@mui/material/styles'

import { Box, Button, Typography } from '@mui/material'
import { Colors } from '../theme'
import { shouldForwardProp } from '@mui/styled-engine'

export const BannerContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	width: '100%',
	height: '100%',
	padding: '0px',
	backgroundColor: Colors.light_gray,
	[theme.breakpoints.down('sm')]: {
		flexDirection: 'column',
		alignItems: 'center',
	},
}))

export const BannerContent = styled(Box)(() => ({
	display: 'flex',
	justifyContent: 'center',
	flexDirection: 'column',
	maxWidth: 420,
	padding: '30px',
	overflow: 'hidden',
}))

export const BannerImage = styled('img')(({ src, theme }) => ({
	src: `url(${src})`,
	width: '500px',
	objectFit: 'cover',
	[theme.breakpoints.down('md')]: {
		width: '250px',
	},
	[theme.breakpoints.down('sm')]: {
		width: '280px',
	},
}))

export const BannerTitle = styled(Typography)(({ theme }) => ({
	lineHeight: 1.55,
	fontSize: '72px',
	marginBottom: '20px',
	[theme.breakpoints.down('md')]: {
		lineHeight: 1,
	},
	[theme.breakpoints.down('sm')]: {
		fontSize: '42px',
	},
}))

export const BannerDescription = styled(Typography)(({ theme }) => ({
	lineHeight: 1.25,
	letterSpacing: 1.25,
	marginBottom: '3em',
	[theme.breakpoints.down('sm')]: {
		lineHeight: 1.15,
		letterSpacing: 1.15,
		marginBottom: '1.5em',
	},
}))

export const BannerShopButton = styled(Button, {
	shouldForwardProp: (prop) => prop !== 'color',
	name: 'MyShopButton',
	slot: 'Root',
	overridesResolver: (props, styles) => [
		styles.root,
		props.color === 'primary' && styles.primary,
		props.color === 'secondary' && styles.secondary,
	],
})(({ theme }) => ({
	padding: '20px 0px',
	fontWeight: 'bold',
	[theme.breakpoints.down('sm')]: {
		padding: '10px 0px',
		fontSize: '14px',
	},
}))

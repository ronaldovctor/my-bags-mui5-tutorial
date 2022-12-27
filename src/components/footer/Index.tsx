import { Box, Button, Grid, List, ListItemText, Stack, Typography } from '@mui/material'
import { FooterTitle, SubscribeTf } from '../../styles/footer'
import { Colors } from '../../styles/theme'
import { Facebook, Instagram, Send, Twitter } from '@mui/icons-material'

function Footer() {
	return (
		<Box
			sx={{
				backgroundColor: Colors.shaft,
				color: Colors.white,
				p: { xs: 4, md: 10 },
				pt: 12,
				pb: 12,
				fontSize: { xs: '12px', md: '14px' },
			}}
		>
			<Grid container spacing={2} justifyContent="center">
				<Grid item md={6} lg={4}>
					<FooterTitle variant="body1">About Us</FooterTitle>
					<Typography variant="caption">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit id modi
						excepturi ea error. Odit id modi excepturi ea error.
					</Typography>
					<Box
						sx={{
							mt: 4,
							color: Colors.dove_gray,
						}}
					>
						<Facebook
							sx={{
								mr: 1,
							}}
						/>
						<Twitter
							sx={{
								mr: 1,
							}}
						/>
						<Instagram />
					</Box>
				</Grid>
				<Grid item md={6} lg={2}>
					<FooterTitle variant="body1">Information</FooterTitle>
					<List>
						<ListItemText>
							<Typography lineHeight={2} variant="caption">
								About Us
							</Typography>
						</ListItemText>
						<ListItemText>
							<Typography lineHeight={2} variant="caption">
								Order Tracking
							</Typography>
						</ListItemText>
						<ListItemText>
							<Typography lineHeight={2} variant="caption">
								Privacy &amp; Policy
							</Typography>
						</ListItemText>
						<ListItemText>
							<Typography lineHeight={2} variant="caption">
								Terms &amp; Conditions
							</Typography>
						</ListItemText>
					</List>
				</Grid>
				<Grid item md={6} lg={2}>
					<FooterTitle variant="body1">My Account</FooterTitle>
					<List>
						<ListItemText>
							<Typography lineHeight={2} variant="caption">
								Login
							</Typography>
						</ListItemText>
						<ListItemText>
							<Typography lineHeight={2} variant="caption">
								My Cart
							</Typography>
						</ListItemText>
						<ListItemText>
							<Typography lineHeight={2} variant="caption">
								My Account
							</Typography>
						</ListItemText>
						<ListItemText>
							<Typography lineHeight={2} variant="caption">
								Wishlist
							</Typography>
						</ListItemText>
					</List>
				</Grid>
				<Grid item md={6} lg={4}>
					<FooterTitle variant="body1">Newsletter</FooterTitle>
					<Stack>
						<SubscribeTf
							color="primary"
							label="Email address"
							variant="standard"
						></SubscribeTf>
						<Button
							startIcon={<Send sx={{ color: Colors.white }} />}
							sx={{ mt: 4, mb: 4 }}
							variant="contained"
						>
							Subscribe
						</Button>
					</Stack>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Footer

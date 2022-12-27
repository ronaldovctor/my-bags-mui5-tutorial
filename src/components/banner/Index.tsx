import { useTheme } from '@mui/material/styles'
import { useMediaQuery, Typography } from '@mui/material'
import {
	BannerContainer,
	BannerContent,
	BannerDescription,
	BannerImage,
	BannerShopButton,
	BannerTitle,
} from '../../styles/banner'

function Banner() {
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.down('md'))

	return (
		<BannerContainer>
			<BannerImage src="/images/banner/banner.png" />
			<BannerContent>
				<Typography variant="h6">Huge Collection</Typography>
				<BannerTitle variant="h2">New Bags</BannerTitle>
				<BannerDescription variant="subtitle1">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum non
					beatae quas! Veniam dicta culpa similique voluptas reprehenderit nobis.
				</BannerDescription>
				<BannerShopButton color="primary">Show Now</BannerShopButton>
			</BannerContent>
		</BannerContainer>
	)
}

export default Banner

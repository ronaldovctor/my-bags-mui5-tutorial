import {
	Dialog,
	DialogContent,
	DialogTitle,
	IconButton,
	Slide,
	Typography,
	Box,
	useTheme,
	useMediaQuery,
	Button,
} from '@mui/material'
import { Colors } from '../../styles/theme'
import { styled } from '@mui/system'
import { Close, Facebook, Favorite, Instagram, Twitter } from '@mui/icons-material'
import { MouseEvent } from 'react'
import { ProductImage, Product } from '../../styles/product'
import IncDec from '../ui/Index'
import { useUIContext } from '../../context/ui'

function SlideTransition(props: any) {
	return <Slide direction="down" {...props} />
}

interface ProductDetailProps {
	open: boolean
	onClose: (value: MouseEvent<HTMLButtonElement> | undefined) => {}
}

const ProductDetailWrapper = styled(Box)(({ theme }) => ({
	display: 'flex',
	padding: theme.spacing(4),
}))
const ProductDetailInfoWrapper = styled(Box)(() => ({
	display: 'flex',
	flexDirection: 'column',
	width: 500,
	lineHeight: 1.5,
}))

function ProductDetail({ open, onClose }: ProductDetailProps) {
	const product = useUIContext().dialogProd

	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.down('md'))

	return (
		<Dialog open={open} TransitionComponent={SlideTransition} fullScreen>
			<DialogTitle
				sx={{
					backgroundColor: Colors.secondary,
				}}
			>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						gap: '30px',
					}}
				>
					<Typography variant="h4">{product.name}</Typography>
					<IconButton onClick={onClose}>
						<Close />
					</IconButton>
				</Box>
			</DialogTitle>
			<DialogContent>
				<ProductDetailWrapper flexDirection={matches ? 'column' : 'row'}>
					<Product sx={{ mr: 4 }}>
						<ProductImage src={product.image} />
					</Product>
					<ProductDetailInfoWrapper>
						<Typography variant="subtitle1">SKU 123</Typography>
						<Typography variant="subtitle1">Availability: 5 in stock</Typography>
						<Typography sx={{ lineHeight: 5 }} variant="h4">
							{product.name}
						</Typography>
						<Typography>
							{product.description}
							{product.description}
							{product.description}
						</Typography>
						<Box
							sx={{
								mt: 4,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}
						>
							<IncDec />
							<Typography variant="body1">
								Product unity price: <strong>${product.price}</strong>
							</Typography>
							<Button variant="contained">Add to cart</Button>
						</Box>
						<Box
							display="flex"
							alignItems="center"
							sx={{ mt: 4, color: Colors.light }}
						>
							<Favorite sx={{ mr: 2 }} />
							Add to wishlist
						</Box>
						<Box
							sx={{
								mt: 4,
								color: Colors.dove_gray,
							}}
						>
							<Facebook />
							<Twitter sx={{ pl: 2 }} />
							<Instagram sx={{ pl: 2 }} />
						</Box>
					</ProductDetailInfoWrapper>
				</ProductDetailWrapper>
			</DialogContent>
		</Dialog>
	)
}

export default ProductDetail

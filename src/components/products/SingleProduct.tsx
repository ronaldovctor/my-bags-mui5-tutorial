import {
	Product,
	ProductActionButton,
	ProductActionWrapper,
	ProductAddToCart,
	ProductFavButton,
	ProductImage,
} from '../../styles/product'
import ProductMeta from './ProductMeta'
import { Stack } from '@mui/material'

import ProductProps from '../../types/ProductProps'
import { Favorite, FitScreen, Share } from '@mui/icons-material'
import { useUIContext } from '../../context/ui'
import ProductDetail from '../product-detail/Index'

interface SingleProductProps {
	product: ProductProps
	matches: boolean
}

function SingleProductDesktop({ product, matches }: SingleProductProps) {
	const { dialogOpen, setDialogOpen, setDialogProd } = useUIContext()

	return (
		<>
			<Product>
				<ProductImage src={product.image} />
				<ProductMeta product={product} matches={matches} />
				<ProductActionWrapper>
					<Stack direction="row">
						<ProductFavButton isFav={false}>
							<Favorite />
						</ProductFavButton>
						<ProductActionButton>
							<Share color="primary" />
						</ProductActionButton>
						<ProductActionButton
							onClick={async () => {
								setDialogProd(product)
								setDialogOpen(!dialogOpen)
							}}
						>
							<FitScreen color="primary" />
						</ProductActionButton>
					</Stack>
				</ProductActionWrapper>
			</Product>
			<ProductAddToCart variant="contained">Add to cart</ProductAddToCart>
			<ProductDetail
				open={dialogOpen}
				onClose={async () => setDialogOpen(!dialogOpen)}
			/>
		</>
	)
}

export default SingleProductDesktop

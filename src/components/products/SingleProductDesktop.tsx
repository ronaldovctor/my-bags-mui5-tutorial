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
import { MouseEvent, useState } from 'react'
import ProductDetail from '../product-detail/Index'
import { useUIContext } from '../../context/ui'

interface SingleProductProps {
	product: ProductProps
	matches: boolean
}

function SingleProductDesktop({ product, matches }: SingleProductProps) {
	const { dialogOpen, setDialogOpen, setDialogProd } = useUIContext()
	const [showOptions, setShowOptions] = useState(false)

	const handleMouseEnter = () => {
		setShowOptions(true)
	}
	const handleMouseLeave = () => {
		setShowOptions(false)
	}

	return (
		<>
			<Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
				<ProductImage src={product.image} />
				<ProductFavButton isFav={false}>
					<Favorite />
				</ProductFavButton>
				{showOptions && (
					<ProductAddToCart show={showOptions} variant="contained">
						Add to Cart
					</ProductAddToCart>
				)}
				<ProductActionWrapper show={showOptions}>
					<Stack direction="column">
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
			<ProductMeta product={product} matches={matches} />
			<ProductDetail
				open={dialogOpen}
				onClose={async () => setDialogOpen(!dialogOpen)}
			/>
		</>
	)
}

export default SingleProductDesktop

import { Typography } from '@mui/material'
import { ProductMetaWrapper } from '../../styles/product'
import ProductProps from '../../types/ProductProps'

interface ProductMetaProps {
	product: ProductProps
	matches: boolean
}

function ProductMeta({ product, matches }: ProductMetaProps) {
	return (
		<ProductMetaWrapper>
			<Typography variant={matches ? 'h6' : 'h5'} lineHeight={2}>
				{product.name}
			</Typography>
			<Typography variant={matches ? 'caption' : 'body1'}>
				$ {product.price}
			</Typography>
		</ProductMetaWrapper>
	)
}

export default ProductMeta

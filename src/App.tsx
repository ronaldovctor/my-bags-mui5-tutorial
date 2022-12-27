import { useEffect } from 'react'
import useTitle from './hooks/useTitle'

import { Container, Button, Box, Typography } from '@mui/material'

import { ThemeProvider } from '@mui/system'
import theme from './styles/theme'
import AppBar from './components/appbar/Index'
import Banner from './components/banner/Index'
import Promotions from './components/promotion/Index'
import Products from './components/products/Index'
import Footer from './components/footer/Index'
import AppDrawer from './components/drawer/Index'
import { UIProvider } from './context/ui'
import SearchBox from './components/search/Index'

function App() {
	useTitle('My Bags - Home')

	useEffect(() => {}, [])

	return (
		<ThemeProvider theme={theme}>
			<Container
				maxWidth="xl"
				sx={{
					backgroundColor: '#fff',
				}}
			>
				<UIProvider>
					<>
						<AppBar />
						<Banner />
						<Promotions />
						<Box>
							<Typography
								sx={{
									display: 'block',
									width: 'max-content',
									margin: '0 auto',
									padding: '2rem 0',
								}}
								variant="h4"
							>
								Our Products
							</Typography>
						</Box>
						<Products />
						<Footer />
						<AppDrawer />
						<SearchBox />
					</>
				</UIProvider>
			</Container>
		</ThemeProvider>
	)
}

export default App

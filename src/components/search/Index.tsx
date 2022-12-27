import { useUIContext } from '../../context/ui'
import { IconButton, Slide } from '@mui/material'
import { SearchBoxContainer, SearchField } from '../../styles/search'
import Search from '@mui/icons-material/search'
import { Close } from '@mui/icons-material'

function SearchBox() {
	const { showSearchBox, setShowSearchBox } = useUIContext()

	return (
		<Slide direction="down" in={showSearchBox} timeout={500}>
			<SearchBoxContainer>
				<SearchField
					color="secondary"
					variant="filled"
					fullWidth
					placeholder="Search..."
				/>
				<IconButton>
					<Search
						sx={{
							fontSize: {
								xs: '2rem',
								md: '2rem',
							},
						}}
						color="secondary"
					/>
				</IconButton>
				<IconButton
					onClick={() => setShowSearchBox(!showSearchBox)}
					sx={{
						position: 'absolute',
						top: 10,
						rigth: 10,
					}}
				>
					<Close sx={{ fontSize: '4rem' }} color="secondary" />
				</IconButton>
			</SearchBoxContainer>
		</Slide>
	)
}

export default SearchBox

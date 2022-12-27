import { useEffect, useState } from 'react'
import { MessageText, PromotionsContainer } from '../../styles/promotions'
import { Box, Slide } from '@mui/material'

const messages = [
	'20% off on your first order!',
	'Summer sale starts now, visit any store.',
	'Stay connected in our medias :)',
]

function Promotions() {
	const [messageIndex, setMessageIndex] = useState(0)
	const [show, setShow] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setShow(false)
		}, 2000)

		const interval = setInterval(() => {
			setMessageIndex((prev) => (prev + 1) % messages.length)

			setShow(true)
			setTimeout(() => {
				setShow(false)
			}, 2000)
		}, 3000)

		return () => {
			clearInterval(interval)
		}
	}, [])

	return (
		<PromotionsContainer>
			<Slide
				direction={show ? 'left' : 'right'}
				in={show}
				timeout={{
					enter: 500,
					exit: 200,
				}}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<MessageText>{messages[messageIndex]}</MessageText>
				</Box>
			</Slide>
		</PromotionsContainer>
	)
}

export default Promotions

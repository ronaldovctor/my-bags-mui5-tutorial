import { useEffect } from 'react'

function useTitle(title: string) {
	useEffect(() => {
		if (title) document.title = title
	}, [])
}

export default useTitle

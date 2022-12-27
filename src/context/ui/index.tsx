import { ReactElement, createContext, useContext, useState } from 'react'
import ProductProps from '../../types/ProductProps'

export const UIContext = createContext({
	drawerOpen: false,
	setDrawerOpen: (value: boolean) => {},
	showSearchBox: false,
	setShowSearchBox: (value: boolean) => {},
	dialogOpen: false,
	setDialogOpen: (value: boolean): void => {},
	dialogProd: {} as ProductProps,
	setDialogProd: (value: ProductProps) => {},
})
export const useUIContext = () => useContext(UIContext)

export const UIProvider = ({ children }: { children: ReactElement }) => {
	const [drawerOpen, setDrawerOpen] = useState(false)
	const [showSearchBox, setShowSearchBox] = useState(false)
	const [dialogOpen, setDialogOpen] = useState(false)
	const [dialogProd, setDialogProd] = useState({} as ProductProps)

	const value = {
		drawerOpen,
		setDrawerOpen,
		showSearchBox,
		setShowSearchBox,
		dialogOpen,
		setDialogOpen,
		dialogProd,
		setDialogProd,
	}

	return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}

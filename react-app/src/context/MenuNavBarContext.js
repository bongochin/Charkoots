import React, { createContext, useState } from 'react';

export const MenuNavBarContext = createContext();

export default function MenuNavBarProvider(props) {
	const [tabToDisplay, setTabToDisplay] = useState('');

	return (
		<MenuNavBarContext.Provider value={{ tabToDisplay, setTabToDisplay }}>
			{props.children}
		</MenuNavBarContext.Provider>
	);
}

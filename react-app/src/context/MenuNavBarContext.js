import { createContext, useState, useContext } from 'react';

export const MenuNavBarContext = createContext();
export const useMenuNavBar = () => useContext(MenuNavBarContext);

export default function MenuNavBarProvider(props) {
  const [tabToDisplay, setTabToDisplay] = useState("")

  return (
    <MenuNavBarContext.Provider
      value={{
        tabToDisplay,
        setTabToDisplay
      }}
    >
      {props.children}
    </MenuNavBarContext.Provider>
  );
}

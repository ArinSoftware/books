import React, { createContext, useState } from 'react'


export const ThemeContext = createContext()


const ThemeContextProvider = (props) => {

  const [darkTheme, setDarkTheme] = useState(true)
  const [theme] = useState(
    {
      dark: {bg: '#222529', txt: '#D65F5f', hover: 'rgba(231, 76, 60, 0.8'}, 
      light: {bg: '#F8F9FA', txt: '#222529', hover: 'rgba(254, 209, 54, 0.8'}
    }
  )

    const changeTheme = () => {
      setDarkTheme(!darkTheme)
    }
     

  return (
    <ThemeContext.Provider value={{theme,darkTheme,changeTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
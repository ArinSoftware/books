import React from 'react';

export const ThemeContext =  React.createContext();

class ThemeContextProvider extends React.Component {

  state = {
      isDarkTheme: true,
      dark: {bg: '#222529', txt: '#D65F5f', hover: 'rgba(231, 76, 60, 0.8'}, 
      light: {bg: '#F8F9FA', txt: '#222529', hover: 'rgba(254, 209, 54, 0.8'}
   }

  render() {
    return (
      <ThemeContext.Provider value={{...this.state}}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }

  
}


export default ThemeContextProvider;

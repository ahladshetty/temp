import { createContext, useContext, useState } from "react";
// import PropTypes from 'prop-types';
import PropTypes from 'prop-types'


export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [user, setUser] = useState("broo");

  return (
    <ThemeContext.Provider value={{ user, setUser }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

// custom hook
export const useTheme = () => useContext(ThemeContext);

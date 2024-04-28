import { createContext, useContext, useState, useEffect } from "react";

const themeContext = createContext();

export const useTheme = () => {
  return useContext(themeContext);
};

export const ThemeProvider = ({ children }) => {
  const [isDarMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  const theme = isDarMode ? "dark" : "light";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDarMode]);

  return (
    <themeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </themeContext.Provider>
  );
};

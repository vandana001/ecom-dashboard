import { createContext, useContext, useEffect, useState } from "react";
import { ConfigProvider, theme as antdTheme } from "antd";


const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setMode(saved);
  }, []);

  const toggle = () => {
    const next = mode === "light" ? "dark" : "light";
    setMode(next);
    localStorage.setItem("theme", next);
  };

  const algorithm =
    mode === "dark"
      ? antdTheme.darkAlgorithm
      : antdTheme.defaultAlgorithm;

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      <ConfigProvider theme={{ algorithm }}>{children}</ConfigProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

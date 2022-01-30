import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "../styles/theme.config";
import { useState } from "react";
import Meta from "../components/Meta";
import "../styles/fonts/stylesheet.css";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Meta />
      <GlobalStyles />
      <Component theme={theme} themeToggler={themeToggler} {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

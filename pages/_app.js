import dynamic from "next/dynamic";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "../styles/theme.config";
import { useState } from "react";
import Meta from "../components/Meta";
import "../styles/fonts/stylesheet.css";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Meta />
      <AnimatedCursor
        innerSize={18}
        outerSize={20}
        color={theme === "light" ? "190, 119, 54" : "127, 125, 144"}
        outerAlpha={0.2}
        innerScale={0.9}
        outerScale={3}
      />
      <GlobalStyles />
      <Component theme={theme} themeToggler={themeToggler} {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

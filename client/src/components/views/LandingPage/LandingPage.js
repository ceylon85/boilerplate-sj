import React from "react";
import { Typography } from "antd";
import { useDarkMode } from "../theme/useDarkMode";
import { lightTheme, darkTheme } from "../theme/theme";
import { GlobalStyles } from "../theme/global";
import Toggle from "../theme/Toggle";
import { ThemeProvider } from "styled-components";

function LandingPage() {
  const Title = Typography;
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <div className="app">
      <h1 style={{ fontSize: "2rem" }}>시작 페이지</h1>
      <hr/>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <h1>It's a {theme === "light" ? "light theme" : "dark theme"}!</h1>
        <footer>
          <span>Credits:</span>
          <small>
            <b>Sun</b> icon made by{" "}
            <a href="https://www.flaticon.com/authors/smalllikeart">
              smalllikeart
            </a>{" "}
            from <a href="https://www.flaticon.com">www.flaticon.com</a>
          </small>
          <small>
            <b>Moon</b> icon made by{" "}
            <a href="https://www.freepik.com/home">Freepik</a> from{" "}
            <a href="https://www.flaticon.com">www.flaticon.com</a>
          </small>
        </footer>
      </ThemeProvider>
      
    </div>
  );
}

export default LandingPage;

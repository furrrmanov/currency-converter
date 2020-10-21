import React from "react";
import { useSelector } from "react-redux";

import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";

import { themes } from "@/utils/theme";

export default function ThemeWrapper({ children }) {
  const darkTheme = useSelector(state => state.global.darkTheme);

  const GlobalStyle = createGlobalStyle`
  body {
    background: ${
      darkTheme ? themes.darkTheme.background : themes.lightTheme.background
    };
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display:flex;
    justify-content:center;
  }
  
  .reverse-rates-button:hover {
    color: ${
      darkTheme ? themes.darkTheme.background : themes.lightTheme.background
    };
    background-color: ${
      darkTheme ? themes.darkTheme.text : themes.lightTheme.text
    };
  }

  .togggle-button-title {
    color: ${darkTheme ? themes.darkTheme.text : themes.lightTheme.text};
  }

  .caches-link {
    color: #ffffff;
  }

  .caches-link:hover {
    color: #cad2c5;
  }
  `;

  const dark = createMuiTheme({
    palette: {
      primary: {
        main: themes.darkTheme.primary,
      },
      secondary: {
        main: themes.darkTheme.secondary,
      },
      text: {
        primary: themes.darkTheme.text,
        secondary: themes.darkTheme.text,
      },
      background: {
        default: themes.darkTheme.background,
      },
      action: {
        selected: themes.darkTheme.background,
        hover: themes.darkTheme.primary,
      },
    },
  });

  const light = createMuiTheme({
    palette: {
      primary: {
        main: themes.lightTheme.primary,
      },
      secondary: {
        main: themes.lightTheme.secondary,
      },
      text: {
        primary: themes.lightTheme.text,
        secondary: themes.lightTheme.text,
      },
      background: {
        default: themes.lightTheme.background,
      },
      action: {
        selected: themes.lightTheme.background,
        hover: themes.lightTheme.secondary,
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme ? themes.darkTheme : themes.lightTheme}>
      <GlobalStyle />
      <MuiThemeProvider theme={darkTheme ? dark : light}>
        {children}
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

import React, { Component } from 'react'
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { theme } from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

export default class App extends Component {


  render() {


    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}


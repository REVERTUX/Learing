import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../utils/theme";

const GlobalStyle = createGlobalStyle`
  body {
      padding: 0;
      margin: 0;
      font-family: "Open Sans", sans-serif;
      background: ${({ theme }) => theme.colors.darkGrey};
      font-size: 0.8rem;
  }

  * {
      box-sizing: border-box;
  }
`;

const StyledWrapper = styled.div`
  //   display: grid;
  //   grid-template-columns: repeat(6, 1fr);
  //   grid-template-areas:
  //     "nav-page nav-page nav-page nav-page nav-page nav-page"
  //     "header header header header header header"
  //     "nav-sub content content content content .";
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <StyledWrapper>{children}</StyledWrapper>
    </>
  </ThemeProvider>
);

export default Layout;

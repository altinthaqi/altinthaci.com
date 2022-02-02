import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#F5F3F1",
  bannerBody: "#F5EFE9",
  header: "#F5F3F1",
  text: "#2E2E2E",
  secondaryText: "#535353",
  skillsText: "#929292",
  accent: "#F1E5DA",
  accentBody: "#F1E5DA",
  greyText: "#686868",
};

export const darkTheme = {
  body: "#2E2E2E",
  bannerBody: "#292929",
  header: "#383838",
  text: "#F5F3F1",
  secondaryText: "#F7FAFC",
  skillsText: "#C0C0C0",
  accent: "#3D3A50",
  accentBody: "#2E2E2E",
  greyText: "#c2c2c2aa",
};

export const GlobalStyles = createGlobalStyle`

* {
   box-sizing: border-box; margin: 0;
   /* font-family: "arsenica_trialmedium"; */
   padding: 0;
}

a{
  text-decoration: none;
}
body {
  
   transition: all 0.50s linear;
   background-color: ${(props) => props.theme.body};
}`;

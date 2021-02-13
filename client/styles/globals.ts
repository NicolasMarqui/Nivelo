import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Biryani', sans-serif;
    width: 100%;
    min-height: 100vh;
  }
`;

export const theme = {
    colors: {
        primary: "#FF4338",
        purple: "#8390FA",
        lightOrange: "#E76F51",
        lightBlue: "#68E1FD",
        lightGreen: "#57CC99",
        lightYellow: "#F4D35E",
        orangeDetail: "#F79D65",
        verificadoColor: "#4895EF",
    },
    fonts: {
        patua: "Patua One",
    },
};

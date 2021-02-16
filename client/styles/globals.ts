import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Biryani', sans-serif;
    width: 100%;
    min-height: 100vh;

    .body__overlay{
      display: none;
    }

    &.no-scroll{
      overflow: hidden;
    }

    &.overlay{
      .body__overlay{
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 30;
        background-color: rgba(0,0,0,0.4);
      }
    }
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
        lightPink: "#FF928B",
        verificadoColor: "#4895EF",
        primaryHover: "rgba(255, 67, 56, 0.56)",
    },
    fonts: {
        patua: "Patua One",
    },
};

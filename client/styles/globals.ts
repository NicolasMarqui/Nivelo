import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Biryani', sans-serif;
    width: 100%;
    min-height: 100vh;
    background-color: #fafafc;

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
        z-index: 20;
        background-color: rgba(0,0,0,0.4);
      }

      &.ov__less{
        .body__overlay{
          background-color: rgba(0,0,0,0.2);
        }
      }
    }
  }

  .pagination{
    display: flex;
    justify-content: center;
    align-items: center;

    li{
      margin: 0 5px;
      padding: 10px;
      background-color: #f2f2f2;
      border-radius: 8px;
      cursor: pointer;

      a{
        margin-top: 2px;
        display: block;
        outline: none;
      }

      &:hover{
        background-color: #E76F51;
        color: #fff;
      }

      &.active{
        background-color: #FF4338;

        a{
          color: #fff;
        }
      }

      &.previous{
        margin-right: 30px;
      }

      &.next{
        margin-left: 30px;
      }
    }

  }

  #nprogress .bar {
    background: #FF4338;

    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;

    width: 100%;
    height: 5px;
  }

  .rsw_2Y{
    overflow-x: hidden;
    min-height: 300px;
  }

  .rsw_2f{
    height: 100%;
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

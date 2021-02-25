import { keyframes } from "styled-components";

export const navBarHover = keyframes`
    0% {
        width: 20%;
    }

    50% {
        width: 50%;
    }

    100% {
        width: 100%;
    }
`;

export const SideOpen = keyframes`
    0% {
        -webkit-transform: translateX(400px);
            transform: translateX(400px);
    }
    100% {
        -webkit-transform: translateX(0px);
                transform: translateX(0px);
    }
`;

export const SideOpenLeft = keyframes`
    0% {
        -webkit-transform: translateX(-800px);
            transform: translateX(-800px);
    }
    100% {
        -webkit-transform: translateX(0px);
                transform: translateX(0px);
    }
`;

export const buttonHover = keyframes`
    0% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    }
    100% {
        -webkit-transform: translateZ(160px);
                transform: translateZ(160px);
    }
`;

export const fadeIn = keyframes`
    0% {opacity: 0;}
    100% {opacity: 1;}
`;

export const slideInDown = keyframes`
    0% {
        -webkit-transform: translateY(-1%);
        transform: translateY(-1%);
        visibility: visible;
        }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
`;

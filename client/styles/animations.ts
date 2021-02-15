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
        -webkit-transform: translateX(-400px);
            transform: translateX(-400px);
    }
    100% {
        -webkit-transform: translateX(0px);
                transform: translateX(0px);
    }
`;

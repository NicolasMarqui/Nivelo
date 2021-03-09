import styled, { css } from "styled-components";
import {
    fadeIn,
    SideOpen,
    SideOpenBottom,
    SideOpenLeft,
} from "../../styles/animations";

interface SideInsideProps {
    left?: boolean;
    open?: boolean;
    size?: string;
    bottom?: boolean;
}

export const SideWrapper = styled.div<SideInsideProps>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 40;
    display: none;
    animation: ${fadeIn} 0.8s both;

    ${({ open }) =>
        open &&
        css`
            display: flex;
        `}
`;

export const SideInside = styled.div<SideInsideProps>`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: ${({ size }) => size || "353px"};
    background-color: #fff;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: ${SideOpen} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    flex-direction: column;
    border-radius: 30px 0 0 30px;

    .side__header {
        padding: 10px 17px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;

        .header__icon {
            margin-top: -4px;
        }

        h4 {
            font-size: 18px;
        }

        .header__close {
            background-color: #222;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;

            svg {
                padding: 10px;
            }

            &:hover {
                background-color: rgba(0, 0, 0, 0.2);
            }
        }
    }

    .side__content {
        height: calc(100% - 113px);
        overflow-y: auto;
        padding: 20px;
    }

    .side__footer {
        position: absolute;
        bottom: 0px;
        left: 0;
        right: 0;
        background-color: #f2f2f2;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    ${({ left }) =>
        left &&
        css`
            right: auto;
            left: 0;
            border-radius: 0px 30px 30px 0px;
            animation: ${SideOpenLeft} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
                both;
        `}

    ${({ bottom }) =>
        bottom &&
        css`
            right: auto;
            left: auto;
            bottom: 0 !important;
            top: 100px !important;
            margin: 0 auto;
            border-radius: 30px 30px 0px 0px;
            animation: ${SideOpenBottom} 0.5s
                cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        `}
`;

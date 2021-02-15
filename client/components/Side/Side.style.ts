import styled, { css } from "styled-components";
import { SideOpen, SideOpenLeft } from "../../styles/animations";

interface SideWrapperProps {
    left?: boolean;
    open: boolean;
}

export const SideWrapper = styled.div<SideWrapperProps>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 353px;
    background-color: #fff;
    overflow-x: hidden;
    z-index: 40;
    display: none;
    animation: ${SideOpen} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    flex-direction: column;

    .side__header {
        width: 100%;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: orange;

        .header__icon {
            margin-top: -4px;
        }

        h4 {
            font-size: 18px;
        }
    }

    .side__content {
        height: calc(100% - 113px);
        overflow-y: auto;
        padding: 20px;
    }

    .side__footer {
        position: fixed;
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
            animation: ${SideOpenLeft} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
                both;
        `}

    ${({ open }) =>
        open &&
        css`
            display: flex;
        `}
`;

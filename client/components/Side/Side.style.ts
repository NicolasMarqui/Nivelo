import styled, { css } from "styled-components";
import { SideOpen, SideOpenLeft } from "../../styles/animations";

interface SideWrapperProps {
    left?: boolean;
    open: boolean;
    size?: string;
}

export const SideWrapper = styled.div<SideWrapperProps>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: ${({ size }) => size || "353px"};
    background-color: #fff;
    overflow-x: hidden;
    z-index: 40;
    display: none;
    animation: ${SideOpen} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    flex-direction: column;

    .side__header {
        padding: 10px 17px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: orange;

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

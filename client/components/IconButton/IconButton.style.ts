import styled, { css } from "styled-components";
import { buttonHover } from "../../styles/animations";

interface IconButtonWrapperProps {
    smaller?: boolean;
    bColor?: string;
    color?: string;
    isLoading?: boolean;
}

export const IconButtonWrapper = styled.div<IconButtonWrapperProps>`
    margin: 0 8px;
    padding: 10px 20px;
    background-color: ${({ bColor }) => bColor || "#f2f2f2"};
    border-radius: 28.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    cursor: pointer;

    .icb__icon {
        background-color: #fff;
        padding: 8px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    ${({ smaller }) =>
        smaller &&
        css`
            .icb__icon {
                padding: 0;
                background-color: transparent;

                svg {
                    color: #fff;
                }
            }
        `}

    ${({ isLoading }) =>
        isLoading &&
        css`
            pointer-events: none;
            opacity: 0.4;
        `}

    .icb__text {
        margin: 5px 10px 0;
        color: ${({ color }) => color || "#a6a6a6"};
        font-weight: 400;
        font-size: 16px;
    }

    &:hover {
        filter: brightness(120%);

        .icb__icon {
            svg {
                transform: scale(1.08);
            }
        }
    }
`;

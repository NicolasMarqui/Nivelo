import styled, { css } from "styled-components";

interface IconButtonWrapperProps {
    smaller?: boolean;
}

export const IconButtonWrapper = styled.div<IconButtonWrapperProps>`
    margin: 0 8px;
    padding: 10px 20px;
    background-color: #f2f2f2;
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

    .icb__text {
        margin: 5px 10px 0;
        color: #a6a6a6;
        font-weight: 400;
        font-size: 16px;
    }

    &:hover {
        .icb__icon {
            svg {
                transform: scale(1.08);
            }
        }
    }
`;

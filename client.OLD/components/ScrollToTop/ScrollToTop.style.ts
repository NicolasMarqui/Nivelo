import styled, { css } from "styled-components";

interface ScrollToTopWrapperProps {
    isVisible: boolean;
}

export const ScrollToTopWrapper = styled.div<ScrollToTopWrapperProps>`
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: none;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    z-index: 30;

    ${({ isVisible }) =>
        isVisible &&
        css`
            display: flex;
        `}
`;

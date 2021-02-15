import styled, { css } from "styled-components";

interface DropdownWrapperProps {
    isVisible?: boolean;
}

export const DropdownWrapper = styled.div<DropdownWrapperProps>`
    display: none;
    padding: 20px;
    border-radius: 1.5px;
    background-color: #fff;
    position: absolute;
    top: 120%;
    /* right: 0;
    left: 0; */
    width: 400px;
    z-index: 20;
    box-shadow: 1px 6px 20px #e2e2e2;
    transition: all 0.4s linear;
    ${({ isVisible }) =>
        isVisible &&
        css`
            display: block;
        `}
    .drop__footer {
        display: flex;
        justify-content: center;
    }
`;

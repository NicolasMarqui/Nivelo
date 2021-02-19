import styled, { css } from "styled-components";

interface DropdownWrapperProps {
    isVisible?: boolean;
}

export const DropdownWrapper = styled.div<DropdownWrapperProps>`
    display: none;
    padding: 20px;
    border-radius: 30px 0 30px 30px;
    background-color: #fff;
    position: absolute;
    top: 90%;
    right: 0;
    width: 200px;
    z-index: 40;
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

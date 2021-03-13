import styled, { css } from "styled-components";

interface UserOrderDetailsWrapperProps {
    isVisible: boolean;
}

export const UserOrderDetailsWrapper = styled.div<UserOrderDetailsWrapperProps>`
    margin-top: 5px;
    background: #f2f2f2;
    padding: 20px;
    display: none;
    border-radius: 20px;
    position: relative;

    ${({ isVisible }) =>
        isVisible &&
        css`
            display: flex;
        `}

    &::before {
        content: "";
        position: absolute;
        bottom: 100%;
        left: 20px;
        width: 7px;
        height: 20px;
        background: ${({ theme }) => theme.colors.primary};
    }
`;

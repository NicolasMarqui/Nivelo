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

    ul {
        width: 100%;

        li {
            margin: 15px 0;
        }

        .details__order {
            display: flex;

            .ord {
                display: flex;
                align-items: center;
                margin: 5px 0;

                strong {
                    font-weight: 700;
                    font-size: 15px;
                    margin-right: 5px;
                }

                h3 {
                    font-size: 18px;
                    color: #696969;
                }
            }
        }
    }
`;

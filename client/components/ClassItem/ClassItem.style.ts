import styled, { css } from "styled-components";

interface ClassItemWrapperProps {
    smaller?: boolean;
}

export const ClassItemWrapper = styled.div<ClassItemWrapperProps>`
    padding: 10px 20px;
    background-color: #f2f2f2;
    border-radius: 16px;
    margin: 10px 0;
    display: flex;
    align-items: center;
    z-index: 2;
    cursor: pointer;

    ${({ smaller }) =>
        smaller &&
        css`
            padding: 0px 15px !important;

            .class__icon {
                svg {
                    font-size: 15px !important;
                }
            }

            .class__info {
                flex: 3 !important;

                h3 {
                    font-size: 15px !important;
                }
            }
        `}

    &:hover {
        transform: scale(1.02);
        transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    .class__icon {
        padding: 0 10px;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            margin-top: -4px;
        }
    }

    .class__info {
        flex: 7;
        padding-left: 10px;

        h5 {
            font-size: 17px;
            font-weight: 400;
            color: #222;
        }

        p {
            font-size: 14px;
            color: #b1b1b1;
            margin-top: 4px;
        }
    }

    .class__price {
        flex: 1.5;
    }
`;

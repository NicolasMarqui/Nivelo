import styled, { css } from "styled-components";

interface TutorCardWrapperProps {
    isColumn: boolean;
}

export const TutorCardWrapper = styled.div<TutorCardWrapperProps>`
    display: flex;
    background-color: #f3f3f3;
    border-radius: 55px;
    padding: 60px 26px;
    margin: 15px 0;

    .tutor__fRow {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        .tutor__avatar {
            border-radius: 50%;
        }

        .fRow__rating {
            margin: 10px 0;
        }
    }

    .tutor__sRow {
        flex: 3;
        padding: 0 20px;
        border-right: 2px solid #c4c4c4;
        cursor: pointer;

        .sRow__prices {
            margin-top: 20px;
            display: flex;
            flex-direction: column;

            h5 {
                font-size: 15px;
                font-weight: 700;
            }

            .prices__value {
                font-size: 25px;
                margin-top: 10px;
                color: ${({ theme }) => theme.colors.primary};
                font-weight: 400;
            }

            .prices__btn {
                display: flex;
                margin-top: 25px;

                .jLtcft {
                    border-radius: 8px;
                    padding: 10px;

                    .icb__text {
                        color: #fff;
                        font-weight: 900;
                        font-size: 14px;
                    }

                    .icb__icon {
                        svg {
                            font-size: 14px;
                        }
                    }

                    &:first-child {
                        background-color: ${({ theme }) =>
                            theme.colors.lightPink};
                    }

                    &:last-child {
                        background-color: ${({ theme }) =>
                            theme.colors.lightBlue};
                    }
                }
            }
        }
    }

    .tutor__tRow {
        flex: 3;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    ${({ isColumn }) =>
        isColumn &&
        css`
            flex-direction: column;
            width: 100%;
            overflow-x: auto;
            border-radius: 25px;
            padding: 60px 16px;
            margin: 15px;

            @media (min-width: 992px) {
                width: 50%;
            }

            @media (min-width: 1400px) {
                width: 40%;
            }

            .tutor__fRow {
                margin-bottom: 30px;
            }

            .tutor__sRow {
                border-right: none;
                h2,
                h3,
                p {
                    text-align: center;
                }

                .cQdqgO {
                    width: 100%;
                }

                .sRow__prices {
                    justify-content: center;
                    align-items: center;

                    h5 {
                        text-align: center;
                    }
                }
            }

            .tutor__tRow {
                margin-top: 40px;
            }
        `}
`;

export const TutorTitle = styled.h2`
    font-weight: 900;
    font-size: 24px;
    color: #222;
`;

export const TutorSubtitle = styled.h3`
    font-size: 14px;

    span {
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 700;
    }
`;

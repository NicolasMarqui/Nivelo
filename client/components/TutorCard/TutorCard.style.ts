import styled, { css } from "styled-components";

interface TutorCardWrapperProps {
    isColumn: boolean;
}

export const TutorCardWrapper = styled.div<TutorCardWrapperProps>`
    display: flex;
    background-color: #f3f3f39e;
    border-radius: 55px;
    padding: 60px 26px 30px;
    margin: 15px 0 30px;
    position: relative;
    box-shadow: 5px 8px 8px #f2f2f2;

    &:hover {
        transform: scale(1.01);
        transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    .tutor__fRow {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        cursor: pointer;

        .fRow__type {
            z-index: 3;
            position: absolute;
            top: 15px;
            right: -14px;

            &::before {
                z-index: 1;
                content: "";
                position: absolute;
                bottom: 7px;
                right: 0;
                height: 13px;
                width: 23px;
                background: #8390fa;
                transform: rotate(327deg);
                border-radius: 0 0 5px 0;
            }
        }

        .tutor__avatar {
            border-radius: 50%;
        }

        .fRow__status {
            margin: 20px 0;
            display: flex;
            align-items: center;
            justify-content: center;

            p {
                font-size: 14px;
                font-weight: 400;
                margin: 7px 0 0 -3px;
            }
        }

        .fRow__rating {
            margin: 0;
        }
    }

    .tutor__sRow {
        flex: 3;
        padding: 0 20px;
        border-right: 2px solid #c4c4c4;
        cursor: pointer;

        .sRow__prices {
            margin-top: 30px;
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

                p {
                    margin: 0 10px 0 0 !important;
                }
            }
        }
    }

    .tutor__tRow {
        flex: 3;
        display: flex;
        justify-content: center;
        align-items: center;

        .react-tabs {
            width: 90%;
        }
    }

    ${({ isColumn }) =>
        isColumn &&
        css`
            flex-direction: column;
            width: 100%;
            overflow-x: auto;
            border-radius: 25px;
            padding: 40px 16px;
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

                .iCBTXn {
                    margin: 14px auto 0;
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

                    .prices__btn {
                        flex-direction: column;

                        & > div {
                            margin: 5px 0;
                        }
                    }
                }
            }

            .tutor__tRow {
                margin-top: 40px;
                display: none;
            }
        `}
`;

export const TutorTitle = styled.h2`
    font-weight: 900;
    font-size: 22px;
    color: #222;
    margin-bottom: 2px;
`;

export const TutorSubtitle = styled.h3`
    font-size: 14px;

    span {
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 700;
    }
`;

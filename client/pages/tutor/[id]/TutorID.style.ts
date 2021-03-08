import styled from "styled-components";

export const Banner = styled.div`
    width: 95%;
    margin: 0 auto;
    position: relative;
    background-image: url("/assets/banner.jpg");
    height: 290px;
    background-position: 15% 15%;
    background-size: cover;
    background-repeat: no-repeat;
    /* background-attachment: fixed; */
    border-radius: 37px;
`;

export const SingleTutorWrapper = styled.div`
    width: 100%;
    display: flex;
    position: relative;

    .st__first {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding: 40px 0 0;
        margin-top: -150px;

        .tutor__avatar {
            border-radius: 50%;
            border: 6px solid ${({ theme }) => theme.colors.primary}!important;
            object-fit: cover;
        }

        .first__rating {
            margin: 20px 0;
        }
    }

    .st__second {
        flex: 3;
        padding: 40px;

        .second__bread {
            margin-top: -142px;
            display: flex;
            flex-direction: column;
        }

        .second__info {
            margin-top: 50px;
        }

        .second__since {
            display: flex;
            align-items: center;
            margin-top: 40px;

            svg {
                margin: -4px 5px 0 0;
            }

            p {
                color: #646464;
                font-size: 14px;

                span {
                    font-weight: 700;
                }
            }
        }

        .second__section {
            margin: 90px 0;
        }

        .second__classes {
            position: relative;

            .fbYLZD {
                margin-bottom: 35px;
                z-index: 2;
            }

            .classes__detail {
                position: absolute;
                height: 220px;
                width: 220px;
                background-color: rgba(247, 157, 101, 0.1);
                border-radius: 50%;
                z-index: -1;

                &.detail__ball1 {
                    top: -53px;
                    left: -91px;
                }

                &.detail__ball2 {
                    top: -53px;
                    right: -91px;
                }

                &.detail__ball3 {
                    bottom: -41px;
                    right: -58px;
                    background-color: rgba(255, 67, 56, 0.17);
                    height: 100px;
                    width: 100px;
                }
            }
        }

        .second__informations {
            .informations__wrapper {
                margin-top: 20px;
                display: flex;
                flex-direction: row;
            }
        }
    }

    .st__third {
        flex: 2;
        margin-top: -160px;
        width: 100%;

        .third__box {
            background-color: #fff;
            padding: 40px 0 20px;
            border-radius: 29px;
            box-shadow: 1px 5px 7px rgba(0, 0, 0, 0.15);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            overflow-x: hidden;

            &.box__sticky {
                max-height: 86vh;
                overflow-y: auto;
            }

            .third__prices {
                margin-top: 20px;
                display: flex;
                flex-direction: column;

                h5 {
                    font-size: 15px;
                    font-weight: 700;
                }

                .prices__value {
                    font-size: 35px;
                    margin-top: 10px;
                    color: ${({ theme }) => theme.colors.primary};
                    font-weight: 400;
                }

                .prices__btn {
                    display: flex;
                    margin-top: 25px;

                    & > div {
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
                    }
                }
            }

            .third__schedule {
                padding: 20px;

                h5 {
                    font-weight: 700;
                    text-align: center;
                }

                .schedule__dates {
                    margin: 15px auto 40px;
                }

                p {
                    text-align: center;
                }

                .epyeh {
                    margin-top: 15px;

                    .icb__text {
                        font-weight: 700;
                    }
                }
            }
        }
    }
`;

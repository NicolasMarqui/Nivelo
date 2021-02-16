import styled from "styled-components";

export const LoginWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url("/assets/pattern.jpg");
    background-position: center;
    background-size: cover;
    position: relative;
    display: flex;

    .login__bg {
        flex: 3;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 0 0 100px;
        order: 2;

        h2 {
            color: #fff;
            z-index: 3;
        }

        .dSZVem {
            font-size: 14px;
            margin: 20px 0 0px;
            line-height: 25px;
            z-index: 3;
        }

        .bg__buttons {
            display: flex;
            width: 100%;

            .fcEtKd {
                margin: 40px 10px 0 0;
                &:first-child {
                    background-color: ${({ theme }) => theme.colors.primary};
                    color: #fff;
                }
            }

            & > div,
            & > button {
                z-index: 3;
            }
        }
    }

    .login__form {
        flex: 1;
        background-color: #fff;
        padding: 40px;
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow-y: auto;

        img {
            padding: 0 26px 10px 0 !important;
        }
    }
`;

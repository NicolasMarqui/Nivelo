import styled from "styled-components";

export const LoginSignupWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;

    .wrapper__detail {
        flex: 1;
        background-color: ${({ theme }) => theme.colors.primary};
        position: relative;

        .detail__bg {
            background-image: url("/assets/student.jpg");
            position: absolute;
            top: 22px;
            bottom: 0;
            left: 30px;
            background-size: cover;
            z-index: 3;
            height: calc(100% - 50px);
            width: 100%;
        }
    }

    .wrapper__form {
        flex: 2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin-top: 50px;

        h2 {
            width: 60%;
        }

        p {
            margin: 20px auto;
        }
    }
`;

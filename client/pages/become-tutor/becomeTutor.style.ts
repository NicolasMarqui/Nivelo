import styled from "styled-components";

export const BecomeTutorWrapper = styled.div`
    width: 28%;
    margin: 20px 57px 0;
    background-color: #fff;
    position: relative;
    border-radius: 30px;
    padding: 30px;

    h2 {
        span {
            color: ${({ theme }) => theme.colors.primary};
        }
    }
`;

export const BecomeTutorBg = styled.div`
    position: absolute;
    top: 98px;
    right: 0;
    bottom: 0;
    width: 72%;
    background-image: url(/assets/student.jpg);
    background-position: center;
    background-size: cover;
`;

export const TutorLoginForm = styled.div`
    padding: 0 30px;
`;

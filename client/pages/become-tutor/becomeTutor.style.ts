import styled from "styled-components";

export const BecomeTutorWrapper = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    height: 100vh;
`;

export const TutorLoginForm = styled.div`
    padding: 0 30px;
`;

export const BecomeTutorCTA = styled.div`
    width: 100%;
    background-color: #fff;
    height: 100%;
    display: flex;
    align-items: center;

    h2 {
        span {
            display: block;
            color: ${({ theme }) => theme.colors.primary};
        }
    }
`;

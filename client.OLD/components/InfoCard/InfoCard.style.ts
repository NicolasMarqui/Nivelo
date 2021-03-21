import styled from "styled-components";

interface InfoCardWrapperProps {
    bgColor?: string;
}

export const InfoCardWrapper = styled.div<InfoCardWrapperProps>`
    padding: 40px 20px;
    background-color: ${({ bgColor, theme }) =>
        bgColor ? bgColor : theme.colors.primary};
    margin: 15px 8px 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    flex: 1;

    h4 {
        font-weight: 700;
        font-size: 55px;
        color: #fff;
    }

    h5 {
        text-align: center;
        color: #fff;
        margin: 8px auto;
        font-size: 17px;
    }
`;

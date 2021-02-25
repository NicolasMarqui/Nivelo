import styled from "styled-components";

interface BackButtonWrapperProps {
    bgColor?: string;
    color?: string;
}

export const BackButtonWrapper = styled.div<BackButtonWrapperProps>`
    padding: 10px 10px 10px 0;
    background-color: ${({ bgColor }) => (bgColor ? bgColor : "")};
    color: ${({ color }) => (color ? color : "")};

    .lcfCps {
        width: 40px;
        padding: 9px 14px 6px;
        color: #222;
    }
`;

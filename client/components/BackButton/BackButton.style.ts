import styled from "styled-components";

interface BackButtonWrapperProps {
    bgColor?: string;
    color?: string;
    jPosition?: string;
}

export const BackButtonWrapper = styled.div<BackButtonWrapperProps>`
    padding: 10px 10px 10px 0;
    background-color: ${({ bgColor }) => (bgColor ? bgColor : "")};
    color: ${({ color }) => (color ? color : "")};
    display: flex;
    justify-content: ${({ jPosition }) => jPosition || "flex-start"};
    align-items: center;

    .lcfCps {
        width: 40px;
        padding: 9px 14px 6px;
        color: ${({ color }) => color || "#222"};
    }
`;

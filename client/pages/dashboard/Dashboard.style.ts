import styled, { css } from "styled-components";
import { device } from "../../utils/devices";

const { tablet, laptop, laptopL, desktop, desktopL } = device;

export const DashboardWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media ${laptop} {
        flex-direction: row;
    }
`;

interface DasboardColumnProps {
    size: number;
    fixedSize?: boolean;
    bgColor?: string;
    margin?: string;
}

export const DasboardColumnWrapper = styled.div<DasboardColumnProps>`
    background-color: ${({ bgColor }) =>
        bgColor ? bgColor : "rgba(242, 242, 242, 0.4)"};
    flex: ${({ size }) => (size ? size : 1)};
    margin: ${({ margin }) => (margin ? margin : "0 20px 0 0")};
    border-radius: 30px;
    padding: 20px;
    ${({ fixedSize }) =>
        fixedSize &&
        css`
            height: 100vh;
            max-height: 100vh;
        `}
`;

export const TitleArea = styled.div`
    padding: 30px;
`;

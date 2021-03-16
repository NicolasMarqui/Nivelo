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
    padding?: string;
}

export const DasboardColumnWrapper = styled.div<DasboardColumnProps>`
    background-color: ${({ bgColor }) =>
        bgColor ? bgColor : "rgba(242, 242, 242, 0.4)"};
    flex: ${({ size }) => (size ? size : 1)};
    margin: ${({ margin }) => (margin ? margin : "0")};
    border-radius: 30px;
    padding: ${({ padding }) => (padding ? padding : "20px")};
    ${({ fixedSize }) =>
        fixedSize &&
        css`
            height: 100vh;
            max-height: 100vh;
        `}

    @media ${laptop} {
        margin: ${({ margin }) => (margin ? margin : "0 20px 0 0")};
    }
`;

interface TitleAreaProps {
    margin?: string;
}

export const TitleArea = styled.div<TitleAreaProps>`
    padding: ${({ margin }) => margin || "30px"};
`;

interface ColumnGroupProps {
    margin?: string;
    padding?: string;
}

export const ColumnGroup = styled.div<ColumnGroupProps>`
    background-color: #fff;
    border-radius: 30px;
    margin: ${({ margin }) => (margin ? margin : "20px 0")};
    padding: ${({ padding }) => (padding ? padding : "20px 10px")};

    @media ${laptop} {
        padding: ${({ padding }) => (padding ? padding : "30px")};
    }
`;

export const PlatformsWrapper = styled.div`
    margin: 10px 0;
    text-align: center;

    @media ${laptop} {
        padding: 10px 30px;
        text-align: left;
    }
`;

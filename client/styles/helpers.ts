import styled from "styled-components";
import { css } from "styled-components";

interface ContainerProps {
    flex?: boolean;
    f_center?: boolean;
}

export const Container = styled.div<ContainerProps>`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    height: 100%;
    position: relative;

    ${({ flex }) =>
        flex &&
        css`
            display: flex;
        `}

    ${({ f_center }) =>
        f_center &&
        css`
            justify-content: center;
            align-items: center;
        `}

    @media (min-width: 768px) {
        width: 750px;
    }

    @media (min-width: 992px) {
        width: 970px;
    }

    @media (min-width: 1300px) {
        width: 1290px;
    }

    @media (min-width: 1400px) {
        width: 1320px;
    }

    @media (min-width: 1600px) {
        width: 1560px;
    }
`;

interface FlexProps {
    size?: number;
    col?: boolean;
    mr?: number;
    justifyEnd?: boolean;
}

export const Flex = styled.div<FlexProps>`
    display: flex;
    flex: ${({ size }) => size || 1};
    margin-right: ${({ mr }) => mr || 0}px;
    align-items: center;
    position: relative;
    ${({ col }) =>
        col &&
        css`
            flex-direction: column;
        `}
    ${({ justifyEnd }) =>
        justifyEnd &&
        css`
            justify-content: flex-end;
        `}
`;

interface TitleProps {
    fontSize?: string;
    fontWeight?: string;
    lineHeight?: string;
    size?: number;
    center?: boolean;
    m_auto?: boolean;
}

export const Title = styled.h2<TitleProps>`
    font-size: ${({ fontSize }) => fontSize || "30px"};
    font-weight: ${({ fontWeight }) => fontWeight || "700"};
    line-height: ${({ lineHeight }) => lineHeight || "auto"};
    font-family: ${({ theme }) => theme.fonts.patua};
    width: ${({ size }) => size || "100"}%;
    ${({ center }) =>
        center &&
        css`
            text-align: center;
        `}
    ${({ m_auto }) =>
        m_auto &&
        css`
            margin: 0 auto;
        `}
`;

interface PreTitleProps {
    center?: boolean;
    color?: string;
}

export const PreTitle = styled.h5<PreTitleProps>`
    color: ${({ theme, color }) => (color ? color : theme.colors.primary)};
    font-size: 16px;
    font-weight: 400;
    width: 100%;
    margin-bottom: 4px;
    ${({ center }) =>
        center &&
        css`
            text-align: center;
        `}
`;

interface OverlayProps {
    opacity?: number;
    border?: string;
}

export const Overlay = styled.div<OverlayProps>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: ${({ border }) => border || "20px"};
`;

interface DescriptionProps {
    size?: string;
    marginTop?: number;
    color?: string;
    fontSize?: string;
}

export const Description = styled.p<DescriptionProps>`
    font-size: ${({ fontSize }) => fontSize || "17px"};
    color: ${({ color }) => color || "#b1b1b1"};
    line-height: 25px;
    margin-top: ${({ marginTop }) => marginTop || "0"}px;
    align-self: flex-start;
    width: ${({ size }) => size || "100"}%;
`;

export const Section = styled.div`
    padding: 80px 0;
`;

interface PageWrapperProps {
    pTop?: string;
}

export const PageWrapper = styled.div<PageWrapperProps>`
    width: 100%;
    min-height: calc(100vh - 150px);
    padding-top: ${({ pTop }) => (pTop ? pTop : "150px")};
`;

interface ButtonProps {
    bgColor?: string;
    color?: string;
    bold?: boolean;
}

export const Button = styled.button<ButtonProps>`
    margin: 10px 0;
    padding: 10px 20px;
    background-color: ${({ bgColor }) => (bgColor ? bgColor : "#f2f2f2")};
    color: ${({ color }) => (color ? color : "#222")};
    border-radius: 28.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    cursor: pointer;
    border: none;
    outline: none;
    ${({ bold }) =>
        bold &&
        css`
            font-weight: 700;
        `}
`;

export const Pill = styled.p`
    background-color: ${({ theme }) => theme.colors.purple};
    padding: 12px 14px 10px;
    font-weight: 700;
    color: #fff;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin: 10px 0;
`;

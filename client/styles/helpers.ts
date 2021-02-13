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
        width: 1302px;
    }

    @media (min-width: 1400px) {
        width: 1370px;
    }

    @media (min-width: 1600px) {
        width: 1560px;
    }
`;

interface FlexProps {
    size?: number;
    col?: boolean;
    mr?: number;
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
`;

interface TitleProps {
    fontSize?: string;
    fontWeight?: string;
    lineHeight?: string;
    size?: number;
}

export const Title = styled.h2<TitleProps>`
    font-size: ${({ fontSize }) => fontSize || "30px"};
    font-weight: ${({ fontWeight }) => fontWeight || "700"};
    line-height: ${({ lineHeight }) => lineHeight || "auto"};
    font-family: ${({ theme }) => theme.fonts.patua};
    width: ${({ size }) => size || "100"}%;
`;

export const PreTitle = styled.h5`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 4px;
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
}

export const Description = styled.p<DescriptionProps>`
    font-size: 17px;
    color: ${({ color }) => color || "#b1b1b1"};
    line-height: 25px;
    margin-top: ${({ marginTop }) => marginTop || "0"}px;
    align-self: flex-start;
    width: ${({ size }) => size || "100"}%;
`;

export const Section = styled.div`
    padding: 80px 0;
`;

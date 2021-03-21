import styled, { css } from "styled-components";
import { device } from "../../utils/devices";

const { tablet, laptop, laptopL, desktop, desktopL } = device;

interface HeaderProps {
    whiteBg?: boolean;
}

export const Header = styled.div<HeaderProps>`
    padding: 20px 0px 0;
    z-index: 31;
    position: relative;

    .nivelo__logo {
        margin-top: -14px !important;
    }

    @media ${laptop} {
        position: absolute;
        top: 0;
        left: 0;
        padding: 20px 0 0;
        right: 0;
        width: 100%;
    }

    ${({ whiteBg }) =>
        whiteBg &&
        css`
            background-color: #fff;
        `}
`;

import styled, { css } from "styled-components";
import { Button } from "../../styles/helpers";
import { Banner } from "../tutor/[id]/TutorID.style";
import { device } from "../../utils/devices";

const { tablet, laptop, laptopL, desktop, desktopL } = device;

export const TtFlex = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 0 20px 0;
    width: 100%;
`;

interface TtFiltersProps {
    isFixed?: boolean;
}

export const TtFilters = styled.div<TtFiltersProps>`
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    .filters__amount {
        p {
            span {
                color: ${({ theme }) => theme.colors.primary};
                font-weight: 700;
            }
        }
    }

    .filters__buttons {
        padding: 20px 0;
        display: flex;
    }

    @media ${laptop} {
        padding: 0 0;
        flex-direction: row;
    }
`;

interface AreaTutorsProps {
    isColumn: boolean;
}

export const AreaTutors = styled.div<AreaTutorsProps>`
    ${({ isColumn }) =>
        isColumn &&
        css`
            display: flex;
            flex-direction: row;
        `}
`;

export const BannerTutors = styled(Banner)`
    background-image: url("/assets/banner_tutor.jpg");
    width: 100%;
    border-radius: 0;
    background-position: center;
    height: 110px;
    position: relative;
`;

export const BorderedButton = styled(Button)`
    background-color: #fff;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
`;

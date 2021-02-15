import styled, { css } from "styled-components";
import { Button } from "../../styles/helpers";
import { Banner } from "../tutor/[id]/TutorID.style";

export const TtFlex = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 0 20px 0;
    width: 100%;
`;

export const TtFilters = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .filters__amount {
        p {
            span {
                color: ${({ theme }) => theme.colors.primary};
                font-weight: 700;
            }
        }
    }

    .filters__buttons {
        display: flex;
    }
`;

interface AreaTutorsProps {
    isColumn: boolean;
}

export const AreaTutors = styled.div<AreaTutorsProps>`
    margin-top: 70px;
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
    height: 230px;
`;

export const BorderedButton = styled(Button)`
    background-color: #fff;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
`;

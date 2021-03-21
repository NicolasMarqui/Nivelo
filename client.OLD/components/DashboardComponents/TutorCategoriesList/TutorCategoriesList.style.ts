import styled from "styled-components";
import { device } from "../../../utils/devices";

const { laptop } = device;

export const TutorCategoriesListWrapper = styled.div`
    margin: 14px 4px 0;

    .cat__list {
        img {
            width: 45px;
        }
    }

    @media ${laptop} {
        .cat__list {
            img {
                width: 65px;
            }
        }
    }
`;

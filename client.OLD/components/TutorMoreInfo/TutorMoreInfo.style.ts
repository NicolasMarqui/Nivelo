import styled from "styled-components";
import { device } from "../../utils/devices";

const { laptop } = device;

export const TutorMoreInfoWrapper = styled.div`
    margin: 10px 0;
`;

export const MoreInfoThingy = styled.div`
    margin: 30px 0 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .thingy__side {
        &.thingy__difer {
            align-self: flex-end;
            margin-left: -20px;
        }

        &:hover {
            svg {
                transform: scale(1.2);
            }
        }

        svg {
            cursor: pointer;
        }
    }

    @media ${laptop} {
        justify-content: flex-start;

        .thingy__side {
            flex: 1;
        }
    }
`;

export const TutorCategories = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

import styled from "styled-components";

export const TutorMoreInfoWrapper = styled.div`
    margin: 10px 0;
`;

export const MoreInfoThingy = styled.div`
    margin: 30px 0 10px;
    display: flex;
    flex-direction: row;
    align-items: center;

    .thingy__side {
        flex: 1;

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
`;

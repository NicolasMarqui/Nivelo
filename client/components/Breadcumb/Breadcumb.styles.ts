import styled from "styled-components";

export const BreadcumbWrapper = styled.div`
    display: flex;
    align-self: flex-start;

    h5 {
        margin-right: 8px;
        display: flex;
        align-items: center;

        &:last-child {
            svg {
                display: none;
            }
        }
    }

    svg {
        margin: -3px 0 0 4px;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

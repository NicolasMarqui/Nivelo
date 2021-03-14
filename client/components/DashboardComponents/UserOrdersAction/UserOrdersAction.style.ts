import styled from "styled-components";

export const UserOrdersActionWrapper = styled.div`
    ul {
        display: flex;

        li {
            margin: 0 5px;

            &.not__active {
                opacity: 0.4;
            }
        }
    }
`;

import styled from "styled-components";

export const ShortcutListWrapper = styled.div`
    margin-top: 20px;

    ul {
        margin: 0;
        padding: 0;
        display: flex;

        li {
            div {
                &:first-child {
                    margin-left: 0;
                }
            }
        }
    }
`;

import styled from "styled-components";
import { device } from "../../utils/devices";

const { laptop } = device;

export const ShortcutListWrapper = styled.div`
    margin-top: 20px;

    ul {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-between;

        li {
            flex: 1;

            div {
                &:first-child {
                    margin-left: 0;
                }
            }
        }
    }

    @media ${laptop} {
        ul {
            justify-content: flex-start;

            li {
                flex: none;
            }
        }
    }
`;

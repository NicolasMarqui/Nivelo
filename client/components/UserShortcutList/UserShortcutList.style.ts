import styled from "styled-components";

export const UserShortcutListWrapper = styled.div`
    margin: 10px 0;

    ul {
        display: flex;
        align-items: center;

        li {
            margin: 0 5px;
            cursor: pointer;

            &:hover {
                .short__item {
                    img {
                        transform: scale(1.02);
                    }
                }
            }

            .short__item {
                background-color: #f2f2f2;
                border-radius: 50%;

                img {
                    width: 50px;
                }
            }
        }
    }
`;

import styled from "styled-components";

export const PlatformListWrapper = styled.div`
    margin: 10px 0;

    ul {
        display: flex;
        align-items: center;

        li {
            margin: 0 -11px;

            &:hover {
                .plat__item {
                    img {
                        transform: scale(1.02);
                    }
                }
            }

            .plat__item {
                background-color: #f2f2f2;
                border-radius: 50%;

                img {
                    width: 50px;
                }
            }

            &:last-child {
                margin: 0 15px;
            }
        }
    }
`;
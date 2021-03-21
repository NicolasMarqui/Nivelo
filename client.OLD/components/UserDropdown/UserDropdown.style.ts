import styled from "styled-components";

export const UserDropdownWrapper = styled.div`
    .drop__group {
        padding: 5px;

        h3 {
            font-size: 12px;
            margin: 10px 0 8px;
            color: #616161;
        }

        ul {
            li {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                width: 100%;
                margin: 1px 0;
                position: relative;

                svg {
                    padding: 8px 0;
                }

                p {
                    margin-left: 11px;
                    font-size: 14px;
                    margin-top: 6px;
                    color: #565656;
                }

                &:hover {
                    background-color: #f2f2f2;
                    border-radius: 10px;

                    &::before {
                        content: none;
                    }

                    svg {
                        transform: scale(1);
                    }
                }

                &.group__color {
                    background-color: #fb475e;
                    border-radius: 10px;
                    padding: 0 4px;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    p {
                        color: #fff;
                    }

                    &:hover {
                        filter: brightness(120%);
                    }
                }
            }
        }
    }
`;

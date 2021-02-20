import styled from "styled-components";

export const PaginationWrapper = styled.div`
    width: 100%;
    margin: 40px 0 20px;
    padding: 10px;
    display: flex;
    align-items: center;

    h6 {
        width: 100%;
        text-align: center;
        color: #bbbbbb;
    }

    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;

        li {
            margin: 0 10px;
            padding: 10px;
            background-color: #f2f2f2;
            border-radius: 8px;
            cursor: pointer;

            p {
                margin-top: 4px;
            }

            &:hover {
                background-color: ${({ theme }) => theme.colors.lightOrange};
                p {
                    color: #fff;
                }
            }

            &.pagination__active {
                background-color: ${({ theme }) => theme.colors.primary};

                p {
                    color: #fff;
                }
            }
        }
    }
`;

import styled from "styled-components";

export const SelectClassWrapper = styled.div`
    .classes__box {
        padding: 20px;
        background-color: #f2f2f2;
        margin: 10px 0;
        cursor: pointer;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .box__info {
            h3 {
                font-size: 17px;
                color: #222;
                margin-bottom: 4px;
            }

            p {
                font-size: 13px;
            }
        }

        &.classes__active {
            background-color: ${({ theme }) => theme.colors.lightGreen};
            /* border: 3px solid ${({ theme }) => theme.colors.lightGreen}; */
            .box__info {
                h3,
                p {
                    color: #fff;
                }
            }
        }

        &:hover {
            background-color: ${({ theme }) => theme.colors.lightGreen};
        }
    }
`;

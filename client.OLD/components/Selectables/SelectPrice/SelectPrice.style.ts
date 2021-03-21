import styled from "styled-components";

export const SelectPriceWrapper = styled.div`
    margin: 10px 20px;
    border: 2px solid #f2f2f2;
    border-radius: 18px;
    padding: 10px;
    width: 300px;
    cursor: pointer;

    h3 {
        font-size: 14px;
    }

    &.active {
        background: ${({ theme }) => theme.colors.lightGreen};

        h3,
        p {
            color: #fff;
            font-size: 700;
        }
    }

    &:hover {
        border: 2px solid ${({ theme }) => theme.colors.lightGreen};
    }

    .sp__time {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex: 1;

        p {
            text-decoration: underline;
        }
    }

    .sp__value {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex: 1;

        p {
            font-size: 18px;
            color: ${({ theme }) => theme.colors.primary};
            font-size: 700;
        }
    }
`;

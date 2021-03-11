import styled from "styled-components";

export const SelectPlatformWrapper = styled.div`
    margin: 10px 20px;
    border: 2px solid #f2f2f2;
    border-radius: 18px;
    padding: 10px;
    cursor: pointer;
    /* width: 70px; */

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

    h3 {
        text-align: center;
        font-size: 16px;
        margin-top: 10px;
    }
`;

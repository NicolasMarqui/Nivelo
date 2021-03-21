import styled from "styled-components";
import { device } from "../../../utils/devices";

const { laptop } = device;

export const UserOrdersListWrapper = styled.div`
    margin: 21px 0;
    display: flex;
    justify-content: space-between;
    background-color: #fbfbfb;
    padding: 20px;
    border-radius: 18px;
    box-shadow: 1px 5px 7px #ececec;
    position: relative;
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    flex-direction: column;

    & > div {
        margin: 10px 0;
    }

    .order__title {
        h2 {
            font-size: 18px;
            font-weight: 700;
            color: #696969;
            flex: 1;
            margin: 7px 0;
        }

        p {
            font-size: 11px;
            color: ${({ theme }) => theme.colors.primary};
        }
    }

    h4 {
        text-decoration: underline;
        cursor: pointer;
    }

    @media ${laptop} {
        flex-direction: row;

        & > div {
            margin: 0;
        }
    }
`;

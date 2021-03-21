import styled from "styled-components";
import { device } from "../../../utils/devices";

const { laptop } = device;

export const AddCategoriesTutorWrapper = styled.div`
    display: flex;
    margin: 10px 0;
    flex-direction: column;
    flex-wrap: wrap;

    @media ${laptop} {
        flex-direction: row;
    }
`;

export const CategoriesListWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    background: #f2f2f2;
    padding: 10px;
    border-radius: 20px;
    margin: 5px;
    cursor: pointer;

    &:hover {
        transform: scale(1.01);
        transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    img {
        width: 75px;
        margin: 0 20px;
    }

    h4 {
        color: #222;
        font-weight: 700;
        font-size: 17px;
        margin-top: 10px;
    }

    @media ${laptop} {
        flex-direction: column;
        justify-content: space-between;

        img {
            margin: 20px 0;
        }
    }
`;

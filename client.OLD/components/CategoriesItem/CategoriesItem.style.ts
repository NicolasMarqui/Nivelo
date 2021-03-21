import styled from "styled-components";
import { device } from "../../utils/devices";

const { laptop } = device;

export const CategoriesItemWrapper = styled.div`
    margin: 10px 5px;
    background: #f2f2f2;
    padding: 20px;
    border-radius: 20px;
    flex: 1;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        transform: scale(1.03);
        transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    img {
        width: 100px;
    }

    h3 {
        margin-top: 20px;
        font-size: 18px;
        font-weight: 700;
    }

    @media ${laptop} {
        margin: 0 5px;
        width: auto;
    }
`;

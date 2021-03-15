import styled from "styled-components";
import { device } from "../utils/devices";

const { tablet, laptop, laptopL, desktop, desktopL } = device;

export const HeroWrapper = styled.div`
    width: 100%;
    margin-top: 50px;
    height: 50vh;

    .detail__dots {
        width: 110px;
        opacity: 10%;
        position: absolute;
        top: -91px;
        right: 81px;
        transform: rotate(45deg);
    }

    @media ${laptop} {
        margin-top: 0;
        height: 100vh;
    }
`;

export const HeroImage = styled.div`
    width: 80%;
    margin: 0 auto;
    height: 297px;
    position: relative;
    border-radius: 34px;
    background-image: url("https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260");
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s linear;

    &:hover {
        svg {
            transform: scale(1.19);
        }
    }

    svg {
        z-index: 3;
    }

    .detail__hat {
        position: absolute;
        top: -91px;
        left: -83px;
        width: 200px;
        transform: rotate(344deg);
    }

    .detail__img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        position: absolute;
        border: 4px solid #fff;
        background-position: center;
        background-size: cover;

        &.img_1 {
            background-image: url("/assets/hero_detail1.jpg");
            bottom: -88px;
            left: -84px;
            border: 8px solid ${({ theme }) => theme.colors.primary};
        }

        &.img_2 {
            background-image: url("/assets/hero_detail1.jpg");
            border: 8px solid ${({ theme }) => theme.colors.lightBlue};
            bottom: -135px;
            right: -82px;
            height: 250px;
            width: 250px;
        }

        &.img_3 {
            background-image: url("/assets/hero_detail1.jpg");
            top: -76px;
            right: -57px;
        }
    }

    .detail__dots {
        top: auto;
        bottom: -88px;
        right: 212px;
    }
`;

export const SearchCategory = styled.div`
    width: 90%;
    background-color: #f5f5f5;
    border: none;
    outline: none;
    margin: 40px auto;
    align-self: flex-start;
    cursor: pointer;
    position: relative;
    padding: 20px;

    .category__label {
        color: #d4d4d4;
        font-size: 15px;
        display: flex;
        align-items: center;

        svg {
            margin-left: 6px;
        }
    }

    .category__search {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        background-color: ${({ theme }) => theme.colors.lightOrange};
        padding: 10px 10px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            opacity: 0.7;
        }
    }

    @media ${laptop} {
        width: 68%;
        margin: 40px 0;
    }
`;

export const CTA = styled.div`
    margin-top: 40px;
    left: 0;
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
        margin: -6px 0 0 12px;
    }

    p {
        font-weight: 700;
        font-size: 16px;
    }

    @media ${laptop} {
        position: absolute;
        bottom: 100px;
    }
`;

export const ImageInfo = styled.div`
    background-image: url("/assets/student.jpg");
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 673px;
    position: relative;

    .info__detail {
        position: absolute;
        width: 122.6px;
        height: 38.44px;
        background-color: ${({ theme }) => theme.colors.primary};
        transform: rotate(35deg);

        &.detail_1 {
            top: 0;
            right: -40px;
        }

        &.detail_2 {
            bottom: 0;
            left: -40px;
        }
    }
`;

export const Parte = styled.div`
    align-self: flex-start;

    .parte__boxes {
        display: flex;
        flex-wrap: wrap;
        margin-top: 40px;
    }

    @media ${laptop} {
        padding: 40px 0px 40px 100px;
    }
`;

export const Box = styled.div`
    /* flex: 1; */
    margin: 10px 0 30px 0;
    /* border: 2px solid red; */
    width: 100%;

    .box__icon {
        padding: 8px 5px;
        width: 30px;
        border-radius: 8px;
        margin: 0 auto 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .box__info {
        text-align: center;

        h6 {
            font-family: ${({ theme }) => theme.fonts.patua};
            font-weight: 400;
            font-size: 17px;
            color: #222222;
        }

        p {
            font-size: 14px;
            width: 100%;
            margin-top: 12px;
        }
    }

    @media ${laptop} {
        width: 50%;

        .box__icon {
            margin: 0 0 20px 0;
        }

        .box__info {
            text-align: left;

            p {
                width: 70%;
            }
        }
    }

    &:first-child {
        .box__icon {
            background-color: rgba(231, 111, 81, 0.31);
        }
    }

    &:nth-child(2) {
        .box__icon {
            background-color: rgba(104, 225, 253, 0.31);
        }
    }

    &:nth-child(3) {
        .box__icon {
            background-color: rgba(87, 204, 153, 0.31);
        }
    }

    &:nth-child(4) {
        .box__icon {
            background-color: rgba(244, 211, 94, 0.31);
        }
    }
`;

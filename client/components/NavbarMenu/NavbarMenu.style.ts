import styled from "styled-components";
import { navBarHover } from "../../styles/animations";
import { device } from "../../utils/devices";

const { tablet, laptop, laptopL, desktop, desktopL } = device;

export const Menu = styled.ul`
    list-style: none;
    width: 100%;
    height: 68%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
        margin: 20px 0px;
        position: relative;

        &.no__hover {
            &:hover {
                &::before {
                    content: none;
                }
            }
        }

        &.bt__cta {
            background-color: ${(props) => props.theme.colors.primary};
        }

        &.bg__icon {
            background-color: #f2f2f2;
            border-radius: 8px;
            cursor: pointer;
            margin: 0 10px;

            svg {
                padding: 10px 15px;
            }

            &:hover {
                svg {
                    transform: scale(1.19);
                }
            }
        }

        &.navbar__dif {
            margin-left: 40px;

            a {
                color: ${(props) => props.theme.colors.primary};
                font-weight: 700;
            }
        }

        &.dif__sign {
            border: 2px solid ${(props) => props.theme.colors.primary};
            border-radius: 22.5px;
            margin-left: 5px;

            a {
                padding: 14px 14px 10px;
                display: block;
            }

            &:hover {
                background-color: ${(props) => props.theme.colors.primary};
                a {
                    color: #fff;
                }

                &::before {
                    content: none;
                }
            }
        }

        &:hover {
            &::before {
                content: "";
                position: absolute;
                top: 110%;
                left: 0;
                right: 0;
                height: 3px;
                background-color: ${(props) => props.theme.colors.primary};
                animation: 0.6s ${navBarHover} linear;
            }
        }

        a {
            text-decoration: none;
            color: #5f5f5f;
            font-size: 25px;
            font-weight: 400;
        }
    }

    @media ${laptop} {
        flex-direction: row;
        height: auto;
        justify-content: flex-end;

        li {
            margin: 0px 14px;

            a {
                font-size: 15px;
            }
        }
    }
`;

import { navBarHover } from "./../../styles/animations";
import styled from "styled-components";

export const Header = styled.div`
    width: 100%;
    padding-top: 20px;
    z-index: 4;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`;

export const Menu = styled.ul`
    list-style: none;
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    li {
        margin: 0px 20px;
        position: relative;

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
            font-size: 15px;
            font-weight: 400;
        }
    }
`;

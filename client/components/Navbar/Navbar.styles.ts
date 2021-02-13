import { navBarHover } from "./../../styles/animations";
import styled from "styled-components";

export const Header = styled.div`
    width: 100%;
    position: relative;
    padding-top: 20px;
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
        margin: 0px 10px;
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
                padding: 10px 14px;
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
            color: #222;
            font-size: 17px;
            font-weight: 400;
        }
    }
`;

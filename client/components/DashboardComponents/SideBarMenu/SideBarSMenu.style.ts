import styled, { css } from "styled-components";

interface SideBarMenuWrapperProps {
    isVisible?: boolean;
}

export const SideBarMenuWrapper = styled.div<SideBarMenuWrapperProps>`
    width: 100%;
    overflow-y: auto;
    height: 100%;
`;

export const SideBarMenuGroup = styled.div`
    margin: 20px auto;
    width: 80%;

    h5 {
        font-size: 12px;
        color: #959595;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            margin: 10px 0;
            cursor: pointer;
            background-color: #fff;
            padding: 10px 0;
            border-radius: 10px;

            a {
                text-decoration: none;
                color: #222222;
                font-size: 15px;
            }

            &:hover {
                transform: scale(1.02);
            }
        }
    }
`;

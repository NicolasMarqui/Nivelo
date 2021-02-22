import styled from "styled-components";

export const SideBarMenuWrapper = styled.div`
    width: 100%;
    overflow-y: auto;
    height: 100%;
`;

export const SideBarMenuGroup = styled.div`
    margin: 20px 0;

    h5 {
        font-size: 12px;
        color: #fff;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            margin: 20px 0;
            cursor: pointer;
            background-color: #fff;
            padding: 10px;
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

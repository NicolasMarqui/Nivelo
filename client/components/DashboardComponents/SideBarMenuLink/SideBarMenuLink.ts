import styled from "styled-components";

export const SideBarMenuLinkWrapper = styled.div`
    display: flex;

    .link__icon {
        svg {
            margin: 0px 6px 0 0;
        }
    }

    .link__text {
        flex: 3;
        display: flex;
        align-items: center;

        h6 {
            color: #222;
        }
    }

    .link__chevron {
        flex: 1;
    }

    &:hover {
        svg {
            transform: scale(1.19);
        }
    }
`;

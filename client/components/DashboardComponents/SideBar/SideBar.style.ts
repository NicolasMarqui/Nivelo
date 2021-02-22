import styled from "styled-components";

export const SideBarWrapper = styled.div`
    height: 100%;

    .side__info {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            border-radius: 50%;
            margin-top: -60px;
            border: 4px solid ${({ theme }) => theme.colors.primary};
        }

        h2 {
            font-size: 22px;
            font-weight: 700;
            margin-top: 20px;
            color: #fff;
        }

        h4 {
            color: #fff;
            font-size: 14px;
        }
    }
`;

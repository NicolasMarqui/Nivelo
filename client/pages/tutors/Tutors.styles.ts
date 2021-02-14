import styled, { css } from "styled-components";

export const TtFlex = styled.div`
    display: flex;
    flex-direction: row;
`;

export const TtFilters = styled.div`
    margin-top: 40px;
    border-top: 1px solid #f3f3f3;
    padding-top: 40px;
`;

interface AreaTutorsProps {
    isColumn: boolean;
}

export const AreaTutors = styled.div<AreaTutorsProps>`
    margin-top: 70px;
    ${({ isColumn }) =>
        isColumn &&
        css`
            display: flex;
            flex-direction: row;
        `}
`;

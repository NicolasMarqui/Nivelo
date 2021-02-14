import styled, { css } from "styled-components";

interface FilterWrapperProps {
    isFixed?: boolean;
}

export const FilterWrapper = styled.div<FilterWrapperProps>`
    /* margin-top: 40px; */
    ${({ isFixed }) =>
        isFixed &&
        css`
            background-color: #fff;
            padding: 10px;
            box-shadow: 1px 3px 9px #cecece;
            border-radius: 20px;
            display: flex;
            justify-content: center;
            z-index: 10;
        `}

    .filter__list {
        display: flex;
        align-items: center;

        li {
            position: relative;
        }
    }
`;

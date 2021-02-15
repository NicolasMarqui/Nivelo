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

export const FilterSideWrapper = styled.div`
    width: 100%;

    .side__group {
        margin: 10px 0;

        .group__label {
            h4 {
                font-size: 17px;
                color: #6f6f6f;
                margin-bottom: 8px;
            }
        }

        .group__content {
            padding: 4px;
        }
    }
`;

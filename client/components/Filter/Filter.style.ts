import styled, { css } from "styled-components";
import { device } from "../../utils/devices";

const { laptop } = device;
interface FilterWrapperProps {
    isFixed?: boolean;
}

export const FilterWrapper = styled.div<FilterWrapperProps>`
    /* margin-top: 40px; */
    ${({ isFixed }) =>
        isFixed &&
        css`
            margin-top: 20px;
            box-shadow: 1px 3px 9px #cecece;
            border-radius: 20px;
            display: flex;
            justify-content: center;
            z-index: 10;

            .jLtcft {
                background-color: ${({ theme }) => theme.colors.primary};

                .icb__text {
                    color: #fff;
                }
            }
        `}

    .filter__list {
        display: flex;
        align-items: center;

        li {
            position: relative;

            &.filter__clear {
                position: fixed;
                bottom: 10px;
                left: 10px;
                z-index: 20;

                @media ${laptop} {
                    position: relative;
                    bottom: auto;
                    left: auto;
                }
            }
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

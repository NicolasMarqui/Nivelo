import styled, { css } from "styled-components";

interface CategoriesSeachWrapperProps {
    isVisible?: boolean;
    position?: "top" | "bottom";
}

export const CategoriesSeachWrapper = styled.div<CategoriesSeachWrapperProps>`
    background-color: #f2f2f2;
    padding: 20px;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    border-radius: 20px 20px 0px 0px;
    height: 200px;
    overflow-y: auto;
    display: none;
    transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

    ${({ position }) =>
        position === "bottom" &&
        css`
            bottom: auto;
            top: 100%;
            border-radius: 0px 0px 20px 20px;
        `}
    ${({ isVisible }) =>
        isVisible &&
        css`
            display: block;
        `};

    .cat__all {
        ul {
            display: flex;
            flex-wrap: wrap;

            li {
                flex: 1;
                padding: 10px;
                background-color: #fff;
                margin: 10px 10px 10px 0;
                border-radius: 10px;
                cursor: pointer;

                &:hover {
                    transform: scale(1.02);
                }
            }
        }
    }
`;

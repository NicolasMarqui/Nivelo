import styled from "styled-components";

interface SkeletonMarginProps {
    margin?: string;
}

export const SkeletonMargin = styled.div<SkeletonMarginProps>`
    margin: ${({ margin }) => (margin ? margin : "10px 0")};
`;

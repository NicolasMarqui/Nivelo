import styled, { css } from "styled-components";

interface FooterWrapperProps {
    notMargin?: boolean;
}

export const FooterWrapper = styled.div<FooterWrapperProps>`
    width: 100%;
    margin-top: 40px;
    padding: 60px 0 20px;
    background-color: #f9f9f9;
    border-top: 4px solid ${({ theme }) => theme.colors.primary};

    ${({ notMargin }) =>
        notMargin &&
        css`
            margin-top: 0;
        `}
`;

export const LogoCurrencyWrapper = styled.div`
    flex: 1;
    justify-self: flex-start;
    width: 100%;

    .lc__logo {
        margin-top: -20px;
    }

    .lc__selects {
        margin-top: 15px;

        .css-2b097c-container {
            margin: 10px 0;

            .css-yk16xz-control {
                .css-g1d714-ValueContainer {
                    .css-1uccc91-singleValue {
                        line-height: 25px;
                    }
                }
            }
        }
    }
`;

export const FooterColumn = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;

    .column__name {
        display: flex;
        align-items: center;
        width: 100%;

        svg {
            margin-top: -4px;
        }

        h5 {
            font-size: 18px;
            font-weight: 700;
            text-decoration: underline;
        }
    }
`;

export const ColumnList = styled.div`
    list-style: none;
    margin: 11px 0;
    padding: 0;
    width: 100%;

    li {
        margin: 15px 0;

        a {
            font-size: 16px;
            color: #5d5d5d;
            text-decoration: none;
        }

        &:hover {
            a {
                text-decoration: underline;
            }
        }
    }
`;

export const FooterBottom = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #d4d4d4;
    padding-top: 20px;

    .bottom__info {
        flex: 3;

        ul {
            display: flex;
            align-items: center;

            li {
                margin: 0 10px;

                a {
                    font-size: 15px;
                    text-decoration: none;
                    color: #222;
                }
            }
        }
    }

    .bottom__copyright {
        flex: 3;
        text-align: right;

        p {
            color: #9c9c9c;
            font-size: 15px;
        }
    }
`;

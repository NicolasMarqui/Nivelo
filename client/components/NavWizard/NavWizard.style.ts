import styled from "styled-components";

export const NavTitle = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 5px 0 30px;

    h2 {
        text-align: center;
    }

    p {
        margin-top: 4px;
        text-align: center;

        span {
            color: ${({ theme }) => theme.colors.primary};
        }
    }
`;

export const Nav = styled.div`
    text-align: center;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px 20px;

    .nav__info {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow-x: auto;
        overflow-y: hidden;

        .info__opt {
            ul {
                display: flex;

                li {
                    margin: 0 8px;

                    h5 {
                        font-weight: 700;
                        font-size: 20px;
                    }
                }
            }
        }

        .info__price {
            p {
                font-weight: 700;
                font-size: 20px;
                border-bottom: 4px solid ${({ theme }) => theme.colors.primary};
            }
        }
    }
`;

export const Dot = styled.span`
    color: black;
    cursor: pointer;
    font-size: 36px;
    line-height: 1;
    margin: 0 15px;
    opacity: 0.4;
    text-shadow: none;
    transition: opacity 1s ease, text-shadow 1s ease;
    will-change: opacity, text-shadow;

    &.active {
        color: ${({ theme }) => theme.colors.primary};
        opacity: 1;
        text-shadow: 0 0px 8px;
    }
`;

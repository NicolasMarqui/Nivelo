import styled from "styled-components";

export const AgendarWrapper = styled.div`
    overflow-y: auto;
    overflow-x: hidden;
    height: 92%;

    .agendar__header {
        h3 {
            margin-top: 10px;
            font-weight: 700;
            font-size: 22px;
            text-align: center;
        }

        p {
            margin-top: 4px;
            text-align: center;

            span {
                color: ${({ theme }) => theme.colors.primary};
            }
        }
    }

    .agendar__group {
        margin: 40px 0;
        h4 {
            color: #222;
            font-size: 18px;
        }

        p {
            line-height: 17px;
            margin: 10px 0;
        }
    }

    .agenda__footer {
        position: absolute;
        bottom: 0;
        padding: 10px 20px;
        background: ${({ theme }) => theme.colors.primary};
        left: 0;
        right: 0;
        border-radius: 20px 0px 0px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .footer__price {
            flex: 3;

            h6 {
                font-size: 27px;
                color: #fff;
                font-weight: 700;
            }
        }

        .footer__done {
            flex: 1;
        }
    }
`;

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
        width: 60%;
        margin: 0 auto;
        /* max-height: 500px; */
        overflow-y: auto;

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
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 60%;
        margin: 20px auto 0;

        .footer__price {
            flex: 3;

            h6 {
                font-size: 27px;
                color: #222;
                font-weight: 700;
            }
        }

        .footer__done {
            flex: 1;
        }
    }
`;

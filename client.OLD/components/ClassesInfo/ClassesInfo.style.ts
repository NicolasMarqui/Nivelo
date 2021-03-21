import styled from "styled-components";

export const ClassesInfoWrapper = styled.div`
    width: 100%;
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ClassesDetails = styled.div`
    flex: 1;

    .details__header {
        text-align: center;
        margin-bottom: 30px;

        h4 {
            font-size: 25px;
            font-weight: 700;
            color: #222222;
        }
    }

    .details__item {
        margin: 40px 0;
        padding: 0 20px;

        h5 {
            color: #646464;
            font-size: 18px;
        }

        .item__title {
            position: relative;

            &::before {
                content: "";
                position: absolute;
                top: 100%;
                left: 0;
                width: 32px;
                height: 3px;
                background-color: #ff4338;
            }
        }

        .item__desc {
            margin: 10px 0;

            ul {
                display: flex;
                flex-wrap: wrap;

                li {
                    margin: 10px 10px 0 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    border-radius: 6px;
                    background-color: #f2f2f2;
                    padding: 10px;

                    p {
                        text-align: center;
                        margin: 0 auto;
                    }
                }
            }
        }
    }
`;

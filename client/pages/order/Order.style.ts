import styled from "styled-components";

export const OrderDetails = styled.div`
    width: 100%;
    background: #fff;
    padding: 50px;
    border-radius: 20px;

    .detail__class {
        margin-top: 50px;

        h3 {
            font-size: 18px;
            font-weight: 700;
        }
    }

    .detail__moreInfo {
        margin-top: 40px;

        h4 {
            font-size: 15px;
        }

        ul {
            margin-top: 40px;

            li {
                margin: 15px 0;

                .moreInfo__aproved {
                    display: flex;
                    align-items: center;

                    svg {
                        margin: -4px 4px 0 0;
                    }

                    p {
                        font-size: 14px;
                    }
                }
            }
        }
    }
`;
export const OrderPrice = styled.div`
    height: 100%;
    width: 100%;
    background: #fff;
    padding: 30px;
    border-radius: 20px;
`;

import styled from "styled-components";

export const FeedbackItemWrapper = styled.div`
    background-color: #f2f2f2;
    padding: 20px 40px;
    border-radius: 32px;
    position: relative;
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .feedback__hat {
        position: absolute;
        top: -40px;
        right: -32px;

        img {
            transform: rotate(12deg);
        }
    }

    .feedback__avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        margin-left: -79px;

        img {
            border-radius: 50%;
            border: 2px solid ${({ theme }) => theme.colors.primary}!important;
        }
    }

    .feedback__info {
        flex: 7;
        padding: 10px 20px;

        .info__name {
            display: flex;
            align-items: center;

            h4 {
                font-size: 18px;
                color: #222222;
                font-weight: 400;
            }

            p {
                font-size: 12px;
                color: rgba(255, 67, 56, 0.7);
                margin-left: 10px;
            }
        }

        .info__desc {
            margin-top: 14px;
        }

        .info__rating {
            margin-top: 10px;
        }
    }
`;

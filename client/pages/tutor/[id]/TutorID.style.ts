import styled from "styled-components";

export const Banner = styled.div`
    width: 95%;
    margin: 0 auto;
    position: relative;
    background-image: url("/assets/banner.jpg");
    height: 290px;
    background-position: 15% 15%;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    border-radius: 37px;
`;

export const SingleTutorWrapper = styled.div`
    width: 100%;
    display: flex;
    position: relative;

    .st__first {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding: 40px 0 0;
        margin-top: -150px;

        .tutor__avatar {
            border-radius: 50%;
            border: 6px solid ${({ theme }) => theme.colors.primary}!important;
        }

        .first__rating {
            margin: 20px 0;
        }
    }

    .st__second {
        flex: 3;
        padding: 40px;

        .second__bread {
            margin-top: -70px;
            display: flex;
        }

        .second__info {
            margin-top: 50px;
        }
    }

    .st__third {
        flex: 1;
        margin-top: -100px;
        width: 100%;

        .third__box {
            background-color: #fff;
            padding: 40px 20px;
            border-radius: 29px;
            box-shadow: 1px 5px 7px rgba(0, 0, 0, 0.15);

            &.box__sticky {
                max-height: 84vh;
                overflow-y: auto;
            }
        }
    }
`;

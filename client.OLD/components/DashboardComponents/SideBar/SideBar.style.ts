import styled from "styled-components";
import { fadeIn } from "../../../styles/animations";

export const SideBarWrapper = styled.div`
    height: 100%;

    .side__info {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            border-radius: 50%;
            margin-top: -60px !important;
            border: 4px solid ${({ theme }) => theme.colors.primary}!important;
        }

        h2 {
            font-size: 25px;
            font-weight: 700;
            margin-top: 20px;
            color: #222;
        }

        h4 {
            color: #222;
            font-size: 14px;
            margin-top: 4px;
        }

        .info__avatar {
            position: relative;
            cursor: pointer;

            .avatar__edit {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                margin-top: -34px;
                display: none;
                transition: ${fadeIn} 0.4s both;
            }

            img {
                object-fit: cover;
            }

            &:hover {
                img {
                    opacity: 0.4;
                }

                .avatar__edit {
                    display: block;
                }
            }
        }
    }
`;

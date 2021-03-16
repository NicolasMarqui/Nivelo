import styled from "styled-components";
import { device } from "../../utils/devices";

const { laptop } = device;

export const TutorClassListWrapper = styled.div`
    margin-top: 20px;
`;

export const TutorClass = styled.div`
    margin: 21px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fbfbfb;
    padding: 20px;
    border-radius: 18px;
    box-shadow: 1px 5px 7px #ececec;
    position: relative;
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    align-items: center;

    h2 {
        font-size: 18px;
        font-weight: 700;
        color: #696969;
    }

    .class__list {
        li {
            position: relative;

            &.not__active {
                &::before {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 3px;
                    background-color: red;
                }
            }
        }
    }

    @media ${laptop} {
        flex-direction: row;
        align-items: flex-start;
    }
`;

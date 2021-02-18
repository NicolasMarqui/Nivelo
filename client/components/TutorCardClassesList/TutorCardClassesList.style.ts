import styled from "styled-components";

export const TutorCardClassesListWrapper = styled.div`
    height: 180px;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #fff;
    padding: 10px;
    border-radius: 20px;
    position: relative;

    h5 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

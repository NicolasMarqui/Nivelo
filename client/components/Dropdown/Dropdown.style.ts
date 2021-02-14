import styled from "styled-components";

export const DropdownWrapper = styled.div`
    visibility: hidden;
    padding: 20px;
    border-radius: 1.5px;
    background-color: #fff;
    position: absolute;
    top: 120%;
    /* right: 0;
    left: 0; */
    width: 500px;
    z-index: 4;
    box-shadow: 1px 6px 20px #e2e2e2;

    .drop__footer {
        display: flex;
        justify-content: flex-end;
    }
`;

import styled from "styled-components";

export const HorariosFormWrapper = styled.div`
    margin-top: 20px;

    .hor__out {
        display: flex;
        flex-direction: column;
    }
`;

export const HorForm = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
    align-items: center;
`;

export const HorAddMore = styled.div`
    padding: 10px;
    align-self: flex-end;
`;

export const HorDelete = styled.div`
    align-self: center;
    cursor: pointer;
    margin-top: 23px;

    &:hover {
        svg {
            transform: scale(1.2);
        }
    }
`;

export const HorFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 5px;

    input {
        font-size: 19px;
    }
`;

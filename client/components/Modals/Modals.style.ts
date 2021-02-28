import styled from "styled-components";

export const ModalContainer = styled.div`
    padding: 2rem 5rem;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
`;

export const getColor = (props: any) => {
    if (props.children.props.isDragAccept) {
        return "#00e676";
    }
    if (props.children.props.isDragReject) {
        return "#ff1744";
    }
    if (props.children.props.isDragActive) {
        return "#2196f3";
    }
    return "#eeeeee";
};

export const DropContainer = styled.div`
    margin: 30px 0 5px;
    padding: 20px;
    border: 2px dashed ${(props) => getColor(props)};
    background-color: #fafafa;

    input {
        outline: none;
    }
`;

export const DropFilesMessage = styled.p`
    font-size: 14px;
    margin-bottom: 20px;
    color: #b1b1b1;
    text-align: right;

    span {
        color: #ff4338;
        font-family: sans-serif;
    }
`;

export const getColor = (props: any) => {
    if (props.children.props.isDragAccept) {
        return "border-green-600";
    }
    if (props.children.props.isDragReject) {
        return "border-red-600";
    }
    if (props.children.props.isDragActive) {
        return "border-orange";
    }
    return "border-orange";
};

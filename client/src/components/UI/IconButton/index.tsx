interface IconButtonProps {
    text?: string;
    icon?: React.ReactElement;
    smaller?: boolean;
    classes?: string;
    onClick?: () => any;
}

const IconButton: React.FC<IconButtonProps> = ({
    text,
    icon,
    smaller = false,
    classes,
    onClick,
}) => {
    return (
        <div
            onClick={onClick}
            className={`flex rounded-xl cursor-pointer ${
                smaller ? "p-2" : "p-2"
            } bg-gray-100 items-center justify-center hover:bg-gray-50 ${classes}`}
        >
            {icon && (
                <div className={`${text && "mr-2"} bg-white rounded-3xl p-2`}>
                    {icon}
                </div>
            )}
            {text && (
                <h5 className={`${smaller ? "text-sm" : "text-base"} px-2`}>
                    {text}
                </h5>
            )}
        </div>
    );
};
export default IconButton;

interface IconButtonProps {
    text?: string;
    icon?: React.ReactElement;
    smaller?: boolean;
    classes?: string;
    onClick?: () => any;
    isActive?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
    text,
    icon,
    smaller = false,
    classes,
    onClick,
    isActive = true,
}) => {
    return (
        <div
            onClick={onClick}
            className={`flex rounded-xl cursor-pointer ${
                smaller ? "p-2" : "p-2"
            } bg-gray-100 items-center justify-center hover:bg-gray-50 ${
                !isActive
                    ? "opacity-25 pointer-events-none cursor-not-allowed"
                    : ""
            } ${classes}`}
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

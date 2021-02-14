import { IconButtonWrapper } from "./IconButton.style";
import { MdExpandMore } from "react-icons/md";

interface IconButtonProps {
    text?: string;
    icon?: React.ReactElement;
    hasChevron?: boolean;
    onClick?: () => any;
}

export default function IconButton({
    text,
    icon,
    hasChevron,
    onClick,
}: IconButtonProps) {
    return (
        <IconButtonWrapper onClick={onClick}>
            {icon && <div className="icb__icon">{icon}</div>}
            {text && (
                <div className="icb__text">
                    <p>{text}</p>
                </div>
            )}
            {hasChevron && <MdExpandMore size={17} color="#A0A0A0" />}
        </IconButtonWrapper>
    );
}

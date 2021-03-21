import { SideBarMenuLinkWrapper } from "./SideBarMenuLink";
import { MdChevronRight } from "react-icons/md";

interface SideBarMenuLinkProps {
    icon?: React.ReactElement;
    text: string;
    hasChevron?: boolean;
}

const SideBarMenuLink: React.FC<SideBarMenuLinkProps> = ({
    icon,
    text,
    hasChevron = false,
}: SideBarMenuLinkProps) => {
    return (
        <SideBarMenuLinkWrapper>
            {icon && <div className="link__icon">{icon}</div>}
            <div className="link__text">
                <h6>{text}</h6>
            </div>
            {hasChevron && <MdChevronRight size={14} />}
        </SideBarMenuLinkWrapper>
    );
};
export default SideBarMenuLink;

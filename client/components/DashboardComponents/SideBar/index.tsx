import { useState } from "react";
import { Divider } from "../../../styles/helpers";
import { checkIfUndefined } from "../../../utils/checkIfUndefined";
import Avatar from "../../Avatar";
import SideBarMenu from "../SideBarMenu";
import { SideBarWrapper } from "./SideBar.style";
import { AiOutlineEdit } from "react-icons/ai";
import { Reoverlay } from "reoverlay";
import ChangeAvatarModal from "../../Modals/ChangeAvatar";
import ReactTooltip from "react-tooltip";
import useWindowSize from "../../../hooks/useWindowSize";
import IconButton from "../../IconButton";
import { GiHamburgerMenu } from "react-icons/gi";
import Side from "../../Side";

interface SideBarProps {
    user: any;
}

const SideBar: React.FC<SideBarProps> = ({ user }: SideBarProps) => {
    const [isMobileMenuOpen, setIsMenuMobileOpen] = useState(false);
    const { width } = useWindowSize();
    const changeAvatar = () => {
        Reoverlay.showModal(ChangeAvatarModal, {
            userId: user.id,
        });
    };

    return (
        <>
            <SideBarWrapper>
                <div className="side__info">
                    <div
                        className="info__avatar"
                        onClick={changeAvatar}
                        data-tip="Alterar seu avatar"
                        data-for="avatar"
                    >
                        <AiOutlineEdit size={44} className="avatar__edit" />
                        <Avatar avatar={user.avatar} />
                        <ReactTooltip
                            id="avatar"
                            effect="float"
                            place="right"
                        />
                    </div>
                    <h2>{checkIfUndefined(user.name)}</h2>
                    <h4>{checkIfUndefined(user.country)}</h4>
                    <Divider color="#FF4338" />
                </div>
                {width > 1024 ? (
                    <SideBarMenu tutor={user.tutor} />
                ) : (
                    <IconButton
                        text="Menu"
                        icon={<GiHamburgerMenu size={20} />}
                        bColor="rgba(255, 67, 56, 0.56)"
                        color="#fff"
                        onClick={() => setIsMenuMobileOpen(!isMobileMenuOpen)}
                    />
                )}
            </SideBarWrapper>
            <Side
                isOpen={isMobileMenuOpen}
                onClickClose={() => setIsMenuMobileOpen(!isMobileMenuOpen)}
                header={{}}
                ignoreCloseOutside
            >
                <SideBarMenu tutor={user.tutor} />
            </Side>
        </>
    );
};
export default SideBar;

import { Divider } from "../../../styles/helpers";
import { checkIfUndefined } from "../../../utils/checkIfUndefined";
import Avatar from "../../Avatar";
import SideBarMenu from "../SideBarMenu";
import { SideBarWrapper } from "./SideBar.style";
import { AiOutlineEdit } from "react-icons/ai";
import { Reoverlay } from "reoverlay";
import ChangeAvatarModal from "../../Modals/ChangeAvatar";
import ReactTooltip from "react-tooltip";

interface SideBarProps {
    user: any;
}

const SideBar: React.FC<SideBarProps> = ({ user }: SideBarProps) => {
    const changeAvatar = () => {
        Reoverlay.showModal(ChangeAvatarModal, {
            userId: user.id,
        });
    };

    return (
        <SideBarWrapper>
            <div className="side__info">
                <div
                    className="info__avatar"
                    onClick={changeAvatar}
                    data-tip="Alterar seu avatar"
                >
                    <Avatar avatar={user.avatar} />
                    <AiOutlineEdit size={44} className="avatar__edit" />
                    <ReactTooltip />
                </div>
                <h2>{checkIfUndefined(user.name)}</h2>
                <h4>{checkIfUndefined(user.country)}</h4>
                <Divider color="#FF4338" />
            </div>
            <SideBarMenu tutor={user.tutor} />
        </SideBarWrapper>
    );
};
export default SideBar;

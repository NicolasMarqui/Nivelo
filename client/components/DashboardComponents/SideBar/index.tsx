import { Divider } from "../../../styles/helpers";
import { checkIfUndefined } from "../../../utils/checkIfUndefined";
import Avatar from "../../Avatar";
import SideBarMenu from "../SideBarMenu";
import { SideBarWrapper } from "./SideBar.style";

interface SideBarProps {
    user: any;
}

const SideBar: React.FC<SideBarProps> = ({ user }: SideBarProps) => {
    return (
        <SideBarWrapper>
            <div className="side__info">
                <Avatar avatar={user.avatar} />
                <h2>{checkIfUndefined(user.name)}</h2>
                <h4>
                    {checkIfUndefined(user.city)} -{" "}
                    {checkIfUndefined(user.country)}
                </h4>
                <Divider color="#FF4338" />
            </div>
            <SideBarMenu tutor={user.tutor} />
        </SideBarWrapper>
    );
};
export default SideBar;

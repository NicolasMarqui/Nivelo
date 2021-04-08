import { checkAvatar } from "@utils/checkAvatar";
import { AiOutlineEdit } from "react-icons/ai";
import { MeQuery } from "src/generated/graphql";
import SidebarMenu from "../SidebarMenu";
import Tooltip from "react-tooltip";
import { Reoverlay } from "reoverlay";
import ChangeAvatar from "@components/Modals/ChangeAvatar";
import { shortUserName } from "@utils/shortUserName";

interface SidebarProps {
    user: MeQuery;
}

const Sidebar: React.FC<SidebarProps> = ({ user }) => {
    const { avatar, name, country, tutor, id } = user.me;

    return (
        <div className="flex flex-col justify-center p-9">
            <div className="-mt-20 flex flex-col justify-center items-center w-full">
                <div
                    className="relative c__avatarWrapper cursor-pointer group"
                    data-tip="Clique para alterar seu avatar"
                    data-for="changeAvatar"
                    onClick={() =>
                        Reoverlay.showModal(ChangeAvatar, { userId: id })
                    }
                >
                    <img
                        src={checkAvatar(avatar, name)}
                        className="border-4 border-orange rounded-full group-hover:opacity-50 object-cover h-32 w-32"
                    />
                    <div className="c__changeAvatar">
                        <AiOutlineEdit size={50} />
                    </div>
                    <Tooltip id="changeAvatar" />
                </div>

                <div>
                    <h2
                        className="mt-4 font-bold text-xl md:text-3xl text-black222"
                        data-for="userName"
                        data-tip={name}
                    >
                        {shortUserName(name)}
                    </h2>
                    <Tooltip id="userName" effect="solid" place="bottom" />
                </div>
                <p className="my-1 text-gray-400 text-center text-base">
                    {country}
                </p>
            </div>
            <div className="mt-3 flex flex-col">
                <SidebarMenu isTutor={!!tutor} />
            </div>
        </div>
    );
};
export default Sidebar;

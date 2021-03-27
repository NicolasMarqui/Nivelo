import { MeQuery } from "src/generated/graphql";
import Image from "next/image";
import { checkAvatar } from "@utils/checkAvatar";
import { MdSchool, MdSupervisorAccount } from "react-icons/md";
import SidebarMenu from "../SidebarMenu";

interface SidebarProps {
    user: MeQuery;
}

const Sidebar: React.FC<SidebarProps> = ({ user }) => {
    const { avatar, name, country, classes, followersAmount, tutor } = user.me;

    return (
        <div className="flex flex-col justify-center p-9">
            <div className="-mt-20 flex flex-col justify-center items-center w-full">
                <img
                    src={checkAvatar(avatar, name)}
                    width={120}
                    height={120}
                    className="border-4 border-orange rounded-full"
                />

                <h2 className="mt-4 font-bold text-xl md:text-3xl text-black222">
                    {name}
                </h2>
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

import BgIcon from "@components/UI/BgIcon";
import { useRouter } from "next/router";
import { AiOutlineEdit } from "react-icons/ai";
import Tooltip from "react-tooltip";
import { MdEventAvailable } from "react-icons/md";
import { RiMoneyEuroCircleLine } from "react-icons/ri";

interface ShortcutUserProps {}

const ShortcutUser: React.FC<ShortcutUserProps> = ({}) => {
    const router = useRouter();

    return (
        <div className="flex flex-wrap mt-3 justify-center md:justify-start">
            <div
                className="flex-none mx-1 cursor-pointer"
                data-for="edit"
                data-tip="Editar sua conta"
            >
                <BgIcon
                    icon={<AiOutlineEdit size={20} />}
                    bgColor="rgba(231, 111, 81, 0.31)"
                />
                <Tooltip id="edit" />
            </div>
            <div
                className="flex-none mx-1 cursor-pointer"
                data-for="classesU"
                data-tip="Suas Aulas"
            >
                <BgIcon
                    icon={<MdEventAvailable size={20} />}
                    bgColor="rgba(87, 204, 153, 0.31)"
                />
                <Tooltip id="classesU" />
            </div>
            <div
                className="flex-none mx-1 cursor-pointer"
                data-for="pedU"
                data-tip="Seus Pedidos"
            >
                <BgIcon
                    icon={<RiMoneyEuroCircleLine size={20} />}
                    bgColor="rgba(131, 144, 250, 0.31)"
                />
                <Tooltip id="pedU" />
            </div>
        </div>
    );
};
export default ShortcutUser;

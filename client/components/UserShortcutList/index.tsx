import { useRef } from "react";
import { BsPencil, BsPlusCircle } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import ReactTooltip from "react-tooltip";
import { BoxIcon } from "../../styles/helpers";
import IconButton from "../IconButton";
import { UserShortcutListWrapper } from "./UserShortcutList.style";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaUserGraduate } from "react-icons/fa";
import { useRouter } from "next/router";
import useSmoothScroll from "react-smooth-scroll-hook";

interface UserShortcutListProps {
    isTutor: boolean | null;
}

const UserShortcutList: React.FC<UserShortcutListProps> = ({ isTutor }) => {
    const router = useRouter();

    const ref = useRef<HTMLElement>(document.documentElement);
    const { scrollTo } = useSmoothScroll({
        ref,
        speed: 100,
        direction: "y",
    });

    const handleScrollPedido = () => scrollTo("#pedidos");

    return (
        <UserShortcutListWrapper>
            <ul>
                <li
                    data-tip="Minhas aulas"
                    data-for="aulas"
                    onClick={() => router.push("/dashboard/classes")}
                >
                    <div className="short__item">
                        <BoxIcon bColor="rgba(231, 111, 81, 0.31)">
                            <BsPencil size={25} color="#FF4338" />
                        </BoxIcon>
                    </div>
                    <ReactTooltip id="aulas" />
                </li>
                <li
                    data-tip="Editar minhas informações"
                    data-for="info"
                    onClick={() => router.push("/dashboard/account")}
                >
                    <div className="short__item">
                        <BoxIcon bColor="rgba(87, 204, 153, 0.31)">
                            <HiOutlinePencilAlt size={25} color="#57CC99" />
                        </BoxIcon>
                    </div>
                    <ReactTooltip id="info" />
                </li>
                <li
                    data-tip="Meus pedidos"
                    data-for="pag"
                    onClick={handleScrollPedido}
                >
                    <div className="short__item">
                        <BoxIcon bColor="rgba(251, 71, 94, 0.31)">
                            <MdAttachMoney size={25} color="#FB475E" />
                        </BoxIcon>
                    </div>
                    <ReactTooltip id="pag" />
                </li>
                {isTutor && (
                    <li
                        data-tip="Minha área tutor"
                        data-for="tutor"
                        onClick={() => router.push("/dashboard/tutor")}
                    >
                        <div className="short__item">
                            <BoxIcon bColor="rgba(131, 144, 250, 0.31)">
                                <FaUserGraduate size={25} color="#8390FA" />
                            </BoxIcon>
                        </div>
                        <ReactTooltip id="tutor" />
                    </li>
                )}
            </ul>
        </UserShortcutListWrapper>
    );
};
export default UserShortcutList;

import Link from "next/link";
import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { MdEventAvailable, MdFavoriteBorder } from "react-icons/md";
import { FiBookOpen } from "react-icons/fi";
import { GiTeacher } from "react-icons/gi";
import { BiPencil, BiBookAdd } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { useRouter } from "next/router";
import checkIfActive from "@utils/checkIfActive";

interface SidebarMenuProps {
    isTutor: boolean;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ isTutor }) => {
    const router = useRouter();

    return (
        <div className="relative side__menu">
            <div className="my-4">
                <h6 className="text-sm text-gray-300">Inicío</h6>
                <ul className="mt-1">
                    <li
                        className={`${checkIfActive(
                            router.pathname,
                            "/dashboard"
                        )}`}
                    >
                        <Link href="/dashboard">
                            <a className="flex justify-start p-2">
                                <IoHomeOutline
                                    size={17}
                                    className="mt-1 mr-2"
                                />
                                Home
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>

            {isTutor && (
                <div className="my-4">
                    <h6 className="text-sm text-gray-300">Sua área</h6>
                    <ul className="mt-1">
                        <li
                            className={` ${checkIfActive(
                                router.pathname,
                                "/dashboard/tutor"
                            )}`}
                        >
                            <Link href="/dashboard/tutor">
                                <a className="flex justify-start text-black222 p-2">
                                    <FaUserGraduate
                                        size={17}
                                        className="mt-1 mr-2"
                                    />
                                    Tutor
                                </a>
                            </Link>
                        </li>
                        <li
                            className={`my-4 ${checkIfActive(
                                router.pathname,
                                "/dashboard/tutor/calendar"
                            )}`}
                        >
                            <Link href="/dashboard/tutor/calendar">
                                <a className="flex justify-start text-black222 p-2">
                                    <MdEventAvailable
                                        size={17}
                                        className="mt-1 mr-2"
                                    />
                                    Seu calendário
                                </a>
                            </Link>
                        </li>
                        <li className="my-4  p-2">
                            <Link href="/dashboard/tutor#info">
                                <a className="flex justify-start text-black222">
                                    <AiOutlineInfoCircle
                                        size={17}
                                        className="mt-1 mr-2"
                                    />
                                    Suas Informações
                                </a>
                            </Link>
                        </li>
                        <li className="my-4  p-2">
                            <Link href="/dashboard/tutor#classes">
                                <a className="flex justify-start text-black222">
                                    <BiBookAdd
                                        size={17}
                                        className="mt-1 mr-2"
                                    />
                                    Suas Aulas
                                </a>
                            </Link>
                        </li>
                        <li
                            className={`my-4 ${checkIfActive(
                                router.pathname,
                                "/dashboard/tutor/orders"
                            )}`}
                        >
                            <Link href="/dashboard/tutor/orders">
                                <a className="flex justify-start text-black222 p-2">
                                    <RiMoneyEuroCircleLine
                                        size={17}
                                        className="mt-1 mr-2"
                                    />
                                    Seus Pedidos
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};
export default SidebarMenu;

import { SideBarMenuGroup, SideBarMenuWrapper } from "./SideBarSMenu.style";
import Link from "next/link";
import SideBarMenuLink from "../SideBarMenuLink";
import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { MdEventAvailable, MdFavoriteBorder } from "react-icons/md";
import { FiBookOpen } from "react-icons/fi";
import { GiTeacher } from "react-icons/gi";
import { BiPencil, BiBookAdd } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";
import { PillButton } from "../../../styles/helpers";

interface SideBarMenuProps {
    tutor: any | null;
}

const SideBarMenu: React.FC<SideBarMenuProps> = ({
    tutor,
}: SideBarMenuProps) => {
    return (
        <SideBarMenuWrapper>
            <SideBarMenuGroup>
                <h5>Início</h5>
                <ul>
                    <li>
                        <Link href="/dashboard">
                            <a>
                                <SideBarMenuLink
                                    text="Home"
                                    hasChevron={true}
                                    icon={<IoHomeOutline size={17} />}
                                />
                            </a>
                        </Link>
                    </li>
                </ul>
            </SideBarMenuGroup>
            {tutor && (
                <SideBarMenuGroup>
                    <h5>Sua área</h5>
                    <ul>
                        <li>
                            <Link href="/dashboard/tutor">
                                <a>
                                    <SideBarMenuLink
                                        text="Tutor"
                                        hasChevron={true}
                                        icon={<FaUserGraduate size={17} />}
                                    />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/tutor/calendar">
                                <a>
                                    <SideBarMenuLink
                                        text="Seu calendário"
                                        hasChevron={true}
                                        icon={<MdEventAvailable size={17} />}
                                    />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/tutor#info">
                                <a>
                                    <SideBarMenuLink
                                        text="Suas informações"
                                        hasChevron={true}
                                        icon={<AiOutlineInfoCircle size={17} />}
                                    />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/tutor#classes">
                                <a>
                                    <SideBarMenuLink
                                        text="Suas aulas"
                                        hasChevron={true}
                                        icon={<BiBookAdd size={17} />}
                                    />
                                </a>
                            </Link>
                        </li>
                    </ul>
                </SideBarMenuGroup>
            )}
            <SideBarMenuGroup>
                <h5>Configurações</h5>
                <ul>
                    <li>
                        <Link href="/dashboard/account">
                            <a>
                                <SideBarMenuLink
                                    text="Editar minha conta"
                                    hasChevron={true}
                                    icon={<AiOutlineSetting size={17} />}
                                />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/classes">
                            <a>
                                <SideBarMenuLink
                                    text="Minha Aulas"
                                    hasChevron={true}
                                    icon={<FiBookOpen size={17} />}
                                />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/classes">
                            <a>
                                <SideBarMenuLink
                                    text="Meus Professores"
                                    hasChevron={true}
                                    icon={<GiTeacher size={17} />}
                                />
                            </a>
                        </Link>
                    </li>
                </ul>
            </SideBarMenuGroup>
            <SideBarMenuGroup>
                <h5>Misc</h5>
                <ul>
                    <li>
                        <Link href="/dashboard/account">
                            <a>
                                <SideBarMenuLink
                                    text="Favoritos"
                                    hasChevron={true}
                                    icon={<MdFavoriteBorder size={17} />}
                                />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/classes">
                            <a>
                                <SideBarMenuLink
                                    text="Feedbacks"
                                    hasChevron={true}
                                    icon={<BiPencil size={17} />}
                                />
                            </a>
                        </Link>
                    </li>
                </ul>
            </SideBarMenuGroup>
            <SideBarMenuGroup>
                <h5>Logout</h5>
                <PillButton bgColor="#fb475e">Desconectar</PillButton>
            </SideBarMenuGroup>
        </SideBarMenuWrapper>
    );
};
export default SideBarMenu;

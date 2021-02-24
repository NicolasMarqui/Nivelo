import { SideBarMenuGroup, SideBarMenuWrapper } from "./SideBarSMenu.style";
import Link from "next/link";
import SideBarMenuLink from "../SideBarMenuLink";
import { AiOutlineSetting } from "react-icons/ai";
import { MdEventAvailable, MdFavoriteBorder } from "react-icons/md";
import { FiBookOpen } from "react-icons/fi";
import { GiTeacher } from "react-icons/gi";
import { BiPencil } from "react-icons/bi";
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
                <h5>Configurações</h5>
                <ul>
                    <li>
                        <Link href="/dashboard/account">
                            <SideBarMenuLink
                                text="Editar minha conta"
                                hasChevron={true}
                                icon={<AiOutlineSetting size={17} />}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/classes">
                            <SideBarMenuLink
                                text="Minha Aulas"
                                hasChevron={true}
                                icon={<FiBookOpen size={17} />}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/classes">
                            <SideBarMenuLink
                                text="Meus Professores"
                                hasChevron={true}
                                icon={<GiTeacher size={17} />}
                            />
                        </Link>
                    </li>
                </ul>
            </SideBarMenuGroup>
            <SideBarMenuGroup>
                <h5>Misc</h5>
                <ul>
                    <li>
                        <Link href="/dashboard/account">
                            <SideBarMenuLink
                                text="Favoritos"
                                hasChevron={true}
                                icon={<MdFavoriteBorder size={17} />}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/classes">
                            <SideBarMenuLink
                                text="Feedbacks"
                                hasChevron={true}
                                icon={<BiPencil size={17} />}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/calendar">
                            <SideBarMenuLink
                                text="Calendário"
                                hasChevron={true}
                                icon={<MdEventAvailable size={17} />}
                            />
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

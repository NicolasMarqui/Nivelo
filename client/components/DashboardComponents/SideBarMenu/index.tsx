import { SideBarMenuGroup, SideBarMenuWrapper } from "./SideBarSMenu.style";
import Link from "next/link";
import SideBarMenuLink from "../SideBarMenuLink";
import { AiOutlineSetting } from "react-icons/ai";

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
                                text="Minha conta"
                                hasChevron={true}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/classes">
                            <SideBarMenuLink
                                text="Minha Aulas"
                                hasChevron={true}
                            />
                        </Link>
                    </li>
                </ul>
            </SideBarMenuGroup>
            <SideBarMenuGroup>
                <h5>Configurações</h5>
                <ul>
                    <li>
                        <Link href="/dashboard/account">
                            <SideBarMenuLink
                                text="Minha conta"
                                hasChevron={true}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/classes">
                            <SideBarMenuLink
                                text="Minha Aulas"
                                hasChevron={true}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/calendar">
                            <SideBarMenuLink
                                text="Calendário"
                                hasChevron={true}
                            />
                        </Link>
                    </li>
                </ul>
            </SideBarMenuGroup>
        </SideBarMenuWrapper>
    );
};
export default SideBarMenu;

import { UserDropdownWrapper } from "./UserDropdown.style";
import Link from "next/link";
import {
    FaUser,
    FaRegCalendarAlt,
    FaUserEdit,
    FaRegHeart,
    FaChalkboardTeacher,
} from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { BiChat } from "react-icons/bi";
import { CgLogOut } from "react-icons/cg";
import { GoMortarBoard } from "react-icons/go";
interface UserDropdownProps {
    user?:
        | {
              email: string;
              id: number;
              name: string;
              platforms?: [] | null;
              tutor?: null | any;
          }
        | null
        | undefined;
}

export default function UserDropdown({ user }: UserDropdownProps) {
    return (
        <UserDropdownWrapper>
            <div className="drop__group">
                <h3 className="drop__title">Conta</h3>
                <ul>
                    <Link href="/dashboard">
                        <li>
                            <FaUser size={20} />
                            <p>Minha conta</p>
                        </li>
                    </Link>
                    <Link href="/dashboard/classes">
                        <li>
                            <ImBooks size={20} />
                            <p>Aulas</p>
                        </li>
                    </Link>
                    <Link href="/dashboard/calendar">
                        <li>
                            <FaRegCalendarAlt size={20} />
                            <p>Calendário</p>
                        </li>
                    </Link>
                </ul>
            </div>
            {user && user.tutor && user.tutor !== null && (
                <div className="drop__group">
                    <h3 className="drop__title">Tutor</h3>
                    <ul>
                        <Link href="/dashboard/profile">
                            <li>
                                <FaChalkboardTeacher size={20} />
                                <p>Editar</p>
                            </li>
                        </Link>
                        <Link href="/dashboard/favorites">
                            <li>
                                <GoMortarBoard size={20} />
                                <p>Minhas aulas</p>
                            </li>
                        </Link>
                    </ul>
                </div>
            )}
            <div className="drop__group">
                <h3 className="drop__title">Configurações</h3>
                <ul>
                    <Link href="/dashboard/profile">
                        <li>
                            <FaUserEdit size={20} />
                            <p>Editar conta</p>
                        </li>
                    </Link>
                    <Link href="/dashboard/favorites">
                        <li>
                            <FaRegHeart size={20} />
                            <p>Favoritos</p>
                        </li>
                    </Link>
                    <Link href="/dashboard/chat">
                        <li>
                            <BiChat size={20} />
                            <p>Chat</p>
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="drop__group">
                <ul>
                    <Link href="/logout">
                        <li className="group__color">
                            <CgLogOut size={20} color="#fff" />
                            <p>Desconectar</p>
                        </li>
                    </Link>
                </ul>
            </div>
        </UserDropdownWrapper>
    );
}

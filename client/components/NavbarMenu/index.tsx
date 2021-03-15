import { useState } from "react";
import { Menu } from "./NavbarMenu.style";
import Link from "next/link";
import Dropdown from "../Dropdown";
import UserDropdown from "../UserDropdown";
import Skeleton from "react-loading-skeleton";
import { FaUserGraduate } from "react-icons/fa";

interface NavBarMenuProps {
    data: any;
    fetching: boolean;
}

const NavBarMenu: React.FC<NavBarMenuProps> = ({ data, fetching }) => {
    const [hoverUser, setHoverUser] = useState(false);

    return (
        <Menu>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/tutors">
                    <a>Tutores</a>
                </Link>
            </li>
            <li>
                <Link href="/how-it-works">
                    <a>Como funciona?</a>
                </Link>
            </li>
            <li>
                <Link href="/become-tutor">
                    <a>Seja um tutor!</a>
                </Link>
            </li>
            {fetching ? (
                <li>
                    <Skeleton height={30} width={90} />
                </li>
            ) : data && data.me ? (
                <>
                    <li
                        className="hover__2 no__hover bg__icon has__dropdown"
                        onMouseEnter={() =>
                            setTimeout(() => setHoverUser(true), 50)
                        }
                        onMouseLeave={() => setHoverUser(false)}
                    >
                        <Link
                            href={
                                data.me.tutor
                                    ? "/dashboard/tutor"
                                    : "/dashboard"
                            }
                        >
                            <a>
                                <FaUserGraduate size={24} color="red" />
                            </a>
                        </Link>

                        <Dropdown
                            isVisible={hoverUser}
                            mouseOut={() => setHoverUser(!hoverUser)}
                        >
                            {/* @ts-ignore */}
                            <UserDropdown user={data.me} />
                        </Dropdown>
                    </li>
                </>
            ) : (
                <>
                    <li className="navbar__dif">
                        <Link href="/login">
                            <a>Login</a>
                        </Link>
                    </li>
                    <li className="navbar__dif dif__sign">
                        <Link href="/signup">
                            <a>Register</a>
                        </Link>
                    </li>
                </>
            )}
        </Menu>
    );
};
export default NavBarMenu;

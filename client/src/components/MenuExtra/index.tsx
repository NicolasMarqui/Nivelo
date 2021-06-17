import Dropdown from "@components/UI/Dropdown";
import Link from "next/link";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import { MeQuery } from "src/generated/graphql";
import { MdExpandMore } from "react-icons/md";
import NavDropdown from "@components/NavDropdown";
import { useRouter } from "next/router";

interface MenuExtraProps {
    data: MeQuery;
    fetching: boolean;
    error: any;
}

const MenuExtra: React.FC<MenuExtraProps> = ({ data, fetching, error }) => {
    const router = useRouter();
    const [dropOpen, setDropOpen] = useState(false);

    return (
        <>
            {fetching || error ? (
                <li className="flex items-center ml-2">
                    <Skeleton height={30} width={40} className="mx-1" />
                    <Skeleton height={30} width={40} className="mx-1" />
                </li>
            ) : data && data.me ? (
                <li
                    className="my-2 md:my-0  md:mx-2 lg:mx-4 md:ml-5 group transform hover:scale-105"
                    onMouseOver={() => setDropOpen(true)}
                    onMouseOut={() => setDropOpen(false)}
                >
                    <Link href="/dashboard">
                        <a className="text-nav py-4 md:py-5 text-darkerOrange font-bold flex justify-start">
                            <FaUserCircle size={20} className="mx-2 mt-0.5" />
                            {router.locale === "pt"
                                ? "Minha Conta"
                                : "My Account"}
                            <MdExpandMore size={16} className="mx-2 mt-1" />
                        </a>
                    </Link>
                    <Dropdown
                        isOpen={dropOpen}
                        handleChange={() => setDropOpen(!dropOpen)}
                        classes="shadow-lg bg-primaryOrange top-10 w-auto z-40"
                    >
                        <NavDropdown isTutor={data.me.tutor !== null} />
                    </Dropdown>
                </li>
            ) : (
                <>
                    <li className="my-2 md:my-0  md:mx-2 lg:mx-4 md:ml-9 hoverMenu">
                        <Link href="/login">
                            <a className="text-nav md:text-sm lg:text-nav py-4 md:py-5 text-darkerOrange font-bold flex justify-start">
                                Login
                            </a>
                        </Link>
                    </li>
                    <li className="my-2 md:my-0  md:mx-2 lg:mx-4 flex items-center justify-start">
                        <Link href="/signup">
                            <a className="transition duration-500 ease-in-out text-nav md:text-sm lg:text-nav text-darkerOrange font-bold block border-2 border-orange rounded-3xl px-5 py-1 text-center hover:bg-primaryOrange hover:text-white cursor-pointer">
                                {router.locale === "pt"
                                    ? "Registrar"
                                    : "Register"}
                            </a>
                        </Link>
                    </li>
                </>
            )}
        </>
    );
};
export default MenuExtra;
